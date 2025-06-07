import { Text } from '@forte-ui/core';

interface SpecListProps {
  title: string;
  items: string[];
  className?: string;
}

export function SpecList({ title, items, className = "" }: SpecListProps) {
  return (
    <div className={className}>
      <Text variant="body-sm" className="font-medium mb-2 block">
        {title}
      </Text>
      <ul className="text-sm text-gray-600 space-y-1">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
