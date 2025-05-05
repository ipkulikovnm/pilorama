import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Иван Петров',
    role: 'Частный застройщик',
    image: '/images/testimonials/testimonial-1.jpg',
    content: 'Я очень доволен качеством пиломатериалов, которые приобрел в компании "Пилорама". Древесина высшего сорта, без дефектов и по разумной цене. Построил дачный домик, и все соседи спрашивают, где я брал такой хороший материал.',
    rating: 5
  },
  {
    id: 2,
    name: 'Елена Сидорова',
    role: 'Дизайнер интерьеров',
    image: '/images/testimonials/testimonial-2.jpg',
    content: 'Как дизайнер, я всегда ищу качественные материалы для своих проектов. "Пилорама" стала моим надежным партнером в создании уникальных деревянных элементов интерьера. Отличное качество, своевременная доставка и профессиональная консультация.',
    rating: 5
  },
  {
    id: 3,
    name: 'Алексей Смирнов',
    role: 'Директор строительной компании',
    image: '/images/testimonials/testimonial-3.jpg',
    content: 'Наша строительная компания сотрудничает с "Пилорамой" уже более 5 лет. За это время не было ни одной претензии к качеству материалов. Всегда в срок, всегда отличное качество. Рекомендую как надежного поставщика пиломатериалов.',
    rating: 5
  },
  {
    id: 4,
    name: 'Мария Козлова',
    role: 'Владелица загородного дома',
    image: '/images/testimonials/testimonial-4.jpg',
    content: 'Заказывала в "Пилораме" материалы для отделки веранды. Очень понравился индивидуальный подход и помощь в выборе подходящей древесины. Результат превзошел все ожидания! Буду обращаться еще.',
    rating: 4
  },
  {
    id: 5,
    name: 'Дмитрий Николаев',
    role: 'Мастер по изготовлению мебели',
    image: '/images/testimonials/testimonial-5.jpg',
    content: 'Как мебельщик, я очень требователен к качеству древесины. "Пилорама" всегда предоставляет материал высшего качества, что позволяет создавать долговечные и красивые изделия. Отдельное спасибо за возможность выбора нестандартных размеров.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
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
    <section id="testimonials" className="py-16 bg-white">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Отзывы клиентов
        </span>
        <h2 className="section-title mb-12">Что говорят наши клиенты</h2>
        
        <div className="relative">
          <div 
            ref={testimonialsRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-brown-50 p-8 rounded-lg shadow-sm">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeIndex ? 'bg-green-700' : 'bg-gray-300'
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