import { NavItem, ServicePackage, Testimonial, PortfolioItem, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PACKAGES: ServicePackage[] = [
  {
    title: 'Essential',
    price: '$2,500',
    description: 'Perfect for intimate ceremonies and elopements.',
    features: ['6 Hours Coverage', 'Online Gallery', '300+ Edited Photos', 'Print Rights'],
    isPopular: false,
  },
  {
    title: 'Signature',
    price: '$4,200',
    description: 'Comprehensive coverage for your special day.',
    features: ['10 Hours Coverage', 'Second Shooter', 'Online Gallery', '600+ Edited Photos', 'Engagement Session'],
    isPopular: true,
  },
  {
    title: 'Heirloom',
    price: '$6,500',
    description: 'The ultimate luxury experience with physical keepsakes.',
    features: ['Full Day Coverage', 'Second Shooter', 'Rehearsal Dinner', 'Premium Leather Album', 'Fast-Track Editing'],
    isPopular: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & James",
    role: "Wedding Clients",
    quote: "Meno didn't just take photos; he captured feelings. Looking at our album brings back every emotion from that day."
  },
  {
    id: 2,
    name: "Elena R.",
    role: "Portrait Session",
    quote: "I usually hate being in front of the camera, but Meno made me feel so comfortable. The results are stunning."
  },
  {
    id: 3,
    name: "The Carter Family",
    role: "Event",
    quote: "Professional, discreet, and incredibly talented. He captured moments we missed completely."
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, category: 'wedding', title: 'Mountain Elopement', imageUrl: 'https://picsum.photos/seed/wed1/800/1000' },
  { id: 2, category: 'portrait', title: 'Studio Session', imageUrl: 'https://picsum.photos/seed/port1/800/1000' },
  { id: 3, category: 'wedding', title: 'Urban Love', imageUrl: 'https://picsum.photos/seed/wed2/800/1000' },
  { id: 4, category: 'event', title: 'Gala Night', imageUrl: 'https://picsum.photos/seed/evt1/800/1000' },
  { id: 5, category: 'portrait', title: 'Editorial Look', imageUrl: 'https://picsum.photos/seed/port2/800/1000' },
  { id: 6, category: 'wedding', title: 'Golden Hour', imageUrl: 'https://picsum.photos/seed/wed3/800/1000' },
  { id: 7, category: 'portrait', title: 'Black & White', imageUrl: 'https://picsum.photos/seed/port3/800/1000' },
  { id: 8, category: 'event', title: 'Private Concert', imageUrl: 'https://picsum.photos/seed/evt2/800/1000' },
  { id: 9, category: 'wedding', title: 'First Dance', imageUrl: 'https://picsum.photos/seed/wed4/800/1000' },
];

export const FAQS: FaqItem[] = [
  { question: "How far in advance should we book?", answer: "For weddings, I recommend booking 12-18 months in advance. For portraits, 2-3 months is usually sufficient." },
  { question: "Do you travel for destination weddings?", answer: "Absolutely. I love traveling and have special packages for destination weddings." },
  { question: "How many photos will we receive?", answer: "For a full wedding day, you can expect between 500-800 fully edited images." },
  { question: "What is your editing style?", answer: "My style is timeless, true-to-life color with a cinematic touch. I avoid trendy filters that will look dated in a few years." },
];