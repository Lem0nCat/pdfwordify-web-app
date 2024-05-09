from django.core.exceptions import ValidationError


def validate_file(file):
    max_size_mb = 100   # 100 MB limit
    if not file.name.endswith('.pdf'):
        raise ValidationError("Unsupported file type. Please upload a PDF file.")
    if file.size > 1024 * 1024 * max_size_mb:
        raise ValidationError("File size must not exceed 10MB.")
