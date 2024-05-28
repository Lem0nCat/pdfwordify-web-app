from django.shortcuts import render
from django.views.generic import TemplateView

from .forms import DocumentForm


def document_convert_view(request):
    if request.method == 'POST':
        pass
    else:
        form = DocumentForm()
    return render(request, 'docs_app/index.html', {'form': form})

class ResultView(TemplateView):
    template_name = 'docs_app/result.html'
