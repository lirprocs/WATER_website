from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('', include('about_us.urls')),
    path('', include('products.urls')),
    path('', include('feedback.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
