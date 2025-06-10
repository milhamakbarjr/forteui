import { loader } from 'fumadocs-core/source';

// Simple source configuration for deployment
export const source = loader({
  baseUrl: '/docs',
  source: {
    getPage: (slugs?: string[]) => {
      const slug = slugs?.join('/') || '';
      
      if (slug === '' || slug === 'index') {
        return {
          type: 'page' as const,
          data: {
            title: 'ForteUI Documentation',
            description: 'A modern React component library',
          },
          file: {
            path: 'index.mdx',
            dirname: '.',
          },
          slugs: [],
          url: '/docs',
        };
      }
      
      if (slug === 'getting-started') {
        return {
          type: 'page' as const,
          data: {
            title: 'Getting Started',
            description: 'Get started with ForteUI',
          },
          file: {
            path: 'getting-started.mdx', 
            dirname: '.',
          },
          slugs: ['getting-started'],
          url: '/docs/getting-started',
        };
      }
      
      return undefined;
    },
    getPages: () => [
      {
        type: 'page' as const,
        data: {
          title: 'ForteUI Documentation',
          description: 'A modern React component library',
        },
        file: {
          path: 'index.mdx',
          dirname: '.',
        },
        slugs: [],
        url: '/docs',
      },
      {
        type: 'page' as const,
        data: {
          title: 'Getting Started',
          description: 'Get started with ForteUI',
        },
        file: {
          path: 'getting-started.mdx',
          dirname: '.',
        },
        slugs: ['getting-started'],
        url: '/docs/getting-started',
      }
    ],
    getNodePage: () => undefined,
    files: [],
    pageTree: {
      name: 'Docs',
      children: [
        {
          type: 'page',
          name: 'Introduction',
          url: '/docs',
        },
        {
          type: 'page', 
          name: 'Getting Started',
          url: '/docs/getting-started',
        }
      ],
    },
  },
});
