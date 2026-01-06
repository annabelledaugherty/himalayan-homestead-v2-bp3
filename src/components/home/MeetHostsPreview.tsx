import { Link } from 'react-router-dom';
import { Heart, Compass, Quote, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';

const hosts = [
  {
    name: 'Lalita Rana',
    role: 'The Soul of the Home',
    icon: Heart,
    description: 'Her passion for gardening and magic in the kitchen ensures guests leave with full bellies and happy hearts.',
    color: 'from-rose-100 to-rose-200',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    name: 'Raj Rana',
    role: 'The Local Expert',
    icon: Compass,
    description: 'A retired Merchant Navy officer with 35 years of world travel, always ready with the best local tips.',
    color: 'from-sky-100 to-sky-200',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
  },
];

export function MeetHostsPreview() {
  return (
    <Section bg="white" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
              Your Hosts
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-6">
              Meet Lalita & Raj
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              The property is lovingly managed by Mr. Raj Rana and Mrs. Lalita Rana,
              an elderly couple known for their gentle nature, attentive care, and the
              perfect balance between being helpful guides and respecting your privacy.
            </p>

            <div className="relative bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl p-6 mb-8">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-forest-300" />
              <blockquote className="text-lg font-serif text-stone-700 italic pl-8 pr-4">
                "Rooted in hospitality, we view every guest as a friend and treat each
                stay as an opportunity to share the beauty of the Palampur valley."
              </blockquote>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-forest-600 font-medium hover:text-forest-700 transition-colors group"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6">
            {hosts.map((host) => {
              const IconComponent = host.icon;
              return (
                <div
                  key={host.name}
                  className="flex items-start gap-5 bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-100"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${host.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <div className={`w-12 h-12 rounded-xl ${host.iconBg} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${host.iconColor}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-medium text-stone-800 mb-1">
                      {host.name}
                    </h3>
                    <span className="text-forest-600 text-sm font-medium tracking-wide uppercase block mb-3">
                      {host.role}
                    </span>
                    <p className="text-stone-600 leading-relaxed">
                      {host.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
