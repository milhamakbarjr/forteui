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
  Badge,
  Chip,
  Checkbox,
  Radio,
  RadioGroup,
  Breadcrumb,
  Alert,
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
  IconDownload,
  IconNotification,
  IconMail,
  IconShoppingCart,
  IconMessage
} from '@forte-ui/core';
import { useState } from 'react';

// Avatar Images - Using public folder paths
const avatarImage1 = '/image-avatar1.avif';
const avatarImage2 = '/image-avatar2.avif';
const avatarImage3 = '/image-avatar3.avif';
const avatarImage4 = '/image-avatar4.avif';
const avatarImage5 = '/image-avatar5.avif';

// Checkbox Example Components
function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <Checkbox 
          checked={isChecked}
          onCheckedChange={setIsChecked}
          label="I agree to the terms and conditions"
          variant="primary"
        />
      </div>
      <Text variant="body-sm" color="secondary">
        Status: {isChecked ? 'Agreed' : 'Not agreed'}
      </Text>
    </div>
  );
}

function CheckboxGroupExample() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions(prev => [...prev, option]);
    } else {
      setSelectedOptions(prev => prev.filter(item => item !== option));
    }
  };

  const options = [
    { id: 'newsletter', label: 'Subscribe to newsletter', variant: 'primary' as const },
    { id: 'updates', label: 'Receive product updates', variant: 'info' as const },
    { id: 'marketing', label: 'Marketing communications', variant: 'success' as const },
    { id: 'analytics', label: 'Analytics and performance', variant: 'warning' as const }
  ];

  return (
    <div className="space-y-4">
      <Text variant="body-sm" className="font-medium">Select your preferences:</Text>
      <div className="space-y-3">
        {options.map(option => (
          <Checkbox
            key={option.id}
            label={option.label}
            variant={option.variant}
            checked={selectedOptions.includes(option.id)}
            onCheckedChange={(checked: boolean) => handleOptionChange(option.id, checked)}
          />
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <Text variant="body-sm" className="font-medium">Selected options:</Text>
        <Text variant="body-sm" color="secondary">
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'None selected'}
        </Text>
      </div>
    </div>
  );
}

// Radio Group Example Components
function RadioGroupExample() {
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  
  return (
    <div className="space-y-4">
      <Text variant="caption" color="secondary" className="mb-3 block">Radio Group Example - Single Selection</Text>
      <RadioGroup
        value={selectedOption}
        onValueChange={setSelectedOption}
        name="preferences"
        variant="primary"
      >
        <Radio value="option1" label="Enable notifications" />
        <Radio value="option2" label="Enable email updates" />
        <Radio value="option3" label="Enable SMS alerts" />
        <Radio value="option4" label="Disable all communications" />
      </RadioGroup>
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <Text variant="body-sm" className="font-medium">Selected option:</Text>
        <Text variant="body-sm" color="secondary">
          {selectedOption}
        </Text>
      </div>
    </div>
  );
}

function SemanticRadioGroupExample() {
  const [selectedPriority, setSelectedPriority] = useState<string>('medium');
  
  const priorityOptions = [
    { value: 'low', label: 'Low Priority', variant: 'info' as const },
    { value: 'medium', label: 'Medium Priority', variant: 'warning' as const },
    { value: 'high', label: 'High Priority', variant: 'error' as const },
    { value: 'critical', label: 'Critical Priority', variant: 'error' as const }
  ];

  return (
    <div className="space-y-4">
      <Text variant="caption" color="secondary" className="mb-3 block">Semantic Colors Example - Priority Selection</Text>
      <div className="space-y-3">
        {priorityOptions.map(option => (
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            variant={option.variant}
            name="priority"
            checked={selectedPriority === option.value}
            onCheckedChange={() => setSelectedPriority(option.value)}
          />
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded">
        <Text variant="body-sm" className="font-medium">Selected priority:</Text>
        <Text variant="body-sm" color="secondary">
          {priorityOptions.find(opt => opt.value === selectedPriority)?.label || 'None'}
        </Text>
      </div>
    </div>
  );
}

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
          
          {/* Input Component Showcase */}
          <div className="space-y-8">
            {/* Input States - Figma Inspired */}
            <div>
              <Text variant="caption" color="secondary" className="mb-4 block">Input States (Figma Specification)</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="space-y-4">
                  <Text variant="body-sm" className="font-medium text-gray-700">Default States</Text>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Default (placeholder)</Text>
                    <Input placeholder="Label" />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">With Value</Text>
                    <Input label="Label" defaultValue="Value" />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Disabled (placeholder centered)</Text>
                    <Input label="Label" disabled />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Disabled with Value</Text>
                    <Input label="Label" defaultValue="Disabled" disabled />
                  </div>
                </div>

                <div className="space-y-4">
                  <Text variant="body-sm" className="font-medium text-gray-700">Interactive States</Text>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Hover (hover over input)</Text>
                    <Input label="Label" defaultValue="Hovered" />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Focus (click to focus)</Text>
                    <Input label="Label" placeholder="Click to focus and see 2px border" />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Error State</Text>
                    <Input 
                      label="Label" 
                      variant="error" 
                      defaultValue="Incorrect" 
                      helperText="Caption text, description, notification"
                      helperIcon={<IconAlertTriangle size={16} />}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Input Sizes */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Input Sizes</Text>
              <div className="grid gap-3 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Small (40px height)</Text>
                  <Input size="sm" label="Small Label" placeholder="Small input" />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Medium (54px height)</Text>
                  <Input size="md" label="Medium Label" placeholder="Medium input (default)" />
                </div>
              </div>
            </div>

            {/* Floating Labels */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Floating Label Behavior</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Empty (label in center)</Text>
                  <Input label="Email Address" />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">With Value (label floated)</Text>
                  <Input label="Email Address" defaultValue="john@example.com" />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Error State (red label)</Text>
                  <Input 
                    label="Email Address" 
                    variant="error" 
                    defaultValue="invalid-email" 
                    helperText="Please enter a valid email address"
                    helperIcon={<IconAlertTriangle size={16} />}
                  />
                </div>
              </div>
            </div>

            {/* Input with Helper Text */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Helper Text & Icons</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Info Helper</Text>
                  <Input 
                    label="Username" 
                    placeholder="Enter username"
                    helperText="Caption text, description, notification"
                    helperIcon={<IconInfoCircle size={16} />}
                  />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Error Helper</Text>
                  <Input 
                    label="Password" 
                    type="password"
                    variant="error"
                    defaultValue="123"
                    helperText="Password must be at least 8 characters"
                    helperIcon={<IconAlertTriangle size={16} />}
                  />
                </div>
              </div>
            </div>

            {/* Input with End Adornments */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">End Adornments</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Search Icon</Text>
                  <Input 
                    label="Search" 
                    placeholder="Search for anything..."
                    endAdornment={<IconSearch size={20} className="text-gray-500" />}
                  />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Settings Icon</Text>
                  <Input 
                    label="Configuration" 
                    defaultValue="Advanced settings"
                    endAdornment={<IconSettings size={20} className="text-gray-500" />}
                  />
                </div>
              </div>
            </div>

            {/* Filled Variant Showcase */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Filled Variant (Background-based)</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Default State (grey-8 background)</Text>
                  <Input variant="filled" label="Email Address" placeholder="Enter your email" />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">With Value (hover for grey-16)</Text>
                  <Input variant="filled" label="Full Name" defaultValue="John Doe" />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Error State (error-8 background)</Text>
                  <Input 
                    variant="filled" 
                    error
                    label="Password" 
                    type="password"
                    defaultValue="123"
                    helperText="Password must be at least 8 characters"
                    helperIcon={<IconAlertTriangle size={16} />}
                  />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Disabled State</Text>
                  <Input variant="filled" label="Username" defaultValue="disabled_user" disabled />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">With End Adornment</Text>
                  <Input 
                    variant="filled" 
                    label="Search" 
                    placeholder="Search anything..."
                    endAdornment={<IconSearch size={20} className="text-gray-500" />}
                  />
                </div>
              </div>
            </div>

            {/* Variant Comparison */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Variant Comparison</Text>
              <div className="grid gap-4 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Default (Border-based)</Text>
                    <Input label="Email Address" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Filled (Background-based)</Text>
                    <Input variant="filled" label="Email Address" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Default with Value</Text>
                    <Input label="Full Name" defaultValue="John Doe" />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Filled with Value</Text>
                    <Input variant="filled" label="Full Name" defaultValue="John Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Default Error</Text>
                    <Input 
                      variant="error" 
                      label="Password" 
                      defaultValue="123"
                      helperText="Too short"
                    />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Filled Error</Text>
                    <Input 
                      variant="filled" 
                      error
                      label="Password" 
                      defaultValue="123"
                      helperText="Too short"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Border Specifications */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <Text variant="body-sm" className="font-medium mb-3 block">Specifications (Figma)</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Default Variant (Border-based)</Text>
                  <div className="grid gap-2 text-sm text-gray-600">
                    <div>• Default: 1px outline, rgba(147, 161, 174, 0.20)</div>
                    <div>• Hover: 1px outline, #1F2933 (text-primary)</div>
                    <div>• Focus: 2px outline, #1F2933 (text-primary)</div>
                    <div>• Error: 2px outline, #FF5833 (error-main)</div>
                    <div>• Disabled: 1px outline, rgba(147, 161, 174, 0.20) + 50% opacity</div>
                    <div>• Padding: 14px left/right</div>
                  </div>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Filled Variant (Background-based)</Text>
                  <div className="grid gap-2 text-sm text-gray-600">
                    <div>• Default: grey-8 background (rgba(147, 161, 174, 0.08))</div>
                    <div>• Hover: grey-16 background (rgba(147, 161, 174, 0.16))</div>
                    <div>• Focus: grey-16 background (rgba(147, 161, 174, 0.16))</div>
                    <div>• Error: error-8 background (rgba(255, 88, 51, 0.08))</div>
                    <div>• Disabled: grey-8 background + 50% opacity</div>
                    <div>• Padding: 12px left, 10px right</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-gray-600">
                <Text variant="body-sm" className="font-medium mb-2 block">Common Properties</Text>
                <div>• Border Radius: 8px</div>
                <div>• Height: 54px (medium), 40px (small)</div>
                <div>• Typography: 15px font size, Plus Jakarta Sans</div>
                <div>• Label floating behavior: Same for both variants</div>
              </div>
            </div>
          </div>

          {/* Textarea Showcase */}
          <div className="space-y-8">
            <Heading level={3}>Textarea Component</Heading>
            
            {/* Textarea States - Following Input Pattern */}
            <div>
              <Text variant="caption" color="secondary" className="mb-4 block">Textarea States (Following Input Pattern)</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="space-y-4">
                  <Text variant="body-sm" className="font-medium text-gray-700">Default Variant (Outline)</Text>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Default (placeholder)</Text>
                    <Textarea placeholder="Enter your message..." />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">With Label</Text>
                    <Textarea label="Message" placeholder="Type your message here..." />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">With Value (floating label)</Text>
                    <Textarea 
                      label="Feedback" 
                      defaultValue="This is a sample message with some content to show how the textarea behaves with text."
                    />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Error State</Text>
                    <Textarea 
                      label="Comments" 
                      error
                      defaultValue="Short"
                      helperText="Message must be at least 20 characters long"
                      helperIcon={<IconAlertTriangle size={16} />}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Text variant="body-sm" className="font-medium text-gray-700">Filled Variant (Background)</Text>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Default State (grey-8 background)</Text>
                    <Textarea variant="filled" placeholder="Enter your message..." />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">With Label</Text>
                    <Textarea variant="filled" label="Description" placeholder="Type your description here..." />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">With Value (hover for grey-16)</Text>
                    <Textarea 
                      variant="filled"
                      label="Review" 
                      defaultValue="This product exceeded my expectations. The quality is excellent and delivery was fast."
                    />
                  </div>
                  
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Error State (error-8 background)</Text>
                    <Textarea 
                      variant="filled"
                      label="Reason"
                      error
                      defaultValue="Too short"
                      helperText="Please provide a detailed explanation"
                      helperIcon={<IconAlertTriangle size={16} />}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Textarea Sizes */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Textarea Sizes</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Small (60px min-height)</Text>
                  <Textarea size="sm" label="Small Note" placeholder="Brief note..." />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Medium (98px min-height)</Text>
                  <Textarea size="md" label="Message" placeholder="Your message here..." />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Large (120px min-height)</Text>
                  <Textarea size="lg" label="Detailed Feedback" placeholder="Please provide detailed feedback..." />
                </div>
              </div>
            </div>

            {/* Textarea with Helper Text */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Helper Text & Icons</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Info Helper (Outline)</Text>
                  <Textarea 
                    label="Bio" 
                    placeholder="Tell us about yourself..."
                    helperText="This will be displayed on your public profile"
                    helperIcon={<IconInfoCircle size={16} />}
                  />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Error Helper (Filled)</Text>
                  <Textarea 
                    variant="filled"
                    label="Requirements" 
                    error
                    defaultValue="Basic requirements"
                    helperText="Please provide more detailed requirements (min 50 characters)"
                    helperIcon={<IconAlertTriangle size={16} />}
                  />
                </div>
              </div>
            </div>

            {/* Disabled States */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Disabled States</Text>
              <div className="grid gap-4 max-w-md">
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Disabled (Outline)</Text>
                  <Textarea label="Comments" defaultValue="This field is disabled" disabled />
                </div>
                <div>
                  <Text variant="caption" className="mb-2 block text-gray-600">Disabled (Filled)</Text>
                  <Textarea variant="filled" label="Notes" defaultValue="This field is disabled" disabled />
                </div>
              </div>
            </div>

            {/* Variant Comparison */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Variant Comparison</Text>
              <div className="grid gap-4 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Outline (Border-based)</Text>
                    <Textarea label="Message" placeholder="Enter your message..." />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Filled (Background-based)</Text>
                    <Textarea variant="filled" label="Message" placeholder="Enter your message..." />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Outline with Value</Text>
                    <Textarea label="Feedback" defaultValue="Great product! Really satisfied with the quality and customer service." />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Filled with Value</Text>
                    <Textarea variant="filled" label="Feedback" defaultValue="Great product! Really satisfied with the quality and customer service." />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Outline Error</Text>
                    <Textarea 
                      label="Reason" 
                      error
                      defaultValue="Too brief"
                      helperText="Please provide more details"
                    />
                  </div>
                  <div>
                    <Text variant="caption" className="mb-2 block text-gray-600">Filled Error</Text>
                    <Textarea 
                      variant="filled"
                      label="Reason"
                      error
                      defaultValue="Too brief"
                      helperText="Please provide more details"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Textarea Specifications */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <Text variant="body-sm" className="font-medium mb-3 block">Textarea Specifications</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Outline Variant (Border-based)</Text>
                  <div className="grid gap-2 text-sm text-gray-600">
                    <div>• Default: 1px outline, rgba(147, 161, 174, 0.20)</div>
                    <div>• Hover: 1px outline, #1F2933 (text-primary)</div>
                    <div>• Focus: 2px outline, #1F2933 (text-primary)</div>
                    <div>• Error: 2px outline, #FF5833 (error-main)</div>
                    <div>• Disabled: 1px outline, rgba(147, 161, 174, 0.20) + 50% opacity</div>
                    <div>• Padding: 14px all around</div>
                  </div>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Filled Variant (Background-based)</Text>
                  <div className="grid gap-2 text-sm text-gray-600">
                    <div>• Default: grey-8 background (rgba(147, 161, 174, 0.08))</div>
                    <div>• Hover: grey-16 background (rgba(147, 161, 174, 0.16))</div>
                    <div>• Focus: grey-16 background (rgba(147, 161, 174, 0.16))</div>
                    <div>• Error: error-8 background (rgba(255, 88, 51, 0.08))</div>
                    <div>• Disabled: grey-8 background + 50% opacity</div>
                    <div>• Padding: 12px all around</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-gray-600">
                <Text variant="body-sm" className="font-medium mb-2 block">Common Properties</Text>
                <div>• Border Radius: 8px</div>
                <div>• Min Heights: Small (60px), Medium (98px), Large (120px)</div>
                <div>• Typography: 15px font size, Plus Jakarta Sans</div>
                <div>• Resize: Vertical only (resize-y)</div>
                <div>• Floating label behavior: Same as Input component</div>
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Components Showcase */}
        <section className="space-y-8">
          <Heading level={2}>Avatar Component</Heading>
          
          <div className="space-y-8">
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

            {/* Figma Pattern: Circular Image Avatars (border-radius: 500px) */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
              <div>
                <Heading level={3}>Circular Image Avatars</Heading>
                <Text variant="body-sm" color="secondary" className="mt-1">
                  Figma Pattern: Circular avatars with border-radius: 500px (All sizes 24px-64px)
                </Text>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Avatar 
                    size="xs" 
                    shape="circular" 
                    src={avatarImage1} 
                    alt="Avatar 1"
                    fallback="A1" 
                  />
                  <Text variant="caption" className="block mt-1">24px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="sm" 
                    shape="circular" 
                    src={avatarImage2} 
                    alt="Avatar 2"
                    fallback="A2" 
                  />
                  <Text variant="caption" className="block mt-1">32px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="md" 
                    shape="circular" 
                    src={avatarImage3} 
                    alt="Avatar 3"
                    fallback="A3" 
                  />
                  <Text variant="caption" className="block mt-1">40px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="lg" 
                    shape="circular" 
                    src={avatarImage4} 
                    alt="Avatar 4"
                    fallback="A4" 
                  />
                  <Text variant="caption" className="block mt-1">48px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="xl" 
                    shape="circular" 
                    src={avatarImage5} 
                    alt="Avatar 5"
                    fallback="A5" 
                  />
                  <Text variant="caption" className="block mt-1">64px</Text>
                </div>
              </div>
            </div>

            {/* Figma Pattern: Rounded Image Avatars (border-radius: 12px) */}
            <div className="space-y-4 p-6 bg-blue-50 rounded-lg">
              <div>
                <Heading level={3}>Rounded Image Avatars</Heading>
                <Text variant="body-sm" color="secondary" className="mt-1">
                  Figma Pattern: Rounded avatars with border-radius: 12px (All sizes 24px-64px)
                </Text>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Avatar 
                    size="xs" 
                    shape="rounded" 
                    src={avatarImage2} 
                    alt="Avatar 2"
                    fallback="A2" 
                  />
                  <Text variant="caption" className="block mt-1">24px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="sm" 
                    shape="rounded" 
                    src={avatarImage3} 
                    alt="Avatar 3"
                    fallback="A3" 
                  />
                  <Text variant="caption" className="block mt-1">32px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="md" 
                    shape="rounded" 
                    src={avatarImage4} 
                    alt="Avatar 4"
                    fallback="A4" 
                  />
                  <Text variant="caption" className="block mt-1">40px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="lg" 
                    shape="rounded" 
                    src={avatarImage5} 
                    alt="Avatar 5"
                    fallback="A5" 
                  />
                  <Text variant="caption" className="block mt-1">48px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="xl" 
                    shape="rounded" 
                    src={avatarImage1} 
                    alt="Avatar 1"
                    fallback="A1" 
                  />
                  <Text variant="caption" className="block mt-1">64px</Text>
                </div>
              </div>
            </div>

            {/* Figma Pattern: Square Image Avatars (no border-radius) */}
            <div className="space-y-4 p-6 bg-green-50 rounded-lg">
              <div>
                <Heading level={3}>Square Image Avatars</Heading>
                <Text variant="body-sm" color="secondary" className="mt-1">
                  Figma Pattern: Square avatars with no border-radius (All sizes 24px-64px)
                </Text>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Avatar 
                    size="xs" 
                    shape="square" 
                    src={avatarImage3} 
                    alt="Avatar 3"
                    fallback="A3" 
                  />
                  <Text variant="caption" className="block mt-1">24px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="sm" 
                    shape="square" 
                    src={avatarImage4} 
                    alt="Avatar 4"
                    fallback="A4" 
                  />
                  <Text variant="caption" className="block mt-1">32px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="md" 
                    shape="square" 
                    src={avatarImage5} 
                    alt="Avatar 5"
                    fallback="A5" 
                  />
                  <Text variant="caption" className="block mt-1">40px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="lg" 
                    shape="square" 
                    src={avatarImage1} 
                    alt="Avatar 1"
                    fallback="A1" 
                  />
                  <Text variant="caption" className="block mt-1">48px</Text>
                </div>
                <div className="text-center">
                  <Avatar 
                    size="xl" 
                    shape="square" 
                    src={avatarImage2} 
                    alt="Avatar 2"
                    fallback="A2" 
                  />
                  <Text variant="caption" className="block mt-1">64px</Text>
                </div>
              </div>
            </div>

            {/* Avatar with Images - Updated with Local Images */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Avatar with Images (Local Images & Fallbacks)</Text>
              <div className="flex items-center gap-4">
                <Avatar 
                  src={avatarImage1} 
                  alt="Avatar 1"
                  fallback="A1"
                  variant="primary"
                />
                <Avatar 
                  src={avatarImage2} 
                  alt="Avatar 2"
                  fallback="A2"
                  variant="secondary"
                />
                <Avatar 
                  src={avatarImage3} 
                  alt="Avatar 3"
                  fallback="A3"
                  variant="info"
                />
                <Avatar 
                  src={avatarImage4} 
                  alt="Avatar 4"
                  fallback="A4"
                  variant="success"
                />
                <Avatar 
                  src={avatarImage5} 
                  alt="Avatar 5"
                  fallback="A5"
                  variant="warning"
                />
                <Avatar 
                  src="https://invalid-image-url.jpg" 
                  alt="Broken Image"
                  fallback="BR"
                  variant="error"
                />
              </div>
            </div>

            {/* Avatar Status Badges - NEW FEATURE */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Avatar Status Badges (NEW)</Text>
              <div className="space-y-6">
                {/* Circular Avatars with Status */}
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Circular Avatars with Status</Text>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <Avatar 
                        src={avatarImage1} 
                        alt="Online User"
                        status="online"
                        size="md"
                        shape="circular"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">Online</Text>
                    </div>
                    <div className="text-center">
                      <Avatar 
                        src={avatarImage2} 
                        alt="Away User"
                        status="away"
                        size="md"
                        shape="circular"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">Away</Text>
                    </div>
                    <div className="text-center">
                      <Avatar 
                        src={avatarImage3} 
                        alt="Busy User"
                        status="busy"
                        size="md"
                        shape="circular"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">Busy</Text>
                    </div>
                    <div className="text-center">
                      <Avatar 
                        src={avatarImage4} 
                        alt="Offline User"
                        status="offline"
                        size="md"
                        shape="circular"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">Offline</Text>
                    </div>
                  </div>
                </div>

                {/* Rounded Avatars with Status */}
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Rounded Avatars with Status</Text>
                  <div className="flex items-center gap-4">
                    <Avatar 
                      src={avatarImage1} 
                      alt="Online User"
                      status="online"
                      size="lg"
                      shape="rounded"
                    />
                    <Avatar 
                      src={avatarImage2} 
                      alt="Away User"
                      status="away"
                      size="lg"
                      shape="rounded"
                    />
                    <Avatar 
                      src={avatarImage3} 
                      alt="Busy User"
                      status="busy"
                      size="lg"
                      shape="rounded"
                    />
                    <Avatar 
                      src={avatarImage4} 
                      alt="Offline User"
                      status="offline"
                      size="lg"
                      shape="rounded"
                    />
                  </div>
                </div>

                {/* Square Avatars with Status (Top-right positioning) */}
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Square Avatars with Status (Top-right position)</Text>
                  <div className="flex items-center gap-4">
                    <Avatar 
                      src={avatarImage1} 
                      alt="Online User"
                      status="online"
                      size="md"
                      shape="square"
                    />
                    <Avatar 
                      src={avatarImage2} 
                      alt="Away User"
                      status="away"
                      size="md"
                      shape="square"
                    />
                    <Avatar 
                      src={avatarImage3} 
                      alt="Busy User"
                      status="busy"
                      size="md"
                      shape="square"
                    />
                    <Avatar 
                      src={avatarImage4} 
                      alt="Offline User"
                      status="offline"
                      size="md"
                      shape="square"
                    />
                  </div>
                </div>

                {/* Different Sizes with Status */}
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Status Badges - All Sizes</Text>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <Avatar 
                        fallback="XS"
                        status="online"
                        size="xs"
                        variant="primary"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">XS</Text>
                    </div>
                    <div className="text-center">
                      <Avatar 
                        fallback="SM"
                        status="away"
                        size="sm"
                        variant="secondary"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">SM</Text>
                    </div>
                    <div className="text-center">
                      <Avatar 
                        fallback="MD"
                        status="busy"
                        size="md"
                        variant="info"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">MD</Text>
                    </div>
                    <div className="text-center">
                      <Avatar 
                        fallback="LG"
                        status="offline"
                        size="lg"
                        variant="success"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">LG</Text>
                    </div>
                    <div className="text-center">
                      <Avatar 
                        fallback="XL"
                        status="online"
                        size="xl"
                        variant="warning"
                      />
                      <Text variant="caption" color="secondary" className="mt-1 block">XL</Text>
                    </div>
                  </div>
                </div>

                {/* Status with Fallback Icons */}
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Status with Icon Fallbacks</Text>
                  <div className="flex items-center gap-4">
                    <Avatar 
                      icon={<IconUser />}
                      status="online"
                      variant="primary"
                      size="md"
                    />
                    <Avatar 
                      icon={<IconSettings />}
                      status="away"
                      variant="secondary"
                      size="md"
                    />
                    <Avatar 
                      icon={<IconHeart />}
                      status="busy"
                      variant="info"
                      size="md"
                    />
                    <Avatar 
                      icon={<IconHome />}
                      status="offline"
                      variant="success"
                      size="md"
                    />
                  </div>
                </div>
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

        {/* Badge Component Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Badge Component</Heading>
          <Text variant="body" color="secondary" className="mb-4">
            Badge component for icons with number counts or dot indicators using CSS positioning and Figma design specifications.
          </Text>
          
          <div className="space-y-8">
            {/* Number Badge Examples */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Number Badges - Color Variants</Text>
              <div className="flex items-center gap-6 flex-wrap">
                <Badge variant="default" count={1}>
                  <IconNotification size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={5}>
                  <IconMail size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="secondary" count={12}>
                  <IconMessage size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="info" count={25}>
                  <IconInfoCircle size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="success" count={8}>
                  <IconCheck size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="warning" count={99}>
                  <IconAlertTriangle size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="error" count={156}>
                  <IconX size={24} className="text-gray-700" />
                </Badge>
              </div>
            </div>

            {/* Number Formatting Examples */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Number Formatting & Positioning</Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Single Digit (1-9)</Text>
                  <div className="flex items-center gap-6">
                    <Badge variant="primary" count={1}>
                      <IconShoppingCart size={24} className="text-gray-700" />
                    </Badge>
                    <Badge variant="primary" count={9}>
                      <IconNotification size={24} className="text-gray-700" />
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Double Digit with + (99+)</Text>
                  <div className="flex items-center gap-6">
                    <Badge variant="primary" count={99}>
                      <IconMail size={24} className="text-gray-700" />
                    </Badge>
                    <Badge variant="primary" count={150} max={99}>
                      <IconMessage size={24} className="text-gray-700" />
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Triple Digit with + (999+)</Text>
                  <div className="flex items-center gap-6">
                    <Badge variant="primary" count={999}>
                      <IconNotification size={24} className="text-gray-700" />
                    </Badge>
                    <Badge variant="primary" count={1500} max={999}>
                      <IconShoppingCart size={24} className="text-gray-700" />
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Dot Badge Examples */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Dot Badges - Color Variants</Text>
              <div className="flex items-center gap-6 flex-wrap">
                <Badge variant="default" type="dot">
                  <IconNotification size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" type="dot">
                  <IconMail size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="secondary" type="dot">
                  <IconMessage size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="info" type="dot">
                  <IconInfoCircle size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="success" type="dot">
                  <IconCheck size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="warning" type="dot">
                  <IconAlertTriangle size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="error" type="dot">
                  <IconX size={24} className="text-gray-700" />
                </Badge>
              </div>
            </div>

            {/* Badge States & Behavior */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Badge States & Behavior</Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Show Zero vs Hidden</Text>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <Badge variant="primary" count={0} showZero={false}>
                        <IconNotification size={24} className="text-gray-700" />
                      </Badge>
                      <Text variant="caption" color="secondary" className="mt-1 block">Hidden (count=0)</Text>
                    </div>
                    <div className="text-center">
                      <Badge variant="primary" count={0} showZero={true}>
                        <IconMail size={24} className="text-gray-700" />
                      </Badge>
                      <Text variant="caption" color="secondary" className="mt-1 block">Show Zero</Text>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Custom Max Values</Text>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <Badge variant="primary" count={50} max={10}>
                        <IconShoppingCart size={24} className="text-gray-700" />
                      </Badge>
                      <Text variant="caption" color="secondary" className="mt-1 block">Max: 10</Text>
                    </div>
                    <div className="text-center">
                      <Badge variant="primary" count={250} max={99}>
                        <IconMessage size={24} className="text-gray-700" />
                      </Badge>
                      <Text variant="caption" color="secondary" className="mt-1 block">Max: 99 (default)</Text>
                    </div>
                    <div className="text-center">
                      <Badge variant="primary" count={2500} max={999}>
                        <IconNotification size={24} className="text-gray-700" />
                      </Badge>
                      <Text variant="caption" color="secondary" className="mt-1 block">Max: 999</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge with Different Icon Sizes */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Badge with Different Icon Sizes</Text>
              <div className="flex items-center gap-6">
                <Badge variant="primary" count={3}>
                  <IconNotification size={16} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={7}>
                  <IconNotification size={20} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={12}>
                  <IconNotification size={24} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={25}>
                  <IconNotification size={32} className="text-gray-700" />
                </Badge>
                <Badge variant="primary" count={48}>
                  <IconNotification size={40} className="text-gray-700" />
                </Badge>
              </div>
            </div>

            {/* Figma Design Specifications */}
            <div className="space-y-4 p-6 bg-blue-50 rounded-lg">
              <div>
                <Heading level={3}>Figma Design Specifications</Heading>
                <Text variant="body-sm" color="secondary" className="mt-1">
                  Badge component follows exact Figma specifications for positioning and styling
                </Text>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Number Badge Specs:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Height: 20px (fixed)</li>
                    <li>• Min-width: 20px (expands for content)</li>
                    <li>• Padding: 6px left/right</li>
                    <li>• Font: 12px, weight 700</li>
                    <li>• Border-radius: 500px (fully rounded)</li>
                    <li>• Dynamic positioning based on content length</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Dot Badge Specs:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Size: 10px x 10px</li>
                    <li>• Position: absolute top-right</li>
                    <li>• Border-radius: 500px (circular)</li>
                    <li>• 2px white border for contrast</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chip Component Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Chip Component</Heading>
          <Text variant="body" color="secondary" className="block">
            Chip components with three variants (Filled, Outlined, Soft), two sizes (Medium, Small), and flexible action icon system following Figma specifications. Supports custom start/end icons with click handlers, plus backward-compatible dismissible mode.
          </Text>
          
          <div className="space-y-6">
            {/* Filled Chips */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Filled Chips - All Colors</Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Medium Size (32px height)</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="filled" color="default" size="medium">Default</Chip>
                    <Chip variant="filled" color="primary" size="medium">Primary</Chip>
                    <Chip variant="filled" color="secondary" size="medium">Secondary</Chip>
                    <Chip variant="filled" color="info" size="medium">Info</Chip>
                    <Chip variant="filled" color="success" size="medium">Success</Chip>
                    <Chip variant="filled" color="warning" size="medium">Warning</Chip>
                    <Chip variant="filled" color="error" size="medium">Error</Chip>
                  </div>
                </div>
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Small Size (24px height)</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="filled" color="default" size="small">Default</Chip>
                    <Chip variant="filled" color="primary" size="small">Primary</Chip>
                    <Chip variant="filled" color="secondary" size="small">Secondary</Chip>
                    <Chip variant="filled" color="info" size="small">Info</Chip>
                    <Chip variant="filled" color="success" size="small">Success</Chip>
                    <Chip variant="filled" color="warning" size="small">Warning</Chip>
                    <Chip variant="filled" color="error" size="small">Error</Chip>
                  </div>
                </div>
              </div>
            </div>

            {/* Outlined Chips */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Outlined Chips - All Colors</Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Medium Size (32px height)</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="outlined" color="default" size="medium">Default</Chip>
                    <Chip variant="outlined" color="primary" size="medium">Primary</Chip>
                    <Chip variant="outlined" color="secondary" size="medium">Secondary</Chip>
                    <Chip variant="outlined" color="info" size="medium">Info</Chip>
                    <Chip variant="outlined" color="success" size="medium">Success</Chip>
                    <Chip variant="outlined" color="warning" size="medium">Warning</Chip>
                    <Chip variant="outlined" color="error" size="medium">Error</Chip>
                  </div>
                </div>
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Small Size (24px height)</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="outlined" color="default" size="small">Default</Chip>
                    <Chip variant="outlined" color="primary" size="small">Primary</Chip>
                    <Chip variant="outlined" color="secondary" size="small">Secondary</Chip>
                    <Chip variant="outlined" color="info" size="small">Info</Chip>
                    <Chip variant="outlined" color="success" size="small">Success</Chip>
                    <Chip variant="outlined" color="warning" size="small">Warning</Chip>
                    <Chip variant="outlined" color="error" size="small">Error</Chip>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Chips */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Soft Chips - All Colors</Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Medium Size (32px height)</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="soft" color="default" size="medium">Default</Chip>
                    <Chip variant="soft" color="primary" size="medium">Primary</Chip>
                    <Chip variant="soft" color="secondary" size="medium">Secondary</Chip>
                    <Chip variant="soft" color="info" size="medium">Info</Chip>
                    <Chip variant="soft" color="success" size="medium">Success</Chip>
                    <Chip variant="soft" color="warning" size="medium">Warning</Chip>
                    <Chip variant="soft" color="error" size="medium">Error</Chip>
                  </div>
                </div>
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Small Size (24px height)</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="soft" color="default" size="small">Default</Chip>
                    <Chip variant="soft" color="primary" size="small">Primary</Chip>
                    <Chip variant="soft" color="secondary" size="small">Secondary</Chip>
                    <Chip variant="soft" color="info" size="small">Info</Chip>
                    <Chip variant="soft" color="success" size="small">Success</Chip>
                    <Chip variant="soft" color="warning" size="small">Warning</Chip>
                    <Chip variant="soft" color="error" size="small">Error</Chip>
                  </div>
                </div>
              </div>
            </div>

            {/* Dismissible Chips */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Dismissible Chips - With Close Button (Legacy Support)</Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Medium Size with Dismissible Action</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="filled" color="primary" size="medium" dismissible onDismiss={() => console.log('Dismissed primary chip')}>
                      Dismissible Primary
                    </Chip>
                    <Chip variant="outlined" color="secondary" size="medium" dismissible onDismiss={() => console.log('Dismissed secondary chip')}>
                      Dismissible Secondary
                    </Chip>
                    <Chip variant="soft" color="info" size="medium" dismissible onDismiss={() => console.log('Dismissed info chip')}>
                      Dismissible Info
                    </Chip>
                  </div>
                </div>
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Small Size with Dismissible Action</Text>
                  <div className="flex flex-wrap gap-3">
                    <Chip variant="filled" color="success" size="small" dismissible onDismiss={() => console.log('Dismissed success chip')}>
                      Small Success
                    </Chip>
                    <Chip variant="outlined" color="warning" size="small" dismissible onDismiss={() => console.log('Dismissed warning chip')}>
                      Small Warning
                    </Chip>
                    <Chip variant="soft" color="error" size="small" dismissible onDismiss={() => console.log('Dismissed error chip')}>
                      Small Error
                    </Chip>
                  </div>
                </div>
              </div>
            </div>

            {/* New Action Icon System */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Action Icon System - Start & End Icons</Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Start Icons (Left Side)</Text>
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
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">End Icons (Right Side)</Text>
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
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Both Start & End Icons</Text>
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
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Small Size with Action Icons</Text>
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
                </div>
              </div>
            </div>

            {/* Figma Design Specifications */}
            <div className="space-y-4 p-6 bg-blue-50 rounded-lg">
              <div>
                <Heading level={3}>Figma Design Specifications</Heading>
                <Text variant="body-sm" color="secondary" className="mt-1">
                  Chip component follows exact Figma specifications for sizing, spacing, typography, and action icons
                </Text>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Medium Size (32px):</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Height: 32px (fixed)</li>
                    <li>• Outer padding: 4px left/right</li>
                    <li>• Label padding: 8px left/right</li>
                    <li>• Border radius: 10px (filled), 8px (outlined/soft)</li>
                    <li>• Typography: 13px, weight 500, line-height 18px</li>
                    <li>• Font: Plus Jakarta Sans</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Small Size (24px):</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Height: 24px (fixed)</li>
                    <li>• Outer padding: 3px left/right</li>
                    <li>• Label padding: 5px left/right</li>
                    <li>• Border radius: 8px (all variants)</li>
                    <li>• Typography: 13px, weight 500, line-height 18px</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Action Icon System:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Icon container: 20px × 20px (both sizes)</li>
                    <li>• Icon size: 16.67px (exact from Figma)</li>
                    <li>• Opacity: 48% (as per design specs)</li>
                    <li>• Hover: 75% opacity for better interaction</li>
                    <li>• Start icon margin-right: 4px</li>
                    <li>• End icon margin-left: 4px</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">New API Features:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• startIcon: Custom left-side action</li>
                    <li>• endIcon: Custom right-side action</li>
                    <li>• onStartIconClick: Left action handler</li>
                    <li>• onEndIconClick: Right action handler</li>
                    <li>• dismissible: Legacy prop (deprecated)</li>
                    <li>• Backward compatible with existing code</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Filled Variant:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Background: Semantic color main</li>
                    <li>• Text: Contrast colors (white/dark)</li>
                    <li>• Warning uses dark text</li>
                    <li>• Icons: Match text color</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Outlined Variant:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Border: 1px solid semantic color</li>
                    <li>• Text: Semantic color main</li>
                    <li>• Background: Transparent</li>
                    <li>• Icons: Match text color</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Soft Variant:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Background: 16% alpha semantic color</li>
                    <li>• Text: Dark variant of semantic color</li>
                    <li>• No border</li>
                    <li>• Icons: Match text color</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checkbox Component Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Checkbox Component</Heading>
          
          {/* Basic Checkbox Examples */}
          <div className="space-y-6">
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Basic Checkbox</Text>
              <div className="space-y-3">
                <Checkbox label="Basic checkbox" />
                <Checkbox label="Checked by default" checked />
                <Checkbox label="Disabled checkbox" disabled />
                <Checkbox label="Disabled and checked" checked disabled />
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Checkbox Sizes</Text>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="space-y-2">
                  <Text variant="body-sm" className="font-medium">Small (20px)</Text>
                  <Checkbox size="sm" label="Small checkbox" />
                </div>
                <div className="space-y-2">
                  <Text variant="body-sm" className="font-medium">Medium (24px)</Text>
                  <Checkbox size="md" label="Medium checkbox" />
                </div>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Checkbox Color Variants</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Checkbox variant="default" label="Default variant" checked />
                  <Checkbox variant="primary" label="Primary variant" checked />
                  <Checkbox variant="secondary" label="Secondary variant" checked />
                  <Checkbox variant="info" label="Info variant" checked />
                </div>
                <div className="space-y-3">
                  <Checkbox variant="success" label="Success variant" checked />
                  <Checkbox variant="warning" label="Warning variant" checked />
                  <Checkbox variant="error" label="Error variant" checked />
                </div>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Interactive States</Text>
              <div className="space-y-3">
                <Text variant="body-sm" className="font-medium">Hover over these checkboxes to see hover effects:</Text>
                <div className="space-y-2">
                  <Checkbox variant="primary" label="Hover me (Primary)" />
                  <Checkbox variant="success" label="Hover me (Success)" />
                  <Checkbox variant="warning" label="Hover me (Warning)" />
                  <Checkbox variant="error" label="Hover me (Error)" />
                </div>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Controlled Checkbox Example</Text>
              <CheckboxExample />
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Form Group Example</Text>
              <CheckboxGroupExample />
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Custom Styling</Text>
              <div className="space-y-3">
                <Checkbox 
                  label="Custom label styling" 
                  labelClassName="text-purple-600 font-semibold"
                  variant="primary"
                />
                <Checkbox 
                  label="Custom checkbox styling" 
                  className="border-2 border-purple-300 rounded-lg"
                  variant="secondary"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <Text variant="body-sm" className="font-medium mb-3 block">Design Specifications:</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Sizes:</Text>
                  <ul className="space-y-1">
                    <li>• Small: 20x20px</li>
                    <li>• Medium: 24x24px</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Interaction States:</Text>
                  <ul className="space-y-1">
                    <li>• Hover: 8% opacity background</li>
                    <li>• Focus: Ring outline</li>
                    <li>• Disabled: 40% opacity</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Colors:</Text>
                  <ul className="space-y-1">
                    <li>• 7 semantic variants</li>
                    <li>• Consistent with design tokens</li>
                    <li>• Custom check icon</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Accessibility:</Text>
                  <ul className="space-y-1">
                    <li>• ARIA compliant</li>
                    <li>• Keyboard navigation</li>
                    <li>• Screen reader support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Component Showcase */}
        <section className="space-y-6">
          <div>
            <Heading level={2}>Breadcrumb Component</Heading>
            <Text variant="body" color="secondary" className="mt-2">
              Navigation breadcrumb with text and icon variants following ForteUI design specifications.
            </Text>
          </div>

          <div className="space-y-8">
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Text Variant (Default)</Text>
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
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Icon Variant</Text>
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
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Interactive Navigation</Text>
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
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Custom Separator</Text>
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
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Real-world Examples</Text>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text variant="body-sm" className="font-medium mb-2">E-commerce Product Page</Text>
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
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text variant="body-sm" className="font-medium mb-2">Admin Dashboard</Text>
                  <Breadcrumb
                    items={[
                      { label: 'Dashboard', href: '/admin' },
                      { label: 'Content Management', href: '/admin/content' },
                      { label: 'Blog Posts', href: '/admin/content/posts' },
                      { label: 'Edit: "Getting Started Guide"' }
                    ]}
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Text variant="body-sm" className="font-medium mb-2">Documentation Site</Text>
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
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
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
                <Button variant="primary" className="w-full">
                  Submit Form
                </Button>
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

        {/* Alert Component Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Alert Component</Heading>
          <Text variant="body" color="secondary" className="mb-4">
            Alert component for displaying important messages with multiple variants and semantic severity levels.
          </Text>
          
          <div className="space-y-8">
            {/* Default Variant Alerts */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Default Variant - Light backgrounds with borders</Text>
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
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Filled Variant - Strong semantic colors</Text>
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
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Outline Variant - Border emphasis</Text>
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
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Dismissible Alerts - With close functionality</Text>
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
            </div>

            {/* Message-only Alerts */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Message-only Alerts - Without titles</Text>
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
            </div>

            {/* Alert Specifications */}
            <div className="p-6 bg-gray-50 rounded-lg">
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
            </div>
          </div>
        </section>

        {/* Radio Component Showcase */}
        <section className="space-y-6">
          <Heading level={2}>Radio Component</Heading>
          <Text variant="body" color="secondary" className="mb-4">
            Radio button component for single-choice selections with multiple variants, semantic colors, and interactive states.
          </Text>
          
          <div className="space-y-8">
            {/* Default vs Semantic Colors */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Color Variants - Default vs Semantic Colors</Text>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-6">
                  <Radio variant="default" label="Default" name="colors" value="default" />
                  <Radio variant="primary" label="Primary" name="colors" value="primary" />
                  <Radio variant="secondary" label="Secondary" name="colors" value="secondary" />
                  <Radio variant="info" label="Info" name="colors" value="info" />
                  <Radio variant="success" label="Success" name="colors" value="success" />
                  <Radio variant="warning" label="Warning" name="colors" value="warning" />
                  <Radio variant="error" label="Error" name="colors" value="error" />
                </div>
              </div>
            </div>

            {/* States Showcase */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Interactive States - Unchecked, Hovered, Disabled, Checked</Text>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-6">
                  <Radio variant="primary" label="Unchecked" name="states1" value="unchecked" />
                  <Radio variant="primary" label="Checked" name="states2" value="checked" checked />
                  <Radio variant="primary" label="Disabled Unchecked" name="states3" value="disabled-unchecked" disabled />
                  <Radio variant="primary" label="Disabled Checked" name="states4" value="disabled-checked" checked disabled />
                </div>
              </div>
            </div>

            {/* Sizes Showcase */}
            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Size Variants - Small (20px) and Medium (24px)</Text>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-6">
                  <Radio variant="primary" size="md" label="Medium (24px)" name="sizes1" value="medium" />
                  <Radio variant="primary" size="sm" label="Small (20px)" name="sizes2" value="small" />
                </div>
              </div>
            </div>

            {/* Radio Group Example */}
            <RadioGroupExample />

            {/* Semantic Colors Radio Group Example */}
            <SemanticRadioGroupExample />

            {/* Radio Component Specifications */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <Text variant="body-sm" className="font-medium mb-3 block">Radio Component Specifications</Text>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Color Variants:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Default: Action color (#657686)</li>
                    <li>• Primary: Brand primary (#0690F4)</li>
                    <li>• Secondary: Brand secondary (#9138FF)</li>
                    <li>• Info: Info semantic (#00BEE0)</li>
                    <li>• Success: Success semantic (#22B954)</li>
                    <li>• Warning: Warning semantic (#FFAD05)</li>
                    <li>• Error: Error semantic (#FF5833)</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Interactive States:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Unchecked: Default ring outline</li>
                    <li>• Unchecked Hovered: 8% background</li>
                    <li>• Disabled: Action-disabled color</li>
                    <li>• Checked: Filled center with color</li>
                    <li>• Checked Hovered: 8% background</li>
                  </ul>
                </div>
                <div>
                  <Text variant="body-sm" className="font-medium mb-2 block">Features:</Text>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Two sizes: Small (20px), Medium (24px)</li>
                    <li>• Radio groups for single selection</li>
                    <li>• Native form integration</li>
                    <li>• Accessibility compliant (ARIA)</li>
                    <li>• Keyboard navigation support</li>
                    <li>• Plus Jakarta Sans typography</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-gray-600">
                <Text variant="body-sm" className="font-medium mb-2 block">Design Tokens Used:</Text>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div>• primary-main, primary-8</div>
                  <div>• secondary-main, secondary-8</div>
                  <div>• success-main, success-8</div>
                  <div>• warning-main, warning-8</div>
                  <div>• error-main, error-8</div>
                  <div>• info-main, info-8</div>
                  <div>• action-active, action-disabled</div>
                  <div>• grey-8 (hover backgrounds)</div>
                </div>
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
