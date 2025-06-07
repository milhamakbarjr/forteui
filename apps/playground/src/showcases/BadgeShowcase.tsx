import { Badge, Text, IconNotification, IconMail, IconShoppingCart, IconMessage } from '@forte-ui/core';

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
  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
    {children}
  </div>
);

interface SpecListProps {
  items: string[];
}

const SpecList: React.FC<SpecListProps> = ({ items }) => (
  <ul className="space-y-1 text-sm text-gray-700">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <span className="text-blue-500 mr-2">•</span>
        {item}
      </li>
    ))}
  </ul>
);

export const BadgeShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Badge Component"
      description="Badge component for icons with number counts or dot indicators using CSS positioning and Figma design specifications."
    >
      <div className="space-y-8">
        {/* Number Badge Examples */}
        <ShowcaseGroup title="Number Badges - Color Variants">
          <div className="flex items-center gap-6 flex-wrap">
            <Badge variant="default" count={1}>
              <IconNotification size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="primary" count={5}>
              <IconMail size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="secondary" count={12}>
              <IconShoppingCart size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="success" count={3}>
              <IconMessage size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="warning" count={99}>
              <IconNotification size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="error" count={100}>
              <IconMail size={24} className="text-gray-700" />
            </Badge>
          </div>
        </ShowcaseGroup>

        {/* Number Badge Overflow */}
        <ShowcaseGroup title="Number Badge Overflow (99+)">
          <div className="flex items-center gap-6 flex-wrap">
            <Badge variant="primary" count={99}>
              <IconNotification size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="primary" count={100}>
              <IconMail size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="primary" count={999}>
              <IconShoppingCart size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="primary" count={1234}>
              <IconMessage size={24} className="text-gray-700" />
            </Badge>
          </div>
        </ShowcaseGroup>

        {/* Badge without count (dot indicator) */}
        <ShowcaseGroup title="Dot Badges - Color Variants">
          <div className="flex items-center gap-6 flex-wrap">
            <Badge variant="default">
              <IconNotification size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="primary">
              <IconMail size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="secondary">
              <IconShoppingCart size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="success">
              <IconMessage size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="warning">
              <IconNotification size={24} className="text-gray-700" />
            </Badge>
            <Badge variant="error">
              <IconMail size={24} className="text-gray-700" />
            </Badge>
          </div>
        </ShowcaseGroup>

        {/* Interactive Examples */}
        <ShowcaseGroup title="Interactive Examples">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Badge variant="primary" count={5}>
                <IconNotification size={24} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
              </Badge>
              <Text variant="caption" color="secondary">Notifications</Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="success" count={2}>
                <IconMail size={24} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
              </Badge>
              <Text variant="caption" color="secondary">Messages</Text>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="warning" count={8}>
                <IconShoppingCart size={24} className="text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
              </Badge>
              <Text variant="caption" color="secondary">Cart Items</Text>
            </div>
          </div>
        </ShowcaseGroup>

        {/* Specifications */}
        <SpecificationBox>
          <Text variant="body-sm" className="font-medium mb-3 block">Badge Component Specifications</Text>
          <SpecList
            items={[
              "Badge component follows exact Figma specifications for positioning and styling",
              "Number badges display count with 99+ overflow handling for large numbers",
              "Dot badges provide simple presence indicators without count values",
              "Positioning uses absolute CSS with top: -4px, right: -4px offset from parent",
              "Supports all semantic color variants: default, primary, secondary, success, warning, error",
              "Automatic sizing based on content with minimum 16px height and 6px padding",
              "Typography uses 12px font size with 500 font weight for readability",
              "Border radius of 50% for dot badges, 12px for number badges",
              "Compatible with any icon size and maintains consistent positioning",
              "Accessible with proper ARIA labels and semantic color associations"
            ]}
          />
        </SpecificationBox>
      </div>
    </ShowcaseSection>
  );
};
