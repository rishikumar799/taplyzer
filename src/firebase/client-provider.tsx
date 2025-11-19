
'use client';
import { initializeFirebase } from './client-init';
import { FirebaseProvider } from './provider';
import type { ReactElement } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';

/**
 * A client-side provider that initializes Firebase and wraps the main
 * FirebaseProvider. This ensures that Firebase is initialized only once
_on the
 * client_. All children of this provider will have access to the Firebase
 * context.
 *
 * @param {{ children: React.ReactNode}} props
 * @returns {React.ReactElement}
 */
export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const [firebase, setFirebase] = useState<{
    firebaseApp: FirebaseApp;
    auth: Auth;
    firestore: Firestore;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFirebase(initializeFirebase());
    }
  }, []);

  if (!firebase) {
    // You can return a loading spinner here if you prefer
    return <>{children}</>;
  }

  return (
    <FirebaseProvider
      firebaseApp={firebase.firebaseApp}
      firestore={firebase.firestore}
      auth={firebase.auth}
    >
      {children}
    </FirebaseProvider>
  );
}
