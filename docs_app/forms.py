from django import forms


class DocumentForm(forms.Form):
    file = forms.FileField(label='Выберите PDF файл:', required=True, 
                           widget=forms.FileInput(attrs={'id': 'pdfFile', 
                                                         'class': 'form-control-file d-none',
                                                         'type': 'file', 
                                                         'name': 'pdfFile'}))
