import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
              Связаться с нами
            </span>
            <h2 className="section-title mb-6">Контактная информация</h2>
            <p className="text-gray-600 mb-8">
              Есть вопросы о нашей продукции или нужна индивидуальная
              консультация? Наша команда готова помочь. Свяжитесь с нами,
              используя контактную информацию ниже или заполните форму, и мы
              свяжемся с вами в ближайшее время.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Наш адрес</h3>
                  <p className="text-gray-600">
                    ул. Лесная 123, г. Деревоград, 94123
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Номер телефона</h3>
                  <p className="text-gray-600">(000) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Электронная почта</h3>
                  <p className="text-gray-600">info@lesmaster.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Часы работы</h3>
                  <p className="text-gray-600">
                    Понедельник-Пятница: 8:00-18:00
                  </p>
                  <p className="text-gray-600">Суббота: 9:00-16:00</p>
                  <p className="text-gray-600">Воскресенье: Выходной</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brown-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Полное имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Ваш email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="Ваш телефон"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder="Тема сообщения"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-input"
                  placeholder="Ваше сообщение"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
