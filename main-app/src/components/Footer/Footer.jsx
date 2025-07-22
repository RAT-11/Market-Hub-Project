
import React from 'react';
import './Footer.css';
import { FaArrowUp, FaCheckCircle, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">Market Hub</div>
        <p className="footer-quote">" Empowering sellers. Simplifying commerce. "</p>
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>

      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h4>The good</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/story">Our Story</a></li>
              <li><a href="/why-markethub">Why Markethub ?</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4>The Boring</h4>
            <ul>
              <li><a href="/terms">Terms of use</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4>The Cool</h4>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" /> Facebook
              </a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="social-icon" /> Youtube
              </a></li>
            </ul>
          </div>
        </div>

        {/* <div className="footer-cta">
          <h3>Boost your Sales by Joining Us Today !</h3>
          <ul>
            <li><FaCheckCircle className="check-icon" /> Get discount</li>
            <li><FaCheckCircle className="check-icon" /> Connect with us</li>
          </ul>
          <div className="footer-buttons">
            <button className="btn-dark">Get in touch</button>
            <button className="btn-primary">Book a call</button>
          </div>
        </div>*/}
      </div>

      <div className="footer-bottom">
        <p>&&@2025 Market Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;