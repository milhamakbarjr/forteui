'use client';

import { useState } from 'react';
import { Button, Card, Input, Switch, Badge, Avatar } from '@forteui/core';
import { motion } from 'framer-motion';
import { IconCode, IconCopy, IconCheck, IconPalette, IconPointer } from '@tabler/icons-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeExamples = {
  button: `import { Button } from '@forteui/core';

<Button variant="primary" size="lg">
  Get Started
</Button>`,
  card: `import { Card } from '@forteui/core';

<Card className="p-6">
  <h3>Beautiful Card</h3>
  <p>With ForteUI styling</p>
</Card>`,
  input: `import { Input } from '@forteui/core';

<Input 
  placeholder="Enter your email"
  type="email"
/>`,
  switch: `import { Switch } from '@forteui/core';

<Switch 
  checked={enabled}
  onCheckedChange={setEnabled}
/>`
};

const components = [
  {
    id: 'button',
    name: 'Button',
    description: 'Versatile button component with multiple variants',
    component: (
      <div className="flex gap-3 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="outline-default">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    )
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Flexible container for content grouping',  
    component: (
      <Card className="p-4 max-w-sm">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-sm">John Doe</h4>
            <p className="text-xs text-gray-500">Product Designer</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Beautiful card component with clean design and flexible content layout.
        </p>
      </Card>
    )
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Form input with built-in validation states',
    component: (
      <div className="w-full max-w-sm">
        <Input placeholder="Enter your email" className="mb-2" />
        <Input placeholder="Disabled state" disabled />
      </div>
    )
  },
  {
    id: 'switch',
    name: 'Switch',
    description: 'Toggle control for binary choices',
    component: (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Switch defaultChecked />
          <span className="text-sm">Enabled</span>
        </div>
        <div className="flex items-center gap-2">
          <Switch />
          <span className="text-sm">Disabled</span>
        </div>
      </div>
    )
  }
];

export function ComponentShowcase() {
  const [activeComponent, setActiveComponent] = useState('button');
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(codeExamples[activeComponent as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
            <IconPalette size={16} />
            <span>Interactive Component Demo</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience ForteUI Components
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our components in action. Click, interact, and copy the code to get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Component Selection & Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-3">
              {components.map((component) => (
                <motion.button
                  key={component.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveComponent(component.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    activeComponent === component.id
                      ? 'border-primary-main bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <h3 className="font-semibold text-sm mb-1">{component.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {component.description}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Active Component Preview */}
            <Card className="p-8 bg-white border-2">
              <div className="flex items-center gap-2 mb-6">
                <IconPointer size={16} className="text-primary-600" />
                <h3 className="font-semibold text-gray-900">
                  {components.find(c => c.id === activeComponent)?.name}
                </h3>
              </div>
              
              <div className="flex items-center justify-center min-h-[120px] bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-lg">
                {components.find(c => c.id === activeComponent)?.component}
              </div>
            </Card>
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <IconCode size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm font-medium">
                    {components.find(c => c.id === activeComponent)?.name}.tsx
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyCode}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 text-sm transition-colors"
                >
                  {copied ? (
                    <>
                      <IconCheck size={14} className="text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <IconCopy size={14} />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>
              
              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={oneLight}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    background: 'transparent',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}
                  showLineNumbers={false}
                >
                  {codeExamples[activeComponent as keyof typeof codeExamples]}
                </SyntaxHighlighter>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Components', value: '17' },
                { label: 'Variants', value: '50+' },
                { label: 'Bundle Size', value: '<50kb' }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2 }}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200"
                >
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
