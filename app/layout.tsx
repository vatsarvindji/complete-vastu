import './globals.css';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Complete Vastu Solution - Expert Vastu Consultant Dr. Arvind Vats',
  description: 'Get expert Vastu consultancy from Dr. Arvind Vats with 20+ years of experience and 20,000+ successful consultations. Specializing in residential, commercial, industrial Vastu and non-demolition remedies.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.completevastu.com/',
    title: 'Complete Vastu Solution - Expert Vastu Consultant Dr. Arvind Vats',
    description: 'Get expert Vastu consultancy from Dr. Arvind Vats with 20+ years of experience and 20,000+ successful consultations. Specializing in residential, commercial, industrial Vastu and non-demolition remedies.',
    siteName: 'Complete Vastu Solution',
    images: [
      {
        url: 'https://www.completevastu.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Complete Vastu Solution - Expert Vastu Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Vastu Solution - Expert Vastu Consultant Dr. Arvind Vats',
    description: 'Get expert Vastu consultancy from Dr. Arvind Vats with 20+ years of experience and 20,000+ successful consultations.',
    images: ['https://www.completevastu.com/twitter-image.jpg'],
    creator: '@CompleteVastu',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Complete Vastu Solution",
              "image": "https://www.completevastu.com/logo.png",
              "@id": "https://www.completevastu.com/",
              "url": "https://www.completevastu.com/",
              "telephone": "+91-98765-43210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Delhi, India",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98765-43210",
                "contactType": "Customer Service",
                "areaServed": "IN"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}