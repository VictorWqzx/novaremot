import { Clock, ShieldCheck, Banknote, Hammer, CheckCircle, UserCheck } from 'lucide-react';
import { Feature, NavItem, PortfolioItem, RepairType, Review, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Преимущества', href: '#features' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Калькулятор', href: '#calculator' },
  { label: 'Отзывы', href: '#reviews' },
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
    title: 'Ремонт квартир',
    description: 'Комплексный подход: от демонтажа до чистовой отделки. Воплощаем любые идеи.',
    price: 'от 5 000 ₽/м²',
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    title: 'Ремонт офисов',
    description: 'Функциональные и стильные пространства для бизнеса. Работаем быстро, чтобы не прерывать работу.',
    price: 'от 4 500 ₽/м²',
    image: 'https://picsum.photos/800/600?random=2',
  },
  {
    title: 'Косметический ремонт',
    description: 'Быстрое обновление интерьера. Поклейка обоев, покраска, замена напольных покрытий.',
    price: 'от 2 500 ₽/м²',
    image: 'https://picsum.photos/800/600?random=3',
  },
  {
    title: 'Дизайн-проект',
    description: 'Разработка 3D-визуализации, планировочных решений и рабочей документации.',
    price: 'от 1 500 ₽/м²',
    image: 'https://picsum.photos/800/600?random=4',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: 'Скандинавский минимализм',
    category: 'Квартира, 65 м²',
    imageBefore: 'https://picsum.photos/600/400?grayscale&blur=2',
    imageAfter: 'https://picsum.photos/600/400?random=10',
  },
  {
    id: 2,
    title: 'Лофт студия',
    category: 'Апартаменты, 42 м²',
    imageBefore: 'https://picsum.photos/600/400?grayscale&blur=2',
    imageAfter: 'https://picsum.photos/600/400?random=11',
  },
  {
    id: 3,
    title: 'Офис IT-компании',
    category: 'Офис, 120 м²',
    imageBefore: 'https://picsum.photos/600/400?grayscale&blur=2',
    imageAfter: 'https://picsum.photos/600/400?random=12',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Алексей Петров',
    role: 'Владелец квартиры',
    text: 'Новаремонт превзошли мои ожидания. Смету не превысили ни на рубль, закончили даже на пару дней раньше. Очень доволен результатом!',
    avatar: 'https://picsum.photos/100/100?random=20',
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Дизайнер интерьера',
    text: 'Как дизайнер, я ценю точность исполнения моих чертежей. С ребятами приятно работать, понимают с полуслова. Рекомендую клиентам.',
    avatar: 'https://picsum.photos/100/100?random=21',
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    role: 'Предприниматель',
    text: 'Делали ремонт в офисе. Важно было уложиться в сжатые сроки перед открытием. Справились на отлично, качество на высоте.',
    avatar: 'https://picsum.photos/100/100?random=22',
  },
];

export const PRICING_BASE = {
  [RepairType.Cosmetic]: 3000,
  [RepairType.Capital]: 8000,
  [RepairType.Design]: 15000,
};