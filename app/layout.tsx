import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asanteartsy.com'),
  title: {
    default: 'ASANTE ARTSY - Premier Architecture & Design Firm in Cameroon',
    template: '%s | ASANTE ARTSY'
  },
  description: 'Leading architectural firm in Cameroon specializing in sustainable, innovative design solutions. Expert architects delivering residential, commercial, and public projects across Africa since 2022.',
  keywords: [
    'architecture Cameroon',
    'architectural design Douala',
    'sustainable architecture',
    'residential design Cameroon',
    'commercial architecture',
    'interior architecture',
    'building design',
    'construction planning',
    'architectural services',
    'modern architecture Africa',
    'eco-friendly buildings',
    'architectural consultancy'
  ],
  authors: [{ name: 'ASANTE ARTSY', url: 'https://www.asanteartsy.com' }],
  creator: 'ASANTE ARTSY',
  publisher: 'ASANTE ARTSY',
  category: 'Architecture & Design',
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.asanteartsy.com',
    siteName: 'ASANTE ARTSY',
    title: 'ASANTE ARTSY - Premier Architecture & Design Firm in Cameroon',
    description: 'Leading architectural firm in Cameroon specializing in sustainable, innovative design solutions. Expert architects delivering exceptional projects across Africa.',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'ASANTE ARTSY - Architecture & Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASANTE ARTSY - Premier Architecture & Design Firm',
    description: 'Leading architectural firm specializing in sustainable, innovative design solutions across Cameroon and Africa.',
    images: ['/Logo.png'],
    creator: '@asanteartsy',
  },
  alternates: {
    canonical: 'https://www.asanteartsy.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
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
        
        {/* Enhanced JSON-LD for Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ASANTE ARTSY",
          "alternateName": "ASANTE ARTSY Architecture",
          "url": "https://www.asanteartsy.com",
          "logo": "https://www.asanteartsy.com/Logo.png",
          "description": "Leading architectural firm in Cameroon specializing in sustainable, innovative design solutions for residential, commercial, and public projects.",
          "foundingDate": "2022-09",
          "founders": [
            {
              "@type": "Person",
              "name": "Mandessi Kwelle",
              "jobTitle": "Principal Architect & Co-Founder"
            },
            {
              "@type": "Person", 
              "name": "Emmanuelle Karell Koupelle",
              "jobTitle": "Principal Architect & Co-Founder"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bonabassem, Deido",
            "addressLocality": "Douala",
            "addressCountry": "CM"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+237-694-261-423",
            "contactType": "customer service",
            "email": "asanteartsy@yahoo.com",
            "availableLanguage": ["English", "French"]
          },
          "sameAs": [
            "https://www.asanteartsy.com/about",
            "https://www.asanteartsy.com/projects",
            "https://www.asanteartsy.com/services"
          ],
          "serviceArea": {
            "@type": "Place",
            "name": "Cameroon and Africa"
          },
          "knowsAbout": [
            "Architecture",
            "Sustainable Design",
            "Interior Architecture", 
            "Commercial Buildings",
            "Residential Design",
            "Public Buildings"
          ]
        }
        ` }} />
        
        {/* Enhanced JSON-LD for Website */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.asanteartsy.com",
          "name": "ASANTE ARTSY",
          "description": "Leading architectural firm in Cameroon specializing in sustainable, innovative design solutions for residential, commercial, and public projects.",
          "publisher": {
            "@type": "Organization",
            "name": "ASANTE ARTSY"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.asanteartsy.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-US"
        }
        ` }} />
        
        {/* Enhanced JSON-LD for BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.asanteartsy.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://www.asanteartsy.com/about"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Services",
              "item": "https://www.asanteartsy.com/services"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://www.asanteartsy.com/projects"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Contact",
              "item": "https://www.asanteartsy.com/contact"
            }
          ]
        }
        ` }} />
        
        {/* Professional Services JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "ASANTE ARTSY",
          "url": "https://www.asanteartsy.com",
          "description": "Professional architectural services including design, planning, and construction administration",
          "serviceType": "Architecture and Design Services",
          "provider": {
            "@type": "Organization",
            "name": "ASANTE ARTSY"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Cameroon and Africa"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Architectural Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Architectural Design",
                  "description": "Complete architectural design services from concept to construction"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Interior Architecture",
                  "description": "Interior design and space planning services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Sustainable Design",
                  "description": "Environmentally conscious architectural solutions"
                }
              }
            ]
          }
        }
        ` }} />
      </head>
      <body className="font-syne antialiased">
        {children}
      </body>
    </html>
  );
}