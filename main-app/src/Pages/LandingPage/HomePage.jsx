


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';
import {FaCheckCircle } from 'react-icons/fa';
import heroImg from '../../assets/hero-image.png'; 
import buyerImg from '../../assets/buyer.svg';
import sellerImg from '../../assets/seller.svg';
import loginimage from '../../assets/login.svg';
import howItWorksImg from '../../assets/how-it-works.png';

// Lordicon script
const loadLordIcon = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.lordicon.com/lordicon.js";
  script.async = true;
  document.body.appendChild(script);
};

// Feature data
const features = [
  {
    icon: "https://cdn.lordicon.com/fmdwwfgs.json",
    title: "Instant Messaging System, connect to your buyer seller efficiently and super quickly",
    backContent: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
  },
  {
    icon: "https://cdn.lordicon.com/xowcggal.json",
    title: "Real-Time Insights.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatibus!",
    backContent: "Track your sales, inventory, and customer trends with powerful analytics tools.",
  },
  {
    icon: "https://cdn.lordicon.com/abhwievu.json",
    title: "24/7 Support.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatibus!",
    backContent: "Get help whenever you need it from our dedicated support team, day or night.",
  },
  {
    icon: "https://cdn.lordicon.com/jvucoldz.json",
    title: "Global Reach.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatibus!",
    backContent: "Expand your business globally with our platform designed for international markets and diverse audiences.",
  }
];

// const steps = [
//   {
//     title: 'Register',
//     desc: 'Create an account in minutes to start selling or buying.',
//     icon: 'https://cdn.lordicon.com/jjoolpwc.json'
//   },
//   {
//     title: 'List & Discover',
//     desc: 'List your products or explore curated listings effortlessly.',
//     icon: 'https://cdn.lordicon.com/kthelypq.json'
//   },
//   {
//     title: 'Get Support',
//     desc: '24/7 customer assistance to help you at every step.',
//     icon: 'https://cdn.lordicon.com/ssvybplt.json'
//   }
// ];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 12 }
  }
};

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="marketplace-badge">
          <span className="badge-icon">⭐</span>
          <span className="badge-text">#1 Marketplace Platform</span>
        </div>

        <h1>
          Welcome to <span className="highlight">MarketHub</span><br />
          Your one-stop market for buying & selling
        </h1>
        <p>
          Buy. Sell. Thrive – All in one place.<br />
          List your products, reach more customers, and manage everything with ease.<br />
          Secure payments, real-time insights, and 24/7 support help turn your passion into profit.
        </p>
        <button className="explore-btn">Explore Now</button>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="MarketHub Visual" />
      </div>
    </section>
  );
}

// Features Section Component
function FeaturesSection() {
  const [flippedCards, setFlippedCards] = useState(features.map(() => false));

  useEffect(() => {
    loadLordIcon();
  }, []);

  const handleFlip = (index) => {
    setFlippedCards(prev =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  return (
    <section className="features-section">
      <h2 className="features-title">
        Why Choose <span>Market Hub ?</span>
      </h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card-container" key={index}>
            <motion.div
              className={`feature-card ${flippedCards[index] ? 'flipped' : ''}`}
              animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-card-front">
                <div className="feature-icon">
                  <lord-icon
                    src={feature.icon}
                    trigger="loop"
                    delay="100"
                    style={{ width: '80px', height: '80px' }}
                  />
                </div>
                <div className="feature-body">
                  <p>{feature.title}</p>
                  <button
                    className="know-more"
                    onClick={() => handleFlip(index)}
                  >
                    Know More
                  </button>
                </div>
              </div>

              <div className="feature-card-back">
                <div className="back-content">
                  <p>{feature.backContent}</p>
                  <button
                    className="know-more back-button"
                    onClick={() => handleFlip(index)}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

// User Choice Section Component
function UserChoiceSection() {
  return (
    <section className="user-choice">
      <div className="user-card">
        <img src={buyerImg} alt="Buyer Illustration" />
        <h3>Continue as a Buyer</h3>
        <Link to="/buyer-login">
          <button className="continue-btn">Continue</button>
        </Link>
        <p className="register-text">
          Not registered? <a href="#">click here</a>
        </p>
      </div>
      
      <div className="divider"></div>
      
      <div className="user-card">
        <img src={sellerImg} alt="Seller Illustration" />
        <h3>Continue as a Seller</h3>
        <Link to="/seller-login">
          <button className="continue-btn">Continue</button>
        </Link>
        <p className="register-text">
          Not registered? <a href="#">click here</a>
        </p>
      </div>
    </section>
  );
}



// How it works Section
const steps = [
  {
    icon: "👤",
    title: "Register",
    desc: "Create an account in minutes to start selling or buying.",
    bgColor: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
    shadowColor: "rgba(255, 107, 107, 0.4)"
  },
  {
    icon: "🔍",
    title: "List & Discover", 
    desc: "List your products or explore curated listings effortlessly.",
    bgColor: "linear-gradient(135deg, #4ECDC4, #44A08D)",
    shadowColor: "rgba(78, 205, 196, 0.4)"
  },
  {
    icon: "🛟",
    title: "Get Support",
    desc: "24/7 customer assistance to help you at every step.",
    bgColor: "linear-gradient(135deg, #A8E6CF, #7FDBDA)",
    shadowColor: "rgba(168, 230, 207, 0.4)"
  }
];

function HowItWorksSection() {
  return (
    <>
      <section className="how-it-works">
        <motion.div 
          className="how-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="how-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How <span className="underline">Market<span className="blue">Hub</span></span> Works?
          </motion.h2>
          
          <motion.p
            className="how-subtitle"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            See how it is easy to connect and trade
          </motion.p>
          
          {steps.map((step, i) => (
            <motion.div
              className="how-step"
              variants={stepVariants}
              key={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{ '--shadow-color': step.shadowColor }}
            >
              <div 
                className="how-icon colorful-icon"
                style={{
                  background: step.bgColor,
                  boxShadow: `0 8px 20px ${step.shadowColor}`
                }}
              >
                <span className="icon-emoji">{step.icon}</span>
              </div>
              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="how-right"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
        >
          <motion.img 
            src={howItWorksImg}
            alt="How MarketHub Works"
            className="how-image"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </section>
      
      {/* Still Questions Section */}
      <section className="still-questions">
        <motion.div
          className="questions-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Still questions?</h3>
          <motion.button 
            className="demo-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log('Request Demo clicked')}
          >
            Request a Demo. ↗
          </motion.button>
        </motion.div>
        <div className="footer-cta">
          <h3>Boost your Sales by Joining Us Today!</h3>
          <ul>
            <li><FaCheckCircle className="check-icon" /> Get discount</li>
            <li><FaCheckCircle className="check-icon" /> Connect with us</li>
          </ul>
          <div className="footer-buttons">
            <button className="btn-dark">Get in touch</button>
            <button className="btn-primary">Book a call</button>
          </div>
        </div>
      </section>
    </>
  );
}






// Seller Login Component
function SellerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setErrors({});
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Seller login attempted with:', { email, password });
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (platform) => {
    console.log(`${platform} login clicked for seller`);
  };

  return (
    <div className="seller-login-container">
      <div className="login-left-section">
        <Link to="/" className="back-btn">
          ← Back
        </Link>
        <div className="market-hub-section">
          <h1>Market Hub</h1>
          <div className="login-illustration">
            <img src={loginimage} alt="Person with business interface illustration" />
          </div>
        </div>
      </div>

      <div className="login-right-section">
        <div className="login-header">
          <Link to="/buyer-login" className="buyer-login-link">
            Buyer Log-in
          </Link>
        </div>

        <div className="login-form-container">
          <h2>Seller Login</h2>
          <p>Enter your login details below</p>

          {errors.general && (
            <div className="error-message general-error">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? 'error' : ''}
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? 'error' : ''}
                required
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <Link to="/forgot-password" className="forgot-password">
              forgot password ?
            </Link>

            <button 
              type="submit" 
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? '' : 'Login'}
            </button>
          </form>

          <div className="social-login">
            <div className="divider-line">
              <span>Login Via</span>
            </div>
            <div className="social-buttons">
              <button 
                className="social-btn google"
                onClick={() => handleSocialLogin('Google')}
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button 
                className="social-btn facebook"
                onClick={() => handleSocialLogin('Facebook')}
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              
              <button                  
                className="social-btn twitter"                 
                onClick={() => handleSocialLogin('X')}                 
                type="button"               
                >                 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">                   
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>                 
                </svg>               
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Buyer Login Component
function BuyerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setErrors({});
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login attempted with:', { email, password });
    } catch (error) {
      console.error('Login failed:', error);
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (platform) => {
    console.log(`${platform} login clicked`);
  };

  return (
    <div className="buyer-login-container">
      <div className="login-left-section">
        <Link to="/" className="back-btn">
          ← Back
        </Link>
        <div className="market-hub-section">
          <h1>Market Hub</h1>
          <div className="login-illustration">
            <img src={loginimage} alt="Person with shopping interface illustration" />
          </div>
        </div>
      </div>

      <div className="login-right-section">
        <div className="login-header">
          <Link to="/seller-login" className="seller-login-link">
            Seller Log-in
          </Link>
        </div>

        <div className="login-form-container">
          <h2>Buyer Login</h2>
          <p>Enter your login details below</p>

          {errors.general && (
            <div className="error-message general-error">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? 'error' : ''}
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? 'error' : ''}
                required
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <Link to="/forgot-password" className="forgot-password">
              forgot password ?
            </Link>

            <button 
              type="submit" 
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? '' : 'Login'}
            </button>
          </form>

          <div className="social-login">
            <div className="divider-line">
              <span>Login Via</span>
            </div>
            <div className="social-buttons">
              <button 
                className="social-btn google"
                onClick={() => handleSocialLogin('Google')}
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button 
                className="social-btn facebook"
                onClick={() => handleSocialLogin('Facebook')}
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              
              <button                  
                className="social-btn twitter"                 
                onClick={() => handleSocialLogin('X')}                 
                type="button"               
                >                 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">                   
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>                 
                </svg>               
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// MAIN HOMEPAGE COMPONENT - This combines all sections
function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <FeaturesSection />
      <UserChoiceSection />
      <HowItWorksSection />
      {/* <UserChoiceSection /> */}
    </div>
  );
}

// Export individual components and main HomePage
export {
  HeroSection,
  FeaturesSection,
  UserChoiceSection,
  SellerLogin,
  BuyerLogin,
  HowItWorksSection
};

// Default export is now the combined HomePage component
export default HomePage;