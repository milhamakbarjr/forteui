'use client';

import React, { useState, useCallback } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from '@forteui/core';

// Import all ForteUI components for the playground
const scope = {
  React,
  useState: React.useState,
  useEffect: React.useEffect,
  Button,
  // We'll add more components as needed
};

interface CodePlaygroundProps {
  code: string;
  title?: string;
  description?: string;
  editable?: boolean;
  showPreview?: boolean;
  language?: string;
}

export function CodePlayground({
  code,
  title,
  description,
  editable = true,
  showPreview = true,
  language = 'tsx'
}: CodePlaygroundProps) {
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  const [currentCode, setCurrentCode] = useState(code);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [currentCode]);

  const resetCode = useCallback(() => {
    setCurrentCode(code);
  }, [code]);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      {(title || description) && (
        <div className="border-b border-gray-200 p-4 bg-gray-50">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}

      <LiveProvider code={currentCode} scope={scope} language={language}>
        {/* Preview Section */}
        {showPreview && (
          <div className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Preview</span>
              <div className="flex items-center gap-2">
                {editable && (
                  <Button
                    variant="outline-default"
                    size="sm"
                    onClick={() => setIsEditorVisible(!isEditorVisible)}
                  >
                    {isEditorVisible ? 'Hide Code' : 'Show Code'}
                  </Button>
                )}
                <Button
                  variant="outline-default"
                  size="sm"
                  onClick={handleCopy}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                {editable && currentCode !== code && (
                  <Button
                    variant="outline-default"
                    size="sm"
                    onClick={resetCode}
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>
            
            <div className="min-h-[100px] p-4 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
              <LivePreview />
            </div>
            
            <LiveError className="mt-2 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm" />
          </div>
        )}

        {/* Code Editor Section */}
        {editable && isEditorVisible && (
          <div className="border-t border-gray-200">
            <div className="p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Code Editor</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Live editing enabled</span>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <LiveEditor
                  onChange={setCurrentCode}
                  style={{
                    fontFamily: 'SF Mono, Monaco, Inconsolata, "Roboto Mono", Consolas, monospace',
                    fontSize: 14,
                    lineHeight: 1.5,
                    padding: '16px',
                    backgroundColor: '#1a1a1a',
                    color: '#e1e1e1',
                    minHeight: '200px',
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Static Code Display (when not editable) */}
        {!editable && (
          <div className="border-t border-gray-200">
            <div className="p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Code</span>
                <Button
                  variant="outline-default"
                  size="sm"
                  onClick={handleCopy}
                  className="text-gray-300 hover:text-white"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{currentCode}</code>
              </pre>
            </div>
          </div>
        )}
      </LiveProvider>
    </div>
  );
}

// Preset playground configurations for common patterns
export const PlaygroundPresets = {
  button: `function ButtonExample() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="space-y-4">
      <Button 
        variant="primary" 
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </Button>
      
      <Button variant="outline-default">
        Secondary Action
      </Button>
    </div>
  );
}`,

  form: `function FormExample() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      
      <Button 
        type="submit" 
        variant="primary"
        disabled={!email || submitted}
      >
        {submitted ? 'Submitted!' : 'Submit'}
      </Button>
    </form>
  );
}`,

  interactive: `function InteractiveExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const startProcess = () => {
    setIsLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  
  return (
    <div className="space-y-4">
      <Button 
        variant="primary" 
        onClick={startProcess}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Start Process'}
      </Button>
      
      {isLoading && (
        <div className="space-y-2">
          <div className="text-sm text-gray-600">Progress: {progress}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-main h-2 rounded-full transition-all duration-200"
              style={{ width: \`\${progress}%\` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}`
}; 