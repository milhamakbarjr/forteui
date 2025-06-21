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
} from 'forteui-core';

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

export const BreadcrumbShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Breadcrumb Component"
      description="Navigation breadcrumb with text and icon variants."
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
      </div>
    </ShowcaseSection>
  );
};
