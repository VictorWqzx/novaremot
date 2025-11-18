
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../shared/constants';
import { Button } from '../shared/ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'} transition-colors`}>
              НОВА<span className="text-primary-500">РЕМОНТ</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => handleNavigation(e, item.href)}
                className={`text-sm font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-600'}`}>
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm" onClick={handleScrollToContact}>
              <Phone className="w-4 h-4 mr-2" /> +7 (999) 123-45-67
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 h-screen">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center justify-center h-3/4">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} onClick={(e) => handleNavigation(e, item.href)}
                className="block px-3 py-2 text-2xl font-medium text-slate-700 hover:text-primary-500">
                {item.label}
              </a>
            ))}
            <div className="mt-8 w-full max-w-xs">
               <Button className="w-full justify-center" size="lg" onClick={handleScrollToContact}>Заказать звонок</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
