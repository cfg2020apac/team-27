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

def send_to_firebase(raw_notification, collection : str):
    # working
    db = firestore.client()
    start = time.time()
    db.collection(collection).document().create(raw_notification)
    end = time.time()
    spend_time = timedelta(seconds=end - start)
    return spend_time



def update_firebase_snapshot(snapshot_id):
    start = time.time()
    db = firestore.client()
    db.collection('notifications').document(snapshot_id).update(
        {'is_read': True}
    )
    end = time.time()
    spend_time = timedelta(seconds=end - start)
    return spend_time


if __name__ == "__main__":
    data = {
        u'name': u'Los Angeles',
        u'age': u'15'
    }
    db = firestore.client()
    # Add a new doc in collection 'cities' with ID 'LA'
    # db.collection(u'students').document(u'LA').set(data)
    send_to_firebase(data , u'students')