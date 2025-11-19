'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useAuth } from '@/firebase/provider';

export function useRequireAuth() {
    const auth = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // The auth object might be null on the first render, so we check for it.
        if (!auth) {
            // If auth is not ready, we can't check the auth state.
            // We'll wait for it to be initialized by the provider.
            // The loading state will remain true.
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/login');
            } else {
                setUser(user);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth, router]);

    return { user, loading };
}
