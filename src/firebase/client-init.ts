
// This file should only be imported on the client.
import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

// This function will be called on the client to initialize Firebase
export function initializeFirebase(): { firebaseApp: FirebaseApp; auth: Auth; firestore: Firestore; } {
  if (getApps().length === 0) {
    const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
    const auth: Auth = getAuth(firebaseApp);
    const firestore: Firestore = getFirestore(firebaseApp);
    return { firebaseApp, auth, firestore };
  } else {
    const firebaseApp: FirebaseApp = getApp();
    const auth: Auth = getAuth(firebaseApp);
    const firestore: Firestore = getFirestore(firebaseApp);
    return { firebaseApp, auth, firestore };
  }
}
