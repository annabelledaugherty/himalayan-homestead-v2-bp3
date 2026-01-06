import { useState } from 'react';
import {
  Users,
  Bed,
  Bath,
  Wifi,
  Mountain,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Coffee,
  Utensils,
  Clock,
  Sparkles,
  Star,
  Sun,
  Heart,
  TreePine
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PRIVATE_ROOM_IMAGES } from '../constants/privateRoomImages';

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = PRIVATE_ROOM_IMAGES.slice(0, 5);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[700px]">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-amber-600 text-white text-sm font-medium rounded-full mb-4">
            Budget-Friendly
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
            Private Rooms
          </h1>
          <p className="text-lg md:text-xl text-cream-200 max-w-2xl mb-6">
            Where warmth meets the wilderness - a tranquil mountain retreat that blends modern comfort with timeless charm
          </p>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span>Private Room</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>Shared Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5" />
              <span>Common Kitchen</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>1-2 Guests</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function PropertyHighlights() {
  const highlights = [
    { icon: Bed, label: 'Comfortable Bed', description: 'Quality mattress' },
    { icon: Bath, label: 'Clean Bathroom', description: 'Shared facilities' },
    { icon: Utensils, label: 'Common Kitchen', description: 'Self-catering option' },
    { icon: Wifi, label: 'Free Wi-Fi', description: 'Stay connected' },
    { icon: Mountain, label: 'Valley Views', description: 'Scenic surroundings' },
    { icon: Coffee, label: 'Tea/Coffee', description: 'Complimentary' },
  ];

  return (
    <Section bg="white" padding="lg">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {highlights.map(({ icon: Icon, label, description }) => (
          <div key={label} className="text-center p-4">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="font-medium text-stone-800 mb-1">{label}</h3>
            <p className="text-sm text-stone-500">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section bg="cream" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Where Warmth Meets the Wilderness
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-6">
            A True Home Away From Home
          </h2>
          <div className="space-y-4 text-stone-600">
            <p>
              Tucked away in the serene folds of the Himalayas, Himalayan Valley Homestead
              is a tranquil mountain retreat that blends modern comfort with timeless charm.
              This elegant multi-level homestead offers a sense of calm and belonging for
              travelers seeking peace, beauty, and connection.
            </p>
            <p>
              Each room is tastefully designed to offer comfort and warmth, featuring large
              windows that open to breathtaking valley and mountain views. The spacious
              balconies and terraces invite you to sip your morning tea amidst cool mountain
              breezes or watch the sun dip behind the ridges in hues of gold and violet.
            </p>
            <p>
              By day, explore nearby villages, orchards, and forest trails; by night, unwind
              beneath a blanket of stars as soft music and laughter fill the air. Whether
              you're here for a family getaway, a romantic escape, or simply to slow down,
              the homestead's serene ambiance and heartfelt hospitality will make every
              moment special.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={PRIVATE_ROOM_IMAGES[5]?.src || '/room-hhs.avif'}
            alt="Private room interior"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src={PRIVATE_ROOM_IMAGES[7]?.src || '/room-hhs.avif'}
            alt="Room details"
            className="rounded-2xl w-full h-48 object-cover mt-8"
          />
          <img
            src={PRIVATE_ROOM_IMAGES[9]?.src || '/room-hhs.avif'}
            alt="Common area"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src={PRIVATE_ROOM_IMAGES[11]?.src || '/room-hhs.avif'}
            alt="Mountain view"
            className="rounded-2xl w-full h-48 object-cover mt-8"
          />
        </div>
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section bg="white" padding="lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            The Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
            Where Light Meets Silence
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            A place where mountains meet the soul - experience the true essence of Himalayan living.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Sun className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-stone-800">Breathtaking Views</h3>
              </div>
              <p className="text-stone-600 text-sm">
                Large windows open to valley and mountain panoramas. Watch golden sunrises
                and violet sunsets paint the Dhauladhar range.
              </p>
            </div>
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-stone-800">Explore the Outdoors</h3>
              </div>
              <p className="text-stone-600 text-sm">
                Discover nearby villages, wander through orchards, and trek forest trails
                that wind through the Himalayan landscape.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-stone-800">Starlit Evenings</h3>
              </div>
              <p className="text-stone-600 text-sm">
                Unwind beneath a blanket of stars as soft music and laughter fill the air.
                The clear mountain skies offer spectacular stargazing opportunities.
              </p>
            </div>
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-stone-800">Heartfelt Hospitality</h3>
              </div>
              <p className="text-stone-600 text-sm">
                Whether here for a family getaway, romantic escape, or simply to slow down,
                our warm hospitality makes every moment special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % PRIVATE_ROOM_IMAGES.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + PRIVATE_ROOM_IMAGES.length) % PRIVATE_ROOM_IMAGES.length);
  };

  return (
    <Section bg="white" padding="lg">
      <div className="text-center mb-10">
        <span className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Photo Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          See Our Rooms
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Browse through our private rooms and shared spaces to get a feel for your stay.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PRIVATE_ROOM_IMAGES.map((image, index) => (
          <button
            key={image.src}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={PRIVATE_ROOM_IMAGES[lightboxIndex].src}
              alt={PRIVATE_ROOM_IMAGES[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70">
            {lightboxIndex + 1} / {PRIVATE_ROOM_IMAGES.length}
          </div>
        </div>
      )}
    </Section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Your Room',
      items: [
        'Private, lockable room',
        'Comfortable double or twin bed',
        'Quality mattress and bedding',
        'Storage space',
        'Natural light',
      ],
    },
    {
      title: 'Shared Spaces',
      items: [
        'Clean shared bathrooms',
        'Hot water available',
        'Common kitchen access',
        'Shared living/dining area',
        'Outdoor seating',
      ],
    },
    {
      title: 'Essentials',
      items: [
        'Fresh towels and linens',
        'Complimentary tea/coffee',
        'Free Wi-Fi',
        'Power backup',
        'Daily housekeeping',
      ],
    },
    {
      title: 'Experience',
      items: [
        'Mountain views',
        'Peaceful environment',
        'Meet fellow travelers',
        'Local tips from hosts',
        'Access to garden areas',
      ],
    },
  ];

  return (
    <Section bg="stone" padding="lg">
      <div className="text-center mb-12">
        <span className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          What's Included
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Everything You Need
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif font-semibold text-lg text-stone-800 mb-4 pb-4 border-b border-stone-100">
              {feature.title}
            </h3>
            <ul className="space-y-3">
              {feature.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-stone-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function IdealForSection() {
  const idealFor = [
    {
      icon: Users,
      title: 'Solo Travelers',
      description: 'A safe, comfortable base to explore Palampur and meet other travelers.',
    },
    {
      icon: Clock,
      title: 'Short Stays',
      description: 'Perfect for a weekend getaway or a few nights in the mountains.',
    },
    {
      icon: Sparkles,
      title: 'Budget Travelers',
      description: 'All the essentials at an affordable price without compromising on experience.',
    },
    {
      icon: Coffee,
      title: 'Couples',
      description: 'A cozy retreat for two, with privacy and shared community spaces.',
    },
  ];

  return (
    <Section bg="cream" padding="lg">
      <div className="text-center mb-12">
        <span className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Perfect For
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Who Is This Stay Ideal For?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {idealFor.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-stone-800 mb-2">{title}</h3>
            <p className="text-stone-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AdditionalInfoSection() {
  return (
    <Section bg="stone" padding="md">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Bed className="w-7 h-7 text-amber-600" />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg text-stone-800 mb-1">Extra Mattresses Available</h3>
            <p className="text-stone-600 text-sm">
              Need additional sleeping arrangements? Extra mattresses are available at Rs. 500 per mattress per night.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function BookingCTA() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
          Ready to Book a Private Room?
        </h2>
        <p className="text-cream-200 max-w-2xl mx-auto mb-8">
          Experience Himalayan hospitality without breaking the bank. Book your
          private room today and start your mountain adventure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/booking" variant="white" size="lg">
            Check Availability
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-forest-800"
          >
            Contact Us
          </Button>
        </div>
        <p className="text-cream-300 text-sm mt-6">
          Also available on Airbnb and other booking platforms
        </p>
      </div>
    </Section>
  );
}

export function PrivateRooms() {
  return (
    <>
      <HeroSlider />
      <PropertyHighlights />
      <AboutSection />
      <ExperienceSection />
      <ImageGallery />
      <FeaturesSection />
      <IdealForSection />
      <AdditionalInfoSection />
      <BookingCTA />
    </>
  );
}
