'use client';

import React from 'react';
import { Textarea, Text, Heading } from '@forteui/core';
import { IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeTextareaShowcase({ 
  children, 
  code
}: {
  children?: React.ReactNode;
  code?: string;
}) {
  return (
    <ComponentShowcase code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Textarea States</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Default Variant States</Text>
              <div className="space-y-4">
                <Textarea placeholder="Enter your message..." label="Default (Empty)" />
                <Textarea 
                  label="With Value" 
                  defaultValue="This is a sample message with some content to show how the textarea behaves with text."
                />
                <Textarea label="Disabled" disabled />
                <Textarea 
                  label="Error State" 
                  error
                  defaultValue="Short message"
                  helperText="Message must be at least 20 characters long"
                  helperIcon={<IconAlertTriangle size={16} />}
                />
              </div>
            </div>
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Filled Variant States</Text>
              <div className="space-y-4">
                <Textarea variant="filled" label="Filled (Empty)" placeholder="Enter your message..." />
                <Textarea 
                  variant="filled"
                  label="Filled with Value" 
                  defaultValue="This is a sample message with some content to show how the textarea behaves with text."
                />
                <Textarea variant="filled" label="Filled Disabled" disabled />
                <Textarea 
                  variant="filled"
                  label="Filled Error" 
                  error
                  defaultValue="Short message"
                  helperText="Message must be at least 20 characters long"
                  helperIcon={<IconAlertTriangle size={16} />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Textarea Sizes</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Small (60px min-height)</Text>
              <Textarea size="sm" label="Small" placeholder="Small size textarea" />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Medium (98px min-height)</Text>
              <Textarea size="md" label="Medium" placeholder="Medium size textarea" />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Large (120px min-height)</Text>
              <Textarea size="lg" label="Large" placeholder="Large size textarea" />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Variants</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-600">Default (Outline-based)</Text>
              <Textarea 
                label="Default Variant" 
                placeholder="Outline-based textarea with border focus"
                defaultValue="This uses the default variant with outline-based styling."
              />
            </div>
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-600">Filled (Background-based)</Text>
              <Textarea 
                variant="filled"
                label="Filled Variant" 
                placeholder="Background-based textarea with fill focus"
                defaultValue="This uses the filled variant with background-based styling."
              />
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Helper Text & Icons</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-600">With Helper Info</Text>
              <Textarea 
                label="With Helper Info" 
                placeholder="Tell us about yourself..."
                helperText="This information will be displayed on your public profile"
                helperIcon={<IconInfoCircle size={16} />}
              />
            </div>
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-600">With Error</Text>
              <Textarea 
                label="With Error" 
                error
                defaultValue="Basic requirements"
                helperText="Please provide more detailed requirements (min 50 characters)"
                helperIcon={<IconAlertTriangle size={16} />}
              />
            </div>
          </div>
        </div>

        {/* Custom Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Custom Features</Text>
          </div>
          <div className="space-y-6">
            <div>
              <Text variant="body-sm" className="font-medium text-gray-600 mb-3">Custom Height (Rows Property)</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Textarea 
                  label="3 Rows" 
                  rows={3}
                  placeholder="Fixed height with 3 rows"
                />
                <Textarea 
                  label="6 Rows" 
                  rows={6}
                  placeholder="Fixed height with 6 rows"
                />
              </div>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium text-gray-600 mb-3">Resize Behavior</Text>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Textarea 
                  label="Resize Vertical (Default)" 
                  placeholder="Can be resized vertically"
                  className="resize-y"
                />
                <Textarea 
                  label="No Resize" 
                  placeholder="Cannot be resized"
                  className="resize-none"
                />
                <Textarea 
                  label="Resize Both" 
                  placeholder="Can be resized in both directions"
                  className="resize"
                />
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
