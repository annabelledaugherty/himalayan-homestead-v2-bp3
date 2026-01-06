import { Check, Heart, Compass, UtensilsCrossed, Anchor, MapPin, Star } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PROPERTY } from '../constants';

const whatMakesUsDifferent = [
  'Multiple accommodation formats in one property',
  'Open terraces and mountain-facing balconies',
  'Quiet, non-commercial neighborhood',
  'Suitable for long stays and remote work',
  'Host-managed with personal attention',
];

const hosts = [
  {
    name: 'Lalita Rana',
    role: 'The Soul of the Home',
    icon: Heart,
    description: `Lalita is the soul of the home. Her passion for gardening keeps the homestead blooming with color, and her magic in the kitchen ensures that guests often leave with full bellies and happy hearts. Guests often describe her as a "mother figure" who ensures every comfort is met.`,
    highlights: [
      { icon: Heart, text: 'Warm & nurturing host' },
      { icon: UtensilsCrossed, text: 'Exceptional home cooking' },
    ],
  },
  {
    name: 'Raj Rana',
    role: 'The Local Expert',
    icon: Compass,
    description: `Mr. Raj Rana is a retired Merchant Navy officer who has travelled 70% of the world during his 35-year career. With a deep love for Palampur, he is always ready with the best travel tips, hidden trails, and sightseeing advice that you won't find in a guidebook. His resourcefulness and welcoming smile set the tone for a relaxed, hassle-free vacation.`,
    highlights: [
      { icon: Anchor, text: '35 years in Merchant Navy' },
      { icon: MapPin, text: 'Local travel expert' },
    ],
  },
];

const caretaker = {
  name: 'Ashok Kumar',
  role: 'The Caretaker',
  description: `Ashok is a friendly and helpful person who handles the day-to-day operations of the property. Known for his warm demeanor and excellent cooking skills, he ensures everything runs smoothly during your stay.`,
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hhs-banner-about.jpg"
          alt="Himalayan Valley Homestead at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          About Us
        </span>
        <h1 className="heading-xl text-white mb-6">
          A Home in the Heart of the Himalayas
        </h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Where space, calm, and connection with nature come together to create
          unforgettable mountain experiences.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <Section bg="cream" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h2 className="heading-lg text-stone-800 mb-6">
            Warm Hospitality Is Who We Are
          </h2>
          <p className="body-md text-stone-600 mb-6">
            Nestled in the serene folds of the Palampur valley, Himalayan Valley Homestead
            is built around a simple idea—
            <strong className="text-stone-800">
              space, calm, and connection with nature
            </strong>
            . Our family-run homestead is lovingly managed by hosts who are known for their
            welcoming and personal approach to every guest.
          </p>
          <p className="body-md text-stone-600 mb-8">
            Our philosophy is simple: provide a comfortable haven where guests can unwind,
            reconnect with nature, and feel like part of the family—all while enjoying the
            breathtaking mountain views and peaceful surroundings.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.bedrooms}
              </div>
              <div className="text-sm text-stone-600">Bedrooms</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.bathrooms}
              </div>
              <div className="text-sm text-stone-600">Bathrooms</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.kitchens}
              </div>
              <div className="text-sm text-stone-600">Kitchens</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.parking}
              </div>
              <div className="text-sm text-stone-600">Car Parking</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/outdoor-view.jpeg"
              alt="Mountain views from the homestead veranda"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-forest-600 rounded-2xl flex items-center justify-center text-white p-6 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="text-4xl font-serif font-medium mb-1">5</div>
              <div className="text-sm">Star Rating on Airbnb</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function MeetYourHosts() {
  return (
    <Section bg="white" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Your Hosts
          </span>
          <h2 className="heading-lg text-stone-800 mb-6">
            Meet Lalita & Raj
          </h2>
          <p className="body-md text-stone-600 max-w-3xl mx-auto">
            The property is owned by Mr. Raj Rana and Mrs. Lalita Rana, an elderly couple who
            stay on the ground floor. They are the pillars of the Himalayan Valley Homestead
            experience—known for their gentle nature, attentive care, and the perfect balance
            between being helpful guides and respecting your privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {hosts.map((host) => {
            const IconComponent = host.icon;
            return (
              <div
                key={host.name}
                className="bg-cream-50 rounded-2xl p-8 lg:p-10 border border-cream-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center mb-6 shadow-inner">
                    <div className="w-28 h-28 rounded-full bg-cream-100 border-4 border-white flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-forest-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-stone-800 mb-2">
                    {host.name}
                  </h3>
                  <span className="text-forest-600 font-medium text-sm tracking-wide uppercase">
                    {host.role}
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 text-center">
                  {host.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {host.highlights.map((highlight, idx) => {
                    const HighlightIcon = highlight.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
                      >
                        <HighlightIcon className="w-4 h-4 text-forest-600" />
                        <span className="text-sm text-stone-700">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-2xl p-8 lg:p-12 text-center text-white mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <blockquote className="text-xl lg:text-2xl font-serif italic mb-6 text-cream-100">
              "Rooted in hospitality, we view every guest as a friend and treat each stay
              as an opportunity to share the beauty of the Palampur valley."
            </blockquote>
            <p className="text-cream-200 text-sm">
              Whether helping with local travel tips, accommodating special needs, or simply
              sharing a friendly conversation—we are attentive, gracious, and deeply invested
              in creating a genuinely warm and welcoming environment.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl p-6 lg:p-8 border border-stone-200">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-stone-600" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-serif font-medium text-stone-800 mb-1">
                {caretaker.name}
              </h3>
              <span className="text-stone-500 font-medium text-sm tracking-wide uppercase block mb-3">
                {caretaker.role}
              </span>
              <p className="text-stone-600 text-sm leading-relaxed">
                {caretaker.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DifferenceSection() {
  return (
    <Section bg="cream" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/hhs-hero-5.jpg"
                alt="Rooftop terrace views"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
              <img
                src="/room-hhs.avif"
                alt="Comfortable bedroom at the homestead"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/life-at-homestead.jpg"
                alt="Living area and common spaces"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
              <img
                src="/hhs-hero1.jpg"
                alt="Mountain view from the property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-stone-800 mb-6">
            What Makes Us Different
          </h2>
          <p className="body-md text-stone-600 mb-8">
            Unlike typical hotels or cramped homestays, we offer a genuine home
            experience with the space and freedom to truly unwind.
          </p>
          <ul className="space-y-4">
            {whatMakesUsDifferent.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-forest-600" />
                </div>
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function LocationPreview() {
  return (
    <Section bg="sage" padding="lg">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Location
        </span>
        <h2 className="heading-lg text-stone-800 mb-6">
          Nestled in Palampur
        </h2>
        <p className="body-md text-stone-600 mb-8">
          Located approximately 9.5 km from Palampur town, the homestead sits in a
          scenic, peaceful residential area surrounded by the majestic Dhauladhar
          mountains and lush Kangra Valley.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="text-center">
            <div className="text-2xl font-serif font-medium text-forest-600">35 km</div>
            <div className="text-sm text-stone-600">from Dharamshala</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-serif font-medium text-forest-600">38 km</div>
            <div className="text-sm text-stone-600">from Kangra Airport</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-serif font-medium text-forest-600">483 km</div>
            <div className="text-sm text-stone-600">from Delhi</div>
          </div>
        </div>
        <Button href="/location">
          View Full Location Details
        </Button>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <MeetYourHosts />
      <DifferenceSection />
      <LocationPreview />
    </>
  );
}
