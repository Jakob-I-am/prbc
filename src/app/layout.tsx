import type { Metadata } from 'next';
import { Rubik, Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const rubikSans = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Parkes Railway Bowling Club',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-secondary'>
        <div className={`${rubikSans.className} antialiased`}>
          <Navbar />
          <main>
            {children}

            <Toaster />
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
