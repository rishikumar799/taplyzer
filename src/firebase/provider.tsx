
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
  useMemo,
  type ReactNode,
  useState,
  useEffect
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
  const [firebase, setFirebase] = useState<FirebaseContextValue | undefined>(undefined);

  useEffect(() => {
    let app;
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

  return (
    <FirebaseContext.Provider value={firebase}>
      {firebase ? children : null}
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
