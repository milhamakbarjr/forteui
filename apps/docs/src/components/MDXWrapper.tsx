import { ReactNode, isValidElement, cloneElement } from 'react';

interface MDXWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component that filters out frontmatter content from MDX rendering
 */
export function MDXWrapper({ children }: MDXWrapperProps) {
  // Function to check if a node looks like frontmatter
  const isFrontmatterNode = (node: any): boolean => {
    if (typeof node === 'string') {
      // Check if it's a string that looks like frontmatter
      const trimmed = node.trim();
      return (
        trimmed.startsWith('title:') ||
        trimmed.startsWith('description:') ||
        trimmed.includes('title:') && trimmed.includes('description:') ||
        /^---\s*$/.test(trimmed) ||
        /^(title|description):\s*/.test(trimmed)
      );
    }
    return false;
  };

  // Function to recursively filter children
  const filterChildren = (children: ReactNode): ReactNode => {
    if (Array.isArray(children)) {
      return children
        .filter(child => !isFrontmatterNode(child))
        .map(child => filterChildren(child));
    }
    
    if (isValidElement(children)) {
      // If it's a React element, recursively filter its children
      if (children.props.children) {
        return cloneElement(children, {
          ...children.props,
          children: filterChildren(children.props.children)
        });
      }
    }
    
    if (isFrontmatterNode(children)) {
      return null;
    }
    
    return children;
  };

  const filteredChildren = filterChildren(children);
  
  return <>{filteredChildren}</>;
}
