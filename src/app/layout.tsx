
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext';
import AdBlockDetector from '@/components/layout/AdBlockDetector';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hustle Finder',
  description: 'Find your next side hustle and get AI-powered description assistance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Adsterra Popunder Ad Code */}
        <script type='text/javascript' src='//jackalclenchedbedside.com/ec/07/c1/ec07c17a32efce457d679024e1f8ffbe.js'></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
              <AdBlockDetector>
                <Header />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                  {children}
                </main>
                <Footer />
                <Toaster />
                <ScrollToTopButton />
              </AdBlockDetector>
          </AuthProvider>
        </ThemeProvider>
        {/* Adsterra Social Bar Ad Code */}
        <script type='text/javascript' src='//jackalclenchedbedside.com/94/0f/ff/940fff7131c886df3d66c9f960bf9916.js'></script>
      </body>
    </html>
  );
}
