from django.shortcuts import render


def home(request):
    return render(request, "home/index.html")


def join_pandit(request):
    return render(request, "home/join_pandit.html")


def all_services(request):
    return render(request, "home/all_services.html")