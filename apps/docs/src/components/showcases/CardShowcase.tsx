'use client';

import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, Text, Heading, Button, Input, Textarea } from '@forteui/core';
import { IconSettings, IconUser, IconStar, IconArrowRight, IconHome } from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

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
