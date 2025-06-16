import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva(
  "font-sans tracking-tight", // Plus Jakarta Sans
  {
    variants: {
      level: {
        1: "text-5xl font-bold leading-tight",
        2: "text-4xl font-bold leading-tight", 
        3: "text-3xl font-semibold leading-tight",
        4: "text-2xl font-semibold leading-normal",
        5: "text-xl font-medium leading-normal",
        6: "text-lg font-medium leading-normal",
      },
      color: {
        "primary": "text-primary",
        "secondary": "text-secondary",
        "brand": "text-primary-main",
        "white": "text-white",
      },
    },
    defaultVariants: {
      level: 2,
      color: "primary",
    },
  }
);

export interface HeadingProps 
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children?: React.ReactNode;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, color, children, ...props }, ref) => {
    const Component = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    
    return (
      <Component
        className={cn(headingVariants({ level, color }), className)}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
