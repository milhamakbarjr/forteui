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
import { UserPreferencesProvider } from './UserPreferences';
import { PerformanceMonitor, PerformanceIndicator } from './PerformanceMonitor';

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
      
      {/* Performance monitoring - headless component */}
      <PerformanceMonitor />
      
      <ErrorBoundary>
        <UserPreferencesProvider>
          <ReducedMotionProvider>
            <KeyboardNavigationProvider>
              <RootProvider>
                {children}
                
                {/* Accessibility panel - render last so it's always accessible */}
                <AccessibilityPanel />
                
                {/* Performance indicator - only shows in development */}
                <PerformanceIndicator showDetails />
              </RootProvider>
            </KeyboardNavigationProvider>
          </ReducedMotionProvider>
        </UserPreferencesProvider>
      </ErrorBoundary>
    </>
  );
} 