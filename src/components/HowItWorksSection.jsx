import React from 'react';
import './HowItWorksSection.css';
import { FiEdit, FiSearch, FiHeart } from 'react-icons/fi';
import howItWorksImg from '../assets/how-it-works.png';

function HowItWorksSection() {
  return (
    <section className="how-it-works">
      <div className="how-left">
        <h2>How MarketHub Works</h2>
        <p>See how it is easy to connect and trade</p>

        <div className="how-step">
          <FiEdit className="how-icon" />
          <div>
            <h4>Register</h4>
            <p>Sellers and buyers sign up in a seconds.</p>
          </div>
        </div>

        <div className="how-step">
          <FiSearch className="how-icon" />
          <div>
            <h4>List & discover</h4>
            <p>Sellers list products , buyers explores.</p>
          </div>
        </div>

        <div className="how-step">
          <FiHeart className="how-icon" />
          <div>
            <h4>Get Support</h4>
            <p>Reliable customers help when you need it.</p>
          </div>
        </div>
      </div>

      <div className="how-right">
        <img src={howItWorksImg} alt="How MarketHub Works" />
      </div>
    </section>
  );
}

export default HowItWorksSection;
