import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Legacy service pages (still served at /services/ prefix and clean URLs)
import HomeRenovations from './components/services/HomeRenovations';
import Porches from './components/services/Porches';
import KitchenRefurbishments from './components/services/KitchenRefurbishments';
import Outbuildings from './components/services/Outbuildings';
import PropertyManagement from './components/services/PropertyManagement';

// Legal Pages
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

// New SEO Pages — clean URLs
import ExtensionsPage from './components/pages/ExtensionsPage';
import LoftConversionsPage from './components/pages/LoftConversionsPage';
import BathroomRefurbishmentsPage from './components/pages/BathroomRefurbishmentsPage';
import RoofingPage from './components/pages/RoofingPage';
import MaintenancePage from './components/pages/MaintenancePage';
import HaveringPage from './components/pages/HaveringPage';
import RomfordPage from './components/pages/RomfordPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          {/* Accessibility: Skip to main content link */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          
          <Navigation />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* Redirects from old /services/ URLs to clean URLs */}
              <Route path="/services/extensions" element={<Navigate to="/extensions" replace />} />
              <Route path="/services/loft-conversions" element={<Navigate to="/loft-conversions" replace />} />
              <Route path="/services/bathroom-refurbishments" element={<Navigate to="/bathroom-refurbishments" replace />} />
              {/* Existing service pages — still on /services/ prefix */}
              <Route path="/services/home-renovations" element={<HomeRenovations />} />
              <Route path="/home-renovations" element={<HomeRenovations />} />
              <Route path="/services/porches" element={<Porches />} />
              <Route path="/porches" element={<Porches />} />
              <Route path="/services/kitchen-refurbishments" element={<KitchenRefurbishments />} />
              <Route path="/kitchen-refurbishments" element={<KitchenRefurbishments />} />
              <Route path="/services/outbuildings" element={<Outbuildings />} />
              <Route path="/outbuildings" element={<Outbuildings />} />
              <Route path="/services/property-management" element={<PropertyManagement />} />
              <Route path="/property-management" element={<PropertyManagement />} />
              <Route path="/services/guaranteed-rent" element={<Navigate to="/maintenance" replace />} />
              <Route path="/guaranteed-rent" element={<Navigate to="/maintenance" replace />} />
              {/* New clean-URL SEO pages */}
              <Route path="/extensions" element={<ExtensionsPage />} />
              <Route path="/loft-conversions" element={<LoftConversionsPage />} />
              <Route path="/bathroom-refurbishments" element={<BathroomRefurbishmentsPage />} />
              <Route path="/external-wall-insulation" element={<Navigate to="/" replace />} />
              <Route path="/roofing" element={<RoofingPage />} />
              <Route path="/maintenance" element={<MaintenancePage />} />
              <Route path="/havering" element={<HaveringPage />} />
              <Route path="/romford" element={<RomfordPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              {/* Redirect broken /portfolio/ URLs that were previously indexed */}
              <Route path="/portfolio" element={<Navigate to="/" replace />} />
              <Route path="/portfolio/*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
