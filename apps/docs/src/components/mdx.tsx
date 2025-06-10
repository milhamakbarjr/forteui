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
      const codeElement = Array.isArray(children) ? children[0] : children;
      if (typeof codeElement === 'object' && codeElement && 'props' in codeElement) {
        const code = codeElement.props?.children;
        const language = codeElement.props?.className?.replace('language-', '') || 'typescript';
        
        if (typeof code === 'string') {
          return <CodeBlock code={code.trim()} language={language} />;
        }
      }
      
      return <pre {...props}>{children}</pre>;
    },
    code: ({ children, className }) => {
      // Inline code
      if (!className) {
        return (
          <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      
      // Block code - will be handled by pre
      return <code className={className}>{children}</code>;
    },
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-main bg-gray-50 p-4 mb-4">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-200">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-gray-200 bg-gray-50 px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-200 px-4 py-2">
        {children}
      </td>
    ),
    ...components,
  };
} 