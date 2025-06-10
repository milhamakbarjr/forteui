import { Button } from '@forteui/core';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-gray-900">ForteUI</h1>
              {/* Search temporarily disabled */}
              <div className="flex-1 max-w-sm">
                <input 
                  type="text" 
                  placeholder="Search documentation..." 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  disabled
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline-default">
                <Link href="/docs/introduction">Documentation</Link>
              </Button>
              <Button asChild variant="primary">
                <Link href="/docs/getting-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Build beautiful interfaces with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-secondary-main">
                ForteUI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A production-ready React component library with 17 components, comprehensive design system, 
              and interactive documentation. Built with TypeScript and Plus Jakarta Sans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild variant="primary" size="lg" className="text-base px-8">
                <Link href="/docs/getting-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline-default" size="lg" className="text-base px-8">
                <Link href="/docs/components/button">View Components</Link>
              </Button>
              <Button asChild variant="outline-default" size="lg" className="text-base px-8">
                <Link href="/docs/design-system">Design System</Link>
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <span className="text-primary-main">✓</span>
                <span>17 Components</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-main">✓</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-main">✓</span>
                <span>Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-main">✓</span>
                <span>Interactive Docs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get Started in Minutes
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 text-left mb-8">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`npm install @forteui/core
import { Button } from '@forteui/core';

function App() {
  return <Button variant="primary">Hello ForteUI!</Button>;
}`}</code>
            </pre>
          </div>
          
          <Button asChild variant="primary" size="lg">
            <Link href="/docs/getting-started">Complete Installation Guide</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">ForteUI</h3>
              <p className="text-gray-400 mb-4">
                A modern React component library built for production applications.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs/introduction" className="hover:text-white">Introduction</Link></li>
                <li><Link href="/docs/getting-started" className="hover:text-white">Getting Started</Link></li>
                <li><Link href="/docs/components/button" className="hover:text-white">Components</Link></li>
                <li><Link href="/docs/design-system" className="hover:text-white">Design System</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">NPM Package</a></li>
                <li><a href="#" className="hover:text-white">Changelog</a></li>
                <li><a href="#" className="hover:text-white">Contributing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ForteUI. Built with Next.js and love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
