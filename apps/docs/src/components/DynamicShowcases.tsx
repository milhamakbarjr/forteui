import dynamic from 'next/dynamic';

// Dynamic imports with SSR disabled for problematic components
export const DynamicInputShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeInputShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }
);

export const DynamicFormControlsShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeFormControlsShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-48"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-4 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicAvatarShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeAvatarShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    )
  }
);
