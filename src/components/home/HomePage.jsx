import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import Footer from './Footer';
import HeroCarousel from '../Carousel/HeroCarousel';
import AboutPage from '../About/AboutPage';
import ProductsPage from '../Products/ProductsPage';
import ScrollToTop from '../ScrollToTop';
import WhatsAppFixed from '../WhatsApp';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <AboutPage />
      <ProductsPage />
      <Footer />
      <WhatsAppFixed />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;