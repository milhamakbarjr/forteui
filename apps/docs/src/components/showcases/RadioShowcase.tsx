'use client';

import React, { useState } from 'react';
import { Radio, RadioGroup, Text, Heading } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeRadioShowcase({ 
  children, 
  code, 
  title = "Radio Examples",
  description = "Comprehensive radio examples with multiple states, variants, sizes, and interactive features"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedPriority, setSelectedPriority] = useState('medium');
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [selectedTheme, setSelectedTheme] = useState('light');

  const priorityOptions = [
    { value: 'low', label: 'Low Priority', variant: 'info' as const },
    { value: 'medium', label: 'Medium Priority', variant: 'warning' as const },
    { value: 'high', label: 'High Priority', variant: 'error' as const },
    { value: 'critical', label: 'Critical Priority', variant: 'error' as const }
  ];

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic Radio States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Basic Radio States</Text>
          </div>
          <div className="space-y-3">
            <Radio label="Default radio" name="basic-states-1" value="default" />
            <Radio label="Checked by default" name="basic-states-2" value="checked" checked />
            <Radio label="Disabled radio" name="basic-states-3" value="disabled" disabled />
            <Radio label="Disabled and checked" name="basic-states-4" value="disabled-checked" checked disabled />
          </div>
        </div>

        {/* Radio Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Radio Sizes</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Small (20px)</Text>
              <Radio size="sm" label="Small radio" name="size-small" value="small" variant="primary" />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Medium (24px)</Text>
              <Radio size="md" label="Medium radio" name="size-medium" value="medium" variant="primary" />
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Radio Color Variants</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Neutral & Brand Colors</Text>
              <div className="space-y-3">
                <Radio variant="default" label="Default variant" name="colors-1" value="default" checked />
                <Radio variant="primary" label="Primary variant" name="colors-2" value="primary" checked />
                <Radio variant="secondary" label="Secondary variant" name="colors-3" value="secondary" checked />
              </div>
            </div>
            
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Semantic Colors</Text>
              <div className="space-y-3">
                <Radio variant="info" label="Info variant" name="colors-4" value="info" checked />
                <Radio variant="success" label="Success variant" name="colors-5" value="success" checked />
                <Radio variant="warning" label="Warning variant" name="colors-6" value="warning" checked />
                <Radio variant="error" label="Error variant" name="colors-7" value="error" checked />
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
          
          {/* Radio Group Example */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Radio Group Example - Single Selection</Text>
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
                <Text variant="body-sm" className="text-gray-600">
                  {selectedOption}
                </Text>
              </div>
            </div>
          </div>

          {/* Semantic Colors Priority Example */}
          <div className="space-y-4">
            <Text variant="body-sm" className="font-medium text-gray-600">Semantic Colors Example - Priority Selection</Text>
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
                <Text variant="body-sm" className="text-gray-600">
                  {priorityOptions.find(opt => opt.value === selectedPriority)?.label || 'None'}
                </Text>
              </div>
            </div>
          </div>

          {/* Additional Interactive Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Plan Selection</Text>
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                <Radio value="basic" label="Basic Plan - $9/month" />
                <Radio value="pro" label="Pro Plan - $19/month" variant="primary" />
                <Radio value="enterprise" label="Enterprise Plan - $49/month" variant="secondary" />
              </RadioGroup>
              <Text variant="body-sm" className="text-gray-500">Selected: {selectedPlan}</Text>
            </div>

            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Theme Preference</Text>
              <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
                <Radio value="light" label="Light Theme" variant="primary" />
                <Radio value="dark" label="Dark Theme" variant="secondary" />
                <Radio value="auto" label="Auto (System)" variant="info" />
              </RadioGroup>
              <Text variant="body-sm" className="text-gray-500">Selected: {selectedTheme}</Text>
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
            <Radio 
              label="Custom label styling" 
              labelClassName="text-purple-600 font-semibold"
              variant="primary"
              name="custom-1"
              value="custom-label"
            />
            <Radio 
              label="Custom radio styling" 
              className="border-2 border-purple-300 rounded-lg"
              variant="secondary"
              name="custom-2"
              value="custom-radio"
            />
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Design Specifications</Text>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-4">
            <Heading level={3} className="text-lg text-gray-900">Radio Component Design Specifications</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Color Variants</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Default: Action color (#657686)</div>
                  <div>• Primary: Brand primary (#0690F4)</div>
                  <div>• Secondary: Brand secondary (#9138FF)</div>
                  <div>• Info: Info semantic (#00BEE0)</div>
                  <div>• Success: Success semantic (#22B954)</div>
                  <div>• Warning: Warning semantic (#FFAD05)</div>
                  <div>• Error: Error semantic (#FF5833)</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Interactive States</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Unchecked: Default ring outline</div>
                  <div>• Unchecked Hovered: 8% background</div>
                  <div>• Disabled: Action-disabled color</div>
                  <div>• Checked: Filled center with color</div>
                  <div>• Checked Hovered: 8% background</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Features</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Two sizes: Small (20px), Medium (24px)</div>
                  <div>• Radio groups for single selection</div>
                  <div>• Native form integration</div>
                  <div>• Accessibility compliant (ARIA)</div>
                  <div>• Keyboard navigation support</div>
                  <div>• Plus Jakarta Sans typography</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <Text variant="body-sm" className="font-semibold text-gray-900">Design Tokens Used</Text>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
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
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
