
// This file is safe to be imported on the server.
// It only exports the provider component and server-safe types.
'use client';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

import { FirebaseProvider } from './provider';

export type { FirebaseApp, Auth, Firestore };
export { FirebaseProvider };
