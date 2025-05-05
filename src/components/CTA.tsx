import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Нужны качественные пиломатериалы для вашего проекта?
            </h2>
            <p className="text-green-100 text-lg mb-6">
              Свяжитесь с нами сегодня для получения бесплатной консультации и расчета стоимости. Мы поможем подобрать оптимальные материалы под ваши задачи и бюджет.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="btn-white"
              >
                Связаться с нами
              </a>
              <a 
                href="tel:+78001234567" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg transition-colors hover:bg-white hover:text-green-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                8 (800) 123-45-67
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Получите бесплатный расчет стоимости</h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="tel" 
                  placeholder="Ваш телефон" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Опишите ваш проект" 
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors hover:bg-green-800"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;