
'use client';
import { initializeFirebase } from './client-init';
import { FirebaseProvider } from './provider';
import type { ReactElement } from 'react';

// Initialize firebase on the client
const { firebaseApp, firestore, auth } = initializeFirebase();

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
  if (!firebaseApp || !auth || !firestore) {
    // This case should not happen on the client.
    // If it does, it might be better to show a loading state or an error.
    return <>{children}</>;
  }

  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      firestore={firestore}
      auth={auth}
    >
      {children}
    </FirebaseProvider>
  );
}
