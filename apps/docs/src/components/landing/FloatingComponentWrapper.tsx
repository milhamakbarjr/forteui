'use client';

import React from 'react';

interface FloatingComponentWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  componentId: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class FloatingComponentWrapper extends React.Component<FloatingComponentWrapperProps, ErrorBoundaryState> {
  constructor(props: FloatingComponentWrapperProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Simple error logging
    if (process.env.NODE_ENV === 'development') {
      console.error(`FloatingComponent ${this.props.componentId} error:`, error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-2 bg-gray-100/80 rounded-lg border border-gray-200/60 text-xs text-gray-500 backdrop-blur-sm">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>Component unavailable</span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
