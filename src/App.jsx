import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/splash/SplashScreen';
import HomePage from './components/home/HomePage';
import AboutUsPage from './pages/About/CompanyProfile';
import ManufacturingFacilities from './pages/Manufacturing/Manufacturing';
import DesignStructure from './pages/Design/Design';
import ServicesPage from './pages/Servives/Services';
import OurNetworkPage from './pages/Network/Network';
import ProductsGrain from './pages/Grain/ProductsGrain';
import SpicesCleaning from './pages/Spices/SpicesCleaning';
import DaalPlant from './pages/Daal/DaalPlant';
import SortexAccessories from './pages/SortexAccessories/SortexAccessories';
import ClientsPage from './pages/Clients/Clients';
import GalleryPage from './pages/Gallery/Gallery';
import BlogPage from './pages/Blog/Blog';
import ContactPage from './pages/Contact/Contact';
import CareersPage from './pages/Career/Career';
import ProductsPage from './pages/Product/Product';
import AdminLogin from './pages/Login/AdminLogin';
import AdminDashboard from './pages/Dashboard/Admindashboard';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            showSplash ? (
              <SplashScreen onComplete={() => setShowSplash(false)} />
            ) : (
              <HomePage />
            )
          } 
        />
        <Route path='/about-profile' element={<AboutUsPage />} />
        <Route path='/products' element={<ProductsPage />} />

        <Route path='/about-manufacturing' element={<ManufacturingFacilities />} />
        <Route path='/about-design' element={<DesignStructure />} />
        <Route path='/about-services' element={<ServicesPage />} />
        <Route path='/about-network' element={<OurNetworkPage />} />
        <Route path='/products-grain' element={<ProductsGrain />} />
        <Route path='/products-spices' element={<SpicesCleaning />} />
        <Route path='/products-daal' element={<DaalPlant />} />
        <Route path='/products-sortex' element={<SortexAccessories />} />
        <Route path='/client' element={<ClientsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/career' element={<CareersPage />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/armanadmin/dashboard' element={<AdminDashboard/>} />


      </Routes>
    </Router>
  );
}

export default App;