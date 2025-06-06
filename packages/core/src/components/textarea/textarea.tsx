import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Wrapper variants for the textarea container
const textareaWrapperVariants = cva(
  "relative w-full rounded-lg border-0 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        filled: "",
        error: "",
        success: "",
      },
      size: {
        sm: "min-h-[60px]",
        md: "min-h-[98px]",
        lg: "min-h-[120px]",
      },
      state: {
        default: "",
        hover: "",
        focus: "",
        error: "",
      },
      disabled: {
        true: "opacity-50",
        false: "",
      },
    },
    compoundVariants: [
      // Default variant styles (outline-based)
      {
        variant: ["default", "success"],
        state: "default",
        disabled: false,
        class: "outline outline-1 outline-grey-20 outline-offset-[-1px]",
      },
      {
        variant: ["default", "success"],
        state: "hover",
        disabled: false,
        class: "outline outline-1 outline-text-primary outline-offset-[-1px]",
      },
      {
        variant: ["default", "success"],
        state: "focus",
        disabled: false,
        class: "outline outline-2 outline-text-primary outline-offset-[-2px]",
      },
      {
        variant: ["default", "success"],
        disabled: true,
        class: "outline outline-1 outline-grey-20 outline-offset-[-1px]",
      },
      {
        variant: "error",
        state: "error",
        disabled: false,
        class: "outline outline-2 outline-error-main outline-offset-[-2px]",
      },
      // Filled variant styles (background-based)
      {
        variant: "filled",
        state: "default",
        disabled: false,
        class: "bg-grey-8",
      },
      {
        variant: "filled",
        state: "hover",
        disabled: false,
        class: "bg-grey-16",
      },
      {
        variant: "filled",
        state: "focus",
        disabled: false,
        class: "bg-grey-16",
      },
      {
        variant: "filled",
        disabled: true,
        class: "bg-grey-8",
      },
      // Filled variant error state
      {
        variant: "filled",
        state: "error",
        disabled: false,
        class: "bg-error-8",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default",
      disabled: false,
    },
  }
);

// Textarea field variants
const textareaFieldVariants = cva(
  "w-full bg-transparent border-0 outline-none font-normal font-sans placeholder:text-grey-500 disabled:cursor-not-allowed text-text-primary resize-y",
  {
    variants: {
      variant: {
        default: "",
        filled: "",
      },
      size: {
        sm: "min-h-[60px] text-[15px] leading-[22px]",
        md: "min-h-[98px] text-[15px] leading-[22px]",
        lg: "min-h-[120px] text-[15px] leading-[22px]",
      },
      hasLabel: {
        true: "pt-[18px] pb-[16px]",
        false: "py-[16px]",
      },
    },
    compoundVariants: [
      // Default variant padding
      {
        variant: "default",
        class: "px-[14px]",
      },
      // Filled variant padding (12px left/right)
      {
        variant: "filled",
        class: "px-[12px]",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      hasLabel: false,
    },
  }
);

// Floating label variants (reuse from Input with textarea-specific adjustments)
const labelVariants = cva(
  "absolute font-semibold font-sans transition-all duration-200 pointer-events-none px-1",
  {
    variants: {
      variant: {
        default: "bg-white left-[14px]",
        filled: "bg-transparent left-[12px]",
      },
      state: {
        default: "top-[16px] text-[15px] leading-[22px] text-grey-500",
        floating: "top-[-5px] text-xs leading-3 text-grey-600",
        focus: "top-[-5px] text-xs leading-3 text-text-primary",
        error: "top-[-5px] text-xs leading-3 text-error-main",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
      size: "md",
    },
  }
);

// Helper text variants (reuse from Input)
const helperTextVariants = cva(
  "flex items-center gap-1 mt-2 ml-3 text-xs font-sans",
  {
    variants: {
      variant: {
        default: "text-grey-600",
        error: "text-error-main",
        success: "text-success-main",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    Omit<VariantProps<typeof textareaWrapperVariants>, 'disabled' | 'state'> {
  label?: string;
  helperText?: string;
  helperIcon?: React.ReactNode;
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant, 
    size, 
    label,
    helperText,
    helperIcon,
    disabled,
    placeholder,
    value,
    defaultValue,
    onFocus,
    onBlur,
    onChange,
    error,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    // Check if textarea has value
    React.useEffect(() => {
      const textareaValue = value !== undefined ? value : defaultValue;
      setHasValue(Boolean(textareaValue));
    }, [value, defaultValue]);

    // Determine textarea state for styling
    const getTextareaState = () => {
      if (disabled) return "default";
      if (error || variant === "error") return "error";
      if (isFocused) return "focus";
      if (isHovered) return "hover";
      return "default";
    };

    // Determine label state
    const getLabelState = () => {
      if (disabled) return "default"; // Disabled textareas should always show default label state
      if ((error || variant === "error") && (isFocused || hasValue)) return "error";
      if (isFocused) return "focus";
      if (hasValue) return "floating";
      return "default";
    };

    // Helper function to get the base variant type for textarea/label styling
    const getBaseVariant = () => {
      return variant === "filled" ? "filled" : "default";
    };

    // Helper function to get the effective variant for wrapper styling (considers filled + error combination)
    const getWrapperVariant = () => {
      if (variant === "filled") return "filled";
      if (error || variant === "error") return "error";
      return variant || "default";
    };

    const shouldFloatLabel = !disabled && (isFocused || hasValue); // Don't float label when disabled
    const shouldShowLabel = Boolean(label);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(Boolean(e.target.value));
      onChange?.(e);
    };

    const handleMouseEnter = () => {
      if (!disabled) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div className="w-full">
        {/* Textarea Container */}
        <div
          className={cn(
            textareaWrapperVariants({ 
              variant: getWrapperVariant(), 
              size, 
              state: getTextareaState(),
              disabled: Boolean(disabled)
            }),
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Textarea Field */}
          <textarea
            className={cn(
              textareaFieldVariants({ 
                variant: getBaseVariant(),
                size, 
                hasLabel: Boolean(shouldShowLabel)
              })
            )}
            ref={ref}
            placeholder={shouldFloatLabel ? placeholder : (label || placeholder)}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />

          {/* Floating Label */}
          {shouldShowLabel && shouldFloatLabel && (
            <label
              className={cn(
                labelVariants({ 
                  variant: getBaseVariant(),
                  state: getLabelState(),
                  size 
                })
              )}
            >
              {label}
            </label>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <div className={cn(
            helperTextVariants({ 
              variant: (error || variant === "error") ? "error" : "default"
            })
          )}>
            {helperIcon && (
              <div className="w-4 h-4 flex items-center justify-center">
                {helperIcon}
              </div>
            )}
            <span>{helperText}</span>
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaWrapperVariants, textareaFieldVariants };
