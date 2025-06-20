'use client';

import React, { useState } from 'react';
import { Alert, Text } from '@forteui/core';
import { IconInfoCircle, IconCheck, IconAlertTriangle, IconX, IconSettings } from '@tabler/icons-react';
import { ComponentShowcase } from '../ComponentShowcase';

export function ClientSafeAlertShowcase({ 
  children, 
  code, 
  title = "Alert Examples",
  description = "Alert component for displaying important messages with multiple variants and semantic severity levels"
}: {
  children?: React.ReactNode;
  code?: string;
  title?: string;
  description?: string;
}) {
  // Interactive state for dismissible alerts
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

  const handleAlertDismiss = (alertId: string) => {
    setDismissedAlerts(prev => [...prev, alertId]);
  };

  const isAlertDismissed = (alertId: string) => dismissedAlerts.includes(alertId);

  return (
    <ComponentShowcase title={title} description={description} code={code}>
      <div className="space-y-8 forte-ui">
        
        {/* Basic Alert Variants */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Default Variant - Light backgrounds with borders</Text>
          </div>
          <div className="space-y-3">
            <Alert variant="default" severity="info">
              This is an informational alert with additional context.
            </Alert>
            <Alert variant="default" severity="success">
              Your action was completed successfully!
            </Alert>
            <Alert variant="default" severity="warning">
              Please review your input before proceeding.
            </Alert>
            <Alert variant="default" severity="error">
              Something went wrong. Please try again.
            </Alert>
          </div>
        </div>

        {/* Filled Variant Alerts */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Filled Variant - Strong semantic colors</Text>
          </div>
          <div className="space-y-3">
            <Alert variant="filled" severity="info">
              This is an informational alert with filled background styling.
            </Alert>
            <Alert variant="filled" severity="success">
              Your action was completed successfully!
            </Alert>
            <Alert variant="filled" severity="warning">
              Please review your input before proceeding.
            </Alert>
            <Alert variant="filled" severity="error">
              Something went wrong. Please try again.
            </Alert>
          </div>
        </div>

        {/* Outline Variant Alerts */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Outline Variant - Border emphasis</Text>
          </div>
          <div className="space-y-3">
            <Alert variant="outline" severity="info">
              This is an informational alert with outline styling.
            </Alert>
            <Alert variant="outline" severity="success">
              Your action was completed successfully!
            </Alert>
            <Alert variant="outline" severity="warning">
              Please review your input before proceeding.
            </Alert>
            <Alert variant="outline" severity="error">
              Something went wrong. Please try again.
            </Alert>
          </div>
        </div>

        {/* Dismissible Alerts */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Dismissible Alerts - With close functionality</Text>
          </div>
          <div className="space-y-3">
            {!isAlertDismissed('info-dismissible') && (
              <Alert 
                variant="default" 
                severity="info"
                closable
                onClose={() => handleAlertDismiss('info-dismissible')}
              >
                Click the close button to dismiss this alert.
              </Alert>
            )}
            {!isAlertDismissed('success-dismissible') && (
              <Alert 
                variant="filled" 
                severity="success"
                closable
                onClose={() => handleAlertDismiss('success-dismissible')}
              >
                This alert can be closed by the user.
              </Alert>
            )}
            {!isAlertDismissed('warning-dismissible') && (
              <Alert 
                variant="outline" 
                severity="warning"
                closable
                onClose={() => handleAlertDismiss('warning-dismissible')}
              >
                Users can dismiss this warning when they've read it.
              </Alert>
            )}
            {dismissedAlerts.length > 0 && (
              <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded">
                <Text variant="body-sm">
                  Dismissed alerts: {dismissedAlerts.join(', ')} 
                  <button 
                    onClick={() => setDismissedAlerts([])} 
                    className="ml-2 text-blue-600 hover:text-blue-800 underline"
                  >
                    Reset
                  </button>
                </Text>
              </div>
            )}
          </div>
        </div>

        {/* Custom Icon Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Custom Icon Features</Text>
          </div>
          <div className="space-y-3">
            <Alert 
              variant="default" 
              severity="info" 
              icon={(props) => <IconSettings {...props} />}
            >
              Alert with custom settings icon instead of default info icon.
            </Alert>
            <Alert variant="outline" severity="warning" hideIcon>
              This alert has no icon at all - clean text-only presentation.
            </Alert>
            <Alert 
              variant="filled" 
              severity="success" 
              icon={(props) => <IconCheck {...props} />}
            >
              Custom checkmark icon for completed action confirmation.
            </Alert>
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Real-world Usage Examples</Text>
          </div>
          <div className="space-y-3">
            <Alert variant="default" severity="info">
              <strong>Form Validation:</strong> Please fill in all required fields before submitting.
            </Alert>
            <Alert variant="filled" severity="success">
              <strong>Upload Complete:</strong> Your file has been successfully uploaded and processed.
            </Alert>
            <Alert variant="outline" severity="warning">
              <strong>Session Expiring:</strong> Your session will expire in 5 minutes. Save your work to avoid losing changes.
            </Alert>
            <Alert 
              variant="default" 
              severity="error"
              closable
              onClose={() => console.log('Network error dismissed')}
            >
              <strong>Network Error:</strong> Unable to connect to the server. Please check your internet connection and try again.
            </Alert>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <Text variant="body-sm" className="font-medium text-gray-700">Design Specifications</Text>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <Text variant="body-sm" className="font-medium mb-3 block">Alert Component Technical Details</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <Text variant="body-sm" className="font-medium mb-2 block">Variants:</Text>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Default: Light backgrounds with subtle borders</li>
                  <li>• Filled: Strong semantic color backgrounds</li>
                  <li>• Outline: Emphasized borders with light backgrounds</li>
                </ul>
              </div>
              <div>
                <Text variant="body-sm" className="font-medium mb-2 block">Severity Levels:</Text>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Info: Information circle icon (blue)</li>
                  <li>• Success: Check mark icon (green)</li>
                  <li>• Warning: Alert triangle icon (yellow)</li>
                  <li>• Error: X mark icon (red)</li>
                </ul>
              </div>
              <div>
                <Text variant="body-sm" className="font-medium mb-2 block">Features:</Text>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dismissible with closable prop</li>
                  <li>• Custom icon override support</li>
                  <li>• Icon hiding capability</li>
                  <li>• ARIA role="alert" for accessibility</li>
                  <li>• Consistent color tokens</li>
                  <li>• Plus Jakarta Sans typography</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-gray-600">
              <Text variant="body-sm" className="font-medium mb-2 block">Design Tokens Used:</Text>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div>• info-main, info-8, info-48</div>
                <div>• success-main, success-8, success-48</div>
                <div>• warning-main, warning-8, warning-48</div>
                <div>• error-main, error-8, error-48</div>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </ComponentShowcase>
  );
}
