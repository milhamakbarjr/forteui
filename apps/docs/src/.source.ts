import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { icons } from 'lucide-react';

export const source = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource({
    map: require('./.map'),
  }),
});
