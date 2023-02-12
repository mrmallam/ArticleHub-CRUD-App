from django.urls import path, include
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter
# from .views import ArticleList, ArticleDetails


router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='atricles')

urlpatterns = [
    # path('articles/', ArticleList.as_view()), # we use as_view because we're using class based api views
    # path('articles/<int:id>/', ArticleDetails.as_view()),   
    path('', include(router.urls)),
]



# # article_list, article_details
# urlpatterns = [
#     path('articles/', article_list),
#     path('articles/<int:pk>/', article_details)
# ] 