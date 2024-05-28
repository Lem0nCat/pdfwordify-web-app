from django.db import models

class Document(models.Model):
    title = models.CharField(max_length=256, default="Document")
    file = models.FileField(upload_to='files')
    extraction_method = models.CharField(max_length=10)
    
    class Meta:
        verbose_name = 'Document'
        verbose_name_plural = 'Documents'

    def __str__(self):
        return self.title
