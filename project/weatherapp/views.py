from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')
def dev(request):
    return render(request, 'devs.html')
def weather(request):
    return render(request, 'weather.html')