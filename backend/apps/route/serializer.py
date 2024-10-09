from rest_framework import serializers
from .models import Route, Stop, RouteStop

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'

class StopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stop
        fields = '__all__'

class RouteStopSerializer(serializers.ModelSerializer):
    route_name = serializers.SlugRelatedField(source='route', slug_field='name', read_only=True)
    stop_name = serializers.SlugRelatedField(source='stop', slug_field='name', read_only=True)
    class Meta:
        model = RouteStop
        fields = '__all__'