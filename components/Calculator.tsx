import React, { useState, useMemo } from 'react';
import { RepairType } from '../types';
import { PRICING_BASE } from '../constants';
import { Button } from './Button';

export const Calculator: React.FC = () => {
  const [area, setArea] = useState(40);
  const [type, setType] = useState<RepairType>(RepairType.Capital);

  const cost = useMemo(() => {
    const basePrice = PRICING_BASE[type];
    return area * basePrice;
  }, [area, type]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор стоимости</h2>
          <p className="text-slate-400">Рассчитайте примерную стоимость ремонта за 1 минуту</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-4">Площадь помещения: <span className="text-primary-500 font-bold text-lg">{area} м²</span></label>
                <input 
                  type="range" 
                  min="10" 
                  max="200" 
                  value={area} 
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>10 м²</span>
                  <span>200 м²</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-4">Тип ремонта</label>
                <div className="space-y-3">
                  {[
                    { id: RepairType.Cosmetic, label: 'Косметический', desc: 'Освежить интерьер' },
                    { id: RepairType.Capital, label: 'Капитальный', desc: 'С выравниванием стен' },
                    { id: RepairType.Design, label: 'Дизайнерский', desc: 'По дизайн-проекту' },
                  ].map((opt) => (
                    <div 
                      key={opt.id}
                      onClick={() => setType(opt.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                        type === opt.id 
                          ? 'bg-primary-600/20 border-primary-500' 
                          : 'bg-slate-700/30 border-slate-600 hover:bg-slate-700'
                      }`}
                    >
                      <div>
                        <div className={`font-medium ${type === opt.id ? 'text-primary-400' : 'text-slate-200'}`}>{opt.label}</div>
                        <div className="text-xs text-slate-400">{opt.desc}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${type === opt.id ? 'border-primary-500' : 'border-slate-500'}`}>
                         {type === opt.id && <div className="w-2.5 h-2.5 bg-primary-500 rounded-full" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col justify-center items-center bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-slate-400 text-sm mb-2">Примерная стоимость:</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {formatPrice(cost)}
              </div>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Стоимость является ориентировочной. Для точного расчета необходим замер помещения специалистом.
              </p>
              <Button size="lg" className="w-full">
                Вызвать замерщика
              </Button>
              <div className="mt-4 text-xs text-slate-500">
                Выезд замерщика и составление сметы — 0 ₽
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};