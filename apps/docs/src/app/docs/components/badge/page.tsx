import { Heading, Text, Badge } from '@forteui/core';
import { CodeBlock } from '@/components/CodeBlock';

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading level={1} className="mb-4">Badge</Heading>
        <Text variant="body" color="secondary" className="mb-6">
          A small status indicator component used to display information like notifications, labels, or status.
        </Text>
      </div>

      <div id="usage">
        <Heading level={2} className="mb-4">Usage</Heading>
        <Text variant="body" className="mb-4">
          Import and use the Badge component:
        </Text>
        
        <CodeBlock 
          language="tsx" 
          code={`import { Badge } from '@forteui/core';

function MyComponent() {
  return (
    <Badge variant="primary">
      New
    </Badge>
  );
}`}
        />
      </div>

      <div id="variants">
        <Heading level={2} className="mb-4">Variants</Heading>
        <Text variant="body" className="mb-6">
          Badge supports different visual styles and colors:
        </Text>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
            
            <CodeBlock 
              language="tsx" 
              code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}
            />
          </div>
        </div>
      </div>

      <div id="types">
        <Heading level={2} className="mb-4">Types</Heading>
        <Text variant="body" className="mb-6">
          Badge can display text content, or be used as a number/dot indicator:
        </Text>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="primary">Text Badge</Badge>
            <Badge variant="primary" type="dot">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </Badge>
            <Badge variant="primary" type="number" count={5}>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </Badge>
          </div>
          
          <CodeBlock 
            language="tsx" 
            code={`<Badge variant="primary">Text Badge</Badge>
<Badge variant="primary" type="dot">
  <div>Icon with dot</div>
</Badge>
<Badge variant="primary" type="number" count={5}>
  <div>Icon with count</div>
</Badge>`}
          />
        </div>
      </div>

      <div id="examples">
        <Heading level={2} className="mb-4">Examples</Heading>
        <Text variant="body" className="mb-6">
          Common use cases for badges:
        </Text>
        
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-6">
            <Text variant="body-sm" className="mb-4 font-medium">Notification Badge</Text>
            <div className="flex items-center gap-3 mb-4">
              <Text variant="body">Messages</Text>
              <Badge variant="error">5</Badge>
            </div>
            
            <CodeBlock 
              language="tsx" 
              code={`<div className="flex items-center gap-3">
  <Text>Messages</Text>
  <Badge variant="error">5</Badge>
</div>`}
            />
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Text variant="body-sm" className="mb-4 font-medium">Status Badge</Text>
            <div className="flex items-center gap-3 mb-4">
              <Text variant="body">Server Status:</Text>
              <Badge variant="success">Online</Badge>
            </div>
            
            <CodeBlock 
              language="tsx" 
              code={`<div className="flex items-center gap-3">
  <Text>Server Status:</Text>
  <Badge variant="success">Online</Badge>
</div>`}
            />
          </div>
        </div>
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
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">variant</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'default'</td>
                <td className="border border-gray-200 px-4 py-2">Visual style variant</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">type</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'number' | 'dot'</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'number'</td>
                <td className="border border-gray-200 px-4 py-2">Type of badge (text/number or dot indicator)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">count</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">number</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">0</td>
                <td className="border border-gray-200 px-4 py-2">Number to display (for type="number")</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">showZero</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">false</td>
                <td className="border border-gray-200 px-4 py-2">Whether to show badge when count is 0</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">max</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">number</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">99</td>
                <td className="border border-gray-200 px-4 py-2">Maximum number to display before showing "+"</td>
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
                <td className="border border-gray-200 px-4 py-2">Badge content or element to attach badge to</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
