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
    latitude = models.DecimalField(max_digits=9, decimal_places=6, default=0)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, default=0)
    status = models.CharField(max_length=1, choices=[('A', 'Active'), ('I', 'Inactive')], default='A')

    def __str__(self)->str:
        return f'Stop {self.name}'

class RouteStop(models.Model):
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    stop = models.ForeignKey(Stop, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()
    status = models.CharField(max_length=1, choices=[('A', 'Active'), ('I', 'Inactive')], default='A')

    class Meta:
        unique_together = ['route', 'stop']
        unique_together = ['route', 'order']
    
    def __str__(self)->str:
        return f'Stop {self.stop.name} of Route {self.route.name}'