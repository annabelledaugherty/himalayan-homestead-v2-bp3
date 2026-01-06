import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm overflow-hidden ${
        hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface ImageCardProps {
  image: string;
  title: string;
  subtitle?: string;
  href?: string;
  overlay?: boolean;
}

export function ImageCard({ image, title, subtitle, href, overlay = true }: ImageCardProps) {
  const content = (
    <div className="relative aspect-[4/3] overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-cream-200 text-sm md:text-base">{subtitle}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block">
        <Card hover>{content}</Card>
      </Link>
    );
  }

  return <Card>{content}</Card>;
}

interface StayOptionCardProps {
  image: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  features: string[];
  cta: string;
  ctaLink: string;
}

export function StayOptionCard({
  image,
  title,
  shortTitle,
  subtitle,
  features,
  cta,
  ctaLink,
}: StayOptionCardProps) {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-serif font-medium text-white">{shortTitle}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-stone-600 mb-4">{subtitle}</p>
        <ul className="space-y-2 mb-6 flex-grow">
          {features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-stone-600">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 text-forest-600 font-medium hover:text-forest-700 transition-colors group"
        >
          {cta}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
