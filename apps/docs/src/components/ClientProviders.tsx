'use client';

import { RootProvider } from 'fumadocs-ui/provider';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <RootProvider>
      {children}
    </RootProvider>
  );
} 