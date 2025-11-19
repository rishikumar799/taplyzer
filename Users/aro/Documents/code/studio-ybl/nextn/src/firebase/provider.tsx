'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

interface FirebaseContextValue {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

const FirebaseContext = createContext<FirebaseContextValue | null>(null);

export function FirebaseProvider({ children }: { children: ReactNode }) {
  const [firebase, setFirebase] = useState<FirebaseContextValue | null>(null);

  useEffect(() => {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    setFirebase({ app, auth, firestore });
  }, []);

  // While firebase is initializing, we can show a loader or nothing
  if (!firebase) {
    return null;
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export const useAuth = () => {
    const context = useContext(FirebaseContext);
    // Return null instead of throwing an error, components can handle the loading state
    return context?.auth ?? null;
}

export const useFirestore = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error('useFirestore must be used within a FirebaseProvider');
    }
    return context.firestore;
}
