from django.urls import path
from . import views

urlpatterns = [
    path('products', views.products, name='products'),
    path('products/sendMessage', views.sendMessage, name='sendMessage'),
]
