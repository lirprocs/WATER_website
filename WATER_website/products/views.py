from django.shortcuts import render
import json
from django.http import JsonResponse
from telegram.ext import Updater, MessageHandler

def products(request):
    return render(request, 'products/products.html')


ID = 0
users_to_notify = ['424493530']
token = "6747649824:AAEfNPhBSF3DZ9jL9P4AFfN_StAeKC21q1Q"
updater = Updater(token)


def telegram_message(nickname, phone, address, amount0_5, amount1_5, itog):
    global ID
    ID += 1
    for chat_id in users_to_notify:
        updater.bot.send_message(chat_id, f"Заказ #{ID}:\n\n"
                                          f"Количество Упаковок (24 шт. по 0.5 л): {amount0_5}\n"
                                          f"Количество Упаковок (6 шт. по 1.5 л): {amount1_5}\n\n"
                                          f"Итоговая сумма: {itog} руб.\n"
                                          f"-------------------------------"
                                          f"---------------------------------------------------\n"
                                          f"Информация о клиенте:\n\n"
                                          f"Имя: {nickname}\n"
                                          f"Номер Телефона: {phone}\n"
                                          f"Адрес: {address}")


def send_telegram_message(nickname, phone, address, amount0_5, amount1_5, itog):
    telegram_message(nickname, phone, address, amount0_5, amount1_5, itog)


def send_message_async(request):
    if request.method == "POST":
        data = json.loads(request.body)
        nickname = data.get('nickname')
        phone = data.get('phone')
        address = data.get('address')
        amount0_5 = data.get('amount0_5')
        amount1_5 = data.get('amount1_5')
        itog = data.get('itog')

        send_telegram_message(nickname, phone, address, amount0_5, amount1_5, itog)

        return JsonResponse({'message': 'Сообщение получено и обработано успешно!'}, status=200)
    else:
        return JsonResponse({'error': 'Метод не разрешен'}, status=405)
