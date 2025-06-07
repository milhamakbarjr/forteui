import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { IconX } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

const chipVariants = cva(
  "inline-flex items-center text-xs leading-tight font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "",
        outlined: "border bg-transparent",
        soft: ""
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        info: "",
        success: "",
        warning: "",
        error: ""
      },
      size: {
        medium: "h-8 px-1", // 32px height, 4px padding
        small: "h-6 px-0.5"  // 24px height, 2px padding
      }
    },
    compoundVariants: [
      // Border radius variations
      { size: "medium", variant: "filled", class: "rounded-[10px]" },
      { size: "medium", variant: ["outlined", "soft"], class: "rounded-lg" },
      { size: "small", variant: ["filled", "outlined", "soft"], class: "rounded-lg" },
      
      // Filled variant styles
      { variant: "filled", color: "default", class: "bg-grey-800 text-white hover:bg-grey-900 focus-visible:ring-grey-800" },
      { variant: "filled", color: "primary", class: "bg-primary-main text-white hover:bg-primary-dark focus-visible:ring-primary-main" },
      { variant: "filled", color: "secondary", class: "bg-secondary-main text-white hover:bg-secondary-dark focus-visible:ring-secondary-main" },
      { variant: "filled", color: "info", class: "bg-info-main text-white hover:bg-info-dark focus-visible:ring-info-main" },
      { variant: "filled", color: "success", class: "bg-success-main text-white hover:bg-success-dark focus-visible:ring-success-main" },
      { variant: "filled", color: "warning", class: "bg-warning-main text-grey-800 hover:bg-warning-dark focus-visible:ring-warning-main" },
      { variant: "filled", color: "error", class: "bg-error-main text-white hover:bg-error-dark focus-visible:ring-error-main" },
      
      // Outlined variant styles
      { variant: "outlined", color: "default", class: "border-grey-32 text-text-primary hover:bg-grey-8 hover:border-grey-400 focus-visible:ring-grey-400" },
      { variant: "outlined", color: "primary", class: "border-primary-main text-primary-main hover:bg-primary-8 hover:border-primary-dark focus-visible:ring-primary-main" },
      { variant: "outlined", color: "secondary", class: "border-secondary-main text-secondary-main hover:bg-secondary-8 hover:border-secondary-dark focus-visible:ring-secondary-main" },
      { variant: "outlined", color: "info", class: "border-info-main text-info-main hover:bg-info-8 hover:border-info-dark focus-visible:ring-info-main" },
      { variant: "outlined", color: "success", class: "border-success-main text-success-main hover:bg-success-8 hover:border-success-dark focus-visible:ring-success-main" },
      { variant: "outlined", color: "warning", class: "border-warning-main text-warning-main hover:bg-warning-8 hover:border-warning-dark focus-visible:ring-warning-main" },
      { variant: "outlined", color: "error", class: "border-error-main text-error-main hover:bg-error-8 hover:border-error-dark focus-visible:ring-error-main" },
      
      // Soft variant styles
      { variant: "soft", color: "default", class: "bg-grey-12 text-text-primary hover:bg-grey-16 focus-visible:ring-grey-400" },
      { variant: "soft", color: "primary", class: "bg-primary-16 text-primary-dark hover:bg-primary-20 focus-visible:ring-primary-main" },
      { variant: "soft", color: "secondary", class: "bg-secondary-16 text-secondary-dark hover:bg-secondary-20 focus-visible:ring-secondary-main" },
      { variant: "soft", color: "info", class: "bg-info-16 text-info-dark hover:bg-info-20 focus-visible:ring-info-main" },
      { variant: "soft", color: "success", class: "bg-success-16 text-success-dark hover:bg-success-20 focus-visible:ring-success-main" },
      { variant: "soft", color: "warning", class: "bg-warning-16 text-warning-dark hover:bg-warning-20 focus-visible:ring-warning-main" },
      { variant: "soft", color: "error", class: "bg-error-16 text-error-dark hover:bg-error-20 focus-visible:ring-error-main" }
    ],
    defaultVariants: {
      variant: "filled",
      color: "default",
      size: "medium"
    }
  }
);

const chipLabelVariants = cva(
  "flex items-center",
  {
    variants: {
      size: {
        medium: "px-2", // 8px padding
        small: "px-[5px]"  // 5px padding
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
);

const chipActionVariants = cva(
  "inline-flex items-center justify-center transition-opacity hover:opacity-75 focus:opacity-75 focus:outline-none overflow-hidden",
  {
    variants: {
      size: {
        medium: "w-5 h-5", // 20px container to match Figma
        small: "w-5 h-5"   // same size for both
      },
      position: {
        start: "mr-1",
        end: "ml-1"
      }
    },
    compoundVariants: [
      // Color-specific opacity for filled variants
      { class: "opacity-48" } // Default 48% opacity from Figma
    ],
    defaultVariants: {
      size: "medium",
      position: "end"
    }
  }
);

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
  /**
   * The visual style variant of the chip
   */
  variant?: "filled" | "outlined" | "soft";
  
  /**
   * The color theme of the chip
   */
  color?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
  
  /**
   * The size of the chip
   */
  size?: "medium" | "small";
  
  /**
   * Icon to display at the start of the chip
   */
  startIcon?: React.ReactNode;
  
  /**
   * Icon to display at the end of the chip
   */
  endIcon?: React.ReactNode;
  
  /**
   * Callback fired when the start icon is clicked
   */
  onStartIconClick?: () => void;
  
  /**
   * Callback fired when the end icon is clicked
   */
  onEndIconClick?: () => void;
  
  /**
   * Whether the chip can be dismissed (legacy prop - adds dismiss icon as endIcon)
   * @deprecated Use endIcon with IconX and onEndIconClick instead
   */
  dismissible?: boolean;
  
  /**
   * Callback fired when the chip is dismissed (legacy prop)
   * @deprecated Use onEndIconClick instead
   */
  onDismiss?: () => void;
  
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    className, 
    variant = "filled", 
    color = "default", 
    size = "medium", 
    startIcon,
    endIcon,
    onStartIconClick,
    onEndIconClick,
    dismissible = false,
    onDismiss,
    asChild = false, 
    children, 
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "div";
    
    // Handle backward compatibility - if dismissible is true, set endIcon to IconX
    const finalEndIcon = dismissible ? <IconX className="h-[16.67px] w-[16.67px]" /> : endIcon;
    const finalOnEndIconClick = dismissible ? onDismiss : onEndIconClick;
    
    const handleStartIconClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onStartIconClick?.();
    };
    
    const handleEndIconClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      finalOnEndIconClick?.();
    };

    return (
      <Comp
        className={cn(chipVariants({ variant, color, size, className }))}
        ref={ref}
        role="button"
        tabIndex={0}
        {...props}
      >
        {startIcon && (
          <button
            className={cn(chipActionVariants({ size, position: "start" }))}
            onClick={handleStartIconClick}
            type="button"
            aria-label="Start action"
          >
            {React.isValidElement(startIcon) 
              ? React.cloneElement(startIcon as React.ReactElement, {
                  className: "h-[16.67px] w-[16.67px]"
                })
              : startIcon
            }
          </button>
        )}
        
        <span className={cn(chipLabelVariants({ size }))}>
          {children}
        </span>
        
        {finalEndIcon && (
          <button
            className={cn(chipActionVariants({ size, position: "end" }))}
            onClick={handleEndIconClick}
            type="button"
            aria-label={dismissible ? "Remove" : "End action"}
          >
            {React.isValidElement(finalEndIcon) 
              ? React.cloneElement(finalEndIcon as React.ReactElement, {
                  className: "h-[16.67px] w-[16.67px]"
                })
              : finalEndIcon
            }
          </button>
        )}
      </Comp>
    );
  }
);

Chip.displayName = "Chip";

export { Chip, chipVariants };
