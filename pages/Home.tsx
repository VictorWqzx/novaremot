
import React from 'react';
import { Hero } from '../widgets/Hero';
import { Features } from '../widgets/Features';
import { Services } from '../widgets/Services';
import { Pricing } from '../widgets/Pricing';
import { Portfolio } from '../widgets/Portfolio';
import { Testimonials } from '../widgets/Testimonials';
import { Contact } from '../widgets/Contact';
import { CalculatorFeature } from '../features/Calculator';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Portfolio />
      <CalculatorFeature />
      <Testimonials />
      <Contact />
    </main>
  );
};
