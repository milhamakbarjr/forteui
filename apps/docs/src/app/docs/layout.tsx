'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@forteui/core';

// Dynamic import for SearchSystem to avoid SSR issues
const HeaderSearch = dynamic(
  () => import('../../components/SearchSystem').then(mod => ({ default: mod.HeaderSearch })),
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

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        id="sidebar-navigation"
        role="navigation"
        aria-label="Documentation navigation"
        className={`
          fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50
          w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto h-full
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:block">
            <div>
              <h2 className="text-lg font-bold text-gray-900 font-sans">ForteUI</h2>
              <p className="text-sm text-gray-600">Documentation</p>
            </div>
            <Button
              variant="outline-default"
              size="sm"
              onClick={closeSidebar}
              className="lg:hidden"
            >
              ✕
            </Button>
          </div>

          <div className="bg-gradient-to-r from-primary-main to-secondary-main text-white p-3 rounded-lg mb-6">
            <p className="text-sm font-medium">🎉 100% Component Coverage!</p>
          </div>

          {/* Search - Hidden on mobile, shown in header */}
          <div className="mb-6 hidden lg:block">
            <HeaderSearch />
          </div>
          
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Getting Started</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/docs/introduction" 
                    className="block text-sm text-gray-600 hover:text-primary-main transition-colors py-1"
                    onClick={closeSidebar}
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a 
                    href="/docs/getting-started" 
                    className="block text-sm text-gray-600 hover:text-primary-main transition-colors py-1"
                    onClick={closeSidebar}
                  >
                    Getting Started
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Design System</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/docs/design-system" 
                    className="block text-sm text-gray-600 hover:text-primary-main transition-colors py-1"
                    onClick={closeSidebar}
                  >
                    Design System
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Form Components</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Button', href: '/docs/components/button' },
                  { name: 'Input', href: '/docs/components/input' },
                  { name: 'Checkbox', href: '/docs/components/checkbox' },
                  { name: 'Radio', href: '/docs/components/radio' },
                  { name: 'Switch', href: '/docs/components/switch' },
                  { name: 'Textarea', href: '/docs/components/textarea' },
                  { name: 'Slider', href: '/docs/components/slider' }
                ].map(component => (
                  <li key={component.name}>
                    <a 
                      href={component.href}
                      className="block text-sm text-gray-600 hover:text-primary-main transition-colors py-1"
                      onClick={closeSidebar}
                    >
                      {component.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Display Components</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Badge', href: '/docs/components/badge' },
                  { name: 'Card', href: '/docs/components/card' },
                  { name: 'Avatar', href: '/docs/components/avatar' },
                  { name: 'Chip', href: '/docs/components/chip' },
                  { name: 'Typography', href: '/docs/components/typography' }
                ].map(component => (
                  <li key={component.name}>
                    <a 
                      href={component.href}
                      className="block text-sm text-gray-600 hover:text-primary-main transition-colors py-1"
                      onClick={closeSidebar}
                    >
                      {component.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Navigation Components</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/docs/components/breadcrumb" 
                    className="block text-sm text-gray-600 hover:text-primary-main transition-colors py-1"
                    onClick={closeSidebar}
                  >
                    Breadcrumb
                  </a>
                </li>
                <li>
                  <span className="block text-sm text-gray-400 cursor-not-allowed py-1">
                    Pagination
                  </span>
                </li>
                <li>
                  <span className="block text-sm text-gray-400 cursor-not-allowed py-1">
                    Stepper
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Feedback Components</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Alert', href: '/docs/components/alert' },
                  { name: 'Snackbar', href: '/docs/components/snackbar' },
                  { name: 'Progress', href: '/docs/components/progress' }
                ].map(component => (
                  <li key={component.name}>
                    <a 
                      href={component.href}
                      className="block text-sm text-gray-600 hover:text-primary-main transition-colors py-1"
                      onClick={closeSidebar}
                    >
                      {component.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-30">
          <Button
            variant="outline-default"
            size="sm"
            onClick={toggleSidebar}
            className="mr-4"
            aria-label="Toggle navigation menu"
            aria-expanded={isSidebarOpen}
            aria-controls="sidebar-navigation"
          >
            ☰
          </Button>
          
          <div className="flex-1 max-w-sm">
            <HeaderSearch />
          </div>
          
          <div className="text-sm font-medium text-gray-900 ml-4">
            ForteUI
          </div>
        </header>

        {/* Content */}
        <main 
          id="main-content" 
          role="main" 
          aria-label="Documentation content"
          className="flex-1 overflow-y-auto"
        >
          <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
