'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@forteui/core';

// Skip Links Component
export function SkipLinks() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] bg-primary-main text-white px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition-all"
      >
        Skip to main content
      </a>
      <a
        href="#sidebar-navigation"
        className="fixed top-4 left-32 z-[100] bg-primary-main text-white px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition-all"
      >
        Skip to navigation
      </a>
      <a
        href="#search"
        className="fixed top-4 left-60 z-[100] bg-primary-main text-white px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition-all"
      >
        Skip to search
      </a>
    </div>
  );
}

// Focus Management Hook
export function useFocusManagement() {
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      setFocusedElement(event.target as HTMLElement);
    };

    const handleBlur = () => {
      setFocusedElement(null);
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, []);

  const moveFocus = (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
    }
  };

  return { focusedElement, moveFocus };
}

// Keyboard Navigation Helper
export function KeyboardNavigationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Global keyboard shortcuts
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'k':
            event.preventDefault();
            // Focus search input
            const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
            if (searchInput) {
              searchInput.focus();
            }
            break;
          case '/':
            event.preventDefault();
            // Focus search input (alternative)
            const searchInputAlt = document.querySelector('input[type="text"]') as HTMLInputElement;
            if (searchInputAlt) {
              searchInputAlt.focus();
            }
            break;
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        // Close modals, dropdowns, etc.
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <>{children}</>;
}

// Screen Reader Announcements
export function ScreenReaderAnnouncements() {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    // Listen for route changes and announce them
    const handleRouteChange = () => {
      const title = document.title;
      setAnnouncement(`Navigated to ${title}`);
      
      // Clear announcement after a short delay
      setTimeout(() => setAnnouncement(''), 1000);
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}

// Reduced Motion Provider
export function ReducedMotionProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    // Apply reduced motion class to document
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [prefersReducedMotion]);

  return <>{children}</>;
}

// High Contrast Mode Toggle
export function HighContrastToggle() {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Check for saved preference
    const saved = localStorage.getItem('high-contrast');
    if (saved) {
      setHighContrast(saved === 'true');
    }
  }, []);

  useEffect(() => {
    // Apply high contrast class
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Save preference
    localStorage.setItem('high-contrast', highContrast.toString());
  }, [highContrast]);

  return (
    <Button
      variant="outline-default"
      size="sm"
      onClick={() => setHighContrast(!highContrast)}
      aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
      className="fixed bottom-4 right-4 z-50 lg:relative lg:bottom-auto lg:right-auto lg:z-auto"
    >
      {highContrast ? '🌙' : '☀️'}
    </Button>
  );
}

// Font Size Controller
export function FontSizeController() {
  const [fontSize, setFontSize] = useState('medium');

  useEffect(() => {
    // Check for saved preference
    const saved = localStorage.getItem('font-size');
    if (saved) {
      setFontSize(saved);
    }
  }, []);

  useEffect(() => {
    // Apply font size class
    document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
    document.documentElement.classList.add(`font-${fontSize}`);

    // Save preference
    localStorage.setItem('font-size', fontSize);
  }, [fontSize]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Text size:</span>
      <div className="flex border border-gray-300 rounded-md">
        {[
          { key: 'small', label: 'A', title: 'Small text' },
          { key: 'medium', label: 'A', title: 'Medium text' },
          { key: 'large', label: 'A', title: 'Large text' }
        ].map(size => (
          <button
            key={size.key}
            onClick={() => setFontSize(size.key)}
            className={`px-3 py-1 text-sm border-r border-gray-300 last:border-r-0 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset ${
              fontSize === size.key ? 'bg-primary-main text-white' : 'text-gray-700'
            } ${size.key === 'small' ? 'text-xs' : size.key === 'large' ? 'text-base font-medium' : ''}`}
            title={size.title}
            aria-label={size.title}
            aria-pressed={fontSize === size.key}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Accessibility Status Indicator
export function AccessibilityStatus() {
  const [status, setStatus] = useState({
    keyboardNavigation: true,
    screenReader: false,
    highContrast: false,
    reducedMotion: false
  });

  useEffect(() => {
    // Check for accessibility preferences
    const updateStatus = () => {
      setStatus({
        keyboardNavigation: true, // Always available
        screenReader: window.navigator.userAgent.includes('NVDA') || 
                     window.navigator.userAgent.includes('JAWS') ||
                     window.speechSynthesis !== undefined,
        highContrast: document.documentElement.classList.contains('high-contrast'),
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });
    };

    updateStatus();

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', updateStatus);

    return () => {
      mediaQuery.removeEventListener('change', updateStatus);
    };
  }, []);

  return (
    <div className="text-xs text-gray-500 space-y-1">
      <div className="font-medium">Accessibility Status:</div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className={status.keyboardNavigation ? 'text-green-600' : 'text-gray-400'}>
            ✓
          </span>
          <span>Keyboard Navigation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={status.screenReader ? 'text-green-600' : 'text-gray-400'}>
            {status.screenReader ? '✓' : '○'}
          </span>
          <span>Screen Reader Support</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={status.highContrast ? 'text-green-600' : 'text-gray-400'}>
            {status.highContrast ? '✓' : '○'}
          </span>
          <span>High Contrast</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={status.reducedMotion ? 'text-green-600' : 'text-gray-400'}>
            {status.reducedMotion ? '✓' : '○'}
          </span>
          <span>Reduced Motion</span>
        </div>
      </div>
    </div>
  );
}

// Combined Accessibility Panel
export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline-default"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        className="fixed bottom-4 left-4 z-50"
      >
        ♿
      </Button>

      {isOpen && (
        <div className="fixed bottom-16 left-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Accessibility Settings</h3>
            
            <FontSizeController />
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">High Contrast:</span>
              <HighContrastToggle />
            </div>
            
            <AccessibilityStatus />
            
            <div className="border-t border-gray-200 pt-3">
              <p className="text-xs text-gray-500">
                Use Ctrl+K (Cmd+K) to focus search. Press Escape to close menus.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 