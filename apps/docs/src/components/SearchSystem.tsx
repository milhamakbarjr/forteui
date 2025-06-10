'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { Button, Input } from '@forteui/core';

// Search data structure
interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'component' | 'guide' | 'prop' | 'example';
  url: string;
  tags: string[];
  content?: string;
}

// Complete search index
const searchIndex: SearchItem[] = [
  // Components
  {
    id: 'button',
    title: 'Button',
    description: 'Versatile button component with multiple variants, sizes, states, and icon support',
    category: 'component',
    url: '/docs/components/button',
    tags: ['form', 'action', 'click', 'submit', 'primary', 'secondary'],
    content: 'button component variants primary secondary loading disabled icon'
  },
  {
    id: 'input',
    title: 'Input',
    description: 'Input component with floating labels, multiple states, variants, and adornment support',
    category: 'component',
    url: '/docs/components/input',
    tags: ['form', 'text', 'field', 'validation', 'floating label'],
    content: 'input text field form validation placeholder floating label adornment'
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    description: 'Checkbox component for selection controls with multiple states and variants',
    category: 'component',
    url: '/docs/components/checkbox',
    tags: ['form', 'selection', 'boolean', 'check', 'toggle'],
    content: 'checkbox selection form control boolean checked unchecked indeterminate'
  },
  {
    id: 'radio',
    title: 'Radio',
    description: 'Radio component for single-choice selection controls with multiple variants',
    category: 'component',
    url: '/docs/components/radio',
    tags: ['form', 'selection', 'choice', 'group', 'single'],
    content: 'radio button selection single choice group form control'
  },
  {
    id: 'switch',
    title: 'Switch',
    description: 'Switch component for binary on/off controls with smooth animations',
    category: 'component',
    url: '/docs/components/switch',
    tags: ['form', 'toggle', 'binary', 'on off', 'animation'],
    content: 'switch toggle binary on off control form animation smooth'
  },
  {
    id: 'textarea',
    title: 'Textarea',
    description: 'Multi-line text input component with auto-resize, character limits, and form integration',
    category: 'component',
    url: '/docs/components/textarea',
    tags: ['form', 'multiline', 'text', 'resize', 'character limit'],
    content: 'textarea multiline text input auto resize character limit form'
  },
  {
    id: 'slider',
    title: 'Slider',
    description: 'Range input component for selecting numeric values with single or dual handles',
    category: 'component',
    url: '/docs/components/slider',
    tags: ['form', 'range', 'numeric', 'value', 'handles'],
    content: 'slider range input numeric value selection handles dual single'
  },
  {
    id: 'badge',
    title: 'Badge',
    description: 'Badge component for displaying status indicators, counts, and labels',
    category: 'component',
    url: '/docs/components/badge',
    tags: ['status', 'count', 'label', 'indicator', 'notification'],
    content: 'badge status indicator count label notification pill'
  },
  {
    id: 'card',
    title: 'Card',
    description: 'Card component for grouping related content with header, content, and footer sections',
    category: 'component',
    url: '/docs/components/card',
    tags: ['container', 'content', 'header', 'footer', 'section'],
    content: 'card container content grouping header footer section'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    description: 'Avatar component for displaying user profile images with fallbacks and status indicators',
    category: 'component',
    url: '/docs/components/avatar',
    tags: ['user', 'profile', 'image', 'fallback', 'status'],
    content: 'avatar user profile image picture fallback status indicator'
  },
  {
    id: 'chip',
    title: 'Chip',
    description: 'Compact chip component for tags, filters, and selection with removable functionality',
    category: 'component',
    url: '/docs/components/chip',
    tags: ['tag', 'filter', 'selection', 'removable', 'compact'],
    content: 'chip tag filter selection removable compact label'
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Text system documentation with Plus Jakarta Sans font family and all variants',
    category: 'component',
    url: '/docs/components/typography',
    tags: ['text', 'font', 'heading', 'body', 'plus jakarta sans'],
    content: 'typography text font heading body plus jakarta sans size weight'
  },
  {
    id: 'alert',
    title: 'Alert',
    description: 'Alert component for displaying important messages and notifications',
    category: 'component',
    url: '/docs/components/alert',
    tags: ['message', 'notification', 'important', 'warning', 'error'],
    content: 'alert message notification important warning error info success'
  },
  {
    id: 'progress',
    title: 'Progress',
    description: 'Progress component for displaying task completion and loading states',
    category: 'component',
    url: '/docs/components/progress',
    tags: ['loading', 'progress', 'completion', 'task', 'percentage'],
    content: 'progress loading completion task percentage bar indicator'
  },
  {
    id: 'snackbar',
    title: 'Snackbar',
    description: 'Toast notification component with actions, positioning, and auto-dismiss functionality',
    category: 'component',
    url: '/docs/components/snackbar',
    tags: ['toast', 'notification', 'action', 'dismiss', 'feedback'],
    content: 'snackbar toast notification action dismiss feedback temporary'
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    description: 'Hierarchical navigation component with separators and overflow handling',
    category: 'component',
    url: '/docs/components/breadcrumb',
    tags: ['navigation', 'hierarchy', 'path', 'separator', 'overflow'],
    content: 'breadcrumb navigation hierarchy path separator overflow trail'
  },
  
  // Guides
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Introduction to ForteUI component library',
    category: 'guide',
    url: '/docs/introduction',
    tags: ['getting started', 'overview', 'about'],
    content: 'introduction overview about forteui component library'
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Get started with ForteUI',
    category: 'guide',
    url: '/docs/getting-started',
    tags: ['installation', 'setup', 'configuration'],
    content: 'getting started installation setup configuration npm install'
  },
];

interface SearchSystemProps {
  onSelect?: (item: SearchItem) => void;
  placeholder?: string;
  maxResults?: number;
}

export function SearchSystem({ 
  onSelect, 
  placeholder = "Search components, props, guides...",
  maxResults = 8
}: SearchSystemProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Search algorithm with scoring
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const normalizedQuery = query.toLowerCase().trim();
    const words = normalizedQuery.split(/\s+/);

    const results = searchIndex
      .map(item => {
        let score = 0;
        const searchableText = `${item.title} ${item.description} ${item.tags.join(' ')} ${item.content || ''}`.toLowerCase();

        // Exact title match (highest score)
        if (item.title.toLowerCase().includes(normalizedQuery)) {
          score += 100;
        }

        // Title word matches
        words.forEach(word => {
          if (item.title.toLowerCase().includes(word)) {
            score += 50;
          }
        });

        // Description matches
        words.forEach(word => {
          if (item.description.toLowerCase().includes(word)) {
            score += 30;
          }
        });

        // Tag matches
        words.forEach(word => {
          item.tags.forEach(tag => {
            if (tag.toLowerCase().includes(word)) {
              score += 40;
            }
          });
        });

        // Content matches
        words.forEach(word => {
          if (searchableText.includes(word)) {
            score += 10;
          }
        });

        // Category bonus
        if (item.category === 'component') score += 5;

        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults);

    return results;
  }, [query, maxResults]);

  const handleSelect = useCallback((item: SearchItem) => {
    setQuery('');
    setIsOpen(false);
    
    if (onSelect) {
      onSelect(item);
    } else {
      // Default behavior - navigate to the item
      window.location.href = item.url;
    }
  }, [onSelect]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.trim().length > 0);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  }, []);

     return (
     <div className="relative w-full max-w-md">
       <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
           <svg 
             className="w-4 h-4 text-gray-400" 
             fill="none" 
             stroke="currentColor" 
             viewBox="0 0 24 24"
           >
             <path 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               strokeWidth={2} 
               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
             />
           </svg>
         </div>
         <Input
           value={query}
           onChange={handleInputChange}
           onKeyDown={handleKeyDown}
           placeholder={placeholder}
           className="w-full pl-10"
         />
       </div>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </div>
            
            {searchResults.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{item.title}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.category === 'component' 
                          ? 'bg-blue-100 text-blue-700'
                          : item.category === 'guide'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{item.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <svg 
                    className="w-4 h-4 text-gray-400 ml-3 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {isOpen && query.trim() && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 text-center text-gray-500">
            <svg 
              className="w-8 h-8 mx-auto mb-2 text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
            <p className="text-sm">No results found for "{query}"</p>
            <p className="text-xs text-gray-400 mt-1">
              Try searching for component names, props, or features
            </p>
          </div>
        </div>
      )}

      {/* Click overlay to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// Quick search component for the header
export function HeaderSearch() {
  return (
    <div className="flex-1 max-w-lg">
      <SearchSystem 
        placeholder="Quick search..."
        maxResults={6}
      />
    </div>
  );
}

// Global search modal
export function GlobalSearchModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-start justify-center p-4 text-center sm:p-0">
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
          <div className="bg-white px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Search Documentation
              </h3>
              <Button
                variant="outline-default"
                size="sm"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
            
            <SearchSystem 
              placeholder="Search components, guides, props, examples..."
              maxResults={12}
              onSelect={(item) => {
                window.location.href = item.url;
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 