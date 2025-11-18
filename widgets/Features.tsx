
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const FEATURES_LIST = [
  {
    title: "Фиксируем цену",
    desc: "Стоимость работ прописана в договоре и не вырастет в процессе. Никаких 'внезапных' доплат."
  },
  {
    title: "Технический надзор",
    desc: "Инженер проверяет каждый этап: от черновой электрики до укладки плитки. Фотоотчеты в WhatsApp."
  },
  {
    title: "Соблюдаем тишину",
    desc: "Уважаем ваших соседей. Шумные работы строго по графику. Всегда чисто в подъезде."
  },
  {
    title: "Гарантия 3 года",
    desc: "Мы уверены в своих мастерах. Если что-то пойдет не так — исправим за свой счет в течение 24 часов."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Почему нам доверяют <br />
              <span className="text-primary-500">ключи от квартиры?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Мы понимаем, что ремонт — это стресс. Поэтому берем на себя закупку материалов, общение с ЖЭКом и вывоз мусора. Вы просто заезжаете в готовую квартиру.
            </p>
            
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg relative">
               <img 
                src="https://images.unsplash.com/photo-1581858726768-758a0308163d?q=80&w=800&auto=format&fit=crop" 
                alt="Worker" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/20"></div>
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            {FEATURES_LIST.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start group"
              >
                <div className="mr-6 mt-1">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                     <CheckCircle2 className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
