from django.urls import path
from .views import document_convert_view, ResultView

urlpatterns = [
    path('', document_convert_view, name='convert-form'),
    path('result/', ResultView.as_view(), name='result'),
]
