from django.http import HttpResponse
from django.views.generic import View
import os, sys
import json

ROOT_DIR = os.path.dirname(os.path.abspath(__package__))
sys.path.append(ROOT_DIR)
from firebase.connect import get_collection


class Milestones(View):
    def get(self, request, *args, **kwargs):
        lst = get_collection("milestones")
        idd = kwargs['id']
        obj = [i for i in lst if i.get('id') == idd]
        if len(obj) > 0:
            return HttpResponse(json.dumps(obj[0]))
        else:
            return HttpResponse()