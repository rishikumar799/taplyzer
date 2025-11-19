
'use client';

// This file is the single entry point for all client-side Firebase code.
// It should only be imported in client components.

import { initializeFirebase as initializeFirebaseClient } from './client-init';
import { useAuth as useAuthClient, useFirebaseApp as useFirebaseAppClient, useFirestore as useFirestoreClient } from './provider';
import { useUser as useUserClient } from './auth/use-user';
import { FirebaseClientProvider as FirebaseClientProviderComponent } from './client-provider';

// Re-exporting with aliased names to avoid any confusion
export const initializeFirebase = initializeFirebaseClient;
export const useAuth = useAuthClient;
export const useFirebaseApp = useFirebaseAppClient;
export const useFirestore = useFirestoreClient;
export const useUser = useUserClient;
export const FirebaseClientProvider = FirebaseClientProviderComponent;
