import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2",
  {
    variants: {
      variant: {
        // Contained button variants (6 colors from Figma)
        default: "bg-grey-800 text-white hover:bg-grey-900 focus-visible:ring-grey-800",
        primary: "bg-primary-main text-white hover:bg-primary-dark focus-visible:ring-primary-main",
        info: "bg-info-main text-white hover:bg-info-dark focus-visible:ring-info-main",
        success: "bg-success-main text-white hover:bg-success-dark focus-visible:ring-success-main",
        warning: "bg-warning-main text-grey-800 hover:bg-warning-dark hover:text-grey-900 focus-visible:ring-warning-main",
        error: "bg-error-main text-white hover:bg-error-dark focus-visible:ring-error-main",
        
        // Secondary button using your secondary color
        secondary: "bg-secondary-main text-white hover:bg-secondary-dark focus-visible:ring-secondary-main",
        
        // Outline variants
        outline: "border border-primary-main text-primary-main hover:bg-primary-main hover:text-white focus-visible:ring-primary-main",
        "outline-secondary": "border border-secondary-main text-secondary-main hover:bg-secondary-main hover:text-white focus-visible:ring-secondary-main",
        
        // Ghost variants
        ghost: "text-primary-main hover:bg-primary-8 focus-visible:ring-primary-main",
        "ghost-secondary": "text-secondary-main hover:bg-secondary-8 focus-visible:ring-secondary-main",
        
        // Destructive (alias for error)
        destructive: "bg-error-main text-white hover:bg-error-dark focus-visible:ring-error-main",
        
        // Link style
        link: "text-primary-main underline-offset-4 hover:underline focus-visible:ring-primary-main",
      },
      size: {
        sm: "h-[30px] px-2 text-[13px] min-w-16",     // Small: 30px height (Figma spec)
        md: "h-9 px-3 text-sm min-w-16",              // Medium: 36px height (Figma spec)
        lg: "h-12 px-4 text-[15px] min-w-16",         // Large: 48px height (Figma spec)
        icon: "h-12 w-12",                            // Square icon button
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
