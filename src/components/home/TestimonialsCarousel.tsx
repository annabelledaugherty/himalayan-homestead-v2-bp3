import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Users, Heart, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { CONTACT } from '../../constants';

const testimonials = [
  {
    name: 'Saurabh',
    badge: 'Family Trip',
    review: 'We had a truly memorable stay at Himalayan Valley Homestead. From the moment we arrived, we felt completely at home. The homestay is calm, serene, and beautifully surrounded by the majestic Dhauladhar ranges.',
    highlight: 'This was more than just a stay—it was a beautiful experience we will cherish.',
  },
  {
    name: 'Monika',
    badge: 'Group of 14',
    review: 'The property is spacious, well-maintained, and perfect for a big group. We had initially planned to stay for just one day, but we loved it so much that we extended it to two days!',
    highlight: 'We loved it so much that we extended our stay.',
  },
  {
    name: 'Manik',
    badge: 'Solo Traveler',
    review: 'The place was exceptionally clean and well-kept. What stood out was the warmth of the uncle and aunty – they were so kind, friendly, and always ready to help. The food was absolutely delicious!',
    highlight: 'It truly felt like a home away from home.',
  },
  {
    name: 'Arushi',
    badge: 'Family',
    review: 'We had a great stay at Lalita\'s place. The hosts were quite welcoming and helpful. The food was fresh and tasty. Lalita ji is very fond of flowers, and oh, we loved them!',
    highlight: 'Such beautiful landscapes and warm hospitality.',
  },
];

const stats = [
  { value: '5.0', label: 'Star Rating', icon: Star },
  { value: '100+', label: 'Happy Guests', icon: Users },
  { value: '40%', label: 'Repeat Visitors', icon: Heart },
  { value: 'Super', label: 'Host Status', icon: Award },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Section bg="stone" padding="lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-stone-800">{value}</div>
              <div className="text-xs md:text-sm text-stone-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Guest Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-800 mb-4">
            What Our Guests Say
          </h2>
        </div>

        <div
          className="relative bg-white rounded-3xl shadow-xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4">
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white fill-white" />
                ))}
              </div>
              <span className="text-white font-medium text-sm">5-Star Reviews on Airbnb</span>
            </div>
          </div>

          <div className="relative p-6 md:p-10 min-h-[300px] md:min-h-[280px]">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-amber-200 opacity-50" />

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-8'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-forest-600 to-forest-700 rounded-full flex items-center justify-center text-white text-xl font-serif font-semibold shadow-lg">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-stone-800">{testimonial.name}</h3>
                      <span className="text-forest-600 text-sm font-medium">{testimonial.badge}</span>
                    </div>
                  </div>

                  <blockquote className="text-xl md:text-2xl font-serif text-forest-700 mb-6 leading-relaxed italic">
                    "{testimonial.highlight}"
                  </blockquote>

                  <p className="text-stone-600 leading-relaxed line-clamp-3">
                    {testimonial.review}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-stone-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-stone-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 pb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-amber-500'
                    : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-forest-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-forest-700 transition-colors group"
          >
            Read All Reviews
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={CONTACT.social.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 font-medium transition-colors"
          >
            View on Airbnb
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
