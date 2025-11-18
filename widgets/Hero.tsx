
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '../shared/ui/Button';

export const Hero: React.FC = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reliable avatars
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 transform origin-top-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-primary-600 text-sm font-bold mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" /> Лидеры рейтингов 2024
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Ремонт как <br /> <span className="text-primary-500">искусство</span> жизни
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg font-light leading-relaxed">
              Превращаем бетонные стены в уютное пространство. Дизайнерский подход, чистота на объекте и внимание к каждой розетке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToElement('calculator')} className="shadow-xl shadow-primary-500/20">
                Рассчитать смету <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="white" size="lg" onClick={() => scrollToElement('portfolio')}>
                Смотреть работы
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-500 mr-2" /> Без предоплаты</div>
              <div className="flex items-center"><CheckCircle className="w-5 h-5 text-primary-500 mr-2" /> Клининг в подарок</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block h-[700px]">
            <div className="absolute top-10 right-10 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 z-10 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" alt="Modern Living Room" className="w-full h-full object-cover" loading="eager"/>
            </div>
            <div className="absolute bottom-20 left-0 w-1/2 h-1/3 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20 bg-slate-200">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute top-32 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-30 max-w-[200px]">
              <div className="flex -space-x-3 mb-3">
                 {avatars.map((src, i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <img src={src} alt="Avatar" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
              <p className="text-sm font-bold text-slate-900">150+ довольных семей за этот год</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
