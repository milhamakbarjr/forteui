import { 
  Breadcrumb, 
  Text,
  IconHome,
  IconShoppingCart,
  IconUser,
  IconSettings,
  IconStar,
  IconEye,
  IconArrowRight
} from '@forte-ui/core';

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

interface ShowcaseVariantProps {
  title: string;
  children: React.ReactNode;
}

const ShowcaseVariant: React.FC<ShowcaseVariantProps> = ({ title, children }) => (
  <div className="space-y-3">
    <Text variant="body-sm" className="mb-2 block font-medium">{title}</Text>
    {children}
  </div>
);

interface SpecificationBoxProps {
  children: React.ReactNode;
}

const SpecificationBox: React.FC<SpecificationBoxProps> = ({ children }) => (
  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
    {children}
  </div>
);

export const BreadcrumbShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Breadcrumb Component"
      description="Navigation breadcrumb with text and icon variants following ForteUI design specifications."
    >
      <div className="space-y-8">
        {/* Text Variant */}
        <ShowcaseGroup title="Text Variant (Default)">
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
        </ShowcaseGroup>

        {/* Icon Variant */}
        <ShowcaseGroup title="Icon Variant">
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
        </ShowcaseGroup>

        {/* Interactive Navigation */}
        <ShowcaseGroup title="Interactive Navigation">
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
        </ShowcaseGroup>

        {/* Custom Separator */}
        <ShowcaseGroup title="Custom Separator">
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
        </ShowcaseGroup>

        {/* Real-world Examples */}
        <ShowcaseGroup title="Real-world Examples">
          <div className="space-y-6">
            <ShowcaseVariant title="E-commerce Product Page">
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
            </ShowcaseVariant>
            
            <ShowcaseVariant title="Admin Dashboard">
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
            </ShowcaseVariant>
            
            <ShowcaseVariant title="Documentation Site">
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
            </ShowcaseVariant>
          </div>
        </ShowcaseGroup>

        {/* Specifications */}
        <SpecificationBox>
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
        </SpecificationBox>
      </div>
    </ShowcaseSection>
  );
};
