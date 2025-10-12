import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Service Pages
import Extensions from './components/services/Extensions';
import HomeRenovations from './components/services/HomeRenovations';
import Porches from './components/services/Porches';
import LoftConversions from './components/services/LoftConversions';
import KitchenRefurbishments from './components/services/KitchenRefurbishments';
import BathroomRefurbishments from './components/services/BathroomRefurbishments';
import Outbuildings from './components/services/Outbuildings';
import PropertyManagement from './components/services/PropertyManagement';
import GuaranteedRent from './components/services/GuaranteedRent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services/extensions" element={<Extensions />} />
          <Route path="/services/home-renovations" element={<HomeRenovations />} />
          <Route path="/services/porches" element={<Porches />} />
          <Route path="/services/loft-conversions" element={<LoftConversions />} />
          <Route path="/services/kitchen-refurbishments" element={<KitchenRefurbishments />} />
          <Route path="/services/bathroom-refurbishments" element={<BathroomRefurbishments />} />
          <Route path="/services/outbuildings" element={<Outbuildings />} />
          <Route path="/services/property-management" element={<PropertyManagement />} />
          <Route path="/services/guaranteed-rent" element={<GuaranteedRent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;