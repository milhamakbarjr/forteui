import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { IconCheck } from "@tabler/icons-react";

const stepperVariants = cva(
  "flex items-center w-full",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

const stepVariants = cva(
  "flex items-center",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

const stepIndicatorVariants = cva(
  "flex items-center justify-center transition-all duration-200 font-semibold",
  {
    variants: {
      variant: {
        number: "rounded-full border-2 text-sm font-bold",
        dot: "rounded-full",
        icon: "rounded-full border-2",
      },
      status: {
        incomplete: "",
        active: "",
        completed: "",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      // Number variant styling
      {
        variant: "number",
        status: "incomplete",
        class: "bg-white border-grey-300 text-grey-600 w-6 h-6",
      },
      {
        variant: "number",
        status: "active",
        class: "bg-primary-main border-primary-main text-white w-6 h-6",
      },
      {
        variant: "number",
        status: "completed",
        class: "bg-primary-main border-primary-main text-white w-6 h-6",
      },
      // Dot variant styling
      {
        variant: "dot",
        status: "incomplete",
        class: "bg-grey-300 w-2 h-2",
      },
      {
        variant: "dot",
        status: "active",
        class: "bg-primary-main w-2 h-2",
      },
      {
        variant: "dot",
        status: "completed",
        class: "bg-primary-main w-2 h-2",
      },
      // Icon variant styling
      {
        variant: "icon",
        status: "incomplete",
        class: "bg-white border-grey-300 text-grey-600 w-12 h-12",
      },
      {
        variant: "icon",
        status: "active",
        class: "bg-primary-main border-primary-main text-white w-12 h-12",
      },
      {
        variant: "icon",
        status: "completed",
        class: "bg-primary-main border-primary-main text-white w-12 h-12",
      },
    ],
    defaultVariants: {
      variant: "number",
      status: "incomplete",
      size: "md",
    },
  }
);

const stepLabelVariants = cva(
  "text-sm font-semibold leading-[22px] transition-colors duration-200",
  {
    variants: {
      status: {
        incomplete: "text-grey-500",
        active: "text-text-primary",
        completed: "text-text-primary",
      },
      variant: {
        number: "mt-2",
        dot: "mt-3",
        icon: "mt-3",
      },
    },
    defaultVariants: {
      status: "incomplete",
      variant: "number",
    },
  }
);

const connectorVariants = cva(
  "transition-all duration-200",
  {
    variants: {
      orientation: {
        horizontal: "flex-1 h-0.5 mx-4",
        vertical: "w-0.5 flex-1 my-4",
      },
      status: {
        completed: "bg-primary-main",
        incomplete: "bg-grey-300",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      status: "incomplete",
    },
  }
);

// Individual Step component
interface StepProps {
  label: string;
  index: number;
  status: 'incomplete' | 'active' | 'completed';
  variant: 'number' | 'dot' | 'icon';
  icon?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  onClick?: (index: number) => void;
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ label, index, status, variant, icon, orientation = "horizontal", onClick }, ref) => {
    const handleClick = () => {
      if (onClick) {
        onClick(index);
      }
    };

    const renderIndicatorContent = () => {
      // Dot variant should never show any content inside
      if (variant === 'dot') {
        return null;
      }
      
      if (variant === 'number') {
        return status === 'completed' ? 
          <IconCheck size={14} className="text-white" /> : 
          <span>{index + 1}</span>;
      }
      
      if (variant === 'icon' && icon) {
        return status === 'completed' ? 
          <IconCheck size={24} className="text-white" /> : 
          icon;
      }
      
      return null;
    };

    return (
      <div
        ref={ref}
        className={cn(
          stepVariants({ orientation }),
          orientation === 'horizontal' ? 'text-center' : 'items-center',
          onClick && 'cursor-pointer'
        )}
        onClick={handleClick}
        role="button"
        tabIndex={onClick ? 0 : -1}
        aria-label={`Step ${index + 1}: ${label}`}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onClick) {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <div className={orientation === 'horizontal' ? 'flex flex-col items-center' : 'flex items-center gap-3'}>
          {/* Step Indicator */}
          <div className={cn(stepIndicatorVariants({ variant, status }))}>
            {renderIndicatorContent()}
          </div>
          
          {/* Step Label */}
          <span className={cn(
            stepLabelVariants({ status, variant }),
            orientation === 'vertical' && 'mt-0'
          )}>
            {label}
          </span>
        </div>
      </div>
    );
  }
);

Step.displayName = "Step";

// Connector component
interface ConnectorProps {
  status: 'completed' | 'incomplete';
  orientation?: 'horizontal' | 'vertical';
}

const Connector = React.forwardRef<HTMLDivElement, ConnectorProps>(
  ({ status, orientation = "horizontal" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(connectorVariants({ orientation, status }))}
        aria-hidden="true"
      />
    );
  }
);

Connector.displayName = "Connector";

// Main Stepper component
export interface StepperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperVariants> {
  /**
   * Array of step configurations
   */
  steps: Array<{
    label: string;
    icon?: React.ReactNode;
  }>;
  /**
   * Visual variant of the stepper
   */
  variant?: 'number' | 'dot' | 'icon';
  /**
   * Current active step index (0-based)
   */
  currentStep: number;
  /**
   * Callback when a step is clicked (if provided, steps become clickable)
   */
  onStepClick?: (stepIndex: number) => void;
  /**
   * Layout orientation
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Additional CSS classes
   */
  className?: string;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ 
    steps, 
    variant = 'number', 
    currentStep, 
    onStepClick, 
    orientation = 'horizontal',
    className, 
    ...props 
  }, ref) => {
    
    const getStepStatus = (stepIndex: number): 'incomplete' | 'active' | 'completed' => {
      if (stepIndex < currentStep) return 'completed';
      if (stepIndex === currentStep) return 'active';
      return 'incomplete';
    };

    const getConnectorStatus = (stepIndex: number): 'completed' | 'incomplete' => {
      return stepIndex < currentStep ? 'completed' : 'incomplete';
    };

    return (
      <div
        ref={ref}
        className={cn(stepperVariants({ orientation }), className)}
        role="progressbar"
        aria-valuenow={currentStep + 1}
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-label={`Step ${currentStep + 1} of ${steps.length}`}
        {...props}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Step
              label={step.label}
              index={index}
              status={getStepStatus(index)}
              variant={variant}
              icon={step.icon}
              orientation={orientation}
              onClick={onStepClick}
            />
            
            {/* Connector (don't render after last step) */}
            {index < steps.length - 1 && (
              <Connector
                status={getConnectorStatus(index)}
                orientation={orientation}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
);

Stepper.displayName = "Stepper";

export { Stepper, stepperVariants, Step, Connector };
