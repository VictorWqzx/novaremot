import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';

export const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наше портфолио</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Посмотрите примеры наших работ. Наведите курсор, чтобы увидеть результат "После".</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <motion.div
              key={item.id}
              className="relative group h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode='wait'>
                   {hoveredId === item.id ? (
                      <motion.img
                        key="after"
                        src={item.imageAfter}
                        alt="After"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                   ) : (
                      <motion.img
                        key="before"
                        src={item.imageBefore}
                        alt="Before"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                   )}
                </AnimatePresence>
              </div>

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-primary-500 text-white text-xs rounded mb-2">
                  {hoveredId === item.id ? 'ПОСЛЕ' : 'ДО'}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};