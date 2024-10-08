from django.db import models
from apps.route.models import Route

# Create your models here.

class Bus(models.Model):
    plate = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    current_latitude = models.DecimalField(max_digits=9, decimal_places=6, default=0)
    current_longitude = models.DecimalField(max_digits=9, decimal_places=6, default=0)
    current_route = models.ForeignKey(Route, on_delete=models.DO_NOTHING, related_name='route_bus', null=True)

    def __str__(self)->str:
        if self.current_route:
            return f'{self.plate} on {self.current_route.name}'
        return f'{self.plate}'

class Location(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, related_name='bus_location')
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    update_at = models.DateTimeField(auto_now_add=True)

    def __str__(self)->str:
        return f'Location of {self.bus.plate}: {self.latitude}, {self.longitude}'