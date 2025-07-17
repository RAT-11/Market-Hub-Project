


// import React from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import UserChoiceSection from './components/UserChoiceSection';
// import BuyerLogin from "./components/BuyerLogin";
// import SellerLogin from './components/SellerLogin';
// import HowItWorksSection from './components/HowItWorksSection';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';


// function LandingPage() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <FeaturesSection />
//       <UserChoiceSection />
//       <HowItWorksSection />
//       <div className="demo-cta">
//         <h3>Still questions ?</h3>
//         <button className="demo-btn">
//           Request a Demo. <span className="arrow">↗</span>
//         </button>
//       </div>
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/seller-login" element={<SellerLogin />} />
//           <Route path="/buyer-login" element={<BuyerLogin />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------------------------------




import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UserChoiceSection from './components/UserChoiceSection';
import BuyerLogin from "./components/BuyerLogin";
import SellerLogin from './components/SellerLogin';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UserChoiceSection />
      <HowItWorksSection />
      <div className="demo-cta" data-aos="fade-up">
        <h3>Still questions ?</h3>
        <button className="demo-btn">
          Request a Demo. <span className="arrow">↗</span>
        </button>
      </div>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/buyer-login" element={<BuyerLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
