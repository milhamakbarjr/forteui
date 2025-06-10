import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { lazy } from 'react';

// Simple mapping for existing pages
const pageMap = {
  'introduction': {
    title: 'Introduction',
    description: 'Introduction to ForteUI component library',
    Component: lazy(() => import('../../../../content/docs/introduction.mdx')),
  },
  'getting-started': {
    title: 'Getting Started', 
    description: 'Get started with ForteUI',
    Component: lazy(() => import('../../../../content/docs/getting-started.mdx')),
  },
  // Component documentation
  'components/button': {
    title: 'Button',
    description: 'Versatile button component with multiple variants, sizes, states, and icon support',
    Component: lazy(() => import('../../../../content/docs/components/button.mdx')),
  },
  'components/input': {
    title: 'Input',
    description: 'Input component with floating labels, multiple states, variants, and adornment support',
    Component: lazy(() => import('../../../../content/docs/components/input.mdx')),
  },
  'components/checkbox': {
    title: 'Checkbox',
    description: 'Checkbox component for selection controls with multiple states and variants',
    Component: lazy(() => import('../../../../content/docs/components/checkbox.mdx')),
  },
  'components/radio': {
    title: 'Radio',
    description: 'Radio component for single-choice selection controls with multiple variants',
    Component: lazy(() => import('../../../../content/docs/components/radio.mdx')),
  },
  'components/switch': {
    title: 'Switch',
    description: 'Switch component for binary on/off controls with smooth animations',
    Component: lazy(() => import('../../../../content/docs/components/switch.mdx')),
  },
  'components/textarea': {
    title: 'Textarea',
    description: 'Multi-line text input component with auto-resize, character limits, and form integration',
    Component: lazy(() => import('../../../../content/docs/components/textarea.mdx')),
  },
  'components/slider': {
    title: 'Slider',
    description: 'Range input component for selecting numeric values with single or dual handles',
    Component: lazy(() => import('../../../../content/docs/components/slider.mdx')),
  },
  'components/avatar': {
    title: 'Avatar',
    description: 'Avatar component for displaying user profile images with fallbacks and status indicators',
    Component: lazy(() => import('../../../../content/docs/components/avatar.mdx')),
  },
  'components/alert': {
    title: 'Alert',
    description: 'Alert component for displaying important messages and notifications',
    Component: lazy(() => import('../../../../content/docs/components/alert.mdx')),
  },
  'components/badge': {
    title: 'Badge',
    description: 'Badge component for displaying status indicators, counts, and labels',
    Component: lazy(() => import('../../../../content/docs/components/badge.mdx')),
  },
  'components/card': {
    title: 'Card',
    description: 'Card component for grouping related content with header, content, and footer sections',
    Component: lazy(() => import('../../../../content/docs/components/card.mdx')),
  },
  'components/progress': {
    title: 'Progress',
    description: 'Progress component for displaying task completion and loading states',
    Component: lazy(() => import('../../../../content/docs/components/progress.mdx')),
  },
  'components/chip': {
    title: 'Chip',
    description: 'Compact chip component for tags, filters, and selection with removable functionality',
    Component: lazy(() => import('../../../../content/docs/components/chip.mdx')),
  },
  'components/typography': {
    title: 'Typography',
    description: 'Text system documentation with Plus Jakarta Sans font family and all variants',
    Component: lazy(() => import('../../../../content/docs/components/typography.mdx')),
  },
  'components/snackbar': {
    title: 'Snackbar',
    description: 'Toast notification component with actions, positioning, and auto-dismiss functionality',
    Component: lazy(() => import('../../../../content/docs/components/snackbar.mdx')),
  },
  'components/breadcrumb': {
    title: 'Breadcrumb',
    description: 'Hierarchical navigation component with separators and overflow handling',
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
  return [
    { slug: ['introduction'] },
    { slug: ['getting-started'] },
    { slug: ['components', 'button'] },
    { slug: ['components', 'input'] },
    { slug: ['components', 'checkbox'] },
    { slug: ['components', 'radio'] },
    { slug: ['components', 'switch'] },
    { slug: ['components', 'textarea'] },
    { slug: ['components', 'slider'] },
    { slug: ['components', 'avatar'] },
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

  return {
    title: pageData.title,
    description: pageData.description,
  };
}
