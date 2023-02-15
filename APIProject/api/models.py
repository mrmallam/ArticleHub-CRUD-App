from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()



    # this is to show the Title as the name of the article on the /admin site
    def __str__(self):
        return self.title