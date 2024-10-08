# Generated by Django 5.1.1 on 2024-09-24 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0002_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='bus',
            name='current_latitudine',
            field=models.DecimalField(decimal_places=6, default=0, max_digits=9),
        ),
        migrations.AddField(
            model_name='bus',
            name='current_longitudine',
            field=models.DecimalField(decimal_places=6, default=0, max_digits=9),
        ),
    ]
