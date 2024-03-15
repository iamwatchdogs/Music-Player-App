from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def sample_view(request):
	return HttpResponse("<h1>Sample View</h1>")