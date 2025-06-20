'use client';

import React, { useState } from 'react';
import { Badge, Button } from '@forteui/core';
import { IconMail, IconShoppingCart, IconSearch, IconUser, IconSettings, IconInfoCircle, IconCheck, IconAlertTriangle, IconX } from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeBadgeShowcase({ 
  children, 
  code, 
  title = "Badge Examples",
  description = "Badge wrapper component for displaying count numbers or dot indicators on top of child elements"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  // Interactive state for counter examples
  const [notificationCount, setNotificationCount] = useState(3);
  const [messageCount, setMessageCount] = useState(12);
  const [cartCount, setCartCount] = useState(0);

  const incrementNotifications = () => setNotificationCount(prev => prev + 1);
  const incrementMessages = () => setMessageCount(prev => prev + 1);
  const incrementCart = () => setCartCount(prev => prev + 1);
  const resetCounts = () => {
    setNotificationCount(0);
    setMessageCount(0);
    setCartCount(0);
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
              <h4 className="font-medium text-gray-700">Number Badges</h4>
              <div className="flex items-center gap-6">
                <Badge variant="primary" count={5}>
                  <IconMail size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="success" count={12}>
                  <IconShoppingCart size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="warning" count={99}>
                  <IconSearch size={24} className="text-gray-700" />
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Dot Badges</h4>
              <div className="flex items-center gap-6">
                <Badge variant="success" type="dot">
                  <IconUser size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="warning" type="dot">
                  <IconSettings size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="error" type="dot">
                  <IconInfoCircle size={24} className="text-gray-700" />
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Variant Coverage */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-purple-500"></div>
            <h3 className="text-lg font-semibold">All Variant Colors</h3>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Number Badge Variants</h4>
            <div className="flex items-center gap-6 flex-wrap">
              <Badge variant="default" count={1}>
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="primary" count={5}>
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="secondary" count={12}>
                <IconShoppingCart size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="info" count={8}>
                <IconInfoCircle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="success" count={3}>
                <IconCheck size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="warning" count={99}>
                <IconAlertTriangle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="error" count={100}>
                <IconX size={24} className="text-gray-700" />
              </Badge>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Dot Badge Variants</h4>
            <div className="flex items-center gap-6 flex-wrap">
              <Badge variant="default" type="dot">
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="primary" type="dot">
                <IconMail size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="secondary" type="dot">
                <IconShoppingCart size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="info" type="dot">
                <IconInfoCircle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="success" type="dot">
                <IconCheck size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="warning" type="dot">
                <IconAlertTriangle size={24} className="text-gray-700" />
              </Badge>
              <Badge variant="error" type="dot">
                <IconX size={24} className="text-gray-700" />
              </Badge>
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-orange-500"></div>
            <h3 className="text-lg font-semibold">Interactive Features</h3>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Overflow Handling (99+ Display)</h4>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={99}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={99}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={100}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={100}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={999}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={999}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={1234}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">count={1234}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Interactive Counter Examples</h4>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="error" count={notificationCount}>
                    <IconMail size={32} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
                  </Badge>
                  <button 
                    onClick={incrementNotifications}
                    className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded"
                  >
                    Add Notification ({notificationCount})
                  </button>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={messageCount}>
                    <IconShoppingCart size={32} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
                  </Badge>
                  <button 
                    onClick={incrementMessages}
                    className="text-xs bg-green-100 hover:bg-green-200 px-2 py-1 rounded"
                  >
                    Add Message ({messageCount})
                  </button>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Badge variant="success" count={cartCount} showZero>
                    <IconShoppingCart size={32} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
                  </Badge>
                  <button 
                    onClick={incrementCart}
                    className="text-xs bg-orange-100 hover:bg-orange-200 px-2 py-1 rounded"
                  >
                    Add to Cart ({cartCount})
                  </button>
                </div>

                <button 
                  onClick={resetCounts}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded self-end"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Advanced Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <h3 className="text-lg font-semibold">Advanced Features</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">showZero Prop</h4>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={0}>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">Hidden (default)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="primary" count={0} showZero>
                    <IconMail size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">showZero={true}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Custom max Prop</h4>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="warning" count={150} max={50}>
                    <IconAlertTriangle size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">max={50}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Badge variant="error" count={1500} max={999}>
                    <IconX size={24} className="text-gray-700" />
                  </Badge>
                  <span className="text-xs text-gray-600">max={999}</span>
                </div>
              </div>
            </div>
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
              <h4 className="font-medium text-gray-700">Different Icon Sizes</h4>
              <div className="flex items-center gap-6">
                <Badge variant="primary" count={3}>
                  <IconMail size={16} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={3}>
                  <IconMail size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={3}>
                  <IconMail size={32} className="text-gray-700" />
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Custom Child Elements</h4>
              <div className="flex items-center gap-6">
                <Badge variant="error" count={5}>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconUser size={20} className="text-blue-700" />
                  </div>
                </Badge>
                <Badge variant="success" type="dot">
                  <Button variant="outline-primary" size="sm">
                    Profile
                  </Button>
                </Badge>
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
              <h4 className="font-medium mb-3">Badge Positioning</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Absolute positioning with CSS top/right offsets</li>
                <li>• Number badges: -top-2, dynamic right positioning</li>
                <li>• Dot badges: -top-1.5, -right-1.5 for consistent placement</li>
                <li>• White border (2px) for separation from background</li>
                <li>• Automatic positioning adjustment based on count length</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Typography & Sizing</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Font size: 12px (text-xs) with font-bold weight</li>
                <li>• Minimum size: 20px height/width for number badges</li>
                <li>• Dot badges: 10px width/height (w-2.5 h-2.5)</li>
                <li>• Padding: 6px horizontal for number badges (px-1.5)</li>
                <li>• Fully rounded corners (rounded-full)</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Overflow Handling</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Default max: 99 (shows "99+" for counts ≥ 100)</li>
                <li>• Customizable max prop for different overflow points</li>
                <li>• Dynamic positioning based on formatted count length</li>
                <li>• Single digit: -right-3, Double/triple: -right-4/-right-6</li>
                <li>• Maintains readability with automatic width adjustment</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Accessibility & Props</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• children (ReactNode): Required wrapper content</li>
                <li>• count (number): Badge count value</li>
                <li>• showZero (boolean): Show badge when count is 0</li>
                <li>• max (number): Maximum before showing "max+"</li>
                <li>• type ("number" | "dot"): Badge display type</li>
                <li>• variant: 7 semantic colors available</li>
              </ul>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </ComponentShowcase>
  );
}
