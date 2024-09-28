from rest_framework import serializers
from .models import Bus

class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ['latitude', 'longitude', 'updated_at']