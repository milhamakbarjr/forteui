import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

// Simple source for now - will be improved in Phase 2B
export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource({}),
});
