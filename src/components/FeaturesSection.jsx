


import React, { useState } from 'react';
import './FeaturesSection.css';
import { BiMessageRounded } from 'react-icons/bi';
import { MdOutlineAnalytics } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';

function FeaturesSection() {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const features = [
    {
      title: "Instant Messaging System",
      icon: <BiMessageRounded size={40} />,
      backContent: "Connect directly with Buyers & Sellers in Real Time for seamless Communication"
    },
    {
      title: "Analytics Dashboard",
      icon: <MdOutlineAnalytics size={40} />,
      backContent: "Track Performance, Views and Conversions in in-built-n Interactive Dashboards"
    },
    {
      title: "Zero Commission on first 3 listing",
      icon: <FaMoneyBillWave size={40} />,
      backContent: "List your first 3 Products absolutely free-risk-free Start for your Business"
    },
  ];

  const handleFlip = (index) => {
    setFlippedCards(prev => 
      prev.map((flipped, i) => i === index ? !flipped : flipped)
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
            <div className={`feature-card ${flippedCards[index] ? 'flipped' : ''}`}>
              {/* Front side */}
              <div className="feature-card-front">
                <div className="feature-icon">{feature.icon}</div>
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
              
              {/* Back side */}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;