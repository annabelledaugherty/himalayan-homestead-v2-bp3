interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      <h2
        className={`heading-lg ${
          light ? 'text-white' : 'text-stone-800'
        } mb-4`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`body-md max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-cream-200' : 'text-stone-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
