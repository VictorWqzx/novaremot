
import React from 'react';
import { SERVICES } from '../shared/constants';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Наши услуги</h2>
          <p className="text-slate-600 text-lg max-w-xl">Комплексный подход к созданию вашего идеального дома.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {SERVICES.map((service, idx) => (
            <div key={idx} className={`${service.span || ''} relative group overflow-hidden rounded-3xl cursor-pointer bg-slate-900`}>
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 max-w-md text-sm md:text-base">{service.description}</p>
                    <div className="mt-2 text-primary-400 font-bold">{service.price}</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
