import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { 
  IconInfoCircle, 
  IconCheck, 
  IconAlertTriangle, 
  IconAlertCircle, 
  IconX 
} from '@tabler/icons-react';
import { cn } from '../../lib/utils';

const snackbarVariants = cva(
  'w-[420px] flex items-center gap-3 rounded-xl shadow-md relative',
  {
    variants: {
      variant: {
        default: 'bg-grey-800 text-white p-3',
        action: 'bg-white p-1',
      },
      severity: {
        default: '',
        info: '',
        success: '',
        warning: '',
        error: '',
      },
    },
    compoundVariants: [
      // Default variant (dark theme) - only applies to default severity
      {
        variant: 'default',
        severity: 'default',
        class: 'bg-grey-800 text-white',
      },
      // Action variant with semantic backgrounds
      {
        variant: 'action',
        severity: 'info',
        class: 'bg-white',
      },
      {
        variant: 'action',
        severity: 'success',
        class: 'bg-white',
      },
      {
        variant: 'action',
        severity: 'warning',
        class: 'bg-white',
      },
      {
        variant: 'action',
        severity: 'error',
        class: 'bg-white',
      },
    ],
    defaultVariants: {
      variant: 'default',
      severity: 'default',
    },
  }
);

const iconContainerVariants = cva(
  'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
  {
    variants: {
      severity: {
        default: 'hidden',
        info: 'bg-info-8',
        success: 'bg-success-8',
        warning: 'bg-warning-8',
        error: 'bg-error-8',
      },
    },
    defaultVariants: {
      severity: 'default',
    },
  }
);

const iconVariants = cva('w-6 h-6', {
  variants: {
    severity: {
      default: 'text-white',
      info: 'text-info-main',
      success: 'text-success-main',
      warning: 'text-warning-main',
      error: 'text-error-main',
    },
  },
  defaultVariants: {
    severity: 'default',
  },
});

const messageVariants = cva(
  'text-sm font-semibold leading-[22px] flex-1',
  {
    variants: {
      variant: {
        default: 'text-white',
        action: 'text-grey-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const closeButtonVariants = cva(
  'w-5 h-5 rounded-full border border-grey-16 flex items-center justify-center p-0 bg-transparent hover:bg-grey-8 transition-colors',
  {
    variants: {
      variant: {
        default: 'text-white border-grey-16',
        action: 'text-grey-700 border-grey-16',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const actionButtonVariants = cva(
  'h-[30px] px-2 rounded-lg text-[13px] font-bold leading-[22px] min-w-16 flex items-center justify-center transition-colors',
  {
    variants: {
      severity: {
        default: 'bg-primary-main text-white hover:bg-primary-dark',
        info: 'bg-info-8 text-info-dark hover:bg-info-16',
        success: 'bg-success-8 text-success-dark hover:bg-success-16',
        warning: 'bg-warning-8 text-warning-dark hover:bg-warning-16',
        error: 'bg-error-8 text-error-dark hover:bg-error-16',
      },
    },
    defaultVariants: {
      severity: 'default',
    },
  }
);

const severityIcons = {
  default: IconX,
  info: IconInfoCircle,
  success: IconCheck,
  warning: IconAlertTriangle,
  error: IconAlertCircle,
} as const;

export interface SnackbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof snackbarVariants> {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  closable?: boolean;
  icon?: React.ReactNode;
  hideIcon?: boolean;
}

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      className,
      variant = 'default',
      severity = 'default',
      message,
      actionLabel,
      onAction,
      onClose,
      closable = false,
      icon,
      hideIcon = false,
      ...props
    },
    ref
  ) => {
    const IconComponent = icon ? icon : severityIcons[severity || 'default'];
    const showIcon = !hideIcon && severity !== 'default';
    const showAction = variant === 'action' && actionLabel && onAction;
    const showClose = (variant === 'default' && closable) || (!showAction && closable);

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(snackbarVariants({ variant, severity }), className)}
        {...props}
      >
        {/* Icon Container - only for semantic severities */}
        {showIcon && (
          <div className={iconContainerVariants({ severity })}>
            {icon ? (
              icon
            ) : (
              React.createElement(severityIcons[severity || 'default'], {
                className: iconVariants({ severity })
              })
            )}
          </div>
        )}

        {/* Message */}
        <div className={messageVariants({ variant })}>
          {message}
        </div>

        {/* Action Button - only for action variant */}
        {showAction && (
          <div className="flex items-center gap-2 pr-4">
            <button
              type="button"
              onClick={onAction}
              className={actionButtonVariants({ severity })}
            >
              {actionLabel}
            </button>
          </div>
        )}

        {/* Close Button */}
        {showClose && onClose && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={onClose}
              className={closeButtonVariants({ variant })}
              aria-label="Close notification"
            >
              <IconX className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    );
  }
);

Snackbar.displayName = 'Snackbar';

export { Snackbar, snackbarVariants };
