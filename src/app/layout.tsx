
'use client';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { FirebaseProvider } from '@/firebase';
import { initializeFirebase } from '@/firebase/client-init';

// Metadata can be defined in a client component, but it's often better in a server component layout if possible.
// Since this is the root layout and we need a client boundary for providers, we define it here.
// Note: This might generate a warning if you have a separate server-side layout. For this structure, it's acceptable.
// export const metadata: Metadata = {
//   title: 'Taplyzer - Smart Business Cards',
//   description: 'Crafting Digital Connections',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { firebaseApp, auth, firestore } = initializeFirebase();

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Taplyzer - Smart Business Cards</title>
        <meta name="description" content="Crafting Digital Connections" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseProvider firebaseApp={firebaseApp} auth={auth} firestore={firestore}>
            {children}
          </FirebaseProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
