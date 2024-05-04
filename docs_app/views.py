from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from .forms import DocumentForm
import requests


def document_convert_view(request):
    if request.method == 'POST':
        print('AAAAAAAAAAAAAAAAAAAAAAAAAAA')
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            response = requests.post('/api/convert/', files={'file': file})
            if response.status_code == 200:
                return render(request, 'docs_app/complete.html', {'docx_url': response.json()['docx_url']})
    else:
        form = DocumentForm()
    return render(request, 'docs_app/index.html', {'form': form})

def download_view(request, url):
    # You might want to perform some validation or processing here
    return render(request, 'docs_app/download.html', {'url': url})
