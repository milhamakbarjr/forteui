import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Radio wrapper variants for the container
const radioWrapperVariants = cva(
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

// Icon container variants for hover effects (following Figma reference)
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

// SVG variants for different sizes
const svgVariants = cva(
  "transition-all duration-200",
  {
    variants: {
      size: {
        sm: "w-5 h-5", // 20px
        md: "w-6 h-6", // 24px
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

// Radio Icon component using embedded SVG
const RadioIcon = React.memo(({ 
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
  // Color mapping for different variants based on design tokens
  const colorMap = {
    default: '#657686', // action-active from Figma
    primary: '#0690F4', // primary-main
    secondary: '#9138FF', // secondary-main
    info: '#00BEE0', // info-main
    success: '#22B954', // success-main
    warning: '#FFAD05', // warning-main
    error: '#FF5833', // error-main
  };

  // For disabled state, use action-disabled color
  const fillColor = disabled 
    ? 'rgba(145, 158, 171, 0.80)' // action-disabled
    : checked 
      ? colorMap[variant] 
      : '#657686'; // default unchecked color

  // Checked radio SVG (radio-on)
  const checkedSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" 
        fill={fillColor}
      />
    </svg>
  );

  // Unchecked radio SVG (radio-off)
  const uncheckedSvg = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z" 
        fill={fillColor}
      />
    </svg>
  );

  return (
    <div className={cn(svgVariants({ size }))}>
      {checked ? checkedSvg : uncheckedSvg}
    </div>
  );
});

RadioIcon.displayName = "RadioIcon";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * The label text for the radio button
   */
  label?: string;
  /**
   * Whether the radio button is checked
   */
  checked?: boolean;
  /**
   * Whether the radio button is disabled
   */
  disabled?: boolean;
  /**
   * The variant/color of the radio button
   * - default: Grey/action color (#657686)
   * - primary: Primary brand color (#0690F4)
   * - secondary: Secondary brand color (#9138FF)
   * - info: Info semantic color (#00BEE0)
   * - success: Success semantic color (#22B954)
   * - warning: Warning semantic color (#FFAD05)
   * - error: Error semantic color (#FF5833)
   */
  variant?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
  /**
   * The size of the radio button
   * - sm: 20px (small)
   * - md: 24px (medium)
   */
  size?: "sm" | "md";
  /**
   * The value of the radio button (for radio groups)
   */
  value?: string;
  /**
   * The name attribute for radio groups
   */
  name?: string;
  /**
   * Callback fired when the radio button is selected
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

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
      value,
      name,
      ...props
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      
      const isChecked = event.target.checked;
      onCheckedChange?.(isChecked);
      onChange?.(event);
    };

    return (
      <label
        className={cn(
          radioWrapperVariants({ disabled }),
          className
        )}
      >
        {/* Hidden native radio input for accessibility and form handling */}
        <input
          ref={ref}
          type="radio"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          name={name}
          aria-checked={checked}
          {...props}
        />
        
        {/* Custom radio icon with hover effects */}
        <div
          className={cn(
            iconContainerVariants({ variant, disabled })
          )}
        >
          <RadioIcon 
            checked={checked || false}
            variant={variant}
            size={size}
            disabled={disabled}
          />
        </div>
        
        {/* Label text if provided */}
        {label && (
          <span
            className={cn(
              labelVariants({ disabled }),
              labelClassName
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

// Radio Group component for managing multiple radio buttons
export interface RadioGroupProps {
  /**
   * The currently selected value
   */
  value?: string;
  /**
   * Callback fired when the selected value changes
   */
  onValueChange?: (value: string) => void;
  /**
   * The name attribute for all radio buttons in the group
   */
  name?: string;
  /**
   * Whether all radio buttons in the group are disabled
   */
  disabled?: boolean;
  /**
   * The variant applied to all radio buttons in the group
   */
  variant?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
  /**
   * The size applied to all radio buttons in the group
   */
  size?: "sm" | "md";
  /**
   * Additional class name for the group container
   */
  className?: string;
  /**
   * The radio button options
   */
  children: React.ReactNode;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      onValueChange,
      name,
      disabled = false,
      variant = "default",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const handleValueChange = (selectedValue: string) => {
      if (disabled) return;
      onValueChange?.(selectedValue);
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-3", className)}
        role="radiogroup"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioProps>(child) && child.type === Radio) {
            return React.cloneElement(child, {
              name: name || child.props.name,
              checked: value === child.props.value,
              disabled: disabled || child.props.disabled,
              variant: child.props.variant || variant,
              size: child.props.size || size,
              onCheckedChange: () => {
                if (child.props.value) {
                  handleValueChange(child.props.value);
                }
              },
            });
          }
          return child;
        })}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export { Radio, RadioGroup, radioWrapperVariants };
