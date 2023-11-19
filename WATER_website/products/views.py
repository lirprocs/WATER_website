from django.shortcuts import render
import json
from django.http import JsonResponse

def products(request):
    return render(request, 'products/products.html')


def sendMessage(request):
    if request.method == "POST":
        data = json.loads(request.body)
        nickname = data.get('nickname')
        phone = data.get('phone')
        address = data.get('adress')

        return JsonResponse({'message': 'Сообщение получено и обработано успешно!'}, status=200)
    else:
        return JsonResponse({'error': 'Метод не разрешен'}, status=405)








