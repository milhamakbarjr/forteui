import { Text } from 'forteui-core';

interface ShowcaseGroupProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShowcaseGroup({ title, description, children, className = "" }: ShowcaseGroupProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <Text variant="caption" color="secondary" className="mb-3 block">
          {title}
        </Text>
        {description && (
          <Text variant="body-sm" color="secondary" className="mb-3 block">
            {description}
          </Text>
        )}
      </div>
      {children}
    </div>
  );
}
