import {
  Textarea,
  IconAlertTriangle,
  IconInfoCircle
} from 'forteui-core';

import {
  ShowcaseSection,
  ShowcaseGroup,
  ShowcaseVariant,
  SpecificationBox,
  SpecList
} from '../components';

export function TextareaShowcase() {
  return (
    <ShowcaseSection
      title="Textarea Component"
      description="Textarea component with multiple states, variants, sizes, and floating label behavior following Figma specifications."
    >
      {/* Textarea States */}
      <ShowcaseGroup title="Textarea States">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Default Variant States" layout="vertical">
            <div>
              <Textarea placeholder="Enter your message..." label="Default (Empty)" />
            </div>
            <div>
              <Textarea 
                label="With Value" 
                defaultValue="This is a sample message with some content to show how the textarea behaves with text."
              />
            </div>
            <div>
              <Textarea label="Disabled" disabled />
            </div>
            <div>
              <Textarea 
                label="Error State" 
                error
                defaultValue="Short message"
                helperText="Message must be at least 20 characters long"
                helperIcon={<IconAlertTriangle size={16} />}
              />
            </div>
          </ShowcaseVariant>

          <ShowcaseVariant title="Filled Variant States" layout="vertical">
            <div>
              <Textarea variant="filled" label="Filled (Empty)" placeholder="Enter your message..." />
            </div>
            <div>
              <Textarea 
                variant="filled"
                label="Filled with Value" 
                defaultValue="This is a sample message with some content to show how the textarea behaves with text."
              />
            </div>
            <div>
              <Textarea variant="filled" label="Filled Disabled" disabled />
            </div>
            <div>
              <Textarea 
                variant="filled"
                label="Filled Error" 
                error
                defaultValue="Short message"
                helperText="Message must be at least 20 characters long"
                helperIcon={<IconAlertTriangle size={16} />}
              />
            </div>
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Textarea Sizes */}
      <ShowcaseGroup title="Textarea Sizes">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Textarea size="sm" label="Small" placeholder="Small size (60px min-height)" />
          </div>
          <div>
            <Textarea size="md" label="Medium" placeholder="Medium size (98px min-height)" />
          </div>
          <div>
            <Textarea size="lg" label="Large" placeholder="Large size (120px min-height)" />
          </div>
        </div>
      </ShowcaseGroup>

      {/* Helper Text and Icons */}
      <ShowcaseGroup title="Helper Text & Icons">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Textarea 
              label="With Helper Info" 
              placeholder="Tell us about yourself..."
              helperText="This information will be displayed on your public profile"
              helperIcon={<IconInfoCircle size={16} />}
            />
          </div>
          <div>
            <Textarea 
              label="With Error" 
              error
              defaultValue="Basic requirements"
              helperText="Please provide more detailed requirements (min 50 characters)"
              helperIcon={<IconAlertTriangle size={16} />}
            />
          </div>
        </div>
      </ShowcaseGroup>

      {/* Rows Property */}
      <ShowcaseGroup title="Custom Height">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Textarea 
              label="3 Rows" 
              rows={3}
              placeholder="Fixed height with 3 rows"
            />
          </div>
          <div>
            <Textarea 
              label="6 Rows" 
              rows={6}
              placeholder="Fixed height with 6 rows"
            />
          </div>
        </div>
      </ShowcaseGroup>

      {/* Resize Behavior */}
      <ShowcaseGroup title="Resize Behavior">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Textarea 
              label="Resize Vertical (Default)" 
              placeholder="Can be resized vertically (resize-y)"
            />
          </div>
          <div>
            <Textarea 
              label="No Resize" 
              placeholder="Cannot be resized (resize-none)"
            />
          </div>
          <div>
            <Textarea 
              label="Resize Both" 
              placeholder="Can be resized in both directions (resize)"
            />
          </div>
        </div>
      </ShowcaseGroup>

      {/* Design Specifications */}
      <SpecificationBox variant="figma" title="Textarea Design Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Outline Variant (Border-based)" 
            items={[
              "Default: 1px outline, rgba(147, 161, 174, 0.20)",
              "Hover: 1px outline, #1F2933 (text-primary)",
              "Focus: 2px outline, #1F2933 (text-primary)",
              "Error: 2px outline, #FF5833 (error-main)",
              "Disabled: 1px outline, rgba(147, 161, 174, 0.20) + 50% opacity",
              "Padding: 14px all around"
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
              "Padding: 12px all around"
            ]}
          />
        </div>
        
        <div className="mt-4">
          <SpecList 
            title="Common Properties" 
            items={[
              "Border Radius: 8px",
              "Min Heights: Small (60px), Medium (98px), Large (120px)",
              "Typography: 15px font size, Plus Jakarta Sans",
              "Resize: Vertical only (resize-y) by default",
              "Floating label behavior: Same as Input component",
              "Helper Text: 12px font size, 16px icon"
            ]}
          />
        </div>
      </SpecificationBox>
    </ShowcaseSection>
  );
}
