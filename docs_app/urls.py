from django.urls import path
from .views import document_convert_view, download_view

urlpatterns = [
    path('convert/', document_convert_view, name='convert-form'),
    path('convert/<path:url>/', download_view, name='download_view'),
]
