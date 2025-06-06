import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Wrapper variants for the input container
const inputWrapperVariants = cva(
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
        sm: "h-10",
        md: "h-[54px]",
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

// Input field variants
const inputVariants = cva(
  "w-full bg-transparent border-0 outline-none font-normal font-sans placeholder:text-grey-500 disabled:cursor-not-allowed text-text-primary",
  {
    variants: {
      variant: {
        default: "",
        filled: "",
      },
      size: {
        sm: "h-10 text-[15px] leading-[22px]",
        md: "h-[54px] text-[15px] leading-[22px]",
      },
      hasLabel: {
        true: "pt-[18px] pb-[14px]",
        false: "py-0",
      },
    },
    compoundVariants: [
      // Default variant padding
      {
        variant: "default",
        class: "px-[14px]",
      },
      // Filled variant padding (12px left, 10px right)
      {
        variant: "filled",
        class: "pl-[12px] pr-[10px]",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      hasLabel: false,
    },
  }
);

// Floating label variants
const labelVariants = cva(
  "absolute font-semibold font-sans transition-all duration-200 pointer-events-none px-1",
  {
    variants: {
      variant: {
        default: "bg-white left-[14px]",
        filled: "bg-transparent left-[12px]",
      },
      state: {
        default: "top-1/2 -translate-y-1/2 text-[15px] leading-[22px] text-grey-500",
        floating: "top-[-5px] text-xs leading-3 text-grey-600",
        focus: "top-[-5px] text-xs leading-3 text-text-primary",
        error: "top-[-5px] text-xs leading-3 text-error-main",
      },
      size: {
        sm: "",
        md: "",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
      size: "md",
    },
  }
);

// Helper text variants
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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<VariantProps<typeof inputWrapperVariants>, 'disabled' | 'state'> {
  label?: string;
  helperText?: string;
  helperIcon?: React.ReactNode;
  endAdornment?: React.ReactNode;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    type, 
    label,
    helperText,
    helperIcon,
    endAdornment,
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

    // Check if input has value
    React.useEffect(() => {
      const inputValue = value !== undefined ? value : defaultValue;
      setHasValue(Boolean(inputValue));
    }, [value, defaultValue]);

    // Determine input state for styling
    const getInputState = () => {
      if (disabled) return "default";
      if (error || variant === "error") return "error";
      if (isFocused) return "focus";
      if (isHovered) return "hover";
      return "default";
    };

    // Determine label state
    const getLabelState = () => {
      if (disabled) return "default"; // Disabled inputs should always show default label state
      if ((error || variant === "error") && (isFocused || hasValue)) return "error";
      if (isFocused) return "focus";
      if (hasValue) return "floating";
      return "default";
    };

    // Helper function to get the base variant type for input/label styling
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

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {/* Input Container */}
        <div
          className={cn(
            inputWrapperVariants({ 
              variant: getWrapperVariant(), 
              size, 
              state: getInputState(),
              disabled: Boolean(disabled)
            }),
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Input Field */}
          <input
            type={type}
            className={cn(
              inputVariants({ 
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

          {/* End Adornment */}
          {endAdornment && (
            <div className={cn(
              "absolute top-1/2 -translate-y-1/2 flex items-center justify-center",
              size === "sm" ? "h-10" : "h-10",
              getBaseVariant() === "filled" ? "right-[10px]" : "right-[14px]"
            )}>
              {endAdornment}
            </div>
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

Input.displayName = "Input";

export { Input, inputWrapperVariants, inputVariants };
