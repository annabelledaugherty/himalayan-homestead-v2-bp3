import { useState } from 'react';
import { Star, Quote, ExternalLink, MapPin, Calendar, Users, Heart, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const AIRBNB_REVIEWS = [
  {
    name: 'Saurabh',
    badge: 'New to Airbnb',
    date: '5 days ago',
    rating: 5,
    review: `We had a truly memorable stay at Himalayan Homevalley Homestead, Palampur. We were two families (8 members) and had booked four rooms. From the moment we arrived, we felt completely at home.

The homestay is calm, serene, and beautifully surrounded by the majestic Dhauladhar ranges. The peaceful environment and natural beauty made our stay very relaxing.

The food was excellent—very tasty, freshly prepared, and hygienic. Every meal added warmth to our experience.

Lalita Ranaji and her husband Raj ji are extremely warm, caring, and hospitable hosts. Their personal attention and genuine kindness made us feel like part of the family. The place is filled with positive vibes.

This was more than just a stay—it was a beautiful experience we will cherish. We would love to visit again and highly recommend this homestay to anyone seeking comfort, peace, and heartfelt hospitality in nature.`,
    highlight: 'This was more than just a stay—it was a beautiful experience we will cherish.',
  },
  {
    name: 'Amritpal',
    badge: '3 years on Airbnb',
    date: 'June 2025',
    rating: 5,
    review: `I had the pleasure of staying at this lovely homestay, and it was truly a memorable experience! From the moment I arrived, I felt at home. The place is clean, peaceful, and thoughtfully designed to give you both comfort and privacy.

The rooms were spacious and well-maintained, with all the necessary amenities. The surroundings are calm and scenic—perfect for relaxing, whether you're traveling solo, with family, or friends.

The host was extremely kind and welcoming, always available for any help or guidance. They also shared great tips about nearby attractions and local food spots, which made our trip even more enjoyable.

If you're looking for a stay that combines warmth, comfort, and local charm, I highly recommend this homestay. I'll definitely be coming back!`,
    highlight: 'From the moment I arrived, I felt at home.',
  },
  {
    name: 'Monika',
    badge: '1 year on Airbnb',
    date: 'June 2025',
    rating: 5,
    review: `Had an amazing stay at this beautiful property in Palampur with my family! The hosts Lalita Ma'am and Raj Sir were extremely warm, welcoming, and helpful throughout our time there. The property is spacious, well-maintained, and perfect for a big group — it easily accommodated our family of 14 people.

The rooms were large and comfortable, and the kitchen was fully equipped, which made everything super convenient. We had initially planned to stay for just one day, but we loved it so much that we extended it to two days.

One of the highlights was the delicious, fresh home-cooked food — especially the pudina chutney, which was absolutely amazing!

The hosts also gave us some great recommendations for local sightseeing, which really added to the experience.

Highly recommend this place if you're planning a trip to Palampur with family or a group!`,
    highlight: 'We loved it so much that we extended our stay.',
    hostResponse: 'Thanks Monika for your support and kind words',
  },
  {
    name: 'Ayush',
    badge: '2 years on Airbnb',
    date: 'June 2025',
    rating: 5,
    review: `We had an amazing stay, they were so so sweet in guiding us how can we utilise our time, guided us on all the amazing nearby viewpoints.

Helped us through everything including parking, providing additional necessities, made us feel super comfortable.

We were a family of 6 and the property can easily accommodate 10-12 paxs. Amazing views from rooftop and balcony.`,
    highlight: 'Amazing views from rooftop and balcony.',
  },
  {
    name: 'Manik',
    badge: '4 years on Airbnb',
    date: 'May 2025',
    rating: 5,
    review: `I had an amazing stay here! The place was exceptionally clean and well-kept, which made it really comfortable and relaxing. What stood out even more was the warmth and hospitality of the uncle and aunty – they were so kind, friendly, and always ready to help. It truly felt like a home away from home.

The food was another highlight – absolutely delicious, homemade, and full of flavor. Every meal felt like it was made with love. I would definitely recommend this stay to anyone looking for a clean, cozy, and heartwarming experience.`,
    highlight: 'It truly felt like a home away from home.',
  },
  {
    name: 'Gourav',
    badge: '2 years on Airbnb',
    date: 'May 2025',
    rating: 5,
    review: 'Treated like parents',
    highlight: 'Treated like parents',
    isShort: true,
  },
  {
    name: 'Arushi',
    badge: '7 years on Airbnb',
    date: 'October 2025',
    rating: 5,
    review: `We had a great stay at Lalita's place. She was very responsive to our needs and kept checking in on us for our arrival. The hosts were quite welcoming and helpful. They made sure we and our parents were comfortable throughout the stay.

The food was fresh and tasty. The property was clean with all the amenities. Lalita ji is very fond of flowers, and oh, we loved them! Such beautiful landscapes.

Recommend this stay to individuals and families.`,
    highlight: 'Lalita ji is very fond of flowers, and oh, we loved them!',
  },
];

const GOOGLE_REVIEWS = [
  {
    name: 'Saurabh Jain',
    date: '4 days ago',
    rating: 5,
    tripType: 'Holiday | Family',
    scores: { rooms: 5.0, service: 5.0, location: 5.0 },
    review: `We had a truly memorable stay at Himalayan Homevalley Homestead, Palampur. We were two families (8 members) and had booked four rooms. From the moment we arrived, we felt completely at home.

The homestay is calm, serene, and beautifully surrounded by the majestic Dhauladhar ranges. The peaceful environment and natural beauty made our stay very relaxing.

The food was excellent—very tasty, freshly prepared, and hygienic. Every meal added warmth to our experience.

Lalita Ranaji and her husband Raj ji are extremely warm, caring, and hospitable hosts. Their personal attention and genuine kindness made us feel like part of the family. The place is filled with positive vibes.

This was more than just a stay—it was a beautiful experience we will cherish. We would love to visit again and highly recommend this homestay to anyone seeking comfort, peace, and heartfelt hospitality in nature.`,
  },
];

const GUEST_EXPERIENCES = [
  {
    id: 1,
    image: '/hhs-hero1.jpg',
    caption: 'Family gathering at the homestead',
    guest: 'The Sharma Family',
  },
  {
    id: 2,
    image: '/hhs-hero2.jpg',
    caption: 'Morning views from the balcony',
    guest: 'Priya & Rahul',
  },
  {
    id: 3,
    image: '/entrance-road.jpg',
    caption: 'Scenic arrival at the property',
    guest: 'Weekend Travelers',
  },
  {
    id: 4,
    image: '/morningtea.jpg',
    caption: 'Morning tea with mountain views',
    guest: 'Solo Traveler',
  },
  {
    id: 5,
    image: '/outdoor-view.jpeg',
    caption: 'Relaxing in nature',
    guest: 'The Jain Family',
  },
  {
    id: 6,
    image: '/hhs-hero-5.jpg',
    caption: 'Sunset at the homestead',
    guest: 'Couple Retreat',
  },
  {
    id: 7,
    image: '/hhs-hero-6.jpg',
    caption: 'Evening ambiance',
    guest: 'Family Celebration',
  },
  {
    id: 8,
    image: '/life-at-homestead.jpg',
    caption: 'Life at the homestead',
    guest: 'Long-stay Guests',
  },
];

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cream-300 rounded-full blur-3xl" />
      </div>
      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-cream-200 text-sm font-medium">5.0 Rating</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
            Guest Stories & Reviews
          </h1>
          <p className="text-lg md:text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Real experiences from travelers who found their home away from home at Himalayan Valley Homestead
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-cream-200">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>100+ Happy Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Superhost Status</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Palampur, Himachal Pradesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedTestimonial() {
  const featured = AIRBNB_REVIEWS[0];

  return (
    <Section bg="cream" padding="lg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-amber-100 text-sm font-medium uppercase tracking-wide">Featured Review</span>
                <h2 className="text-2xl font-serif font-semibold mt-1">A Beautiful Experience</h2>
              </div>
              <Quote className="w-12 h-12 text-amber-300/50" />
            </div>
          </div>
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-600 to-forest-700 rounded-full flex items-center justify-center text-white text-2xl font-serif font-semibold">
                {featured.name[0]}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-stone-800">{featured.name}</h3>
                <p className="text-stone-500 text-sm">{featured.badge}</p>
                <StarRating rating={featured.rating} size="md" />
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl font-serif text-stone-700 leading-relaxed mb-6 italic">
              "{featured.highlight}"
            </blockquote>
            <p className="text-stone-600 leading-relaxed whitespace-pre-line">
              {featured.review}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AirbnbReviews() {
  return (
    <Section bg="white" padding="lg">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full mb-4">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 18.35c-.667 0-1.333-.2-1.917-.6-1.317-.9-3.917-3.15-5.85-5.85-1.2-1.65-1.817-3.2-1.85-4.617C2.351 4.933 4.2 2.85 6.518 2.85c1.35 0 2.617.617 3.483 1.667.267.333.5.7.683 1.083.183-.383.417-.75.683-1.083.867-1.05 2.133-1.667 3.483-1.667 2.317 0 4.167 2.083 4.133 4.433-.033 1.417-.65 2.967-1.85 4.617-1.933 2.7-4.533 4.95-5.85 5.85-.583.4-1.25.6-1.917.6h-.033z"/>
          </svg>
          <span className="font-medium">Airbnb Reviews</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          What Our Guests Say
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Read authentic reviews from guests who have experienced the warmth and hospitality of Himalayan Valley Homestead
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AIRBNB_REVIEWS.slice(1).map((review, index) => (
          <div
            key={index}
            className={`bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 ${
              review.isShort ? 'flex flex-col justify-center items-center text-center' : ''
            }`}
          >
            <div className={`flex items-center gap-3 mb-4 ${review.isShort ? 'justify-center' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-serif font-semibold">
                {review.name[0]}
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">{review.name}</h3>
                <p className="text-stone-500 text-xs">{review.badge}</p>
              </div>
            </div>
            <div className={`flex items-center gap-2 mb-3 ${review.isShort ? 'justify-center' : ''}`}>
              <StarRating rating={review.rating} />
              <span className="text-stone-400 text-sm">{review.date}</span>
            </div>
            {review.isShort ? (
              <p className="text-2xl font-serif text-stone-700 italic mt-4">"{review.review}"</p>
            ) : (
              <>
                <p className="text-stone-600 text-sm leading-relaxed line-clamp-6 mb-3">
                  {review.review}
                </p>
                {review.highlight && (
                  <p className="text-amber-700 font-medium text-sm italic border-l-2 border-amber-400 pl-3">
                    "{review.highlight}"
                  </p>
                )}
                {review.hostResponse && (
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <p className="text-xs text-stone-500 mb-1">Response from Lalita:</p>
                    <p className="text-sm text-stone-600 italic">"{review.hostResponse}"</p>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://www.airbnb.co.in/rooms/1398901259393587165?source_impression_id=p3_1767600233_P3P_45ORqIt6Cw3z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-3 rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl"
        >
          View All Reviews on Airbnb
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}

function GoogleReviews() {
  const review = GOOGLE_REVIEWS[0];

  return (
    <Section bg="stone" padding="lg">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white text-stone-700 px-4 py-2 rounded-full mb-4 shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="font-medium">Google Reviews</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Verified Google Review
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                  {review.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stone-800">{review.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-stone-500">
                    <Calendar className="w-4 h-4" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <StarRating rating={review.rating} size="md" />
                <span className="text-sm text-stone-500 mt-1 block">{review.tripType}</span>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed whitespace-pre-line mb-6">
              {review.review}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              {Object.entries(review.scores).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-forest-600">{value}</div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=Himalayan+Valley+Homestead+Palampur+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-stone-700 px-6 py-3 rounded-full font-medium hover:bg-stone-50 transition-all shadow-md hover:shadow-lg border border-stone-200"
          >
            View More on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}

function TestimonialStats() {
  const stats = [
    { label: 'Overall Rating', value: '5.0', icon: Star },
    { label: 'Happy Guests', value: '100+', icon: Users },
    { label: 'Repeat Visitors', value: '40%', icon: Heart },
    { label: 'Would Recommend', value: '100%', icon: Quote },
  ];

  return (
    <Section bg="cream" padding="md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon className="w-7 h-7 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-stone-800 mb-1">{value}</div>
            <div className="text-sm text-stone-500">{label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function GuestExperiences() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? GUEST_EXPERIENCES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === GUEST_EXPERIENCES.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section bg="white" padding="lg">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 px-4 py-2 rounded-full mb-4">
          <Camera className="w-5 h-5" />
          <span className="font-medium">Guest Moments</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
          Memories Made at the Homestead
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Browse through cherished moments captured by our guests during their stay at Himalayan Valley Homestead
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GUEST_EXPERIENCES.map((experience, index) => (
          <div
            key={experience.id}
            className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={experience.image}
              alt={experience.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium mb-1">{experience.caption}</p>
              <p className="text-cream-300 text-xs">{experience.guest}</p>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Camera className="w-4 h-4 text-stone-700" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-stone-500 text-sm">
          Share your experience with us on{' '}
          <a
            href="https://www.instagram.com/himalayanvalleyhomestead/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-600 hover:text-forest-700 font-medium"
          >
            @himalayanvalleyhomestead
          </a>
        </p>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-900/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GUEST_EXPERIENCES[currentIndex].image}
              alt={GUEST_EXPERIENCES[currentIndex].caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {GUEST_EXPERIENCES[currentIndex].caption}
              </p>
              <p className="text-cream-300 text-sm mt-1">
                {GUEST_EXPERIENCES[currentIndex].guest}
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {GUEST_EXPERIENCES.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

function CallToAction() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
          Ready to Create Your Own Story?
        </h2>
        <p className="text-cream-200 max-w-2xl mx-auto mb-8">
          Join the many families and travelers who have found their perfect Himalayan retreat at our homestead.
          Book your stay and experience the warmth and hospitality that our guests love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/booking" variant="white" size="lg">
            Book Your Stay
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
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <>
      <HeroSection />
      <TestimonialStats />
      <FeaturedTestimonial />
      <AirbnbReviews />
      <GuestExperiences />
      <GoogleReviews />
      <CallToAction />
    </>
  );
}
