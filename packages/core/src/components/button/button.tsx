import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Contained button variants (6 colors from Figma)
        default: "bg-grey-800 text-white hover:bg-grey-900 focus-visible:ring-grey-800 disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        primary: "bg-primary-main text-white hover:bg-primary-dark focus-visible:ring-primary-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        info: "bg-info-main text-white hover:bg-info-dark focus-visible:ring-info-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        success: "bg-success-main text-white hover:bg-success-dark focus-visible:ring-success-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        warning: "bg-warning-main text-grey-800 hover:bg-warning-dark hover:text-grey-900 focus-visible:ring-warning-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 disabled:hover:text-action-disabled gap-2",
        error: "bg-error-main text-white hover:bg-error-dark focus-visible:ring-error-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        
        // Secondary button using your secondary color
        secondary: "bg-secondary-main text-white hover:bg-secondary-dark focus-visible:ring-secondary-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        
        // Outline variants (6 colors from Figma) - Using border for better compatibility
        "outline-default": "border border-grey-48 text-grey-700 hover:bg-grey-8 hover:border-grey-700 focus-visible:ring-grey-700 disabled:bg-transparent disabled:border-grey-20 disabled:text-action-disabled disabled:hover:bg-transparent disabled:hover:border-grey-20 gap-2",
        "outline-primary": "border border-primary-48 text-primary-main hover:bg-primary-8 hover:border-primary-main focus-visible:ring-primary-main disabled:bg-transparent disabled:border-grey-20 disabled:text-action-disabled disabled:hover:bg-transparent disabled:hover:border-grey-20 gap-2",
        "outline-info": "border border-info-48 text-info-main hover:bg-info-8 hover:border-info-main focus-visible:ring-info-main disabled:bg-transparent disabled:border-grey-20 disabled:text-action-disabled disabled:hover:bg-transparent disabled:hover:border-grey-20 gap-2",
        "outline-success": "border border-success-48 text-success-main hover:bg-success-8 hover:border-success-main focus-visible:ring-success-main disabled:bg-transparent disabled:border-grey-20 disabled:text-action-disabled disabled:hover:bg-transparent disabled:hover:border-grey-20 gap-2",
        "outline-warning": "border border-warning-48 text-warning-main hover:bg-warning-8 hover:border-warning-main focus-visible:ring-warning-main disabled:bg-transparent disabled:border-grey-20 disabled:text-action-disabled disabled:hover:bg-transparent disabled:hover:border-grey-20 gap-2",
        "outline-error": "border border-error-48 text-error-main hover:bg-error-8 hover:border-error-main focus-visible:ring-error-main disabled:bg-transparent disabled:border-grey-20 disabled:text-action-disabled disabled:hover:bg-transparent disabled:hover:border-grey-20 gap-2",
        
        // Text variants (6 colors from Figma)
        "text-default": "bg-transparent text-grey-700 hover:bg-grey-8 focus-visible:ring-grey-700 disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent gap-2",
        "text-primary": "bg-transparent text-primary-main hover:bg-primary-8 focus-visible:ring-primary-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent gap-2",
        "text-info": "bg-transparent text-info-main hover:bg-info-8 focus-visible:ring-info-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent gap-2",
        "text-success": "bg-transparent text-success-main hover:bg-success-8 focus-visible:ring-success-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent gap-2",
        "text-warning": "bg-transparent text-warning-main hover:bg-warning-8 focus-visible:ring-warning-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent gap-2",
        "text-error": "bg-transparent text-error-main hover:bg-error-8 focus-visible:ring-error-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent gap-2",
        
        // Soft variants (6 colors from Figma)
        "soft-default": "bg-grey-8 text-grey-800 hover:bg-grey-16 focus-visible:ring-grey-800 disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        "soft-primary": "bg-primary-8 text-primary-dark hover:bg-primary-16 focus-visible:ring-primary-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        "soft-info": "bg-info-8 text-info-dark hover:bg-info-16 focus-visible:ring-info-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        "soft-success": "bg-success-8 text-success-dark hover:bg-success-16 focus-visible:ring-success-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        "soft-warning": "bg-warning-8 text-warning-dark hover:bg-warning-16 focus-visible:ring-warning-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        "soft-error": "bg-error-8 text-error-dark hover:bg-error-16 focus-visible:ring-error-main disabled:bg-grey-20 disabled:text-action-disabled disabled:hover:bg-grey-20 gap-2",
        
        // Icon button variants (6 colors from Figma) - Circular buttons with 8% hover backgrounds
        "icon-default": "bg-transparent text-grey-700 hover:bg-grey-8 focus-visible:ring-grey-700 disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent rounded-full",
        "icon-primary": "bg-transparent text-primary-main hover:bg-primary-8 focus-visible:ring-primary-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent rounded-full",
        "icon-info": "bg-transparent text-info-main hover:bg-info-8 focus-visible:ring-info-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent rounded-full",
        "icon-success": "bg-transparent text-success-main hover:bg-success-8 focus-visible:ring-success-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent rounded-full",
        "icon-warning": "bg-transparent text-warning-main hover:bg-warning-8 focus-visible:ring-warning-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent rounded-full",
        "icon-error": "bg-transparent text-error-main hover:bg-error-8 focus-visible:ring-error-main disabled:bg-transparent disabled:text-action-disabled disabled:hover:bg-transparent rounded-full",
      },
      size: {
        sm: "h-[30px] px-2 text-[13px] min-w-16",     // Small: 30px height (Figma spec)
        md: "h-9 px-3 text-sm min-w-16",              // Medium: 36px height (Figma spec)
        lg: "h-12 px-4 text-[15px] min-w-16",         // Large: 48px height (Figma spec)
        icon: "h-12 w-12",                            // Square icon button (backward compatibility)
        
        // Icon button sizes (circular) - Based on Figma spec
        "icon-lg": "h-12 w-12 p-0",                   // 48px button, 32px icon
        "icon-md": "h-10 w-10 p-0",                   // 40px button, 24px icon
        "icon-sm": "h-9 w-9 p-0",                     // 36px button, 20px icon
        "icon-xs": "h-7 w-7 p-0",                     // 28px button, 18px icon
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
