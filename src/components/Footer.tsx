import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="inline-block mb-6">
              <img
                src="/images/logo-white.svg"
                alt="Пилорама"
                className="h-10"
              />
            </a>
            <p className="text-gray-400 mb-6">
              Мы предлагаем широкий ассортимент высококачественных
              пиломатериалов для строительства и отделки. Наша продукция
              соответствует всем стандартам качества и экологической
              безопасности.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Продукция
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Блог
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Продукция</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/products/lumber"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Пиломатериалы
                </a>
              </li>
              <li>
                <a
                  href="/products/woodwork"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Столярные изделия
                </a>
              </li>
              <li>
                <a
                  href="/products/furniture-panels"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Мебельные щиты
                </a>
              </li>
              <li>
                <a
                  href="/products/moldings"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Погонажные изделия
                </a>
              </li>
              <li>
                <a
                  href="/products/firewood"
                  className="text-brown-200 hover:text-white transition-colors"
                >
                  Дрова
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-brown-200 mr-3 flex-shrink-0" />
                <span className="text-brown-200">
                  ул. Лесная 123, г. Деревоград, 94123
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-brown-200 mr-3 flex-shrink-0" />
                <span className="text-brown-200">(555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-brown-200 mr-3 flex-shrink-0" />
                <span className="text-brown-200">info@lesmaster.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-brown-700 mb-8" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-brown-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Пилорама Лесмастер. Все права защищены.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a
              href="/privacy"
              className="text-brown-300 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="/terms"
              className="text-brown-300 hover:text-white transition-colors"
            >
              Условия использования
            </a>
            <a
              href="/sitemap"
              className="text-brown-300 hover:text-white transition-colors"
            >
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
