'use client';

import React, { useState } from 'react';
import { Checkbox, Text, Heading } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeCheckboxShowcase({ 
  children, 
  code, 
  title = "Checkbox Examples",
  description = "Comprehensive checkbox examples with multiple states, variants, sizes, and interactive features"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
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
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic Checkbox States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Basic Checkbox States</Text>
          </div>
          <div className="space-y-3">
            <Checkbox label="Default checkbox" />
            <Checkbox label="Checked by default" checked />
            <Checkbox label="Disabled checkbox" disabled />
            <Checkbox label="Disabled and checked" checked disabled />
          </div>
        </div>

        {/* Checkbox Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Checkbox Sizes</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Small (20px)</Text>
              <Checkbox size="sm" label="Small checkbox" />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Medium (24px)</Text>
              <Checkbox size="md" label="Medium checkbox" />
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Checkbox Color Variants</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Neutral & Brand Colors</Text>
              <div className="space-y-3">
                <Checkbox variant="default" label="Default variant" checked />
                <Checkbox variant="primary" label="Primary variant" checked />
                <Checkbox variant="secondary" label="Secondary variant" checked />
              </div>
            </div>
            
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Semantic Colors</Text>
              <div className="space-y-3">
                <Checkbox variant="info" label="Info variant" checked />
                <Checkbox variant="success" label="Success variant" checked />
                <Checkbox variant="warning" label="Warning variant" checked />
                <Checkbox variant="error" label="Error variant" checked />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Interactive Examples</Text>
          </div>
          
          {/* Single Checkbox with State */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Single Checkbox with State</Text>
            <div className="space-y-3">
              <Checkbox 
                checked={isChecked}
                onCheckedChange={setIsChecked}
                label="I agree to the terms and conditions"
                variant="primary"
              />
              <Text variant="body-sm" className="text-gray-500">
                Status: {isChecked ? 'Agreed' : 'Not agreed'}
              </Text>
            </div>
          </div>

          {/* Checkbox Group with Multiple Selection */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Checkbox Group with Multiple Selection</Text>
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-700">Select your preferences:</Text>
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
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <Text variant="body-sm" className="font-medium text-gray-700">Selected options:</Text>
                <Text variant="body-sm" className="text-gray-600">
                  {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'None selected'}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styling */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Custom Styling</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
