from django.shortcuts import render
import json
from django.http import JsonResponse
from aiogram import types, Dispatcher, Bot
from aiogram.types import Update
from aiogram.fsm.storage.memory import MemoryStorage
import asyncio


def products(request):
    return render(request, 'products/products.html')

async def telegram_message(nickname, phone, adress):

    bot = Bot("6747649824:AAEfNPhBSF3DZ9jL9P4AFfN_StAeKC21q1Q")
    storage = MemoryStorage()
    dispatcher = Dispatcher(storage=storage)
    chat_id = '281887511'
    await bot.send_message(chat_id, f"New order:\nName: {nickname} \nPhone: {phone} \nAdress: {adress}")

async def send_telegram_message(nickname, phone, adress):
    storage = MemoryStorage()
    dispatcher = Dispatcher(storage=storage)
    await telegram_message(nickname, phone, adress)


def sendMessage(request):
    if request.method == "POST":
        data = json.loads(request.body)
        nickname = data.get('nickname')
        phone = data.get('phone')
        adress = data.get('adress')
        asyncio.run(send_telegram_message(nickname, phone, adress))

        return JsonResponse({'message': 'Сообщение получено и обработано успешно!'}, status=200)
    else:
        return JsonResponse({'error': 'Метод не разрешен'}, status=405)