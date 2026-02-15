import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/splash/SplashScreen';
import HomePage from './components/home/HomePage';
import AboutUsPage from './pages/About/CompanyProfile';
import ManufacturingFacilities from './pages/Manufacturing/Manufacturing';
import DesignStructure from './pages/Design/Design';
import ServicesPage from './pages/Servives/Services';
import OurNetworkPage from './pages/Network/Network';

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
        <Route path='/about-manufacturing' element={<ManufacturingFacilities />} />
        <Route path='/about-design' element={<DesignStructure />} />
        <Route path='/about-services' element={<ServicesPage />} />
        <Route path='/about-network' element={<OurNetworkPage />} />




      </Routes>
    </Router>
  );
}

export default App;