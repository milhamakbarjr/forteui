import { Heading, Text } from '@forteui/core';
import { CodeBlock } from '@/components/CodeBlock';

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading level={1} className="mb-4">Input</Heading>
        <Text variant="body" color="secondary" className="mb-6">
          A versatile input field component for collecting user data with built-in validation and accessibility features.
        </Text>
      </div>

      <div id="usage">
        <Heading level={2} className="mb-4">Usage</Heading>
        <Text variant="body" className="mb-4">
          Import and use the Input component:
        </Text>
        
        <CodeBlock 
          language="tsx" 
          code={`import { Input } from '@forteui/core';

function MyComponent() {
  return (
    <Input 
      label="Email Address"
      type="email"
      placeholder="Enter your email"
    />
  );
}`}
        />
      </div>

      <div id="examples">
        <Heading level={2} className="mb-4">Examples</Heading>
        <Text variant="body" className="mb-6">
          Here are different examples of the Input component:
        </Text>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="space-y-4 mb-6">
              {/* Styled placeholders that mimic ForteUI Input components */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-['Plus_Jakarta_Sans']"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-['Plus_Jakarta_Sans']"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-['Plus_Jakarta_Sans']"
                />
              </div>
            </div>
            
            <CodeBlock 
              language="tsx" 
              code={`<Input label="Full Name" placeholder="Enter your full name" />
<Input label="Email Address" type="email" placeholder="Enter your email" />
<Input label="Password" type="password" placeholder="Enter your password" />`}
            />
          </div>
        </div>
      </div>

      <div id="states">
        <Heading level={2} className="mb-4">Input States</Heading>
        <Text variant="body" className="mb-6">
          Input supports different states including error and disabled:
        </Text>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Default Input</label>
                <input 
                  type="text" 
                  placeholder="Default input field"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-['Plus_Jakarta_Sans']"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Error State</label>
                <input 
                  type="text" 
                  placeholder="Input with error"
                  className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 font-['Plus_Jakarta_Sans']"
                />
                <p className="text-sm text-red-600">This field is required</p>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Disabled State</label>
                <input 
                  type="text" 
                  placeholder="Disabled input"
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed font-['Plus_Jakarta_Sans']"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">With Helper Text</label>
                <input 
                  type="text" 
                  placeholder="Input with helper text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-['Plus_Jakarta_Sans']"
                />
                <p className="text-sm text-gray-600">This is some helpful information</p>
              </div>
            </div>
            
            <CodeBlock 
              language="tsx" 
              code={`<Input label="Default Input" placeholder="Default input field" />
<Input 
  label="Error State" 
  placeholder="Input with error"
  error={true}
  helperText="This field is required"
/>
<Input 
  label="Disabled State" 
  placeholder="Disabled input"
  disabled
/>
<Input 
  label="With Helper Text" 
  placeholder="Input with helper text"
  helperText="This is some helpful information"
/>`}
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
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">label</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">-</td>
                <td className="border border-gray-200 px-4 py-2">Input field label</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">type</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'text' | 'email' | 'password' | 'number'</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">'text'</td>
                <td className="border border-gray-200 px-4 py-2">Input type</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">placeholder</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">-</td>
                <td className="border border-gray-200 px-4 py-2">Placeholder text</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">error</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">string</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">-</td>
                <td className="border border-gray-200 px-4 py-2">Error message</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">disabled</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">boolean</td>
                <td className="border border-gray-200 px-4 py-2 font-mono text-sm">false</td>
                <td className="border border-gray-200 px-4 py-2">Whether the input is disabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
