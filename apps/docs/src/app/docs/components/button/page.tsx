import { Button } from '@forteui/core';
import { InteractivePlayground, CodeBlock } from '../../../../components/InteractivePlayground';

export default function ButtonPage() {
  const basicButtonCode = `function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline-default">Outline</Button>
    </div>
  );
}`;

  const advancedButtonCode = `function Example() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      
      <div className="flex gap-4">
        <Button 
          variant="primary" 
          loading={loading}
          onClick={handleClick}
        >
          {loading ? 'Loading...' : 'Click me'}
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Button</h1>
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
            17 variants
          </span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          A versatile button component with multiple variants, sizes, states, and icon support. 
          Perfect for forms, actions, and interactive elements.
        </p>
      </div>

      {/* Quick Import */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Import</h2>
        <CodeBlock language="tsx">
{`import { Button } from '@forteui/core';`}
        </CodeBlock>
      </div>

      {/* Basic Usage */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
        <InteractivePlayground 
          code={basicButtonCode}
          title="Button Variants"
          description="Try different button variants and see the changes in real-time"
        />
      </div>

      {/* Advanced Example */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Advanced Example</h2>
        <InteractivePlayground 
          code={advancedButtonCode}
          title="Sizes, States & Loading"
          description="Interactive example with different sizes, loading states, and disabled buttons"
        />
      </div>

      {/* Props Table */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Prop</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Default</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">variant</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    'primary' | 'secondary' | 'outline-default' | ...
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">'primary'</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Visual style variant</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">size</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    'sm' | 'md' | 'lg'
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">'md'</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Button size</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">loading</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">boolean</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Show loading spinner</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">disabled</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">boolean</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Disable button interactions</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">children</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">ReactNode</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Button content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Accessibility</h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-3">♿ Accessibility Features</h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <li>• Proper <code className="bg-blue-100 dark:bg-blue-800 px-1 py-0.5 rounded">role="button"</code> semantics</li>
            <li>• Keyboard navigation support (Space, Enter)</li>
            <li>• Focus management with visible focus indicators</li>
            <li>• Screen reader compatible with proper ARIA labels</li>
            <li>• Loading state announcements</li>
            <li>• Disabled state handling</li>
          </ul>
        </div>
      </div>

      {/* Related Components */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Related Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Input', description: 'Text input with floating labels', href: '/docs/components/input' },
            { name: 'Checkbox', description: 'Selection controls', href: '/docs/components/checkbox' },
            { name: 'Switch', description: 'Binary toggle controls', href: '/docs/components/switch' }
          ].map(component => (
            <a
              key={component.name}
              href={component.href}
              className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-main dark:hover:border-primary-light transition-colors"
            >
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">{component.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{component.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 