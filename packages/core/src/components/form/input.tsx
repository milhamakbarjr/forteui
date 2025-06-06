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
        error: "",
        success: "",
      },
      size: {
        sm: "h-10",
        md: "h-[54px]",
      },
      state: {
        default: "outline outline-1 outline-grey-20 outline-offset-[-1px]",
        hover: "outline outline-1 outline-text-primary outline-offset-[-1px]",
        focus: "outline outline-2 outline-text-primary outline-offset-[-2px]",
        error: "outline outline-2 outline-error-main outline-offset-[-2px]",
      },
      disabled: {
        true: "outline outline-1 outline-grey-20 outline-offset-[-1px] opacity-50",
        false: "",
      },
    },
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
      size: {
        sm: "h-10 px-[14px] text-[15px] leading-[22px]",
        md: "h-[54px] px-[14px] text-[15px] leading-[22px]",
      },
      hasLabel: {
        true: "pt-[18px] pb-[14px]",
        false: "py-0",
      },
    },
    defaultVariants: {
      size: "md",
      hasLabel: false,
    },
  }
);

// Floating label variants
const labelVariants = cva(
  "absolute left-[14px] font-semibold font-sans transition-all duration-200 pointer-events-none bg-white px-1",
  {
    variants: {
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
      if (variant === "error") return "error";
      if (isFocused) return "focus";
      if (isHovered) return "hover";
      return "default";
    };

    // Determine label state
    const getLabelState = () => {
      if (disabled) return "default"; // Disabled inputs should always show default label state
      if (variant === "error" && (isFocused || hasValue)) return "error";
      if (isFocused) return "focus";
      if (hasValue) return "floating";
      return "default";
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
              variant, 
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
              "absolute right-[14px] top-1/2 -translate-y-1/2 flex items-center justify-center",
              size === "sm" ? "h-10" : "h-10"
            )}>
              {endAdornment}
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <div className={cn(
            helperTextVariants({ 
              variant: variant === "error" ? "error" : "default"
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
