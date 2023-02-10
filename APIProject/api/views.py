from django.shortcuts import render, HttpResponse
from .models import Article
from .serializers import ArticleSerializer
from django.http import JsonResponse 
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt # per django documentation... need to be added from the POST method
def article_list(request):

    # if GET request
    if request.method == 'GET':
        # get all articles

        # put all the articles in the 'articles' variable
        articles = Article.objects.all()
        # now we need to serialize the 'articles' query set. if you want to serialize a query set then you need to add "many=True"
        serializer = ArticleSerializer(articles, many=True)

        # now we just need to return a JSON response
        return JsonResponse(serializer.data, safe=False)
    
    # else if POST request
    elif request.method == 'POST':
        # we need to parse the POST request
        data = JSONParser().parse(request)
        # create our serializer 
        serializer = ArticleSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.error, status=400)

    