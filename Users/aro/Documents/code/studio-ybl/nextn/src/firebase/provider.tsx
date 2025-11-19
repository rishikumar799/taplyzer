
'use client';
import {
  FirebaseApp,
  getApp,
  getApps,
  initializeApp,
} from 'firebase/app';
import {
  Auth,
  getAuth,
} from 'firebase/auth';
import {
  Firestore,
  getFirestore,
} from 'firebase/firestore';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { getFirebaseConfig } from './config';

export type FirebaseContextValue = {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

const FirebaseContext = createContext<FirebaseContextValue | undefined>(
  undefined
);

export type FirebaseProviderProps = {
  children: ReactNode;
};

// This function initializes Firebase and returns the SDK instances.
// It is only called on the client-side inside the provider.
function initializeFirebase(): FirebaseContextValue {
  const firebaseConfig = getFirebaseConfig();
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  return { firebaseApp: app, auth, firestore };
}

export function FirebaseProvider({
  children
}: FirebaseProviderProps) {
  // Use state to store the initialized Firebase instances.
  // We initialize it to null to prevent it from being available on the server.
  const [firebase, setFirebase] = useState<FirebaseContextValue | null>(null);

  // useEffect ensures this code only runs on the client, after the component has mounted.
  useEffect(() => {
    // Initialize Firebase and set it in state.
    // This happens only once per application lifecycle.
    setFirebase(initializeFirebase());
  }, []);

  // While Firebase is initializing, we can show a loader or nothing.
  // Returning null here is fine for most cases.
  if (!firebase) {
    return null; 
  }

  // Once initialized, provide the Firebase context to the rest of the app.
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}

export function useFirebaseApp() {
  return useFirebase().firebaseApp;
}

export function useAuth() {
  return useFirebase().auth;
}

export function useFirestore() {
  return useFirebase().firestore;
}
