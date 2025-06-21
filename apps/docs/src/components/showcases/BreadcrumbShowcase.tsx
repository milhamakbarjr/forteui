'use client';

import React from 'react';
import { Text, Breadcrumb } from '@forteui/core';
import { IconHome, IconShoppingCart, IconUser, IconSettings, IconStar, IconEye, IconArrowRight } from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

export function BreadcrumbShowcase({ 
  children, 
  code, 
  title = "Breadcrumb Component",
  description = "Navigation breadcrumb with text and icon variants"
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
                { label: 'Home', href: '/docs/components/breadcrumb/' },
                { label: 'Products', href: '/docs/components/breadcrumb/' },
                { label: 'Smartphones', href: '/docs/components/breadcrumb/' }
              ]}
            />
            
            <Breadcrumb
              variant="text"
              items={[
                { label: 'Dashboard', href: '/docs/components/breadcrumb/' },
                { label: 'Settings', href: '/docs/components/breadcrumb/' },
                { label: 'Profile', href: '/docs/components/breadcrumb/' },
                { label: 'Edit Profile', href: '/docs/components/breadcrumb/' }
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
                { label: 'Home', href: '/docs/components/breadcrumb/', icon: IconHome },
                { label: 'Products', href: '/docs/components/breadcrumb/', icon: IconShoppingCart },
                { label: 'Smartphones', href: '/docs/components/breadcrumb/', icon: IconUser }
              ]}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Dashboard', href: '/docs/components/breadcrumb/', icon: IconHome },
                { label: 'Users', href: '/docs/components/breadcrumb/', icon: IconUser },
                { label: 'Settings', href: '/docs/components/breadcrumb/', icon: IconSettings },
                { label: 'Profile', href: '/docs/components/breadcrumb/', icon: IconUser }
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
                { label: 'Home', href: '/docs/components/breadcrumb/' },
                { label: 'Documentation', href: '/docs/components/breadcrumb/' },
                { label: 'Components', href: '/docs/components/breadcrumb/' },
                { label: 'Breadcrumb' }
              ]}
              separator={<IconArrowRight size={12} className="text-gray-400" />}
            />
            
            <Breadcrumb
              variant="icon"
              items={[
                { label: 'Admin', href: '/docs/components/breadcrumb/', icon: IconSettings },
                { label: 'Users', href: '/docs/components/breadcrumb/', icon: IconUser },
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
                    { label: 'Home', href: '/docs/components/breadcrumb/', icon: IconHome },
                    { label: 'Electronics', href: '/docs/components/breadcrumb/', icon: IconSettings },
                    { label: 'Smartphones', href: '/docs/components/breadcrumb/', icon: IconUser },
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
                    { label: 'Dashboard', href: '/docs/components/breadcrumb/' },
                    { label: 'Content Management', href: '/docs/components/breadcrumb/' },
                    { label: 'Blog Posts', href: '/docs/components/breadcrumb/' },
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
                    { label: 'Docs', href: '/docs/components/breadcrumb/', icon: IconHome },
                    { label: 'Components', href: '/docs/components/breadcrumb/', icon: IconSettings },
                    { label: 'Navigation', href: '/docs/components/breadcrumb/', icon: IconArrowRight },
                    { label: 'Breadcrumb', icon: IconArrowRight }
                  ]}
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
