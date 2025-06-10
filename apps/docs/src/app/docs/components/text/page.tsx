import { Heading, Text } from '@forteui/core';
import { CodeBlock } from '@/components/CodeBlock';

export default function TextPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading level={1} className="mb-4">Text</Heading>
        <Text variant="body" color="secondary" className="mb-6">
          A flexible text component that provides consistent typography with multiple variants and semantic meaning.
        </Text>
      </div>

          <div id="usage">
            <Heading level={2} className="mb-4">Usage</Heading>
            <Text variant="body" className="mb-4">
              Import and use the Text component:
            </Text>
            
            <CodeBlock 
              language="tsx" 
              code={`import { Text } from '@forteui/core';

function MyComponent() {
  return (
    <Text variant="body" color="primary">
      This is a text component
    </Text>
  );
}`}
            />
          </div>

          <div id="variants">
            <Heading level={2} className="mb-4">Text Variants</Heading>
            <Text variant="body" className="mb-6">
              Text supports multiple size and weight variants:
            </Text>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="space-y-4 mb-4">
                  <Text variant="display">Display Text</Text>
                  <Text variant="h1">H1 Text</Text>
                  <Text variant="body">Regular Body Text</Text>
                  <Text variant="body-sm">Small Body Text</Text>
                  <Text variant="caption">Caption Text</Text>
                </div>
                
                <CodeBlock 
                  language="tsx" 
                  code={`<Text variant="display">Display Text</Text>
<Text variant="h1">H1 Text</Text>
<Text variant="body">Regular Body Text</Text>
<Text variant="body-sm">Small Body Text</Text>
<Text variant="caption">Caption Text</Text>`}
                />
              </div>
            </div>
          </div>

          <div id="colors">
            <Heading level={2} className="mb-4">Colors</Heading>
            <Text variant="body" className="mb-6">
              Text supports different color variants for semantic meaning:
            </Text>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="space-y-3 mb-4">
                <Text variant="body" color="primary">Primary text color</Text>
                <Text variant="body" color="secondary">Secondary text color</Text>
                <Text variant="body" color="brand">Brand text color</Text>
                <Text variant="body" color="disabled">Disabled text color</Text>
                <Text variant="body" color="white" className="bg-gray-800 p-2 rounded">White text color</Text>
              </div>
              
              <CodeBlock 
                language="tsx" 
                code={`<Text variant="body" color="primary">Primary text color</Text>
<Text variant="body" color="secondary">Secondary text color</Text>
<Text variant="body" color="brand">Brand text color</Text>
<Text variant="body" color="disabled">Disabled text color</Text>
<Text variant="body" color="white">White text color</Text>`}
              />
            </div>
          </div>

          <div id="props">
            <Heading level={2} className="mb-4">Props</Heading>
            <Text variant="body" className="mb-4">
              The Text component accepts the following props:
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
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'caption'</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'body'</td>
                    <td className="border border-gray-200 px-4 py-2">Text size and weight variant</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">color</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'primary' | 'secondary' | 'disabled' | 'brand' | 'white'</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'primary'</td>
                    <td className="border border-gray-200 px-4 py-2">Text color variant</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">as</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'span' | 'p' | 'div' | 'label'</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'span'</td>
                    <td className="border border-gray-200 px-4 py-2">HTML element to render</td>
                  </tr>
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
                    <td className="border border-gray-200 px-4 py-2">Text content</td>
                  </tr>
                </tbody>          </table>
        </div>
      </div>
    </div>
  );
}
