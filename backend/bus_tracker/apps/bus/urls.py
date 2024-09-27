from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import include, re_path
from .views import *

urlpatterns = [
    re_path(r'$', ListCrateBuses.as_view(), name='list-create-buses'),
    re_path(r'^(?P<id>\d+)/$', RetrieveUpdateDeleteBus.as_view(), name='get-update-delete-bus'),
    re_path(r'^(?P<id>\d+)/location/$', UpdateLocation.as_view(), name='update-location')
]

urlpatterns = format_suffix_patterns(urlpatterns)