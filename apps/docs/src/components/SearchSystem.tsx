'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Button, Input } from '@forteui/core';
import { clsx } from 'clsx';

// Search data structure
interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'component' | 'guide' | 'prop' | 'example';
  url: string;
  tags: string[];
  content?: string;
  badge?: string;
  isNew?: boolean;
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
    content: 'button component variants primary secondary loading disabled icon',
    badge: '17 variants'
  },
  {
    id: 'input',
    title: 'Input',
    description: 'Input component with floating labels, multiple states, variants, and adornment support',
    category: 'component',
    url: '/docs/components/input',
    tags: ['form', 'text', 'field', 'validation', 'floating label'],
    content: 'input text field form validation placeholder floating label adornment',
    badge: '12 variants'
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    description: 'Checkbox component for selection controls with multiple states and variants',
    category: 'component',
    url: '/docs/components/checkbox',
    tags: ['form', 'selection', 'boolean', 'check', 'toggle'],
    content: 'checkbox selection form control boolean checked unchecked indeterminate',
    badge: '8 variants'
  },
  {
    id: 'radio',
    title: 'Radio',
    description: 'Radio component for single-choice selection controls with multiple variants',
    category: 'component',
    url: '/docs/components/radio',
    tags: ['form', 'selection', 'choice', 'group', 'single'],
    content: 'radio button selection single choice group form control',
    badge: '6 variants'
  },
  {
    id: 'switch',
    title: 'Switch',
    description: 'Switch component for binary on/off controls with smooth animations',
    category: 'component',
    url: '/docs/components/switch',
    tags: ['form', 'toggle', 'binary', 'on off', 'animation'],
    content: 'switch toggle binary on off control form animation smooth',
    badge: '5 variants'
  },
  {
    id: 'textarea',
    title: 'Textarea',
    description: 'Multi-line text input component with auto-resize, character limits, and form integration',
    category: 'component',
    url: '/docs/components/textarea',
    tags: ['form', 'multiline', 'text', 'resize', 'character limit'],
    content: 'textarea multiline text input auto resize character limit form',
    badge: '7 variants',
    isNew: true
  },
  {
    id: 'slider',
    title: 'Slider',
    description: 'Range input component for selecting numeric values with single or dual handles',
    category: 'component',
    url: '/docs/components/slider',
    tags: ['form', 'range', 'numeric', 'value', 'handles'],
    content: 'slider range input numeric value selection handles dual single',
    badge: '9 variants'
  },
  {
    id: 'badge',
    title: 'Badge',
    description: 'Badge component for displaying status indicators, counts, and labels',
    category: 'component',
    url: '/docs/components/badge',
    tags: ['status', 'count', 'label', 'indicator', 'notification'],
    content: 'badge status indicator count label notification pill',
    badge: '11 variants'
  },
  {
    id: 'card',
    title: 'Card',
    description: 'Card component for grouping related content with header, content, and footer sections',
    category: 'component',
    url: '/docs/components/card',
    tags: ['container', 'content', 'header', 'footer', 'section'],
    content: 'card container content grouping header footer section',
    badge: '14 variants'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    description: 'Avatar component for displaying user profile images with fallbacks and status indicators',
    category: 'component',
    url: '/docs/components/avatar',
    tags: ['user', 'profile', 'image', 'fallback', 'status'],
    content: 'avatar user profile image picture fallback status indicator',
    badge: '10 variants'
  },
  {
    id: 'chip',
    title: 'Chip',
    description: 'Compact chip component for tags, filters, and selection with removable functionality',
    category: 'component',
    url: '/docs/components/chip',
    tags: ['tag', 'filter', 'selection', 'removable', 'compact'],
    content: 'chip tag filter selection removable compact label',
    badge: '8 variants'
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Text system documentation with Plus Jakarta Sans font family and all variants',
    category: 'component',
    url: '/docs/components/typography',
    tags: ['text', 'font', 'heading', 'body', 'plus jakarta sans'],
    content: 'typography text font heading body plus jakarta sans size weight',
    badge: '15 styles'
  },
  {
    id: 'alert',
    title: 'Alert',
    description: 'Alert component for displaying important messages and notifications',
    category: 'component',
    url: '/docs/components/alert',
    tags: ['message', 'notification', 'important', 'warning', 'error'],
    content: 'alert message notification important warning error info success',
    badge: '12 variants'
  },
  {
    id: 'progress',
    title: 'Progress',
    description: 'Progress component for displaying task completion and loading states',
    category: 'component',
    url: '/docs/components/progress',
    tags: ['loading', 'progress', 'completion', 'task', 'percentage'],
    content: 'progress loading completion task percentage bar indicator',
    badge: '7 variants'
  },
  {
    id: 'snackbar',
    title: 'Snackbar',
    description: 'Toast notification component with actions, positioning, and auto-dismiss functionality',
    category: 'component',
    url: '/docs/components/snackbar',
    tags: ['toast', 'notification', 'action', 'dismiss', 'feedback'],
    content: 'snackbar toast notification action dismiss feedback temporary',
    badge: '9 variants'
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    description: 'Hierarchical navigation component with separators and overflow handling',
    category: 'component',
    url: '/docs/components/breadcrumb',
    tags: ['navigation', 'hierarchy', 'path', 'separator', 'overflow'],
    content: 'breadcrumb navigation hierarchy path separator overflow trail',
    badge: '6 variants'
  },
  
  // Guides and Documentation
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Learn about ForteUI\'s philosophy, design principles, and core concepts',
    category: 'guide',
    url: '/docs/introduction',
    tags: ['getting started', 'overview', 'about', 'philosophy'],
    content: 'introduction overview about forteui component library philosophy principles'
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Complete installation guide with setup instructions and first steps',
    category: 'guide',
    url: '/docs/getting-started',
    tags: ['installation', 'setup', 'configuration', 'npm', 'yarn'],
    content: 'getting started installation setup configuration npm install yarn package manager'
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Comprehensive guide to colors, typography, spacing, and design tokens',
    category: 'guide',
    url: '/docs/design-system',
    tags: ['design', 'colors', 'typography', 'spacing', 'tokens'],
    content: 'design system colors typography spacing tokens plus jakarta sans palette'
  },
];

interface SearchSystemProps {
  onSelect?: (item: SearchItem) => void;
  placeholder?: string;
  maxResults?: number;
}

const categoryLabels = {
  component: 'Components',
  guide: 'Guides',
  prop: 'Props',
  example: 'Examples'
};

const categoryIcons = {
  component: '🧩',
  guide: '📖',
  prop: '⚙️',
  example: '💡'
};

export function SearchSystem({ 
  onSelect, 
  placeholder = "Search components, props, guides...",
  maxResults = 8
}: SearchSystemProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Enhanced search algorithm with better scoring
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const results = searchIndex
      .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
      .map(item => {
        let score = 0;
        const itemText = `${item.title} ${item.description} ${item.content} ${item.tags.join(' ')}`.toLowerCase();
        
        searchTerms.forEach(term => {
          // Exact title match gets highest score
          if (item.title.toLowerCase().includes(term)) {
            score += item.title.toLowerCase() === term ? 100 : 50;
          }
          
          // Description match
          if (item.description.toLowerCase().includes(term)) {
            score += 30;
          }
          
          // Tag match
          if (item.tags.some(tag => tag.includes(term))) {
            score += 20;
          }
          
          // Content match
          if (item.content?.toLowerCase().includes(term)) {
            score += 10;
          }
          
          // Partial matches in any field
          if (itemText.includes(term)) {
            score += 5;
          }
        });
        
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults);
    
    return results;
  }, [query, selectedCategory, maxResults]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredResults.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredResults[highlightedIndex]) {
            handleItemSelect(filteredResults[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredResults]);

  // Reset highlighted index when results change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [filteredResults]);

  const handleItemSelect = useCallback((item: SearchItem) => {
    if (onSelect) {
      onSelect(item);
    } else {
      window.location.href = item.url;
    }
    setIsOpen(false);
    setQuery('');
    setHighlightedIndex(-1);
  }, [onSelect]);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setIsOpen(value.trim().length > 0);
  };

  const categories = [
    { value: 'all', label: 'All', count: searchIndex.length },
    { value: 'component', label: 'Components', count: searchIndex.filter(i => i.category === 'component').length },
    { value: 'guide', label: 'Guides', count: searchIndex.filter(i => i.category === 'guide').length },
  ];

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pr-10"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-describedby="search-instructions"
          role="combobox"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Search Instructions (screen reader only) */}
      <div id="search-instructions" className="sr-only">
        Use arrow keys to navigate results, Enter to select, Escape to close
      </div>

      {/* Search Results */}
      {isOpen && (
        <div 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-hidden"
          role="listbox"
          aria-label="Search results"
        >
          {/* Category Filters */}
          <div className="p-3 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-600 font-medium">Filter:</span>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={clsx(
                    "px-2 py-1 rounded text-xs font-medium transition-colors",
                    selectedCategory === category.value
                      ? "bg-primary-main text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  )}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto">
            {filteredResults.length > 0 ? (
              <div className="py-2">
                {filteredResults.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemSelect(item)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={clsx(
                      "w-full px-4 py-3 text-left transition-colors border-l-4 flex items-start gap-3",
                      highlightedIndex === index
                        ? "bg-primary-50 border-l-primary-main"
                        : "border-l-transparent hover:bg-gray-50"
                    )}
                    role="option"
                    aria-selected={highlightedIndex === index}
                  >
                    <div className="flex-shrink-0 text-lg">
                      {categoryIcons[item.category]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {item.title}
                        </h4>
                        {item.isNew && (
                          <span className="px-1.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded">
                            New
                          </span>
                        )}
                        {item.badge && (
                          <span className="px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500 font-medium">
                          {categoryLabels[item.category]}
                        </span>
                        <div className="text-xs text-gray-400">
                          Press ↵ to open
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                <div className="text-2xl mb-2">🔍</div>
                <p className="text-sm font-medium">No results found</p>
                <p className="text-xs mt-1">
                  Try adjusting your search or check different categories
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          {filteredResults.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
              <span>
                {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
              </span>
              <div className="flex items-center gap-3">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export function HeaderSearch() {
  return (
    <SearchSystem
      placeholder="Search documentation..."
      maxResults={6}
    />
  );
}

export function GlobalSearchModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Search Documentation
            </h2>
            <Button
              variant="outline-default"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </Button>
          </div>
          
          <SearchSystem
            placeholder="Search components, guides, props..."
            maxResults={12}
            onSelect={onClose}
          />
        </div>
      </div>
    </div>
  );
} 