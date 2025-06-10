import { Button } from '@forteui/core';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import for SearchSystem to avoid SSR issues
const HeaderSearch = dynamic(
  () => import('../components/SearchSystem').then(mod => ({ default: mod.HeaderSearch })),
  { 
    ssr: false,
    loading: () => (
      <input 
        type="text" 
        placeholder="Loading search..." 
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        disabled
      />
    )
  }
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-gray-900">ForteUI</h1>
              <div className="flex-1 max-w-sm">
                <HeaderSearch />
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

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ForteUI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build modern web applications with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-main text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design System</h3>
              <p className="text-gray-600">
                Comprehensive design tokens, color system, typography, and spacing guidelines for consistent UIs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-main text-xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-gray-600">
                Powerful search functionality across components, props, and documentation with instant results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-main text-xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessible</h3>
              <p className="text-gray-600">
                WCAG 2.1 AA compliant components with proper ARIA labels, keyboard navigation, and screen reader support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-main text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Docs</h3>
              <p className="text-gray-600">
                Live code examples, interactive playground, and comprehensive API documentation for every component.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-main text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-600">
                Battle-tested components with TypeScript support, optimized for performance and developer experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-main text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600">
                Responsive design with touch-friendly interfaces and mobile-optimized navigation patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-6 bg-gray-50">
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
                A modern React component library built for production applications with comprehensive documentation and accessibility features.
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
