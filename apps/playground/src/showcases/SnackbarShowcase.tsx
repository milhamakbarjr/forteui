import { useState } from 'react';
import { Snackbar } from '@forte-ui/core';

import {
  ShowcaseSection,
  ShowcaseGroup,
  ShowcaseVariant,
  SpecificationBox,
  SpecList
} from '../components';

export function SnackbarShowcase() {
  const [showSnackbar, setShowSnackbar] = useState<string | null>(null);

  const handleAction = (type: string) => {
    console.log(`${type} action clicked`);
  };

  const handleClose = (type: string) => {
    console.log(`${type} snackbar closed`);
    setShowSnackbar(null);
  };

  return (
    <ShowcaseSection
      title="Snackbar Component"
      description="Snackbar component for displaying brief notifications with optional actions, following Figma specifications."
    >
      {/* Default Variant - Dark Theme */}
      <ShowcaseGroup title="Default Variant - Dark Theme with Close Button">
        <ShowcaseVariant title="Default Dark Snackbar" layout="vertical">
          <Snackbar
            variant="default"
            severity="default"
            message="This is a default message!"
            closable
            onClose={() => handleClose('default')}
          />
        </ShowcaseVariant>
      </ShowcaseGroup>

      {/* Action Variant - Semantic Colors */}
      <ShowcaseGroup title="Action Variant - Semantic Colors with Action Buttons">
        <div className="space-y-4">
          <ShowcaseVariant title="Info Snackbar with Action" layout="vertical">
            <Snackbar
              variant="action"
              severity="info"
              message="This is a info message!"
              actionLabel="Action"
              onAction={() => handleAction('info')}
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Success Snackbar with Action" layout="vertical">
            <Snackbar
              variant="action"
              severity="success"
              message="This is a success message!"
              actionLabel="Action"
              onAction={() => handleAction('success')}
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Warning Snackbar with Action" layout="vertical">
            <Snackbar
              variant="action"
              severity="warning"
              message="This is a warning message!"
              actionLabel="Action"
              onAction={() => handleAction('warning')}
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Error Snackbar with Action" layout="vertical">
            <Snackbar
              variant="action"
              severity="error"
              message="This is a error message!"
              actionLabel="Action"
              onAction={() => handleAction('error')}
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Default Variant with Semantic Icons and Close */}
      <ShowcaseGroup title="Default Variant - Semantic Icons with Close Button">
        <div className="space-y-4">
          <ShowcaseVariant title="Info with Close" layout="vertical">
            <Snackbar
              variant="default"
              severity="info"
              message="This is a info message with close!"
              closable
              onClose={() => handleClose('info-close')}
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Success with Close" layout="vertical">
            <Snackbar
              variant="default"
              severity="success"
              message="This is a success message with close!"
              closable
              onClose={() => handleClose('success-close')}
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Warning with Close" layout="vertical">
            <Snackbar
              variant="default"
              severity="warning"
              message="This is a warning message with close!"
              closable
              onClose={() => handleClose('warning-close')}
            />
          </ShowcaseVariant>

          <ShowcaseVariant title="Error with Close" layout="vertical">
            <Snackbar
              variant="default"
              severity="error"
              message="This is a error message with close!"
              closable
              onClose={() => handleClose('error-close')}
            />
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Interactive Examples */}
      <ShowcaseGroup title="Interactive Examples">
        <div className="space-y-4">
          <ShowcaseVariant title="Trigger Different Snackbars" layout="vertical">
            <div className="flex flex-wrap gap-3">
              <button
                className="px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setShowSnackbar('interactive-info')}
              >
                Show Info Action
              </button>
              <button
                className="px-4 py-2 bg-success-main text-white rounded-lg hover:bg-success-dark transition-colors"
                onClick={() => setShowSnackbar('interactive-success')}
              >
                Show Success Action
              </button>
              <button
                className="px-4 py-2 bg-warning-main text-grey-800 rounded-lg hover:bg-warning-dark transition-colors"
                onClick={() => setShowSnackbar('interactive-warning')}
              >
                Show Warning Action
              </button>
              <button
                className="px-4 py-2 bg-error-main text-white rounded-lg hover:bg-error-dark transition-colors"
                onClick={() => setShowSnackbar('interactive-error')}
              >
                Show Error Action
              </button>
            </div>

            {/* Interactive Snackbars */}
            <div className="mt-6 space-y-3">
              {showSnackbar === 'interactive-info' && (
                <Snackbar
                  variant="action"
                  severity="info"
                  message="Interactive info message triggered!"
                  actionLabel="Undo"
                  onAction={() => {
                    handleAction('interactive-info');
                    setShowSnackbar(null);
                  }}
                  closable
                  onClose={() => setShowSnackbar(null)}
                />
              )}
              
              {showSnackbar === 'interactive-success' && (
                <Snackbar
                  variant="action"
                  severity="success"
                  message="Operation completed successfully!"
                  actionLabel="View Details"
                  onAction={() => {
                    handleAction('interactive-success');
                    setShowSnackbar(null);
                  }}
                  closable
                  onClose={() => setShowSnackbar(null)}
                />
              )}
              
              {showSnackbar === 'interactive-warning' && (
                <Snackbar
                  variant="action"
                  severity="warning"
                  message="Please review your input before proceeding!"
                  actionLabel="Review"
                  onAction={() => {
                    handleAction('interactive-warning');
                    setShowSnackbar(null);
                  }}
                  closable
                  onClose={() => setShowSnackbar(null)}
                />
              )}
              
              {showSnackbar === 'interactive-error' && (
                <Snackbar
                  variant="action"
                  severity="error"
                  message="Something went wrong. Please try again!"
                  actionLabel="Retry"
                  onAction={() => {
                    handleAction('interactive-error');
                    setShowSnackbar(null);
                  }}
                  closable
                  onClose={() => setShowSnackbar(null)}
                />
              )}
            </div>
          </ShowcaseVariant>
        </div>
      </ShowcaseGroup>

      {/* Design Specifications */}
      <SpecificationBox variant="figma" title="Snackbar Design Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Variants" 
            items={[
              "Default: Dark theme (#1F2933) with white text",
              "Action: Light theme with semantic color actions",
              "Both variants: 420px fixed width",
              "Border radius: 12px for consistency",
              "Shadow: 0px 8px 16px rgba(147, 161, 174, 0.16)"
            ]}
          />
          <SpecList 
            title="Semantic Severities" 
            items={[
              "Info: Info circle icon with cyan colors (#00BEE0)",
              "Success: Check icon with green colors (#22B954)",
              "Warning: Alert triangle icon with orange colors (#FFAD05)",
              "Error: Alert circle icon with red colors (#FF5833)",
              "Default: No icon, dark theme styling"
            ]}
          />
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Icon System" 
            items={[
              "Icon container: 48px × 48px with 12px border radius",
              "Background: 8% opacity of semantic color",
              "Icon size: 24px (w-6 h-6)",
              "Icons from Tabler Icons for consistency",
              "Auto-mapped based on severity level"
            ]}
          />
          <SpecList 
            title="Typography & Actions" 
            items={[
              "Message: 14px font-weight 600, line-height 22px",
              "Action label: 13px font-weight 700, line-height 22px",
              "Action button: 30px height, 8px padding",
              "Close button: 20px circular with border",
              "Plus Jakarta Sans font family"
            ]}
          />
        </div>

        <div className="mt-4 grid gap-2 text-sm text-gray-600">
          <div className="font-medium mb-2">Design Tokens Used:</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div>• info-main, info-8, info-dark</div>
            <div>• success-main, success-8, success-dark</div>
            <div>• warning-main, warning-8, warning-dark</div>
            <div>• error-main, error-8, error-dark</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            <div>• primary-main, primary-dark</div>
            <div>• grey-800, grey-16, grey-8</div>
            <div>• Fixed width: 420px</div>
            <div>• Shadow: shadow-md</div>
          </div>
        </div>
      </SpecificationBox>
    </ShowcaseSection>
  );
}
