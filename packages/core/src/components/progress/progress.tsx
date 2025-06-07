import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Progress container variants
const progressVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        linear: "flex items-center gap-2 w-full",
        circular: "flex items-center justify-center",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      // Circular size variants
      {
        variant: "circular",
        size: "sm",
        class: "w-8 h-8",
      },
      {
        variant: "circular", 
        size: "md",
        class: "w-11 h-11", // 44px as per Figma
      },
      {
        variant: "circular",
        size: "lg", 
        class: "w-14 h-14", // 56px
      },
    ],
    defaultVariants: {
      variant: "linear",
      size: "md",
    },
  }
);

// Linear progress track variants (background)
const progressTrackVariants = cva(
  "relative overflow-hidden rounded-2xl", // 16px border-radius as per Figma
  {
    variants: {
      size: {
        sm: "h-2", // 8px height
        md: "h-1", // 4px height as per Figma
        lg: "h-1.5", // 6px height
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

// Linear progress bar variants (foreground)
const progressBarVariants = cva(
  "h-full rounded-2xl transition-all duration-300 ease-out",
  {
    variants: {
      color: {
        default: "bg-text-primary",
        primary: "bg-primary-main", 
        secondary: "bg-secondary-main",
        info: "bg-info-main",
        success: "bg-success-main",
        warning: "bg-warning-main",
        error: "bg-error-main",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

// Progress label variants
const progressLabelVariants = cva(
  "text-sm font-normal leading-[18px] font-sans", // 12px as per Figma, but using text-sm (14px) for better readability
  {
    variants: {
      variant: {
        linear: "text-grey-600 min-w-0 flex-shrink-0",
        circular: "text-text-primary text-xs font-normal", // Smaller for circular
      },
    },
    defaultVariants: {
      variant: "linear",
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  /**
   * The progress value (0-100)
   */
  value: number;
  
  /**
   * The color theme of the progress
   */
  color?: "default" | "primary" | "secondary" | "info" | "success" | "warning" | "error";
  
  /**
   * Whether to show the progress label (percentage)
   */
  showLabel?: boolean;
  
  /**
   * Custom label text (overrides percentage)
   */
  label?: string;
  
  /**
   * Size variant (affects circular size and linear height)
   */
  size?: "sm" | "md" | "lg";
  
  /**
   * ARIA label for accessibility
   */
  "aria-label"?: string;
  
  /**
   * ARIA description for accessibility
   */
  "aria-describedby"?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({
    className,
    variant = "linear",
    value,
    color = "default", 
    size = "md",
    showLabel = true,
    label,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    ...props
  }, ref) => {
    // Clamp value between 0 and 100
    const clampedValue = Math.min(Math.max(value, 0), 100);
    const displayLabel = label || `${Math.round(clampedValue)}%`;
    
    // Generate unique ID for accessibility
    const progressId = React.useId();

    if (variant === "circular") {
      return (
        <div
          ref={ref}
          className={cn(progressVariants({ variant, size }), className)}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={ariaLabel || `Progress: ${displayLabel}`}
          aria-describedby={ariaDescribedBy}
          {...props}
        >
          <CircularProgress
            value={clampedValue}
            color={color}
            size={size}
            showLabel={showLabel}
            label={displayLabel}
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(progressVariants({ variant, size }), className)}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel || `Progress: ${displayLabel}`}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {/* Linear progress track and bar */}
        <div className={cn(progressTrackVariants({ size }), "flex-1")}>
          {/* Background track with 30% opacity as per Figma */}
          <div 
            className="absolute inset-0 bg-text-primary opacity-30"
            aria-hidden="true"
          />
          {/* Progress bar */}
          <div
            className={cn(progressBarVariants({ color }))}
            style={{ width: `${clampedValue}%` }}
            aria-hidden="true"
          />
        </div>
        
        {/* Progress label */}
        {showLabel && (
          <span 
            className={cn(progressLabelVariants({ variant }))}
            id={progressId}
            aria-live="polite"
          >
            {displayLabel}
          </span>
        )}
      </div>
    );
  }
);

// Circular Progress subcomponent
interface CircularProgressProps {
  value: number;
  color: NonNullable<ProgressProps["color"]>;
  size: NonNullable<ProgressProps["size"]>;
  showLabel: boolean;
  label: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  color,
  size,
  showLabel,
  label,
}) => {
  // Size mapping for SVG dimensions
  const sizeMap = {
    sm: { size: 32, strokeWidth: 3 }, // 32px
    md: { size: 44, strokeWidth: 4 }, // 44px as per Figma
    lg: { size: 56, strokeWidth: 5 }, // 56px
  };
  
  const { size: svgSize, strokeWidth } = sizeMap[size];
  const radius = (svgSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  // Color mapping for circular progress
  const colorMap = {
    default: "#1F2933", // text-primary
    primary: "#0690F4",   // primary-main
    secondary: "#9138FF", // secondary-main  
    info: "#00BEE0",      // info-main
    success: "#22B954",   // success-main
    warning: "#FFAD05",   // warning-main
    error: "#FF5833",     // error-main
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={svgSize}
        height={svgSize}
        className="transform -rotate-90"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          stroke="#1F2933"
          strokeWidth={strokeWidth}
          fill="none"
          opacity={0.12} // Light background similar to linear
        />
        {/* Progress circle */}
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          stroke={colorMap[color]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>
      
      {/* Center label */}
      {showLabel && (
        <span className={cn(progressLabelVariants({ variant: "circular" }), "absolute")}>
          {label}
        </span>
      )}
    </div>
  );
};

Progress.displayName = "Progress";

export { Progress, progressVariants, progressTrackVariants, progressBarVariants };
