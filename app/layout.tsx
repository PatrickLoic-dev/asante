import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ASANTE ARTSY - Modern Architecture Agency',
  description: 'Professional architectural solutions for innovative and sustainable design. Crafting modern architecture for a better future.',
  keywords: 'architecture, design, sustainable, modern, buildings, residential, commercial',
  authors: [{ name: 'ASANTE ARTSY' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ASANTE ARTSY - Modern Architecture Agency',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://asanteartsy.vercel.app",
          "name": "ASANTE ARTSY",
          "description": "Professional architectural solutions for innovative and sustainable design. Crafting modern architecture for a better future.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://asanteartsy.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        ` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://asanteartsy.vercel.app"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://asanteartsy.vercel.app/about"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Services",
              "item": "https://asanteartsy.vercel.app/services"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://asanteartsy.vercel.app/projects"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Contact",
              "item": "https://asanteartsy.vercel.app/contact"
            }
          ]
        }
        ` }} />
      </head>
      <body className="font-syne antialiased">
        {children}
      </body>
    </html>
  );
}