from rest_framework import serializers
from apps.route.serializer import RouteSerializer
from .models import Bus
from apps.route.models import Route
import json
from django.forms.models import model_to_dict

class BusSerializer(serializers.ModelSerializer):
    current_route = serializers.PrimaryKeyRelatedField(queryset=Route.objects.all(), allow_null=True, many=False)

    class Meta:
        model = Bus
        fields = ['id', 'plate', 'status', 'current_latitude', 'current_longitude', 'current_route']

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ['latitude', 'longitude', 'updated_at']