from django.shortcuts import render
import numpy as np
import joblib
import sklearn
# Create your views here.
from django.http import HttpResponse
from sklearn.preprocessing import MinMaxScaler


dtr = joblib.load('TrainedMLModels/Final_CropYieldPrediction.pkl')
preprocessor = joblib.load('TrainedMLModels/Final_ProcessorCropYield.pkl')
crop = joblib.load('TrainedMLModels/RandomForestCropModel.pkl')

# Initialize scaler for crop prediction with dummy data
crop_scaler = MinMaxScaler()
dummy_data = np.array([
    [0, 0, 0, 0, 0, 0, 0],
    [100, 100, 100, 100, 100, 14, 300]
])
crop_scaler.fit(dummy_data)

def home(request):
    return render(request, 'home.html')
    #  return HttpResponse("Welcome to CropSense!")


def yield_prediction(request):
    prediction = None  # Default value if no prediction is made yet
    if request.method == "POST":
        try:
            # Get form data from POST request
            Crop_Year = int(request.POST.get('Crop_Year'))
            Area = float(request.POST.get('Area'))
            Production = float(request.POST.get('Production'))
            Annual_Rainfall = float(request.POST.get('Annual_Rainfall'))
            Fertilizer = float(request.POST.get('Fertilizer'))
            Pesticide = float(request.POST.get('Pesticide'))
            Crop = request.POST.get('Crop')
            Season = request.POST.get('Season')
            State = request.POST.get('State')

            features = np.array([[Crop_Year, Area, Production, Annual_Rainfall, Fertilizer, Pesticide, Crop, Season, State]], dtype=object)
            
            transformed_features = preprocessor.transform(features)
            
            pred = dtr.predict(transformed_features).reshape(1,-1)
            prediction = pred[0][0]  
            
            
            
        except Exception as e:
            print("Error during prediction:", e)
            prediction = f"Error: {e}"

    return render(request, 'index.html', {'prediction': prediction})


def crop_prediction(request):
    prediction = None
    if request.method == "POST":
        try:
            N = float(request.POST.get('N'))
            P_value = float(request.POST.get('P'))
            K = float(request.POST.get('K'))
            temperature = float(request.POST.get('temperature'))
            humidity = float(request.POST.get('humidity'))
            ph = float(request.POST.get('ph'))
            rainfall = float(request.POST.get('rainfall'))
            
            crop_features = np.array([[N, P_value, K, temperature, humidity, ph, rainfall]])
            scaled_features = crop_scaler.transform(crop_features)
            pred = crop.predict(scaled_features)
            prediction = pred[0]
            
        except Exception as e:
            print("Error during crop prediction:", e)
            prediction = f"Error: {e}"
    
    return render(request, 'crop.html', {'crop_prediction': prediction})
