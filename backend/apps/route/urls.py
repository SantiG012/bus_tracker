from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path
from .views import *

urlpatterns = [
    re_path(r'$', ListCreateRoutes.as_view(), name='list-create-routes'),
    re_path(r'^(?P<id>\d+)/$', RetrieveUpdateDeleteRoute.as_view(), name='get-update-delete-route')
]