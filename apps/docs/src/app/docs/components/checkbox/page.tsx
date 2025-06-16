import { lazy, Suspense } from 'react';
import type { Metadata } from 'next';

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';

// Dynamically import the MDX content with SSR disabled  
const CheckboxMDX = lazy(() => import('@/content/docs/components/checkbox.mdx'));

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
      <div className="space-y-3 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}

export default function CheckboxComponentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingFallback />}>
        <CheckboxMDX />
      </Suspense>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Checkbox - ForteUI',
  description: 'Interactive checkbox and form control components with live examples and comprehensive documentation',
};
