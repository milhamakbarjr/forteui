import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from './CodeBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8 font-sans">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6 font-sans">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 mb-4 leading-relaxed">
        {children}
      </p>
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
            className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
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
      <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-main bg-primary-8 p-4 mb-4 italic">
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
      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2 text-gray-700">
        {children}
      </td>
    ),
    a: ({ children, href, ...props }) => (
      <a 
        href={href}
        className="text-primary-main hover:text-primary-dark underline transition-colors"
        {...props}
      >
        {children}
      </a>
    ),
    ...components,
  };
} 