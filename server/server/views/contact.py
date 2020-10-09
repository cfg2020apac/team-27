from django.http import HttpResponse
from django.views.generic import View
import os, sys
import json

ROOT_DIR = os.path.dirname(os.path.abspath(__package__))
sys.path.append(ROOT_DIR)
from firebase.connect import get_collection


class Contact(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse(json.dumps(get_collection("Contact")))

    def post(self, request, *args, **kwargs):
        return HttpResponse('This is POST request')