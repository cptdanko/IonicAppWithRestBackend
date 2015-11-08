from django.shortcuts import render,HttpResponse
import json
# Create your views here.
def index(request):
    return HttpResponse("Chewie we're home")

def smugglers(request):
    hondo = {'name':'Hondo','lastname': 'Ohnaka', 'id':1}
    han = {'name':'Han','lastname':'Solo','id':2}
    smugglers = [hondo,han]
    data = json.dumps(smugglers)
    return HttpResponse(data)

def details(request,id):
    species = 'Human'
    if id == '1':
        species = 'Weequay'
    return HttpResponse(species)
