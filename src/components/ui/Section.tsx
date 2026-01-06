import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: 'cream' | 'white' | 'sage' | 'forest' | 'stone';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  id?: string;
}

export function Section({
  children,
  className = '',
  bg = 'cream',
  padding = 'md',
  id,
}: SectionProps) {
  const backgrounds = {
    cream: 'bg-cream-50',
    white: 'bg-white',
    sage: 'bg-sage-50',
    forest: 'bg-forest-800 text-white',
    stone: 'bg-stone-100',
  };

  const paddings = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <section id={id} className={`${backgrounds[bg]} ${paddings[padding]} ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}
