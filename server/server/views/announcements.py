from django.http import HttpResponse
from django.views.generic import View
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view

import os, sys
import json

ROOT_DIR = os.path.dirname(os.path.abspath(__package__))
sys.path.append(ROOT_DIR)
from firebase.connect import get_collection, add_to_firebase

class Announcements(View):
    def get(self, request, *args, **kwargs):
        lst = get_collection("announcements")
        return HttpResponse(json.dumps(lst))



@api_view(['POST'])
def post_announcements(request):
    lst = get_collection("announcements")
    mid = max([x['id'] for x in lst])
    body = json.loads(request.body.decode('utf-8'))
    body['id'] = mid + 1
    add_to_firebase(body, "announcements")
    return HttpResponse(json.dumps("Good"))