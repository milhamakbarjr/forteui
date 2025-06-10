'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import { ErrorBoundary } from './ErrorBoundary';
import { 
  SkipLinks, 
  KeyboardNavigationProvider, 
  ScreenReaderAnnouncements, 
  ReducedMotionProvider,
  AccessibilityPanel 
} from './AccessibilityFeatures';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      {/* Skip links for accessibility - render first for proper tab order */}
      <SkipLinks />
      
      {/* Screen reader announcements - for route changes */}
      <ScreenReaderAnnouncements />
      
      <ErrorBoundary>
        <ReducedMotionProvider>
          <KeyboardNavigationProvider>
            <RootProvider>
              {children}
              
              {/* Accessibility panel - render last so it's always accessible */}
              <AccessibilityPanel />
            </RootProvider>
          </KeyboardNavigationProvider>
        </ReducedMotionProvider>
      </ErrorBoundary>
    </>
  );
} 