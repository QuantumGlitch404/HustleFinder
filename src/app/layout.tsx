
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { BookmarkProvider } from '@/context/BookmarkContext';

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <BookmarkProvider>
              <Header />
              <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {children}
              </main>
              <Footer />
              <Toaster />
              <ScrollToTopButton />
            </BookmarkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
