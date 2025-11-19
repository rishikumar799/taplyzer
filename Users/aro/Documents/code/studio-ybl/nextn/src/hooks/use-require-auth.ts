
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase/auth/use-user';

export function useRequireAuth() {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        // Ensure this effect only runs on the client and after the initial loading phase.
        if (typeof window !== 'undefined' && !loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    return { user, loading };
}
