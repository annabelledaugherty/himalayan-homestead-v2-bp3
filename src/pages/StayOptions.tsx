import { useState } from 'react';
import { Check, Users, Clock, Home, X, ChevronLeft, ChevronRight, Bed, Bath, UtensilsCrossed, Mountain, Wifi, Car } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { STAY_OPTIONS } from '../constants';
import { PRIVATE_ROOM_IMAGES } from '../constants/privateRoomImages';
import { TWO_BHK_IMAGES } from '../constants/twoBhkImages';
import { WHOLE_HOME_IMAGES } from '../constants/wholeHomeImages';

const OPTION_IMAGES: Record<string, { src: string; alt: string }[]> = {
  'private-rooms': PRIVATE_ROOM_IMAGES,
  '2bhk': TWO_BHK_IMAGES,
  'entire-homestead': WHOLE_HOME_IMAGES,
};

const OPTION_HIGHLIGHTS: Record<string, { icon: React.ElementType; label: string; value: string }[]> = {
  'private-rooms': [
    { icon: Bed, label: 'Beds', value: 'Queen/Double' },
    { icon: Bath, label: 'Bathroom', value: 'Shared' },
    { icon: Users, label: 'Guests', value: '1-2' },
    { icon: Wifi, label: 'Wi-Fi', value: 'Included' },
  ],
  '2bhk': [
    { icon: Bed, label: 'Bedrooms', value: '2' },
    { icon: Bath, label: 'Bathrooms', value: '2 Attached' },
    { icon: Users, label: 'Guests', value: '2-6' },
    { icon: UtensilsCrossed, label: 'Kitchen', value: 'Private' },
  ],
  'entire-homestead': [
    { icon: Bed, label: 'Bedrooms', value: '5' },
    { icon: Bath, label: 'Bathrooms', value: '4' },
    { icon: Users, label: 'Guests', value: '6-12+' },
    { icon: Car, label: 'Parking', value: '5 Cars' },
  ],
};

const OPTION_DETAILS: Record<string, { title: string; items: string[] }[]> = {
  'private-rooms': [
    {
      title: 'Room Amenities',
      items: ['Comfortable queen or double beds', 'Fresh linens & towels', 'Wardrobe space', 'Natural lighting'],
    },
    {
      title: 'Shared Spaces',
      items: ['Common kitchen access', 'Shared balconies with views', 'Living area access', 'Rooftop terrace'],
    },
  ],
  '2bhk': [
    {
      title: 'Living Spaces',
      items: ['Spacious living room', 'Private dining area', 'Mountain-view veranda', 'Dedicated workspace'],
    },
    {
      title: 'Kitchen & Dining',
      items: ['Fully equipped kitchen', 'Refrigerator & stove', 'Cooking utensils', 'Dining table for 4-6'],
    },
  ],
  'entire-homestead': [
    {
      title: 'Property Features',
      items: ['3 fully equipped kitchens', 'Multiple living areas', 'Rooftop terrace', 'Private verandas'],
    },
    {
      title: 'Exclusive Benefits',
      items: ['Complete privacy', 'Gated property', 'Perfect for celebrations', 'Indoor & outdoor spaces'],
    },
  ],
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-800">
      <div className="section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Accommodation
        </span>
        <h1 className="heading-xl text-white mb-6">
          Choose the Stay That Fits Your Journey
        </h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Himalayan Valley Homestead offers three thoughtfully designed accommodation
          options. All guests enjoy access to shared outdoor spaces, scenic views,
          and a peaceful environment.
        </p>
      </div>
    </section>
  );
}

function ImageGallery({ images, title }: { images: { src: string; alt: string }[]; title: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const displayImages = images.slice(0, 6);
  const remainingCount = images.length - 6;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        <div
          className="col-span-2 row-span-2 aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <img
            src={displayImages[0]?.src}
            alt={displayImages[0]?.alt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {displayImages.slice(1, 4).map((image, idx) => (
          <div
            key={idx}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(idx + 1)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
        {displayImages[4] && (
          <div
            className="aspect-square rounded-lg overflow-hidden cursor-pointer group hidden md:block"
            onClick={() => openLightbox(4)}
          >
            <img
              src={displayImages[4].src}
              alt={displayImages[4].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        {displayImages[5] && (
          <div
            className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative hidden md:block"
            onClick={() => openLightbox(5)}
          >
            <img
              src={displayImages[5].src}
              alt={displayImages[5].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white text-xl font-medium">+{remainingCount} more</span>
              </div>
            )}
          </div>
        )}
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white/80 hover:text-white p-2 transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 text-white/80 hover:text-white p-2 transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-5xl max-h-[85vh] mx-4">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

function StayOptionDetail({
  option,
  index,
}: {
  option: (typeof STAY_OPTIONS)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const images = OPTION_IMAGES[option.id] || [];
  const highlights = OPTION_HIGHLIGHTS[option.id] || [];
  const details = OPTION_DETAILS[option.id] || [];

  return (
    <Section id={option.id} bg={isEven ? 'cream' : 'white'} padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-3 block">
            {option.shortTitle}
          </span>
          <h2 className="heading-lg text-stone-800 mb-4">{option.title}</h2>
          <p className="body-lg text-stone-600 max-w-2xl mx-auto">{option.description}</p>
        </div>

        <div className="mb-10">
          <ImageGallery images={images} title={option.title} />
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-10">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-5 text-center hover:border-forest-300 hover:shadow-sm transition-all"
            >
              <highlight.icon className="w-6 h-6 text-forest-600 mx-auto mb-3" />
              <div className="text-sm text-stone-500 mb-1">{highlight.label}</div>
              <div className="font-semibold text-stone-800">{highlight.value}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8">
            <h3 className="font-serif font-medium text-xl text-stone-800 mb-5">
              What's Included
            </h3>
            <ul className="space-y-3">
              {option.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-forest-600" />
                  </div>
                  <span className="text-stone-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {details.map((section, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6">
                <h4 className="font-medium text-stone-800 mb-4 flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-forest-600" />
                  {section.title}
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-stone-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-forest-50 rounded-xl border border-forest-100">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {option.idealFor.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white text-stone-700 text-sm rounded-full border border-stone-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-stone-600 text-sm">Perfect for your next Himalayan getaway</p>
          </div>
          <Button href={option.ctaLink} size="lg">
            {option.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ComparisonSection() {
  return (
    <Section bg="stone" padding="lg">
      <SectionHeader
        title="Quick Comparison"
        subtitle="Find the perfect stay based on your group size and needs."
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] bg-white rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-forest-600 text-white">
              <th className="px-6 py-4 text-left font-medium">Feature</th>
              <th className="px-6 py-4 text-center font-medium">Private Rooms</th>
              <th className="px-6 py-4 text-center font-medium">2BHK</th>
              <th className="px-6 py-4 text-center font-medium">Entire Home</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-6 py-4 text-stone-700">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-forest-600" />
                  Ideal Group Size
                </div>
              </td>
              <td className="px-6 py-4 text-center text-stone-600">1-2 guests</td>
              <td className="px-6 py-4 text-center text-stone-600">2-6 guests</td>
              <td className="px-6 py-4 text-center text-stone-600">6-12+ guests</td>
            </tr>
            <tr className="bg-cream-50">
              <td className="px-6 py-4 text-stone-700">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-forest-600" />
                  Private Kitchen
                </div>
              </td>
              <td className="px-6 py-4 text-center text-stone-400">Shared access</td>
              <td className="px-6 py-4 text-center text-forest-600">Yes</td>
              <td className="px-6 py-4 text-center text-forest-600">3 kitchens</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-stone-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-forest-600" />
                  Best For
                </div>
              </td>
              <td className="px-6 py-4 text-center text-stone-600">Short stays</td>
              <td className="px-6 py-4 text-center text-stone-600">Week+ stays</td>
              <td className="px-6 py-4 text-center text-stone-600">Group events</td>
            </tr>
            <tr className="bg-cream-50">
              <td className="px-6 py-4 text-stone-700">Privacy Level</td>
              <td className="px-6 py-4 text-center text-stone-600">Room privacy</td>
              <td className="px-6 py-4 text-center text-stone-600">Unit privacy</td>
              <td className="px-6 py-4 text-center text-stone-600">Full exclusivity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">Not Sure Which to Choose?</h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-10">
          Reach out to us with your requirements, and we'll help you find the perfect
          accommodation for your stay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="white" size="lg">
            Get in Touch
          </Button>
          <Button
            href="/booking"
            variant="secondary"
            size="lg"
            className="border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-forest-800"
          >
            View Booking Options
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function StayOptions() {
  return (
    <>
      <HeroSection />
      {STAY_OPTIONS.map((option, index) => (
        <StayOptionDetail key={option.id} option={option} index={index} />
      ))}
      <ComparisonSection />
      <CTASection />
    </>
  );
}
