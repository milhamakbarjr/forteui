'use client';

import React, { useState } from 'react';
import { Button } from '@forteui/core';
import { IconPlus, IconInfoCircle, IconCheck, IconTrash, IconArrowRight, IconChevronDown, IconDownload, IconHome, IconUser, IconAlertTriangle, IconX, IconEdit, IconSearch } from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

export function ButtonShowcase({ 
  children, 
  code, 
  title = "Button Component",
  description = "Button component with multiple variants, sizes, states, and rich icon support following ForteUI design specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleAsyncAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClickCount(prev => prev + 1);
    }, 2000);
  };

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8">
        {/* Contained Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Contained Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="md">Default</Button>
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="info" size="md">Info</Button>
            <Button variant="success" size="md">Success</Button>
            <Button variant="warning" size="md">Warning</Button>
            <Button variant="error" size="md">Error</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Button Sizes</h4>
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </div>

        {/* Outline Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Outline Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline-default">Default</Button>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-error">Error</Button>
          </div>
        </div>

        {/* Text Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Text Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="text-default">Default</Button>
            <Button variant="text-primary">Primary</Button>
            <Button variant="text-info">Info</Button>
            <Button variant="text-success">Success</Button>
            <Button variant="text-warning">Warning</Button>
            <Button variant="text-error">Error</Button>
          </div>
        </div>

        {/* Soft Button Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Soft Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="soft-default">Default</Button>
            <Button variant="soft-primary">Primary</Button>
            <Button variant="soft-info">Info</Button>
            <Button variant="soft-success">Success</Button>
            <Button variant="soft-warning">Warning</Button>
            <Button variant="soft-error">Error</Button>
          </div>
        </div>

        {/* Button States */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Button States</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" disabled>Primary Disabled</Button>
            <Button variant="outline-primary" disabled>Outline Disabled</Button>
            <Button variant="text-primary" disabled>Text Disabled</Button>
            <Button variant="soft-primary" disabled>Soft Disabled</Button>
          </div>
        </div>

        {/* Buttons with Leading Icons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Buttons with Leading Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <IconPlus size={16} />
              <span>Add Item</span>
            </Button>
            <Button variant="info">
              <IconInfoCircle size={16} />
              <span>Info</span>
            </Button>
            <Button variant="success">
              <IconCheck size={16} />
              <span>Success</span>
            </Button>
            <Button variant="error">
              <IconTrash size={16} />
              <span>Delete</span>
            </Button>
          </div>
        </div>

        {/* Buttons with Trailing Icons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Buttons with Trailing Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">
              <span>Next</span>
              <IconArrowRight size={16} />
            </Button>
            <Button variant="secondary">
              <span>Dropdown</span>
              <IconChevronDown size={16} />
            </Button>
            <Button variant="success">
              <span>Download</span>
              <IconDownload size={16} />
            </Button>
          </div>
        </div>

        {/* Icon-Only Buttons */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Icon-Only Buttons</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="icon-default" size="icon-md">
              <IconHome className="w-6 h-6" />
            </Button>
            <Button variant="icon-primary" size="icon-md">
              <IconUser className="w-6 h-6" />
            </Button>
            <Button variant="icon-info" size="icon-md">
              <IconInfoCircle className="w-6 h-6" />
            </Button>
            <Button variant="icon-success" size="icon-md">
              <IconCheck className="w-6 h-6" />
            </Button>
            <Button variant="icon-warning" size="icon-md">
              <IconAlertTriangle className="w-6 h-6" />
            </Button>
            <Button variant="icon-error" size="icon-md">
              <IconX className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Icon Button Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Icon Button Sizes</h4>
          <div className="flex items-center gap-4">
            <Button variant="icon-primary" size="icon-lg">
              <IconPlus className="w-8 h-8" />
            </Button>
            <Button variant="icon-primary" size="icon-md">
              <IconPlus className="w-6 h-6" />
            </Button>
            <Button variant="icon-primary" size="icon-sm">
              <IconPlus className="w-5 h-5" />
            </Button>
            <Button variant="icon-primary" size="icon-xs">
              <IconPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Icon Button Use Cases */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Icon Button Use Cases</h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <Button variant="icon-primary" size="icon-sm">
                <IconEdit className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-600">Edit</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="icon-error" size="icon-sm">
                <IconTrash className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-600">Delete</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="icon-info" size="icon-sm">
                <IconSearch className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-600">Search</span>
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Interactive Examples</h4>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Button 
                variant="primary" 
                onClick={handleAsyncAction}
                disabled={loading}
              >
                {loading ? 'Processing...' : `Clicked ${clickCount} times`}
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => setClickCount(0)}
                disabled={loading}
              >
                Reset
              </Button>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg text-sm">
              <strong>Status:</strong> {loading ? 'Processing...' : 'Ready'} |
              <strong> Click Count:</strong> {clickCount}
            </div>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Design Specifications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <h5 className="text-sm font-medium mb-2">Contained Button Specs</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Height: Small (32px), Medium (40px), Large (48px)</li>
                <li>• Border Radius: 6px (default), 8px (large)</li>
                <li>• Font: Plus Jakarta Sans Medium</li>
                <li>• Font Size: 14px (sm), 15px (md), 16px (lg)</li>
                <li>• Hover State: 8% opacity color blend</li>
                <li>• Focus Ring: 2px solid primary-lighter</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium mb-2">Icon Button Specs</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shape: Circular (border-radius: 500px)</li>
                <li>• Sizes: XS (28px), SM (36px), MD (40px), LG (48px)</li>
                <li>• Icon Sizes: 16px, 20px, 24px, 32px</li>
                <li>• Hover State: 8% opacity background</li>
                <li>• Focus Ring: 2px solid with color-lighter</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="text-sm font-medium mb-2">Interaction States</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Default: Base styling with semantic colors</li>
              <li>• Hover: 8% darken/lighten overlay effect</li>
              <li>• Pressed: 16% darken/lighten overlay effect</li>
              <li>• Focus: 2px outline ring in color-light variant</li>
              <li>• Disabled: 0.5 opacity with no-events pointer</li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </ComponentShowcase>
  );
}
