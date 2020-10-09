# team-27 JA HK


## Python setup (backend + firebase)
0. Navigate to root.
1. Run `python -m venv cfg-27`.
2. Run `cfg-27\Scripts\activate.bat` or `cfg-27/Scripts/activate`.
3. Should be able to see `(cfg-27) ../team-27/`.
4. Run `pip install -r requirements.txt`.
5. Ensure the venv is ignored.
6. Prepare `firebase/env-firebase-private.json` and `firebase/env.json`.
7. Run `python server/manage.py runserver` in root.

## Firebase ENV
1. (OPTIONAL, you should be able to connect to firebase after setting up Python + the `json`)
2. Set `GOOGLE_APPLICATION_CREDENTIALS=<absolute path of firebase/env.json>` (environment variable).
