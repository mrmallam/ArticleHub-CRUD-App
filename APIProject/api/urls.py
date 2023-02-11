from django.urls import path
from .views import ArticleList


urlpatterns = [
    path('articles/', ArticleList.as_view()) # we use as_view because we're using class based api views
]



# # article_list, article_details
# urlpatterns = [
#     path('articles/', article_list),
#     path('articles/<int:pk>/', article_details)
# ] 