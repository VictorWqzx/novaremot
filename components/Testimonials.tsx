import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Что говорят клиенты</h2>
        </div>

        {/* Simple responsive grid instead of complex JS carousel for reliability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="w-10 h-10 text-primary-100 absolute top-6 right-6" />
              <p className="text-slate-600 italic mb-6 relative z-10">"{review.text}"</p>
              <div className="flex items-center mt-auto">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-primary-600 uppercase font-medium">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};