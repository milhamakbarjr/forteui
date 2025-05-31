import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary button using your brand primary color
        primary: "bg-primary-main text-white hover:bg-primary-dark focus-visible:ring-primary-main shadow-primary",
        
        // Secondary button using your secondary color
        secondary: "bg-secondary-main text-white hover:bg-secondary-dark focus-visible:ring-secondary-main shadow-secondary",
        
        // Outline variants
        outline: "border border-primary-main text-primary-main hover:bg-primary-main hover:text-white focus-visible:ring-primary-main",
        "outline-secondary": "border border-secondary-main text-secondary-main hover:bg-secondary-main hover:text-white focus-visible:ring-secondary-main",
        
        // Ghost variants
        ghost: "text-primary-main hover:bg-primary-8 focus-visible:ring-primary-main",
        "ghost-secondary": "text-secondary-main hover:bg-secondary-8 focus-visible:ring-secondary-main",
        
        // Destructive
        destructive: "bg-error-main text-white hover:bg-error-dark focus-visible:ring-error-main shadow-error",
        
        // Link style
        link: "text-primary-main underline-offset-4 hover:underline focus-visible:ring-primary-main",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
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
