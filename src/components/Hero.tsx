import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-hero pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/header.webp" 
          alt="Высококачественные пиломатериалы и фанера" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <span className="inline-block px-4 py-1 mb-4 bg-green-700 text-white rounded-full text-sm font-medium">
            Высококачественные пиломатериалы и фанера
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            Качественная фанера и<br />пиломатериалы
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            От строительных проектов до тонкой деревообработки - у нас есть высококачественные материалы для любых задач.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="btn-primary flex items-center justify-center">
              Смотреть продукцию <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center">
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-50 h-16"></div>
    </section>
  );
};

export default Hero;