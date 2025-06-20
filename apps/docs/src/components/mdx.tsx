import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from './CodeBlock';
import { 
  Text, 
  Heading, 
  Button, 
  Input, 
  Textarea, 
  Checkbox, 
  Radio, 
  Switch, 
  Alert, 
  Avatar, 
  Badge, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Chip,
  Progress,
  Slider
} from '@forteui/core';
import { cn } from '@forteui/core/lib/utils';
import { ComponentShowcase, ButtonShowcase, ButtonSizeShowcase } from './ComponentShowcase';
import { InteractiveButtonDemo } from './InteractiveButtonDemo';
import { 
  FormControlsShowcase, 
  AlertShowcase, 
  AvatarShowcase
} from './ComponentShowcases';
import { 
  DynamicInputShowcase, 
  DynamicFormControlsShowcase, 
  DynamicAvatarShowcase,
  DynamicCheckboxShowcase,
  DynamicSwitchShowcase,
  DynamicTextareaShowcase,
  DynamicRadioShowcase,
  DynamicSliderShowcase,
  DynamicBadgeShowcase,
  DynamicChipShowcase,
  DynamicCardShowcase,
  DynamicTypographyShowcase,
  DynamicBreadcrumbShowcase,
  DynamicSnackbarShowcase,
  DynamicProgressShowcase,
  ProgressShowcase,
  DynamicButtonShowcase
} from './DynamicShowcases';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Heading level={1} color="primary" className="mb-6">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading level={2} color="primary" className="mb-4 mt-8">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading level={3} color="primary" className="mb-3 mt-6">
        {children}
      </Heading>
    ),
    p: ({ children }) => (
      <Text variant="body" color="primary" className="mb-4 leading-relaxed">
        {children}
      </Text>
    ),
    pre: ({ children, ...props }) => {
      // Extract code from pre element
      const code = typeof children === 'object' && children && 'props' in children 
        ? children.props.children 
        : String(children);
      
      // Extract language from className (e.g., "language-tsx")
      const className = typeof children === 'object' && children && 'props' in children
        ? children.props.className
        : '';
      const language = className?.replace('language-', '') || 'tsx';
      
      return <CodeBlock language={language}>{code}</CodeBlock>;
    },
    code: ({ children, className, ...props }) => {
      const isInline = !className;
      
      if (isInline) {
        return (
          <code 
            className="bg-gray-100 text-primary px-1.5 py-0.5 rounded text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      }
      
      // This will be handled by the pre element
      return <code className={className} {...props}>{children}</code>;
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-primary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-primary">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-primary">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary bg-primary-8 p-4 mb-4 italic">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-gray-300">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-primary">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2 text-primary">
        {children}
      </td>
    ),
    a: ({ children, href, ...props }) => (
      <a 
        href={href}
        className="text-primary hover:text-primary-dark underline transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    // Interactive Components for MDX
    ComponentShowcase,
    ButtonShowcase,
    ButtonSizeShowcase,
    InteractiveButtonDemo,
    FormControlsShowcase,
    AlertShowcase,
    AvatarShowcase,
    // Dynamic SSR-safe versions
    DynamicInputShowcase,
    DynamicFormControlsShowcase,
    DynamicAvatarShowcase,
    DynamicCheckboxShowcase,
    DynamicSwitchShowcase,
    DynamicTextareaShowcase,
    DynamicRadioShowcase,
    DynamicSliderShowcase,
    DynamicBadgeShowcase,
    DynamicChipShowcase,
    DynamicCardShowcase,
    DynamicTypographyShowcase,
    DynamicBreadcrumbShowcase,
    DynamicSnackbarShowcase,
    DynamicProgressShowcase,
    ProgressShowcase,
    DynamicButtonShowcase,
    // ForteUI Components
    Button,
    Input,
    Textarea,
    Checkbox,
    Radio,
    Switch,
    Alert,
    Avatar,
    Badge,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Chip,
    Progress,
    Slider,
    ...components,
  };
} 