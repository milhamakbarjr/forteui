import React, { useState } from "react";
import { Progress } from "@forte-ui/core";
import { ShowcaseGroup } from "../components/ShowcaseGroup";
import { ShowcaseSection } from "../components/ShowcaseSection";
import { ShowcaseVariant } from "../components/ShowcaseVariant";
import { SpecificationBox } from "../components/SpecificationBox";
import { SpecList } from "../components/SpecList";

export function ProgressShowcase() {
  const [animatedValue, setAnimatedValue] = useState(0);

  // Animate progress for demo
  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ShowcaseSection
      title="Progress Component"
      description="Progress component with linear and circular variants using semantic colors from the ForteUI design system. Supports multiple sizes and customizable labels."
    >
      {/* Linear Progress Variants */}
      <ShowcaseGroup title="Linear Progress - Default Colors">
        <ShowcaseVariant title="Default Color Variants">
          <div className="space-y-4">
            <Progress variant="linear" value={80} color="default" />
            <Progress variant="linear" value={65} color="primary" />
            <Progress variant="linear" value={45} color="secondary" />
            <Progress variant="linear" value={90} color="info" />
            <Progress variant="linear" value={75} color="success" />
            <Progress variant="linear" value={55} color="warning" />
            <Progress variant="linear" value={35} color="error" />
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Different Sizes">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Small (8px height)</p>
              <Progress variant="linear" value={60} color="primary" size="sm" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Medium (4px height - Figma spec)</p>
              <Progress variant="linear" value={60} color="primary" size="md" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Large (6px height)</p>
              <Progress variant="linear" value={60} color="primary" size="lg" />
            </div>
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Without Labels">
          <div className="space-y-4">
            <Progress variant="linear" value={75} color="success" showLabel={false} />
            <Progress variant="linear" value={40} color="warning" showLabel={false} />
            <Progress variant="linear" value={90} color="info" showLabel={false} />
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Custom Labels">
          <div className="space-y-4">
            <Progress variant="linear" value={85} color="success" label="Upload Complete" />
            <Progress variant="linear" value={45} color="warning" label="In Progress..." />
            <Progress variant="linear" value={20} color="error" label="Failed" />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Circular Progress Variants */}
      <ShowcaseGroup title="Circular Progress - All Colors & Sizes">
        <ShowcaseVariant title="Medium Size (44px - Figma spec)">
          <div className="flex flex-wrap gap-6">
            <Progress variant="circular" value={80} color="default" />
            <Progress variant="circular" value={80} color="primary" />
            <Progress variant="circular" value={80} color="secondary" />
            <Progress variant="circular" value={80} color="info" />
            <Progress variant="circular" value={80} color="success" />
            <Progress variant="circular" value={80} color="warning" />
            <Progress variant="circular" value={80} color="error" />
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Size Variations">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <Progress variant="circular" value={75} color="primary" size="sm" />
              <p className="text-xs text-gray-600 mt-2">Small (32px)</p>
            </div>
            <div className="text-center">
              <Progress variant="circular" value={75} color="primary" size="md" />
              <p className="text-xs text-gray-600 mt-2">Medium (44px)</p>
            </div>
            <div className="text-center">
              <Progress variant="circular" value={75} color="primary" size="lg" />
              <p className="text-xs text-gray-600 mt-2">Large (56px)</p>
            </div>
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Without Center Labels">
          <div className="flex flex-wrap gap-6">
            <Progress variant="circular" value={90} color="success" showLabel={false} />
            <Progress variant="circular" value={60} color="warning" showLabel={false} />
            <Progress variant="circular" value={30} color="error" showLabel={false} />
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Custom Labels">
          <div className="flex flex-wrap gap-6">
            <Progress variant="circular" value={100} color="success" label="Done" size="lg" />
            <Progress variant="circular" value={45} color="info" label="45/100" size="lg" />
            <Progress variant="circular" value={0} color="error" label="0%" size="lg" />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Interactive Examples */}
      <ShowcaseGroup title="Interactive Examples">
        <ShowcaseVariant title="Animated Progress">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 min-w-fit">Linear:</span>
              <Progress variant="linear" value={animatedValue} color="primary" />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 min-w-fit">Circular:</span>
              <Progress variant="circular" value={animatedValue} color="secondary" />
            </div>
          </div>
        </ShowcaseVariant>

        <ShowcaseVariant title="Different Progress Values">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Linear Progress</h4>
              <Progress variant="linear" value={0} color="error" label="0% - Not Started" />
              <Progress variant="linear" value={25} color="warning" label="25% - Getting Started" />
              <Progress variant="linear" value={50} color="info" label="50% - Halfway" />
              <Progress variant="linear" value={75} color="primary" label="75% - Almost Done" />
              <Progress variant="linear" value={100} color="success" label="100% - Complete!" />
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Circular Progress</h4>
              <div className="flex flex-wrap gap-4">
                <Progress variant="circular" value={0} color="error" />
                <Progress variant="circular" value={25} color="warning" />
                <Progress variant="circular" value={50} color="info" />
                <Progress variant="circular" value={75} color="primary" />
                <Progress variant="circular" value={100} color="success" />
              </div>
            </div>
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Accessibility Examples */}
      <ShowcaseGroup title="Accessibility Features">
        <ShowcaseVariant title="With ARIA Labels">
          <div className="space-y-4">
            <Progress 
              variant="linear" 
              value={65} 
              color="primary" 
              aria-label="File upload progress"
              label="Uploading document.pdf"
            />
            <Progress 
              variant="circular" 
              value={85} 
              color="success" 
              aria-label="System initialization progress"
              label="85%"
            />
          </div>
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Specifications */}
      <SpecificationBox>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList
            title="Design Tokens"
            items={[
              "Colors: Full semantic color system from colors.json",
              "Primary: #0690F4, Secondary: #9138FF", 
              "Info: #00BEE0, Success: #22B954",
              "Warning: #FFAD05, Error: #FF5833", 
              "Default: #1F2933 (text-primary)",
              "Background opacity: 30% for linear track",
            ]}
          />
          <SpecList
            title="Dimensions"
            items={[
              "Linear height: 4px (md), 8px (sm), 6px (lg)",
              "Circular sizes: 32px (sm), 44px (md), 56px (lg)",
              "Border radius: 16px (linear track and bar)",
              "Stroke width: 3px (sm), 4px (md), 5px (lg)",
              "Typography: 12px font-size (Figma spec)",
            ]}
          />
        </div>
        <SpecList
          title="Accessibility"
          items={[
            "ARIA progressbar role with valuenow, valuemin, valuemax",
            "Screen reader friendly labels and descriptions",
            "Keyboard navigation support",
            "Live region updates for dynamic progress",
            "Semantic color meanings for different states",
          ]}
        />
        <SpecList
          title="Technical Features"
          items={[
            "Two variants: linear and circular",
            "Seven semantic color options",
            "Three size variants with responsive scaling",
            "Smooth animations and transitions",
            "Custom label support with percentage fallback",
            "TypeScript support with full prop typing",
          ]}
        />
      </SpecificationBox>
    </ShowcaseSection>
  );
}
