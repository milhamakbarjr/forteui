'use client';

import React, { useState } from 'react';
import { Slider } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeSliderShowcase({ 
  children, 
  code, 
  title = "Slider Examples",
  description = "Interactive slider component with customizable ranges, steps, and display options"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  // Basic States
  const [defaultValue, setDefaultValue] = useState(30);
  const [labeledValue, setLabeledValue] = useState(75);
  const [showValueSlider, setShowValueSlider] = useState(45);
  
  // Range Configurations
  const [temperatureValue, setTemperatureValue] = useState(22);
  const [priceValue, setPriceValue] = useState(250);
  const [ratingValue, setRatingValue] = useState(3.5);
  
  // Interactive Features
  const [controlledValue, setControlledValue] = useState(60);
  const [callbackValue, setCallbackValue] = useState(40);
  const [lastEndValue, setLastEndValue] = useState(40);
  
  // Performance Demo
  const [performanceValue, setPerformanceValue] = useState(500);

  const handleChangeEnd = (value: number) => {
    setLastEndValue(value);
  };

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Section 1: Basic States */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <h3 className="text-lg font-semibold">Basic States</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Default Slider</h4>
              <Slider
                value={defaultValue}
                onChange={setDefaultValue}
                className="w-full"
              />
              <p className="text-sm text-gray-600">Current value: {defaultValue}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Label</h4>
              <Slider
                label="Volume"
                value={labeledValue}
                onChange={setLabeledValue}
                className="w-full"
              />
              <p className="text-sm text-gray-600">Volume: {labeledValue}%</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Value Display</h4>
              <Slider
                label="Brightness"
                showValue
                value={showValueSlider}
                onChange={setShowValueSlider}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Disabled State</h4>
              <Slider
                label="Disabled"
                disabled
                defaultValue={60}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Range Configurations */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <h3 className="text-lg font-semibold">Range Configurations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Temperature Range (16-30°C, step: 0.5)</h4>
              <Slider
                label="Temperature"
                showValue
                value={temperatureValue}
                onChange={setTemperatureValue}
                min={16}
                max={30}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Price Range (0-1000, step: 25)</h4>
              <Slider
                label="Price Range"
                showValue
                value={priceValue}
                onChange={setPriceValue}
                min={0}
                max={1000}
                step={25}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Rating (0-5, step: 0.5)</h4>
              <Slider
                label="Rating"
                showValue
                value={ratingValue}
                onChange={setRatingValue}
                min={0}
                max={5}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Large Range (0-10000, step: 100)</h4>
              <Slider
                label="Budget"
                showValue
                defaultValue={2500}
                min={0}
                max={10000}
                step={100}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-orange-500"></div>
            <h3 className="text-lg font-semibold">Interactive Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Controlled Slider</h4>
              <Slider
                label="Controlled Value"
                value={controlledValue}
                onChange={setControlledValue}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-600">Controlled value: {controlledValue}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Change End Callback</h4>
              <Slider
                label="Callback Example"
                value={callbackValue}
                onChange={setCallbackValue}
                onChangeEnd={handleChangeEnd}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-600">Last end value: {lastEndValue}</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Uncontrolled Slider</h4>
              <Slider
                label="Uncontrolled"
                defaultValue={75}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-500">Uses defaultValue prop</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Real-time Updates</h4>
              <Slider
                label="Live Updates"
                defaultValue={50}
                onChange={(value) => console.log('Live value:', value)}
                showValue
                className="w-full"
              />
              <p className="text-sm text-gray-500">Check console for live updates</p>
            </div>
          </div>
        </div>

        {/* Section 4: Performance Demo */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-purple-500"></div>
            <h3 className="text-lg font-semibold">Performance Demo</h3>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Smooth Dragging Test</h4>
            <Slider
              label="Drag me smoothly!"
              showValue
              value={performanceValue}
              onChange={setPerformanceValue}
              min={0}
              max={1000}
              step={1}
              className="w-full"
            />
            <p className="text-sm text-gray-500">
              This slider uses pointer events and requestAnimationFrame for smooth performance.
            </p>
          </div>
        </div>

        {/* Section 5: Custom Styling */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-pink-500"></div>
            <h3 className="text-lg font-semibold">Custom Styling</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Custom Width</h4>
              <Slider
                label="Custom Width"
                defaultValue={40}
                showValue
                className="w-3/4"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">With Custom Container</h4>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Slider
                  label="In Container"
                  defaultValue={60}
                  showValue
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Design Specifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-indigo-500"></div>
            <h3 className="text-lg font-semibold">Design Specifications</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Performance Features</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Pointer events for better touch support</li>
                <li>• RequestAnimationFrame for smooth dragging</li>
                <li>• Direct DOM updates during drag</li>
                <li>• Ref-based state to avoid re-renders</li>
                <li>• Pointer capture for reliable dragging</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Accessibility Features</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Full keyboard navigation (arrows, home/end, page up/down)</li>
                <li>• ARIA attributes (role, aria-valuemin/max/now)</li>
                <li>• Focus management with ring indicator</li>
                <li>• Screen reader support</li>
                <li>• Disabled state handling</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Design Tokens</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• bg-primary-main for active fill</li>
                <li>• bg-grey-300 for track background</li>
                <li>• shadow-md and shadow-lg for elevation</li>
                <li>• Consistent spacing and sizing</li>
                <li>• Proper disabled state colors</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Available Props</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• value, defaultValue for controlled/uncontrolled</li>
                <li>• min, max, step for range configuration</li>
                <li>• label, showValue for display options</li>
                <li>• disabled for state control</li>
                <li>• onChange, onChangeEnd for event handling</li>
              </ul>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </ComponentShowcase>
  );
}
