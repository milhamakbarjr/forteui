import React, { useState } from "react";
import { 
  Stepper, 
  Text,
  Button,
  IconUser,
  IconSettings,
  IconCheck,
  IconCreditCard,
  IconShoppingCart,
  IconPackage,
  IconTruck,
  IconStar
} from 'forteui-core';

// Shared showcase components
interface ShowcaseSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ title, description, children }) => (
  <section className="space-y-6">
    <div>
      <Text variant="h2" className="text-xl font-semibold mb-2">{title}</Text>
      <Text variant="body" color="secondary" className="mb-4">{description}</Text>
    </div>
    {children}
  </section>
);

interface ShowcaseGroupProps {
  title: string;
  children: React.ReactNode;
}

const ShowcaseGroup: React.FC<ShowcaseGroupProps> = ({ title, children }) => (
  <div>
    <Text variant="caption" color="secondary" className="mb-3 block">{title}</Text>
    {children}
  </div>
);

interface ShowcaseVariantProps {
  title: string;
  children: React.ReactNode;
  layout?: 'horizontal' | 'vertical';
}

const ShowcaseVariant: React.FC<ShowcaseVariantProps> = ({ title, children, layout = 'vertical' }) => (
  <div className={layout === 'horizontal' ? 'space-y-3' : 'space-y-4'}>
    <Text variant="body-sm" className="font-medium text-gray-700">{title}</Text>
    <div className={layout === 'horizontal' ? 'flex flex-wrap items-center gap-4' : 'space-y-4'}>
      {children}
    </div>
  </div>
);

interface SpecificationBoxProps {
  children: React.ReactNode;
  title?: string;
}

const SpecificationBox: React.FC<SpecificationBoxProps> = ({ children, title = "Design Specifications" }) => (
  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
    <Text variant="body" className="font-semibold mb-4 block">{title}</Text>
    {children}
  </div>
);

interface SpecListProps {
  items: string[];
  title?: string;
}

const SpecList: React.FC<SpecListProps> = ({ items, title }) => (
  <div>
    {title && <Text variant="body-sm" className="font-medium mb-2 block">{title}</Text>}
    <ul className="text-sm text-gray-600 space-y-1">
      {items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);

// Interactive demo component
const InteractiveStepperDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [variant, setVariant] = useState<'number' | 'dot' | 'icon'>('number');
  
  const steps = [
    { label: 'Account Setup', icon: <IconUser size={20} /> },
    { label: 'Profile Info', icon: <IconSettings size={20} /> },
    { label: 'Payment', icon: <IconCreditCard size={20} /> },
    { label: 'Confirmation', icon: <IconCheck size={20} /> }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="space-y-6">
      {/* Variant Controls */}
      <div className="flex flex-wrap gap-3">
        <Text variant="body-sm" className="font-medium mr-3">Variant:</Text>
        <button
          onClick={() => setVariant('number')}
          className={`px-3 py-1 rounded text-sm border ${
            variant === 'number' 
              ? 'bg-primary-main text-white border-primary-main' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          Number
        </button>
        <button
          onClick={() => setVariant('dot')}
          className={`px-3 py-1 rounded text-sm border ${
            variant === 'dot' 
              ? 'bg-primary-main text-white border-primary-main' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          Dot
        </button>
        <button
          onClick={() => setVariant('icon')}
          className={`px-3 py-1 rounded text-sm border ${
            variant === 'icon' 
              ? 'bg-primary-main text-white border-primary-main' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          Icon
        </button>
      </div>

      {/* Interactive Stepper */}
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <Stepper
          steps={steps}
          variant={variant}
          currentStep={currentStep}
          onStepClick={handleStepClick}
          className="mb-6"
        />
        
        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={handlePrev}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          <Text variant="body-sm" color="secondary">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].label}
          </Text>
          
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export function StepperShowcase() {
  return (
    <ShowcaseSection
      title="Stepper Component"
      description="Step-by-step navigation component with three visual variants and interactive features. Supports horizontal/vertical orientations with accessible design."
    >
      {/* Basic Variants */}
      <ShowcaseGroup title="Basic Variants - All Visual Styles">
        <ShowcaseVariant title="Number Variant (24px circles)">
          <Stepper
            steps={[
              { label: 'Setup' },
              { label: 'Configure' },
              { label: 'Deploy' },
              { label: 'Complete' }
            ]}
            variant="number"
            currentStep={1}
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="Dot Variant (8px circles)">
          <Stepper
            steps={[
              { label: 'Planning' },
              { label: 'Development' },
              { label: 'Testing' },
              { label: 'Release' }
            ]}
            variant="dot"
            currentStep={2}
          />
        </ShowcaseVariant>

        <ShowcaseVariant title="Icon Variant (48px circles)">
          <Stepper
            steps={[
              { label: 'Profile', icon: <IconUser size={24} /> },
              { label: 'Settings', icon: <IconSettings size={24} /> },
              { label: 'Payment', icon: <IconCreditCard size={24} /> },
              { label: 'Review', icon: <IconCheck size={24} /> }
            ]}
            variant="icon"
            currentStep={1}
          />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Step States */}
      <ShowcaseGroup title="Step States - Incomplete, Active, Completed">
        <ShowcaseVariant title="All States (Number Variant)">
          <div className="space-y-6">
            <div>
              <Text variant="body-sm" className="mb-2 text-gray-600">Incomplete → Active → Completed States:</Text>
              <Stepper
                steps={[
                  { label: 'Step 1' },
                  { label: 'Step 2' },
                  { label: 'Step 3' },
                  { label: 'Step 4' },
                  { label: 'Step 5' }
                ]}
                variant="number"
                currentStep={2}
              />
            </div>
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="All States (Icon Variant)">
          <Stepper
            steps={[
              { label: 'Order', icon: <IconShoppingCart size={24} /> },
              { label: 'Package', icon: <IconPackage size={24} /> },
              { label: 'Ship', icon: <IconTruck size={24} /> },
              { label: 'Deliver', icon: <IconStar size={24} /> }
            ]}
            variant="icon"
            currentStep={2}
          />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Vertical Orientation */}
      <ShowcaseGroup title="Vertical Orientation">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ShowcaseVariant title="Number Vertical">
            <Stepper
              steps={[
                { label: 'Account' },
                { label: 'Profile' },
                { label: 'Verification' },
                { label: 'Complete' }
              ]}
              variant="number"
              currentStep={1}
              orientation="vertical"
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Dot Vertical">
            <Stepper
              steps={[
                { label: 'Initialize' },
                { label: 'Process' },
                { label: 'Validate' },
                { label: 'Finalize' }
              ]}
              variant="dot"
              currentStep={2}
              orientation="vertical"
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Icon Vertical">
            <Stepper
              steps={[
                { label: 'User Info', icon: <IconUser size={24} /> },
                { label: 'Settings', icon: <IconSettings size={24} /> },
                { label: 'Payment', icon: <IconCreditCard size={24} /> },
                { label: 'Done', icon: <IconCheck size={24} /> }
              ]}
              variant="icon"
              currentStep={1}
              orientation="vertical"
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Interactive Examples */}
      <ShowcaseGroup title="Interactive Stepper - Click to Navigate">
        <InteractiveStepperDemo />
      </ShowcaseGroup>

      {/* Real-world Examples */}
      <ShowcaseGroup title="Real-world Examples">
        <ShowcaseVariant title="E-commerce Checkout Flow">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Stepper
              steps={[
                { label: 'Cart Review', icon: <IconShoppingCart size={24} /> },
                { label: 'Shipping Info', icon: <IconTruck size={24} /> },
                { label: 'Payment', icon: <IconCreditCard size={24} /> },
                { label: 'Order Complete', icon: <IconCheck size={24} /> }
              ]}
              variant="icon"
              currentStep={1}
            />
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Account Setup Process">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Stepper
              steps={[
                { label: 'Personal Info' },
                { label: 'Email Verification' },
                { label: 'Security Setup' },
                { label: 'Profile Complete' }
              ]}
              variant="number"
              currentStep={2}
            />
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Simple Progress Tracking">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Stepper
              steps={[
                { label: 'Start' },
                { label: 'In Progress' },
                { label: 'Review' },
                { label: 'Complete' }
              ]}
              variant="dot"
              currentStep={1}
            />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Design Specifications */}
      <SpecificationBox title="Stepper Design Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Visual Variants"
            items={[
              "Number: 24px circles with step numbers/checkmarks",
              "Dot: 8px circles for minimal design",
              "Icon: 48px circles for custom icons",
              "All variants support completed state with IconCheck",
              "Connector lines: 2px primary (completed), 1px grey (incomplete)"
            ]}
          />
          <SpecList 
            title="Step States"
            items={[
              "Incomplete: Grey styling (#E1E5EA background/border)",
              "Active: Primary styling (#0690F4 background/border)",
              "Completed: Primary with IconCheck overlay",
              "Smooth transitions between states (200ms duration)",
              "Color-coded connection lines between steps"
            ]}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <SpecList 
            title="Design Tokens Used"
            items={[
              "Primary: #0690F4 (primary-main)",
              "Grey: #E1E5EA (grey-300), #6B7380 (grey-600)",
              "Text: #1F2933 (text-primary), #6B7380 (grey-500)",
              "Typography: Plus Jakarta Sans, 14px labels",
              "Border Radius: Full rounded circles (border-radius: 9999px)"
            ]}
          />
          <SpecList 
            title="Accessibility Features"
            items={[
              "ARIA progressbar role with value tracking",
              "Keyboard navigation support (Enter/Space)",
              "Screen reader friendly step announcements",
              "Focus management for clickable steps",
              "Semantic labeling: 'Step X of Y: Label'",
              "Proper ARIA attributes for assistive technology"
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <SpecList 
            title="Layout Options"
            items={[
              "Horizontal: Default row layout",
              "Vertical: Column layout for sidebar navigation",
              "Responsive: Adapts to container width",
              "Flexible spacing with connector lines"
            ]}
          />
          <SpecList 
            title="Interactive Features"
            items={[
              "Optional click navigation (onStepClick)",
              "Controlled current step state",
              "Custom icons for each step",
              "Hover states for clickable steps"
            ]}
          />
          <SpecList 
            title="Technical Details"
            items={[
              "React.forwardRef for component composition",
              "TypeScript interfaces with VariantProps",
              "CVA (class-variance-authority) for styling",
              "Tabler Icons integration (IconCheck)"
            ]}
          />
        </div>
      </SpecificationBox>
    </ShowcaseSection>
  );
}
