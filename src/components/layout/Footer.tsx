import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT, NAV_LINKS, PROPERTY } from '../../constants';

export function Footer() {
  const quickLinks = NAV_LINKS.slice(0, 5);
  const otherLinks = NAV_LINKS.slice(5);

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Mountain className="w-8 h-8 text-cream-400" />
              <div className="text-white">
                <span className="font-serif font-semibold text-lg leading-tight block">
                  Himalayan Valley
                </span>
                <span className="text-xs tracking-wider uppercase text-cream-400">
                  Homestead
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              {PROPERTY.tagline}. {PROPERTY.subtagline}—surrounded by mountains,
              balconies, and open skies.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT.social.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-cream-400 transition-colors"
                aria-label="Airbnb"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 18.275c-1.353-1.697-2.148-3.213-2.148-4.548 0-1.463.913-2.339 2.148-2.339s2.148.876 2.148 2.339c0 1.335-.795 2.851-2.148 4.548zm9.589-4.936c-.498-2.018-1.774-3.688-3.521-4.685a7.27 7.27 0 00-3.625-.963c-1.633 0-3.103.503-4.444 1.334-1.341-.831-2.811-1.334-4.444-1.334-1.269 0-2.497.329-3.625.963-1.747.997-3.023 2.667-3.521 4.685-.498 2.018-.246 4.132.707 5.95.855 1.636 2.199 2.928 3.808 3.648.394.176.853-.066.951-.488.098-.421-.163-.838-.574-1.013-1.263-.566-2.316-1.577-2.986-2.862-.752-1.436-.952-3.107-.563-4.696.389-1.589 1.397-2.912 2.777-3.699a5.723 5.723 0 012.863-.761c1.187 0 2.32.363 3.285 1.028-.567.567-1.052 1.216-1.443 1.937a5.987 5.987 0 00-.68 2.751c0 2.07 1.133 4.184 2.922 6.35.241.291.595.458.965.458s.724-.167.965-.458c1.789-2.166 2.922-4.28 2.922-6.35a5.987 5.987 0 00-.68-2.751c-.391-.721-.876-1.37-1.443-1.937a5.48 5.48 0 013.285-1.028c1.011 0 1.977.262 2.863.761 1.38.787 2.388 2.11 2.777 3.699.389 1.589.189 3.26-.563 4.696-.67 1.285-1.723 2.296-2.986 2.862-.411.175-.672.592-.574 1.013.098.422.557.664.951.488 1.609-.72 2.953-2.012 3.808-3.648.953-1.818 1.205-3.932.707-5.95z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-medium text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-stone-400 hover:text-cream-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium text-white text-lg mb-6">More</h4>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-stone-400 hover:text-cream-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/booking"
                  className="text-sm text-stone-400 hover:text-cream-400 transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT.phones[0]}`}
                  className="flex items-start gap-3 text-sm text-stone-400 hover:text-cream-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{CONTACT.phones[0]}</div>
                    <div>{CONTACT.phones[1]}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-stone-400 hover:text-cream-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-stone-400 hover:text-cream-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{CONTACT.address.full}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              {new Date().getFullYear()} Himalayan Valley Homestead. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={CONTACT.social.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-stone-500 hover:text-cream-400 transition-colors"
              >
                Also on Airbnb
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
