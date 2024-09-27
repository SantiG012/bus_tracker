from django.shortcuts import render
from rest_framework import generics, status
from .serializer import StationSerializer
from .models import Station
from rest_framework.response import Response
# Create your views here.

class ListCreateStations(generics.ListCreateAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = StationSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class RetrieveUpdateDeleteStation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        station = self.get_object()
        serializer = StationSerializer(station)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        station = self.get_object()
        data = request.data
        serializer = StationSerializer(station, data=data, partial=True)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        station = self.get_object()

        if not station:
            return Response({'message': 'Station not found'}, status=status.HTTP_404_NOT_FOUND)

        station.delete()
        return Response({'message': 'Station deleted successfully'}, status=status.HTTP_200_OK)