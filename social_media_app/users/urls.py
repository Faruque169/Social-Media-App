from django.urls import path
from .views import register, profile

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('',  views.index, name='home'),
]
