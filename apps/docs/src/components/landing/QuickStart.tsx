'use client';

import { useState } from 'react';
import { Button } from '@forteui/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconCopy, IconCheck, IconArrowRight, IconTerminal, IconDownload, IconBook, IconRocket } from '@tabler/icons-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const packageManagers = [
  { name: 'npm', command: 'npm install forteui-core' },
  { name: 'yarn', command: 'yarn add forteui-core' },
  { name: 'pnpm', command: 'pnpm add forteui-core' },
  { name: 'bun', command: 'bun add forteui-core' }
];

const usageCode = `import { Button, Card, Input } from 'forteui-core';

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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-50 border border-success-200 rounded-full text-success-700 text-sm font-medium mb-6">
            <IconTerminal size={16} />
            <span>Quick Setup</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Install ForteUI and start building beautiful interfaces immediately. 
            Zero configuration required, production-ready components.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Installation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg w-full">
              <div className="flex items-center justify-between p-3 sm:p-6 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2">
                    <IconTerminal size={14} className="sm:w-4 sm:h-4 text-gray-600" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">Installation</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 w-full">
                {packageManagers.map((pm, index) => (
                  <div key={pm.name} className="w-full">
                    {index > 0 && (
                      <div className="text-gray-400 text-xs sm:text-sm font-mono mb-1 sm:mb-2"># or</div>
                    )}
                    <div 
                      className="group relative flex items-center justify-between p-2 sm:p-3 md:p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg cursor-pointer transition-colors min-h-[44px] w-full"
                      onClick={() => copyCommand(pm.command, pm.name)}
                    >
                      <div className="flex-1 min-w-0 mr-2">
                        <code className="text-xs sm:text-sm font-mono text-gray-800 select-none block truncate sm:overflow-visible">
                          <span className="text-blue-600">{pm.name}</span>{' '}
                          <span className="text-gray-600">{pm.name === 'npm' ? 'install' : 'add'}</span>{' '}
                          <span className="text-purple-600">forteui-core</span>
                        </code>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity flex-shrink-0">
                        {copiedCommand === pm.name ? (
                          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-green-100 border border-green-200 rounded text-green-700 text-xs font-medium min-h-[32px] sm:min-h-[44px]">
                            <IconCheck size={12} className="sm:w-[14px] sm:h-[14px]" />
                            <span className="hidden sm:inline">Copied!</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-primary-50 border border-primary-200 rounded text-primary-700 text-xs font-medium min-h-[32px] sm:min-h-[44px]">
                            <IconCopy size={12} className="sm:w-[14px] sm:h-[14px]" />
                            <span className="hidden sm:inline">Copy</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-bold text-xs sm:text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Install Package</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Choose your preferred package manager and install ForteUI</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-bold text-xs sm:text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Import Components</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Start importing and using components in your project</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-bold text-xs sm:text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Customize & Build</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Adapt components to your design system and build amazing UIs</p>
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
            className="w-full"
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg w-full">
              <div className="flex items-center justify-between p-3 sm:p-6 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2 min-w-0">
                    <IconBook size={14} className="sm:w-4 sm:h-4 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base truncate">App.tsx</span>
                  </div>
                </div>
                
                <button
                  onClick={copyUsage}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg text-primary-700 text-xs sm:text-sm font-medium transition-colors min-h-[32px] sm:min-h-[44px] flex-shrink-0 ml-2"
                >
                  {copiedUsage ? (
                    <>
                      <IconCheck size={14} className="sm:w-4 sm:h-4 text-primary-600" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <IconCopy size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 w-full overflow-hidden">
                <div className="w-full overflow-x-auto">
                  <SyntaxHighlighter
                    language="tsx"
                    style={oneLight}
                    customStyle={{
                      margin: 0,
                      padding: 0,
                      background: 'transparent',
                      fontSize: '11px',
                      lineHeight: '1.5',
                      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      maxWidth: '100%',
                    }}
                    className="text-xs sm:text-sm md:text-base"
                    showLineNumbers={false}
                    wrapLongLines={true}
                    PreTag={({ children, ...props }) => (
                      <pre 
                        {...props} 
                        style={{ 
                          ...props.style, 
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          maxWidth: '100%',
                          margin: 0,
                          padding: 0
                        }}
                      >
                        {children}
                      </pre>
                    )}
                  >
                    {usageCode}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconRocket size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Pro Tip</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
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
          <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 border border-primary-200 rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <IconRocket size={14} className="sm:w-4 sm:h-4" />
                <span>Ready to Build Amazing UIs?</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Start Building with ForteUI Today
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
                Join developers who are already building production-ready applications with our 
                comprehensive component library. Get started with our detailed guides and examples.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <Button asChild variant="primary" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                <Link href="/docs/getting-started" className="flex items-center justify-center gap-2">
                  Get Started
                  <IconArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </Link>
              </Button>
              
              <Button asChild variant="outline-default" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                <Link href="/docs/components" className="flex items-center justify-center gap-2">
                  View Components
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <IconCheck size={18} className="sm:w-5 sm:h-5 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">TypeScript First</h4>
              <p className="text-xs sm:text-sm text-gray-600">Enjoy robust type safety and autocompletion out-of-the-box.</p>
              </div>
              <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <IconRocket size={18} className="sm:w-5 sm:h-5 text-secondary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Built for Scale</h4>
              <p className="text-xs sm:text-sm text-gray-600">Reliable components, ready for your most demanding projects.</p>
              </div>
              <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <IconBook size={18} className="sm:w-5 sm:h-5 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Clear Documentation</h4>
              <p className="text-xs sm:text-sm text-gray-600">Get started quickly with detailed guides and interactive examples.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

