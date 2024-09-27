from django.shortcuts import render
from rest_framework import generics, status
from .serializer import RouteSerializer
from .models import Route
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

