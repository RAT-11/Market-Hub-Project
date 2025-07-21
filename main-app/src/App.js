




import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx'; 
import Footer from './components/Footer/Footer.jsx'; 
import HomePage from './Pages/LandingPage/HomePage.jsx';
import { SellerLogin, BuyerLogin } from './Pages/LandingPage/HomePage.jsx';


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