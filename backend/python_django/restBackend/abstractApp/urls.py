from django.conf.urls import url


from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'smugglers/', views.smugglers, name='smugglers'),
    url(r'smuggler/(?P<id>[0-9]+)/',views.details, name='details'),
]
