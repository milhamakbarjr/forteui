'use client';

import { useState } from 'react';
import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconCopy, IconCheck, IconArrowRight, IconTerminal, IconDownload, IconBook, IconRocket } from '@tabler/icons-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const packageManagers = [
  { name: 'npm', command: 'npm install @forteui/core' },
  { name: 'yarn', command: 'yarn add @forteui/core' },
  { name: 'pnpm', command: 'pnpm add @forteui/core' },
  { name: 'bun', command: 'bun add @forteui/core' }
];

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
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [copiedUsage, setCopiedUsage] = useState(false);

  const copyCommand = async (command: string, commandName: string) => {
    await navigator.clipboard.writeText(command);
    setCopiedCommand(commandName);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const copyUsage = async () => {
    await navigator.clipboard.writeText(usageCode);
    setCopiedUsage(true);
    setTimeout(() => setCopiedUsage(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-50 border border-success-200 rounded-full text-success-700 text-sm font-medium mb-6">
            <IconTerminal size={16} />
            <span>Quick Setup</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Install ForteUI and start building beautiful interfaces immediately. 
            Zero configuration required, production-ready components.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Installation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between p-6 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <IconTerminal size={16} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">Installation</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                {packageManagers.map((pm, index) => (
                  <div key={pm.name}>
                    {index > 0 && (
                      <div className="text-gray-400 text-sm font-mono mb-2"># or</div>
                    )}
                    <div 
                      className="group relative flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-colors"
                      onClick={() => copyCommand(pm.command, pm.name)}
                    >
                      <code className="text-sm font-mono text-gray-800 select-none">
                        <span className="text-blue-600">{pm.name}</span> <span className="text-gray-600">{pm.name === 'npm' ? 'install' : 'add'}</span> <span className="text-purple-600">@forteui/core</span>
                      </code>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedCommand === pm.name ? (
                          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 border border-green-200 rounded text-green-700 text-xs font-medium">
                            <IconCheck size={14} />
                            Copied!
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded text-primary-700 text-xs font-medium">
                            <IconCopy size={14} />
                            Copy
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Install Package</h4>
                  <p className="text-gray-600 text-sm">Choose your preferred package manager and install ForteUI</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Import Components</h4>
                  <p className="text-gray-600 text-sm">Start importing and using components in your project</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Customize & Build</h4>
                  <p className="text-gray-600 text-sm">Adapt components to your design system and build amazing UIs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Usage Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between p-6 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <IconBook size={16} className="text-gray-600" />
                    <span className="text-gray-700 font-medium">App.tsx</span>
                  </div>
                </div>
                
                <button
                  onClick={copyUsage}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg text-primary-700 text-sm font-medium transition-colors"
                >
                  {copiedUsage ? (
                    <>
                      <IconCheck size={16} className="text-primary-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <IconCopy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>
              
              <div className="p-6">
                <SyntaxHighlighter
                  language="tsx"
                  style={oneLight}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    background: 'transparent',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
                  }}
                  showLineNumbers={false}
                >
                  {usageCode}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconRocket size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pro Tip</h4>
                  <p className="text-gray-600 text-sm">
                    All components are fully typed with TypeScript and come with comprehensive documentation. 
                    Start with our examples and customize to match your brand.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-main to-secondary-main rounded-3xl opacity-10"></div>
          <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 border border-primary-200 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
                <IconRocket size={16} />
                <span>Ready to Build Amazing UIs?</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Building with ForteUI Today
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Join developers who are already building production-ready applications with our 
                comprehensive component library. Get started with our detailed guides and examples.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild variant="primary" size="lg" className="text-base px-8 py-4">
                <Link href="/docs/getting-started" className="flex items-center gap-2">
                  Get Started
                  <IconArrowRight size={18} />
                </Link>
              </Button>
              
              <Button asChild variant="outline-default" size="lg" className="text-base px-8 py-4">
                <Link href="/docs/components" className="flex items-center gap-2">
                  View Components
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconCheck size={20} className="text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">TypeScript First</h4>
              <p className="text-sm text-gray-600">Enjoy robust type safety and autocompletion out-of-the-box.</p>
              </div>
              <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconRocket size={20} className="text-secondary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Built for Scale</h4>
              <p className="text-sm text-gray-600">Reliable components, ready for your most demanding projects.</p>
              </div>
              <div className="text-center">
              <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconBook size={20} className="text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Clear Documentation</h4>
              <p className="text-sm text-gray-600">Get started quickly with detailed guides and interactive examples.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

