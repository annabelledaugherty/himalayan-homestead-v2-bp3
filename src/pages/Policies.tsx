import {
  Clock,
  FileCheck,
  Home,
  Ban,
  PawPrint,
  CreditCard,
  CalendarX,
  AlertTriangle,
  Shield,
  Baby,
  ChefHat,
  Leaf,
  Info,
  Phone,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { DETAILED_POLICIES, CONTACT } from '../constants';

const iconMap: Record<string, React.ElementType> = {
  Clock: Clock,
  FileCheck: FileCheck,
  Home: Home,
  Ban: Ban,
  PawPrint: PawPrint,
  CreditCard: CreditCard,
  CalendarX: CalendarX,
  AlertTriangle: AlertTriangle,
  Shield: Shield,
  Baby: Baby,
  ChefHat: ChefHat,
  Leaf: Leaf,
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hhs-banner-about.jpg"
          alt="Himalayan Valley Homestead"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Good to Know
        </span>
        <h1 className="heading-xl text-white mb-6">House Policies</h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Please review our house policies to ensure a pleasant stay for all guests
          at Himalayan Valley Homestead. We believe in transparency and want you to know exactly what to expect.
        </p>
      </div>
    </section>
  );
}

function QuickInfo() {
  const quickItems = [
    { label: 'Check-in', value: '11:00 AM', icon: Clock },
    { label: 'Check-out', value: '2:00 PM', icon: Clock },
    { label: 'Pets', value: 'Not Allowed', icon: PawPrint },
    { label: 'Smoking', value: 'Terrace Only', icon: Ban },
  ];

  return (
    <Section bg="white" padding="sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 p-4 bg-cream-50 rounded-xl"
          >
            <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-stone-500">{item.label}</div>
              <div className="font-medium text-stone-800">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

interface PolicyCardProps {
  policyKey: string;
  policy: {
    title: string;
    icon: string;
    items: { label: string; value: string }[];
    note?: string;
  };
}

function PolicyCard({ policy }: PolicyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[policy.icon] || Info;
  const displayItems = isExpanded ? policy.items : policy.items.slice(0, 3);
  const hasMore = policy.items.length > 3;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-medium text-lg text-stone-800">
            {policy.title}
          </h3>
        </div>
        <div className="space-y-3">
          {displayItems.map((item) => (
            <div key={item.label} className="flex justify-between items-start gap-4">
              <span className="text-sm text-stone-500">{item.label}</span>
              <span className="text-sm text-stone-800 font-medium text-right">{item.value}</span>
            </div>
          ))}
        </div>
        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-1 text-sm text-forest-600 hover:text-forest-700 font-medium"
          >
            {isExpanded ? 'Show less' : `Show ${policy.items.length - 3} more`}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
        {policy.note && (
          <div className="mt-4 pt-4 border-t border-stone-100">
            <p className="text-xs text-stone-500 italic">{policy.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function MainPoliciesSection() {
  const mainPolicies = [
    DETAILED_POLICIES.checkInOut,
    DETAILED_POLICIES.identification,
    DETAILED_POLICIES.houseRules,
    DETAILED_POLICIES.cancellation,
    DETAILED_POLICIES.payment,
    DETAILED_POLICIES.smoking,
  ];

  return (
    <Section bg="cream" padding="lg">
      <SectionHeader
        title="Essential Policies"
        subtitle="Key information about check-in, identification, and booking terms."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainPolicies.map((policy, index) => (
          <PolicyCard
            key={index}
            policyKey={`main-${index}`}
            policy={policy}
          />
        ))}
      </div>
    </Section>
  );
}

function AdditionalPoliciesSection() {
  const additionalPolicies = [
    DETAILED_POLICIES.pets,
    DETAILED_POLICIES.damage,
    DETAILED_POLICIES.safety,
    DETAILED_POLICIES.children,
    DETAILED_POLICIES.kitchen,
    DETAILED_POLICIES.environment,
  ];

  return (
    <Section bg="white" padding="lg">
      <SectionHeader
        title="Additional Guidelines"
        subtitle="More details to help you prepare for your stay."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalPolicies.map((policy, index) => (
          <PolicyCard
            key={index}
            policyKey={`additional-${index}`}
            policy={policy}
          />
        ))}
      </div>
    </Section>
  );
}

function ImportantNotices() {
  const notices = [
    {
      title: 'ID Verification Required',
      content: 'As per Himachal Pradesh government regulations, all guests must provide valid government-issued photo identification at check-in. This applies to both Indian and foreign nationals.',
      type: 'info',
    },
    {
      title: 'Peaceful Environment',
      content: 'Our homestay is located in a quiet residential area. We request all guests to maintain peace during quiet hours (10 PM - 7 AM) and be mindful of neighbors.',
      type: 'info',
    },
    {
      title: 'Self-Catering Property',
      content: 'This is a self-catering homestay with fully equipped kitchens. Groceries are available at local shops (approximately 2 km). A local cook can be arranged on request.',
      type: 'info',
    },
    {
      title: 'Mountain Location',
      content: 'The property is located 9.5 km from Palampur town in a rural mountain setting. Mobile network coverage is available. Please plan accordingly for supplies and connectivity needs.',
      type: 'warning',
    },
  ];

  return (
    <Section bg="sage" padding="lg">
      <SectionHeader
        title="Important Information"
        subtitle="Please note the following before booking."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {notices.map((notice) => (
          <div
            key={notice.title}
            className={`p-6 rounded-xl ${
              notice.type === 'warning'
                ? 'bg-amber-50 border border-amber-200'
                : 'bg-white'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                notice.type === 'warning'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-forest-100 text-forest-600'
              }`}>
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-medium text-stone-800 mb-2">{notice.title}</h3>
                <p className="text-sm text-stone-600">{notice.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CancellationTimeline() {
  const timeline = [
    { days: '7+ days before', refund: '100% refund', color: 'bg-green-500' },
    { days: '3-7 days before', refund: '50% refund', color: 'bg-amber-500' },
    { days: 'Less than 3 days', refund: 'No refund', color: 'bg-red-500' },
    { days: 'No show', refund: 'No refund', color: 'bg-stone-400' },
  ];

  return (
    <Section bg="white" padding="lg">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Cancellation Policy"
          subtitle="Our cancellation terms for direct bookings. Platform bookings follow respective platform policies."
        />
        <div className="bg-cream-50 rounded-2xl p-8">
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-stone-600">{item.days}</span>
                  <span className={`font-medium ${
                    item.refund === '100% refund'
                      ? 'text-green-700'
                      : item.refund === '50% refund'
                      ? 'text-amber-700'
                      : 'text-stone-500'
                  }`}>
                    {item.refund}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone-500 pt-4 border-t border-stone-200">
            For exceptional circumstances (medical emergencies, natural disasters, etc.),
            please contact us directly. We try to be understanding of genuine situations.
          </p>
        </div>
      </div>
    </Section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'Can I bring additional guests?',
      answer: 'The number of guests must match your booking confirmation. Additional guests require prior approval and may incur extra charges.',
    },
    {
      question: 'Is early check-in or late check-out available?',
      answer: 'Both can be arranged subject to availability. Please contact us at least 24 hours in advance. Additional charges may apply for late check-out.',
    },
    {
      question: 'Do you provide meals?',
      answer: 'This is a self-catering property. We provide fully equipped kitchens. A local cook can be arranged on request for an additional fee.',
    },
    {
      question: 'Is the property suitable for elderly guests?',
      answer: 'The property has stairs and multiple levels. Please contact us to discuss specific accessibility needs before booking.',
    },
    {
      question: 'What if I damage something during my stay?',
      answer: 'Please report any damage immediately. We understand accidents happen. Guests are responsible for repair or replacement costs for damaged items.',
    },
    {
      question: 'Can I host a party or event?',
      answer: 'Events and parties are not permitted without prior arrangement. Please contact us to discuss if you have a special occasion planned.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section bg="cream" padding="lg">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about our policies and guidelines."
        />
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
              >
                <span className="font-medium text-stone-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-stone-600 text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">
          Questions About Our Policies?
        </h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-8">
          If you have any questions or need clarification on our house policies,
          please don't hesitate to reach out. We're happy to help.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href={`tel:${CONTACT.phones[0]}`}
            className="flex items-center gap-2 text-cream-200 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>{CONTACT.phones[0]}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-cream-200 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>{CONTACT.email}</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="white" size="lg">
            Contact Us
          </Button>
          <Button href="/booking" variant="secondary" size="lg" className="border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-forest-800">
            Book Your Stay
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function Policies() {
  return (
    <>
      <HeroSection />
      <QuickInfo />
      <MainPoliciesSection />
      <CancellationTimeline />
      <AdditionalPoliciesSection />
      <ImportantNotices />
      <FAQSection />
      <ContactSection />
    </>
  );
}
