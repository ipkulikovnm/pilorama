import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import Categories from "./Categories";

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Наша продукция
        </span>
        <h2 className="section-title mb-12">Каталог пиломатериалов</h2>

        {/* Блок с фанерой в приоритете */}
        <div className="mb-12 bg-brown-50 p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-brown-800">
                Фанера высшего качества
              </h3>
              <p className="text-gray-700 mb-4">
                Мы предлагаем широкий ассортимент фанеры различных сортов и
                толщин для любых строительных и отделочных работ. Наша фанера
                отличается высоким качеством, прочностью и долговечностью.
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                <li>Фанера ФК (внутреннего применения)</li>
                <li>Фанера ФСФ (повышенной влагостойкости)</li>
                <li>Ламинированная фанера</li>
                <li>
                  Фанера различных сортов (1/1, 1/2, 2/2, 2/3, 2/4, 3/3, 3/4,
                  4/4)
                </li>
                <li>Толщина от 4 до 24 мм</li>
              </ul>
              <a href="#plywood" className="btn-primary inline-block">
                Подробнее о фанере
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="/fanera.webp"
                alt="Фанера высшего качества"
                width="600"
                height="400"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <Categories />
        <FeaturedProducts />
      </div>
    </section>
  );
};

export default ProductsSection;
