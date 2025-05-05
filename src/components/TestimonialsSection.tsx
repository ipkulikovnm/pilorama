import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Иван Петров',
    position: 'Руководитель строительной компании',
    image: '/images/testimonials/person1.jpg',
    rating: 5,
    text: 'Мы сотрудничаем с "Пилорама Лесмастер" уже более 5 лет. Всегда отличное качество пиломатериалов, точные сроки поставки и профессиональный подход к работе. Рекомендую как надежного поставщика для строительных проектов любой сложности.'
  },
  {
    id: 2,
    name: 'Елена Смирнова',
    position: 'Дизайнер интерьеров',
    image: '/images/testimonials/person2.jpg',
    rating: 5,
    text: 'Заказывала мебельные щиты для нескольких проектов. Качество материала превзошло ожидания - идеальная поверхность, точная геометрия. Отдельное спасибо за помощь в подборе оптимальных вариантов под конкретные задачи.'
  },
  {
    id: 3,
    name: 'Алексей Кузнецов',
    position: 'Частный застройщик',
    image: '/images/testimonials/person3.jpg',
    rating: 4,
    text: 'Строил дом для своей семьи и заказывал весь пиломатериал в "Лесмастере". Порадовало соотношение цены и качества, а также возможность доставки прямо на участок. Единственный небольшой минус - пришлось немного подождать из-за большого количества заказов.'
  },
  {
    id: 4,
    name: 'Ольга Васильева',
    position: 'Владелица мебельной мастерской',
    image: '/images/testimonials/person4.jpg',
    rating: 5,
    text: 'Наша мастерская регулярно закупает материалы в "Пилораме Лесмастер". Особенно ценим стабильное качество, индивидуальный подход и возможность заказа нестандартных размеров. Это позволяет нам создавать уникальные предметы мебели для наших клиентов.'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };
  
  return (
    <section className="py-16 bg-brown-50">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Отзывы клиентов
        </span>
        <h2 className="section-title mb-12">Что говорят о нас</h2>
        
        <div className="relative">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].text}"</p>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-brown-100 transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-6 h-6 text-brown-800" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-brown-100 transition-colors"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-6 h-6 text-brown-800" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? 'bg-brown-800' : 'bg-brown-200'
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;