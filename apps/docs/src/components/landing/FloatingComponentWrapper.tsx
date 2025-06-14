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
    console.error(`FloatingComponent ${this.props.componentId} error:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 text-xs text-gray-500">
          Component Error
        </div>
      );
    }

    return this.props.children;
  }
}
