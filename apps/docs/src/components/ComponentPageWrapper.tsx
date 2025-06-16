import dynamic from 'next/dynamic';

// Create a client-only wrapper for component demos
export const ComponentPageWrapper = dynamic(
  () => import('./ComponentPageWrapperClient'),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    )
  }
);
