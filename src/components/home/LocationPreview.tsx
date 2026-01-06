import { Link } from 'react-router-dom';
import { MapPin, Plane, Train, Car, Navigation, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { CONTACT } from '../../constants';

const distances = [
  { place: 'Palampur Town', distance: '9.5 km', highlight: true },
  { place: 'Dharamshala', distance: '35 km', highlight: false },
  { place: 'Kangra Airport', distance: '38 km', highlight: false },
  { place: 'Delhi', distance: '483 km', highlight: false },
];

const transportModes = [
  {
    icon: Plane,
    title: 'By Air',
    info: 'Kangra Airport (38 km)',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Train,
    title: 'By Train',
    info: 'Pathankot (110 km)',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Car,
    title: 'By Road',
    info: 'Well-connected highways',
    color: 'bg-emerald-100 text-emerald-600',
  },
];

export function LocationPreview() {
  return (
    <Section bg="white" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
              Location
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-6">
              Nestled in Palampur
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Located approximately 9.5 km from Palampur town, the homestead sits in a
              scenic, peaceful residential area surrounded by the majestic Dhauladhar
              mountains and lush Kangra Valley.
            </p>

            <div className="bg-cream-50 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-800 mb-1">Our Address</h3>
                  <p className="text-stone-600 text-sm">
                    {CONTACT.address.line1}
                    <br />
                    {CONTACT.address.line2}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {distances.map((item) => (
                  <div
                    key={item.place}
                    className={`rounded-xl p-3 ${
                      item.highlight
                        ? 'bg-forest-600 text-white'
                        : 'bg-white border border-stone-200'
                    }`}
                  >
                    <div
                      className={`text-xl font-bold ${
                        item.highlight ? 'text-white' : 'text-forest-600'
                      }`}
                    >
                      {item.distance}
                    </div>
                    <div
                      className={`text-xs ${
                        item.highlight ? 'text-cream-200' : 'text-stone-500'
                      }`}
                    >
                      {item.place}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {transportModes.map((mode) => {
                const IconComponent = mode.icon;
                return (
                  <div
                    key={mode.title}
                    className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${mode.color} flex items-center justify-center`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-stone-800 text-sm">{mode.title}</div>
                      <div className="text-xs text-stone-500">{mode.info}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/location"
                className="inline-flex items-center gap-2 bg-forest-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-700 transition-colors group"
              >
                View Full Directions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-forest-600 text-forest-600 px-6 py-3 rounded-lg font-medium hover:bg-forest-50 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Open in Maps
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27024.88!2d76.52!3d32.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b479fb1111111%3A0x1111111111111111!2sPalampur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Himalayan Valley Homestead Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-stone-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <div className="text-sm text-stone-500">Elevation</div>
                  <div className="font-bold text-stone-800">~1,400m</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
