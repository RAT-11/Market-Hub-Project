




import React from 'react';
import heroImg from '../assets/hero-image.png'; // 👈 your image goes here

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        {/* Badge Component */}
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

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100K+</div>
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

export default HeroSection;