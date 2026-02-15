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
import ServiceSection from '../Service/ServiceSection';
import DesignStructure from '../DesignStructure/DesignStructure';
import AmranFacts from '../AmranFacts/AmranFacts';
import ClientLogoSlider from '../ClientLogoSlider/ClientLogoSlider';
import AmranBlogSection from '../Blog/AmranBlogSection';
import AmranContactSection from '../Contact/ContatcUS';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <AboutPage />
      <ProductsPage />
      <ServiceSection />
      <DesignStructure />
      <AmranFacts />
      <ClientLogoSlider />
      <AmranBlogSection />
      <AmranContactSection />
      <Footer />
      <WhatsAppFixed />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;