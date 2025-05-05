import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Компоненты
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ProductsSection from "./components/ProductsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import CTA from "./components/CTA";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PlywoodSection from "./components/PlywoodSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      {/* <ProductsSection /> */}
      <PlywoodSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <BlogSection />
      <CTA />
      <ContactSection />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Здесь можно добавить другие маршруты */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
