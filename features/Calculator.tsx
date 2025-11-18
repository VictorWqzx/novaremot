
import React, { useState, useMemo } from 'react';
import { RepairType } from '../shared/types';
import { PRICING_BASE } from '../shared/constants';
import { Button } from '../shared/ui/Button';
import { Calculator as CalculatorIcon } from 'lucide-react';

export const CalculatorFeature: React.FC = () => {
  const [area, setArea] = useState(55);
  const [type, setType] = useState<RepairType>(RepairType.Capital);

  const cost = useMemo(() => {
    const basePrice = PRICING_BASE[type];
    return area * basePrice;
  }, [area, type]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 p-10 md:p-12">
              <div className="flex items-center mb-8">
                 <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <CalculatorIcon className="w-5 h-5" />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">Рассчитать бюджет</h2>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-bold text-slate-700">Площадь квартиры</label>
                    <span className="text-3xl font-extrabold text-primary-500">{area} <span className="text-lg text-slate-400 font-normal">м²</span></span>
                  </div>
                  <input type="range" min="20" max="150" step="1" value={area} onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-600" />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 mb-4 block">Тип ремонта</label>
                  <div className="space-y-3">
                    {[
                      { id: RepairType.Cosmetic, label: 'Косметический', desc: 'Обновление поверхностей' },
                      { id: RepairType.Capital, label: 'Капитальный', desc: 'С заменой коммуникаций' },
                      { id: RepairType.Design, label: 'Дизайнерский', desc: 'Премиум материалы и проект' },
                    ].map((opt) => (
                      <div key={opt.id} onClick={() => setType(opt.id)}
                        className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 flex items-center justify-between group ${
                          type === opt.id ? 'border-primary-500 bg-orange-50/50' : 'border-slate-100 hover:border-slate-300 bg-white'
                        }`}>
                        <div>
                          <div className={`font-bold ${type === opt.id ? 'text-primary-700' : 'text-slate-800'}`}>{opt.label}</div>
                          <div className="text-xs text-slate-500">{opt.desc}</div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          type === opt.id ? 'border-primary-500' : 'border-slate-300 group-hover:border-slate-400'
                        }`}>
                           {type === opt.id && <div className="w-3 h-3 bg-primary-500 rounded-full" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10">
                 <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Итоговая смета</div>
                 <div className="text-4xl md:text-5xl font-extrabold mb-6">{formatPrice(cost)}</div>
                 <p className="text-slate-400 text-sm leading-relaxed mb-8">Включено: работы мастеров, черновые материалы, вывоз мусора и уборка.</p>
               </div>
               <div className="relative z-10 space-y-4">
                 <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 hover:text-primary-600 border-transparent">Получить смету PDF</Button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
