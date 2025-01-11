import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const rubikSans = Rubik({
  variable: '--font-rubik-sans',
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
      <body
        className={`${rubikSans.className} antialiased bg-secondary w-11/12 mx-auto`}
      >
        <Navbar />
        <div className='min-h-screen bg-primary rounded-[2rem]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
