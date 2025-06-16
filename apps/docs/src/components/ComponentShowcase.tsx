'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@forteui/core';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
  className?: string;
}

export function ComponentShowcase({ 
  title, 
  description, 
  children, 
  code,
  className = '' 
}: ComponentShowcaseProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    if (code) {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    }
  };

  // Don't render interactive elements until mounted on client
  if (!mounted) {
    return (
      <div className="border border-gray-200 rounded-lg mb-6">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              {description && (
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              )}
            </div>
          </div>
        </div>
        <div className={`p-6 bg-white ${className}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-lg mb-6">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
          <div className="flex gap-2">
            {code && (
              <>
                <Button
                  variant="outline-default"
                  size="sm"
                  onClick={handleCopy}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button
                  variant="outline-default"
                  size="sm"
                  onClick={() => setShowCode(!showCode)}
                >
                  {showCode ? 'Hide Code' : 'Show Code'}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className={`p-6 bg-white ${className}`}>
        {children}
      </div>

      {/* Code */}
      {code && showCode && (
        <div className="border-t border-gray-200">
          <pre className="p-4 bg-gray-50 text-sm overflow-x-auto">
            <code className="text-gray-800">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

// Component variants for easy use in MDX
export function ButtonShowcase({ 
  children, 
  code, 
  title = "Button Variants",
  description = "Try different button variants and see the changes in real-time"
}: Omit<ComponentShowcaseProps, 'children'> & { children?: React.ReactNode }) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </ComponentShowcase>
  );
}

export function ButtonSizeShowcase({ 
  children, 
  code,
  title = "Button Sizes",
  description = "Interactive example with different sizes, loading states, and disabled buttons"
}: Omit<ComponentShowcaseProps, 'children'> & { children?: React.ReactNode }) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        {children}
      </div>
    </ComponentShowcase>
  );
}
