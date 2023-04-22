# Family Cheese landing React App with admin Firestore

## Setup

Follow steps below in order to run project locally.

##### 1. Firebase installation

```bash
npm install -g firebase-tools
firebase login
firebase use "PROJECT NAME"
```

##### 2. Install NPM dependencies

```bash
npm i
```

##### 3. Setup `.env` file in the root folder

```bash
VUE_APP_ENVIRONMENT=staging

### Firebase environment
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH=
REACT_APP_FIREBASE_PROJECT=
REACT_APP_FIREBASE_STORAGE=
REACT_APP_FIREBASE_MESSAGING_ID=
REACT_APP_FIREBASE_APP_ID=
```

##### 4. Run the project

```bash
npm run start
```

