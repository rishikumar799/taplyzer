
'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useAuth } from '@/firebase/provider';

export function useUser() {
    const auth = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // auth can be null on the server or during initial client render.
        if (!auth) {
            // If we're on the server, we should stop here and remain in a loading state.
            if (typeof window === 'undefined') {
                return;
            }
            // On the client, if auth is still null, it might be initializing.
            // We set loading to false to avoid an infinite loading state if Firebase fails to init.
            setLoading(false);
            return;
        }
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    return { user, loading };
}
