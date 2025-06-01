import { 
  Button, 
  Text, 
  Heading, 
  Container, 
  Stack, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input,
  Textarea,
  Avatar,
  // Tabler Icons
  IconHome,
  IconUser,
  IconSearch,
  IconPlus,
  IconX,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
  IconSettings,
  IconHeart,
  IconStar,
  IconArrowRight,
  IconArrowLeft,
  IconChevronDown,
  IconEdit,
  IconTrash,
  IconEye,
  IconDownload
} from '@forte-ui/core';

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Heading level={1} className="text-primary-main">
            ForteUI Component Library
          </Heading>
          <Text variant="body" color="secondary" className="text-lg">
            Phase 1 Development Playground - Testing Plus Jakarta Sans Typography & Design Tokens
          </Text>
        </div>

        {/* Typography Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Typography System</Heading>
          <div className="grid gap-4">
            <div>
              <Text variant="caption" color="secondary" className="mb-2">Display Heading</Text>
              <Text variant="display" className="block">The quick brown fox jumps</Text>
            </div>
            <div>
              <Text variant="caption" color="secondary" className="mb-2">Heading Levels</Text>
              <div className="space-y-2">
                <Heading level={1}>Heading 1 - Plus Jakarta Sans Bold</Heading>
                <Heading level={2}>Heading 2 - Plus Jakarta Sans Bold</Heading>
                <Heading level={3}>Heading 3 - Plus Jakarta Sans SemiBold</Heading>
                <Heading level={4}>Heading 4 - Plus Jakarta Sans SemiBold</Heading>
                <Heading level={5}>Heading 5 - Plus Jakarta Sans Medium</Heading>
                <Heading level={6}>Heading 6 - Plus Jakarta Sans Medium</Heading>
              </div>
            </div>
            <div>
              <Text variant="caption" color="secondary" className="mb-2">Body Text Variants</Text>
              <div className="space-y-2">
                <Text variant="body" className="block">Body text - Plus Jakarta Sans Regular (16px)</Text>
                <Text variant="body-sm" className="block">Small body text - Plus Jakarta Sans Regular (14px)</Text>
                <Text variant="caption" className="block">Caption text - Plus Jakarta Sans Regular (12px)</Text>
              </div>
            </div>
          </div>
        </section>

        {/* Button Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Button Components</Heading>
          <div className="space-y-4">
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Contained Button Colors (6 Variants from Figma)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="default" size="md">Default</Button>
                <Button variant="primary" size="md">Primary</Button>
                <Button variant="info" size="md">Info</Button>
                <Button variant="success" size="md">Success</Button>
                <Button variant="warning" size="md">Warning</Button>
                <Button variant="error" size="md">Error</Button>
              </div>
            </div>
            
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Button Sizes</Text>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
            
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Secondary Buttons</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="sm">Small Secondary</Button>
                <Button variant="secondary" size="md">Medium Secondary</Button>
                <Button variant="secondary" size="lg">Large Secondary</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Outline Variants (6 Colors from Figma)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline-default">Default</Button>
                <Button variant="outline-primary">Primary</Button>
                <Button variant="outline-info">Info</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-error">Error</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Text Variants (6 Colors from Figma)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="text-default">Default</Button>
                <Button variant="text-primary">Primary</Button>
                <Button variant="text-info">Info</Button>
                <Button variant="text-success">Success</Button>
                <Button variant="text-warning">Warning</Button>
                <Button variant="text-error">Error</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Soft Variants (6 Colors from Figma)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="soft-default">Default</Button>
                <Button variant="soft-primary">Primary</Button>
                <Button variant="soft-info">Info</Button>
                <Button variant="soft-success">Success</Button>
                <Button variant="soft-warning">Warning</Button>
                <Button variant="soft-error">Error</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Disabled States (All Variants)</Text>
              <div className="space-y-3">
                <div>
                  <Text variant="body-sm" className="mb-2 text-grey-600">Contained Disabled</Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default" disabled>Default</Button>
                    <Button variant="primary" disabled>Primary</Button>
                    <Button variant="info" disabled>Info</Button>
                    <Button variant="success" disabled>Success</Button>
                    <Button variant="warning" disabled>Warning</Button>
                    <Button variant="error" disabled>Error</Button>
                  </div>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 text-grey-600">Outline Disabled</Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline-default" disabled>Default</Button>
                    <Button variant="outline-primary" disabled>Primary</Button>
                    <Button variant="outline-info" disabled>Info</Button>
                    <Button variant="outline-success" disabled>Success</Button>
                    <Button variant="outline-warning" disabled>Warning</Button>
                    <Button variant="outline-error" disabled>Error</Button>
                  </div>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 text-grey-600">Text Disabled</Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="text-default" disabled>Default</Button>
                    <Button variant="text-primary" disabled>Primary</Button>
                    <Button variant="text-info" disabled>Info</Button>
                    <Button variant="text-success" disabled>Success</Button>
                    <Button variant="text-warning" disabled>Warning</Button>
                    <Button variant="text-error" disabled>Error</Button>
                  </div>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 text-grey-600">Soft Disabled</Text>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="soft-default" disabled>Default</Button>
                    <Button variant="soft-primary" disabled>Primary</Button>
                    <Button variant="soft-info" disabled>Info</Button>
                    <Button variant="soft-success" disabled>Success</Button>
                    <Button variant="soft-warning" disabled>Warning</Button>
                    <Button variant="soft-error" disabled>Error</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Button Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Icon Button Components</Heading>
          <div className="space-y-4">
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Icon Button Colors (6 Variants from Figma)</Text>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="icon-default" size="icon-md">
                  <IconHome className="w-6 h-6" />
                </Button>
                <Button variant="icon-primary" size="icon-md">
                  <IconUser className="w-6 h-6" />
                </Button>
                <Button variant="icon-info" size="icon-md">
                  <IconInfoCircle className="w-6 h-6" />
                </Button>
                <Button variant="icon-success" size="icon-md">
                  <IconCheck className="w-6 h-6" />
                </Button>
                <Button variant="icon-warning" size="icon-md">
                  <IconAlertTriangle className="w-6 h-6" />
                </Button>
                <Button variant="icon-error" size="icon-md">
                  <IconX className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Icon Button Sizes (Circular from Figma)</Text>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="icon-primary" size="icon-lg">
                  <IconPlus className="w-8 h-8" />
                </Button>
                <Button variant="icon-primary" size="icon-md">
                  <IconPlus className="w-6 h-6" />
                </Button>
                <Button variant="icon-primary" size="icon-sm">
                  <IconPlus className="w-5 h-5" />
                </Button>
                <Button variant="icon-primary" size="icon-xs">
                  <IconPlus className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-2">
                <Text variant="body-sm" color="secondary">
                  Sizes: Large (48px), Medium (40px), Small (36px), Extra Small (28px)
                </Text>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Icon Button Use Cases</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Button variant="icon-primary" size="icon-sm">
                    <IconEdit className="w-5 h-5" />
                  </Button>
                  <Text variant="body-sm">Edit</Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="icon-error" size="icon-sm">
                    <IconTrash className="w-5 h-5" />
                  </Button>
                  <Text variant="body-sm">Delete</Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="icon-info" size="icon-sm">
                    <IconEye className="w-5 h-5" />
                  </Button>
                  <Text variant="body-sm">View</Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="icon-success" size="icon-sm">
                    <IconDownload className="w-5 h-5" />
                  </Button>
                  <Text variant="body-sm">Download</Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="icon-warning" size="icon-sm">
                    <IconSettings className="w-5 h-5" />
                  </Button>
                  <Text variant="body-sm">Settings</Text>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="icon-default" size="icon-sm">
                    <IconSearch className="w-5 h-5" />
                  </Button>
                  <Text variant="body-sm">Search</Text>
                </div>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Icon Button States</Text>
              <div className="space-y-3">
                <div>
                  <Text variant="body-sm" className="mb-2 text-grey-600">Normal vs Disabled</Text>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Button variant="icon-primary" size="icon-md">
                      <IconHeart className="w-6 h-6" />
                    </Button>
                    <Button variant="icon-primary" size="icon-md" disabled>
                      <IconHeart className="w-6 h-6" />
                    </Button>
                    <Button variant="icon-success" size="icon-md">
                      <IconStar className="w-6 h-6" />
                    </Button>
                    <Button variant="icon-success" size="icon-md" disabled>
                      <IconStar className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Icon Button Best Practices</Text>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Text variant="body-sm" className="font-medium text-blue-900 mb-2">✅ Recommended: Use dedicated circular icon button variants</Text>
                  <div className="flex gap-3 mb-3">
                    <Button variant="icon-primary" size="icon-md">
                      <IconArrowRight className="w-6 h-6" />
                    </Button>
                    <Button variant="icon-success" size="icon-sm">
                      <IconCheck className="w-5 h-5" />
                    </Button>
                    <Button variant="icon-error" size="icon-xs">
                      <IconX className="w-4 h-4" />
                    </Button>
                  </div>
                  <Text variant="body-sm" className="text-blue-800 mb-2">
                    • Use `variant="icon-*"` with `size="icon-*"` for modern circular icon buttons
                  </Text>
                  <Text variant="body-sm" className="text-blue-800">
                    • Consistent 8% opacity hover states and proper focus rings
                  </Text>
                </div>
                
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <Text variant="body-sm" className="font-medium text-amber-900 mb-2">⚠️ Legacy: Avoid mixing patterns</Text>
                  <Text variant="body-sm" className="text-amber-800 mb-2">
                    • The old `size="icon"` creates square buttons and should only be used for backward compatibility
                  </Text>
                  <Text variant="body-sm" className="text-amber-800">
                    • For new designs, always use the dedicated icon button variants above
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Preview */}
        <section className="space-y-6">
          <Heading level={2}>Design Token Colors</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Colors */}
            <div>
              <Text variant="body" className="font-medium mb-3 block">Primary Brand</Text>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary-lighter border"></div>
                  <Text variant="body-sm">Lighter #D2F5FE</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary-light border"></div>
                  <Text variant="body-sm">Light #6BCEFA</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary-main border"></div>
                  <Text variant="body-sm">Main #0690F4</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary-dark border"></div>
                  <Text variant="body-sm">Dark #0253B1</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary-darker border"></div>
                  <Text variant="body-sm">Darker #012C7A</Text>
                </div>
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <Text variant="body" className="font-medium mb-3 block">Secondary</Text>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary-lighter border"></div>
                  <Text variant="body-sm">Lighter #F1DBFF</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary-light border"></div>
                  <Text variant="body-sm">Light #C98AFF</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary-main border"></div>
                  <Text variant="body-sm">Main #9138FF</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary-dark border"></div>
                  <Text variant="body-sm">Dark #5319BE</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary-darker border"></div>
                  <Text variant="body-sm">Darker #290981</Text>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <Text variant="body" className="font-medium mb-3 block">Semantic</Text>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-success-main border"></div>
                  <Text variant="body-sm">Success #22B954</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-warning-main border"></div>
                  <Text variant="body-sm">Warning #FFAD05</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-error-main border"></div>
                  <Text variant="body-sm">Error #FF5833</Text>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-info-main border"></div>
                  <Text variant="body-sm">Info #00BEE0</Text>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Components Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Form Components</Heading>
          
          {/* Input Variants */}
          <div className="space-y-4">
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Input Variants & States</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="body-sm" className="mb-1 block">Default Input</Text>
                  <Input placeholder="Enter your text here..." />
                </div>
                <div>
                  <Text variant="body-sm" className="mb-1 block">Success State</Text>
                  <Input variant="success" placeholder="Valid input" defaultValue="john@example.com" />
                </div>
                <div>
                  <Text variant="body-sm" className="mb-1 block">Error State</Text>
                  <Input variant="error" placeholder="Invalid input" defaultValue="invalid-email" />
                </div>
                <div>
                  <Text variant="body-sm" className="mb-1 block">Disabled Input</Text>
                  <Input disabled placeholder="Disabled input" />
                </div>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Input Sizes</Text>
              <div className="grid gap-3 max-w-md">
                <Input size="sm" placeholder="Small input" />
                <Input size="md" placeholder="Medium input (default)" />
                <Input size="lg" placeholder="Large input" />
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Textarea Variants</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="body-sm" className="mb-1 block">Default Textarea</Text>
                  <Textarea placeholder="Enter your message here..." />
                </div>
                <div>
                  <Text variant="body-sm" className="mb-1 block">Success State</Text>
                  <Textarea variant="success" placeholder="Valid message" defaultValue="This looks good!" />
                </div>
                <div>
                  <Text variant="body-sm" className="mb-1 block">Error State</Text>
                  <Textarea variant="error" placeholder="Error message" defaultValue="This message is too short." />
                </div>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Textarea Sizes</Text>
              <div className="grid gap-3 max-w-md">
                <Textarea size="sm" placeholder="Small textarea" />
                <Textarea size="md" placeholder="Medium textarea (default)" />
                <Textarea size="lg" placeholder="Large textarea" />
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Components Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Avatar Component</Heading>
          
          <div className="space-y-6">
            {/* Avatar Sizes */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Avatar Sizes</Text>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <Avatar size="xs" fallback="XS" />
                  <Text variant="caption" className="block mt-1">XS (24px)</Text>
                </div>
                <div className="text-center">
                  <Avatar size="sm" fallback="SM" />
                  <Text variant="caption" className="block mt-1">SM (32px)</Text>
                </div>
                <div className="text-center">
                  <Avatar size="md" fallback="MD" />
                  <Text variant="caption" className="block mt-1">MD (40px)</Text>
                </div>
                <div className="text-center">
                  <Avatar size="lg" fallback="LG" />
                  <Text variant="caption" className="block mt-1">LG (48px)</Text>
                </div>
                <div className="text-center">
                  <Avatar size="xl" fallback="XL" />
                  <Text variant="caption" className="block mt-1">XL (64px)</Text>
                </div>
              </div>
            </div>

            {/* Avatar Color Variants - Circular */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Color Variants (Circular)</Text>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <Avatar variant="default" icon={<IconUser />} />
                  <Text variant="caption" className="block mt-1">Default</Text>
                </div>
                <div className="text-center">
                  <Avatar variant="primary" icon={<IconUser />} />
                  <Text variant="caption" className="block mt-1">Primary</Text>
                </div>
                <div className="text-center">
                  <Avatar variant="secondary" icon={<IconUser />} />
                  <Text variant="caption" className="block mt-1">Secondary</Text>
                </div>
                <div className="text-center">
                  <Avatar variant="info" icon={<IconUser />} />
                  <Text variant="caption" className="block mt-1">Info</Text>
                </div>
                <div className="text-center">
                  <Avatar variant="success" icon={<IconUser />} />
                  <Text variant="caption" className="block mt-1">Success</Text>
                </div>
                <div className="text-center">
                  <Avatar variant="warning" icon={<IconUser />} />
                  <Text variant="caption" className="block mt-1">Warning</Text>
                </div>
                <div className="text-center">
                  <Avatar variant="error" icon={<IconUser />} />
                  <Text variant="caption" className="block mt-1">Error</Text>
                </div>
              </div>
            </div>

            {/* Avatar Shapes */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Avatar Shapes</Text>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <Avatar shape="circular" variant="primary" fallback="CI" />
                  <Text variant="caption" className="block mt-1">Circular</Text>
                </div>
                <div className="text-center">
                  <Avatar shape="rounded" variant="primary" fallback="RO" />
                  <Text variant="caption" className="block mt-1">Rounded</Text>
                </div>
                <div className="text-center">
                  <Avatar shape="square" variant="primary" fallback="SQ" />
                  <Text variant="caption" className="block mt-1">Square</Text>
                </div>
              </div>
            </div>

            {/* Avatar with Initials */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Avatar with Initials</Text>
              <div className="flex items-center gap-4">
                <Avatar variant="primary" fallback="John Doe" />
                <Avatar variant="secondary" fallback="Jane Smith" />
                <Avatar variant="success" fallback="Alex Johnson" />
                <Avatar variant="warning" fallback="Chris Brown" />
                <Avatar variant="error" fallback="Taylor Davis" />
              </div>
            </div>

            {/* Avatar with Custom Icons */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Avatar with Custom Icons</Text>
              <div className="flex items-center gap-4">
                <Avatar variant="primary" icon={<IconSettings />} />
                <Avatar variant="info" icon={<IconHeart />} />
                <Avatar variant="success" icon={<IconStar />} />
                <Avatar variant="warning" icon={<IconHome />} />
                <Avatar variant="error" icon={<IconSearch />} />
              </div>
            </div>

            {/* Avatar with Images */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Avatar with Images (with fallbacks)</Text>
              <div className="flex items-center gap-4">
                <Avatar 
                  src="https://unavatar.io/github/vercel" 
                  alt="Vercel"
                  fallback="VE"
                  variant="primary"
                />
                <Avatar 
                  src="https://unavatar.io/github/shadcn" 
                  alt="shadcn"
                  fallback="SH"
                  variant="secondary"
                />
                <Avatar 
                  src="https://invalid-image-url.jpg" 
                  alt="Broken Image"
                  fallback="BR"
                  variant="error"
                />
              </div>
            </div>

            {/* Different Sizes with Colors - Rounded */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Mixed Sizes & Colors (Rounded)</Text>
              <div className="flex items-center gap-4">
                <Avatar size="xs" shape="rounded" variant="primary" fallback="XS" />
                <Avatar size="sm" shape="rounded" variant="secondary" fallback="SM" />
                <Avatar size="md" shape="rounded" variant="info" fallback="MD" />
                <Avatar size="lg" shape="rounded" variant="success" fallback="LG" />
                <Avatar size="xl" shape="rounded" variant="warning" fallback="XL" />
              </div>
            </div>
          </div>
        </section>

        {/* Layout Components Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Layout Components</Heading>
          
          {/* Container Examples */}
          <div className="space-y-6">
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Container Sizes</Text>
              <div className="space-y-4">
                <Container size="sm" className="bg-gray-50 p-4 rounded">
                  <Text variant="body-sm">Small Container (max-w-lg)</Text>
                </Container>
                <Container size="md" className="bg-gray-50 p-4 rounded">
                  <Text variant="body-sm">Medium Container (max-w-3xl)</Text>
                </Container>
                <Container size="lg" className="bg-gray-50 p-4 rounded">
                  <Text variant="body-sm">Large Container (max-w-5xl) - Default</Text>
                </Container>
                <Container size="xl" className="bg-gray-50 p-4 rounded">
                  <Text variant="body-sm">Extra Large Container (max-w-7xl)</Text>
                </Container>
              </div>
            </div>

            {/* Stack Examples */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Stack Layouts</Text>
              <div className="space-y-6">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Vertical Stack (Column)</Text>
                  <Stack direction="column" spacing="md" className="bg-gray-50 p-4 rounded max-w-xs">
                    <Button size="sm">Item 1</Button>
                    <Button size="sm" variant="secondary">Item 2</Button>
                    <Button size="sm" variant="outline-primary">Item 3</Button>
                  </Stack>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Horizontal Stack (Row)</Text>
                  <Stack direction="row" spacing="md" className="bg-gray-50 p-4 rounded">
                    <Button size="sm">Left</Button>
                    <Button size="sm" variant="secondary">Center</Button>
                    <Button size="sm" variant="outline-primary">Right</Button>
                  </Stack>
                </div>

                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Stack with Different Spacing</Text>
                  <div className="grid gap-4">
                    <Stack direction="row" spacing="xs" className="bg-gray-50 p-3 rounded">
                      <div className="w-8 h-8 bg-primary-main rounded"></div>
                      <div className="w-8 h-8 bg-secondary-main rounded"></div>
                      <div className="w-8 h-8 bg-success-main rounded"></div>
                      <Text variant="caption">XS Spacing</Text>
                    </Stack>
                    <Stack direction="row" spacing="lg" className="bg-gray-50 p-3 rounded">
                      <div className="w-8 h-8 bg-primary-main rounded"></div>
                      <div className="w-8 h-8 bg-secondary-main rounded"></div>
                      <div className="w-8 h-8 bg-success-main rounded"></div>
                      <Text variant="caption">LG Spacing</Text>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Component Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Card Component Variations</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Default Card */}
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with default styling and shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This is the default card variant with standard padding and shadow-sm.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
                <Button size="sm" variant="outline-default">Cancel</Button>
              </CardFooter>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Card with enhanced shadow for emphasis.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This elevated card uses shadow-md for a more prominent appearance.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Outlined Card */}
            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardDescription>Card with prominent border and no shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This outlined card emphasizes the border instead of using shadows.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="text-primary">View Details</Button>
              </CardFooter>
            </Card>

            {/* Filled Card */}
            <Card variant="filled">
              <CardHeader>
                <CardTitle>Filled Card</CardTitle>
                <CardDescription>Card with subtle background fill.</CardDescription>
              </CardHeader>
              <CardContent>
                <Text variant="body-sm">
                  This filled card uses a light background color instead of white.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="error">Delete</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Card with different padding */}
          <div>
            <Text variant="caption" color="secondary" className="mb-3 block">Card Padding Variations</Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card padding="sm">
                <CardHeader padding="sm">
                  <CardTitle>Small Padding</CardTitle>
                </CardHeader>
                <CardContent padding="sm">
                  <Text variant="body-sm">Compact card layout</Text>
                </CardContent>
              </Card>
              
              <Card padding="md">
                <CardHeader padding="md">
                  <CardTitle>Medium Padding</CardTitle>
                </CardHeader>
                <CardContent padding="md">
                  <Text variant="body-sm">Default card layout</Text>
                </CardContent>
              </Card>
              
              <Card padding="lg">
                <CardHeader padding="lg">
                  <CardTitle>Large Padding</CardTitle>
                </CardHeader>
                <CardContent padding="lg">
                  <Text variant="body-sm">Spacious card layout</Text>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="space-y-6">
          <Heading level={2}>Interactive Examples</Heading>
          
          <div className="space-y-6">
            {/* Form Example */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Example</CardTitle>
                <CardDescription>A complete form showcasing various input components</CardDescription>
              </CardHeader>
              <CardContent>
                <Stack direction="column" spacing="lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Text variant="body-sm" className="mb-1 block font-medium">First Name</Text>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <Text variant="body-sm" className="mb-1 block font-medium">Last Name</Text>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Text variant="body-sm" className="mb-1 block font-medium">Email</Text>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <Text variant="body-sm" className="mb-1 block font-medium">Message</Text>
                    <Textarea placeholder="Tell us how we can help you..." />
                  </div>
                </Stack>
              </CardContent>
              <CardFooter>
                <Button>Send Message</Button>
                <Button variant="outline-default">Save Draft</Button>
              </CardFooter>
            </Card>

            {/* Component Composition Example */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Component Composition</CardTitle>
                <CardDescription>Demonstrating how components work together</CardDescription>
              </CardHeader>
              <CardContent>
                <Container size="sm">
                  <Stack direction="column" spacing="md">
                    <Text variant="body">
                      This example shows how ForteUI components compose naturally together
                      using the design system's consistent spacing and color tokens.
                    </Text>
                    <Stack direction="row" spacing="sm" align="center">
                      <div className="w-3 h-3 bg-success-main rounded-full"></div>
                      <Text variant="body-sm" color="secondary">Design tokens ensure consistency</Text>
                    </Stack>
                    <Stack direction="row" spacing="sm" align="center">
                      <div className="w-3 h-3 bg-primary-main rounded-full"></div>
                      <Text variant="body-sm" color="secondary">Plus Jakarta Sans typography</Text>
                    </Stack>
                    <Stack direction="row" spacing="sm" align="center">
                      <div className="w-3 h-3 bg-secondary-main rounded-full"></div>
                      <Text variant="body-sm" color="secondary">Accessible color combinations</Text>
                    </Stack>
                  </Stack>
                </Container>
              </CardContent>
              <CardFooter>
                <Button variant="text-primary">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Icons System Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Icons System</Heading>
          <Text variant="body" color="secondary" className="mb-4">
            5900+ Tabler Icons integrated with the design system. Icons automatically inherit color and sizing from your design tokens.
          </Text>
          
          {/* Icon Sizes */}
          <div className="space-y-4">
            <Heading level={3}>Icon Sizes</Heading>
            <div className="flex items-center gap-6 p-4 border rounded-lg">
              <div className="text-center">
                <IconHome size={16} className="text-primary-main mx-auto mb-1" />
                <Text variant="caption" color="secondary">16px</Text>
              </div>
              <div className="text-center">
                <IconUser size={20} className="text-primary-main mx-auto mb-1" />
                <Text variant="caption" color="secondary">20px</Text>
              </div>
              <div className="text-center">
                <IconSearch size={24} className="text-primary-main mx-auto mb-1" />
                <Text variant="caption" color="secondary">24px (default)</Text>
              </div>
              <div className="text-center">
                <IconSettings size={32} className="text-primary-main mx-auto mb-1" />
                <Text variant="caption" color="secondary">32px</Text>
              </div>
              <div className="text-center">
                <IconHeart size={40} className="text-primary-main mx-auto mb-1" />
                <Text variant="caption" color="secondary">40px</Text>
              </div>
            </div>
          </div>

          {/* Icon Colors */}
          <div className="space-y-4">
            <Heading level={3}>Icon Colors</Heading>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <IconStar size={24} className="text-primary-main mx-auto mb-2" />
                <Text variant="caption" color="secondary">Primary</Text>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <IconHeart size={24} className="text-secondary-main mx-auto mb-2" />
                <Text variant="caption" color="secondary">Secondary</Text>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <IconCheck size={24} className="text-success-main mx-auto mb-2" />
                <Text variant="caption" color="secondary">Success</Text>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <IconAlertTriangle size={24} className="text-warning-main mx-auto mb-2" />
                <Text variant="caption" color="secondary">Warning</Text>
              </div>
            </div>
          </div>

          {/* Common Icons Grid */}
          <div className="space-y-4">
            <Heading level={3}>Common Icons</Heading>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-4 border rounded-lg">
              <div className="text-center">
                <IconHome size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">Home</Text>
              </div>
              <div className="text-center">
                <IconUser size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">User</Text>
              </div>
              <div className="text-center">
                <IconSearch size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">Search</Text>
              </div>
              <div className="text-center">
                <IconSettings size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">Settings</Text>
              </div>
              <div className="text-center">
                <IconEdit size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">Edit</Text>
              </div>
              <div className="text-center">
                <IconTrash size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">Delete</Text>
              </div>
              <div className="text-center">
                <IconEye size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">View</Text>
              </div>
              <div className="text-center">
                <IconDownload size={24} className="text-gray-700 mx-auto mb-1" />
                <Text variant="caption" color="secondary">Download</Text>
              </div>
            </div>
          </div>

          {/* Icons in Buttons */}
          <div className="space-y-6">
            <Heading level={3}>Icons in Components</Heading>
            
            {/* Contained Buttons - Icons are WHITE for contrast */}
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-700">Contained Buttons (White Icons)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">
                  <IconPlus size={16} />
                  <span>Add Item</span>
                </Button>
                <Button variant="info">
                  <IconInfoCircle size={16} />
                  <span>Info</span>
                </Button>
                <Button variant="success">
                  <IconCheck size={16} />
                  <span>Success</span>
                </Button>
                <Button variant="error">
                  <IconTrash size={16} />
                  <span>Delete</span>
                </Button>
              </div>
            </div>

            {/* Outlined Buttons - Icons match theme color */}
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-700">Outlined Buttons (Theme Color Icons)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline-primary">
                  <IconUser size={16} />
                  <span>Profile</span>
                </Button>
                <Button variant="outline-warning">
                  <IconAlertTriangle size={16} />
                  <span>Warning</span>
                </Button>
                <Button variant="outline-success">
                  <IconDownload size={16} />
                  <span>Download</span>
                </Button>
              </div>
            </div>

            {/* Text Buttons - Icons match theme color */}
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-700">Text Buttons (Theme Color Icons)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="text-default">
                  <IconEdit size={16} />
                  <span>Edit</span>
                </Button>
                <Button variant="text-primary">
                  <IconHeart size={16} />
                  <span>Like</span>
                </Button>
                <Button variant="text-success">
                  <IconStar size={16} />
                  <span>Favorite</span>
                </Button>
              </div>
            </div>

            {/* Soft Buttons - Icons are darker theme color */}
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-700">Soft Buttons (Dark Theme Color Icons)</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="soft-primary">
                  <IconSettings size={16} />
                  <span>Settings</span>
                </Button>
                <Button variant="soft-error">
                  <IconX size={16} />
                  <span>Close</span>
                </Button>
                <Button variant="soft-info">
                  <IconEye size={16} />
                  <span>View</span>
                </Button>
              </div>
            </div>

            {/* Icon-only Buttons - Using dedicated icon button variants */}
            <div className="space-y-3">
              <Text variant="body-sm" className="font-medium text-gray-700">Icon-only Buttons (Circular)</Text>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="icon-default" size="icon-sm">
                  <IconSearch className="w-5 h-5" />
                </Button>
                <Button variant="icon-default" size="icon-sm">
                  <IconSettings className="w-5 h-5" />
                </Button>
                <Button variant="icon-primary" size="icon-sm">
                  <IconHeart className="w-5 h-5" />
                </Button>
                <Button variant="icon-primary" size="icon-sm">
                  <IconPlus className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Status Icons */}
          <div className="space-y-4">
            <Heading level={3}>Status & Feedback Icons</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <Stack direction="row" spacing="sm" align="center">
                    <IconCheck size={20} className="text-success-main" />
                    <div>
                      <Text variant="body" className="font-medium">Success</Text>
                      <Text variant="body-sm" color="secondary">Task completed successfully</Text>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Stack direction="row" spacing="sm" align="center">
                    <IconAlertTriangle size={20} className="text-warning-main" />
                    <div>
                      <Text variant="body" className="font-medium">Warning</Text>
                      <Text variant="body-sm" color="secondary">Please review your input</Text>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Stack direction="row" spacing="sm" align="center">
                    <IconInfoCircle size={20} className="text-info-main" />
                    <div>
                      <Text variant="body" className="font-medium">Information</Text>
                      <Text variant="body-sm" color="secondary">Additional details available</Text>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Stack direction="row" spacing="sm" align="center">
                    <IconX size={20} className="text-error-main" />
                    <div>
                      <Text variant="body" className="font-medium">Error</Text>
                      <Text variant="body-sm" color="secondary">Something went wrong</Text>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation Icons - Using dedicated icon button variants */}
          <div className="space-y-4">
            <Heading level={3}>Navigation Icons</Heading>
            <div className="flex gap-2 p-4 border rounded-lg">
              <Button variant="icon-default" size="icon-sm">
                <IconArrowLeft className="w-5 h-5" />
              </Button>
              <Button variant="icon-default" size="icon-sm">
                <IconArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="icon-default" size="icon-sm">
                <IconChevronDown className="w-5 h-5" />
              </Button>
              <div className="ml-4 flex items-center gap-2">
                <Text variant="body-sm" color="secondary">Perfect for navigation, dropdowns, and UI controls</Text>
              </div>
            </div>
          </div>
        </section>

        {/* Shadow Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Shadow System</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <Text variant="body-sm" className="font-medium">Shadow SM</Text>
            </div>
            <div className="p-6 bg-white rounded-lg shadow border">
              <Text variant="body-sm" className="font-medium">Shadow Base</Text>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border">
              <Text variant="body-sm" className="font-medium">Shadow MD</Text>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border">
              <Text variant="body-sm" className="font-medium">Shadow LG</Text>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-xl border">
              <Text variant="body-sm" className="font-medium">Shadow XL</Text>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-2xl border">
              <Text variant="body-sm" className="font-medium">Shadow 2XL</Text>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
