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
    { slug: ['components', 'alert'] },
    { slug: ['components', 'badge'] },
    { slug: ['components', 'card'] },
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
