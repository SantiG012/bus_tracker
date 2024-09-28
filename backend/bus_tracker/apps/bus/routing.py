from django.urls import path
from .consumer import BusLocationConsumer

websocket_urlpatterns = [
    path('ws/<str:bus_id>/position', BusLocationConsumer.as_asgi())
]