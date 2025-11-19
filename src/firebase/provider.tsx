
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
import { firebaseConfig } from './config';

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

export function FirebaseProvider({
  children
}: FirebaseProviderProps) {
  const [firebase, setFirebase] = useState<FirebaseContextValue | null>(null);

  useEffect(() => {
    let app: FirebaseApp;
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApp();
    }
    
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    
    setFirebase({
      firebaseApp: app,
      auth,
      firestore,
    });
  }, []);

  if (!firebase) {
    return null; // Or a loading spinner
  }

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
  const context = useFirebase();
  if (!context) {
    throw new Error('Firebase not initialized');
  }
  return context.firebaseApp;
}

export function useAuth() {
  const context = useFirebase();
  if (!context) {
    throw new Error('Firebase not initialized');
  }
  return context.auth;
}

export function useFirestore() {
  const context = useFirebase();
  if (!context) {
    throw new Error('Firebase not initialized');
  }
  return context.firestore;
}
