from rest_framework import serializers
from .models import Document
from .validators import validate_file


class PDFSerializer(serializers.ModelSerializer):
    file = serializers.FileField(validators=[validate_file])
    extraction_method = serializers.ChoiceField(choices=['lattice', 'stream', ''])
    
    class Meta:
        model = Document
        fields = ['file', 'extraction_method']
