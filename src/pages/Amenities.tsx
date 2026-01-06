import {
  Wifi,
  Zap,
  Bed,
  Bath,
  UtensilsCrossed,
  Sofa,
  Laptop,
  Mountain,
  Shield,
  Car,
  Music,
  Flame,
  ConciergeBell,
  Check,
  Star,
  Home,
  Sparkles,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { DETAILED_AMENITIES, PROPERTY } from '../constants';
import { Button } from '../components/ui/Button';

const iconMap: Record<string, React.ElementType> = {
  Bed: Bed,
  Bath: Bath,
  UtensilsCrossed: UtensilsCrossed,
  Sofa: Sofa,
  Laptop: Laptop,
  Mountain: Mountain,
  Shield: Shield,
  Car: Car,
  Music: Music,
  Flame: Flame,
  Concierge: ConciergeBell,
};

const AMENITY_IMAGES: Record<string, string> = {
  bedroom: '/room-hhs.avif',
  bathroom: '/2bhk-images/imgi_109_ce0e06fa-0722-4582-b027-f061d55ed0c8.jpg',
  kitchen: '/2bhk-images/imgi_104_a4e35648-00d6-43f8-a46e-e45a63a5d4cb.jpg',
  livingSpaces: '/image-5bhk/imgi_88_a2880a0a-4487-4039-b15b-1e158f096168.jpg',
  workspace: '/work-from-mountains.png',
  outdoors: '/outdoor-view.jpeg',
  safety: '/entrance-road.jpg',
  parking: '/hhs-hero-6.jpg',
  entertainment: '/life-at-homestead.jpg',
  climate: '/hote-essentials.jpg',
  services: '/morningtea.jpg',
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/amenties-banner.jpg"
          alt="Comfortable veranda seating area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Comfort & Convenience
        </span>
        <h1 className="heading-xl text-white mb-6">
          Amenities at the Homestead
        </h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto mb-8">
          Everything you need for a comfortable stay in the mountains, from modern
          essentials to scenic outdoor spaces.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-cream-200">
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5" />
            <span>{PROPERTY.stats.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5" />
            <span>{PROPERTY.stats.bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5" />
            <span>{PROPERTY.stats.kitchens} Kitchens</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5" />
            <span>{PROPERTY.stats.parking} Parking</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickHighlights() {
  const highlights = [
    { icon: Wifi, label: 'High-Speed Wi-Fi', desc: 'Work-ready connectivity' },
    { icon: Zap, label: 'Power Backup', desc: 'Uninterrupted electricity' },
    { icon: Mountain, label: 'Mountain Views', desc: 'Dhauladhar range' },
    { icon: Shield, label: 'Secure Property', desc: 'Gated with caretaker' },
    { icon: Home, label: 'Fully Equipped', desc: '3 kitchens available' },
    { icon: Sparkles, label: 'Daily Housekeeping', desc: 'Clean & maintained' },
  ];

  return (
    <Section bg="white" padding="md">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="text-center p-4 rounded-xl bg-cream-50 border border-cream-100"
          >
            <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 mx-auto mb-3">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-stone-800 text-sm mb-1">{item.label}</h3>
            <p className="text-xs text-stone-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

interface AmenityCategoryCardProps {
  categoryKey: string;
  category: {
    title: string;
    icon: string;
    description: string;
    items: string[];
  };
  index: number;
}

function AmenityCategoryCard({ categoryKey, category, index }: AmenityCategoryCardProps) {
  const Icon = iconMap[category.icon] || Star;
  const image = AMENITY_IMAGES[categoryKey];
  const isReversed = index % 2 === 1;

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? '' : ''}`}>
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
            <Icon className="w-6 h-6" />
          </div>
          <h2 className="heading-md text-stone-800">{category.title}</h2>
        </div>
        <p className="body-md text-stone-600 mb-6">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {category.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 text-stone-600"
            >
              <Check className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AllAmenitiesSection() {
  const categoryEntries = Object.entries(DETAILED_AMENITIES);
  const featuredCategories = categoryEntries.slice(0, 6);

  return (
    <Section bg="cream" padding="lg">
      <SectionHeader
        title="Everything You Need"
        subtitle="Our homestead is designed to provide all the comforts of home while you enjoy the beauty of the Himalayas."
      />
      <div className="space-y-16 lg:space-y-24">
        {featuredCategories.map(([key, category], index) => (
          <AmenityCategoryCard
            key={key}
            categoryKey={key}
            category={category}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

function CompactAmenityCard({ categoryKey, category }: { categoryKey: string; category: { title: string; icon: string; description: string; items: string[] } }) {
  const Icon = iconMap[category.icon] || Star;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-serif font-medium text-lg text-stone-800">{category.title}</h3>
      </div>
      <p className="text-sm text-stone-500 mb-4">{category.description}</p>
      <ul className="space-y-2">
        {category.items.slice(0, 5).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
            <Check className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
        {category.items.length > 5 && (
          <li className="text-xs text-forest-600 font-medium pl-6">
            +{category.items.length - 5} more
          </li>
        )}
      </ul>
    </div>
  );
}

function AdditionalAmenitiesSection() {
  const categoryEntries = Object.entries(DETAILED_AMENITIES);
  const additionalCategories = categoryEntries.slice(6);

  return (
    <Section bg="white" padding="lg">
      <SectionHeader
        title="More Amenities"
        subtitle="Additional facilities and services to make your stay comfortable and memorable."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalCategories.map(([key, category]) => (
          <CompactAmenityCard key={key} categoryKey={key} category={category} />
        ))}
      </div>
    </Section>
  );
}

function PropertyOverview() {
  return (
    <Section bg="sage" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-forest-700 font-medium tracking-wide uppercase text-sm mb-4 block">
            Property Overview
          </span>
          <h2 className="heading-lg text-stone-800 mb-6">
            A Spacious Mountain Home
          </h2>
          <p className="body-md text-stone-600 mb-8">
            Himalayan Valley Homestead is a spacious 5-bedroom vacation rental located in
            Palampur Valley. The property is surrounded by greenery and offers stunning
            views of the Dhauladhar mountain range.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-700 mb-1">5</div>
              <div className="text-sm text-stone-600">Bedrooms</div>
            </div>
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-700 mb-1">4</div>
              <div className="text-sm text-stone-600">Bathrooms</div>
            </div>
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-700 mb-1">3</div>
              <div className="text-sm text-stone-600">Kitchens</div>
            </div>
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-700 mb-1">5</div>
              <div className="text-sm text-stone-600">Car Parking</div>
            </div>
          </div>
          <p className="text-sm text-stone-500">
            Plus powder room, rooftop terrace, multiple balconies, and verandas.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src="/hhs-hero1.jpg"
                alt="Homestead exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img
                src="/hhs-hero-5.jpg"
                alt="Mountain views"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/image-5bhk/imgi_111_af671f23-78a6-4cdd-9e06-8326f653715f.jpg"
                alt="Terrace view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhatToExpect() {
  const expectations = [
    {
      title: 'Self-Catering Stay',
      description: 'Fully equipped kitchens with all utensils, gas stove, refrigerator, and microwave. Groceries available at local shops (2 km).',
    },
    {
      title: 'Remote Work Ready',
      description: 'High-speed Wi-Fi, dedicated work spaces, power backup, and quiet environment perfect for work-from-mountains.',
    },
    {
      title: 'Family Friendly',
      description: 'Spacious rooms, child-safe environment, board games, and large common areas for family time.',
    },
    {
      title: 'Nature Immersive',
      description: 'Wake up to mountain views, fresh air, bird songs, and the peaceful ambiance of the Himalayan foothills.',
    },
  ];

  return (
    <Section bg="cream" padding="lg">
      <SectionHeader
        title="What to Expect"
        subtitle="A few things to help you plan your stay at the homestead."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {expectations.map((item) => (
          <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-serif font-medium text-lg text-stone-800 mb-2">
              {item.title}
            </h3>
            <p className="text-stone-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">
          Ready to Experience Mountain Living?
        </h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-10">
          Book your stay and enjoy all the comforts and amenities our homestead has
          to offer. Choose from private rooms, 2BHK, or the entire property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/booking" variant="white" size="lg">
            Book Your Stay
          </Button>
          <Button href="/stay-options" variant="secondary" size="lg" className="border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-forest-800">
            View Stay Options
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function Amenities() {
  return (
    <>
      <HeroSection />
      <QuickHighlights />
      <AllAmenitiesSection />
      <PropertyOverview />
      <AdditionalAmenitiesSection />
      <WhatToExpect />
      <CTASection />
    </>
  );
}
