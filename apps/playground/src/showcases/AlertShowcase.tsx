import { Alert, Text } from 'forteui-core';

// Shared showcase components
interface ShowcaseSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ title, description, children }) => (
  <section className="space-y-6">
    <div>
      <Text variant="h2" className="text-xl font-semibold mb-2">{title}</Text>
      <Text variant="body" color="secondary" className="mb-4">{description}</Text>
    </div>
    {children}
  </section>
);

interface ShowcaseGroupProps {
  title: string;
  children: React.ReactNode;
}

const ShowcaseGroup: React.FC<ShowcaseGroupProps> = ({ title, children }) => (
  <div>
    <Text variant="caption" color="secondary" className="mb-3 block">{title}</Text>
    {children}
  </div>
);

interface SpecificationBoxProps {
  children: React.ReactNode;
}

const SpecificationBox: React.FC<SpecificationBoxProps> = ({ children }) => (
  <div className="p-6 bg-gray-50 rounded-lg">
    {children}
  </div>
);

export const AlertShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Alert Component"
      description="Alert component for displaying important messages with multiple variants and semantic severity levels."
    >
      <div className="space-y-8">
        {/* Default Variant Alerts */}
        <ShowcaseGroup title="Default Variant - Light backgrounds with borders">
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
        </ShowcaseGroup>

        {/* Filled Variant Alerts */}
        <ShowcaseGroup title="Filled Variant - Strong semantic colors">
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
        </ShowcaseGroup>

        {/* Outline Variant Alerts */}
        <ShowcaseGroup title="Outline Variant - Border emphasis">
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
        </ShowcaseGroup>

        {/* Dismissible Alerts */}
        <ShowcaseGroup title="Dismissible Alerts - With close functionality">
          <div className="space-y-3">
            <Alert 
              variant="default" 
              severity="info"
              closable
              onClose={() => console.log('Info alert dismissed')}
            >
              Click the close button to dismiss this alert.
            </Alert>
            <Alert 
              variant="filled" 
              severity="success"
              closable
              onClose={() => console.log('Success alert dismissed')}
            >
              This alert can be closed by the user.
            </Alert>
            <Alert 
              variant="outline" 
              severity="warning"
              closable
              onClose={() => console.log('Warning alert dismissed')}
            >
              Users can dismiss this warning when they've read it.
            </Alert>
          </div>
        </ShowcaseGroup>

        {/* Message-only Alerts */}
        <ShowcaseGroup title="Message-only Alerts - Without titles">
          <div className="space-y-3">
            <Alert variant="default" severity="info">
              Simple informational message without a title.
            </Alert>
            <Alert variant="filled" severity="success">
              Success message displayed without a title for cleaner look.
            </Alert>
            <Alert 
              variant="outline" 
              severity="error"
              closable
              onClose={() => console.log('Simple error alert dismissed')}
            >
              Error occurred. This alert shows only the message.
            </Alert>
          </div>
        </ShowcaseGroup>

        {/* Alert Specifications */}
        <SpecificationBox>
          <Text variant="body-sm" className="font-medium mb-3 block">Alert Component Specifications</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Variants:</Text>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Default: Light backgrounds with borders</li>
                <li>• Filled: Semantic color backgrounds</li>
                <li>• Outline: Emphasized borders</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Severity Levels:</Text>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Info: Information circle icon</li>
                <li>• Success: Check mark icon</li>
                <li>• Warning: Alert triangle icon</li>
                <li>• Error: X mark icon</li>
              </ul>
            </div>
            <div>
              <Text variant="body-sm" className="font-medium mb-2 block">Features:</Text>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Optional titles and messages</li>
                <li>• Dismissible with onClose</li>
                <li>• Semantic icons auto-mapped</li>
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
        </SpecificationBox>
      </div>
    </ShowcaseSection>
  );
};
