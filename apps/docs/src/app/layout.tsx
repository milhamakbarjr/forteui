import '../styles/globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'ForteUI',
    template: '%s | ForteUI',
  },
  description: 'A production-ready React UI component library with custom design system and Plus Jakarta Sans typography',
  keywords: ['React', 'UI', 'Components', 'Design System', 'TypeScript'],
  authors: [{ name: 'ForteUI Team' }],
  openGraph: {
    title: 'ForteUI',
    description: 'A production-ready React UI component library with custom design system and Plus Jakarta Sans typography',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForteUI',
    description: 'A production-ready React UI component library with custom design system and Plus Jakarta Sans typography',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
