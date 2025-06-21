import { 
  Chip, 
  Text, 
  IconX,
  IconUser,
  IconSettings,
  IconCheck,
  IconChevronDown,
  IconArrowRight,
  IconStar,
  IconMail,
  IconAlertTriangle,
  IconTrash
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

export const ChipShowcase: React.FC = () => {
  return (
    <ShowcaseSection
      title="Chip Component"
      description="Chip components with three variants (Filled, Outlined, Soft), two sizes (Medium, Small), and flexible action icon system following Figma specifications. Supports custom start/end icons with click handlers, plus backward-compatible dismissible mode."
    >
      <div className="space-y-6">
        {/* Filled Chips */}
        <ShowcaseGroup title="Filled Chips - All Colors">
          <div className="space-y-4">
            <ShowcaseVariant title="Medium Size (32px height)">
              <div className="flex flex-wrap gap-3">
                <Chip variant="filled" color="default" size="medium">Default</Chip>
                <Chip variant="filled" color="primary" size="medium">Primary</Chip>
                <Chip variant="filled" color="secondary" size="medium">Secondary</Chip>
                <Chip variant="filled" color="info" size="medium">Info</Chip>
                <Chip variant="filled" color="success" size="medium">Success</Chip>
                <Chip variant="filled" color="warning" size="medium">Warning</Chip>
                <Chip variant="filled" color="error" size="medium">Error</Chip>
              </div>
            </ShowcaseVariant>
            <ShowcaseVariant title="Small Size (24px height)">
              <div className="flex flex-wrap gap-3">
                <Chip variant="filled" color="default" size="small">Default</Chip>
                <Chip variant="filled" color="primary" size="small">Primary</Chip>
                <Chip variant="filled" color="secondary" size="small">Secondary</Chip>
                <Chip variant="filled" color="info" size="small">Info</Chip>
                <Chip variant="filled" color="success" size="small">Success</Chip>
                <Chip variant="filled" color="warning" size="small">Warning</Chip>
                <Chip variant="filled" color="error" size="small">Error</Chip>
              </div>
            </ShowcaseVariant>
          </div>
        </ShowcaseGroup>

        {/* Outlined Chips */}
        <ShowcaseGroup title="Outlined Chips - All Colors">
          <div className="space-y-4">
            <ShowcaseVariant title="Medium Size (32px height)">
              <div className="flex flex-wrap gap-3">
                <Chip variant="outlined" color="default" size="medium">Default</Chip>
                <Chip variant="outlined" color="primary" size="medium">Primary</Chip>
                <Chip variant="outlined" color="secondary" size="medium">Secondary</Chip>
                <Chip variant="outlined" color="info" size="medium">Info</Chip>
                <Chip variant="outlined" color="success" size="medium">Success</Chip>
                <Chip variant="outlined" color="warning" size="medium">Warning</Chip>
                <Chip variant="outlined" color="error" size="medium">Error</Chip>
              </div>
            </ShowcaseVariant>
            <ShowcaseVariant title="Small Size (24px height)">
              <div className="flex flex-wrap gap-3">
                <Chip variant="outlined" color="default" size="small">Default</Chip>
                <Chip variant="outlined" color="primary" size="small">Primary</Chip>
                <Chip variant="outlined" color="secondary" size="small">Secondary</Chip>
                <Chip variant="outlined" color="info" size="small">Info</Chip>
                <Chip variant="outlined" color="success" size="small">Success</Chip>
                <Chip variant="outlined" color="warning" size="small">Warning</Chip>
                <Chip variant="outlined" color="error" size="small">Error</Chip>
              </div>
            </ShowcaseVariant>
          </div>
        </ShowcaseGroup>

        {/* Soft Chips */}
        <ShowcaseGroup title="Soft Chips - All Colors">
          <div className="space-y-4">
            <ShowcaseVariant title="Medium Size (32px height)">
              <div className="flex flex-wrap gap-3">
                <Chip variant="soft" color="default" size="medium">Default</Chip>
                <Chip variant="soft" color="primary" size="medium">Primary</Chip>
                <Chip variant="soft" color="secondary" size="medium">Secondary</Chip>
                <Chip variant="soft" color="info" size="medium">Info</Chip>
                <Chip variant="soft" color="success" size="medium">Success</Chip>
                <Chip variant="soft" color="warning" size="medium">Warning</Chip>
                <Chip variant="soft" color="error" size="medium">Error</Chip>
              </div>
            </ShowcaseVariant>
            <ShowcaseVariant title="Small Size (24px height)">
              <div className="flex flex-wrap gap-3">
                <Chip variant="soft" color="default" size="small">Default</Chip>
                <Chip variant="soft" color="primary" size="small">Primary</Chip>
                <Chip variant="soft" color="secondary" size="small">Secondary</Chip>
                <Chip variant="soft" color="info" size="small">Info</Chip>
                <Chip variant="soft" color="success" size="small">Success</Chip>
                <Chip variant="soft" color="warning" size="small">Warning</Chip>
                <Chip variant="soft" color="error" size="small">Error</Chip>
              </div>
            </ShowcaseVariant>
          </div>
        </ShowcaseGroup>

        {/* Dismissible Chips */}
        <ShowcaseGroup title="Dismissible Chips - With Close Button (Legacy Support)">
          <div className="space-y-4">
            <ShowcaseVariant title="Medium Size with Dismissible Action">
              <div className="flex flex-wrap gap-3">
                <Chip variant="filled" color="primary" size="medium" endIcon={<IconX />} onEndIconClick={() => console.log('Dismissed primary chip')}>
                  Dismissible Primary
                </Chip>
                <Chip variant="outlined" color="secondary" size="medium" endIcon={<IconX />} onEndIconClick={() => console.log('Dismissed secondary chip')}>
                  Dismissible Secondary
                </Chip>
                <Chip variant="soft" color="info" size="medium" endIcon={<IconX />} onEndIconClick={() => console.log('Dismissed info chip')}>
                  Dismissible Info
                </Chip>
              </div>
            </ShowcaseVariant>
            <ShowcaseVariant title="Small Size with Dismissible Action">
              <div className="flex flex-wrap gap-3">
                <Chip variant="filled" color="success" size="small" endIcon={<IconX />} onEndIconClick={() => console.log('Dismissed success chip')}>
                  Small Success
                </Chip>
                <Chip variant="outlined" color="warning" size="small" endIcon={<IconX />} onEndIconClick={() => console.log('Dismissed warning chip')}>
                  Small Warning
                </Chip>
                <Chip variant="soft" color="error" size="small" endIcon={<IconX />} onEndIconClick={() => console.log('Dismissed error chip')}>
                  Small Error
                </Chip>
              </div>
            </ShowcaseVariant>
          </div>
        </ShowcaseGroup>

        {/* New Action Icon System */}
        <ShowcaseGroup title="Action Icon System - Start & End Icons">
          <div className="space-y-4">
            <ShowcaseVariant title="Start Icons (Left Side)">
              <div className="flex flex-wrap gap-3">
                <Chip 
                  variant="filled" 
                  color="primary" 
                  size="medium"
                  startIcon={<IconUser />}
                  onStartIconClick={() => console.log('Start icon clicked')}
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
            </ShowcaseVariant>
            
            <ShowcaseVariant title="End Icons (Right Side)">
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
            </ShowcaseVariant>
            
            <ShowcaseVariant title="Both Start & End Icons">
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
            </ShowcaseVariant>
            
            <ShowcaseVariant title="Small Size with Action Icons">
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
            </ShowcaseVariant>
          </div>
        </ShowcaseGroup>

      </div>
    </ShowcaseSection>
  );
};
