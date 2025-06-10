import { Heading, Text, Button } from '@forteui/core';
import { CodeBlock } from '@/components/CodeBlock';

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading level={1} className="mb-4">Button</Heading>
        <Text variant="body" color="secondary" className="mb-6">
          A versatile button component that supports multiple variants, sizes, and states.
        </Text>
      </div>

      <div id="usage">
        <Heading level={2} className="mb-4">Usage</Heading>
        <Text variant="body" className="mb-4">
          Import and use the Button component:
        </Text>
        
        <CodeBlock 
          language="tsx" 
          code={`import { Button } from '@forteui/core';

function MyComponent() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}`}
        />
      </div>

      <div id="variants">
        <Heading level={2} className="mb-4">Variants</Heading>
        <Text variant="body" className="mb-6">
          Button supports multiple visual variants:
        </Text>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline-default">Outline</Button>
              <Button variant="text-primary">Text Primary</Button>
            </div>
            
            <CodeBlock 
              language="tsx" 
              code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline-default">Outline</Button>
<Button variant="text">Text</Button>`}
            />
          </div>
        </div>
      </div>

      <div id="sizes">
        <Heading level={2} className="mb-4">Sizes</Heading>
        <Text variant="body" className="mb-6">
          Button comes in different sizes to fit various use cases:
        </Text>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
          
          <CodeBlock 
            language="tsx" 
            code={`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`}
          />
        </div>
      </div>

      <div id="props">
        <Heading level={2} className="mb-4">Props</Heading>
        <Text variant="body" className="mb-4">
          The Button component accepts the following props:
        </Text>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">variant</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'outline-default' | 'text'</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'primary'</td>
                <td className="border border-gray-200 px-4 py-2">Visual style variant</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">size</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'md'</td>
                <td className="border border-gray-200 px-4 py-2">Button size</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">disabled</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">false</td>
                <td className="border border-gray-200 px-4 py-2">Whether the button is disabled</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">onClick</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">(event: MouseEvent) =&gt; void</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">-</td>
                <td className="border border-gray-200 px-4 py-2">Click handler function</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
