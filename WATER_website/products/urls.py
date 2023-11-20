from django.urls import path
from . import views
from .views import send_message_async

urlpatterns = [
    path('products', views.products, name='products'),
    path('products/sendMessage', send_message_async, name='send_message_async'),
]
