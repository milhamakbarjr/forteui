'use client';

import { cn } from '@forteui/core/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'typescript', className }: CodeBlockProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={cn('relative group', className)}>
      <pre className="overflow-x-auto p-4 bg-gray-100 rounded-lg border">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-50"
      >
        Copy
      </button>
    </div>
  );
}
