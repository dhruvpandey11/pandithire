from django.urls import path
from . import views

urlpatterns = [

    path("", views.home, name="home"),

    path(
        "join-pandit/",
        views.join_pandit,
        name="join_pandit"
    ),

    path(
        "services/",
        views.all_services,
        name="all_services"
    ),

]

