import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', comment: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info & Map */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Контакты</h2>
            <p className="text-slate-600 mb-8">
              Готовы обсудить ваш проект? Приезжайте к нам в офис на кофе или оставьте заявку на сайте.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Адрес</h4>
                  <p className="text-slate-600">г. Москва, ул. Строителей, д. 15, офис 304</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Телефон</h4>
                  <p className="text-slate-600">+7 (495) 000-00-00</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">hello@novaremont.ru</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Режим работы</h4>
                  <p className="text-slate-600">Пн-Вс: 09:00 - 21:00</p>
                </div>
              </div>
            </div>

             {/* Fake Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 grayscale"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white px-4 py-2 rounded-lg shadow text-sm font-bold">Карта загружается...</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Номер телефона</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-2">Комментарий (необязательно)</label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Какой ремонт планируете?"
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};