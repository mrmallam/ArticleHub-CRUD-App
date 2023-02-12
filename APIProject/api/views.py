from django.shortcuts import render, HttpResponse
from .models import Article
from .serializers import ArticleSerializer
from django.http import JsonResponse 
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view # for functional based api View decorators
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView # this for class based api views decorators
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets

# Create your views here.


    




'''
# ----- USING MIXINS -----

class ArticleList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # mixins.ListModelMixin:  for listing models 'get'
    def get(self, request):
        return self.list(request)
    

    # mixins.CreateModelMixin: for creating model 'post'
    def post(self, request):
        return self.create(request)
    
# mixins for Retriving specific models, Updating models, and deleting models.
class ArticleDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # adding a lookup-field to avoid error of PK and ID
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)
    
    def post(self, request, id):
        return self.update(request, id=id)
    
    def delete(self, request, id):
        return self.destroy(request, id=id)

 '''



'''
# ------- class based api views -------


class ArticleList(APIView):
    def get(self, request):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    

class ArticleDetails(APIView):
    def get_object(self, id):
        try:
           return Article.objects.get(id=id)
    
        except Article.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        article = self.get_object(id)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    
    def put(self, request, id):
        article = self.get_object(id)
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        article = self.get_object(id)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


'''




'''
@api_view(['GET', 'POST']) # for the browsable API
def article_list(request):

    # if GET request
    if request.method == 'GET':
        # get all articles

        # put all the articles in the 'articles' variable
        articles = Article.objects.all()
        # now we need to serialize the 'articles' query set. if you want to serialize a query set then you need to add "many=True"
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)
    
    # else if POST request
    elif request.method == 'POST':

        serializer = ArticleSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def article_details(request, pk): # pk = primary key
    try:
        article = Article.objects.get(pk=pk)
    
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        # create the serializer
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    
    elif request.method == "PUT": # update
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "DELETE":
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''