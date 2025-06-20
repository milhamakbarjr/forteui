'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Switch, Avatar, Textarea, Radio, RadioGroup, Slider, Badge, Chip, Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, Text, Heading, Breadcrumb, Snackbar, Progress, Button, Alert } from '@forteui/core';
import { IconX, IconUser, IconCheck, IconSettings, IconStar, IconHome, IconShoppingCart, IconEye, IconArrowRight, IconPlus, IconInfoCircle, IconAlertTriangle, IconTrash, IconEdit, IconSearch, IconMail, IconDownload, IconChevronDown } from '@tabler/icons-react';
import { ComponentShowcase } from './ComponentShowcase';

// Client-safe Form Controls Showcase
export function ClientSafeFormControlsShowcase({ 
  children, 
  code, 
  title = "Form Controls",
  description = "Interactive form control examples"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [switched1, setSwitched1] = useState(false);
  const [switched2, setSwitched2] = useState(true);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-4">
        {/* Static controls */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-static" />
            <label htmlFor="terms-static">Accept terms and conditions</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="notifications-static" />
            <label htmlFor="notifications-static">Enable notifications</label>
          </div>
        </div>
        
        {/* Interactive controls */}
        <div className="space-y-3 border-t pt-4">
          <h4 className="font-medium">Interactive Examples:</h4>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms-interactive" 
              checked={checked1}
              onCheckedChange={setChecked1}
            />
            <label htmlFor="terms-interactive">
              Interactive checkbox (checked: {checked1.toString()})
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms-interactive-2" 
              checked={checked2}
              onCheckedChange={setChecked2}
            />
            <label htmlFor="terms-interactive-2">
              Pre-checked checkbox (checked: {checked2.toString()})
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="notifications-interactive" 
              checked={switched1}
              onCheckedChange={setSwitched1}
            />
            <label htmlFor="notifications-interactive">
              Interactive switch (on: {switched1.toString()})
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch 
              id="notifications-interactive-2" 
              checked={switched2}
              onCheckedChange={setSwitched2}
            />
            <label htmlFor="notifications-interactive-2">
              Pre-enabled switch (on: {switched2.toString()})
            </label>
          </div>
        </div>
        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Avatar Showcase
export function ClientSafeAvatarShowcase({ 
  children, 
  code, 
  title = "Avatar Component Showcase",
  description = "Comprehensive avatar examples with sizes, variants, shapes, status indicators, and advanced features"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
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

        {/* Design Specifications - Fallback Handling */}
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

// Client-safe Checkbox Showcase
// Client-safe Radio Showcase
// Client-safe Slider Showcase
// Client-safe Chip Showcase
// Client-safe Card Showcase
export function ClientSafeCardShowcase({ 
  children, 
  code, 
  title = "Card Examples",
  description = "Versatile card component with multiple variants, padding options, and composition patterns following Figma specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Section 1: Card Variants */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <h3 className="text-lg font-semibold">Card Variants</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with default styling and shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This is the default card variant with standard padding and shadow-sm.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Card with enhanced shadow for emphasis.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This elevated card uses shadow-md for a more prominent appearance.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="primary">Learn More</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardDescription>Card with prominent border and no shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This outlined card emphasizes the border instead of using shadows.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline-primary">View Details</Button>
              </CardFooter>
            </Card>

            <Card variant="filled">
              <CardHeader>
                <CardTitle>Filled Card</CardTitle>
                <CardDescription>Card with subtle background fill.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This filled card uses a light background color instead of white.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="text-primary">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 2: Card Padding Options */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <h3 className="text-lg font-semibold">Card Padding Options</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card padding="sm">
              <CardHeader padding="sm">
                <CardTitle>Small Padding</CardTitle>
                <CardDescription>Compact layout (16px)</CardDescription>
              </CardHeader>
              <CardContent padding="sm">
                <Text variant="body-sm">Compact card content with reduced spacing</Text>
              </CardContent>
              <CardFooter padding="sm">
                <Button size="sm" variant="soft-primary">Action</Button>
              </CardFooter>
            </Card>
            
            <Card padding="md">
              <CardHeader padding="md">
                <CardTitle>Medium Padding</CardTitle>
                <CardDescription>Default layout (24px)</CardDescription>
              </CardHeader>
              <CardContent padding="md">
                <Text variant="body-sm">Standard card content with balanced spacing</Text>
              </CardContent>
              <CardFooter padding="md">
                <Button size="sm" variant="soft-primary">Action</Button>
              </CardFooter>
            </Card>
            
            <Card padding="lg">
              <CardHeader padding="lg">
                <CardTitle>Large Padding</CardTitle>
                <CardDescription>Spacious layout (32px)</CardDescription>
              </CardHeader>
              <CardContent padding="lg">
                <Text variant="body-sm">Expanded card content with generous spacing</Text>
              </CardContent>
              <CardFooter padding="lg">
                <Button size="sm" variant="soft-primary">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 3: Card Composition Patterns */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-purple-500"></div>
            <h3 className="text-lg font-semibold">Card Composition Patterns</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>Header + Content + Footer</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This is the most common card pattern with all three main sections:
                  CardHeader, CardContent, and CardFooter.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="primary">Primary Action</Button>
                <Button size="sm" variant="outline-default">Secondary Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardContent className="pt-5">
                <Text variant="body-sm">
                  This card uses only CardContent without a header or footer,
                  useful for simpler content display with minimal structure.
                </Text>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Header Only</CardTitle>
                <CardDescription>Card with just a header component</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Header + Footer</CardTitle>
                <CardDescription>Card with header and footer (no content)</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" variant="primary">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 4: Complex Card Examples */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-orange-500"></div>
            <h3 className="text-lg font-semibold">Complex Card Examples</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>User Profile</CardTitle>
                  <Button variant="icon-default" size="icon-sm">
                    <IconSettings size={16} />
                  </Button>
                </div>
                <CardDescription>Interactive card with custom layout</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <IconUser size={24} />
                    </div>
                  </div>
                  <div>
                    <Text variant="body" className="font-medium">Jane Smith</Text>
                    <Text variant="body-sm" className="text-gray-600">Product Designer</Text>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <Button variant="soft-primary" size="sm" className="flex-1">
                    <IconUser size={16} />
                    <span>Follow</span>
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1">
                    <IconStar size={16} />
                    <span>Favorite</span>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="text-primary" size="sm" className="ml-auto">
                  <span>View Profile</span>
                  <IconArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Example form inside card</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" placeholder="Enter your email" />
                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  rows={3}
                />
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button variant="outline-default">Cancel</Button>
                <Button variant="primary">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Section 5: Custom Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-pink-500"></div>
            <h3 className="text-lg font-semibold">Custom Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconHome size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Documents</h3>
                    <p className="text-sm text-gray-500">24 files</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
                  <p className="text-gray-600 mb-6">Get started with your new dashboard.</p>
                  <Button variant="primary">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 6: Design Specifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-indigo-500"></div>
            <h3 className="text-lg font-semibold">Design Specifications</h3>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <Heading level={3} className="text-lg text-gray-900">Card Design Specifications</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Card Variants</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Default: White background with shadow-sm</div>
                  <div>• Elevated: White background with shadow-md</div>
                  <div>• Outlined: White background, 2px border, no shadow</div>
                  <div>• Filled: Light gray background (gray-50), no shadow</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Padding Options</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Small: 16px padding (compact layout)</div>
                  <div>• Medium: 24px padding (default layout)</div>
                  <div>• Large: 32px padding (spacious layout)</div>
                  <div>• Custom: Any padding value via className</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Component Structure</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• CardHeader: Title and optional description</div>
                  <div>• CardContent: Main content area</div>
                  <div>• CardFooter: Action buttons and controls</div>
                  <div>• All sections are optional and composable</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Text variant="body-sm" className="font-semibold text-gray-900">Design Tokens</Text>
                <div className="space-y-1 text-sm text-gray-700">
                  <div>• Border Radius: 8px (rounded-lg)</div>
                  <div>• Box Shadow: shadow-sm (default), shadow-md (elevated)</div>
                  <div>• Border: 2px solid gray-200 (outlined)</div>
                  <div>• Background: white or gray-50 (filled)</div>
                  <div>• Typography: Plus Jakarta Sans</div>
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

// Client-safe Typography Showcase
export function ClientSafeTypographyShowcase({ 
  children, 
  code, 
  title = "Typography Examples",
  description = "Interactive typography system with headings, text variants, and color options"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [selectedHeadingLevel, setSelectedHeadingLevel] = useState<1 | 2 | 3 | 4 | 5 | 6>(2);
  const [selectedTextVariant, setSelectedTextVariant] = useState<'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'caption'>('body');
  const [selectedColor, setSelectedColor] = useState<'primary' | 'secondary' | 'brand' | 'white'>('primary');
  const [customText, setCustomText] = useState('Your custom text here');

  return (
    <ComponentShowcase title={title} description={description} code={code}>
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

// Client-safe Breadcrumb Showcase
export function ClientSafeBreadcrumbShowcase({ 
  children, 
  code, 
  title = "Breadcrumb Component",
  description = "Navigation breadcrumb with text and icon variants following ForteUI design specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Text Variant */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Text Variant (Default)</Text>
          <div className="space-y-4">
            <Breadcrumb
              variant="text"
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Smartphones' }
              ]}
            />
            
            <Breadcrumb
              variant="text"
              items={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Settings', href: '/dashboard/settings' },
                { label: 'Profile', href: '/dashboard/settings/profile' },
                { label: 'Edit Profile' }
              ]}
            />
          </div>
        </div>

        {/* Icon Variant */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Icon Variant</Text>
          <div className="space-y-4">
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Home', href: '/', icon: IconHome },
                { label: 'Products', href: '/products', icon: IconShoppingCart },
                { label: 'Smartphones', icon: IconUser }
              ]}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Dashboard', href: '/dashboard', icon: IconHome },
                { label: 'Users', href: '/dashboard/users', icon: IconUser },
                { label: 'Settings', href: '/dashboard/settings', icon: IconSettings },
                { label: 'Profile', icon: IconUser }
              ]}
            />
          </div>
        </div>

        {/* Interactive Navigation */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Interactive Navigation</Text>
          <div className="space-y-4">
            <Breadcrumb
              items={[
                { 
                  label: 'Home', 
                  onClick: () => alert('Navigate to Home') 
                },
                { 
                  label: 'Products', 
                  onClick: () => alert('Navigate to Products') 
                },
                { 
                  label: 'Current Page' 
                }
              ]}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { 
                  label: 'Dashboard', 
                  icon: IconHome,
                  onClick: () => alert('Navigate to Dashboard') 
                },
                { 
                  label: 'Analytics', 
                  icon: IconStar,
                  onClick: () => alert('Navigate to Analytics') 
                },
                { 
                  label: 'Reports',
                  icon: IconEye
                }
              ]}
            />
          </div>
        </div>

        {/* Custom Separator */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Custom Separator</Text>
          <div className="space-y-4">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Documentation', href: '/docs' },
                { label: 'Components', href: '/docs/components' },
                { label: 'Breadcrumb' }
              ]}
              separator={<IconArrowRight size={12} className="text-gray-400" />}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Admin', href: '/admin', icon: IconSettings },
                { label: 'Users', href: '/admin/users', icon: IconUser },
                { label: 'John Doe', icon: IconUser }
              ]}
              separator={<span className="text-gray-400 text-sm">/</span>}
            />
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="space-y-4">
          <Text variant="caption" color="secondary" className="mb-3 block">Real-world Examples</Text>
          <div className="space-y-6">
            <div className="space-y-3">
              <Text variant="body-sm" className="mb-2 block font-medium">E-commerce Product Page</Text>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Breadcrumb
                  variant="icon"
                  items={[
                    { label: 'Home', href: '/', icon: IconHome },
                    { label: 'Electronics', href: '/electronics', icon: IconSettings },
                    { label: 'Smartphones', href: '/electronics/smartphones', icon: IconUser },
                    { label: 'iPhone 15 Pro', icon: IconStar }
                  ]}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <Text variant="body-sm" className="mb-2 block font-medium">Admin Dashboard</Text>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Breadcrumb
                  items={[
                    { label: 'Dashboard', href: '/admin' },
                    { label: 'Content Management', href: '/admin/content' },
                    { label: 'Blog Posts', href: '/admin/content/posts' },
                    { label: 'Edit: "Getting Started Guide"' }
                  ]}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <Text variant="body-sm" className="mb-2 block font-medium">Documentation Site</Text>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Breadcrumb
                  variant="icon"
                  items={[
                    { label: 'Docs', href: '/docs', icon: IconHome },
                    { label: 'Components', href: '/docs/components', icon: IconSettings },
                    { label: 'Navigation', href: '/docs/components/navigation', icon: IconArrowRight },
                    { label: 'Breadcrumb', icon: IconArrowRight }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <Text variant="body-sm" className="font-medium mb-3 block">Design Specifications:</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Typography:</Text>
              <ul className="space-y-1">
                <li>• Font: Public Sans (font-sans)</li>
                <li>• Size: 14px (text-sm)</li>
                <li>• Weight: 400 (font-normal)</li>
                <li>• Line Height: 22px</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Colors:</Text>
              <ul className="space-y-1">
                <li>• Active: text-primary (#1F2933)</li>
                <li>• Current: text-disabled</li>
                <li>• Hover: text-primary-600</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Spacing:</Text>
              <ul className="space-y-1">
                <li>• Item Gap: 16px (gap-4)</li>
                <li>• Icon-Text Gap: 4px (gap-1)</li>
                <li>• Icon Size: 20px × 20px</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Features:</Text>
              <ul className="space-y-1">
                <li>• Two variants: text, icon</li>
                <li>• Custom separators</li>
                <li>• ARIA compliant</li>
                <li>• Keyboard navigation</li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Snackbar Showcase
export function ClientSafeSnackbarShowcase({ 
  children, 
  code, 
  title = "Snackbar Examples",
  description = "Snackbar component for displaying brief notifications with optional actions, following Figma specifications"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [triggerSnackbar, setTriggerSnackbar] = useState<string | null>(null);

  const handleAction = (type: string) => {
    console.log(`${type} action clicked`);
    // Auto-hide after action
    if (triggerSnackbar === type) {
      setTriggerSnackbar(null);
    }
  };

  const handleClose = (type: string) => {
    console.log(`${type} snackbar closed`);
    setTriggerSnackbar(null);
  };

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        {/* Default Variant - Dark Theme */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Default Variant - Dark Theme with Close Button:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Default Dark Snackbar</Text>
              <Snackbar
                variant="default"
                severity="default"
                message="This is a default message!"
                closable
                onClose={() => handleClose('default')}
              />
            </div>
          </div>
        </div>

        {/* Action Variant - Semantic Colors */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Action Variant - Semantic Colors with Action Buttons:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Info Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="info"
                message="This is a info message!"
                actionLabel="Action"
                onAction={() => handleAction('info')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Success Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="success"
                message="This is a success message!"
                actionLabel="Action"
                onAction={() => handleAction('success')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Warning Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="warning"
                message="This is a warning message!"
                actionLabel="Action"
                onAction={() => handleAction('warning')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Error Snackbar with Action</Text>
              <Snackbar
                variant="action"
                severity="error"
                message="This is a error message!"
                actionLabel="Action"
                onAction={() => handleAction('error')}
              />
            </div>
          </div>
        </div>

        {/* Default Variant with Semantic Icons and Close */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Default Variant - Semantic Icons with Close Button:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Info with Close</Text>
              <Snackbar
                variant="default"
                severity="info"
                message="This is a info message with close!"
                closable
                onClose={() => handleClose('info-close')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Success with Close</Text>
              <Snackbar
                variant="default"
                severity="success"
                message="This is a success message with close!"
                closable
                onClose={() => handleClose('success-close')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Warning with Close</Text>
              <Snackbar
                variant="default"
                severity="warning"
                message="This is a warning message with close!"
                closable
                onClose={() => handleClose('warning-close')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Error with Close</Text>
              <Snackbar
                variant="default"
                severity="error"
                message="This is a error message with close!"
                closable
                onClose={() => handleClose('error-close')}
              />
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Interactive Examples:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-3 text-gray-600">Trigger Different Snackbars</Text>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  className="px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-info')}
                >
                  Show Info Action
                </button>
                <button
                  className="px-4 py-2 bg-success-main text-white rounded-lg hover:bg-success-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-success')}
                >
                  Show Success Action
                </button>
                <button
                  className="px-4 py-2 bg-warning-main text-gray-800 rounded-lg hover:bg-warning-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-warning')}
                >
                  Show Warning Action
                </button>
                <button
                  className="px-4 py-2 bg-error-main text-white rounded-lg hover:bg-error-dark transition-colors"
                  onClick={() => setTriggerSnackbar('interactive-error')}
                >
                  Show Error Action
                </button>
              </div>

              {/* Interactive Snackbars */}
              <div className="space-y-3">
                {triggerSnackbar === 'interactive-info' && (
                  <Snackbar
                    variant="action"
                    severity="info"
                    message="Interactive info message triggered!"
                    actionLabel="Undo"
                    onAction={() => handleAction('interactive-info')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
                
                {triggerSnackbar === 'interactive-success' && (
                  <Snackbar
                    variant="action"
                    severity="success"
                    message="Operation completed successfully!"
                    actionLabel="View Details"
                    onAction={() => handleAction('interactive-success')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
                
                {triggerSnackbar === 'interactive-warning' && (
                  <Snackbar
                    variant="action"
                    severity="warning"
                    message="Please review your input before proceeding!"
                    actionLabel="Review"
                    onAction={() => handleAction('interactive-warning')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
                
                {triggerSnackbar === 'interactive-error' && (
                  <Snackbar
                    variant="action"
                    severity="error"
                    message="Something went wrong. Please try again!"
                    actionLabel="Retry"
                    onAction={() => handleAction('interactive-error')}
                    closable
                    onClose={() => setTriggerSnackbar(null)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Real-world Scenarios */}
        <div className="space-y-4">
          <Text variant="body-sm" className="font-medium">Real-world Scenarios:</Text>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Form Submission Success</Text>
              <Snackbar
                variant="action"
                severity="success"
                message="Form submitted successfully!"
                actionLabel="View"
                onAction={() => handleAction('form-success')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Network Error with Retry</Text>
              <Snackbar
                variant="action"
                severity="error"
                message="Failed to save changes"
                actionLabel="Retry"
                onAction={() => handleAction('error-retry')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">File Upload Warning</Text>
              <Snackbar
                variant="default"
                severity="warning"
                message="File size is larger than recommended"
                closable
                onClose={() => handleClose('file-warning')}
              />
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <Text variant="body-sm" className="mb-2 text-gray-600">Task Notification</Text>
              <Snackbar
                variant="default"
                severity="info"
                message="Background sync completed"
                closable
                onClose={() => handleClose('sync-info')}
              />
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}

// Client-safe Progress Showcase
export function ClientSafeProgressShowcase({ 
  children, 
  code, 
  title = "Progress Component",
  description = "Progress indicators with linear and circular variants using semantic colors"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  const [animatedValue, setAnimatedValue] = useState(0);

  // Animate progress for demo
  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8">
        {/* Linear Progress - Basic Colors */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Linear Progress - Basic Colors</h4>
          <div className="space-y-3">
            <Progress variant="linear" value={80} color="default" />
            <Progress variant="linear" value={65} color="primary" />
            <Progress variant="linear" value={45} color="secondary" />
            <Progress variant="linear" value={90} color="info" />
            <Progress variant="linear" value={75} color="success" />
            <Progress variant="linear" value={55} color="warning" />
            <Progress variant="linear" value={35} color="error" />
          </div>
        </div>

        {/* Linear Progress - Different Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Linear Progress - Sizes</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Small (8px height)</p>
              <Progress variant="linear" value={60} color="primary" size="sm" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Medium (4px height)</p>
              <Progress variant="linear" value={60} color="primary" size="md" />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Large (6px height)</p>
              <Progress variant="linear" value={60} color="primary" size="lg" />
            </div>
          </div>
        </div>

        {/* Linear Progress - Custom Labels */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Linear Progress - Custom Labels</h4>
          <div className="space-y-3">
            <Progress variant="linear" value={85} color="success" label="Upload Complete" />
            <Progress variant="linear" value={45} color="warning" label="In Progress..." />
            <Progress variant="linear" value={75} color="success" showLabel={false} />
          </div>
        </div>

        {/* Circular Progress - All Colors */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Circular Progress - All Colors</h4>
          <div className="flex flex-wrap gap-6">
            <Progress variant="circular" value={80} color="default" />
            <Progress variant="circular" value={80} color="primary" />
            <Progress variant="circular" value={80} color="secondary" />
            <Progress variant="circular" value={80} color="info" />
            <Progress variant="circular" value={80} color="success" />
            <Progress variant="circular" value={80} color="warning" />
            <Progress variant="circular" value={80} color="error" />
          </div>
        </div>

        {/* Circular Progress - Sizes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Circular Progress - Sizes</h4>
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
        </div>

        {/* Circular Progress - Custom Labels */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Circular Progress - Custom Labels</h4>
          <div className="flex flex-wrap gap-6">
            <Progress variant="circular" value={100} color="success" label="Done" size="lg" />
            <Progress variant="circular" value={45} color="info" label="45/100" size="lg" />
            <Progress variant="circular" value={90} color="warning" showLabel={false} size="md" />
          </div>
        </div>

        {/* Interactive Progress */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Interactive Progress (Animated)</h4>
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
        </div>

        {/* Progress States */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Progress States</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="text-sm font-medium">Linear States</h5>
              <Progress variant="linear" value={0} color="error" label="0% - Not Started" />
              <Progress variant="linear" value={25} color="warning" label="25% - Getting Started" />
              <Progress variant="linear" value={50} color="info" label="50% - Halfway" />
              <Progress variant="linear" value={75} color="primary" label="75% - Almost Done" />
              <Progress variant="linear" value={100} color="success" label="100% - Complete!" />
            </div>
            <div className="space-y-3">
              <h5 className="text-sm font-medium">Circular States</h5>
              <div className="flex flex-wrap gap-4">
                <Progress variant="circular" value={0} color="error" />
                <Progress variant="circular" value={25} color="warning" />
                <Progress variant="circular" value={50} color="info" />
                <Progress variant="circular" value={75} color="primary" />
                <Progress variant="circular" value={100} color="success" />
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">Accessibility Features</h4>
          <div className="space-y-3">
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
        </div>
      </div>
      {children}
    </ComponentShowcase>
  );
}

// Client-safe Button Showcase
export function ClientSafeButtonShowcase({ 
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
