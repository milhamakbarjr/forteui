import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const stackVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse",
      },
      spacing: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2", 
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
        "2xl": "gap-12",
        "3xl": "gap-16",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      },
      justify: {
        start: "justify-start",
        center: "justify-center", 
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
      wrap: {
        nowrap: "flex-nowrap",
        wrap: "flex-wrap",
        "wrap-reverse": "flex-wrap-reverse",
      },
    },
    defaultVariants: {
      direction: "column",
      spacing: "md",
      align: "stretch",
      justify: "start",
      wrap: "nowrap",
    },
  }
);

export interface StackProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  as?: React.ElementType;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, spacing, align, justify, wrap, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        className={cn(stackVariants({ direction, spacing, align, justify, wrap }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";

export { Stack, stackVariants };
