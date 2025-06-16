'use client';

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Switch root variants using Figma design specifications
const switchVariants = cva(
  // Base styles: rounded track with flex layout to position thumb consistently
  [
    "peer relative inline-flex shrink-0 cursor-pointer items-center justify-start rounded-full border-2 border-transparent",
    "transition-colors duration-200 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-main focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    "disabled:cursor-not-allowed disabled:opacity-48"
  ],
  {
    variants: {
      size: {
        small: "h-[16px] w-[25px]", // 25px width, 16px height
        medium: "h-[20px] w-[33px]", // 33px width, 20px height
      },
      color: {
        default: [
          // Unchecked: grey background, Checked: grey-800 background
          "data-[state=unchecked]:bg-grey-48",
          "data-[state=checked]:bg-grey-800",
        ],
        primary: [
          // Unchecked: grey background, Checked: primary background
          "data-[state=unchecked]:bg-grey-48", 
          "data-[state=checked]:bg-primary-main",
        ],
        secondary: [
          "data-[state=unchecked]:bg-grey-48",
          "data-[state=checked]:bg-secondary-main",
        ],
        info: [
          "data-[state=unchecked]:bg-grey-48",
          "data-[state=checked]:bg-info-main",
        ],
        success: [
          "data-[state=unchecked]:bg-grey-48",
          "data-[state=checked]:bg-success-main",
        ],
        warning: [
          "data-[state=unchecked]:bg-grey-48",
          "data-[state=checked]:bg-warning-main",
        ],
        error: [
          "data-[state=unchecked]:bg-grey-48",
          "data-[state=checked]:bg-error-main",
        ],
      },
    },
    defaultVariants: {
      size: "medium",
      color: "primary",
    },
  }
);

// Switch thumb variants
const switchThumbVariants = cva(
  [
    "pointer-events-none absolute rounded-full bg-white shadow-sm ring-0",
    "transition-all duration-200 ease-in-out",
    "top-[50%] -translate-y-[50%]", // Center vertically
  ],
  {
    variants: {
      size: {
        small: [
          "h-[10px] w-[10px]", // 10px thumb
          "data-[state=unchecked]:left-[3px]", // 3px from left edge when unchecked
          "data-[state=checked]:right-[3px]", // 3px from right edge when checked
        ],
        medium: [
          "h-[14px] w-[14px]", // 14px thumb
          "data-[state=unchecked]:left-[3px]", // 3px from left edge when unchecked
          "data-[state=checked]:right-[3px]", // 3px from right edge when checked
        ],
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

// Switch label variants
const switchLabelVariants = cva(
  [
    "font-jakarta text-sm font-normal leading-[22px]",
    "transition-colors duration-200",
  ],
  {
    variants: {
      disabled: {
        false: "text-text-primary",
        true: "text-grey-500", // Disabled text color from Figma
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

// Container variants for proper spacing
const switchContainerVariants = cva(
  "inline-flex items-center",
  {
    variants: {
      size: {
        small: "gap-[7px] h-[24px]", // 7px gap, 24px height for small from Figma
        medium: "gap-[9px] h-[38px]", // 9px gap, 38px height for medium from Figma
      },
      labelPosition: {
        left: "flex-row-reverse",
        right: "flex-row",
      },
    },
    defaultVariants: {
      size: "medium",
      labelPosition: "right",
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  /**
   * The size of the switch
   * @default "medium"
   */
  size?: "small" | "medium";
  /**
   * The semantic color variant of the switch
   * @default "primary"
   */
  color?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
  /**
   * Label text to display next to the switch
   */
  label?: string;
  /**
   * Position of the label relative to the switch
   * @default "right"
   */
  labelPosition?: "left" | "right";
  /**
   * Additional CSS classes for the container
   */
  containerClassName?: string;
  /**
   * Additional CSS classes for the label
   */
  labelClassName?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ 
  className, 
  size = "medium", 
  color = "primary", 
  label, 
  labelPosition = "right",
  disabled,
  containerClassName,
  labelClassName,
  id,
  ...props 
}, ref) => {
  const switchId = id || React.useId();
  
  // Create hover overlay styles based on color and state
  const getHoverStyles = () => {
    if (disabled) return "";
    
    const hoverClasses = [
      "before:absolute before:inset-0 before:rounded-full before:transition-opacity before:duration-200",
      "before:opacity-0 hover:before:opacity-100",
      "before:pointer-events-none",
    ];
    
    // Add color-specific hover overlay
    switch (color) {
      case "primary":
        hoverClasses.push("hover:before:bg-primary-8");
        break;
      case "secondary": 
        hoverClasses.push("hover:before:bg-secondary-8");
        break;
      case "info":
        hoverClasses.push("hover:before:bg-info-8");
        break;
      case "success":
        hoverClasses.push("hover:before:bg-success-8");
        break;
      case "warning":
        hoverClasses.push("hover:before:bg-warning-8");
        break;
      case "error":
        hoverClasses.push("hover:before:bg-error-8");
        break;
      default:
        hoverClasses.push("hover:before:bg-grey-8");
    }
    
    return hoverClasses.join(" ");
  };

  const switchElement = (
    <SwitchPrimitives.Root
      className={cn(
        switchVariants({ size, color }),
        "relative", // For hover overlay positioning
        getHoverStyles(),
        className
      )}
      disabled={disabled}
      id={switchId}
      ref={ref}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(switchThumbVariants({ size }))}
      />
    </SwitchPrimitives.Root>
  );

  // If no label, return just the switch
  if (!label) {
    return switchElement;
  }

  // Return switch with label in container
  return (
    <div className={cn(switchContainerVariants({ size, labelPosition }), containerClassName)}>
      {switchElement}
      <label 
        htmlFor={switchId}
        className={cn(
          switchLabelVariants({ disabled: !!disabled }),
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
});

Switch.displayName = "Switch";

export { Switch, switchVariants, switchThumbVariants, switchLabelVariants };
