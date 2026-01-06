import { MapPin, Navigation, Car, Plane, Train, ExternalLink } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { CONTACT, PROPERTY } from '../constants';

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/palampur-location.jpg"
          alt="Palampur landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Find Us
        </span>
        <h1 className="heading-xl text-white mb-6">Location & Directions</h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Nestled in the scenic landscapes of Palampur, Himachal Pradesh—your gateway
          to the Himalayan foothills.
        </p>
      </div>
    </section>
  );
}

function AddressSection() {
  return (
    <Section bg="cream" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="heading-lg text-stone-800 mb-6">Our Address</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-medium text-lg text-stone-800 mb-2">
                  Himalayan Valley Homestead
                </h3>
                <p className="text-stone-600">{CONTACT.address.line1}</p>
                <p className="text-stone-600">{CONTACT.address.line2}</p>
              </div>
            </div>
            <a
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-forest-600 font-medium hover:text-forest-700 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <h3 className="heading-sm text-stone-800 mb-4">Location Highlights</h3>
          <ul className="space-y-3">
            {PROPERTY.locationHighlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3 text-stone-600">
                <span className="w-2 h-2 rounded-full bg-forest-500 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="aspect-video lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27024.88!2d76.52!3d32.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b479fb1111111%3A0x1111111111111111!2sPalampur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Himalayan Valley Homestead Location"
          />
        </div>
      </div>
    </Section>
  );
}

function HowToReachSection() {
  const travelOptions = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'By Air',
      description: 'Nearest airport is Kangra Airport (Gaggal)',
      distance: '38 km from the homestead',
      details:
        'Flights connect from Delhi and Chandigarh. Airport transfers can be arranged on request.',
    },
    {
      icon: <Train className="w-6 h-6" />,
      title: 'By Train',
      description: 'Nearest railway station is Pathankot',
      distance: '110 km from the homestead',
      details:
        'Well-connected to major cities. The scenic narrow-gauge toy train from Pathankot to Palampur is a memorable experience.',
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'By Road',
      description: 'Well-connected by road from major cities',
      distance: 'Delhi: 483 km | Chandigarh: 259 km',
      details:
        'Regular Volvo and HRTC buses from Delhi, Chandigarh, and other cities. Self-drive is scenic via the Pathankot route.',
    },
  ];

  return (
    <Section bg="white" padding="lg">
      <SectionHeader
        title="How to Reach"
        subtitle="Multiple convenient ways to reach your Himalayan retreat."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {travelOptions.map((option) => (
          <div key={option.title} className="bg-cream-50 p-8 rounded-2xl">
            <div className="w-14 h-14 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 mb-6">
              {option.icon}
            </div>
            <h3 className="heading-sm text-stone-800 mb-2">{option.title}</h3>
            <p className="text-forest-600 font-medium text-sm mb-2">
              {option.description}
            </p>
            <p className="text-stone-600 text-sm mb-4">{option.distance}</p>
            <p className="text-stone-500 text-sm">{option.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DistancesSection() {
  const distances = [
    { place: 'Palampur Town', distance: '9.5 km' },
    { place: 'Dharamshala', distance: '35 km' },
    { place: 'McLeod Ganj', distance: '40 km' },
    { place: 'Kangra Airport', distance: '38 km' },
    { place: 'Pathankot', distance: '110 km' },
    { place: 'Chandigarh', distance: '259 km' },
    { place: 'Delhi', distance: '483 km' },
  ];

  return (
    <Section bg="sage" padding="lg">
      <SectionHeader title="Distances from Homestead" />
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {distances.map((item, index) => (
            <div
              key={item.place}
              className={`flex items-center justify-between px-6 py-4 ${
                index !== distances.length - 1 ? 'border-b border-stone-100' : ''
              }`}
            >
              <span className="text-stone-700">{item.place}</span>
              <span className="text-forest-600 font-medium">{item.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">Need Help Planning Your Journey?</h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-10">
          Contact us for travel tips, recommended routes, or to arrange airport
          transfers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="white" size="lg">
            Contact Us
          </Button>
          <a
            href={CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream-300 text-cream-300 font-medium rounded-md hover:bg-cream-300 hover:text-forest-800 transition-colors"
          >
            <Navigation className="w-5 h-5" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Location() {
  return (
    <>
      <HeroSection />
      <AddressSection />
      <HowToReachSection />
      <DistancesSection />
      <CTASection />
    </>
  );
}
