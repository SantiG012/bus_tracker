from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS

def isAdminOrReadOnly( request ):
    return request.method in SAFE_METHODS or request.user.is_staff
    