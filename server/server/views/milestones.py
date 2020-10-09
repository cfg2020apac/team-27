from django.http import HttpResponse
from django.views.generic import View
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from google.cloud.firestore import ArrayUnion

import os, sys
import json

ROOT_DIR = os.path.dirname(os.path.abspath(__package__))
sys.path.append(ROOT_DIR)
from firebase.connect import get_collection, add_to_firebase
from firebase_admin import firestore

class Milestones(View):
    def get(self, request, *args, **kwargs):
        lst = get_collection("milestones")
        idd = kwargs['id']
        obj = [i for i in lst if i.get('id') == idd]
        if len(obj) > 0:
            return HttpResponse(json.dumps(obj[0]))
        else:
            return HttpResponse()
        

@api_view(['POST'])
def post_milestones(request):
    db = firestore.client()
    col_ref = db.collection("milestones")
    results = col_ref.where('id', '==', 1).get()
    body = json.loads(request.body.decode('utf-8'))
    field_updates = body
    for item in results:
        doc = col_ref.document(item.id)
        doc.update({ "milestones": firestore.ArrayUnion([field_updates]) })
    return HttpResponse(json.dumps("Good"))