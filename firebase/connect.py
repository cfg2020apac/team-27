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
    db.collection(collection).document().create(raw_notification)
    end = time.time()
    spend_time = timedelta(seconds=end - start)
    return spend_tim

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

if __name__ == "__main__":
    data = {
        u'name': u'Los Angeles',
        u'age': 15,
        u'preference': ["greater_virginia"]
    }
    db = firestore.client()
    # Add a new doc in collection 'cities' with ID 'LA'
    # db.collection(u'students').document(u'LA').set(data)
    update_firebase_snapshot(data, "iWSAB2Pfucgl9ASBQRmc", u'students')