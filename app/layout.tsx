import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ArcSpace - Modern Architecture Agency',
  description: 'Professional architectural solutions for innovative and sustainable design. Crafting modern architecture for a better future.',
  keywords: 'architecture, design, sustainable, modern, buildings, residential, commercial',
  authors: [{ name: 'ArcSpace' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ArcSpace - Modern Architecture Agency',
    description: 'Professional architectural solutions for innovative and sustainable design.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-syne antialiased">
        {children}
      </body>
    </html>
  );
}