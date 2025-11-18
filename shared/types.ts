
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  image: string;
  span?: string; // For grid layout
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageBefore: string;
  imageAfter: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface PricingTier {
  id: string;
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export enum RepairType {
  Cosmetic = 'cosmetic',
  Capital = 'capital',
  Design = 'design',
}
