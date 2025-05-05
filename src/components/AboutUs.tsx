import React from 'react';
import { TruckIcon, Shield, Award, Leaf } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Leaf className="w-10 h-10 text-green-700" />,
    title: "Экологичность",
    description: "Вся наша продукция поставляется из сертифицированных лесных хозяйств, обеспечивающих ответственное природопользование."
  },
  {
    id: 2,
    icon: <Shield className="w-10 h-10 text-green-700" />,
    title: "Гарантия качества",
    description: "Мы гарантируем качество каждого продукта и проводим строгий контроль на всех этапах производства."
  },
  {
    id: 3,
    icon: <TruckIcon className="w-10 h-10 text-green-700" />,
    title: "Быстрая доставка",
    description: "Благодаря эффективной логистической сети мы обеспечиваем своевременную доставку для ваших проектов."
  },
  {
    id: 4,
    icon: <Award className="w-10 h-10 text-green-700" />,
    title: "Экспертная поддержка",
    description: "Наша команда специалистов всегда готова предоставить профессиональную консультацию по вашим запросам."
  }
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
              О компании ЛесМастер
            </span>
            <h2 className="section-title mb-6">Ваш надёжный партнёр в сфере древесины с 1985 года</h2>
            <p className="text-gray-600 mb-6">
              Более трёх десятилетий ЛесМастер поставляет высококачественную фанеру и пиломатериалы для строителей, плотников и любителей DIY. Наша приверженность качеству, экологичным практикам и удовлетворённости клиентов сделала нас предпочтительным выбором для древесных материалов в регионе.
            </p>
            <p className="text-gray-600 mb-8">
              Мы гордимся тем, что предлагаем широкий выбор древесной продукции: от строительной фанеры до ценных пород древесины для изготовления мебели. Наша опытная команда гарантирует, что каждое изделие соответствует высочайшим стандартам качества.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Связаться с нами</a>
              <a href="#story" className="px-6 py-3 text-brown-800 border-2 border-brown-800 rounded-md hover:bg-brown-50 transition-colors duration-300">
                Наша история
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="bg-brown-50 p-6 rounded-lg border border-brown-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="absolute -z-10 top-10 left-10 w-full h-full bg-green-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;