
import { Clock, ShieldCheck, Banknote, Hammer, CheckCircle, UserCheck } from 'lucide-react';
import { Feature, NavItem, PortfolioItem, RepairType, Review, Service, PricingTier } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Преимущества', href: '#features' },
  { label: 'Услуги', href: '#services' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Калькулятор', href: '#calculator' },
  { label: 'Контакты', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    icon: Clock,
    title: 'Точно в срок',
    description: 'Соблюдаем дедлайны, прописанные в договоре. За каждый день просрочки — штраф нам.',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия 3 года',
    description: 'Мы уверены в качестве наших работ. Любые недочеты устраним бесплатно.',
  },
  {
    icon: Banknote,
    title: 'Прозрачная смета',
    description: 'Цена фиксируется в договоре и не меняется в процессе ремонта без вашего желания.',
  },
  {
    icon: Hammer,
    title: 'Опытные мастера',
    description: 'В штате только квалифицированные специалисты со стажем от 7 лет.',
  },
  {
    icon: CheckCircle,
    title: 'Контроль качества',
    description: 'Технический надзор на каждом этапе работ. Фотоотчеты каждую неделю.',
  },
  {
    icon: UserCheck,
    title: 'Персональный менеджер',
    description: 'Все вопросы решает один человек. Вам не нужно искать прораба.',
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Ремонт под ключ',
    description: 'Полный цикл работ: от демонтажа до клининга. Заезжай и живи.',
    price: 'от 15 000 ₽/м²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Дизайн-проект',
    description: 'Визуализация, чертежи электрики и планировки.',
    price: 'от 2 500 ₽/м²',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=600&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Косметический',
    description: 'Обновление интерьера за 14 дней.',
    price: 'от 5 000 ₽/м²',
    image: 'https://images.unsplash.com/photo-1556912173-3db9963abf3b?q=80&w=600&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Коммерция',
    description: 'Офисы, ритейл, шоурумы. Работаем по безналу с НДС.',
    price: 'Индивидуально',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    span: 'md:col-span-3'
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'economy',
    title: 'Консультация',
    price: '5 000 ₽',
    period: '/ выезд',
    description: 'Разовый выезд специалиста для оценки состояния объекта.',
    features: [
      'Выезд инженера на объект',
      'Замер помещения',
      'Визуальный осмотр коммуникаций',
      'Консультация по материалам',
      'Составление предварительной сметы'
    ],
    buttonText: 'Заказать выезд',
    isPopular: false
  },
  {
    id: 'standard',
    title: 'Технадзор',
    price: '35 000 ₽',
    period: '/ месяц',
    description: 'Контроль качества работ вашей бригады или подрядчика.',
    features: [
      '4 выезда в месяц',
      'Проверка скрытых работ',
      'Контроль соблюдения технологий',
      'Фотоотчеты в Telegram',
      'Приемка этапов работ',
      'Проверка смет подрядчика'
    ],
    buttonText: 'Нанять технадзор',
    isPopular: true
  },
  {
    id: 'premium',
    title: 'Сопровождение',
    price: '80 000 ₽',
    period: '/ месяц',
    description: 'Полное ведение объекта "под ключ". Ваше участие минимально.',
    features: [
      'Ежедневный контроль работ',
      'Закупка и приемка материалов',
      'Решение вопросов с УК',
      'Авторский надзор дизайнера',
      'Организация смежников (кондиционеры, окна)',
      'Клининг после ремонта'
    ],
    buttonText: 'Полное ведение',
    isPopular: false
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: 'Скандинавский минимализм',
    category: 'Квартира, 65 м²',
    imageBefore: 'https://images.unsplash.com/photo-1581858726768-758a0308163d?q=80&w=800&auto=format&fit=crop&grayscale', 
    imageAfter: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop', 
  },
  {
    id: 2,
    title: 'Лофт студия',
    category: 'Апартаменты, 42 м²',
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop&grayscale',
    imageAfter: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Офис IT-компании',
    category: 'Офис, 120 м²',
    imageBefore: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop&grayscale',
    imageAfter: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Алексей Петров',
    role: 'Владелец квартиры',
    text: 'Новаремонт превзошли мои ожидания. Смету не превысили ни на рубль, закончили даже на пару дней раньше. Очень доволен результатом!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Дизайнер интерьера',
    text: 'Как дизайнер, я ценю точность исполнения моих чертежей. С ребятами приятно работать, понимают с полуслова. Рекомендую клиентам.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    role: 'Предприниматель',
    text: 'Делали ремонт в офисе. Важно было уложиться в сжатые сроки перед открытием. Справились на отлично, качество на высоте.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
];

export const PRICING_BASE = {
  [RepairType.Cosmetic]: 3000,
  [RepairType.Capital]: 8000,
  [RepairType.Design]: 15000,
};
