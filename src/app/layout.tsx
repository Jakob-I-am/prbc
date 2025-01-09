import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const rubikSans = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
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
      <body className={`${rubikSans.variable} antialiased bg-neutral-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
