import { lazy, Suspense, type JSX } from 'react';
import type { Metadata } from 'next';
import { MDXContentFilter } from '@/components/MDXContentFilter';

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';

// Dynamically import the MDX content with SSR disabled  
const AvatarMDX = lazy(() => import('@/content/docs/components/avatar.mdx'));

// Loading component
function LoadingFallback(): JSX.Element {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
        <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}

export default function AvatarComponentPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <MDXContentFilter>
        <Suspense fallback={<LoadingFallback />}>
          <AvatarMDX />
        </Suspense>
      </MDXContentFilter>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Avatar - ForteUI',
  description: 'Interactive avatar components with live examples and comprehensive documentation',
};
