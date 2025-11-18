
import React, { useState } from 'react';
import { Button } from '../shared/ui/Button';

export const ContactFormFeature: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', comment: '' });
  };

  return (
    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Оставить заявку</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
          <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="Иван Иванов" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Номер телефона</label>
          <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="+7 (___) ___-__-__" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-2">Комментарий</label>
          <textarea id="comment" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Какой ремонт планируете?" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} />
        </div>
        <Button type="submit" size="lg" className="w-full">Отправить заявку</Button>
        <p className="text-xs text-slate-500 text-center mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
      </form>
    </div>
  );
};
