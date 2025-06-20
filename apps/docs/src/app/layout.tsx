import '../styles/globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/next';

// Import CSS loader for production safety
import '@/lib/css-loader';

// Dynamic imports for client components to avoid server/client boundary issues
const ClientProviders = dynamic(() => import('@/components/ClientProviders'), {
  ssr: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap', // Add font-display: swap for better loading performance
  fallback: ['system-ui', 'Arial', 'sans-serif'], // Add fallback fonts
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://forteui.com'),
  title: {
    default: 'ForteUI - Modern React Component Library',
    template: '%s | ForteUI'
  },
  description: 'ForteUI is a modern, production-ready React UI component library with 17 accessible components, a comprehensive design system, and TypeScript support.',
  keywords: [
    'React components',
    'UI library',
    'TypeScript',
    'Design system',
    'Accessibility',
    'Plus Jakarta Sans',
    'Component library',
    'React UI',
    'Frontend',
    'Web development',
    'WCAG 2.1',
    'ForteUI',
    'UI kit',
    'Open source UI',
    'Frontend toolkit',
    'Developer tools',
    'Modern UI',
    'Accessible components'
  ],
  authors: [
    {
      name: 'ForteUI Team',
      url: 'https://forteui.com'
    }
  ],
  creator: 'ForteUI Team',
  publisher: 'ForteUI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://forteui.com',
    title: 'ForteUI - Modern React Component Library',
    description: 'ForteUI is a modern, production-ready React UI component library with 17 accessible components, a comprehensive design system, and TypeScript support.',
    siteName: 'ForteUI',
    images: [
      {
        url: 'https://forteui.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ForteUI - Modern React Component Library'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://forteui.com',
    types: {
      'application/rss+xml': 'https://forteui.com/feed.xml'
    }
  },
  category: 'technology',
  classification: 'React Component Library',
  other: {
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml'
  }
};

// Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ForteUI',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  description: 'ForteUI is a modern, production-ready React UI component library with 17 accessible components, a comprehensive design system, and TypeScript support.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  creator: {
    '@type': 'Organization',
    name: 'ForteUI Team',
    url: 'https://forteui.com'
  },
  softwareVersion: '1.0.0',
  programmingLanguage: 'TypeScript',
  runtimePlatform: 'React',
  downloadUrl: 'https://www.npmjs.com/package/@forteui/core',
  screenshot: 'https://forteui.com/og-image.png',
  featureList: [
    '17 React Components',
    'TypeScript Support',
    'WCAG 2.1 AA Accessibility',
    'Plus Jakarta Sans Typography',
    'Interactive Documentation',
    'Design System',
    'Mobile Responsive'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased font-medium forte-ui">
        <ClientProviders>
          {children}
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
