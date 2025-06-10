import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900">ForteUI</h2>
          <p className="text-sm text-gray-600">Documentation</p>
        </div>
        
        <nav className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Getting Started</h3>
            <ul className="space-y-1 ml-2">
              <li><a href="/docs/introduction" className="text-sm text-gray-600 hover:text-gray-900">Introduction</a></li>
              <li><a href="/docs/getting-started" className="text-sm text-gray-600 hover:text-gray-900">Getting Started</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Components</h3>
            <ul className="space-y-1 ml-2">
              <li><a href="/docs/components/badge" className="text-sm text-gray-600 hover:text-gray-900">Badge</a></li>
              <li><a href="/docs/components/button" className="text-sm text-gray-600 hover:text-gray-900">Button</a></li>
              <li><a href="/docs/components/card" className="text-sm text-gray-600 hover:text-gray-900">Card</a></li>
              <li><a href="/docs/components/input" className="text-sm text-gray-600 hover:text-gray-900">Input</a></li>
              <li><a href="/docs/components/text" className="text-sm text-gray-600 hover:text-gray-900">Text</a></li>
            </ul>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        <main className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
