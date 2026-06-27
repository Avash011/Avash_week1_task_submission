import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string;
}

export function GradientText({
  children,
  className = '',
  colors = 'from-cyan-400 via-purple-500 to-orange-400',
}: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${colors} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
