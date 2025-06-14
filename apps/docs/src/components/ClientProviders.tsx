'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import { ErrorBoundary } from './ErrorBoundary';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ErrorBoundary>
      <RootProvider>
        {children}
      </RootProvider>
    </ErrorBoundary>
  );
} 