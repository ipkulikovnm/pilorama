import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Доска обрезная 25x150x6000 мм, сорт 1',
    description: 'Высококачественная обрезная доска из хвойных пород дерева для строительства и отделки.',
    price: 650,
    oldPrice: 750,
    image: '/images/products/product-1.jpg',
    category: 'Доска обрезная',
    inStock: true,
    link: '/products/doska-obreznaya-25x150'
  },
  {
    id: 2,
    title: 'Брус строительный 100x150x6000 мм',
    description: 'Строительный брус из сосны для каркасного строительства и других конструкций.',
    price: 1200,
    oldPrice: null,
    image: '/images/products/product-2.jpg',
    category: 'Брус строительный',
    inStock: true,
    link: '/products/brus-100x150'
  },
  {
    id: 3,
    title: 'Вагонка сосна 16x96x3000 мм, сорт А',
    description: 'Высококачественная вагонка из сосны для внутренней отделки помещений.',
    price: 320,
    oldPrice: 380,
    image: '/images/products/product-3.jpg',
    category: 'Вагонка',
    inStock: true,
    link: '/products/vagonka-sosna-16x96'
  },
  {
    id: 4,
    title: 'Доска пола 28x120x6000 мм, сорт АВ',
    description: 'Шпунтованная доска пола из сосны для создания прочного и красивого деревянного пола.',
    price: 850,
    oldPrice: null,
    image: '/images/products/product-4.jpg',
    category: 'Доска пола',
    inStock: false,
    link: '/products/doska-pola-28x120'
  },
  {
    id: 5,
    title: 'Блок-хаус 36x140x6000 мм, сорт А',
    description: 'Материал для внешней отделки, имитирующий оцилиндрованное бревно.',
    price: 1100,
    oldPrice: 1250,
    image: '/images/products/product-5.jpg',
    category: 'Блок-хаус',
    inStock: true,
    link: '/products/blok-haus-36x140'
  },
  {
    id: 6,
    title: 'Плинтус деревянный 20x45x3000 мм',
    description: 'Деревянный плинтус из сосны для отделки помещений.',
    price: 180,
    oldPrice: null,
    image: '/images/products/product-6.jpg',
    category: 'Погонажные изделия',
    inStock: true,
    link: '/products/plintus-20x45'
  },
  {
    id: 7,
    title: 'Имитация бруса 20x140x6000 мм, сорт АВ',
    description: 'Отделочный материал, имитирующий брус, для внешней отделки зданий.',
    price: 720,
    oldPrice: 790,
    image: '/images/products/product-7.jpg',
    category: 'Имитация бруса',
    inStock: true,
    link: '/products/imitaciya-brusa-20x140'
  },
  {
    id: 8,
    title: 'Террасная доска 28x140x6000 мм',
    description: 'Специальная доска для обустройства террас, веранд и садовых дорожек.',
    price: 1450,
    oldPrice: 1600,
    image: '/images/products/product-8.jpg',
    category: 'Террасная доска',
    inStock: true,
    link: '/products/terrasnaya-doska-28x140'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured-products" className="py-16 bg-brown-50">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Популярные товары
        </span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="section-title mb-4 md:mb-0">Наши лучшие предложения</h2>
          <a 
            href="#products" 
            className="inline-block px-6 py-3 bg-brown-100 text-brown-800 rounded-lg font-medium transition-colors hover:bg-brown-200"
          >
            Все товары
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <a href={product.link} className="block h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="p-4 flex-grow">
                <span className="text-sm text-gray-500 mb-1 block">{product.category}</span>
                <a href={product.link}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-green-700 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                </a>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-xl font-bold text-gray-900">{product.price} ₽</span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{product.oldPrice} ₽</span>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                      {product.inStock ? 'В наличии' : 'Под заказ'}
                    </span>
                  </div>
                  <button 
                    className={`w-full py-2 px-4 rounded-lg flex items-center justify-center transition-colors ${
                      product.inStock 
                        ? 'bg-green-700 text-white hover:bg-green-800' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#products" 
            className="btn-primary"
          >
            Смотреть все товары
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;