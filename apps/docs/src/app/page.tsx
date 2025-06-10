import Link from 'next/link';
import { Button } from '@forteui/core';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-8 via-white to-secondary-8">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">ForteUI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/components"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Components
            </Link>
            <Button asChild size="sm">
              <Link href="/docs/getting-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build beautiful interfaces with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              ForteUI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A production-ready React UI component library with custom design system and Plus Jakarta Sans typography. 
            Built for modern web applications with accessibility and performance in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/docs/getting-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline-default" size="lg">
              <Link href="/components">View Components</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ForteUI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer First</h3>
              <p className="text-gray-600">
                Built with TypeScript and designed for excellent developer experience with autocomplete and type safety.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessible</h3>
              <p className="text-gray-600">
                All components follow WCAG 2.1 AA guidelines with proper ARIA attributes and keyboard navigation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-success-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">
                Optimized for performance with tree-shaking support and minimal bundle size impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get Started in Minutes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Install ForteUI and start building beautiful interfaces right away.
            </p>
            <div className="bg-gray-900 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <code className="text-green-400 text-sm">
                npm install @forteui/core
              </code>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/docs/getting-started">Read the Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2024 ForteUI. Built with passion for the developer community.</p>
        </div>
      </footer>
    </main>
  );
}
