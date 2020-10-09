import time
from datetime import timedelta
from uuid import uuid4
import json
import os
from firebase_admin import firestore, initialize_app, credentials
import firebase_admin


def connect(cred_file: str):
    ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
    cred_path = os.path.join(ROOT_DIR, cred_file)
    if not firebase_admin._apps:
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)

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

def get_collection(collection: str):
    """
    collection = class name
    returns all items from class (list of dicts)
    """

    db = firestore.client()
    doc_ref = db.collection(collection).stream()
    stream = []
    for doc in doc_ref:
        stream.append(doc.to_dict())
    return stream

def delete_doc(collection: str, document: str):
    """
    Delete specific document from collection
    """
    db = firestore.client()
    db.collection(collection).document(document).delete()
    
def delete_field(collection: str, document: str, field: str):
    """
    Delete specific fields from document in collection
    """
    doc_ref = db.collection(collection).document(document)
    doc_ref.update({
        field: firestore.DELETE_FIELD
    })


def delete_collection(collection: str, batch_size = 64):
    """
    Delete collection of data
    batch_size set by 64 to default to deal with OOM errors
    """
    docs = collection.limit(batch_size).stream()
    deleted = 0

    for doc in docs:
        print(f'Deleting doc {doc.id} => {doc.to_dict()}')
        doc.reference.delete()
        deleted = deleted + 1

    if deleted >= batch_size:
        return delete_collection(collection, batch_size)

if __name__ == "__main__":
    pass
