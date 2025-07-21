




import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx'; // Adjust path to your Header component
import Footer from './components/Footer/Footer.jsx'; // Adjust path to your Footer component
import HomePage from './LandingPages/LandingPage/HomePage';
import { SellerLogin, BuyerLogin } from './LandingPages/LandingPage/HomePage';

// Create a wrapper component to use useLocation hook
function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname.includes('login');
  
  return (
    <div>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/buyer-login" element={<BuyerLogin />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;