'use client';

import { useEffect, useRef } from 'react';

interface MDXContentFilterProps {
  children: React.ReactNode;
}

/**
 * Client component that filters out frontmatter content from rendered MDX
 */
export function MDXContentFilter({ children }: MDXContentFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Function to check if text looks like frontmatter
    const isFrontmatterText = (text: string): boolean => {
      const trimmed = text.trim();
      return (
        trimmed.includes('title:') ||
        trimmed.includes('description:') ||
        trimmed.startsWith('---') ||
        /^(title|description):\s*.+/i.test(trimmed) ||
        (trimmed.includes('title:') && trimmed.includes('description:')) ||
        /title:\s*\w+.*description:\s*\w+/i.test(trimmed.replace(/\s+/g, ' '))
      );
    };

    // Look through all elements and hide those containing frontmatter
    const allElements = container.querySelectorAll('*');
    
    allElements.forEach(element => {
      const text = element.textContent?.trim() || '';
      
      if (text && isFrontmatterText(text)) {
        // Check if this element only contains frontmatter (no other content)
        const hasOnlyFrontmatter = !text.replace(/title:\s*[^{]*?description:\s*[^{]*?/gi, '').trim() ||
                                  text.split('\n').every(line => 
                                    line.trim() === '' || 
                                    line.includes('title:') || 
                                    line.includes('description:') ||
                                    line.trim() === '---'
                                  );
                                  
        if (hasOnlyFrontmatter) {
          (element as HTMLElement).classList.add('mdx-frontmatter-hidden');
        }
      }
    });

    // Special case: check the very first text content
    const firstTextNode = container.childNodes[0];
    if (firstTextNode && firstTextNode.nodeType === Node.TEXT_NODE) {
      const text = firstTextNode.textContent?.trim() || '';
      if (isFrontmatterText(text)) {
        (firstTextNode as any).style = { display: 'none' };
      }
    }
    
  }, [children]);

  return (
    <div ref={containerRef} className="mdx-content">
      {children}
    </div>
  );
}
