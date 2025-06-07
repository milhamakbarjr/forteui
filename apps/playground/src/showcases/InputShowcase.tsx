import {
  Input,
  IconSearch,
  IconSettings,
  IconAlertTriangle,
  IconInfoCircle,
  IconMail,
  IconEye,
  IconEyeOff
} from '@forte-ui/core';

import {
  ShowcaseSection,
  ShowcaseGroup,
  ShowcaseVariant,
  SpecificationBox,
  SpecList
} from '../components';

export function InputShowcase() {
  return (
    <ShowcaseSection
      title="Input Component"
      description="Input component with multiple states, variants, sizes, and floating label behavior following Figma specifications."
    >
      {/* Input States */}
      <ShowcaseGroup title="Input States">
        <ShowcaseVariant title="Default Variant States" layout="vertical">
          <div>
            <Input placeholder="Placeholder text" label="Default (Empty)" />
          </div>
          <div>
            <Input label="With Value" defaultValue="Input value" />
          </div>
          <div>
            <Input label="Disabled" disabled />
          </div>
          <div>
            <Input 
              label="Error State" 
              variant="error" 
              defaultValue="Incorrect value" 
              helperText="Please enter a valid value"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Input Sizes */}
      <ShowcaseGroup title="Input Sizes">
        <ShowcaseVariant title="Size Comparison" layout="vertical">
          <div>
            <Input size="sm" label="Small Input" placeholder="Small (40px height)" />
          </div>
          <div>
            <Input size="md" label="Medium Input" placeholder="Medium (54px height)" />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Filled Variant */}
      <ShowcaseGroup title="Input Variants">
        <ShowcaseVariant title="Filled Variant" layout="vertical">
          <div>
            <Input variant="filled" label="Default State" placeholder="Background-based styling" />
          </div>
          <div>
            <Input variant="filled" label="With Value" defaultValue="Filled input value" />
          </div>
          <div>
            <Input 
              variant="filled" 
              label="Error State" 
              error
              defaultValue="Incorrect value" 
              helperText="Please check your input"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </div>
          <div>
            <Input variant="filled" label="Disabled State" disabled />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Helper Text and Icons */}
      <ShowcaseGroup title="Helper Text & Icons">
        <ShowcaseVariant title="Helper Text Examples" layout="vertical">
          <div>
            <Input 
              label="With Helper Info" 
              placeholder="Enter username"
              helperText="Username must be at least 4 characters"
              helperIcon={<IconInfoCircle size={16} />}
            />
          </div>
          <div>
            <Input 
              label="With Error" 
              variant="error"
              defaultValue="123"
              helperText="Password must be at least 8 characters"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Input with Adornments */}
      <ShowcaseGroup title="Input with Adornments">
        <ShowcaseVariant title="End Adornments" layout="vertical">
          <div>
            <Input 
              label="Search" 
              placeholder="Search for anything..."
              endAdornment={<IconSearch size={20} className="text-gray-500" />}
            />
          </div>
          <div>
            <Input 
              label="Email" 
              placeholder="Enter your email"
              endAdornment={<IconMail size={20} className="text-gray-500" />}
            />
          </div>
          <div>
            <Input 
              label="Settings" 
              defaultValue="Configuration options"
              endAdornment={<IconSettings size={20} className="text-gray-500" />}
            />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Password Input Example */}
      <ShowcaseGroup title="Complex Input Examples">
        <ShowcaseVariant title="Password Input with Toggle" layout="vertical">
          <div>
            <Input 
              label="Password" 
              type="password"
              placeholder="Enter your password"
              endAdornment={<IconEyeOff size={20} className="text-gray-500 cursor-pointer" />}
            />
          </div>
          <div>
            <Input 
              label="Password (Visible)" 
              type="text"
              defaultValue="my_secure_password"
              endAdornment={<IconEye size={20} className="text-gray-500 cursor-pointer" />}
            />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Variant Comparison */}
      <ShowcaseGroup title="Variant Comparison">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Default (Border-based)" layout="vertical">
            <Input label="Default Empty" placeholder="Border-based styling" />
            <Input label="Default with Value" defaultValue="Input with value" />
            <Input 
              label="Default with Error" 
              variant="error" 
              defaultValue="Error value" 
              helperText="Error message"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Filled (Background-based)" layout="vertical">
            <Input variant="filled" label="Filled Empty" placeholder="Background-based styling" />
            <Input variant="filled" label="Filled with Value" defaultValue="Input with value" />
            <Input 
              variant="filled" 
              label="Filled with Error" 
              error
              defaultValue="Error value" 
              helperText="Error message"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Design Specifications */}
      <SpecificationBox variant="figma" title="Input Design Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Default Variant (Border-based)" 
            items={[
              "Default: 1px outline, rgba(147, 161, 174, 0.20)",
              "Hover: 1px outline, #1F2933 (text-primary)",
              "Focus: 2px outline, #1F2933 (text-primary)",
              "Error: 2px outline, #FF5833 (error-main)",
              "Disabled: 1px outline, rgba(147, 161, 174, 0.20) + 50% opacity",
              "Padding: 14px left/right"
            ]}
          />
          <SpecList 
            title="Filled Variant (Background-based)" 
            items={[
              "Default: grey-8 background (rgba(147, 161, 174, 0.08))",
              "Hover: grey-16 background (rgba(147, 161, 174, 0.16))",
              "Focus: grey-16 background (rgba(147, 161, 174, 0.16))",
              "Error: error-8 background (rgba(255, 88, 51, 0.08))",
              "Disabled: grey-8 background + 50% opacity",
              "Padding: 12px left, 10px right"
            ]}
          />
        </div>
        
        <div className="mt-4">
          <SpecList 
            title="Common Properties" 
            items={[
              "Border Radius: 8px",
              "Height: 54px (medium), 40px (small)",
              "Typography: 15px font size, Plus Jakarta Sans",
              "Label floating behavior: Same for both variants",
              "Helper Text: 12px font size, 16px icon",
              "End Adornment: 20px icon size, centered vertically"
            ]}
          />
        </div>
      </SpecificationBox>
    </ShowcaseSection>
  );
}
