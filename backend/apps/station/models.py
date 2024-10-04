from django.db import models

# Create your models here.
class Station(models.Model):
    name = models.CharField(max_length=100)
    status = models.CharField(max_length=1, choices=[('A', 'Active'), ('I', 'Inactive')], default='A')
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)

    def __str__(self)->str:
        return f'Station {self.name}: {self.latitude}, {self.longitude}'