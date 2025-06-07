import { Radio, RadioGroup, Text } from '@forte-ui/core';
import { useState } from 'react';

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

interface SpecificationBoxProps {
  children: React.ReactNode;
}

const SpecificationBox: React.FC<SpecificationBoxProps> = ({ children }) => (
  <div className="p-6 bg-gray-50 rounded-lg">
    {children}
  </div>
);

// Radio Group Example Component
function RadioGroupExample() {
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  
  return (
    <div className="space-y-4">
      <RadioGroup
        value={selectedOption}
        onValueChange={setSelectedOption}
        name="preferences"
        variant="primary"
      >
        <Radio value="option1" label="Enable notifications" />
        <Radio value="option2" label="Enable email updates" />
        <Radio value="option3" label="Enable SMS alerts" />
        <Radio value="option4" label="Disable all communications" />
      </RadioGroup>
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <Text variant="body-sm" className="font-medium">Selected option:</Text>
        <Text variant="body-sm" color="secondary">
          {selectedOption}
        </Text>
      </div>
    </div>
  );
}

// Semantic Radio Group Example Component
function SemanticRadioGroupExample() {
  const [selectedPriority, setSelectedPriority] = useState<string>('medium');
  
  const priorityOptions = [
    { value: 'low', label: 'Low Priority', variant: 'info' as const },
    { value: 'medium', label: 'Medium Priority', variant: 'warning' as const },
    { value: 'high', label: 'High Priority', variant: 'error' as const },
    { value: 'critical', label: 'Critical Priority', variant: 'error' as const }
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {priorityOptions.map(option => (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            variant={option.variant}
            name="priority"
            checked={selectedPriority === option.value}
            onCheckedChange={() => setSelectedPriority(option.value)}
          />
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <Text variant="body-sm" className="font-medium">Selected priority:</Text>
        <Text variant="body-sm" color="secondary">
          {priorityOptions.find(opt => opt.value === selectedPriority)?.label || 'None'}
        </Text>
      </div>
    </div>
  );
}

export const RadioShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Radio Component"
      description="Radio button component for single-choice selections with multiple variants, semantic colors, and interactive states."
    >
      <div className="space-y-8">
        {/* Default vs Semantic Colors */}
        <ShowcaseGroup title="Color Variants - Default vs Semantic Colors">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-6">
              <Radio variant="default" label="Default" name="colors" value="default" />
              <Radio variant="primary" label="Primary" name="colors" value="primary" />
              <Radio variant="secondary" label="Secondary" name="colors" value="secondary" />
              <Radio variant="info" label="Info" name="colors" value="info" />
              <Radio variant="success" label="Success" name="colors" value="success" />
              <Radio variant="warning" label="Warning" name="colors" value="warning" />
              <Radio variant="error" label="Error" name="colors" value="error" />
            </div>
          </div>
        </ShowcaseGroup>

        {/* States Showcase */}
        <ShowcaseGroup title="Interactive States - Unchecked, Hovered, Disabled, Checked">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-6">
              <Radio variant="primary" label="Unchecked" name="states1" value="unchecked" />
              <Radio variant="primary" label="Checked" name="states2" value="checked" checked />
              <Radio variant="primary" label="Disabled Unchecked" name="states3" value="disabled-unchecked" disabled />
              <Radio variant="primary" label="Disabled Checked" name="states4" value="disabled-checked" checked disabled />
            </div>
          </div>
        </ShowcaseGroup>

        {/* Sizes Showcase */}
        <ShowcaseGroup title="Size Variants - Small (20px) and Medium (24px)">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-6">
              <Radio variant="primary" size="md" label="Medium (24px)" name="sizes1" value="medium" />
              <Radio variant="primary" size="sm" label="Small (20px)" name="sizes2" value="small" />
            </div>
          </div>
        </ShowcaseGroup>

        {/* Radio Group Example */}
        <ShowcaseGroup title="Radio Group Example - Single Selection">
          <RadioGroupExample />
        </ShowcaseGroup>

        {/* Semantic Colors Radio Group Example */}
        <ShowcaseGroup title="Semantic Colors Example - Priority Selection">
          <SemanticRadioGroupExample />
        </ShowcaseGroup>

        {/* Radio Component Specifications */}
        <SpecificationBox>
          <Text variant="body-sm" className="font-medium mb-3 block">Radio Component Specifications</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Color Variants:</Text>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Default: Action color (#657686)</li>
                <li>• Primary: Brand primary (#0690F4)</li>
                <li>• Secondary: Brand secondary (#9138FF)</li>
                <li>• Info: Info semantic (#00BEE0)</li>
                <li>• Success: Success semantic (#22B954)</li>
                <li>• Warning: Warning semantic (#FFAD05)</li>
                <li>• Error: Error semantic (#FF5833)</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Interactive States:</Text>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Unchecked: Default ring outline</li>
                <li>• Unchecked Hovered: 8% background</li>
                <li>• Disabled: Action-disabled color</li>
                <li>• Checked: Filled center with color</li>
                <li>• Checked Hovered: 8% background</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Features:</Text>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Two sizes: Small (20px), Medium (24px)</li>
                <li>• Radio groups for single selection</li>
                <li>• Native form integration</li>
                <li>• Accessibility compliant (ARIA)</li>
                <li>• Keyboard navigation support</li>
                <li>• Plus Jakarta Sans typography</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 grid gap-2 text-sm text-gray-600">
            <Text variant="body-sm" className="font-medium mb-2 block">Design Tokens Used:</Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div>• primary-main, primary-8</div>
              <div>• secondary-main, secondary-8</div>
              <div>• success-main, success-8</div>
              <div>• warning-main, warning-8</div>
              <div>• error-main, error-8</div>
              <div>• info-main, info-8</div>
              <div>• action-active, action-disabled</div>
              <div>• grey-8 (hover backgrounds)</div>
            </div>
          </div>
        </SpecificationBox>
      </div>
    </ShowcaseSection>
  );
};
