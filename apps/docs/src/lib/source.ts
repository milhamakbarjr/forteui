import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource({
    // Configure for manual source - we'll use file-based routing for now
  }),
});
