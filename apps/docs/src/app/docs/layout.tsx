import type { ReactNode } from 'react';
import { HeaderSearch } from '../../components/SearchSystem';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 font-sans">ForteUI</h2>
          <p className="text-sm text-gray-600">Documentation</p>
          <div className="bg-gradient-to-r from-primary-main to-secondary-main text-white p-3 rounded-lg mt-4">
            <p className="text-sm font-medium">🎉 100% Component Coverage!</p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <HeaderSearch />
        </div>
        
        <nav className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Getting Started</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs/introduction" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="/docs/getting-started" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Getting Started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Design System</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs/design-system" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Design System
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Form Components</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs/components/button" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Button
                </a>
              </li>
              <li>
                <a href="/docs/components/input" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Input
                </a>
              </li>
              <li>
                <a href="/docs/components/checkbox" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Checkbox
                </a>
              </li>
              <li>
                <a href="/docs/components/radio" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Radio
                </a>
              </li>
              <li>
                <a href="/docs/components/switch" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Switch
                </a>
              </li>
              <li>
                <a href="/docs/components/textarea" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Textarea
                </a>
              </li>
              <li>
                <a href="/docs/components/slider" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Slider
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Display Components</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs/components/badge" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Badge
                </a>
              </li>
              <li>
                <a href="/docs/components/card" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Card
                </a>
              </li>
              <li>
                <a href="/docs/components/avatar" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Avatar
                </a>
              </li>
              <li>
                <a href="/docs/components/chip" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Chip
                </a>
              </li>
              <li>
                <a href="/docs/components/typography" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Typography
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Navigation Components</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs/components/breadcrumb" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Breadcrumb
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm text-gray-400 cursor-not-allowed">
                  Pagination
                </a>
              </li>
              <li>
                <a href="#" className="block text-sm text-gray-400 cursor-not-allowed">
                  Stepper
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Feedback Components</h3>
            <ul className="space-y-2">
              <li>
                <a href="/docs/components/alert" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Alert
                </a>
              </li>
              <li>
                <a href="/docs/components/snackbar" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Snackbar
                </a>
              </li>
              <li>
                <a href="/docs/components/progress" className="block text-sm text-gray-600 hover:text-primary-main transition-colors">
                  Progress
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        <main className="max-w-4xl mx-auto py-8 px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
