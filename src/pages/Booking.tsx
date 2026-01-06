import { ExternalLink, MessageCircle, Phone, Mail, Check } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { CONTACT, STAY_OPTIONS } from '../constants';

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Himalayan Valley Homestead"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Reserve Your Stay
        </span>
        <h1 className="heading-xl text-white mb-6">Book Your Stay</h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Choose your preferred way to book—directly with us for the best rates and
          flexibility, or through trusted booking platforms.
        </p>
      </div>
    </section>
  );
}

function BookingOptionsSection() {
  return (
    <Section bg="cream" padding="lg">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <div className="w-14 h-14 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 mb-6">
            <MessageCircle className="w-7 h-7" />
          </div>
          <h2 className="heading-md text-stone-800 mb-4">Direct Enquiries</h2>
          <p className="text-stone-600 mb-6">
            For the most flexibility and personalized service, contact us directly.
            Best for whole-home bookings, long stays, and group requirements.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700">Best available rates</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700">Flexible booking terms</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700">Custom stay packages</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700">Direct communication with hosts</span>
            </div>
          </div>
          <Button href="/contact" className="w-full">
            Enquire Now
          </Button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <div className="w-14 h-14 rounded-full bg-cream-200 flex items-center justify-center text-stone-600 mb-6">
            <ExternalLink className="w-7 h-7" />
          </div>
          <h2 className="heading-md text-stone-800 mb-4">Online Platforms</h2>
          <p className="text-stone-600 mb-6">
            Prefer to book through your favorite travel platform? We're listed on
            these trusted booking sites for your convenience.
          </p>
          <div className="space-y-4 mb-8">
            <a
              href={CONTACT.social.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-cream-50 rounded-xl hover:bg-cream-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 18.275c-1.353-1.697-2.148-3.213-2.148-4.548 0-1.463.913-2.339 2.148-2.339s2.148.876 2.148 2.339c0 1.335-.795 2.851-2.148 4.548zm9.589-4.936c-.498-2.018-1.774-3.688-3.521-4.685a7.27 7.27 0 00-3.625-.963c-1.633 0-3.103.503-4.444 1.334-1.341-.831-2.811-1.334-4.444-1.334-1.269 0-2.497.329-3.625.963-1.747.997-3.023 2.667-3.521 4.685-.498 2.018-.246 4.132.707 5.95.855 1.636 2.199 2.928 3.808 3.648.394.176.853-.066.951-.488.098-.421-.163-.838-.574-1.013-1.263-.566-2.316-1.577-2.986-2.862-.752-1.436-.952-3.107-.563-4.696.389-1.589 1.397-2.912 2.777-3.699a5.723 5.723 0 012.863-.761c1.187 0 2.32.363 3.285 1.028-.567.567-1.052 1.216-1.443 1.937a5.987 5.987 0 00-.68 2.751c0 2.07 1.133 4.184 2.922 6.35.241.291.595.458.965.458s.724-.167.965-.458c1.789-2.166 2.922-4.28 2.922-6.35a5.987 5.987 0 00-.68-2.751c-.391-.721-.876-1.37-1.443-1.937a5.48 5.48 0 013.285-1.028c1.011 0 1.977.262 2.863.761 1.38.787 2.388 2.11 2.777 3.699.389 1.589.189 3.26-.563 4.696-.67 1.285-1.723 2.296-2.986 2.862-.411.175-.672.592-.574 1.013.098.422.557.664.951.488 1.609-.72 2.953-2.012 3.808-3.648.953-1.818 1.205-3.932.707-5.95z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-stone-800 block">Airbnb</span>
                  <span className="text-sm text-stone-500">View listing</span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-forest-600 transition-colors" />
            </a>
            <a
              href={CONTACT.social.makemytrip}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-cream-50 rounded-xl hover:bg-cream-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-[#E73C3E]">MMT</span>
                </div>
                <div>
                  <span className="font-medium text-stone-800 block">MakeMyTrip</span>
                  <span className="text-sm text-stone-500">View listing</span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-forest-600 transition-colors" />
            </a>
            <a
              href={CONTACT.social.goibibo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-cream-50 rounded-xl hover:bg-cream-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-[#F15B22]">Go</span>
                </div>
                <div>
                  <span className="font-medium text-stone-800 block">Goibibo</span>
                  <span className="text-sm text-stone-500">View listing</span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-forest-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function StayOptionsPreview() {
  return (
    <Section bg="white" padding="lg">
      <SectionHeader
        title="Choose Your Stay"
        subtitle="Select the accommodation that best fits your needs."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {STAY_OPTIONS.map((option) => (
          <div
            key={option.id}
            className="bg-cream-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="heading-sm text-stone-800 mb-2">{option.shortTitle}</h3>
              <p className="text-stone-600 text-sm mb-4">{option.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {option.idealFor.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-cream-200 text-stone-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button href="/stay-options" variant="secondary">
          View All Stay Options
        </Button>
      </div>
    </Section>
  );
}

function QuickContactSection() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}?text=Hi, I'd like to book a stay at Himalayan Valley Homestead.`;

  return (
    <Section bg="forest" padding="lg">
      <div className="text-center mb-12">
        <h2 className="heading-lg text-white mb-4">Need Help Booking?</h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto">
          Our team is here to help you plan the perfect stay. Reach out through any
          of these channels.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-white"
        >
          <MessageCircle className="w-8 h-8 mb-3" />
          <span className="font-medium mb-1">WhatsApp</span>
          <span className="text-cream-300 text-sm">{CONTACT.whatsapp}</span>
        </a>
        <a
          href={`tel:${CONTACT.phones[0]}`}
          className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-white"
        >
          <Phone className="w-8 h-8 mb-3" />
          <span className="font-medium mb-1">Call Us</span>
          <span className="text-cream-300 text-sm">{CONTACT.phones[0]}</span>
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-white"
        >
          <Mail className="w-8 h-8 mb-3" />
          <span className="font-medium mb-1">Email</span>
          <span className="text-cream-300 text-sm text-center break-all">
            {CONTACT.email}
          </span>
        </a>
      </div>
    </Section>
  );
}

export function Booking() {
  return (
    <>
      <HeroSection />
      <BookingOptionsSection />
      <StayOptionsPreview />
      <QuickContactSection />
    </>
  );
}
