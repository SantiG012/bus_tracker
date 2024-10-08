from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path
from .views import *

urlpatterns = [
    re_path(r'$', ListCreateRoutes.as_view(), name='list-create-routes'),
    re_path(r'^(?P<id>\d+)/$', RetrieveUpdateDeleteRoute.as_view(), name='get-update-delete-route'),
    re_path(r'^stops/$', ListCreateStops.as_view(), name='list-create-stops'),
    re_path(r'^stops/(?P<id>\d+)/$', RetrieveUpdateDeleteStop.as_view(), name='get-update-delete-stop'),
    re_path(r'^route-stops/$', ListCreateRouteStops.as_view(), name='list-create-route-stops'),
    re_path(r'^route-stops/(?P<id>\d+)/$', RetrieveUpdateDeleteRouteStop.as_view(), name='get-update-delete-route-stop'),

]