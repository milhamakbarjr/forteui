import { Heading, Text } from '@forte-ui/core';

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShowcaseSection({ title, description, children, className = "" }: ShowcaseSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <div>
        <Heading level={2}>{title}</Heading>
        {description && (
          <Text variant="body" color="secondary" className="mt-2">
            {description}
          </Text>
        )}
      </div>
      {children}
    </section>
  );
}
