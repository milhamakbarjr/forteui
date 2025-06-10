'use client';

import React from 'react';
import { Button } from '@forteui/core';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you would send this to an error reporting service
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, etc.
      // captureException(error, { extra: errorInfo });
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback } = this.props;
      
      if (Fallback && this.state.error) {
        return <Fallback error={this.state.error} retry={this.handleRetry} />;
      }

      return <DefaultErrorFallback error={this.state.error} retry={this.handleRetry} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error: Error | null;
  retry: () => void;
}

function DefaultErrorFallback({ error, retry }: ErrorFallbackProps) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-red-100">
            <svg 
              className="h-12 w-12 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-4 justify-center">
            <Button variant="primary" onClick={retry}>
              Try Again
            </Button>
            <Button variant="outline-default" onClick={() => window.location.href = '/'}>
              Go Home
            </Button>
          </div>

          <div className="text-xs text-gray-500">
            <details className="mt-4">
              <summary className="cursor-pointer hover:text-gray-700">
                Technical Details
              </summary>
              <div className="mt-2 p-3 bg-gray-100 rounded text-left">
                <p className="font-mono text-xs break-all">
                  {error?.message || 'Unknown error occurred'}
                </p>
                {isDev && error?.stack && (
                  <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-32">
                    {error.stack}
                  </pre>
                )}
              </div>
            </details>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500">
            If this error persists, please{' '}
            <a 
              href="mailto:support@forteui.dev" 
              className="text-primary-main hover:text-primary-600"
            >
              contact our support team
            </a>
            {' '}with the technical details above.
          </p>
        </div>
      </div>
    </div>
  );
}

// Specialized error fallbacks for different contexts
export function ComponentErrorFallback({ error, retry }: ErrorFallbackProps) {
  return (
    <div className="p-6 border border-red-200 bg-red-50 rounded-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg 
            className="h-5 w-5 text-red-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800">
            Component Error
          </h3>
          <p className="mt-1 text-sm text-red-700">
            {error?.message || 'This component failed to render properly.'}
          </p>
          <div className="mt-4">
            <Button variant="outline-error" size="sm" onClick={retry}>
              Retry Component
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallbacks
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg 
          className="w-full h-full text-primary-main" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    </div>
  );
}

// Page loading fallback
export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-lg text-gray-600">Loading ForteUI Documentation...</p>
      </div>
    </div>
  );
}

// Search loading state
export function SearchLoading() {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4 flex items-center justify-center">
        <LoadingSpinner size="sm" />
        <span className="ml-2 text-sm text-gray-600">Searching...</span>
      </div>
    </div>
  );
} 