'use client';

import React, { useState } from 'react';
import { Snackbar, Text } from '@forteui/core';
import { ComponentShowcase } from '../ComponentShowcase';

export function SnackbarShowcase({ 
  children, 
  code
}: {
  children?: React.ReactNode;
  code?: string;
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
    <ComponentShowcase code={code}>
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
