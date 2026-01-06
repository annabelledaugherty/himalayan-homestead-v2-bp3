import { Link } from 'react-router-dom';
import {
  Wifi,
  Zap,
  Mountain,
  Sun,
  Car,
  Shield,
  Sparkles,
  Armchair,
  ArrowRight,
} from 'lucide-react';
import { Section } from '../ui/Section';

const amenityHighlights = [
  { name: 'High-Speed Wi-Fi', icon: Wifi, description: 'Stay connected' },
  { name: 'Power Backup', icon: Zap, description: 'Uninterrupted supply' },
  { name: 'Rooftop Terrace', icon: Sun, description: 'Panoramic views' },
  { name: 'Mountain Balconies', icon: Mountain, description: 'Private retreats' },
  { name: 'Veranda Seating', icon: Armchair, description: 'Relaxation spots' },
  { name: 'Gated Property', icon: Shield, description: 'Safe & secure' },
  { name: 'Parking (5 Cars)', icon: Car, description: 'Ample space' },
  { name: 'Daily Housekeeping', icon: Sparkles, description: 'Clean & tidy' },
];

export function AmenitiesShowcase() {
  return (
    <Section bg="sage" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/outdoor-view.jpeg"
                  alt="Scenic outdoor seating with mountain views"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-forest-600 rounded-2xl shadow-lg hidden md:flex items-center justify-center text-white p-4">
                <div className="text-center">
                  <Sun className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm font-medium">Open-Air Living</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
              Comfort & Convenience
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-6">
              Everything You Need
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              From modern essentials to scenic outdoor spaces, we've thought of
              everything to make your mountain stay comfortable and memorable.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {amenityHighlights.map((amenity) => {
                const IconComponent = amenity.icon;
                return (
                  <div
                    key={amenity.name}
                    className="group bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 border border-stone-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-800 text-sm">
                          {amenity.name}
                        </h3>
                        <p className="text-xs text-stone-500">{amenity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/amenities"
              className="inline-flex items-center gap-2 bg-forest-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-700 transition-colors group"
            >
              View All Amenities
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
