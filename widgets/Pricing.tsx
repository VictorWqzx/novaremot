
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../shared/constants';
import { Button } from '../shared/ui/Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Сопровождение и надзор</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Прозрачные тарифы на дополнительные услуги. Выбирайте уровень контроля, который нужен именно вам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 border ${
                tier.isPopular 
                  ? 'bg-slate-900 border-slate-900 text-white shadow-2xl' 
                  : 'bg-white border-slate-200 text-slate-900 hover:border-primary-300 hover:shadow-lg'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${tier.isPopular ? 'text-primary-400' : 'text-slate-900'}`}>{tier.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.period && <span className={`ml-2 text-sm ${tier.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>{tier.period}</span>}
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${tier.isPopular ? 'text-slate-400' : 'text-slate-600'}`}>{tier.description}</p>
              </div>
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.isPopular ? 'text-primary-500' : 'text-primary-600'}`} />
                      <span className={`text-sm ${tier.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant={tier.isPopular ? 'primary' : 'outline'} className="w-full justify-center"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                {tier.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
