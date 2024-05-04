from rest_framework import serializers
from .models import Document
from .validators import validate_file


class PDFSerializer(serializers.ModelSerializer):
    file = serializers.FileField(validators=[validate_file])
    
    class Meta:
        model = Document
        fields = ['file']
