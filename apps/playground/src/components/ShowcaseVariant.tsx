import { Text } from '@forte-ui/core';

interface ShowcaseVariantProps {
  title: string;
  children: React.ReactNode;
  layout?: 'horizontal' | 'vertical' | 'grid';
  className?: string;
}

export function ShowcaseVariant({ 
  title, 
  children, 
  layout = 'horizontal',
  className = "" 
}: ShowcaseVariantProps) {
  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-3',
    vertical: 'space-y-3',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
  };

  return (
    <div className={className}>
      <Text variant="body-sm" className="mb-2 block font-medium text-gray-700">
        {title}
      </Text>
      <div className={layoutClasses[layout]}>
        {children}
      </div>
    </div>
  );
}
