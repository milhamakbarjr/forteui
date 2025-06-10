import { Heading, Text, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@forteui/core';
import { CodeBlock } from '@/components/CodeBlock';

export default function CardPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading level={1} className="mb-4">Card</Heading>
        <Text variant="body" color="secondary" className="mb-6">
          A flexible container component that provides a clean, elevated surface for displaying content.
        </Text>
      </div>

      <div id="usage">
        <Heading level={2} className="mb-4">Usage</Heading>
        <Text variant="body" className="mb-4">
          Import and use the Card component:
        </Text>
        
        <CodeBlock 
          language="tsx" 
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@forteui/core';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
      </CardFooter>
    </Card>
  );
}`}
        />
      </div>

      <div id="variants">
        <Heading level={2} className="mb-4">Variants</Heading>
        <Text variant="body" className="mb-6">
          Card supports different visual variants:
        </Text>
        
        <div className="space-y-6">
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
                <Button size="sm" variant="primary">Action</Button>
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
                <Button size="sm" variant="secondary">Learn More</Button>
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
                <Button size="sm" variant="outline-default">View Details</Button>
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
        </div>
        
        <CodeBlock 
          language="tsx" 
          code={`<Card>Default Card</Card>
<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="filled">Filled Card</Card>`}
          className="mt-6"
        />
      </div>

      <div id="padding">
        <Heading level={2} className="mb-4">Padding Options</Heading>
        <Text variant="body" className="mb-6">
          Card supports different padding sizes:
        </Text>
        
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
              <Button size="sm" variant="primary">Action</Button>
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
              <Button size="sm" variant="primary">Action</Button>
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
              <Button size="sm" variant="primary">Action</Button>
            </CardFooter>
          </Card>
        </div>
        
        <CodeBlock 
          language="tsx" 
          code={`<Card padding="sm">Small Padding</Card>
<Card padding="md">Medium Padding (default)</Card>
<Card padding="lg">Large Padding</Card>`}
          className="mt-6"
        />
      </div>

      <div id="props">
        <Heading level={2} className="mb-4">Props</Heading>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">className</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">-</td>
                <td className="border border-gray-200 px-4 py-2">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">children</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">ReactNode</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">-</td>
                <td className="border border-gray-200 px-4 py-2">Card content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
