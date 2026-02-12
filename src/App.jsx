import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/splash/SplashScreen';
import HomePage from './components/home/HomePage';

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
      </Routes>
    </Router>
  );
}

export default App;