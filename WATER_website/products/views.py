from django.shortcuts import render
from django.shortcuts import HttpResponse


def products(request):
    return render(request, 'products/products.html')

def sendMessage(request):
    return HttpResponse("rjnvejv")

