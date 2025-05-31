import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const containerVariants = cva(
  "w-full mx-auto px-4",
  {
    variants: {
      size: {
        sm: "max-w-lg",
        md: "max-w-3xl", 
        lg: "max-w-5xl",
        xl: "max-w-7xl",
        full: "max-w-full",
      },
      padding: {
        none: "px-0",
        sm: "px-4",
        md: "px-6",
        lg: "px-8",
      },
    },
    defaultVariants: {
      size: "lg",
      padding: "md",
    },
  }
);

export interface ContainerProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        className={cn(containerVariants({ size, padding }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container, containerVariants };
