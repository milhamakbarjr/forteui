'use client';

import React, { useState } from 'react';
import { Button } from '@forteui/core';
import { ComponentShowcase } from './ComponentShowcase';
import { ClientOnly } from './ClientOnly';

function InteractiveButtons() {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleAsyncAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClickCount(prev => prev + 1);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      
      <div className="flex gap-4 items-center">
        <Button 
          variant="primary" 
          onClick={handleAsyncAction}
          disabled={loading}
        >
          {loading ? 'Processing...' : `Clicked ${clickCount} times`}
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => setClickCount(0)}
          disabled={loading}
        >
          Reset
        </Button>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg text-sm">
        <strong>Status:</strong> {loading ? 'Processing...' : 'Ready'} |
        <strong> Click Count:</strong> {clickCount}
      </div>
    </div>
  );
}

export function InteractiveButtonDemo() {
  const demoCode = `function InteractiveButtonDemo() {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleAsyncAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClickCount(prev => prev + 1);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      
      <div className="flex gap-4 items-center">
        <Button 
          variant="primary" 
          onClick={handleAsyncAction}
          disabled={loading}
        >
          {loading ? 'Processing...' : \`Clicked \${clickCount} times\`}
        </Button>
        <Button onClick={() => setClickCount(0)}>Reset</Button>
      </div>
    </div>
  );
}`;

  return (
    <ComponentShowcase 
      title="Interactive Button Demo" 
      description="Live demonstration of button interactions and state management."
      code={demoCode}
    >
      <ClientOnly fallback={
        <div className="flex gap-4 items-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      }>
        <InteractiveButtons />
      </ClientOnly>
    </ComponentShowcase>
  );
}
