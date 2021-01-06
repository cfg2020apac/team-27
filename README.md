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

##### The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC").						JPMC did not create or contribute to the development of the Code.  This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code,						including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.