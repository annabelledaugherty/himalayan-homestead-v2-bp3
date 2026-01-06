import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../../constants';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}?text=Hi, I'm interested in staying at Himalayan Valley Homestead.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
