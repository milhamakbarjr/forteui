import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 font-sans">ForteUI</h2>
          <p className="text-sm text-gray-600">Documentation</p>
          <div className="bg-gradient-to-r from-primary-main to-secondary-main text-white p-3 rounded-lg mt-4">
            <p className="text-sm font-medium">🎉 ForteUI v1.0 is here!</p>
          </div>
        </div>
        
        <nav className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans">Getting Started</h3>
            <ul className="space-y-2 ml-2">
              <li><a href="/docs/introduction" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Introduction</a></li>
              <li><a href="/docs/getting-started" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Getting Started</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans">Form Components</h3>
            <ul className="space-y-2 ml-2">
              <li><a href="/docs/components/button" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Button</a></li>
              <li><a href="/docs/components/input" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Input</a></li>
              <li><a href="/docs/components/checkbox" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Checkbox</a></li>
              <li><a href="/docs/components/radio" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Radio</a></li>
              <li><a href="/docs/components/switch" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Switch</a></li>
              <li><a href="/docs/components/textarea" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Textarea</a></li>
              <li><a href="/docs/components/slider" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Slider</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans">Display Components</h3>
            <ul className="space-y-2 ml-2">
              <li><a href="/docs/components/badge" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Badge</a></li>
              <li><a href="/docs/components/card" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Card</a></li>
              <li><a href="/docs/components/avatar" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Avatar</a></li>
              <li><a href="/docs/components/chip" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Chip</a></li>
              <li><a href="/docs/components/typography" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Typography</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans">Navigation Components</h3>
            <ul className="space-y-2 ml-2">
              <li><a href="/docs/components/breadcrumb" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Breadcrumb</a></li>
              <li><a href="/docs/components/pagination" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Pagination</a></li>
              <li><a href="/docs/components/stepper" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Stepper</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans">Feedback Components</h3>
            <ul className="space-y-2 ml-2">
              <li><a href="/docs/components/alert" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Alert</a></li>
              <li><a href="/docs/components/snackbar" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Snackbar</a></li>
              <li><a href="/docs/components/progress" className="text-sm text-gray-600 hover:text-primary-main transition-colors">Progress</a></li>
            </ul>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 max-w-none">
        <main className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
