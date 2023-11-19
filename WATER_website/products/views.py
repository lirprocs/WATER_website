from django.shortcuts import render


def products(request):
    return render(request, 'products/products.html')

def sendMessage(request):
   if request.method == "POST":
       nickname = request.POST.get('nickname')
       phone = request.POST.get('phone')
       adress = request.POST.get('adress')
pass

