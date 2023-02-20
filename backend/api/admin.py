from django.contrib import admin
from .models import Article

# Register your models here.

# To register your models with Admin

# Way 1:
# admin.site.register(Article)

# Way 2:
@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    # this way you can see the FILTER section on the admin page
    list_filter = ('title', 'description')

    # this will add the description field to the admin page
    list_display = ('title', 'description')