from django.urls import path, include
from .views import PersonModelViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('Person', PersonModelViewSet, basename='Person')


urlpatterns = [
    path('', include(router.urls))
]
