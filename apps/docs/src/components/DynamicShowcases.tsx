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

export const DynamicCheckboxShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeCheckboxShowcase })),
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
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-40"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-36"></div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicSwitchShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeSwitchShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-4 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-44"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-4 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-4 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-40"></div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicTextareaShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeTextareaShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-4">
          <div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicRadioShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeRadioShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-4">
          <div>
            <div className="h-5 bg-gray-200 rounded w-32 mb-3"></div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-40"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-36"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-44"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicSliderShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeSliderShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-6">
          <div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-3"></div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-28 mb-3"></div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicBadgeShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeBadgeShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-6">
          <div>
            <div className="h-5 bg-gray-200 rounded w-32 mb-3"></div>
            <div className="flex flex-wrap gap-3">
              <div className="h-6 bg-gray-200 rounded w-16"></div>
              <div className="h-6 bg-gray-200 rounded w-14"></div>
              <div className="h-6 bg-gray-200 rounded w-18"></div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
          <div>
            <div className="h-5 bg-gray-200 rounded w-40 mb-3"></div>
            <div className="flex gap-6">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicChipShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeChipShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="flex flex-wrap gap-2">
          <div className="h-8 bg-gray-200 rounded-full w-20"></div>
          <div className="h-8 bg-gray-200 rounded-full w-24"></div>
          <div className="h-8 bg-gray-200 rounded-full w-16"></div>
          <div className="h-8 bg-gray-200 rounded-full w-28"></div>
        </div>
      </div>
    )
  }
);

export const DynamicCardShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeCardShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicTypographyShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeTypographyShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    )
  }
);

export const DynamicBreadcrumbShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeBreadcrumbShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center gap-4">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-18"></div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded w-12"></div>
            <div className="h-6 bg-gray-200 rounded w-12"></div>
            <div className="h-6 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </div>
    )
  }
);

export const DynamicSnackbarShowcase = dynamic(
  () => import('./ClientSafeShowcases').then(mod => ({ default: mod.ClientSafeSnackbarShowcase })),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="p-4 bg-gray-50 rounded-lg space-y-3">
          <div className="flex gap-4">
            <div className="h-6 bg-gray-200 rounded w-20"></div>
            <div className="h-6 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="h-8 bg-gray-200 rounded"></div>
        </div>
        <div className="w-[420px] h-12 bg-gray-200 rounded-xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full h-12 bg-gray-200 rounded-xl"></div>
          <div className="w-full h-12 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    )
  }
);
