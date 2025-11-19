
// This file is the single entry point for all client-side Firebase code.
// It should only be imported in client components.
'use client';

import { useAuth as useAuthClient, useFirebaseApp as useFirebaseAppClient, useFirestore as useFirestoreClient } from './provider';
import { useUser as useUserClient } from './auth/use-user';


// Re-exporting with aliased names to avoid any confusion
export const useAuth = useAuthClient;
export const useFirebaseApp = useFirebaseAppClient;
export const useFirestore = useFirestoreClient;
export const useUser = useUserClient;
