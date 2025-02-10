# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import numpy as np
import joblib
from sklearn.preprocessing import MinMaxScaler

# Load models (keep your existing loading code)
dtr = joblib.load('TrainedMLModels/Final_CropYieldPrediction.pkl')
preprocessor = joblib.load('TrainedMLModels/Final_ProcessorCropYield.pkl')
crop = joblib.load('TrainedMLModels/RandomForestCropModel.pkl')

# Crop scaler (keep your existing scaler code)
crop_scaler = MinMaxScaler()
dummy_data = np.array([[0, 0, 0, 0, 0, 0, 0], [100, 100, 100, 100, 100, 14, 300]])
crop_scaler.fit(dummy_data)

@api_view(['POST'])
def yield_prediction_api(request):
    try:
        data = request.data
        # Convert input data to proper types
        features = np.array([
            [
                int(data['Crop_Year']),
                float(data['Area']),
                float(data['Production']),
                float(data['Annual_Rainfall']),
                float(data['Fertilizer']),
                float(data['Pesticide']),
                data['Crop'],
                data['Season'],
                data['State']
            ]
        ], dtype=object)

        transformed_features = preprocessor.transform(features)
        pred = dtr.predict(transformed_features).reshape(1, -1)
        
        return Response({'prediction': float(pred[0][0])}, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def crop_prediction_api(request):
    try:
        data = request.data
        crop_features = np.array([
            [
                float(data['N']),
                float(data['P']),
                float(data['K']),
                float(data['temperature']),
                float(data['humidity']),
                float(data['ph']),
                float(data['rainfall'])
            ]
        ])
        
        scaled_features = crop_scaler.transform(crop_features)
        pred = crop.predict(scaled_features)
        
        return Response({'prediction': str(pred[0])}, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)