from django.shortcuts import render


def home(request):
    return render(request, 'index.html')

def tokenomics(request):
    return render(request, 'tokenomics.html')

def community(request):
    return render(request, 'community.html')
