'use client';

import React, { useState } from 'react';
import { Chip, Text } from '@forteui/core';
import { IconUser, IconSettings, IconCheck, IconChevronDown, IconX, IconArrowRight, IconStar, IconMail, IconAlertTriangle, IconTrash } from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeChipShowcase({ 
  children, 
  code
}: {
  children?: React.ReactNode;
  code?: string;
}) {
  const [removedChips, setRemovedChips] = useState<string[]>([]);

  const handleRemoveChip = (chipId: string) => {
    setRemovedChips(prev => [...prev, chipId]);
  };

  const isChipRemoved = (chipId: string) => removedChips.includes(chipId);

  return (
    <ComponentShowcase code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic States - Filled Chips */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Filled Chips - All Colors</Text>
          </div>
          <div className="space-y-4">
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Medium Size (32px height)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip variant="filled" color="default" size="medium">Default</Chip>
                <Chip variant="filled" color="primary" size="medium">Primary</Chip>
                <Chip variant="filled" color="secondary" size="medium">Secondary</Chip>
                <Chip variant="filled" color="info" size="medium">Info</Chip>
                <Chip variant="filled" color="success" size="medium">Success</Chip>
                <Chip variant="filled" color="warning" size="medium">Warning</Chip>
                <Chip variant="filled" color="error" size="medium">Error</Chip>
              </div>
            </div>
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Small Size (24px height)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip variant="filled" color="default" size="small">Default</Chip>
                <Chip variant="filled" color="primary" size="small">Primary</Chip>
                <Chip variant="filled" color="secondary" size="small">Secondary</Chip>
                <Chip variant="filled" color="info" size="small">Info</Chip>
                <Chip variant="filled" color="success" size="small">Success</Chip>
                <Chip variant="filled" color="warning" size="small">Warning</Chip>
                <Chip variant="filled" color="error" size="small">Error</Chip>
              </div>
            </div>
          </div>
        </div>

        {/* Variants - Outlined Chips */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Outlined Chips - All Colors</Text>
          </div>
          <div className="space-y-4">
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Medium Size (32px height)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip variant="outlined" color="default" size="medium">Default</Chip>
                <Chip variant="outlined" color="primary" size="medium">Primary</Chip>
                <Chip variant="outlined" color="secondary" size="medium">Secondary</Chip>
                <Chip variant="outlined" color="info" size="medium">Info</Chip>
                <Chip variant="outlined" color="success" size="medium">Success</Chip>
                <Chip variant="outlined" color="warning" size="medium">Warning</Chip>
                <Chip variant="outlined" color="error" size="medium">Error</Chip>
              </div>
            </div>
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Small Size (24px height)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip variant="outlined" color="default" size="small">Default</Chip>
                <Chip variant="outlined" color="primary" size="small">Primary</Chip>
                <Chip variant="outlined" color="secondary" size="small">Secondary</Chip>
                <Chip variant="outlined" color="info" size="small">Info</Chip>
                <Chip variant="outlined" color="success" size="small">Success</Chip>
                <Chip variant="outlined" color="warning" size="small">Warning</Chip>
                <Chip variant="outlined" color="error" size="small">Error</Chip>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features - Soft Chips */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Soft Chips - All Colors</Text>
          </div>
          <div className="space-y-4">
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Medium Size (32px height)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip variant="soft" color="default" size="medium">Default</Chip>
                <Chip variant="soft" color="primary" size="medium">Primary</Chip>
                <Chip variant="soft" color="secondary" size="medium">Secondary</Chip>
                <Chip variant="soft" color="info" size="medium">Info</Chip>
                <Chip variant="soft" color="success" size="medium">Success</Chip>
                <Chip variant="soft" color="warning" size="medium">Warning</Chip>
                <Chip variant="soft" color="error" size="medium">Error</Chip>
              </div>
            </div>
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Small Size (24px height)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip variant="soft" color="default" size="small">Default</Chip>
                <Chip variant="soft" color="primary" size="small">Primary</Chip>
                <Chip variant="soft" color="secondary" size="small">Secondary</Chip>
                <Chip variant="soft" color="info" size="small">Info</Chip>
                <Chip variant="soft" color="success" size="small">Success</Chip>
                <Chip variant="soft" color="warning" size="small">Warning</Chip>
                <Chip variant="soft" color="error" size="small">Error</Chip>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styling - Action Icon System */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Action Icon System</Text>
          </div>
          <div className="space-y-4">
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Start Icons (Left Side)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip 
                  variant="filled" 
                  color="primary" 
                  size="medium"
                  startIcon={<IconUser />}
                  onStartIconClick={() => console.log('User icon clicked')}
                >
                  User Profile
                </Chip>
                <Chip 
                  variant="outlined" 
                  color="info" 
                  size="medium"
                  startIcon={<IconSettings />}
                  onStartIconClick={() => console.log('Settings clicked')}
                >
                  Settings
                </Chip>
                <Chip 
                  variant="soft" 
                  color="success" 
                  size="medium"
                  startIcon={<IconCheck />}
                  onStartIconClick={() => console.log('Check clicked')}
                >
                  Completed
                </Chip>
              </div>
            </div>
            
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">End Icons (Right Side)</Text>
              <div className="flex flex-wrap gap-3">
                <Chip 
                  variant="filled" 
                  color="warning" 
                  size="medium"
                  endIcon={<IconChevronDown />}
                  onEndIconClick={() => console.log('Dropdown clicked')}
                >
                  Category
                </Chip>
                <Chip 
                  variant="outlined" 
                  color="error" 
                  size="medium"
                  endIcon={<IconX />}
                  onEndIconClick={() => console.log('Close clicked')}
                >
                  Remove
                </Chip>
                <Chip 
                  variant="soft" 
                  color="secondary" 
                  size="medium"
                  endIcon={<IconArrowRight />}
                  onEndIconClick={() => console.log('Arrow clicked')}
                >
                  Next Step
                </Chip>
              </div>
            </div>
            
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Both Start & End Icons</Text>
              <div className="flex flex-wrap gap-3">
                <Chip 
                  variant="filled" 
                  color="info" 
                  size="medium"
                  startIcon={<IconStar />}
                  endIcon={<IconX />}
                  onStartIconClick={() => console.log('Star clicked')}
                  onEndIconClick={() => console.log('Remove favorite')}
                >
                  Favorite
                </Chip>
                <Chip 
                  variant="outlined" 
                  color="primary" 
                  size="medium"
                  startIcon={<IconMail />}
                  endIcon={<IconChevronDown />}
                  onStartIconClick={() => console.log('Mail clicked')}
                  onEndIconClick={() => console.log('Options clicked')}
                >
                  Messages
                </Chip>
              </div>
            </div>
            
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Small Size with Action Icons</Text>
              <div className="flex flex-wrap gap-3">
                <Chip 
                  variant="soft" 
                  color="success" 
                  size="small"
                  startIcon={<IconCheck />}
                  onStartIconClick={() => console.log('Check clicked')}
                >
                  Done
                </Chip>
                <Chip 
                  variant="outlined" 
                  color="warning" 
                  size="small"
                  endIcon={<IconAlertTriangle />}
                  onEndIconClick={() => console.log('Warning clicked')}
                >
                  Alert
                </Chip>
                <Chip 
                  variant="filled" 
                  color="error" 
                  size="small"
                  startIcon={<IconTrash />}
                  endIcon={<IconX />}
                  onStartIconClick={() => console.log('Delete action')}
                  onEndIconClick={() => console.log('Close')}
                >
                  Delete
                </Chip>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Usage - Interactive Removable Chips */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Interactive Tag Management</Text>
          </div>
          <div className="space-y-4">
            <div>
              <Text variant="caption" className="block mb-2 text-gray-600">Removable Tags (Click X to remove)</Text>
              <div className="flex flex-wrap gap-3">
                {!isChipRemoved('react') && (
                  <Chip 
                    variant="filled" 
                    color="primary" 
                    size="medium"
                    endIcon={<IconX />}
                    onEndIconClick={() => handleRemoveChip('react')}
                  >
                    React
                  </Chip>
                )}
                {!isChipRemoved('typescript') && (
                  <Chip 
                    variant="outlined" 
                    color="info" 
                    size="medium"
                    endIcon={<IconX />}
                    onEndIconClick={() => handleRemoveChip('typescript')}
                  >
                    TypeScript
                  </Chip>
                )}
                {!isChipRemoved('tailwind') && (
                  <Chip 
                    variant="soft" 
                    color="secondary" 
                    size="medium"
                    endIcon={<IconX />}
                    onEndIconClick={() => handleRemoveChip('tailwind')}
                  >
                    Tailwind CSS
                  </Chip>
                )}
                {!isChipRemoved('nextjs') && (
                  <Chip 
                    variant="filled" 
                    color="success" 
                    size="medium"
                    endIcon={<IconX />}
                    onEndIconClick={() => handleRemoveChip('nextjs')}
                  >
                    Next.js
                  </Chip>
                )}
              </div>
              {removedChips.length > 0 && (
                <button 
                  onClick={() => setRemovedChips([])}
                  className="text-sm text-blue-600 hover:text-blue-800 underline mt-2"
                >
                  Reset removed chips ({removedChips.length} removed)
                </button>
              )}
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
