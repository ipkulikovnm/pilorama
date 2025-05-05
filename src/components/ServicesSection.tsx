import React from "react";
import { Truck, Ruler, Axe, Scissors, Wrench, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Доставка пиломатериалов",
    description:
      "Быстрая и надежная доставка пиломатериалов по городу и области. Собственный автопарк грузовых автомобилей.",
    icon: <Truck className="w-10 h-10 text-green-700" />,
    link: "/services/delivery",
  },
  {
    id: 2,
    title: "Распил по размерам",
    description:
      "Точный распил пиломатериалов по вашим размерам с использованием современного оборудования.",
    icon: <Ruler className="w-10 h-10 text-green-700" />,
    link: "/services/custom-cutting",
  },
  {
    id: 3,
    title: "Строгание",
    description:
      "Профессиональное строгание древесины для получения идеально гладкой поверхности.",
    icon: <Axe className="w-10 h-10 text-green-700" />,
    link: "/services/planing",
  },
  {
    id: 4,
    title: "Фрезерование",
    description:
      "Изготовление погонажных изделий любой сложности по индивидуальным заказам.",
    icon: <Scissors className="w-10 h-10 text-green-700" />,
    link: "/services/milling",
  },
  {
    id: 5,
    title: "Сушка древесины",
    description:
      "Камерная сушка пиломатериалов до необходимой влажности с соблюдением всех технологических требований.",
    icon: <Wrench className="w-10 h-10 text-green-700" />,
    link: "/services/drying",
  },
  {
    id: 6,
    title: "Обработка антисептиком",
    description:
      "Защитная обработка древесины современными антисептическими составами для продления срока службы.",
    icon: <PaintBucket className="w-10 h-10 text-green-700" />,
    link: "/services/antiseptic",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-brown-50">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Наши услуги
        </span>
        <h2 className="section-title mb-12">Что мы предлагаем</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* <a 
                href={service.link} 
                className="text-green-700 font-medium hover:text-green-800 transition-colors"
              >
                Подробнее
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
