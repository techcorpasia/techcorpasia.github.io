import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Tech Corp Asia - Leading Technology Solutions Provider',
    template: '%s | Tech Corp Asia'
  },
  description: 'Tech Corp Asia is a premier technology company specializing in automation, website development, cybersecurity, mobile apps, AI solutions, and tech consultation. Transform your business with cutting-edge technology.',
  keywords: [
    'technology solutions',
    'automation',
    'website development',
    'cybersecurity',
    'mobile development',
    'AI solutions',
    'tech consultation',
    'digital transformation',
    'software development',
    'IT services'
  ],
  authors: [{ name: 'Tech Corp Asia' }],
  creator: 'Tech Corp Asia',
  publisher: 'Tech Corp Asia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techcorpasia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techcorpasia.com',
    title: 'Tech Corp Asia - Leading Technology Solutions Provider',
    description: 'Transform your business with cutting-edge technology solutions including automation, website development, cybersecurity, mobile apps, and AI solutions.',
    siteName: 'Tech Corp Asia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Corp Asia - Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Corp Asia - Leading Technology Solutions Provider',
    description: 'Transform your business with cutting-edge technology solutions including automation, website development, cybersecurity, mobile apps, and AI solutions.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 