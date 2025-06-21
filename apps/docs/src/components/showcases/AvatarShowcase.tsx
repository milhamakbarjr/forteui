'use client';

import React from 'react';
import { Avatar, Text } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function AvatarShowcase({ 
  children, 
  code
}: {
  children?: React.ReactNode;
  code?: string;
}) {
  return (
    <ComponentShowcase code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic States - Avatar Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Avatar Sizes (24px - 64px)</Text>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-center">
              <Avatar size="xs" fallback="XS" />
              <Text variant="caption" className="block mt-2 text-gray-600">XS (24px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="sm" fallback="SM" />
              <Text variant="caption" className="block mt-2 text-gray-600">SM (32px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="md" fallback="MD" />
              <Text variant="caption" className="block mt-2 text-gray-600">MD (40px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="lg" fallback="LG" />
              <Text variant="caption" className="block mt-2 text-gray-600">LG (48px)</Text>
            </div>
            <div className="text-center">
              <Avatar size="xl" fallback="XL" />
              <Text variant="caption" className="block mt-2 text-gray-600">XL (64px)</Text>
            </div>
          </div>
        </div>

        {/* Variants - Color Options */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Color Variants</Text>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-center">
              <Avatar variant="default" fallback="DE" />
              <Text variant="caption" className="block mt-2 text-gray-600">Default</Text>
            </div>
            <div className="text-center">
              <Avatar variant="primary" fallback="PR" />
              <Text variant="caption" className="block mt-2 text-gray-600">Primary</Text>
            </div>
            <div className="text-center">
              <Avatar variant="secondary" fallback="SE" />
              <Text variant="caption" className="block mt-2 text-gray-600">Secondary</Text>
            </div>
            <div className="text-center">
              <Avatar variant="info" fallback="IN" />
              <Text variant="caption" className="block mt-2 text-gray-600">Info</Text>
            </div>
            <div className="text-center">
              <Avatar variant="success" fallback="SU" />
              <Text variant="caption" className="block mt-2 text-gray-600">Success</Text>
            </div>
            <div className="text-center">
              <Avatar variant="warning" fallback="WA" />
              <Text variant="caption" className="block mt-2 text-gray-600">Warning</Text>
            </div>
            <div className="text-center">
              <Avatar variant="error" fallback="ER" />
              <Text variant="caption" className="block mt-2 text-gray-600">Error</Text>
            </div>
          </div>
        </div>

        {/* Interactive Features - Shape Options */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Shape Options</Text>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-center">
              <Avatar shape="circular" variant="primary" fallback="CI" />
              <Text variant="caption" className="block mt-2 text-gray-600">Circular</Text>
            </div>
            <div className="text-center">
              <Avatar shape="rounded" variant="primary" fallback="RO" />
              <Text variant="caption" className="block mt-2 text-gray-600">Rounded</Text>
            </div>
            <div className="text-center">
              <Avatar shape="square" variant="primary" fallback="SQ" />
              <Text variant="caption" className="block mt-2 text-gray-600">Square</Text>
            </div>
          </div>
        </div>

        {/* Custom Styling - Status Indicators */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Status Indicators</Text>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                alt="Online User" 
                fallback="ON"
                status="online" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Online</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Away User" 
                fallback="AW"
                status="away" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Away</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" 
                alt="Busy User" 
                fallback="BU"
                status="busy" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Busy</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                alt="Offline User" 
                fallback="OF"
                status="offline" 
                size="md" 
                shape="circular" 
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Offline</Text>
            </div>
          </div>
        </div>

        {/* Fallback Handling */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Fallback Handling</Text>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-center">
              <Avatar variant="primary" fallback="John Doe" />
              <Text variant="caption" className="block mt-2 text-gray-600">Name Extraction</Text>
            </div>
            <div className="text-center">
              <Avatar variant="secondary" fallback="Jane Smith" />
              <Text variant="caption" className="block mt-2 text-gray-600">Initials</Text>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://invalid-image-url.jpg" 
                alt="Broken Image"
                fallback="BR"
                variant="error"
              />
              <Text variant="caption" className="block mt-2 text-gray-600">Broken Image</Text>
            </div>
            <div className="text-center">
              <Avatar variant="info" fallback="+" size="md" />
              <Text variant="caption" className="block mt-2 text-gray-600">Add More</Text>
            </div>
          </div>
        </div>

        {/* Advanced Usage - Mixed Combinations */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Advanced Combinations</Text>
          </div>
          <div className="space-y-4">
            {/* Avatar Group */}
            <div className="flex items-center gap-2">
              <Text variant="caption" className="text-gray-600 min-w-[80px]">Avatar Group:</Text>
              <div className="flex -space-x-2">
                <Avatar 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                  fallback="JD" 
                  size="md" 
                  className="border-2 border-white" 
                />
                <Avatar 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                  fallback="AB" 
                  size="md" 
                  className="border-2 border-white" 
                />
                <Avatar 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" 
                  fallback="CD" 
                  size="md" 
                  className="border-2 border-white" 
                />
                <Avatar 
                  fallback="+3" 
                  size="md" 
                  variant="default"
                  className="border-2 border-white" 
                />
              </div>
            </div>

            {/* Mixed Shapes & Status */}
            <div className="flex items-center gap-2">
              <Text variant="caption" className="text-gray-600 min-w-[80px]">Mixed Styles:</Text>
              <div className="flex items-center gap-3">
                <Avatar size="sm" shape="rounded" variant="primary" fallback="XS" status="online" />
                <Avatar size="md" shape="circular" variant="secondary" fallback="MD" status="away" />
                <Avatar size="lg" shape="square" variant="success" fallback="LG" status="busy" />
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
