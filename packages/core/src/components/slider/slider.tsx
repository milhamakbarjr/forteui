'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Slider variants using design tokens - following Radix UI patterns
const sliderVariants = cva(
  "relative flex flex-col gap-2 w-full",
  {
    variants: {
      disabled: {
        true: "opacity-40 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const sliderTrackVariants = cva(
  "relative w-full touch-none select-none items-center cursor-pointer h-5 flex",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const sliderRailVariants = cva(
  "relative flex-1 rounded-full bg-grey-300 h-2.5"
);

const sliderRangeVariants = cva(
  "absolute h-full rounded-full bg-primary-main",
  {
    variants: {
      disabled: {
        true: "bg-grey-400",
        false: "bg-primary-main",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const sliderThumbVariants = cva(
  "absolute block w-5 h-5 rounded-full bg-white cursor-grab border-0 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 shadow-md hover:shadow-lg -translate-x-1/2 -translate-y-1/2 top-1/2",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed bg-grey-200 shadow-none",
        false: "",
      },
      dragging: {
        true: "cursor-grabbing scale-110 shadow-lg",
        false: "transition-all duration-150",
      },
    },
    defaultVariants: {
      disabled: false,
      dragging: false,
    },
  }
);

const sliderLabelVariants = cva(
  "text-sm font-medium text-grey-700",
  {
    variants: {
      disabled: {
        true: "text-grey-400",
        false: "text-grey-700",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const sliderValueVariants = cva(
  "text-sm font-medium text-grey-600",
  {
    variants: {
      disabled: {
        true: "text-grey-400",
        false: "text-grey-600",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

interface SliderProps extends VariantProps<typeof sliderVariants> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value,
      defaultValue,
      min = 0,
      max = 100,
      step = 1,
      label,
      showValue = false,
      disabled = false,
      className,
      onChange,
      onChangeEnd,
      ...props
    },
    ref
  ) => {
    // Internal state for controlled/uncontrolled behavior
    const [internalValue, setInternalValue] = React.useState<number>(() => {
      if (value !== undefined) return value;
      if (defaultValue !== undefined) return defaultValue;
      return min;
    });

    // Performance optimization refs
    const trackRef = React.useRef<HTMLDivElement>(null);
    const rangeRef = React.useRef<HTMLDivElement>(null);
    const thumbRef = React.useRef<HTMLDivElement>(null);
    const valueDisplayRef = React.useRef<HTMLSpanElement>(null);
    const draggingRef = React.useRef(false);
    const dragValueRef = React.useRef<number>(0);
    const [isDragging, setIsDragging] = React.useState(false);

    // Use controlled value if provided, otherwise use internal state
    const currentValue = value !== undefined ? value : internalValue;

    // Calculate percentage for positioning - memoized for performance
    const percentage = React.useMemo(() => {
      return ((currentValue - min) / (max - min)) * 100;
    }, [currentValue, min, max]);

    // Convert pointer position to value - memoized callback
    const getValueFromPosition = React.useCallback((clientX: number) => {
      if (!trackRef.current) return min;
      
      const rect = trackRef.current.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const rawValue = min + percentage * (max - min);
      
      // Snap to step
      const steppedValue = Math.round(rawValue / step) * step;
      return Math.max(min, Math.min(max, steppedValue));
    }, [min, max, step]);

    // Update value function (React state updates)
    const updateValue = React.useCallback((newValue: number) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    }, [value, onChange]);

    // Direct DOM update for smooth visual feedback during drag
    const updateVisualPosition = React.useCallback((newValue: number) => {
      const percentage = ((newValue - min) / (max - min)) * 100;
      
      // Update range fill width and thumb position together
      if (rangeRef.current) {
        rangeRef.current.style.width = `${percentage}%`;
      }
      
      if (thumbRef.current) {
        thumbRef.current.style.left = `${percentage}%`;
      }
      
      // Update value display during drag
      if (valueDisplayRef.current && showValue) {
        valueDisplayRef.current.textContent = String(Math.round(newValue));
      }
      
      // Store current drag value
      dragValueRef.current = newValue;
    }, [min, max, showValue]);

    // Handle pointer down - following Radix UI pointer event patterns
    const handlePointerDown = React.useCallback((event: React.PointerEvent) => {
      if (disabled) return;
      
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      draggingRef.current = true;
      
      const newValue = getValueFromPosition(event.clientX);
      dragValueRef.current = newValue;
      
      // Immediate visual update for responsiveness
      updateVisualPosition(newValue);
      
      // Also update React state for immediate feedback
      updateValue(newValue);
    }, [disabled, getValueFromPosition, updateVisualPosition, updateValue]);

    // High-performance pointer move handler with direct DOM updates
    React.useEffect(() => {
      if (!isDragging) return;
      
      let rafId: number;
      
      const handlePointerMove = (event: PointerEvent) => {
        if (!draggingRef.current) return;
        
        // Cancel previous frame if it hasn't executed yet
        if (rafId) cancelAnimationFrame(rafId);
        
        rafId = requestAnimationFrame(() => {
          if (!draggingRef.current) return;
          
          const newValue = getValueFromPosition(event.clientX);
          
          // Direct DOM update for immediate visual feedback
          updateVisualPosition(newValue);
          
          // Optional: Call onChange during drag for real-time updates
          onChange?.(newValue);
        });
      };
      
      const handlePointerUp = () => {
        if (rafId) cancelAnimationFrame(rafId);
        
        draggingRef.current = false;
        setIsDragging(false);
        
        // Final React state update when drag ends
        const finalValue = dragValueRef.current;
        updateValue(finalValue);
        onChangeEnd?.(finalValue);
      };
      
      // Use passive listeners for better scroll performance
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
      
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
      };
    }, [isDragging, getValueFromPosition, updateVisualPosition, updateValue, onChange, onChangeEnd]);

    // Keyboard support for accessibility - following WAI-ARIA patterns
    const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
      if (disabled) return;
      
      let newValue: number;
      
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          event.preventDefault();
          newValue = Math.min(max, currentValue + step);
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          event.preventDefault();
          newValue = Math.max(min, currentValue - step);
          break;
        case 'Home':
          event.preventDefault();
          newValue = min;
          break;
        case 'End':
          event.preventDefault();
          newValue = max;
          break;
        case 'PageUp':
          event.preventDefault();
          newValue = Math.min(max, currentValue + step * 10);
          break;
        case 'PageDown':
          event.preventDefault();
          newValue = Math.max(min, currentValue - step * 10);
          break;
        default:
          return;
      }
      
      updateValue(newValue);
      onChangeEnd?.(newValue);
    }, [disabled, currentValue, min, max, step, updateValue, onChangeEnd]);

    return (
      <div
        ref={ref}
        className={cn(sliderVariants({ disabled }), className)}
        {...props}
      >
        {/* Label */}
        {label && (
          <div className="flex justify-between items-center">
            <label className={cn(sliderLabelVariants({ disabled }))}>
              {label}
            </label>
            {showValue && (
              <span ref={valueDisplayRef} className={cn(sliderValueVariants({ disabled }))}>
                {currentValue}
              </span>
            )}
          </div>
        )}
        
        {/* Slider Track Container - Following Radix UI structure */}
        <div className="relative">
          {/* Track */}
          <div
            ref={trackRef}
            className={cn(sliderTrackVariants({ disabled }))}
            onPointerDown={handlePointerDown}
          >
            {/* Rail */}
            <div className={cn(sliderRailVariants())}>
              {/* Range - equivalent to Radix's Slider.Range */}
              <div
                ref={rangeRef}
                className={cn(sliderRangeVariants({ disabled }))}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
          
          {/* Thumb - equivalent to Radix's Slider.Thumb */}
          <div
            ref={thumbRef}
            className={cn(sliderThumbVariants({ disabled, dragging: isDragging }))}
            style={{ left: `${percentage}%` }}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            aria-disabled={disabled}
            aria-label={label || 'Slider'}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export { Slider, sliderVariants };
export type { SliderProps };
