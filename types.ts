export interface NavItem {
  label: string;
  path: string;
}

export interface ServicePackage {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface PortfolioItem {
  id: number;
  category: 'wedding' | 'portrait' | 'event';
  imageUrl: string;
  title: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}