import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Base breadcrumb container variants
const breadcrumbVariants = cva(
  'flex items-center justify-start',
  {
    variants: {
      variant: {
        text: 'gap-4',
        icon: 'gap-4',
      },
    },
    defaultVariants: {
      variant: 'text',
    },
  }
);

// Individual breadcrumb item variants
const breadcrumbItemVariants = cva(
  'flex items-center font-sans text-sm font-normal leading-[22px]',
  {
    variants: {
      variant: {
        text: 'gap-1',
        icon: 'gap-1',
      },
      state: {
        active: 'text-text-primary cursor-pointer hover:text-primary-600 transition-colors',
        current: 'text-text-disabled cursor-default',
      },
    },
    defaultVariants: {
      variant: 'text',
      state: 'active',
    },
  }
);

// Icon container variants
const iconVariants = cva(
  'flex items-center justify-center shrink-0',
  {
    variants: {
      state: {
        active: 'text-text-primary',
        current: 'text-text-disabled',
      },
    },
    defaultVariants: {
      state: 'active',
    },
  }
);

// Separator variants
const separatorVariants = cva(
  'w-1 h-1 shrink-0 text-text-disabled'
);

export interface BreadcrumbItem {
  /** The display label for the breadcrumb item */
  label: string;
  /** Optional href for navigation. If not provided, item will be rendered as a button */
  href?: string;
  /** Optional icon component (20x20px recommended) */
  icon?: React.ComponentType<{ className?: string }>;
  /** Whether this is the current/active page (non-clickable) */
  isCurrent?: boolean;
  /** Click handler for custom navigation logic */
  onClick?: (event: React.MouseEvent) => void;
}

export interface BreadcrumbProps extends VariantProps<typeof breadcrumbVariants> {
  /** Array of breadcrumb items to display */
  items: BreadcrumbItem[];
  /** Custom separator component (defaults to dot) */
  separator?: React.ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
  /** ARIA label for the breadcrumb navigation */
  'aria-label'?: string;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ 
    items, 
    variant = 'text', 
    separator, 
    className, 
    'aria-label': ariaLabel = 'Breadcrumb navigation',
    ...props 
  }, ref) => {
    const renderItem = (item: BreadcrumbItem, index: number) => {
      const isLast = index === items.length - 1;
      const isCurrent = item.isCurrent || isLast;
      const state = isCurrent ? 'current' : 'active';
      
      const content = (
        <>
          {variant === 'icon' && item.icon && (
            <span className={iconVariants({ state })}>
              <item.icon className="w-5 h-5" />
            </span>
          )}
          <span>{item.label}</span>
        </>
      );

      const itemClasses = breadcrumbItemVariants({ variant, state });

      if (isCurrent || !item.href) {
        return (
          <span
            key={index}
            className={itemClasses}
            aria-current={isCurrent ? 'page' : undefined}
            onClick={!isCurrent ? item.onClick : undefined}
            role={!isCurrent && item.onClick ? 'button' : undefined}
            tabIndex={!isCurrent && item.onClick ? 0 : undefined}
            onKeyDown={!isCurrent && item.onClick ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.onClick?.(e as any);
              }
            } : undefined}
          >
            {content}
          </span>
        );
      }

      return (
        <a
          key={index}
          href={item.href}
          className={itemClasses}
          onClick={item.onClick}
        >
          {content}
        </a>
      );
    };

    const renderSeparator = (index: number) => {
      if (separator !== undefined) {
        return (
          <span key={`sep-${index}`} className="flex items-center">
            {separator}
          </span>
        );
      }
      
      return (
        <span key={`sep-${index}`} className={separatorVariants()} aria-hidden="true">
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
        </span>
      );
    };

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn(breadcrumbVariants({ variant }), className)}
        {...props}
      >
        <ol className="flex items-center gap-4">
          {items.map((item, index) => (
            <React.Fragment key={`fragment-${index}`}>
              <li>
                {renderItem(item, index)}
              </li>
              {index < items.length - 1 && (
                <li aria-hidden="true">
                  {renderSeparator(index)}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb, breadcrumbVariants, breadcrumbItemVariants, iconVariants, separatorVariants };
