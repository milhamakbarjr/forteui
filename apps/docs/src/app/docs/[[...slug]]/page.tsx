import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { lazy } from 'react';
import { getPageFrontmatter } from '@/lib/mdx-utils';

// Simple mapping for existing pages
const pageMap = {
  'introduction': {
    Component: lazy(() => import('../../../../content/docs/introduction.mdx')),
  },
  'getting-started': {
    Component: lazy(() => import('../../../../content/docs/getting-started.mdx')),
  },
  'design-system': {
    Component: lazy(() => import('../../../../content/docs/design-system.mdx')),
  },
  // Component documentation
  'components/button': {
    Component: lazy(() => import('../../../../content/docs/components/button.mdx')),
  },
  'components/input': {
    Component: lazy(() => import('../../../../content/docs/components/input.mdx')),
  },
  'components/checkbox': {
    Component: lazy(() => import('../../../../content/docs/components/checkbox.mdx')),
  },
  'components/radio': {
    Component: lazy(() => import('../../../../content/docs/components/radio.mdx')),
  },
  'components/switch': {
    Component: lazy(() => import('../../../../content/docs/components/switch.mdx')),
  },
  'components/textarea': {
    Component: lazy(() => import('../../../../content/docs/components/textarea.mdx')),
  },
  'components/slider': {
    Component: lazy(() => import('../../../../content/docs/components/slider.mdx')),
  },
  'components/avatar': {
    Component: lazy(() => import('../../../../content/docs/components/avatar.mdx')),
  },
  'components/alert': {
    Component: lazy(() => import('../../../../content/docs/components/alert.mdx')),
  },
  'components/badge': {
    Component: lazy(() => import('../../../../content/docs/components/badge.mdx')),
  },
  'components/card': {
    Component: lazy(() => import('../../../../content/docs/components/card.mdx')),
  },
  'components/progress': {
    Component: lazy(() => import('../../../../content/docs/components/progress.mdx')),
  },
  'components/chip': {
    Component: lazy(() => import('../../../../content/docs/components/chip.mdx')),
  },
  'components/typography': {
    Component: lazy(() => import('../../../../content/docs/components/typography.mdx')),
  },
  'components/snackbar': {
    Component: lazy(() => import('../../../../content/docs/components/snackbar.mdx')),
  },
  'components/breadcrumb': {
    Component: lazy(() => import('../../../../content/docs/components/breadcrumb.mdx')),
  },
};

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.join('/') || 'introduction';
  const pageData = pageMap[slug as keyof typeof pageMap];

  if (!pageData) {
    notFound();
  }

  const { Component } = pageData;

  return (
    <div className="prose prose-gray max-w-none">
      <Component />
    </div>
  );
}

export async function generateStaticParams() {
  // Generate static params for pages that don't have interactive components
  // Exclude input, checkbox, and avatar as they have dynamic pages with interactive showcases
  return [
    { slug: ['introduction'] },
    { slug: ['getting-started'] },
    { slug: ['design-system'] },
    { slug: ['components', 'button'] },
    // { slug: ['components', 'input'] }, // Excluded - has interactive showcases
    // { slug: ['components', 'checkbox'] }, // Excluded - has interactive showcases  
    // { slug: ['components', 'avatar'] }, // Excluded - has interactive showcases
    { slug: ['components', 'radio'] },
    { slug: ['components', 'switch'] },
    { slug: ['components', 'textarea'] },
    { slug: ['components', 'slider'] },
    { slug: ['components', 'alert'] },
    { slug: ['components', 'badge'] },
    { slug: ['components', 'card'] },
    { slug: ['components', 'progress'] },
    { slug: ['components', 'chip'] },
    { slug: ['components', 'typography'] },
    { slug: ['components', 'snackbar'] },
    { slug: ['components', 'breadcrumb'] },
  ];
}

export function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Metadata {
  const slug = params.slug?.join('/') || 'introduction';
  const pageData = pageMap[slug as keyof typeof pageMap];

  if (!pageData) {
    return {
      title: 'Not Found',
      description: 'Page not found',
    };
  }

  // Extract frontmatter data from the actual MDX file
  const frontmatter = getPageFrontmatter(slug);

  return {
    title: frontmatter.title || 'ForteUI Documentation',
    description: frontmatter.description || 'ForteUI component library documentation',
  };
}
