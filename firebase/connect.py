import time
from datetime import timedelta
from uuid import uuid4
import json
import os
from firebase_admin import firestore, initialize_app, credentials


dirname = os.path.dirname(__file__)

filename = os.path.join(dirname, 'env-firebase-private.json')
cred = credentials.Certificate(filename)

credential_path = os.path.join(dirname, 'env.json')
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

__all__ = ['send_to_firebase', 'update_firebase_snapshot']

initialize_app(cred)

def add_to_firebase(data, collection : str):
    """
    Example for data:
    data = {
        u'name': u'Los Angeles',
        u'age': 15,
        u'preference': ["greater_virginia"]
    }
    """
    # working
    db = firestore.client()
    start = time.time()
    db.collection(collection).document().create(data)
    end = time.time()
    spend_time = timedelta(seconds=end - start)
    return spend_time

def update_to_firebase(data, snapshot_id, collection : str):
    """
    Example for data:
    data = {
        u'name': u'Los Angeles',
        u'age': 15,
        u'preference': ["greater_virginia"]
    }
    """
    start = time.time()
    db = firestore.client()
    db.collection(collection).document(snapshot_id).update(data)
    end = time.time()
    spend_time = timedelta(seconds=end - start)
    return spend_time

def get_from_collection(collection: str, document: str):
    db = firestore.client()
    doc_ref = db.collection(collection).stream()
    # {doc.id} => {doc.to_dict()}
    return doc_ref


if __name__ == "__main__":
    data = {
        u'name': u'Los Angeles',
        u'age': 18,
        u'preference': ["greater_virginia", "hong_kong"]
    }
    db = firestore.client()
    # Add a new doc in collection 'cities' with ID 'LA'
    # db.collection(u'students').document(u'LA').set(data)
    for doc in get_from_collection(u'students', ""):
        print(doc.to_dict())