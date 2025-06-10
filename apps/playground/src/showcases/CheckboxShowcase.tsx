import {
  Checkbox,
  Text
} from 'forteui-core';
import { useState } from 'react';

import {
  ShowcaseSection,
  ShowcaseGroup,
  ShowcaseVariant,
  SpecificationBox,
  SpecList
} from '../components';

export function CheckboxShowcase() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions(prev => [...prev, option]);
    } else {
      setSelectedOptions(prev => prev.filter(item => item !== option));
    }
  };

  const options = [
    { id: 'newsletter', label: 'Subscribe to newsletter', variant: 'primary' as const },
    { id: 'updates', label: 'Receive product updates', variant: 'info' as const },
    { id: 'marketing', label: 'Marketing communications', variant: 'success' as const },
    { id: 'analytics', label: 'Analytics and performance', variant: 'warning' as const }
  ];

  return (
    <ShowcaseSection
      title="Checkbox Component"
      description="Checkbox component with multiple states, variants, and sizes following Figma specifications."
    >
      {/* Basic Checkboxes */}
      <ShowcaseGroup title="Basic Checkbox">
        <ShowcaseVariant title="States" layout="vertical">
          <Checkbox label="Default checkbox" />
          <Checkbox label="Checked by default" checked />
          <Checkbox label="Disabled checkbox" disabled />
          <Checkbox label="Disabled and checked" checked disabled />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Checkbox Sizes */}
      <ShowcaseGroup title="Checkbox Sizes">
        <ShowcaseVariant title="Size Options" layout="horizontal">
          <div className="space-y-2">
            <Text variant="body-sm" className="font-medium">Small (20px)</Text>
            <Checkbox size="sm" label="Small checkbox" />
          </div>
          <div className="space-y-2">
            <Text variant="body-sm" className="font-medium">Medium (24px)</Text>
            <Checkbox size="md" label="Medium checkbox" />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Color Variants */}
      <ShowcaseGroup title="Checkbox Color Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Neutral & Brand Colors" layout="vertical">
            <Checkbox variant="default" label="Default variant" checked />
            <Checkbox variant="primary" label="Primary variant" checked />
            <Checkbox variant="secondary" label="Secondary variant" checked />
          </ShowcaseVariant>

          <ShowcaseVariant title="Semantic Colors" layout="vertical">
            <Checkbox variant="info" label="Info variant" checked />
            <Checkbox variant="success" label="Success variant" checked />
            <Checkbox variant="warning" label="Warning variant" checked />
            <Checkbox variant="error" label="Error variant" checked />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Interactive Examples */}
      <ShowcaseGroup title="Interactive Examples">
        <ShowcaseVariant title="Single Checkbox with State" layout="vertical">
          <div className="space-y-3">
            <Checkbox 
              checked={isChecked}
              onCheckedChange={setIsChecked}
              label="I agree to the terms and conditions"
              variant="primary"
            />
            <Text variant="body-sm" color="secondary">
              Status: {isChecked ? 'Agreed' : 'Not agreed'}
            </Text>
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Checkbox Group with Multiple Selection" layout="vertical">
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium">Select your preferences:</Text>
            <div className="space-y-3">
              {options.map(option => (
                <Checkbox
                  key={option.id}
                  label={option.label}
                  variant={option.variant}
                  checked={selectedOptions.includes(option.id)}
                  onCheckedChange={(checked: boolean) => handleOptionChange(option.id, checked)}
                />
              ))}
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="font-medium">Selected options:</Text>
              <Text variant="body-sm" color="secondary">
                {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'None selected'}
              </Text>
            </div>
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Custom Styling */}
      <ShowcaseGroup title="Custom Styling">
        <ShowcaseVariant title="Style Customization" layout="horizontal">
          <Checkbox 
            label="Custom label styling" 
            labelClassName="text-purple-600 font-semibold"
            variant="primary"
          />
          <Checkbox 
            label="Custom checkbox styling" 
            className="border-2 border-purple-300 rounded-lg"
            variant="secondary"
          />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Design Specifications */}
      <SpecificationBox variant="design-tokens" title="Checkbox Design Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Sizes" 
            items={[
              "Small: 20px × 20px",
              "Medium: 24px × 24px (default)",
              "Checkbox icon scales with container size",
              "Label maintains consistent text size"
            ]}
          />
          <SpecList 
            title="Interaction States" 
            items={[
              "Unchecked: Border outline with semantic color",
              "Checked: Filled background with check icon",
              "Hover: 8% opacity background with color",
              "Focus: Ring outline for keyboard navigation",
              "Disabled: 40% opacity, no interaction"
            ]}
          />
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Color Variants" 
            items={[
              "Default: Action color (#657686)",
              "Primary: Brand primary (#0690F4)",
              "Secondary: Brand secondary (#9138FF)",
              "Info: Info semantic (#00BEE0)",
              "Success: Success semantic (#22B954)",
              "Warning: Warning semantic (#FFAD05)",
              "Error: Error semantic (#FF5833)"
            ]}
          />
          <SpecList 
            title="Accessibility Features" 
            items={[
              "Proper ARIA role attributes",
              "Keyboard navigation support",
              "Focus visible state for keyboard users",
              "Screen reader announcements",
              "Label association with input",
              "Sufficient color contrast ratio"
            ]}
          />
        </div>
      </SpecificationBox>
    </ShowcaseSection>
  );
}
