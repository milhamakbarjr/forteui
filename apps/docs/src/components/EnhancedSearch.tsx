'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Button } from '@forteui/core';
import { 
  IconSearch, 
  IconX, 
  IconCommand, 
  IconBook, 
  IconComponents, 
  IconPalette, 
  IconFileText,
  IconClock,
  IconArrowRight,
  IconSearchOff
} from '@tabler/icons-react';

// Enhanced search data structure
interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'component' | 'guide' | 'system';
  url: string;
  tags: string[];
  content?: string;
  badge?: string;
  isNew?: boolean;
  shortcuts?: string[];
}

// Complete enhanced search index
const searchIndex: SearchItem[] = [
  // Components
  {
    id: 'button',
    title: 'Button',
    description: 'Versatile button component with multiple variants, sizes, and states',
    category: 'component',
    url: '/docs/components/button',
    tags: ['form', 'action', 'click', 'submit', 'primary', 'secondary'],
    content: 'button component variants primary secondary loading disabled icon',
    badge: '17 variants',
    shortcuts: ['btn']
  },
  {
    id: 'input',
    title: 'Input',
    description: 'Text input with floating labels, validation, and adornments',
    category: 'component',
    url: '/docs/components/input',
    tags: ['form', 'text', 'field', 'validation', 'floating label'],
    content: 'input text field form validation placeholder floating label',
    badge: '12 variants'
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    description: 'Selection control for boolean values with multiple states',
    category: 'component',
    url: '/docs/components/checkbox',
    tags: ['form', 'selection', 'boolean', 'check', 'toggle'],
    content: 'checkbox selection form control boolean checked unchecked',
    badge: '8 variants'
  },
  {
    id: 'radio',
    title: 'Radio',
    description: 'Single-choice selection control for grouped options',
    category: 'component',
    url: '/docs/components/radio',
    tags: ['form', 'selection', 'choice', 'group', 'single'],
    content: 'radio button selection single choice group form control',
    badge: '6 variants'
  },
  {
    id: 'switch',
    title: 'Switch',
    description: 'Binary toggle control with smooth animations',
    category: 'component',
    url: '/docs/components/switch',
    tags: ['form', 'toggle', 'binary', 'on off', 'animation'],
    content: 'switch toggle binary on off control form animation',
    badge: '5 variants'
  },
  {
    id: 'textarea',
    title: 'Textarea',
    description: 'Multi-line text input with auto-resize and character limits',
    category: 'component',
    url: '/docs/components/textarea',
    tags: ['form', 'multiline', 'text', 'resize', 'character limit'],
    content: 'textarea multiline text input auto resize character limit',
    badge: '7 variants',
    isNew: true
  },
  {
    id: 'slider',
    title: 'Slider',
    description: 'Range input for selecting numeric values with handles',
    category: 'component',
    url: '/docs/components/slider',
    tags: ['form', 'range', 'numeric', 'value', 'handles'],
    content: 'slider range input numeric value selection handles',
    badge: '9 variants'
  },
  {
    id: 'badge',
    title: 'Badge',
    description: 'Status indicators, counts, and labels for UI elements',
    category: 'component',
    url: '/docs/components/badge',
    tags: ['status', 'count', 'label', 'indicator', 'notification'],
    content: 'badge status indicator count label notification pill',
    badge: '11 variants'
  },
  {
    id: 'card',
    title: 'Card',
    description: 'Container for grouping related content with sections',
    category: 'component',
    url: '/docs/components/card',
    tags: ['container', 'content', 'header', 'footer', 'section'],
    content: 'card container content grouping header footer section',
    badge: '14 variants'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    description: 'User profile images with fallbacks and status indicators',
    category: 'component',
    url: '/docs/components/avatar',
    tags: ['user', 'profile', 'image', 'fallback', 'status'],
    content: 'avatar user profile image picture fallback status',
    badge: '10 variants'
  },
  {
    id: 'chip',
    title: 'Chip',
    description: 'Compact elements for tags, filters, and selections',
    category: 'component',
    url: '/docs/components/chip',
    tags: ['tag', 'filter', 'selection', 'removable', 'compact'],
    content: 'chip tag filter selection removable compact label',
    badge: '8 variants'
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Text system with Plus Jakarta Sans font family',
    category: 'component',
    url: '/docs/components/typography',
    tags: ['text', 'font', 'heading', 'body', 'plus jakarta sans'],
    content: 'typography text font heading body plus jakarta sans',
    badge: '15 styles'
  },
  {
    id: 'alert',
    title: 'Alert',
    description: 'Important messages and notifications for users',
    category: 'component',
    url: '/docs/components/alert',
    tags: ['message', 'notification', 'important', 'warning', 'error'],
    content: 'alert message notification important warning error info',
    badge: '12 variants'
  },
  {
    id: 'progress',
    title: 'Progress',
    description: 'Task completion and loading state indicators',
    category: 'component',
    url: '/docs/components/progress',
    tags: ['loading', 'progress', 'completion', 'task', 'percentage'],
    content: 'progress loading completion task percentage bar',
    badge: '7 variants'
  },
  {
    id: 'snackbar',
    title: 'Snackbar',
    description: 'Toast notifications with actions and auto-dismiss',
    category: 'component',
    url: '/docs/components/snackbar',
    tags: ['toast', 'notification', 'action', 'dismiss', 'feedback'],
    content: 'snackbar toast notification action dismiss feedback',
    badge: '9 variants'
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    description: 'Hierarchical navigation with separators and overflow',
    category: 'component',
    url: '/docs/components/breadcrumb',
    tags: ['navigation', 'hierarchy', 'path', 'separator', 'overflow'],
    content: 'breadcrumb navigation hierarchy path separator overflow',
    badge: '6 variants'
  },
  
  // Guides
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Learn about ForteUI\'s philosophy and design principles',
    category: 'guide',
    url: '/docs/introduction',
    tags: ['getting started', 'overview', 'about', 'philosophy'],
    content: 'introduction overview about forteui component library philosophy'
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Complete installation and setup guide',
    category: 'guide',
    url: '/docs/getting-started',
    tags: ['installation', 'setup', 'configuration', 'npm', 'yarn'],
    content: 'getting started installation setup configuration npm install'
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Colors, typography, spacing, and design tokens',
    category: 'system',
    url: '/docs/design-system',
    tags: ['design', 'colors', 'typography', 'spacing', 'tokens'],
    content: 'design system colors typography spacing tokens palette'
  }
];

// Category configuration
const categoryConfig = {
  component: {
    label: 'Components',
    icon: IconComponents,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    count: searchIndex.filter(i => i.category === 'component').length
  },
  guide: {
    label: 'Guides',
    icon: IconBook,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    count: searchIndex.filter(i => i.category === 'guide').length
  },
  system: {
    label: 'Design System',
    icon: IconPalette,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    count: searchIndex.filter(i => i.category === 'system').length
  }
};

// Recent searches management
const useRecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('forte-recent-searches');
        if (saved) {
          setRecentSearches(JSON.parse(saved));
        }
      } catch (e) {
        // Handle localStorage errors
      }
    }
  }, []);

  const addRecentSearch = useCallback((item: SearchItem) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(i => i.id !== item.id);
      const updated = [item, ...filtered].slice(0, 5); // Keep only 5 recent
      
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('forte-recent-searches', JSON.stringify(updated));
        } catch (e) {
          // Handle localStorage errors
        }
      }
      
      return updated;
    });
  }, []);

  return { recentSearches, addRecentSearch };
};

interface EnhancedSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (item: SearchItem) => void;
}

export function EnhancedSearchModal({ isOpen, onClose, onSelect }: EnhancedSearchProps) {
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { recentSearches, addRecentSearch } = useRecentSearches();

  // Enhanced search algorithm with better scoring
  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    setIsLoading(true);
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const results = searchIndex
      .map(item => {
        let score = 0;
        const itemText = `${item.title} ${item.description} ${item.content} ${item.tags.join(' ')}`.toLowerCase();
        
        searchTerms.forEach(term => {
          // Shortcut match gets highest score
          if (item.shortcuts?.some(shortcut => shortcut.includes(term))) {
            score += 150;
          }
          
          // Exact title match gets very high score
          if (item.title.toLowerCase() === term) {
            score += 100;
          } else if (item.title.toLowerCase().includes(term)) {
            score += 60;
          }
          
          // Description match
          if (item.description.toLowerCase().includes(term)) {
            score += 40;
          }
          
          // Tag match
          if (item.tags.some(tag => tag.includes(term))) {
            score += 30;
          }
          
          // Content match
          if (item.content?.toLowerCase().includes(term)) {
            score += 20;
          }
          
          // Partial matches
          if (itemText.includes(term)) {
            score += 10;
          }
        });
        
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
    
    setTimeout(() => setIsLoading(false), 100);
    return results;
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
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
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredResults, onClose]);

  // Reset highlighted index when results change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [filteredResults]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleItemSelect = useCallback((item: SearchItem) => {
    addRecentSearch(item);
    
    if (onSelect) {
      onSelect(item);
    } else {
      window.location.href = item.url;
    }
    
    onClose();
    setQuery('');
    setHighlightedIndex(-1);
  }, [onSelect, onClose, addRecentSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center p-4 sm:p-6 md:p-20">
      {/* Backdrop with glassmorphism */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-10">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b border-neutral-100/50">
          <div className="relative flex-1">
            <IconSearch size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search components, guides, and more..."
              className="w-full pl-12 pr-4 py-3 text-lg bg-neutral-50/50 border border-neutral-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-200"
              aria-expanded={true}
              aria-haspopup="listbox"
              aria-autocomplete="list"
              role="combobox"
            />
            {isLoading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-neutral-300 border-t-blue-600 rounded-full animate-spin" />
              </div>
            )}
          </div>
          
          <Button
            variant="text-default"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-xl transition-colors"
            aria-label="Close search"
          >
            <IconX size={20} />
          </Button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto" ref={resultsRef}>
          {query.trim() === '' ? (
            // Empty state with recent searches
            <div className="p-6">
              {recentSearches.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <IconClock size={16} className="text-neutral-400" />
                    <h3 className="text-sm font-semibold text-neutral-700">Recent Searches</h3>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((item) => {
                      const CategoryIcon = categoryConfig[item.category].icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleItemSelect(item)}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors text-left group"
                        >
                          <div className={`p-2 rounded-lg ${categoryConfig[item.category].bgColor}`}>
                            <CategoryIcon size={16} className={categoryConfig[item.category].color} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-sm text-neutral-500 truncate">
                              {item.description}
                            </div>
                          </div>
                          <IconArrowRight size={16} className="text-neutral-400 group-hover:text-blue-600 transition-colors" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Quick suggestions */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-700 mb-4">Popular Searches</h3>
                <div className="grid grid-cols-2 gap-3">
                  {searchIndex.slice(0, 6).map((item) => {
                    const CategoryIcon = categoryConfig[item.category].icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemSelect(item)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors text-left group border border-neutral-100/50"
                      >
                        <div className={`p-2 rounded-lg ${categoryConfig[item.category].bgColor}`}>
                          <CategoryIcon size={16} className={categoryConfig[item.category].color} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </div>
                          {item.badge && (
                            <div className="text-xs text-neutral-500 mt-1">
                              {item.badge}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : filteredResults.length > 0 ? (
            // Search results
            <div className="p-4">
              <div className="space-y-2">
                {filteredResults.map((item, index) => {
                  const CategoryIcon = categoryConfig[item.category].icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemSelect(item)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`
                        w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 text-left group border-2
                        ${highlightedIndex === index
                          ? 'bg-blue-50 border-blue-200 shadow-lg shadow-blue-600/10'
                          : 'border-transparent hover:bg-neutral-50 hover:border-neutral-200/50'
                        }
                      `}
                      role="option"
                      aria-selected={highlightedIndex === index}
                    >
                      <div className={`p-3 rounded-xl ${categoryConfig[item.category].bgColor}`}>
                        <CategoryIcon size={20} className={categoryConfig[item.category].color} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h4>
                          {item.isNew && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                              New
                            </span>
                          )}
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-neutral-600 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                            {categoryConfig[item.category].label}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            // No results
            <div className="p-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-neutral-100 rounded-full">
                  <IconSearchOff size={32} className="text-neutral-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                No results found
              </h3>
              <p className="text-neutral-600 mb-6">
                Try adjusting your search terms or exploring different categories
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Button', 'Input', 'Card', 'Getting Started'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 text-sm bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-100/50 bg-neutral-50/30">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            {filteredResults.length > 0 && (
              <span>
                {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
              </span>
            )}
            <div className="flex items-center gap-1 ml-auto">
              <kbd className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compact search trigger for header
export function SearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 w-full max-w-sm px-4 py-2.5 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all duration-200 text-neutral-500 hover:text-neutral-700 group"
    >
      <IconSearch size={16} />
      <span className="flex-1 text-left text-sm">Search documentation...</span>
      <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
        <kbd className="px-1.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-xs font-medium">
          <IconCommand size={10} />
        </kbd>
        <kbd className="px-1.5 py-1 bg-neutral-100 border border-neutral-200 rounded text-xs font-medium">
          K
        </kbd>
      </div>
    </button>
  );
}
