'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { 
  Button, 
  Container, 
  Text, 
  Heading, 
  Badge 
} from '@forteui/core';
import { 
  IconMenu2, 
  IconX, 
  IconSearch, 
  IconBook,
  IconPalette,
  IconComponents,
  IconLayout,
  IconBell,
  IconFileText,
  IconChevronRight,
  IconChevronDown,
  IconFolder,
  IconFolderOpen
} from '@tabler/icons-react';
import '../../styles/navigation.css';

// TypeScript interfaces
interface NavigationChild {
  id: string;
  label: string;
  icon: any;
  type: 'file';
  href: string;
  disabled?: boolean;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: any;
  type: 'folder';
  defaultExpanded?: boolean;
  children?: NavigationChild[];
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Dynamic imports for search components to avoid SSR issues
const EnhancedSearchModal = dynamic(
  () => import('../../components/EnhancedSearch').then(mod => ({ default: mod.EnhancedSearchModal })),
  { ssr: false }
);

const SearchTrigger = dynamic(
  () => import('../../components/EnhancedSearch').then(mod => ({ default: mod.SearchTrigger })),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center gap-3 w-full max-w-sm px-4 py-2.5 bg-white border border-neutral-200 rounded-xl">
        <div className="w-4 h-4 bg-neutral-200 rounded animate-pulse" />
        <span className="flex-1 text-left text-sm text-neutral-400">Loading search...</span>
      </div>
    )
  }
);

// Custom hook for navigation state management
const useNavigationState = (currentPath: string, navigationData: NavigationItem[]) => {
  // Initialize expanded items with persistence and smart defaults
  const [expandedItems, setExpandedItems] = useState<Set<string>>(() => {
    const initialExpanded = new Set<string>();
    
    // Load saved preferences from localStorage (client-side only)
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('forte-docs-expanded');
        if (saved) {
          const savedArray = JSON.parse(saved) as string[];
          savedArray.forEach(id => initialExpanded.add(id));
        }
      } catch (e) {
        // Fallback to defaults if localStorage is corrupted
      }
    }
    
    // If no saved preferences, use defaults
    if (initialExpanded.size === 0) {
      navigationData.forEach(item => {
        if (item.defaultExpanded) {
          initialExpanded.add(item.id);
        }
      });
    }
    
    return initialExpanded;
  });

  // Save expanded state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const expandedArray = Array.from(expandedItems);
        localStorage.setItem('forte-docs-expanded', JSON.stringify(expandedArray));
      } catch (e) {
        // Handle localStorage quota exceeded or other errors silently
      }
    }
  }, [expandedItems]);

  // Auto-expand sections containing active items when path changes
  useEffect(() => {
    if (currentPath) {
      const itemToExpand = navigationData.find(item => 
        item.children?.some(child => currentPath === child.href)
      );
      
      if (itemToExpand && !expandedItems.has(itemToExpand.id)) {
        setExpandedItems(prev => {
          const newSet = new Set(prev);
          newSet.add(itemToExpand.id);
          return newSet;
        });
      }
    }
  }, [currentPath, navigationData, expandedItems]);

  const toggleExpanded = useCallback((itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set<string>();
      prev.forEach(id => newSet.add(id));
      
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const isExpanded = useCallback((itemId: string) => {
    return expandedItems.has(itemId);
  }, [expandedItems]);

  return {
    expandedItems,
    toggleExpanded,
    isExpanded
  };
};

// Navigation data structure
const navigationData: NavigationItem[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: IconBook,
    type: 'folder',
    defaultExpanded: true,
    children: [
      {
        id: 'introduction',
        label: 'Introduction',
        icon: IconFileText,
        type: 'file',
        href: '/docs/introduction'
      },
      {
        id: 'getting-started-guide',
        label: 'Getting Started',
        icon: IconFileText,
        type: 'file',
        href: '/docs/getting-started'
      }
    ]
  },
  {
    id: 'design-system',
    label: 'Design System',
    icon: IconPalette,
    type: 'folder',
    defaultExpanded: false,
    children: [
      {
        id: 'design-system-guide',
        label: 'Design System',
        icon: IconFileText,
        type: 'file',
        href: '/docs/design-system'
      }
      // {
      //   id: 'theming',
      //   label: 'Theming',
      //   icon: IconFileText,
      //   type: 'file',
      //   href: '/docs/theming'
      // },
      // {
      //   id: 'accessibility',
      //   label: 'Accessibility',
      //   icon: IconFileText,
      //   type: 'file',
      //   href: '/docs/accessibility'
      // }
    ]
  },
  {
    id: 'form-components',
    label: 'Form Components',
    icon: IconComponents,
    type: 'folder',
    defaultExpanded: true,
    children: [
      {
        id: 'button',
        label: 'Button',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/button'
      },
      {
        id: 'input',
        label: 'Input',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/input'
      },
      {
        id: 'checkbox',
        label: 'Checkbox',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/checkbox'
      },
      {
        id: 'radio',
        label: 'Radio',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/radio'
      },
      {
        id: 'switch',
        label: 'Switch',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/switch'
      },
      {
        id: 'textarea',
        label: 'Textarea',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/textarea'
      },
      {
        id: 'slider',
        label: 'Slider',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/slider'
      }
    ]
  },
  {
    id: 'display-components',
    label: 'Display Components',
    icon: IconLayout,
    type: 'folder',
    defaultExpanded: false,
    children: [
      {
        id: 'badge',
        label: 'Badge',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/badge'
      },
      {
        id: 'card',
        label: 'Card',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/card'
      },
      {
        id: 'avatar',
        label: 'Avatar',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/avatar'
      },
      {
        id: 'chip',
        label: 'Chip',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/chip'
      },
      {
        id: 'typography',
        label: 'Typography',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/typography'
      }
    ]
  },
  {
    id: 'navigation-components',
    label: 'Navigation Components',
    icon: IconChevronRight,
    type: 'folder',
    defaultExpanded: false,
    children: [
      {
        id: 'breadcrumb',
        label: 'Breadcrumb',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/breadcrumb'
      },
      {
        id: 'pagination',
        label: 'Pagination',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/pagination',
        disabled: true
      },
      {
        id: 'stepper',
        label: 'Stepper',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/stepper',
        disabled: true
      }
    ]
  },
  {
    id: 'feedback-components',
    label: 'Feedback Components',
    icon: IconBell,
    type: 'folder',
    defaultExpanded: false,
    children: [
      {
        id: 'alert',
        label: 'Alert',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/alert'
      },
      {
        id: 'snackbar',
        label: 'Snackbar',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/snackbar'
      },
      {
        id: 'progress',
        label: 'Progress',
        icon: IconFileText,
        type: 'file',
        href: '/docs/components/progress'
      }
    ]
  }
];

// Icon Container Component
const IconContainer = ({ 
  children, 
  variant = 'default',
  className = '' 
}: {
  children: React.ReactNode;
  variant?: 'default' | 'folder' | 'file' | 'component' | 'system';
  className?: string;
}) => {
  const variants = {
    default: 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200',
    folder: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    file: 'bg-neutral-50 text-neutral-500 hover:bg-neutral-100',
    component: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
    system: 'bg-green-50 text-green-600 hover:bg-green-100'
  };

  return (
    <div className={`
      w-7 h-7 
      flex items-center justify-center 
      transition-colors duration-200
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Navigation Item Component
const NavigationItem = ({ 
  item, 
  level = 0, 
  isLast = false,
  onNavigate,
  navigationState
}: {
  item: NavigationItem | NavigationChild;
  level?: number;
  isLast?: boolean;
  onNavigate?: () => void;
  navigationState: ReturnType<typeof useNavigationState>;
}) => {
  const hasChildren = 'children' in item && item.children && item.children.length > 0;
  const IconComponent = item.icon;
  
  // Get expanded state
  const isExpanded = hasChildren ? navigationState.isExpanded(item.id) : false;

  const handleToggle = () => {
    if (hasChildren) {
      navigationState.toggleExpanded(item.id);
    }
  };

  const handleClick = () => {
    if ('href' in item && item.href && !item.disabled) {
      onNavigate?.();
      // Navigation will be handled by the link
    } else if (hasChildren) {
      handleToggle();
    }
  };

  // Get the appropriate icon variant based on the section
  const getIconVariant = () => {
    if (item.id.includes('getting-started') || item.id.includes('introduction')) return 'system';
    if (item.id.includes('design-system') || item.id.includes('theming') || item.id.includes('accessibility')) return 'folder';
    if (item.id.includes('components') || hasChildren) return 'component';
    return 'file';
  };

  return (
    <div className="navigation-item">
      <div 
        className={`
          relative flex items-center gap-3 px-3 py-2.5 mx-2
          transition-all duration-200 cursor-pointer group
          ${level > 0 ? `ml-${level * 4}` : ''}
          ${'disabled' in item && item.disabled
            ? 'text-neutral-400 cursor-not-allowed'
            : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
          }
        `}
        onClick={handleClick}
        style={{ 
          marginLeft: level > 0 ? `${level * 16}px` : '0px',
          paddingLeft: level > 0 ? '12px' : '12px'
        }}
      >
        {/* Icon */}
        <IconContainer 
          variant={getIconVariant()}
          className="flex-shrink-0"
        >
          {hasChildren ? (
            isExpanded ? (
              <IconFolderOpen size={16} />
            ) : (
              <IconFolder size={16} />
            )
          ) : (
            <IconComponent size={16} />
          )}
        </IconContainer>
        
        {/* Label */}
        {'href' in item && item.href && !('disabled' in item && item.disabled) ? (
          <a 
            href={item.href}
            className="flex-1 text-sm font-medium no-underline text-current"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate?.();
            }}
          >
            {item.label}
          </a>
        ) : (
          <span className={`flex-1 text-sm ${hasChildren ? 'font-semibold' : 'font-medium'}`}>
            {item.label}
          </span>
        )}
        
        {/* Expand indicator */}
        {hasChildren && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            className="p-1 opacity-60 group-hover:opacity-100 hover:bg-white/50 transition-all"
          >
            <IconChevronDown 
              size={14}
              className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </div>
        )}
      </div>
      
      {/* Children */}
      {hasChildren && isExpanded && 'children' in item && item.children && (
        <div className="children-container mt-1 space-y-1">
          {item.children.map((child: NavigationChild, index: number) => (
            <NavigationItem
              key={child.id}
              item={child}
              level={level + 1}
              isLast={index === (item.children?.length || 0) - 1}
              onNavigate={onNavigate}
              navigationState={navigationState}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Breadcrumb Component
const BreadcrumbNav = ({ currentPath }: { currentPath: string }) => {
  const generateBreadcrumbs = (path: string) => {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs: Array<{ label: string; href?: string }> = [{ label: 'Home', href: '/' }];
    
    if (segments.includes('docs')) {
      breadcrumbs.push({ label: 'Documentation', href: '/docs' });
      
      const afterDocs = segments.slice(segments.indexOf('docs') + 1);
      if (afterDocs.length > 0) {
        let currentPath = '/docs';
        afterDocs.forEach((segment, index) => {
          currentPath += `/${segment}`;
          const label = segment.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
          breadcrumbs.push({ 
            label, 
            href: index === afterDocs.length - 1 ? undefined : currentPath 
          });
        });
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(currentPath);
  
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <IconChevronRight size={14} className="text-neutral-400 mx-2" />
          )}
          {crumb.href ? (
            <a 
              href={crumb.href}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {crumb.label}
            </a>
          ) : (
            <span className="text-neutral-900 font-medium">{crumb.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

// Main Header Component
const MainHeader = ({ currentPath, onSearchOpen }: { currentPath: string; onSearchOpen: () => void }) => (
  <header className="main-header bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-40">
    <div className="px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <a 
          href="/" 
          className="flex items-center gap-3 hover:opacity-80 transition-all duration-200 group"
          aria-label="Go to ForteUI homepage"
        >
          <img 
            src="/logo-forteui-colored.svg" 
            alt="ForteUI" 
            className="h-8 w-auto group-hover:scale-105 transition-transform duration-200"
          />
        </a>
        
        <div className="hidden lg:flex items-center gap-6">
          <div className="search-container max-w-sm w-full">
            <SearchTrigger onClick={onSearchOpen} />
          </div>
          <div className="flex items-center gap-3">
            <Badge 
              variant="secondary" 
              className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 border border-neutral-200"
            >
              v0.1.3
            </Badge>
            <a 
              href="https://github.com/forteui/forteui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
              aria-label="View on GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-600">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <BreadcrumbNav currentPath={currentPath} />
    </div>
  </header>
);

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => {
    // Initialize with current path if available on client-side
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '';
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  
  // Global search keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update current path on client side and on route changes
  useEffect(() => {
    const updatePath = () => {
      if (typeof window !== 'undefined') {
        const newPath = window.location.pathname;
        if (newPath !== currentPath) {
          setCurrentPath(newPath);
        }
      }
    };

    // Set initial path (in case useState didn't catch it)
    updatePath();

    // Listen for route changes (Next.js router events)
    const handleRouteChange = () => {
      setTimeout(updatePath, 0); // Ensure DOM is updated
    };

    // Listen for browser navigation
    window.addEventListener('popstate', handleRouteChange);
    
    // Listen for link clicks that might change the route
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.closest('a')) {
        setTimeout(updatePath, 100); // Small delay to ensure navigation completes
      }
    };
    
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [currentPath]);

  // Initialize navigation state
  const navigationState = useNavigationState(currentPath, navigationData);

  return (
    <div className="h-screen flex flex-col bg-neutral-50">
      {/* Enhanced Search Modal */}
      <EnhancedSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      {/* Main Header */}
      <MainHeader currentPath={currentPath} onSearchOpen={() => setIsSearchOpen(true)} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
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
            w-80 bg-white border-r border-neutral-200 overflow-hidden h-full flex flex-col
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="p-0 flex-1 flex flex-col">
            {/* Sidebar Header - Mobile Only */}
            <div className="lg:hidden p-6 border-b border-neutral-100 bg-neutral-50/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="/logo-forteui-colored.svg" 
                    alt="ForteUI" 
                    className="h-7 w-auto"
                  />
                  <div className="flex flex-col">
                    <Heading level={6} className="text-neutral-900 font-bold text-sm">
                      ForteUI
                    </Heading>
                    <Text variant="caption" className="text-neutral-500 text-xs">
                      Documentation
                    </Text>
                  </div>
                </div>
                
                <Button
                  variant="text-default"
                  size="sm"
                  onClick={closeSidebar}
                  className="p-2 h-9 w-9 hover:bg-neutral-200 rounded-xl"
                  aria-label="Close navigation"
                >
                  <IconX size={16} />
                </Button>
              </div>
              
              {/* Mobile Search */}
              <div className="mt-4">
                <SearchTrigger onClick={() => setIsSearchOpen(true)} />
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <nav className="space-y-2">
                {navigationData.map((item) => (
                  <NavigationItem
                    key={item.id}
                    item={item}
                    level={0}
                    onNavigate={closeSidebar}
                    navigationState={navigationState}
                  />
                ))}
              </nav>
            </div>
            
            {/* Sidebar Footer */}
            <div className="p-6 border-t border-neutral-100 bg-neutral-50/30">
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                <span className="font-medium">© 2025 ForteUI</span>
                <Badge variant="secondary" className="text-xs px-2 py-1">
                  v0.1.3
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/forteui/forteui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  GitHub
                </a>
                <span className="text-neutral-300">•</span>
                <a 
                  href="/docs" 
                  className="text-xs text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Docs
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile Header */}
          <header className="lg:hidden bg-white/95 backdrop-blur-sm border-b border-neutral-200 px-4 py-3 flex items-center justify-between">
            <Button
              variant="text-default"
              size="sm"
              onClick={toggleSidebar}
              className="p-2 h-10 w-10 hover:bg-neutral-100 rounded-xl transition-all duration-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isSidebarOpen}
              aria-controls="sidebar-navigation"
            >
              <IconMenu2 size={20} />
            </Button>
            
            <a 
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo-forteui-colored.svg" 
                alt="ForteUI" 
                className="h-6 w-auto"
              />
              <Text variant="body-sm" className="font-bold text-neutral-900">
                ForteUI
              </Text>
            </a>
            
            <div className="w-10"></div> {/* Balance the layout */}
          </header>

          {/* Content */}
          <main 
            id="main-content" 
            role="main" 
            aria-label="Documentation content"
            className="flex-1 overflow-y-auto bg-white"
          >
            <Container size="xl" className="py-8">
              {children}
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
}
