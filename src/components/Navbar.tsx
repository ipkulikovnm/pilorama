import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className={`text-2xl font-bold ${isScrolled ? 'text-brown-800' : 'text-white'} flex items-center drop-shadow-md`}>
              <span className={isScrolled ? 'text-green-700' : 'text-green-100'}>Лес</span>
              <span className={isScrolled ? 'text-brown-700' : 'text-white'}>Мастер</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'} font-medium drop-shadow-md`}>Продукция</a>
            <div className="relative group">
              <button className={`nav-link flex items-center ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'} font-medium drop-shadow-md`}>
                Категории <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top">
                <a href="#plywood" className="block px-4 py-2 text-sm hover:bg-brown-50 font-medium text-green-700">Фанера</a>
                <a href="#lumber" className="block px-4 py-2 text-sm hover:bg-brown-50">Пиломатериалы</a>
                <a href="#hardwood" className="block px-4 py-2 text-sm hover:bg-brown-50">Твёрдая древесина</a>
                <a href="#softwood" className="block px-4 py-2 text-sm hover:bg-brown-50">Мягкая древесина</a>
              </div>
            </div>
            <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'} font-medium drop-shadow-md`}>О нас</a>
            <a href="#testimonials" className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'} font-medium drop-shadow-md`}>Отзывы</a>
            <a href="#contact" className={`nav-link ${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'} font-medium drop-shadow-md`}>Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className={`${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'} transition-colors duration-300 drop-shadow-md`}>
              <Search size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'} transition-colors duration-300 drop-shadow-md`}>
              <ShoppingCart size={20} />
            </button>
            <button onClick={toggleMenu} className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} drop-shadow-md`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#products" className="nav-link py-2">Продукция</a>
            <a href="#plywood" className="nav-link py-2 pl-4 font-medium text-green-700">- Фанера</a>
            <a href="#lumber" className="nav-link py-2 pl-4">- Пиломатериалы</a>
            <a href="#hardwood" className="nav-link py-2 pl-4">- Твёрдая древесина</a>
            <a href="#softwood" className="nav-link py-2 pl-4">- Мягкая древесина</a>
            <a href="#about" className="nav-link py-2">О нас</a>
            <a href="#testimonials" className="nav-link py-2">Отзывы</a>
            <a href="#contact" className="nav-link py-2">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;