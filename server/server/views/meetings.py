from django.http import HttpResponse
from django.views.generic import View
import os, sys
import json
import datetime



ROOT_DIR = os.path.dirname(os.path.abspath(__package__))
sys.path.append(ROOT_DIR)
from firebase.connect import get_collection


def time_convert(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

class Meetings(View):
    def get(self, request, *args, **kwargs):
        lst = get_collection("meetings")
        idd = kwargs['id']
        obj = [i for i in lst if i.get('id') == idd]
        if len(obj) > 0:
            return HttpResponse(json.dumps(obj[0], default = time_convert))
        else:
            return HttpResponse()