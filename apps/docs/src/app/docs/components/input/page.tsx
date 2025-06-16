import { lazy, Suspense } from 'react';
import type { Metadata } from 'next';
import { MDXContentFilter } from '@/components/MDXContentFilter';

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';

// Dynamically import the MDX content with SSR disabled  
const InputMDX = lazy(() => import('@/content/docs/components/input.mdx'));

// Loading component
function LoadingFallback() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function InputComponentPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <MDXContentFilter>
        <Suspense fallback={<LoadingFallback />}>
          <InputMDX />
        </Suspense>
      </MDXContentFilter>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Input - ForteUI',
  description: 'Interactive input components with live examples and comprehensive documentation',
};
