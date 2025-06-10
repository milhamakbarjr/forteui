import { Button } from '@forteui/core';
import Link from 'next/link';
import { HeaderSearch } from '../components/SearchSystem';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-gray-900">ForteUI</h1>
              <HeaderSearch />
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

             {/* Interactive Playground Section */}
       <section className="py-16 px-6 bg-white">
         <div className="max-w-6xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">
               Interactive Documentation
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Comprehensive documentation with live examples, interactive playground, and real-world use cases.
             </p>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
             <div className="p-6 border border-gray-200 rounded-lg">
               <h3 className="font-semibold text-gray-900 mb-2">Live Examples</h3>
               <p className="text-gray-600 text-sm mb-4">
                 Interactive code examples you can edit and run in real-time.
               </p>
               <Button asChild variant="outline-default" size="sm">
                 <Link href="/docs/components/button">Try Examples →</Link>
               </Button>
             </div>
             
             <div className="p-6 border border-gray-200 rounded-lg">
               <h3 className="font-semibold text-gray-900 mb-2">Component Props</h3>
               <p className="text-gray-600 text-sm mb-4">
                 Complete API documentation with TypeScript definitions.
               </p>
               <Button asChild variant="outline-default" size="sm">
                 <Link href="/docs/components/input">View Props →</Link>
               </Button>
             </div>
             
             <div className="p-6 border border-gray-200 rounded-lg">
               <h3 className="font-semibold text-gray-900 mb-2">Real-world Usage</h3>
               <p className="text-gray-600 text-sm mb-4">
                 Practical examples showing components in real applications.
               </p>
               <Button asChild variant="outline-default" size="sm">
                 <Link href="/docs/components/card">See Examples →</Link>
               </Button>
             </div>
           </div>
         </div>
       </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-gray-50">
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
                <span className="text-primary-main text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Playground</h3>
              <p className="text-gray-600">
                Interactive code examples you can edit and run in real-time to understand components better.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-main text-xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Coverage</h3>
              <p className="text-gray-600">
                Complete documentation for all 17 components with real-world examples and best practices.
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
                <span className="text-primary-main text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-600">
                Battle-tested components with TypeScript support, optimized for performance and developer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Component Library
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              17 carefully crafted components organized into logical categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-main transition-colors">
              <h3 className="font-semibold text-gray-900 mb-3">Form Components</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Button • Input • Checkbox</div>
                <div>Radio • Switch • Textarea</div>
                <div>Slider</div>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline-default" size="sm">
                  <Link href="/docs/components/button">View Forms →</Link>
                </Button>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-main transition-colors">
              <h3 className="font-semibold text-gray-900 mb-3">Display Components</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Badge • Card • Avatar</div>
                <div>Chip • Typography</div>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline-default" size="sm">
                  <Link href="/docs/components/badge">View Display →</Link>
                </Button>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-main transition-colors">
              <h3 className="font-semibold text-gray-900 mb-3">Feedback Components</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Alert • Snackbar</div>
                <div>Progress</div>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline-default" size="sm">
                  <Link href="/docs/components/alert">View Feedback →</Link>
                </Button>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-main transition-colors">
              <h3 className="font-semibold text-gray-900 mb-3">Navigation Components</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Breadcrumb</div>
                <div className="text-gray-400">Pagination • Stepper</div>
                <div className="text-xs text-gray-400">(Coming soon)</div>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline-default" size="sm">
                  <Link href="/docs/components/breadcrumb">View Navigation →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-main to-secondary-main">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get started with ForteUI and experience the power of a well-designed component system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-base px-8">
              <Link href="/docs/getting-started">Get Started</Link>
            </Button>
                         <Button asChild variant="outline-default" size="lg" className="text-base px-8 border-white text-white hover:bg-white hover:text-primary-main">
               <Link href="/docs/design-system">Explore Design System</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">ForteUI</h3>
              <p className="text-sm">
                A modern React component library with comprehensive design system and interactive documentation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Documentation</h4>
              <div className="space-y-2 text-sm">
                <div><Link href="/docs/introduction" className="hover:text-white">Introduction</Link></div>
                <div><Link href="/docs/getting-started" className="hover:text-white">Getting Started</Link></div>
                <div><Link href="/docs/design-system" className="hover:text-white">Design System</Link></div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Components</h4>
              <div className="space-y-2 text-sm">
                <div><Link href="/docs/components/button" className="hover:text-white">Button</Link></div>
                <div><Link href="/docs/components/input" className="hover:text-white">Input</Link></div>
                <div><Link href="/docs/components/card" className="hover:text-white">Card</Link></div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Features</h4>
              <div className="space-y-2 text-sm">
                <div>Interactive Playground</div>
                <div>Smart Search</div>
                <div>100% TypeScript</div>
                <div>WCAG 2.1 AA</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 ForteUI. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
