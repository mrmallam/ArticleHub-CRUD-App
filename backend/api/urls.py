from django.urls import path, include
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
# from .views import ArticleList, ArticleDetails


router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='atricles')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
