import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { CONTACT } from '../../constants';

export function QuickContactStrip() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dates: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quick inquiry submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', dates: '' });
  };

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}?text=Hi, I'm interested in staying at Himalayan Valley Homestead.`;

  return (
    <section className="bg-gradient-to-r from-forest-700 to-forest-800 py-10 md:py-12">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
                Quick Inquiry
              </h2>
              <p className="text-cream-200 mb-6">
                Leave your details and we'll get back to you within a few hours.
              </p>

              {isSubmitted ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Thank you!</h3>
                    <p className="text-cream-200 text-sm">We'll contact you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-cream-300/70 focus:outline-none focus:ring-2 focus:ring-cream-400 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-cream-300/70 focus:outline-none focus:ring-2 focus:ring-cream-400 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder="Preferred dates"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-cream-300/70 focus:outline-none focus:ring-2 focus:ring-cream-400 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-forest-700 font-medium rounded-lg hover:bg-cream-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </form>
              )}
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:justify-end">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cream-300" />
                  </div>
                  <div>
                    <p className="text-cream-300 text-xs">Call us</p>
                    <a
                      href={`tel:${CONTACT.phones[0]}`}
                      className="text-white font-medium hover:text-cream-200 transition-colors"
                    >
                      {CONTACT.phones[0]}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cream-300" />
                  </div>
                  <div>
                    <p className="text-cream-300 text-xs">Email us</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-white font-medium hover:text-cream-200 transition-colors text-sm"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:border-l md:border-white/20 md:pl-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Full Contact Form
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
