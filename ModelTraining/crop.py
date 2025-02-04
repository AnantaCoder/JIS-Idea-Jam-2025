from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import logging

app = Flask(__name__)

logging.basicConfig(level=logging.DEBUG)

try:
    
    model = joblib.load('Modelss/RandomForestCropModel.pkl')
    logging.info("Model loaded successfully.")
except Exception as e:
    logging.error(f"Error loading model: {e}")
    raise

scaler = MinMaxScaler()

dummy_data = np.array([[0, 0, 0, 0, 0, 0, 0], [100, 100, 100, 100, 100, 14, 300]])
scaler.fit(dummy_data)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        logging.debug(f"Received data: {data}")

        required_fields = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing required fields'}), 400

        crop_features = np.array([
            float(data['N']), float(data['P']), float(data['K']), 
            float(data['temperature']), float(data['humidity']), 
            float(data['ph']), float(data['rainfall'])
        ]).reshape(1, -1)

        scaled_features = scaler.transform(crop_features)

        prediction = model.predict(scaled_features)
        logging.debug(f"Prediction: {prediction[0]}")

        return jsonify({'predicted_crop': prediction[0]})

    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return jsonify({'error': 'An error occurred during prediction'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080, host='0.0.0.0')