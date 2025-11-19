
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
    // This check ensures Firebase is only initialized on the client side.
    if (typeof window !== 'undefined') {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      const auth = getAuth(app);
      const firestore = getFirestore(app);
      setFirebase({ app, auth, firestore });
    }
  }, []);

  // While firebase is initializing, we can show a loader or nothing.
  // This also ensures that server-side rendering doesn't try to use the context.
  if (!firebase) {
    return <>{children}</>; // Render children directly to avoid layout shifts, but without the context.
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  // This can be null during the initial client render, so components need to handle it.
  return context;
};

export const useAuth = () => {
    const context = useContext(FirebaseContext);
    // Return null if context is not yet available, components can handle the loading state
    return context?.auth ?? null;
}

export const useFirestore = () => {
    const context = useContext(FirebaseContext);
    // This might be null on first render, so components should be robust to this.
    return context?.firestore ?? null;
}
