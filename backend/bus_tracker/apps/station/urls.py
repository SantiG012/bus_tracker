from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import include, re_path
from .views import *

urlpatterns = [
    re_path(r'$', ListCreateStations.as_view(), name='list-create-stations'),
    re_path(r'^(?P<id>\d+)/$', RetrieveUpdateDeleteStation.as_view(), name='get-update-delete-station')
]