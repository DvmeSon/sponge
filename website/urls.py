from django.urls import path, include
import website.views as views

app_name = 'website'

urlpatterns = [
    path('', views.home, name="home"),
    path('tokenomics/', views.tokenomics, name="tokenomics"),
    path('community/', views.community, name="community"),
]
