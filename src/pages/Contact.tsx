import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { CONTACT, STAY_OPTIONS } from '../constants';
import { SocialMediaFeedsCompact } from '../components/home/SocialMediaFeeds';

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-800">
      <div className="section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Get in Touch
        </span>
        <h1 className="heading-xl text-white mb-6">Contact Us</h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Have questions or ready to book? We'd love to hear from you. Reach out
          through any of the channels below.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    stayOption: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-forest-600" />
        </div>
        <h3 className="heading-md text-stone-800 mb-4">Thank You!</h3>
        <p className="text-stone-600 mb-8">
          Your enquiry has been received. We'll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
      <h2 className="heading-md text-stone-800 mb-8">Send an Enquiry</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">
            Number of Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
          >
            <option value="">Select guests</option>
            <option value="1-2">1-2 guests</option>
            <option value="3-4">3-4 guests</option>
            <option value="5-6">5-6 guests</option>
            <option value="7-10">7-10 guests</option>
            <option value="10+">10+ guests</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-stone-700 mb-2">
            Check-in Date
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-stone-700 mb-2">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="stayOption" className="block text-sm font-medium text-stone-700 mb-2">
          Preferred Stay Option
        </label>
        <select
          id="stayOption"
          name="stayOption"
          value={formData.stayOption}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
        >
          <option value="">Select an option</option>
          {STAY_OPTIONS.map((option) => (
            <option key={option.id} value={option.id}>
              {option.shortTitle}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors resize-none"
          placeholder="Tell us about your requirements, special requests, or any questions..."
        />
      </div>

      <Button type="submit" className="w-full md:w-auto">
        <Send className="w-4 h-4 mr-2" />
        Send Enquiry
      </Button>
    </form>
  );
}

function ContactInfo() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}?text=Hi, I'm interested in staying at Himalayan Valley Homestead.`;

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <h3 className="heading-sm text-stone-800 mb-6">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-1">Phone</p>
              <a
                href={`tel:${CONTACT.phones[0]}`}
                className="text-stone-600 hover:text-forest-600 transition-colors block"
              >
                {CONTACT.phones[0]}
              </a>
              <a
                href={`tel:${CONTACT.phones[1]}`}
                className="text-stone-600 hover:text-forest-600 transition-colors block"
              >
                {CONTACT.phones[1]}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-1">WhatsApp</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-forest-600 transition-colors"
              >
                {CONTACT.whatsapp}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-1">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-stone-600 hover:text-forest-600 transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-stone-800 mb-1">Address</p>
              <p className="text-stone-600">
                {CONTACT.address.line1}
                <br />
                {CONTACT.address.line2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-forest-800 p-8 rounded-2xl text-white">
        <h3 className="heading-sm text-white mb-4">Quick Response</h3>
        <p className="text-cream-200 mb-6">
          For the fastest response, reach out via WhatsApp. We typically respond
          within a few hours.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <Section bg="white" padding="md">
      <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27024.88!2d76.52!3d32.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b479fb1111111%3A0x1111111111111111!2sPalampur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Himalayan Valley Homestead Location"
        />
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <>
      <HeroSection />
      <Section bg="cream" padding="lg">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </Section>
      <SocialMediaFeedsCompact />
      <MapSection />
    </>
  );
}
