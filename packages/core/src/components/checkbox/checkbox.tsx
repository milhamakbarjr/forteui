import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Checkbox wrapper variants for the container
const checkboxWrapperVariants = cva(
  "inline-flex items-center gap-3 cursor-pointer group",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-40",
        false: "",
      },
    },
  }
);

// Icon container variants for hover effects (following your reference)
const iconContainerVariants = cva(
  "p-2 rounded-full flex items-center justify-center transition-all duration-200",
  {
    variants: {
      variant: {
        default: "group-hover:bg-grey-8",
        primary: "group-hover:bg-primary-8",
        secondary: "group-hover:bg-secondary-8", 
        info: "group-hover:bg-info-8",
        success: "group-hover:bg-success-8",
        warning: "group-hover:bg-warning-8",
        error: "group-hover:bg-error-8",
      },
      disabled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        disabled: true,
        class: "group-hover:bg-transparent",
      },
    ],
  }
);

// SVG variants for different colors and states
const svgVariants = cva(
  "transition-all duration-200",
  {
    variants: {
      size: {
        sm: "w-5 h-5",
        md: "w-6 h-6",
      },
      variant: {
        default: "",
        primary: "",
        secondary: "",
        info: "",
        success: "",
        warning: "",
        error: "",
      },
    },
  }
);

// Label variants for the text
const labelVariants = cva(
  "text-sm font-normal leading-[22px] select-none",
  {
    variants: {
      disabled: {
        true: "text-action-disabled",
        false: "text-text-primary",
      },
    },
  }
);

// Checkbox Icon component using embedded SVG
const CheckboxIcon = React.memo(({ 
  checked, 
  variant, 
  size,
  disabled 
}: { 
  checked: boolean;
  variant: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
  size: "sm" | "md";
  disabled: boolean;
}) => {
  // Color mapping for different variants
  const colorMap = {
    default: '#657686',
    primary: '#0690F4',
    secondary: '#8B5CF6', 
    info: '#06B6D4',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  };

  const fillColor = checked ? colorMap[variant] : '#657686';

  const checkedSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM16.615 10.495L11.865 15.245C11.695 15.415 11.475 15.495 11.245 15.495C11.025 15.495 10.805 15.415 10.635 15.245L8.255 12.875C7.915 12.525 7.915 11.975 8.255 11.635C8.595 11.295 9.155 11.295 9.495 11.635L11.245 13.385L15.375 9.255C15.715 8.915 16.275 8.915 16.615 9.255C16.955 9.605 16.955 10.155 16.615 10.495Z" 
        fill={fillColor}
      />
    </svg>
  );

  const uncheckedSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM7.5 3.5C5.29086 3.5 3.5 5.29086 3.5 7.5V16.5C3.5 18.7091 5.29086 20.5 7.5 20.5H16.5C18.7091 20.5 20.5 18.7091 20.5 16.5V7.5C20.5 5.29086 18.7091 3.5 16.5 3.5H7.5Z" 
        fill={fillColor}
      />
    </svg>
  );

  return (
    <div className={cn(svgVariants({ size, variant }))}>
      {checked ? checkedSvg : uncheckedSvg}
    </div>
  );
});

CheckboxIcon.displayName = "CheckboxIcon";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof checkboxWrapperVariants> {
  /**
   * The label text for the checkbox
   */
  label?: string;
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * The variant of the checkbox
   */
  variant?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
  /**
   * The size of the checkbox
   */
  size?: "sm" | "md";
  /**
   * Callback fired when the checkbox state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Additional class name for the wrapper
   */
  className?: string;
  /**
   * Additional class name for the label
   */
  labelClassName?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      labelClassName,
      variant = "default",
      size = "md",
      label,
      checked,
      disabled = false,
      onCheckedChange,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(checked ?? false);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        
        if (!isControlled) {
          setInternalChecked(newChecked);
        }
        
        onCheckedChange?.(newChecked);
        onChange?.(event);
      },
      [isControlled, onCheckedChange, onChange]
    );

    const checkboxId = id || React.useId();

    return (
      <label
        htmlFor={checkboxId}
        className={cn(checkboxWrapperVariants({ disabled }), className)}
      >
        <div className={cn(iconContainerVariants({ variant, disabled }))}>
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            className="sr-only"
            aria-describedby={label ? `${checkboxId}-label` : undefined}
            {...props}
          />
          <CheckboxIcon 
            checked={isChecked}
            variant={variant}
            size={size}
            disabled={disabled}
          />
        </div>
        {label && (
          <span 
            id={`${checkboxId}-label`}
            className={cn(labelVariants({ disabled }), labelClassName)}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxWrapperVariants, iconContainerVariants, labelVariants };
