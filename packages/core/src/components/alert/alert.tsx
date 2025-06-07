import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconInfoCircle, IconCheck, IconAlertTriangle, IconX } from '@tabler/icons-react';
import { cn } from '../../lib/utils';

const alertVariants = cva(
  'flex items-start gap-3 p-4 rounded-lg text-sm font-medium relative',
  {
    variants: {
      variant: {
        default: '',
        filled: 'text-white',
        outline: 'border',
      },
      severity: {
        info: '',
        success: '',
        warning: '',
        error: '',
      },
    },
    compoundVariants: [
      // Default variant - light backgrounds with dark text
      {
        variant: 'default',
        severity: 'info',
        class: 'bg-info-8 text-info-main',
      },
      {
        variant: 'default',
        severity: 'success',
        class: 'bg-success-8 text-success-main',
      },
      {
        variant: 'default',
        severity: 'warning',
        class: 'bg-warning-8 text-warning-main',
      },
      {
        variant: 'default',
        severity: 'error',
        class: 'bg-error-8 text-error-main',
      },
      // Filled variant - full colors with white text
      {
        variant: 'filled',
        severity: 'info',
        class: 'bg-info-main',
      },
      {
        variant: 'filled',
        severity: 'success',
        class: 'bg-success-main',
      },
      {
        variant: 'filled',
        severity: 'warning',
        class: 'bg-warning-main text-grey-800',
      },
      {
        variant: 'filled',
        severity: 'error',
        class: 'bg-error-main',
      },
      // Outline variant - light background with border
      {
        variant: 'outline',
        severity: 'info',
        class: 'bg-info-8 text-info-main border-info-48',
      },
      {
        variant: 'outline',
        severity: 'success',
        class: 'bg-success-8 text-success-main border-success-48',
      },
      {
        variant: 'outline',
        severity: 'warning',
        class: 'bg-warning-8 text-warning-main border-warning-48',
      },
      {
        variant: 'outline',
        severity: 'error',
        class: 'bg-error-8 text-error-main border-error-48',
      },
    ],
    defaultVariants: {
      variant: 'default',
      severity: 'info',
    },
  }
);

const iconVariants = cva('flex-shrink-0 mt-0.5', {
  variants: {
    variant: {
      default: '',
      filled: 'text-white',
      outline: '',
    },
    severity: {
      info: '',
      success: '',
      warning: '',
      error: '',
    },
  },
  compoundVariants: [
    // Default and outline variants use colored icons
    {
      variant: 'default',
      severity: 'info',
      class: 'text-info-main',
    },
    {
      variant: 'default',
      severity: 'success',
      class: 'text-success-main',
    },
    {
      variant: 'default',
      severity: 'warning',
      class: 'text-warning-main',
    },
    {
      variant: 'default',
      severity: 'error',
      class: 'text-error-main',
    },
    {
      variant: 'outline',
      severity: 'info',
      class: 'text-info-main',
    },
    {
      variant: 'outline',
      severity: 'success',
      class: 'text-success-main',
    },
    {
      variant: 'outline',
      severity: 'warning',
      class: 'text-warning-main',
    },
    {
      variant: 'outline',
      severity: 'error',
      class: 'text-error-main',
    },
  ],
  defaultVariants: {
    variant: 'default',
    severity: 'info',
  },
});

const closeButtonVariants = cva(
  'flex-shrink-0 p-1 rounded-md transition-colors duration-200 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'text-gray-400 hover:text-gray-600 focus:ring-gray-500',
        filled: 'text-white/70 hover:text-white hover:bg-white/20 focus:ring-white',
        outline: 'text-gray-400 hover:text-gray-600 focus:ring-gray-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const severityIcons = {
  info: IconInfoCircle,
  success: IconCheck,
  warning: IconAlertTriangle,
  error: IconX,
} as const;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * The content of the alert
   */
  children: React.ReactNode;
  /**
   * Visual variant of the alert
   * @default "default"
   */
  variant?: 'default' | 'filled' | 'outline';
  /**
   * Semantic severity level of the alert
   * @default "info"
   */
  severity?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Whether to show the close button
   * @default false
   */
  closable?: boolean;
  /**
   * Callback fired when the close button is clicked
   */
  onClose?: () => void;
  /**
   * Custom icon to override the default severity icon
   */
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  /**
   * Hide the icon completely
   * @default false
   */
  hideIcon?: boolean;
}

/**
 * Alert component for displaying important messages and notifications
 * 
 * @example
 * ```tsx
 * <Alert severity="success" closable onClose={() => console.log('closed')}>
 *   Operation completed successfully!
 * </Alert>
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className,
      variant = 'default',
      severity = 'info',
      closable = false,
      onClose,
      icon,
      hideIcon = false,
      ...props
    },
    ref
  ) => {
    const IconComponent = icon || severityIcons[severity];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, severity }), className)}
        {...props}
      >
        {!hideIcon && (
          <IconComponent
            size={20}
            className={iconVariants({ variant, severity })}
          />
        )}
        
        <div className="flex-1 min-w-0">
          {children}
        </div>

        {closable && (
          <button
            type="button"
            onClick={onClose}
            className={closeButtonVariants({ variant })}
            aria-label="Close alert"
          >
            <IconX size={16} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
