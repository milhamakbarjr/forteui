'use client';

import React, { useState } from 'react';
import { Text, Heading } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function TypographyShowcase({ 
  children, 
  code
}: {
  children?: React.ReactNode;
  code?: string;
}) {
  const [selectedHeadingLevel, setSelectedHeadingLevel] = useState<1 | 2 | 3 | 4 | 5 | 6>(2);
  const [selectedTextVariant, setSelectedTextVariant] = useState<'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'caption'>('body');
  const [selectedColor, setSelectedColor] = useState<'primary' | 'secondary' | 'brand' | 'white'>('primary');
  const [customText, setCustomText] = useState('Your custom text here');

  return (
    <ComponentShowcase code={code}>
      <div className="forte-ui space-y-8">
        {/* Heading Levels */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Heading Levels</h4>
          <div className="space-y-3">
            <Heading level={1}>Heading Level 1</Heading>
            <Heading level={2}>Heading Level 2</Heading>
            <Heading level={3}>Heading Level 3</Heading>
            <Heading level={4}>Heading Level 4</Heading>
            <Heading level={5}>Heading Level 5</Heading>
            <Heading level={6}>Heading Level 6</Heading>
          </div>
        </div>

        {/* Text Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Text Variants</h4>
          <div className="space-y-3">
            <Text variant="display">Display Text - Large and bold for major headings</Text>
            <Text variant="h1">H1 Text - Primary heading style</Text>
            <Text variant="h2">H2 Text - Secondary heading style</Text>
            <Text variant="h3">H3 Text - Tertiary heading style</Text>
            <Text variant="body">Body Text - Default paragraph text</Text>
            <Text variant="body-sm">Body Small - Smaller paragraph text</Text>
            <Text variant="caption">Caption Text - Small descriptive text</Text>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Color Variants</h4>
          <div className="space-y-3">
            <Text variant="body" color="primary">Primary text color</Text>
            <Text variant="body" color="secondary">Secondary text color</Text>
            <Text variant="body" color="brand">Brand text color</Text>
            <div className="bg-gray-800 p-3 rounded">
              <Text variant="body" color="white">White text on dark background</Text>
            </div>
          </div>
        </div>

        {/* Interactive Typography Editor */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Interactive Typography Editor</h4>
          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1">Heading Level:</label>
                <select 
                  value={selectedHeadingLevel} 
                  onChange={(e) => setSelectedHeadingLevel(Number(e.target.value) as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="1">Level 1</option>
                  <option value="2">Level 2</option>
                  <option value="3">Level 3</option>
                  <option value="4">Level 4</option>
                  <option value="5">Level 5</option>
                  <option value="6">Level 6</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Text Variant:</label>
                <select 
                  value={selectedTextVariant} 
                  onChange={(e) => setSelectedTextVariant(e.target.value as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="display">Display</option>
                  <option value="h1">H1</option>
                  <option value="h2">H2</option>
                  <option value="h3">H3</option>
                  <option value="h4">H4</option>
                  <option value="h5">H5</option>
                  <option value="h6">H6</option>
                  <option value="body">Body</option>
                  <option value="body-sm">Body Small</option>
                  <option value="caption">Caption</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Color:</label>
                <select 
                  value={selectedColor} 
                  onChange={(e) => setSelectedColor(e.target.value as any)}
                  className="w-full text-xs border rounded px-2 py-1"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="brand">Brand</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium mb-1">Custom Text:</label>
              <input 
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full text-sm border rounded px-3 py-2"
                placeholder="Enter your text here..."
              />
            </div>

            <div className="space-y-4 p-4 bg-white rounded border">
              <div>
                <Text variant="caption" color="secondary" className="block mb-2">Preview Heading:</Text>
                <Heading level={selectedHeadingLevel} color={selectedColor}>
                  {customText}
                </Heading>
              </div>
              <div>
                <Text variant="caption" color="secondary" className="block mb-2">Preview Text:</Text>
                <Text variant={selectedTextVariant} color={selectedColor}>
                  {customText}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Scale */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Typography Scale</h4>
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Text variant="caption" color="secondary" className="block mb-3">Headings:</Text>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Heading level={1} className="flex-1">H1</Heading>
                    <Text variant="caption" color="secondary">48px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={2} className="flex-1">H2</Heading>
                    <Text variant="caption" color="secondary">36px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={3} className="flex-1">H3</Heading>
                    <Text variant="caption" color="secondary">30px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={4} className="flex-1">H4</Heading>
                    <Text variant="caption" color="secondary">24px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={5} className="flex-1">H5</Heading>
                    <Text variant="caption" color="secondary">20px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading level={6} className="flex-1">H6</Heading>
                    <Text variant="caption" color="secondary">18px</Text>
                  </div>
                </div>
              </div>
              <div>
                <Text variant="caption" color="secondary" className="block mb-3">Body Text:</Text>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Text variant="display" className="flex-1">Display</Text>
                    <Text variant="caption" color="secondary">48px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text variant="body" className="flex-1">Body</Text>
                    <Text variant="caption" color="secondary">16px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text variant="body-sm" className="flex-1">Body Small</Text>
                    <Text variant="caption" color="secondary">14px</Text>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text variant="caption" className="flex-1">Caption</Text>
                    <Text variant="caption" color="secondary">12px</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
