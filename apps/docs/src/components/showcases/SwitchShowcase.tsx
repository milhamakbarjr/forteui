'use client';

import React, { useState } from 'react';
import { Switch, Text, Heading } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeSwitchShowcase({ 
  children, 
  code
}: {
  children?: React.ReactNode;
  code?: string;
}) {
  const [basicStates, setBasicStates] = useState({
    notifications: false,
    darkMode: true,
    autoSave: false,
    newsletter: false,
    rememberMe: true,
    twoFactor: false,
  });

  const [semanticStates, setSemanticStates] = useState({
    default: false,
    primary: true,
    secondary: true,
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  const [sizeStates, setSizeStates] = useState({
    small: true,
    medium: true,
  });

  const [interactiveStates, setInteractiveStates] = useState({
    unchecked: false,
    checked: true,
    disabled: false,
    disabledChecked: true,
  });

  return (
    <ComponentShowcase code={code}>
      <div className="space-y-8 forte-ui">
        {/* Basic States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Basic States</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Settings Toggle</Text>
              <div className="space-y-3">
                <Switch
                  label="Enable notifications"
                  checked={basicStates.notifications}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, notifications: checked }))
                  }
                  color="primary"
                  size="medium"
                />
                <Switch
                  label="Dark mode"
                  checked={basicStates.darkMode}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, darkMode: checked }))
                  }
                  color="secondary"
                  size="medium"
                />
                <Switch
                  label="Auto-save drafts"
                  checked={basicStates.autoSave}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, autoSave: checked }))
                  }
                  color="success"
                  size="medium"
                />
              </div>
            </div>
            <div className="space-y-4">
              <Text variant="body-sm" className="font-medium text-gray-600">Form Controls</Text>
              <div className="space-y-3">
                <Switch
                  label="Subscribe to newsletter"
                  checked={basicStates.newsletter}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, newsletter: checked }))
                  }
                  color="info"
                  size="medium"
                />
                <Switch
                  label="Remember me"
                  checked={basicStates.rememberMe}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, rememberMe: checked }))
                  }
                  color="primary"
                  size="small"
                />
                <Switch
                  label="Enable two-factor authentication"
                  checked={basicStates.twoFactor}
                  onCheckedChange={(checked) =>
                    setBasicStates(prev => ({ ...prev, twoFactor: checked }))
                  }
                  color="warning"
                  size="medium"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Sizes</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-600">Small (25px × 18px)</Text>
              <Switch
                label="Small Switch"
                size="small"
                color="primary"
                checked={sizeStates.small}
                onCheckedChange={(checked) =>
                  setSizeStates(prev => ({ ...prev, small: checked }))
                }
              />
            </div>
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-600">Medium (33px × 20px)</Text>
              <Switch
                label="Medium Switch"
                size="medium"
                color="primary"
                checked={sizeStates.medium}
                onCheckedChange={(checked) =>
                  setSizeStates(prev => ({ ...prev, medium: checked }))
                }
              />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Semantic Color Variants</Text>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Default</Text>
              <Switch
                label="Default"
                color="default"
                checked={semanticStates.default}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, default: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Primary</Text>
              <Switch
                label="Primary"
                color="primary"
                checked={semanticStates.primary}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, primary: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Secondary</Text>
              <Switch
                label="Secondary"
                color="secondary"
                checked={semanticStates.secondary}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, secondary: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Info</Text>
              <Switch
                label="Info"
                color="info"
                checked={semanticStates.info}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, info: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Success</Text>
              <Switch
                label="Success"
                color="success"
                checked={semanticStates.success}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, success: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Warning</Text>
              <Switch
                label="Warning"
                color="warning"
                checked={semanticStates.warning}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, warning: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Error</Text>
              <Switch
                label="Error"
                color="error"
                checked={semanticStates.error}
                onCheckedChange={(checked) =>
                  setSemanticStates(prev => ({ ...prev, error: checked }))
                }
              />
            </div>
          </div>
        </div>

        {/* Interactive States */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Interactive States</Text>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Unchecked</Text>
              <Switch
                label="Unchecked"
                color="primary"
                checked={interactiveStates.unchecked}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, unchecked: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Checked</Text>
              <Switch
                label="Checked"
                color="primary"
                checked={interactiveStates.checked}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, checked: checked }))
                }
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Disabled Unchecked</Text>
              <Switch
                label="Disabled"
                color="primary"
                checked={interactiveStates.disabled}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, disabled: checked }))
                }
                disabled
              />
            </div>
            <div className="space-y-2">
              <Text variant="body-sm" className="font-medium text-gray-600">Disabled Checked</Text>
              <Switch
                label="Disabled"
                color="primary"
                checked={interactiveStates.disabledChecked}
                onCheckedChange={(checked) =>
                  setInteractiveStates(prev => ({ ...prev, disabledChecked: checked }))
                }
                disabled
              />
            </div>
          </div>
        </div>

        {/* Custom Styling */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Custom Styling</Text>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Text variant="body-sm" className="font-medium text-gray-600">Label Positioning</Text>
                <div className="space-y-2">
                  <Switch
                    label="Label on right"
                    color="primary"
                    checked={true}
                    labelPosition="right"
                  />
                  <Switch
                    label="Label on left"
                    color="primary"
                    checked={true}
                    labelPosition="left"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Text variant="body-sm" className="font-medium text-gray-600">Without Labels</Text>
                <div className="flex items-center gap-3">
                  <Switch
                    color="primary"
                    checked={true}
                    aria-label="Toggle primary setting"
                  />
                  <Switch
                    color="success"
                    checked={true}
                    aria-label="Toggle success setting"
                  />
                  <Switch
                    color="warning"
                    checked={false}
                    aria-label="Toggle warning setting"
                  />
                  <Switch
                    color="secondary"
                    size="small"
                    checked={true}
                    aria-label="Toggle small setting"
                  />
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
