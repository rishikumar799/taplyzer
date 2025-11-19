
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LoginForm } from '@/components/login-form';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow flex items-center justify-center py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-md">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign In</h1>
                            <p className="mt-2 text-muted-foreground">
                                Welcome back! Select your role to continue.
                            </p>
                        </div>
                        <LoginForm />
                        <p className="mt-6 text-center text-sm text-muted-foreground">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-primary hover:underline font-medium">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
            <ThemeSwitcher />
        </div>
    );
}
