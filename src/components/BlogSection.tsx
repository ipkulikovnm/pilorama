import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Как выбрать правильный пиломатериал для строительства дома",
    excerpt:
      "Советы экспертов по выбору качественных пиломатериалов для строительства деревянного дома.",
    image: "/images/blog/post1.jpg",
    date: "15 мая 2023",
    author: "Александр Иванов",
    category: "Советы",
    link: "/blog/how-to-choose-lumber",
  },
  {
    id: 2,
    title: "Тренды в деревянном домостроении 2023 года",
    excerpt:
      "Обзор современных тенденций в строительстве деревянных домов и использовании экологичных материалов.",
    image: "/images/blog/post2.jpg",
    date: "3 июня 2023",
    author: "Елена Петрова",
    category: "Тренды",
    link: "/blog/wooden-house-trends-2023",
  },
  {
    id: 3,
    title: "Уход за деревянными изделиями: продлеваем срок службы",
    excerpt:
      "Практические рекомендации по уходу за деревянными изделиями для сохранения их первоначального вида.",
    image: "/images/blog/post3.jpg",
    date: "22 июня 2023",
    author: "Михаил Сидоров",
    category: "Уход",
    link: "/blog/wooden-products-maintenance",
  },
  {
    id: 4,
    title: "Экологичность деревянного строительства: факты и мифы",
    excerpt:
      "Разбираемся, насколько экологично деревянное строительство и какие преимущества оно дает для окружающей среды.",
    image: "/images/blog/post4.jpg",
    date: "10 июля 2023",
    author: "Ольга Смирнова",
    category: "Экология",
    link: "/blog/eco-friendly-wooden-construction",
  },
  {
    id: 5,
    title: "Инновационные технологии обработки древесины",
    excerpt:
      "Обзор современных методов обработки древесины, повышающих долговечность и эстетические качества материала.",
    image: "/images/blog/post5.jpg",
    date: "5 августа 2023",
    author: "Дмитрий Козлов",
    category: "Технологии",
    link: "/blog/innovative-wood-processing",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-brown-50">
      <div className="container-custom">
        <span className="inline-block px-4 py-1 mb-4 bg-brown-200 text-brown-800 rounded-full text-sm font-medium">
          Наш блог
        </span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="section-title mb-4 md:mb-0">Полезные статьи</h2>
          {/* <a 
            href="#blog" 
            className="inline-block px-6 py-3 bg-brown-100 text-brown-800 rounded-lg font-medium transition-colors hover:bg-brown-200"
          >
            Все статьи
          </a> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* <a href={post.link} className="block h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a> */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <Link to={post.link.replace("/", "")}>
                  <h3 className="text-xl font-semibold mb-3 hover:text-green-700 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={post.link.replace("/", "")}
                  className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
                >
                  Читать далее
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#blog" className="btn-secondary">
            Посмотреть все статьи
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
