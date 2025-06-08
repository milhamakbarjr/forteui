import * as React from "react";
import { Slider } from "@forte-ui/core";
import { ShowcaseSection } from "../components/ShowcaseSection";
import { ShowcaseVariant } from "../components/ShowcaseVariant";
import { SpecificationBox } from "../components/SpecificationBox";
import { SpecList } from "../components/SpecList";

export function SliderShowcase() {
  const [defaultValue, setDefaultValue] = React.useState(30);
  const [labeledValue, setLabeledValue] = React.useState(25);
  const [temperatureValue, setTemperatureValue] = React.useState(50);
  const [volumeValue, setVolumeValue] = React.useState(75);

  return (
    <div className="space-y-8">
      {/* Basic Slider */}
      <ShowcaseSection title="Basic Slider" description="Simple slider with customizable value">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Default">
            <div className="space-y-4">
              <Slider
                value={defaultValue}
                onChange={(value: number) => setDefaultValue(value)}
                className="w-full"
              />
              <p className="text-sm text-grey-600">Current value: {defaultValue}</p>
            </div>
          </ShowcaseVariant>
          
          <ShowcaseVariant title="With Label">
            <div className="space-y-4">
              <Slider
                label="Volume"
                value={volumeValue}
                onChange={(value: number) => setVolumeValue(value)}
                className="w-full"
              />
              <p className="text-sm text-grey-600">Volume: {volumeValue}%</p>
            </div>
          </ShowcaseVariant>
        </div>
      </ShowcaseSection>

      {/* Labels & Values */}
      <ShowcaseSection title="Labels & Values" description="Sliders with labels and value display">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="With Value Display">
            <div className="space-y-4">
              <Slider
                label="Temperature"
                showValue
                value={temperatureValue}
                onChange={(value: number) => setTemperatureValue(value)}
                min={0}
                max={100}
                step={5}
                className="w-full"
              />
            </div>
          </ShowcaseVariant>
          
          <ShowcaseVariant title="Custom Range">
            <div className="space-y-4">
              <Slider
                label="Price Range"
                showValue
                value={labeledValue}
                onChange={(value: number) => setLabeledValue(value)}
                min={0}
                max={1000}
                step={25}
                className="w-full"
              />
            </div>
          </ShowcaseVariant>
        </div>
      </ShowcaseSection>

      {/* States */}
      <ShowcaseSection title="States" description="Different slider states">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseVariant title="Normal">
            <Slider defaultValue={40} className="w-full" />
          </ShowcaseVariant>
          
          <ShowcaseVariant title="Disabled">
            <Slider disabled defaultValue={60} className="w-full" />
          </ShowcaseVariant>
        </div>
      </ShowcaseSection>

      {/* Performance Demo */}
      <ShowcaseSection title="Performance Demo" description="Test the smoothness of the optimized slider">
        <div className="grid grid-cols-1 gap-6">
          <ShowcaseVariant title="Smooth Dragging Test">
            <div className="space-y-4">
              <Slider
                label="Drag me smoothly!"
                showValue
                defaultValue={50}
                min={0}
                max={1000}
                step={1}
                className="w-full"
              />
              <p className="text-sm text-grey-500">
                This slider uses pointer events and requestAnimationFrame for smooth performance.
              </p>
            </div>
          </ShowcaseVariant>
        </div>
      </ShowcaseSection>

      {/* Specifications */}
      <ShowcaseSection title="Specifications" description="Technical details">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpecificationBox title="Performance Features">
            <SpecList
              title="Performance Features"
              items={[
                "Pointer events for better touch support",
                "RequestAnimationFrame for smooth dragging", 
                "Direct DOM updates during drag",
                "Ref-based state to avoid re-renders",
                "Pointer capture for reliable dragging"
              ]}
            />
          </SpecificationBox>
          
          <SpecificationBox title="Accessibility">
            <SpecList
              title="Accessibility Features"
              items={[
                "Full keyboard navigation (arrows, home/end, page up/down)",
                "ARIA attributes (role, aria-valuemin/max/now)",
                "Focus management with ring indicator",
                "Screen reader support",
                "Disabled state handling"
              ]}
            />
          </SpecificationBox>
          
          <SpecificationBox title="Design Tokens">
            <SpecList
              title="Design System Integration"
              items={[
                "bg-primary-main for active fill",
                "bg-grey-300 for track background", 
                "shadow-md and shadow-lg for elevation",
                "Consistent spacing and sizing",
                "Proper disabled state colors"
              ]}
            />
          </SpecificationBox>
          
          <SpecificationBox title="Props">
            <SpecList
              title="Available Props"
              items={[
                "value, defaultValue for controlled/uncontrolled",
                "min, max, step for range configuration",
                "label, showValue for display options",
                "disabled for state control",
                "onChange, onChangeEnd for event handling"
              ]}
            />
          </SpecificationBox>
        </div>
      </ShowcaseSection>
    </div>
  );
}
