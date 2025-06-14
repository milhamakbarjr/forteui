'use client';

import { useState } from 'react';
import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconCopy, IconCheck, IconArrowRight, IconTerminal } from '@tabler/icons-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const installCode = `npm install @forteui/core
# or
yarn add @forteui/core
# or  
pnpm add @forteui/core`;

const usageCode = `import { Button, Card, Input } from '@forteui/core';

function App() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Welcome to ForteUI</h2>
      <Input placeholder="Enter your email" className="mb-4" />
      <Button variant="primary" className="w-full">
        Get Started
      </Button>
    </Card>
  );
}`;

export function QuickStart() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);

  const copyInstall = async () => {
    await navigator.clipboard.writeText('npm install @forteui/core');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  const copyUsage = async () => {
    await navigator.clipboard.writeText(usageCode);
    setCopiedUsage(true);
    setTimeout(() => setCopiedUsage(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-50 border border-success-200 rounded-full text-success-700 text-sm font-medium mb-6">
            <IconTerminal size={16} />
            <span>Quick Setup</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Install ForteUI and start building beautiful interfaces immediately. 
            No complex setup required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Installation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-medium ml-2">
                    Installation
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyInstall}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300 text-sm transition-colors"
                >
                  {copiedInstall ? (
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
              
              <SyntaxHighlighter
                language="bash"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: 'transparent',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}
                showLineNumbers={false}
              >
                {installCode}
              </SyntaxHighlighter>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold text-xs">1</span>
                </div>
                <span>Install the package via npm, yarn, or pnpm</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold text-xs">2</span>
                </div>
                <span>Import components and start building</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold text-xs">3</span>
                </div>
                <span>Customize with your design tokens</span>
              </div>
            </div>
          </motion.div>

          {/* Usage Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-medium ml-2">
                    App.tsx
                  </span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyUsage}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300 text-sm transition-colors"
                >
                  {copiedUsage ? (
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
              
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: 'transparent',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}
                showLineNumbers={false}
              >
                {usageCode}
              </SyntaxHighlighter>
            </div>

            <div className="mt-6">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Ready to build?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Explore our comprehensive documentation with live examples and detailed API references.
                </p>
                <div className="flex gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="primary" size="sm">
                      <Link href="/docs/getting-started" className="flex items-center gap-2">
                        Full Guide
                        <IconArrowRight size={14} />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline-default" size="sm">
                      <Link href="/docs/components">View Components</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
