
'use client';
import {
  FirebaseApp,
} from 'firebase/app';
import {
  Auth,
} from 'firebase/auth';
import {
  Firestore,
} from 'firebase/firestore';
import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';

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
} & Partial<FirebaseContextValue>;

export function FirebaseProvider({
  children,
  ...props
}: FirebaseProviderProps) {
  const value = useMemo(() => {
    // If we have all the props, use them
    if ('firebaseApp' in props && 'auth' in props && 'firestore' in props) {
      return {
        firebaseApp: props.firebaseApp!,
        auth: props.auth!,
        firestore: props.firestore!,
      };
    }
    return undefined;
  }, [props]);

  return (
    <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
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
