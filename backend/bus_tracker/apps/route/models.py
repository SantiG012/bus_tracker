from django.db import models
from apps.station.models import Station

# Create your models here.
class Route(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(max_length=1, choices=[('A', 'Active'), ('I', 'Inactive')], default='A')

    def __str__(self)->str:
        return f'Route {self.name}'


class Stop(models.Model):
    name = models.CharField(max_length=100)
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    status = models.CharField(max_length=1, choices=[('A', 'Active'), ('I', 'Inactive')], default='A')

    def __str__(self)->str:
        return f'Stop {self.name} of Route {self.route.name} at {self.station.name}'
