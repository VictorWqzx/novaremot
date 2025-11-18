import React from 'react';
import { SERVICES } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-slate-600 text-lg">Выполняем весь спектр ремонтно-отделочных работ. От простых решений до эксклюзивных проектов.</p>
          </div>
          <div className="hidden md:block mb-2">
            <Button variant="outline">Все услуги</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg bg-primary-500/90 px-3 py-1 rounded-md backdrop-blur-sm">
                  {service.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm flex-1">{service.description}</p>
                <Button variant="ghost" size="sm" className="self-start pl-0 hover:bg-transparent hover:text-primary-600">
                  Подробнее →
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Button variant="outline">Все услуги</Button>
        </div>
      </div>
    </section>
  );
};