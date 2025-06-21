import { Heading } from 'forteui-core';

interface SpecificationBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'figma' | 'design-tokens';
  className?: string;
}

export function SpecificationBox({ 
  title = "Implementation Details", 
  children, 
  variant = 'default',
  className = "" 
}: SpecificationBoxProps) {
  const variantClasses = {
    default: 'bg-gray-50',
    figma: 'bg-blue-50 border border-blue-200',
    'design-tokens': 'bg-purple-50 border border-purple-200'
  };

  return (
    <div className={`p-6 rounded-lg space-y-4 ${variantClasses[variant]} ${className}`}>
      <Heading level={3} className="text-lg">
        {title}
      </Heading>
      {children}
    </div>
  );
}
