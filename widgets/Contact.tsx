
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactFormFeature } from '../features/ContactForm';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Контакты</h2>
            <p className="text-slate-600 mb-8">Готовы обсудить ваш проект? Приезжайте к нам в офис на кофе или оставьте заявку на сайте.</p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div><h4 className="font-bold text-slate-900">Адрес</h4><p className="text-slate-600">г. Москва, ул. Строителей, д. 15, офис 304</p></div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div><h4 className="font-bold text-slate-900">Телефон</h4><p className="text-slate-600">+7 (495) 000-00-00</p></div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div><h4 className="font-bold text-slate-900">Email</h4><p className="text-slate-600">hello@novaremont.ru</p></div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary-500 mr-4 mt-1" />
                <div><h4 className="font-bold text-slate-900">Режим работы</h4><p className="text-slate-600">Пн-Вс: 09:00 - 21:00</p></div>
              </div>
            </div>
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
               <div className="absolute inset-0 flex items-center justify-center"><span className="bg-white px-4 py-2 rounded-lg shadow text-sm font-bold">Карта загружается...</span></div>
            </div>
          </div>
          <ContactFormFeature />
        </div>
      </div>
    </section>
  );
};
