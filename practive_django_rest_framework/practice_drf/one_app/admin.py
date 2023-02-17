from django.contrib import admin
from .models import Person

# Register your models here.

@admin.register(Person)
class ArticleModel(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'age')
    list_filter = ('first_name', 'last_name', 'age')