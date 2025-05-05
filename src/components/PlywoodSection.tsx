import React from "react";

const PlywoodSection: React.FC = () => {
  const plywoodTypes = [
    {
      id: 1,
      title: "Фанера ФК",
      description:
        "Фанера ФК (внутреннего применения) предназначена для использования в сухих помещениях. Изготавливается с использованием карбамидоформальдегидных смол.",
      image: "/fanera_fk.webp",
      specs: [
        "Толщина: 4-24 мм",
        "Сорта: 1/1, 1/2, 2/2, 2/3, 2/4, 3/3, 3/4, 4/4",
        "Формат: 1525x1525 мм, 2440x1220 мм",
      ],
    },
    {
      id: 2,
      title: "Фанера ФСФ",
      description:
        "Фанера ФСФ (повышенной влагостойкости) применяется во влажных помещениях и на открытом воздухе под навесом. Производится с использованием фенолформальдегидных смол.",
      image: "/fanera_fsf.jpg",
      specs: [
        "Толщина: 4-24 мм",
        "Сорта: 1/1, 1/2, 2/2, 2/3, 2/4, 3/3, 3/4, 4/4",
        "Формат: 1525x1525 мм, 2440x1220 мм",
      ],
    },
    {
      id: 3,
      title: "Ламинированная фанера",
      description:
        "Ламинированная фанера покрыта специальной пленкой, которая придает ей дополнительную прочность, влагостойкость и декоративные качества. Широко применяется в строительстве и производстве мебели.",
      image: "/fanera_lam.jpg",
      specs: [
        "Толщина: 9-24 мм",
        "Цвета: темно-коричневый, светло-коричневый",
        "Формат: 2440x1220 мм",
      ],
    },
    {
      id: 4,
      title: "Фанера шлифованная",
      description:
        "Шлифованная фанера имеет гладкую поверхность, готовую к покраске или другой отделке. Идеально подходит для мебельного производства и внутренней отделки.",
      image: "/fanera_shlif.jpg",
      specs: [
        "Толщина: 4-24 мм",
        "Сорта: 1/1, 1/2, 2/2",
        "Формат: 1525x1525 мм, 2440x1220 мм",
      ],
    },
  ];

  return (
    <section id="plywood" className="py-16 bg-brown-50">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Фанера
        </span>
        <h2 className="section-title mb-6">Фанера высшего качества</h2>
        <p className="text-gray-700 mb-12 max-w-3xl">
          Мы предлагаем широкий ассортимент фанеры от ведущих производителей.
          Наша продукция соответствует всем стандартам качества и экологической
          безопасности. Вы можете приобрести фанеру оптом и в розницу с
          доставкой по городу и области.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {plywoodTypes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-brown-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium mb-2 text-green-700">
                      Характеристики:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {item.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a href="#contact" className="btn-primary w-full text-center">
                    Запросить цену
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-brown-800">
            Преимущества нашей фанеры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-brown-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-2">Высокое качество</h4>
                <p className="text-gray-600">
                  Вся продукция соответствует ГОСТ и имеет необходимые
                  сертификаты качества
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-brown-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-2">Оперативная доставка</h4>
                <p className="text-gray-600">
                  Доставляем заказы в кратчайшие сроки собственным транспортом
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-brown-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-2">Гибкие условия оплаты</h4>
                <p className="text-gray-600">
                  Работаем с наличным и безналичным расчетом, возможна отсрочка
                  платежа
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-brown-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-2">Большой ассортимент</h4>
                <p className="text-gray-600">
                  В наличии фанера различных сортов, размеров и толщин
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-brown-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-2">
                  Профессиональная консультация
                </h4>
                <p className="text-gray-600">
                  Наши специалисты помогут подобрать оптимальный вариант для
                  ваших задач
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-brown-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-2">Гарантия качества</h4>
                <p className="text-gray-600">
                  Предоставляем гарантию на всю продукцию и возможность возврата
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlywoodSection;
