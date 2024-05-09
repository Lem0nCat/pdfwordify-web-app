from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import PDFToDocxAPIView


urlpatterns = [
    path('convert/', PDFToDocxAPIView.as_view(), name='file-upload'),
]
