import os
from django.conf import settings
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser

from pdfwordify.converter import convert_to_docx

from .serializers import PDFSerializer


class PDFToDocxAPIView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_serializer = PDFSerializer(data=request.data)
        if file_serializer.is_valid():
            file_instance = file_serializer.save()  # Save uploaded file
            pdf_path = file_instance.file.path
            
            method = file_serializer.validated_data.get('extraction_method')
            
            docx_path = convert_to_docx(pdf_path, method=method)
            
            # Return converted DOCX file as a download
            docx_url = settings.MEDIA_URL + 'files/' + os.path.basename(docx_path)
            return JsonResponse({'message': 'Success', 'url': request.build_absolute_uri(docx_url)})
        else:
            return JsonResponse(file_serializer.errors, status=400)
