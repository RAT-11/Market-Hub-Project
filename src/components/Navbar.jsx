import React from 'react';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Market<span>Hub</span></div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Pricing</a>
      </nav>
      <div className="nav-actions">
        <select className="lang-select">
          <option>En</option>
        </select>
        <button className="call-btn">📞</button>
        <button className="cta-btn">→ Get in touch</button>
      </div>
    </header>
  );
}

export default Navbar;
