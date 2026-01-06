import { MapPin, Coffee, Laptop, Star, Heart, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { NEARBY_ATTRACTIONS, SLOW_EXPERIENCES } from '../constants';

const slowExperienceIcons: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-6 h-6" />,
  Laptop: <Laptop className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/palampur-experiences-banner.webp"
          alt="Tea gardens in Palampur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Things to Do
        </span>
        <h1 className="heading-xl text-white mb-6">
          Experiences & Attractions
        </h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          From tea gardens and temple trails to quiet evenings on the rooftop
          terrace, your stay is shaped by the rhythm of the mountains.
        </p>
      </div>
    </section>
  );
}

function NearbyAttractionsSection() {
  return (
    <Section bg="cream" padding="lg">
      <SectionHeader
        title="Nearby Attractions"
        subtitle="Explore the rich cultural and natural heritage of Palampur and the Kangra Valley."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEARBY_ATTRACTIONS.map((attraction) => (
          <div
            key={attraction.name}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-forest-600 mb-2">
                <MapPin className="w-4 h-4" />
                {attraction.distance} away
              </div>
              <h3 className="heading-sm text-stone-800 mb-2">{attraction.name}</h3>
              <p className="text-stone-600">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SlowExperiencesSection() {
  return (
    <Section bg="white" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            At the Homestead
          </span>
          <h2 className="heading-lg text-stone-800 mb-6">Slow Experiences</h2>
          <p className="body-md text-stone-600 mb-8">
            Sometimes the best experiences are the simplest ones. At Himalayan Valley
            Homestead, we encourage slow travel—taking time to breathe, connect, and
            simply be.
          </p>
          <div className="space-y-6">
            {SLOW_EXPERIENCES.map((experience) => (
              <div key={experience.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center text-forest-600 flex-shrink-0">
                  {slowExperienceIcons[experience.icon]}
                </div>
                <div>
                  <h3 className="font-serif font-medium text-lg text-stone-800 mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-stone-600">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Evening view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/morningtea.jpg"
                alt="Morning tea"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/work-from-mountains.png"
                alt="Work from mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DayTripsSection() {
  return (
    <Section bg="sage" padding="lg">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Day Trips
        </span>
        <h2 className="heading-lg text-stone-800 mb-6">Explore Further</h2>
        <p className="body-md text-stone-600 mb-8">
          Use the homestead as your base to explore the wider Kangra Valley and
          surrounding areas.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-serif font-medium text-lg text-stone-800 mb-2">
              Dharamshala & McLeod Ganj
            </h3>
            <p className="text-stone-600 text-sm mb-2">35 km away</p>
            <p className="text-stone-500 text-sm">
              Visit the Dalai Lama Temple, explore cafes, and experience Tibetan
              culture.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-serif font-medium text-lg text-stone-800 mb-2">
              Bir Billing
            </h3>
            <p className="text-stone-600 text-sm mb-2">35 km away</p>
            <p className="text-stone-500 text-sm">
              World-famous paragliding destination and serene Tibetan monasteries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-serif font-medium text-lg text-stone-800 mb-2">
              Kangra Fort
            </h3>
            <p className="text-stone-600 text-sm mb-2">38 km away</p>
            <p className="text-stone-500 text-sm">
              One of India's oldest and largest forts with rich historical
              significance.
            </p>
          </div>
        </div>
        <Button href="/contact">
          Ask Us for Recommendations
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Himalayan mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/60 to-stone-900/40" />
      </div>
      <div className="relative z-10 section-container">
        <div className="max-w-2xl">
          <h2 className="heading-lg text-white mb-6">
            Your Mountain Adventure Awaits
          </h2>
          <p className="body-lg text-cream-200 mb-8">
            Book your stay and discover the magic of Palampur—from tea gardens to
            temple trails, there's something for everyone.
          </p>
          <Button href="/booking" variant="white" size="lg">
            Book Your Stay
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <>
      <HeroSection />
      <NearbyAttractionsSection />
      <SlowExperiencesSection />
      <DayTripsSection />
      <CTASection />
    </>
  );
}
