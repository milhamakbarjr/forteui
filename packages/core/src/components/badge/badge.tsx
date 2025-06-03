import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

// Badge wrapper variants for container positioning
const badgeWrapperVariants = cva("inline-flex relative", {
  variants: {},
  defaultVariants: {},
});

// Badge positioning and styling variants
const badgeVariants = cva(
  "absolute flex items-center justify-center font-bold text-xs leading-none border-2 border-white",
  {
    variants: {
      variant: {
        default: "bg-gray-200 text-gray-900",
        primary: "bg-blue-500 text-white",
        secondary: "bg-purple-500 text-white", 
        info: "bg-cyan-500 text-white",
        success: "bg-green-500 text-white",
        warning: "bg-amber-500 text-gray-900",
        error: "bg-red-500 text-white",
      },
      type: {
        number: "h-5 min-w-5 px-1.5 rounded-full -top-2",
        dot: "w-2.5 h-2.5 rounded-full -top-1.5 -right-1.5",
      },
      position: {
        // Dynamic positioning for number badges based on content length
        single: "-right-3", // Single digit (1-9)
        double: "-right-4", // Double digit with + (99+)
        triple: "-right-6", // Triple digit with + (999+)
      },
    },
    defaultVariants: {
      variant: "default",
      type: "number",
      position: "single",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  count?: number;
  showZero?: boolean;
  max?: number;
  type?: "number" | "dot";
  variant?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    children, 
    count = 0, 
    showZero = false, 
    max = 99, 
    type = "number", 
    variant = "default", 
    ...props 
  }, ref) => {
    // Determine if badge should be shown
    const shouldShowBadge = type === "dot" || count > 0 || (count === 0 && showZero);

    // Format count for number badges
    const formatCount = (count: number, max: number): string => {
      if (count <= max) {
        return count.toString();
      }
      return `${max}+`;
    };

    // Determine position variant based on formatted count length
    const getPositionVariant = (formattedCount: string): "single" | "double" | "triple" => {
      if (formattedCount.length === 1) return "single";
      if (formattedCount.length <= 3) return "double"; // "99+" = 3 characters
      return "triple"; // "999+" = 4 characters
    };

    const formattedCount = formatCount(count, max);
    const position = getPositionVariant(formattedCount);

    if (!shouldShowBadge) {
      return (
        <div ref={ref} className={cn(badgeWrapperVariants(), className)} {...props}>
          {children}
        </div>
      );
    }

    return (
      <div ref={ref} className={cn(badgeWrapperVariants(), className)} {...props}>
        {children}
        <div className={cn(badgeVariants({ variant, type, position }))}>
          {type === "number" && formattedCount}
        </div>
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
