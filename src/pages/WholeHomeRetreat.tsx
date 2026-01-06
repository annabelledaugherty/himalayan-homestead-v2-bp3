import { useState } from 'react';
import {
  Users,
  Bed,
  Bath,
  UtensilsCrossed,
  Car,
  Wifi,
  Mountain,
  Home,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Star,
  Calendar,
  Zap,
  MapPin,
  TreePine,
  Sun,
  Coffee,
  Flame,
  Laptop,
  Palette
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { WHOLE_HOME_IMAGES } from '../constants/wholeHomeImages';

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = WHOLE_HOME_IMAGES.slice(0, 8);

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
          <span className="inline-block px-4 py-1.5 bg-forest-600 text-white text-sm font-medium rounded-full mb-4">
            Exclusive Property
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
            Whole Home Retreat
          </h1>
          <p className="text-lg md:text-xl text-cream-200 max-w-2xl mb-6">
            Reconnect with nature in this spacious 5-bedroom retreat in Palampur Valley, surrounded by lush greenery and majestic Dhauladhar mountain views
          </p>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span>5 Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>4+1 Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5" />
              <span>3 Kitchens</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Up to 10 Guests</span>
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
    { icon: Bed, label: '5 Bedrooms', description: 'Well-appointed rooms with quality bedding' },
    { icon: Bath, label: '4+1 Bathrooms', description: 'Modern bathrooms + powder room' },
    { icon: UtensilsCrossed, label: '3 Kitchens', description: 'Fully equipped with cookware' },
    { icon: Car, label: 'Free Parking', description: '5 private on-site car parks' },
    { icon: Wifi, label: 'Fast Wi-Fi', description: 'Work-from-mountains ready' },
    { icon: Zap, label: 'Power Backup', description: 'Uninterrupted power supply' },
  ];

  return (
    <Section bg="white" padding="lg">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {highlights.map(({ icon: Icon, label, description }) => (
          <div key={label} className="text-center p-4">
            <div className="w-14 h-14 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon className="w-7 h-7 text-forest-600" />
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
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            About This Property
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-6">
            Your Private Mountain Sanctuary
          </h2>
          <div className="space-y-4 text-stone-600">
            <p>
              Welcome to your perfect getaway nestled in the serene embrace of the Palampur Valley.
              This spacious 5-bedroom home offers the ideal blend of comfort, privacy, and natural
              beauty, making it a haven for families, groups, or remote work retreats seeking peace
              and rejuvenation in the lap of nature.
            </p>
            <p>
              Surrounded by lush greenery and framed by majestic views of the Dhauladhar mountains,
              this gated property offers everything you need for a relaxed and memorable stay. With
              five well-appointed bedrooms and four modern bathrooms (plus a convenient powder room),
              the house comfortably accommodates up to 10 guests.
            </p>
            <p>
              Whether you're cooking up a family feast or simply preparing morning tea, you'll
              appreciate the flexibility of three fully functional kitchens, stocked with basic
              cookware and appliances. A large common living area and cozy nooks around the home
              offer the perfect spots for conversation, reading, or board games.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={WHOLE_HOME_IMAGES[8]?.src || '/hhs-hero-6.jpg'}
            alt="Property exterior"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src={WHOLE_HOME_IMAGES[12]?.src || '/hhs-hero1.jpg'}
            alt="Living space"
            className="rounded-2xl w-full h-48 object-cover mt-8"
          />
          <img
            src={WHOLE_HOME_IMAGES[16]?.src || '/hhs-hero2.jpg'}
            alt="Mountain views"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src={WHOLE_HOME_IMAGES[20]?.src || '/outdoor-view.jpeg'}
            alt="Outdoor area"
            className="rounded-2xl w-full h-48 object-cover mt-8"
          />
        </div>
      </div>
    </Section>
  );
}

function TheSpaceSection() {
  return (
    <Section bg="white" padding="lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            The Space
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
            More Than Just a Stay, It's a Retreat for Your Soul
          </h2>
        </div>
        <div className="prose prose-stone max-w-none">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-cream-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center">
                    <Sun className="w-5 h-5 text-forest-600" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-stone-800">Rooftop Terrace</h3>
                </div>
                <p className="text-stone-600 text-sm">
                  One of the most striking features of this home is the rooftop terrace - an expansive
                  space offering uninterrupted views of the mountains, perfect for sunrise yoga, sunset
                  chai, or stargazing under the clear Himalayan sky.
                </p>
              </div>
              <div className="bg-cream-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-forest-600" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-stone-800">Large Veranda</h3>
                </div>
                <p className="text-stone-600 text-sm">
                  A large veranda welcomes you at the entrance, offering a shaded place to unwind with
                  a cup of coffee or enjoy breakfast outdoors. Step out onto any of the multiple spacious
                  balconies to soak in the fresh mountain air.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-cream-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-forest-600" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-stone-800">Natural Surroundings</h3>
                </div>
                <p className="text-stone-600 text-sm">
                  Nature lovers will feel instantly at home here. The house is surrounded by greenery on
                  all sides and offers a peaceful environment far from the hustle and bustle. The connection
                  to the outdoors is constant and deeply calming.
                </p>
              </div>
              <div className="bg-cream-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center">
                    <Home className="w-5 h-5 text-forest-600" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-stone-800">Thoughtful Layout</h3>
                </div>
                <p className="text-stone-600 text-sm">
                  The layout is thoughtfully designed to offer communal gathering areas as well as private
                  corners when you need a little quiet time. Located just a short drive from Palampur town,
                  you'll have easy access to local cafes, markets, and attractions.
                </p>
              </div>
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
    setLightboxIndex((prev) => (prev + 1) % WHOLE_HOME_IMAGES.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + WHOLE_HOME_IMAGES.length) % WHOLE_HOME_IMAGES.length);
  };

  return (
    <Section bg="white" padding="lg">
      <div className="text-center mb-10">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Property Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Explore Every Corner
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Take a virtual tour through our 5-bedroom homestead and discover the spaces
          that will be exclusively yours.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {WHOLE_HOME_IMAGES.map((image, index) => (
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
              src={WHOLE_HOME_IMAGES[lightboxIndex].src}
              alt={WHOLE_HOME_IMAGES[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70">
            {lightboxIndex + 1} / {WHOLE_HOME_IMAGES.length}
          </div>
        </div>
      )}
    </Section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Spacious Bedrooms',
      items: [
        'Five well-appointed bedrooms',
        'Quality mattresses and bedding',
        'Ample storage space',
        'Natural light and ventilation',
        'Mountain views from select rooms',
      ],
    },
    {
      title: 'Living & Dining',
      items: [
        'Multiple living areas',
        'Large dining spaces',
        'Comfortable seating arrangements',
        'Indoor entertainment options',
        'Reading nooks and quiet corners',
      ],
    },
    {
      title: 'Kitchen Facilities',
      items: [
        'Three fully equipped kitchens',
        'Modern cooking appliances',
        'Refrigerators and storage',
        'Cookware and utensils provided',
        'Dining ware for large groups',
      ],
    },
    {
      title: 'Outdoor Spaces',
      items: [
        'Rooftop terrace with 360° views',
        'Multiple balconies and verandas',
        'Garden seating areas',
        'Private gated compound',
        'Parking for up to 5 vehicles',
      ],
    },
  ];

  return (
    <Section bg="stone" padding="lg">
      <div className="text-center mb-12">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          What's Included
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Everything You Need for a Perfect Stay
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
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-forest-600" />
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

function NearbyAttractionsSection() {
  const attractions = [
    { name: 'Baijnath Temple', distance: '10 km', description: 'Historic 13th-century Shiva temple' },
    { name: 'Tea Gardens', distance: '8 km', description: 'Famous Palampur tea estates' },
    { name: 'Bir Billing', distance: '35 km', description: 'World-famous paragliding destination' },
    { name: 'Dharamshala', distance: '40 km', description: 'Tibetan culture hub' },
    { name: 'McLeod Ganj', distance: '50 km', description: 'Little Lhasa of India' },
    { name: 'Meditation Ashram', distance: '2 km', description: 'Peaceful spiritual retreat' },
    { name: 'Tashi Jong Monastery', distance: '20 km', description: 'Tibetan Buddhist monastery' },
    { name: 'Triund Trek', distance: '55 km', description: 'Popular Himalayan trek starting point' },
  ];

  return (
    <Section bg="white" padding="lg">
      <div className="text-center mb-10">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Explore the Region
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Nearby Attractions
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Located just a short drive from Palampur town, you'll have easy access to local attractions
          while still enjoying the solitude and stillness of valley life.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {attractions.map((attraction) => (
          <div key={attraction.name} className="bg-cream-50 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-forest-600" />
              <span className="text-sm font-medium text-forest-700">{attraction.distance}</span>
            </div>
            <h3 className="font-medium text-stone-800 mb-1">{attraction.name}</h3>
            <p className="text-xs text-stone-500">{attraction.description}</p>
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
      title: 'Families & Groups',
      description: 'Bring the whole family together with plenty of room for everyone to spread out and bond.',
    },
    {
      icon: Laptop,
      title: 'Remote Work',
      description: 'Work-from-anywhere setup with fast Wi-Fi and comfortable spaces to work or relax.',
    },
    {
      icon: Palette,
      title: 'Artist Residencies',
      description: 'Find inspiration in nature for creative workshops and artistic retreats.',
    },
    {
      icon: Star,
      title: 'Special Occasions',
      description: 'Perfect venue for milestone birthdays, anniversaries, and celebrations.',
    },
  ];

  return (
    <Section bg="cream" padding="lg">
      <div className="text-center mb-12">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Perfect For
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Who Is This Stay Ideal For?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {idealFor.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-forest-600" />
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
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-forest-600" />
              </div>
              <h3 className="font-serif font-semibold text-stone-800">Power Backup</h3>
            </div>
            <p className="text-stone-600 text-sm">
              The property has power backup in case of power outage, ensuring uninterrupted comfort during your stay.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-forest-600" />
              </div>
              <h3 className="font-serif font-semibold text-stone-800">Bonfire</h3>
            </div>
            <p className="text-stone-600 text-sm">
              Bonfire available on request for memorable evenings under the Himalayan sky. Additional charges apply (Rs. 500).
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-forest-600" />
              </div>
              <h3 className="font-serif font-semibold text-stone-800">Guest Access</h3>
            </div>
            <p className="text-stone-600 text-sm">
              Property has 2 stairs for access to the 1st floor where the rooms and other amenities are located.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                <Bed className="w-6 h-6 text-forest-600" />
              </div>
              <h3 className="font-serif font-semibold text-stone-800">Extra Mattresses</h3>
            </div>
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
          Ready to Book the Whole Home?
        </h2>
        <p className="text-cream-200 max-w-2xl mx-auto mb-8">
          Contact us for availability, pricing, and to discuss your group's specific needs.
          We're here to help you plan the perfect mountain retreat.
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

export function WholeHomeRetreat() {
  return (
    <>
      <HeroSlider />
      <PropertyHighlights />
      <AboutSection />
      <TheSpaceSection />
      <ImageGallery />
      <FeaturesSection />
      <NearbyAttractionsSection />
      <IdealForSection />
      <AdditionalInfoSection />
      <BookingCTA />
    </>
  );
}
