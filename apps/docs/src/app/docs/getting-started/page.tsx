import { Heading, Text, Button } from '@forteui/core';
import { CodeBlock } from '@/components/CodeBlock';

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading level={1} className="mb-4">Getting Started</Heading>
        <Text variant="body" color="secondary" className="mb-6">
          Learn how to install and start using ForteUI in your React application.
        </Text>
      </div>

      <div id="installation">
        <Heading level={2} className="mb-4">Installation</Heading>
        <Text variant="body" className="mb-4">
          Install ForteUI using your preferred package manager:
        </Text>
        
        <div className="space-y-4">
          <div>
            <Text variant="body-sm" className="mb-2 font-medium">npm</Text>
            <CodeBlock language="bash" code="npm install @forteui/core" />
          </div>
          
          <div>
            <Text variant="body-sm" className="mb-2 font-medium">yarn</Text>
            <CodeBlock language="bash" code="yarn add @forteui/core" />
          </div>
          
          <div>
            <Text variant="body-sm" className="mb-2 font-medium">pnpm</Text>
            <CodeBlock language="bash" code="pnpm add @forteui/core" />
          </div>
        </div>
      </div>

      <div id="usage">
        <Heading level={2} className="mb-4">Usage</Heading>
        <Text variant="body" className="mb-4">
          Import and use ForteUI components in your React application:
        </Text>
        
        <CodeBlock 
          language="tsx" 
          code={`import React from 'react';
import { Button, Heading, Text } from '@forteui/core';

function App() {
  return (
    <div>
      <Heading level={1}>Welcome to ForteUI</Heading>
      <Text variant="body" className="mb-4">
        A beautiful React component library
      </Text>
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  );
}

export default App;`}
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <Heading level={3} className="mb-2 text-blue-900">TypeScript Support</Heading>
        <Text variant="body" className="text-blue-800">
          ForteUI is built with TypeScript and provides complete type definitions out of the box.
          No additional @types packages needed!
        </Text>
      </div>

      <div id="next-steps">
        <Heading level={2} className="mb-4">Next Steps</Heading>
        <Text variant="body" className="mb-4">
          Now that you have ForteUI installed, explore the available components:
        </Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <Heading level={3} className="mb-2">Components</Heading>
            <Text variant="body-sm" color="secondary" className="mb-3">
              Explore all available UI components with examples and API documentation.
            </Text>
            <Button variant="outline-default" size="sm">
              View Components
            </Button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <Heading level={3} className="mb-2">Design System</Heading>
            <Text variant="body-sm" color="secondary" className="mb-3">
              Learn about ForteUI's design principles, tokens, and customization options.
            </Text>
            <Button variant="outline-default" size="sm">
              Design System
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
