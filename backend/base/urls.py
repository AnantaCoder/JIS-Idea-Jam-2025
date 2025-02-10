''' Urls for the base app'''

from django.urls import path
from . import views

# urlpatterns = [
#     path('', views.home, name='home'),
#     path('yield/', views.yield_prediction, name='yield_prediction'),
#     path('crop/', views.crop_prediction, name='crop_prediction'),
# ]

# new api urls 





urlpatterns = [
    path('yield-prediction/', views.yield_prediction_api),
    path('crop-prediction/', views.crop_prediction_api),
]