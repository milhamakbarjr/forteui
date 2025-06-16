import fs from 'fs';
import path from 'path';

interface FrontmatterData {
  title?: string;
  description?: string;
  [key: string]: any;
}

/**
 * Extract frontmatter from MDX file content
 */
export function extractFrontmatter(content: string): { data: FrontmatterData; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatterContent = match[1];
  const contentWithoutFrontmatter = content.replace(frontmatterRegex, '');
  
  // Simple YAML-like parsing for title and description
  const data: FrontmatterData = {};
  const lines = frontmatterContent.split('\n');
  
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      // Remove quotes if present
      const cleanValue = value.replace(/^["']|["']$/g, '');
      data[key.trim()] = cleanValue;
    }
  }
  
  return { data, content: contentWithoutFrontmatter };
}

/**
 * Read and parse MDX file
 */
export function readMDXFile(filePath: string): { data: FrontmatterData; content: string } {
  const fullPath = path.resolve(filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  return extractFrontmatter(fileContent);
}

/**
 * Get frontmatter data for a specific page
 */
export function getPageFrontmatter(slug: string): FrontmatterData {
  const contentDir = path.join(process.cwd(), 'content', 'docs');
  
  // Map slug to file path
  let filePath: string;
  if (slug === 'introduction') {
    filePath = path.join(contentDir, 'introduction.mdx');
  } else if (slug === 'getting-started') {
    filePath = path.join(contentDir, 'getting-started.mdx');
  } else if (slug === 'design-system') {
    filePath = path.join(contentDir, 'design-system.mdx');
  } else if (slug.startsWith('components/')) {
    const componentName = slug.replace('components/', '');
    filePath = path.join(contentDir, 'components', `${componentName}.mdx`);
  } else {
    return {};
  }
  
  try {
    const { data } = readMDXFile(filePath);
    return data;
  } catch (error) {
    console.warn(`Could not read frontmatter for ${slug}:`, error);
    return {};
  }
}
