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
};

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.[0] || 'introduction';
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
  ];
}

export function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Metadata {
  const slug = params.slug?.[0] || 'introduction';
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
