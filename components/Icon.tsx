
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

// Adding explicit size and className to IconProps to fix missing property errors in the consumer components.
interface IconProps extends LucideProps {
  name: string;
  size?: string | number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};
