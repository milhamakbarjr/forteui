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
    </ShowcaseSection>
  );
}
