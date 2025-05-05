import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Доска обрезная',
    description: 'Высококачественная обрезная доска различных размеров для строительства и отделки.',
    image: '/images/categories/category-1.jpg',
    link: '/products/obreznoj-pilomaterial'
  },
  {
    id: 2,
    title: 'Брус строительный',
    description: 'Прочный строительный брус для каркасного строительства и других конструкций.',
    image: '/images/categories/category-2.jpg',
    link: '/products/brus'
  },
  {
    id: 3,
    title: 'Вагонка',
    description: 'Отделочный материал для внутренней и внешней отделки помещений.',
    image: '/images/categories/category-3.jpg',
    link: '/products/vagonka'
  },
  {
    id: 4,
    title: 'Доска пола',
    description: 'Специальная доска для создания прочного и красивого деревянного пола.',
    image: '/images/categories/category-4.jpg',
    link: '/products/doska-pola'
  },
  {
    id: 5,
    title: 'Блок-хаус',
    description: 'Материал для внешней отделки, имитирующий оцилиндрованное бревно.',
    image: '/images/categories/category-5.jpg',
    link: '/products/blok-haus'
  },
  {
    id: 6,
    title: 'Погонажные изделия',
    description: 'Плинтусы, наличники, уголки и другие отделочные элементы из дерева.',
    image: '/images/categories/category-6.jpg',
    link: '/products/pogonazhnye-izdeliya'
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Наша продукция
        </span>
        <h2 className="section-title mb-12">Категории пиломатериалов</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-brown-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group"
            >
              <a href={category.link} className="block h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div className="p-6">
                <a href={category.link}>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-700 transition-colors">
                    {category.title}
                  </h3>
                </a>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a 
                  href={category.link} 
                  className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
                >
                  Подробнее
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#categories" 
            className="btn-primary"
          >
            Смотреть все категории
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;