import { Heading, Text, Button } from '@forteui/core';
import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div>
        <Heading level={1} className="mb-4">Introduction</Heading>
        <Text variant="body" color="secondary" className="mb-6">
          Learn about ForteUI, a production-ready React UI component library with custom design system and Plus Jakarta Sans typography.
        </Text>
      </div>

      <div>
        <Heading level={2} className="mb-4">What is ForteUI?</Heading>
        <Text variant="body" className="mb-4">
          ForteUI is a comprehensive React component library that provides:
        </Text>
        
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">🎨</span>
            <Text variant="body"><strong>Beautiful Design System</strong> - Carefully crafted components following modern design principles</Text>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">🚀</span>
            <Text variant="body"><strong>Production Ready</strong> - Battle-tested components ready for your applications</Text>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">📱</span>
            <Text variant="body"><strong>Responsive</strong> - Mobile-first design that works on all screen sizes</Text>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">♿</span>
            <Text variant="body"><strong>Accessible</strong> - WCAG 2.1 AA compliant components</Text>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">🎯</span>
            <Text variant="body"><strong>TypeScript First</strong> - Full TypeScript support with excellent DX</Text>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">🎨</span>
            <Text variant="body"><strong>Customizable</strong> - Easy theming and customization options</Text>
          </li>
        </ul>
      </div>

      <div>
        <Heading level={2} className="mb-4">Project Vision</Heading>
        <Text variant="body" className="mb-4">
          ForteUI aims to provide developers with a complete set of UI components that are:
        </Text>
        
        <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
          <li><Text variant="body"><strong>Easy to use</strong> - Simple APIs that feel natural</Text></li>
          <li><Text variant="body"><strong>Flexible</strong> - Customizable to fit your brand and design needs</Text></li>
          <li><Text variant="body"><strong>Reliable</strong> - Well-tested and production-ready</Text></li>
          <li><Text variant="body"><strong>Beautiful</strong> - Thoughtfully designed with attention to detail</Text></li>
        </ol>
      </div>

      <div>
        <Heading level={2} className="mb-4">Typography</Heading>
        <Text variant="body" className="mb-6">
          ForteUI uses <strong>Plus Jakarta Sans</strong> as its primary typeface, providing excellent readability and a modern aesthetic that works well across all digital platforms.
        </Text>
      </div>

      <div>
        <Heading level={2} className="mb-4">Why Choose ForteUI?</Heading>
        <ul className="space-y-2 mb-8">
          <li><Text variant="body">• <strong>Complete Component Library</strong> - Everything you need to build modern web applications</Text></li>
          <li><Text variant="body">• <strong>Design System Integration</strong> - Consistent design tokens and styling</Text></li>
          <li><Text variant="body">• <strong>Developer Experience</strong> - Great TypeScript support and documentation</Text></li>
          <li><Text variant="body">• <strong>Active Development</strong> - Regular updates and improvements</Text></li>
          <li><Text variant="body">• <strong>Community Focused</strong> - Built with feedback from the developer community</Text></li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Button asChild variant="primary" size="lg">
          <Link href="/docs/getting-started">Get Started</Link>
        </Button>
        <Button asChild variant="outline-default" size="lg">
          <Link href="/docs/components/button">View Components</Link>
        </Button>
      </div>
    </div>
  );
}
