import '../styles/globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

// Dynamic imports for client components to avoid server/client boundary issues
const ClientProviders = dynamic(() => import('@/components/ClientProviders'), {
  ssr: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
  metadataBase: new URL('https://forteui.dev'),
  title: {
    default: 'ForteUI - Modern React Component Library',
    template: '%s | ForteUI'
  },
  description: 'A production-ready React component library with 17 components, comprehensive design system, TypeScript support, and interactive documentation. Built with Plus Jakarta Sans and WCAG 2.1 AA accessibility.',
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
    'ForteUI'
  ],
  authors: [
    {
      name: 'ForteUI Team',
      url: 'https://forteui.dev'
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
    url: 'https://forteui.dev',
    title: 'ForteUI - Modern React Component Library',
    description: 'A production-ready React component library with 17 components, comprehensive design system, and interactive documentation.',
    siteName: 'ForteUI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ForteUI - Modern React Component Library'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForteUI - Modern React Component Library',
    description: 'A production-ready React component library with 17 components, comprehensive design system, and interactive documentation.',
    images: ['/og-image.png'],
    creator: '@forteui'
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
    canonical: 'https://forteui.dev',
    types: {
      'application/rss+xml': 'https://forteui.dev/feed.xml'
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
  description: 'A production-ready React component library with 17 components, comprehensive design system, and interactive documentation.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  creator: {
    '@type': 'Organization',
    name: 'ForteUI Team',
    url: 'https://forteui.dev'
  },
  softwareVersion: '1.0.0',
  programmingLanguage: 'TypeScript',
  runtimePlatform: 'React',
  downloadUrl: 'https://www.npmjs.com/package/@forteui/core',
  screenshot: 'https://forteui.dev/og-image.png',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/plus-jakarta-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased font-medium">
        <ClientProviders>
          {children}
        </ClientProviders>
        
        {/* Analytics placeholder - ready for Google Analytics or other services */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Analytics code would go here
              // Example: Google Analytics, Plausible, etc.
              console.log('ForteUI Documentation loaded');
            `
          }}
        />
      </body>
    </html>
  );
}
