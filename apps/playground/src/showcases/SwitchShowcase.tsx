import { useState } from 'react';
import {
  Switch,
} from 'forteui-core';

import {
  ShowcaseSection,
  ShowcaseGroup,
  ShowcaseVariant,
  SpecificationBox,
  SpecList
} from '../components';

export function SwitchShowcase() {
  const [basicChecked, setBasicChecked] = useState(false);
  const [semanticStates, setSemanticStates] = useState({
    default: false,
    primary: true,
    secondary: true,
    info: true,
    success: true,
    warning: true,
    error: true,
  });
  const [sizeStates, setSizeStates] = useState({
    small: true,
    medium: true,
  });
  const [interactiveStates, setInteractiveStates] = useState({
    unchecked: false,
    checked: true,
    disabled: false,
    disabledChecked: true,
  });

  return (
    <ShowcaseSection
      title="Switch"
      description="A switch component that allows users to toggle between two states. Implemented with accessibility-first approach using Radix UI primitives and faithful to Figma design specifications."
    >
      {/* Real-World Examples */}
      <ShowcaseGroup title="Real-World Examples">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Settings Toggle">
            <div className="space-y-4">
              <Switch
                label="Enable notifications"
                checked={basicChecked}
                onCheckedChange={setBasicChecked}
                color="primary"
                size="medium"
              />
              <Switch
                label="Dark mode"
                checked={true}
                color="secondary"
                size="medium"
              />
              <Switch
                label="Auto-save drafts"
                checked={false}
                color="success"
                size="medium"
              />
            </div>
          </ShowcaseVariant>

          <ShowcaseVariant title="Form Controls">
            <div className="space-y-4">
              <Switch
                label="Subscribe to newsletter"
                checked={false}
                color="info"
                size="medium"
              />
              <Switch
                label="Remember me"
                checked={true}
                color="primary"
                size="small"
              />
              <Switch
                label="Enable two-factor authentication"
                checked={false}
                color="warning"
                size="medium"
                disabled
              />
            </div>
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Semantic Color Variants */}
      <ShowcaseGroup title="Semantic Color Variants">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ShowcaseVariant title="Default">
            <Switch
              label="Default"
              color="default"
              checked={semanticStates.default}
              onCheckedChange={(checked: boolean) =>
                setSemanticStates(prev => ({ ...prev, default: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Primary">
            <Switch
              label="Primary"
              color="primary"
              checked={semanticStates.primary}
              onCheckedChange={(checked: boolean) =>
                setSemanticStates(prev => ({ ...prev, primary: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Secondary">
            <Switch
              label="Secondary"
              color="secondary"
              checked={semanticStates.secondary}
              onCheckedChange={(checked: boolean) =>
                setSemanticStates(prev => ({ ...prev, secondary: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Info">
            <Switch
              label="Info"
              color="info"
              checked={semanticStates.info}
              onCheckedChange={(checked: boolean) =>
                setSemanticStates(prev => ({ ...prev, info: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Success">
            <Switch
              label="Success"
              color="success"
              checked={semanticStates.success}
              onCheckedChange={(checked: boolean) =>
                setSemanticStates(prev => ({ ...prev, success: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Warning">
            <Switch
              label="Warning"
              color="warning"
              checked={semanticStates.warning}
              onCheckedChange={(checked: boolean) =>
                setSemanticStates(prev => ({ ...prev, warning: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Error">
            <Switch
              label="Error"
              color="error"
              checked={semanticStates.error}
              onCheckedChange={(checked: boolean) =>
                setSemanticStates(prev => ({ ...prev, error: checked }))
              }
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Size Variants */}
      <ShowcaseGroup title="Size Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Small">
            <Switch
              label="Small Switch"
              size="small"
              color="primary"
              checked={sizeStates.small}
              onCheckedChange={(checked: boolean) =>
                setSizeStates(prev => ({ ...prev, small: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Medium">
            <Switch
              label="Medium Switch"
              size="medium"
              color="primary"
              checked={sizeStates.medium}
              onCheckedChange={(checked: boolean) =>
                setSizeStates(prev => ({ ...prev, medium: checked }))
              }
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Interactive States */}
      <ShowcaseGroup title="Interactive States">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ShowcaseVariant title="Unchecked">
            <Switch
              label="Unchecked"
              color="primary"
              checked={interactiveStates.unchecked}
              onCheckedChange={(checked: boolean) =>
                setInteractiveStates(prev => ({ ...prev, unchecked: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Checked">
            <Switch
              label="Checked"
              color="primary"
              checked={interactiveStates.checked}
              onCheckedChange={(checked: boolean) =>
                setInteractiveStates(prev => ({ ...prev, checked: checked }))
              }
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Disabled Unchecked">
            <Switch
              label="Disabled"
              color="primary"
              checked={interactiveStates.disabled}
              onCheckedChange={(checked: boolean) =>
                setInteractiveStates(prev => ({ ...prev, disabled: checked }))
              }
              disabled
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Disabled Checked">
            <Switch
              label="Disabled"
              color="primary"
              checked={interactiveStates.disabledChecked}
              onCheckedChange={(checked: boolean) =>
                setInteractiveStates(prev => ({ ...prev, disabledChecked: checked }))
              }
              disabled
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Label Positioning */}
      <ShowcaseGroup title="Label Positioning">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Label Right">
            <Switch
              label="Label on right"
              color="primary"
              checked={true}
              labelPosition="right"
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Label Left">
            <Switch
              label="Label on left"
              color="primary"
              checked={true}
              labelPosition="left"
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Without Labels */}
      <ShowcaseGroup title="Switch Without Labels">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ShowcaseVariant title="Primary">
            <Switch
              color="primary"
              checked={true}
              aria-label="Toggle primary setting"
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Success">
            <Switch
              color="success"
              checked={true}
              aria-label="Toggle success setting"
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Warning">
            <Switch
              color="warning"
              checked={false}
              aria-label="Toggle warning setting"
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Small Size">
            <Switch
              color="secondary"
              size="small"
              checked={true}
              aria-label="Toggle small setting"
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Design Specifications */}
      <SpecificationBox variant="figma" title="Switch Design Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Dimensions</h4>
            <SpecList
              title="Size Specifications"
              items={[
                "Small: 25px × 18px track, 10px thumb",
                "Medium: 33px × 20px track, 14px thumb",
                "Track padding: 3px on all sides",
                "Border radius: Fully rounded (500px)",
                "Container height: 24px (small), 38px (medium)"
              ]}
            />
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Spacing & Typography</h4>
            <SpecList
              title="Layout Details"
              items={[
                "Label gap: 7px (small), 9px (medium)",
                "Font: Plus Jakarta Sans, 14px, 400 weight",
                "Line height: 22px",
                "Thumb translation: 7px (small), 13px (medium)"
              ]}
            />
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Colors</h4>
            <SpecList
              title="Color Tokens"
              items={[
                "Unchecked background: grey.48 (rgba(147, 161, 174, 0.48))",
                "Checked background: Semantic color main variants",
                "Thumb: white (#ffffff)",
                "Label: text.primary (#1F2933)",
                "Disabled label: grey.500 (#93A1AE)"
              ]}
            />
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Interaction States</h4>
            <SpecList
              title="State Behaviors"
              items={[
                "Hover: 8% opacity overlay of semantic color",
                "Focus: Ring with 2px offset in semantic color",
                "Disabled: 48% opacity, no interactions",
                "Transition: 200ms ease-in-out for all changes"
              ]}
            />
          </div>
        </div>
      </SpecificationBox>

      {/* Implementation Examples */}
      <SpecificationBox variant="default" title="Implementation Examples">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-text-primary mb-2">Basic Usage</h4>
            <pre className="bg-grey-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Basic switch with label
<Switch
  label="Enable notifications"
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
  color="primary"
  size="medium"
/>

// Small switch without label
<Switch
  size="small"
  color="success"
  checked={isActive}
  onCheckedChange={setIsActive}
  aria-label="Toggle feature"
/>`}
            </pre>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-2">Semantic Colors</h4>
            <pre className="bg-grey-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Different semantic colors
<Switch label="Info setting" color="info" />
<Switch label="Success toggle" color="success" />
<Switch label="Warning option" color="warning" />
<Switch label="Error state" color="error" />`}
            </pre>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-2">Advanced Configuration</h4>
            <pre className="bg-grey-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Custom styling and positioning
<Switch
  label="Advanced setting"
  labelPosition="left"
  color="secondary"
  size="small"
  disabled={isLoading}
  containerClassName="my-4"
  labelClassName="font-medium"
/>`}
            </pre>
          </div>
        </div>
      </SpecificationBox>
    </ShowcaseSection>
  );
}
