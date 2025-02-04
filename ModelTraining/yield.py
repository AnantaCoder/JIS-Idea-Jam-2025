from flask import Flask, request, render_template
import numpy as np
import pickle
import sklearn
import joblib

# Print version of scikit-learn
print(sklearn.__version__)

# Loading models
dtr = joblib.load('Modelss/Final_CropYieldPrediction.pkl')
preprocessor = joblib.load('Modelss/Final_ProcessorCropYield.pkl')

# Flask app
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index_yield.html')

@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        # Getting form data
        Crop_Year = int(request.form['Crop_Year'])
        Area = float(request.form['Area'])
        Production = float(request.form['Production'])
        Annual_Rainfall = float(request.form['Annual_Rainfall'])
        Fertilizer = float(request.form['Fertilizer'])
        Pesticide = float(request.form['Pesticide'])
        Crop = request.form['Crop']
        Season = request.form['Season']
        State = request.form['State']

        # Create features array
        features = np.array([[Crop_Year, Area, Production, Annual_Rainfall, Fertilizer, Pesticide, Crop, Season, State]], dtype=object)
        
        # Transform features with the preprocessor
        transformed_features = preprocessor.transform(features)
        
        # Make prediction
        prediction = dtr.predict(transformed_features).reshape(1, -1)

        return render_template('index_yield.html', prediction=prediction[0][0])

if __name__ == "__main__":
    app.run(debug=True)
