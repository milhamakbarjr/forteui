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
  Textarea 
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
                <Button variant="primary" size="xl">Extra Large</Button>
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
              <Text variant="caption" color="secondary" className="mb-3 block">Outline Variants</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">Primary Outline</Button>
                <Button variant="outline-secondary">Secondary Outline</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Ghost Variants</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="ghost">Primary Ghost</Button>
                <Button variant="ghost-secondary">Secondary Ghost</Button>
              </div>
            </div>

            <div>
              <Text variant="caption" color="secondary" className="mb-3 block">Special States</Text>
              <div className="flex flex-wrap gap-3">
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link Button</Button>
                <Button variant="primary" disabled>Disabled</Button>
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
                    <Button size="sm" variant="outline">Item 3</Button>
                  </Stack>
                </div>
                
                <div>
                  <Text variant="body-sm" className="mb-2 block font-medium">Horizontal Stack (Row)</Text>
                  <Stack direction="row" spacing="md" className="bg-gray-50 p-4 rounded">
                    <Button size="sm">Left</Button>
                    <Button size="sm" variant="secondary">Center</Button>
                    <Button size="sm" variant="outline">Right</Button>
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
                <Button size="sm" variant="outline">Cancel</Button>
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
                <Button size="sm" variant="ghost">View Details</Button>
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
                <Button size="sm" variant="destructive">Delete</Button>
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
                <Button variant="outline">Save Draft</Button>
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
                <Button variant="ghost">Learn More</Button>
              </CardFooter>
            </Card>
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
