from django.shortcuts import render
from rest_framework import generics, status
from .serializer import RouteSerializer, StopSerializer, RouteStopSerializer
from .models import Route, Stop, RouteStop
from rest_framework.response import Response
# Create your views here.

class ListCreateRoutes(generics.ListCreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = RouteSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class RetrieveUpdateDeleteRoute(generics.RetrieveUpdateDestroyAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        route = self.get_object()
        serializer = RouteSerializer(route)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        route = self.get_object()
        data = request.data
        serializer = RouteSerializer(route, data=data, partial=True)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        route = self.get_object()

        if not route:
            return Response({'message': 'Route not found'}, status=status.HTTP_404_NOT_FOUND)

        route.delete()
        return Response({'message': 'Route deleted successfully'}, status=status.HTTP_200_OK)

class ListCreateStops(generics.ListCreateAPIView):
    queryset = Stop.objects.all()
    serializer_class = StopSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = StopSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class RetrieveUpdateDeleteStop(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stop.objects.all()
    serializer_class = StopSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        stop = self.get_object()
        serializer = StopSerializer(stop)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        stop = self.get_object()
        data = request.data
        serializer = StopSerializer(stop, data=data, partial=True)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        stop = self.get_object()

        if not stop:
            return Response({'message': 'Stop not found'}, status=status.HTTP_404_NOT_FOUND)

        stop.delete()
        return Response({'message': 'Stop deleted successfully'}, status=status.HTTP_200_OK)
    

class ListCreateRouteStops(generics.ListCreateAPIView):
    queryset = RouteStop.objects.all()
    serializer_class = RouteStopSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = RouteStopSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class RetrieveUpdateDeleteRouteStop(generics.RetrieveUpdateDestroyAPIView):
    queryset = RouteStop.objects.all()
    serializer_class = RouteStopSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        route_stop = self.get_object()
        serializer = RouteStopSerializer(route_stop)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        route_stop = self.get_object()
        data = request.data
        serializer = RouteStopSerializer(route_stop, data=data, partial=True)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        route_stop = self.get_object()

        if not route_stop:
            return Response({'message': 'RouteStop not found'}, status=status.HTTP_404_NOT_FOUND)

        route_stop.delete()
        return Response({'message': 'RouteStop deleted successfully'}, status=status.HTTP_200_OK)