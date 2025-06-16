import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva(
  "font-sans", // Plus Jakarta Sans
  {
    variants: {
      variant: {
        "display": "text-5xl font-bold leading-tight",
        "h1": "text-4xl font-bold leading-tight",
        "h2": "text-3xl font-semibold leading-tight", 
        "h3": "text-2xl font-semibold leading-normal",
        "h4": "text-xl font-medium leading-normal",
        "h5": "text-lg font-medium leading-normal",
        "h6": "text-base font-medium leading-normal",
        "body": "text-base font-normal leading-normal",
        "body-sm": "text-sm font-normal leading-normal",
        "caption": "text-xs font-normal leading-normal",
      },
      color: {
        "primary": "text-text-primary",
        "secondary": "text-text-secondary", 
        "disabled": "text-text-disabled",
        "brand": "text-primary-main",
        "white": "text-white",
      },
    },
    defaultVariants: {
      variant: "body",
      color: "primary",
    },
  }
);

export interface TextProps extends VariantProps<typeof textVariants> {
  className?: string;
  children?: React.ReactNode;
  as?: "span" | "p" | "div" | "label";
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, color, as: Component = "span", children, ...props }, ref) => {
    return (
      <Component
        className={cn(textVariants({ variant, color }), className)}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
