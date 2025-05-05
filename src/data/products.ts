export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  featured: boolean;
  sale: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Фанера березовая премиум",
    category: "Фанера",
    description: "Высококачественная березовая фанера с гладкой отделкой, идеально подходит для мебели и шкафов. Доступна в различных толщинах.",
    price: 48.99,
    oldPrice: 59.99,
    image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg",
    rating: 4.8,
    featured: true,
    sale: true
  },
  {
    id: 2,
    name: "Строительный брус",
    category: "Пиломатериалы",
    description: "Прочный сосновый брус для строительных проектов. Высушен в печи и обработан под давлением для долговечности и стабильности.",
    price: 12.50,
    image: "https://images.pexels.com/photos/6979903/pexels-photo-6979903.jpeg",
    rating: 4.5,
    featured: true,
    sale: false
  },
  {
    id: 3,
    name: "Дубовые доски",
    category: "Твёрдая древесина",
    description: "Премиальная дубовая древесина с красивой текстурой. Идеально подходит для изготовления мебели, напольных покрытий и декоративных проектов.",
    price: 24.99,
    image: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg",
    rating: 4.9,
    featured: true,
    sale: false
  },
  {
    id: 4,
    name: "Влагостойкая фанера",
    category: "Фанера",
    description: "Водостойкая фанера для морской среды. Исключительная долговечность и устойчивость к внешним воздействиям.",
    price: 72.99,
    oldPrice: 85.99,
    image: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg",
    rating: 4.7,
    featured: true,
    sale: true
  },
  {
    id: 5,
    name: "Кедровые доски для забора",
    category: "Мягкая древесина",
    description: "Ароматные кедровые доски, идеально подходящие для заборов. Естественная устойчивость к гниению и насекомым.",
    price: 18.25,
    image: "https://images.pexels.com/photos/221516/pexels-photo-221516.jpeg",
    rating: 4.6,
    featured: true,
    sale: false
  },
  {
    id: 6,
    name: "Кленовая древесина",
    category: "Твёрдая древесина",
    description: "Мелкозернистая кленовая древесина с однородным цветом. Идеально подходит для мебели и шкафов.",
    price: 32.99,
    image: "https://images.pexels.com/photos/2853794/pexels-photo-2853794.jpeg",
    rating: 4.8,
    featured: true,
    sale: false
  },
  {
    id: 7,
    name: "Пропитанная древесина для улицы",
    category: "Пиломатериалы",
    description: "Пропитанная древесина для наружного применения с отличной устойчивостью к гниению и насекомым.",
    price: 15.75,
    oldPrice: 19.99,
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    rating: 4.6,
    featured: true,
    sale: true
  },
  {
    id: 8,
    name: "Ореховые планки",
    category: "Твёрдая древесина",
    description: "Богатые, темные ореховые планки с характерным рисунком. Идеально подходят для элитной мебели и акцентных элементов.",
    price: 42.50,
    image: "https://images.pexels.com/photos/5824627/pexels-photo-5824627.jpeg",
    rating: 4.9,
    featured: true,
    sale: false
  },
  {
    id: 9,
    name: "Конструкционная фанера",
    category: "Фанера",
    description: "Прочные фанерные листы для конструкционных применений с исключительной прочностью и стабильностью.",
    price: 39.99,
    image: "https://images.pexels.com/photos/6958518/pexels-photo-6958518.jpeg",
    rating: 4.7,
    featured: false,
    sale: false
  },
  {
    id: 10,
    name: "Вишнёвые доски",
    category: "Твёрдая древесина",
    description: "Красивая вишнёвая древесина с богатым цветом, который со временем становится глубже. Отлично подходит для изысканной мебели и шкафов.",
    price: 38.75,
    image: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
    rating: 4.8,
    featured: false,
    sale: false
  },
  {
    id: 11,
    name: "Пиломатериалы из дугласовой пихты",
    category: "Пиломатериалы",
    description: "Прочные, универсальные пиломатериалы из дугласовой пихты для конструкционных применений и общих строительных нужд.",
    price: 14.25,
    image: "https://images.pexels.com/photos/162415/material-wood-timber-square-162415.jpeg",
    rating: 4.5,
    featured: false,
    sale: false
  },
  {
    id: 12,
    name: "Фанера балтийская берёза",
    category: "Фанера",
    description: "Премиальная фанера из балтийской берёзы с равномерными слоями и минимальными пустотами. Идеально подходит для тонкой деревообработки и лазерной резки.",
    price: 55.99,
    oldPrice: 65.99,
    image: "https://images.pexels.com/photos/242700/pexels-photo-242700.jpeg",
    rating: 4.9,
    featured: false,
    sale: true
  }
];