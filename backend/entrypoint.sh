#!/bin/sh

pyhon manage.py makemigrations
python manage.py migrate
python manage.py migrate --run-syncb

gunicon bus_tracker.asgi:application --bind=0.0.0.0:8000