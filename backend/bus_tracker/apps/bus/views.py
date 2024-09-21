from rest_framework import generics, status
from .models import Bus, Location
from .serializer import BusSerializer, LocationSerializer

from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class ListCreateBuses(generics.ListAPIView):
  queryset = Bus.objects.all()
  serializer_class = BusSerializer
  
  def post(self, request, *args, **kwargs):
    a_bus= request.data
    data = BusSerializer(data=a_bus)
    if (data.is_valid()):
      data.save()
      return Response(data.validated_data, status=status.HTTP_200_OK)  
    
    return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)
  
class RetrieveUpdateDeleteBus(generics.RetrieveUpdateDestroyAPIView):
  queryset = Bus.objects.all()
  serializer_class = BusSerializer
  lookup_field = 'id'
  
  def get_object(self):
    """ get method """
    return get_object_or_404(Bus, id=self.kwargs['id'])
  
  def update(self, request, *args, **kwargs):
    a_bus = self.get_object()
    data = BusSerializer(a_bus, data=request.data, partial=True) # permite actualizacion parcial
    if data.is_valid():
      data.save()
      return Response(data.validated_data, status=status.HTTP_200_OK)
    return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)
  
  def delete(self, request, *args, **kwargs):
    a_bus = self.get_object()
    a_bus.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    

# TAREA2: Crear la vista para actualizar la ubicacion del bus

class UpdateLocation(generics.RetrieveUpdateAPIView):
  queryset = Bus.objects.all()
  serializer_class = BusSerializer
  lookup_field = 'id'
  
  # def get(self, request, *args, **kwargs):
  #   a_bus = self.get_object()
  #   llocation = Location.objects.filter(bus=a_bus).all()
  #   return Response(LocationSerializer(llocation, many=True).data, status=status.HTTP_200_OK)
  
  def patch(self, request, *args, **kwargs):
    a_bus = self.get_object()
    a_location = request.data.get('location')
    
    if not(a_location):
      return Response({
        "message": "location is required."
      }, status=status.HTTP_400_BAD_REQUEST)
      
    a_latitude = a_location.get('latitude')
    a_longitudine = a_location.get('longitude')
    
    if a_latitude is None or a_longitudine is None:
      return Response({
        "message": "Both latutude and longitude are required."
      }, status=status.HTTP_400_BAD_REQUEST)
    
    # patch bus
    a_bus.current_latitudine = a_latitude
    a_bus.current_longitudine = a_longitudine
    a_bus.save()
    
    ## create or update bus location     
    location = Location(bus=a_bus, latitude = a_latitude, longitude = a_longitudine)
    location.save()

    return Response({
        "message": "sucess",
        "bus": a_bus.plate,
        'location':{
          'latitude': location.latitude,
          'longitude': location.longitude
        }
    }, status=status.HTTP_400_BAD_REQUEST)
    
    