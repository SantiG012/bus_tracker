# Generated by Django 5.1.1 on 2024-09-21 16:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0003_bus_current_latitudine_bus_current_longitudine'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='bus',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bus_location', to='bus.bus'),
        ),
    ]
