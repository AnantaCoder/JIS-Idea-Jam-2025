from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import logging

# Initialize Flask app
app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Load the pre-trained model
try:
    model = joblib.load('RandomForestCropModel.pkl')
    logging.info("Model loaded successfully.")
except Exception as e:
    logging.error(f"Error loading model: {e}")
    raise

# Initialize the scaler
scaler = MinMaxScaler()

# Dummy data to fit the scaler (replace with actual training data if available)
dummy_data = np.array([[0, 0, 0, 0, 0, 0, 0], [100, 100, 100, 100, 100, 14, 300]])
scaler.fit(dummy_data)

@app.route('/')
def index():
    # Render the HTML form
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.get_json(force=True)
        logging.debug(f"Received data: {data}")

        # Validate input data
        required_fields = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing required fields'}), 400

        # Convert input data to numpy array
        crop_features = np.array([
            float(data['N']), float(data['P']), float(data['K']), 
            float(data['temperature']), float(data['humidity']), 
            float(data['ph']), float(data['rainfall'])
        ]).reshape(1, -1)

        # Scale features
        scaled_features = scaler.transform(crop_features)

        # Make prediction
        prediction = model.predict(scaled_features)
        logging.debug(f"Prediction: {prediction[0]}")

        # Return prediction as JSON response
        return jsonify({'predicted_crop': prediction[0]})

    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return jsonify({'error': 'An error occurred during prediction'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080, host='0.0.0.0')