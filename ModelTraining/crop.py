from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('bestCrop.pkl')
targets = {0: "Wheat", 1: "Rice", 2: "Corn"}  # Update as needed

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        prediction = model.predict([np.array(list(data.values()))])
        return jsonify({'prediction': targets[prediction[0]]})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
