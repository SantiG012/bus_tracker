from django.shortcuts import render
from rest_framework import generics, status
from .serializer import BusSerializer
from .models import Bus, Location
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

class ListCrateBuses(generics.ListAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serr = BusSerializer(data=data)

        if not serr.is_valid():
            return Response(serr.errors, status=status.HTTP_400_BAD_REQUEST)

        serr.save()
        return Response(serr.data, status=status.HTTP_201_CREATED)
    
class RetrieveUpdateDeleteBus(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        # Check if the bus exists
        bus = self.get_object()
        serializer = BusSerializer(bus)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
    def update(self, request, *args, **kwargs):
        # Check if the bus exists
        bus = self.get_object()
        data = request.data
        serializer = BusSerializer(bus, data=data, partial=True)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def delete(self, request, *args, **kwargs):
        bus = self.get_object()
        
        if not bus:
            return Response({'message': 'Bus not found'}, status=status.HTTP_404_NOT_FOUND)
        
        bus.delete()
        return Response({'message': 'Bus deleted successfully'}, status=status.HTTP_200_OK)
    

class UpdateLocation(generics.UpdateAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        a_bus = self.get_object()
        a_location = request.data.get('location')

        if not a_location:
            return Response({'message': 'location is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        latitude = a_location.get('latitude')
        longitude = a_location.get('longitude')

        if not latitude or not longitude:
            return Response({'message': 'latitude and longitude are required'}, status=status.HTTP_400_BAD_REQUEST)

        a_bus.current_latitude = latitude
        a_bus.current_longitude = longitude
        a_bus.save()

        # Create or update the location
        location = Location(bus=a_bus, latitude=latitude, longitude=longitude)
        location.save()

        return Response(
                {'message': 'Location updated successfully',
                 'bus': a_bus.plate,
                 'location': {
                     'latitude': location.latitude,
                     'longitude': location.longitude
                    }
                }, status=status.HTTP_200_OK
            )


