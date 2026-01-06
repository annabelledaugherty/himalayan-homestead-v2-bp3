import { useState } from 'react';
import {
  Users,
  Bed,
  Bath,
  UtensilsCrossed,
  Wifi,
  Mountain,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Laptop,
  Calendar,
  Heart,
  Zap,
  Car,
  Sun,
  TreePine,
  Home
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { TWO_BHK_IMAGES } from '../constants/twoBhkImages';

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = TWO_BHK_IMAGES.slice(0, 6);

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
            Private Unit
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
            2BHK Himalayan Homestay
          </h1>
          <p className="text-lg md:text-xl text-cream-200 max-w-2xl mb-6">
            Escape to nature in this spacious home in Palampur Valley, surrounded by greenery and majestic mountain views
          </p>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span>2 Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>2 Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5" />
              <span>Private Kitchen</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Up to 6 Guests</span>
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
    { icon: Bed, label: '2 Bedrooms', description: 'Comfortable queen beds' },
    { icon: Bath, label: '2 Bathrooms', description: 'Attached to each room' },
    { icon: UtensilsCrossed, label: 'Private Kitchen', description: 'Fully equipped' },
    { icon: Car, label: 'Free Parking', description: 'On-site car parks' },
    { icon: Wifi, label: 'High-Speed Wi-Fi', description: 'Work-ready connectivity' },
    { icon: Zap, label: 'Power Backup', description: 'Uninterrupted power' },
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
            About This Unit
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-6">
            Your Home in the Himalayas
          </h2>
          <div className="space-y-4 text-stone-600">
            <p>
              Escape to nature in this spacious home nestled in the serene Palampur Valley.
              Surrounded by lush greenery and framed by majestic mountain views, this gated
              property offers the perfect blend of peace, privacy, and comfort for families,
              groups, or retreats seeking serenity in the Himalayas.
            </p>
            <p>
              The unit features 2 well-appointed bedrooms with 2 attached bathrooms, a fully
              equipped kitchen, and a comfortable common living area. Enjoy the fresh mountain
              air from the big veranda, or head up to the rooftop terrace for stunning panoramic
              views of the Dhauladhar range.
            </p>
            <p>
              With shared spacious balconies, free on-site car parking, and power backup for
              uninterrupted comfort, this is the ideal base for your Himalayan adventure or
              peaceful work-from-mountains retreat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={TWO_BHK_IMAGES[6]?.src || '/hhs-2bhk.jpeg'}
            alt="2BHK interior"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src={TWO_BHK_IMAGES[8]?.src || '/hhs-2bhk.jpeg'}
            alt="2BHK bedroom"
            className="rounded-2xl w-full h-48 object-cover mt-8"
          />
          <img
            src={TWO_BHK_IMAGES[10]?.src || '/hhs-2bhk.jpeg'}
            alt="2BHK living area"
            className="rounded-2xl w-full h-48 object-cover"
          />
          <img
            src={TWO_BHK_IMAGES[12]?.src || '/hhs-2bhk.jpeg'}
            alt="2BHK veranda"
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
            Comfort Meets Nature
          </h2>
        </div>
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
                Enjoy mountain views from the rooftop terrace, perfect for sunrise yoga,
                evening chai, or simply soaking in the beauty of the Dhauladhar range.
              </p>
            </div>
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-forest-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-stone-800">Big Veranda</h3>
              </div>
              <p className="text-stone-600 text-sm">
                A spacious veranda provides the perfect spot for morning coffee, outdoor
                meals, or relaxing while surrounded by natural beauty.
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
                The property is surrounded by lush greenery on all sides, offering a
                peaceful environment far from the hustle and bustle of city life.
              </p>
            </div>
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-forest-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-stone-800">Shared Balconies</h3>
              </div>
              <p className="text-stone-600 text-sm">
                Access to spacious shared balconies lets you soak in the fresh mountain
                air and enjoy different vantage points of the stunning valley views.
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
    setLightboxIndex((prev) => (prev + 1) % TWO_BHK_IMAGES.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + TWO_BHK_IMAGES.length) % TWO_BHK_IMAGES.length);
  };

  return (
    <Section bg="white" padding="lg">
      <div className="text-center mb-10">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Photo Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Take a Tour
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Explore our 2BHK unit and imagine yourself relaxing in your private Himalayan retreat.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TWO_BHK_IMAGES.map((image, index) => (
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
              src={TWO_BHK_IMAGES[lightboxIndex].src}
              alt={TWO_BHK_IMAGES[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70">
            {lightboxIndex + 1} / {TWO_BHK_IMAGES.length}
          </div>
        </div>
      )}
    </Section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Bedrooms',
      items: [
        'Two spacious bedrooms',
        'Queen-size beds',
        'Quality mattresses and bedding',
        'Ample wardrobe space',
        'Natural light and ventilation',
      ],
    },
    {
      title: 'Bathrooms',
      items: [
        'Two attached bathrooms',
        'Hot water (geyser)',
        'Clean towels provided',
        'Basic toiletries',
        'Western-style fixtures',
      ],
    },
    {
      title: 'Kitchen & Living',
      items: [
        'Fully equipped kitchen',
        'Refrigerator',
        'Gas stove and cookware',
        'Dining area',
        'Comfortable living space',
      ],
    },
    {
      title: 'Work & Leisure',
      items: [
        'Dedicated workspace',
        'High-speed Wi-Fi',
        'Private veranda',
        'Mountain views',
        'Access to shared outdoor areas',
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
          Everything for a Comfortable Stay
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

function IdealForSection() {
  const idealFor = [
    {
      icon: Users,
      title: 'Families',
      description: 'Plenty of space for parents and kids with the privacy of your own unit.',
    },
    {
      icon: Laptop,
      title: 'Remote Workers',
      description: 'Dedicated workspace and reliable Wi-Fi for productive work-from-hills stays.',
    },
    {
      icon: Calendar,
      title: 'Extended Stays',
      description: 'Perfect for week-long or month-long getaways with full kitchen facilities.',
    },
    {
      icon: Heart,
      title: 'Couples',
      description: 'A romantic mountain escape with stunning views and complete privacy.',
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
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-white rounded-2xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-7 h-7 text-forest-600" />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg text-stone-800 mb-1">Power Backup Available</h3>
            <p className="text-stone-600 text-sm">
              The property has power backup in case of power outage, ensuring uninterrupted comfort during your stay in the mountains.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Bed className="w-7 h-7 text-forest-600" />
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
          Ready to Book the 2BHK?
        </h2>
        <p className="text-cream-200 max-w-2xl mx-auto mb-8">
          Book your private Himalayan retreat today. Perfect for families, remote workers,
          or anyone seeking a peaceful mountain escape.
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

export function TwoBhkHomestay() {
  return (
    <>
      <HeroSlider />
      <PropertyHighlights />
      <AboutSection />
      <TheSpaceSection />
      <ImageGallery />
      <FeaturesSection />
      <IdealForSection />
      <AdditionalInfoSection />
      <BookingCTA />
    </>
  );
}
