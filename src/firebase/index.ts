
'use client';

import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';
import { FirebaseProvider, useAuth, useFirebase, useFirebaseApp, useFirestore } from './provider';
import { useUser } from './auth/use-user';
import { FirebaseClientProvider } from './client-provider';

// This function will be called on the client to initialize Firebase
export function initializeFirebase() {
  if (typeof window !== 'undefined') {
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
  // Return null or undefined on the server
  return { firebaseApp: null, auth: null, firestore: null };
}

export {
  FirebaseProvider,
  FirebaseClientProvider,
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
  useUser,
};
