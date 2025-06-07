import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Text,
  Input,
  Textarea,
  IconArrowRight,
  IconUser
} from '@forte-ui/core';

import {
  ShowcaseSection,
  ShowcaseGroup,
  SpecificationBox,
  SpecList
} from '../components';

export function CardShowcase() {
  return (
    <ShowcaseSection
      title="Card Component"
      description="Versatile card component with multiple variants, padding options, and composition patterns following Figma specifications."
    >
      {/* Card Variants */}
      <ShowcaseGroup title="Card Variants">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </CardFooter>
          </Card>

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
              <Button size="sm" variant="primary">Learn More</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
              <Button size="sm" variant="outline-primary">View Details</Button>
            </CardFooter>
          </Card>

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
              <Button size="sm" variant="text-primary">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseGroup>

      {/* Card Padding Options */}
      <ShowcaseGroup title="Card Padding Options">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card padding="sm">
            <CardHeader padding="sm">
              <CardTitle>Small Padding</CardTitle>
              <CardDescription>Compact layout (12px)</CardDescription>
            </CardHeader>
            <CardContent padding="sm">
              <Text variant="body-sm">Compact card content with reduced spacing</Text>
            </CardContent>
            <CardFooter padding="sm">
              <Button size="sm" variant="soft-primary">Action</Button>
            </CardFooter>
          </Card>
          
          <Card padding="md">
            <CardHeader padding="md">
              <CardTitle>Medium Padding</CardTitle>
              <CardDescription>Default layout (16px)</CardDescription>
            </CardHeader>
            <CardContent padding="md">
              <Text variant="body-sm">Standard card content with balanced spacing</Text>
            </CardContent>
            <CardFooter padding="md">
              <Button size="sm" variant="soft-primary">Action</Button>
            </CardFooter>
          </Card>
          
          <Card padding="lg">
            <CardHeader padding="lg">
              <CardTitle>Large Padding</CardTitle>
              <CardDescription>Spacious layout (24px)</CardDescription>
            </CardHeader>
            <CardContent padding="lg">
              <Text variant="body-sm">Expanded card content with generous spacing</Text>
            </CardContent>
            <CardFooter padding="lg">
              <Button size="sm" variant="soft-primary">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseGroup>

      {/* Card Composition Patterns */}
      <ShowcaseGroup title="Card Composition Patterns">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>Header + Content + Footer</CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="body-sm">
                This is the most common card pattern with all three main sections:
                CardHeader, CardContent, and CardFooter.
              </Text>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="primary">Primary Action</Button>
              <Button size="sm" variant="outline-default">Secondary Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="pt-5">
              <Text variant="body-sm">
                This card uses only CardContent without a header or footer,
                useful for simpler content display with minimal structure.
              </Text>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Header Only</CardTitle>
              <CardDescription>Card with just a header component</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Header + Footer</CardTitle>
              <CardDescription>Card with header and footer (no content)</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button size="sm" variant="primary">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseGroup>

      {/* Complex Card Examples */}
      <ShowcaseGroup title="Complex Card Examples">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="elevated">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>User Profile</CardTitle>
                <Button variant="icon-default" size="icon-sm">
                  <span className="w-5 h-5 flex items-center justify-center">⚙️</span>
                </Button>
              </div>
              <CardDescription>Interactive card with custom layout</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-main rounded-full flex items-center justify-center text-white">
                    <IconUser size={24} />
                  </div>
                </div>
                <div>
                  <Text variant="body" className="font-medium">Jane Smith</Text>
                  <Text variant="body-sm" color="secondary">Product Designer</Text>
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <Button variant="soft-primary" size="sm" className="flex-1">
                  <span>❤️</span>
                  <span>Follow</span>
                </Button>
                <Button variant="secondary" size="sm" className="flex-1">
                  <span>⭐</span>
                  <span>Favorite</span>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="text-primary" size="sm" className="ml-auto">
                <span>View Profile</span>
                <IconArrowRight size={16} />
              </Button>
            </CardFooter>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Example form inside card</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Email" placeholder="Enter your email" />
              <Textarea
                label="Message"
                placeholder="How can we help you?"
                rows={3}
              />
            </CardContent>
            <CardFooter className="flex justify-end gap-3">
              <Button variant="outline-default">Cancel</Button>
              <Button variant="primary">Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseGroup>

      {/* Design Specifications */}
      <SpecificationBox variant="figma" title="Card Design Specifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Card Variants" 
            items={[
              "Default: White background with shadow-sm",
              "Elevated: White background with shadow-md",
              "Outlined: White background, 1px border, no shadow",
              "Filled: Light gray background (gray-50), no shadow"
            ]}
          />
          <SpecList 
            title="Padding Options" 
            items={[
              "Small: 12px padding (compact layout)",
              "Medium: 16px padding (default layout)",
              "Large: 24px padding (spacious layout)",
              "Custom: Any padding value via className"
            ]}
          />
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpecList 
            title="Component Structure" 
            items={[
              "CardHeader: Title and optional description",
              "CardContent: Main content area",
              "CardFooter: Action buttons and controls",
              "All sections are optional and composable"
            ]}
          />
          <SpecList 
            title="Design Tokens" 
            items={[
              "Border Radius: 12px (lg rounded)",
              "Box Shadow: shadow-sm (default), shadow-md (elevated)",
              "Border: 1px solid gray-200 (outlined)",
              "Background: white or gray-50 (filled)",
              "Typography: Plus Jakarta Sans"
            ]}
          />
        </div>
      </SpecificationBox>
    </ShowcaseSection>
  );
}
