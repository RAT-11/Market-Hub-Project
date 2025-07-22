

import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Market<span>Hub</span></div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/pricing">Pricing</Link>
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
