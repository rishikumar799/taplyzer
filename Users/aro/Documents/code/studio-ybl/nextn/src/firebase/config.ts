
import type { FirebaseOptions } from 'firebase/app';

// This function ensures that environment variables are only accessed on the client-side.
export const getFirebaseConfig = (): FirebaseOptions => {
  const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  // Basic validation to ensure keys are present
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error('Firebase config is missing. Make sure NEXT_PUBLIC_FIREBASE_ variables are set in your .env file');
  }

  return firebaseConfig;
};
