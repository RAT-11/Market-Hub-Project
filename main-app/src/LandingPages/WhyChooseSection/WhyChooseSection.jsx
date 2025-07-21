


// import React, { useState } from 'react';
// import './FeaturesSection.css';
// import { BiMessageRounded } from 'react-icons/bi';
// import { MdOutlineAnalytics } from 'react-icons/md';
// import { FaMoneyBillWave } from 'react-icons/fa';

// function FeaturesSection() {
//   const [flippedCards, setFlippedCards] = useState([false, false, false]);

//   const features = [
//     {
//       title: "Instant Messaging System",
//       icon: <BiMessageRounded size={40} />,
//       backContent: "Connect directly with Buyers & Sellers in Real Time for seamless Communication"
//     },
//     {
//       title: "Analytics Dashboard",
//       icon: <MdOutlineAnalytics size={40} />,
//       backContent: "Track Performance, Views and Conversions in in-built-n Interactive Dashboards"
//     },
//     {
//       title: "Zero Commission on first 3 listing",
//       icon: <FaMoneyBillWave size={40} />,
//       backContent: "List your first 3 Products absolutely free-risk-free Start for your Business"
//     },
//   ];

//   const handleFlip = (index) => {
//     setFlippedCards(prev => 
//       prev.map((flipped, i) => i === index ? !flipped : flipped)
//     );
//   };

//   return (
//     <section className="features-section">
//       <h2 className="features-title">
//         Why Choose <span>Market Hub ?</span>
//       </h2>

//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div className="feature-card-container" key={index}>
//             <div className={`feature-card ${flippedCards[index] ? 'flipped' : ''}`}>
//               {/* Front side */}
//               <div className="feature-card-front">
//                 <div className="feature-icon">{feature.icon}</div>
//                 <div className="feature-body">
//                   <p>{feature.title}</p>
//                   <button 
//                     className="know-more"
//                     onClick={() => handleFlip(index)}
//                   >
//                     Know More
//                   </button>
//                 </div>
//               </div>
              
//               {/* Back side */}
//               <div className="feature-card-back">
//                 <div className="back-content">
//                   <p>{feature.backContent}</p>
//                   <button 
//                     className="know-more back-button"
//                     onClick={() => handleFlip(index)}
//                   >
//                     Go Back
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturesSection;
// -------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
// ##Rajat's code @nd original
// import React, { useState } from 'react';
// import './FeaturesSection.css';

// function FeaturesSection() {
//   const [flippedCards, setFlippedCards] = useState([false, false, false]);

//   const features = [
//     {
//       title: "Instant Messaging System",
//       description: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//       icon: (
//         <div className="animated-icon messaging-icon">
//           <div className="message-bubble">
//             <div className="message-line"></div>
//             <div className="message-line short"></div>
//           </div>
//           <div className="chat-dots">
//             <div className="dot"></div>
//             <div className="dot"></div>
//             <div className="dot"></div>
//           </div>
//         </div>
//       ),
//       backContent: "Our Instant Messaging System offers encrypted, real-time communication backed by intelligent user analytics."
//     },
//     {
//       title: "Real-Time Insights",
//       description: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//       icon: (
//         <div className="animated-icon analytics-icon">
//           <div className="chart-container">
//             <div className="bar bar1"></div>
//             <div className="bar bar2"></div>
//             <div className="bar bar3"></div>
//             <div className="bar bar4"></div>
//           </div>
//           <div className="trend-line"></div>
//         </div>
//       ),
//       backContent: "Get detailed analytics on your products, customers, and sales. Make smarter decisions with real-time data and easy-to-read dashboards."
//     },
//     {
//       title: "24/7 Support",
//       description: "Get help whenever you need it from our dedicated support team, day or night.",
//       icon: (
//         <div className="animated-icon support-icon">
//           <div className="support-person">
//             <div className="person-head"></div>
//             <div className="person-body"></div>
//             <div className="headset"></div>
//           </div>
//           <div className="support-badge">24/7</div>
//         </div>
//       ),
//       backContent: "Our support team is available around the clock to assist you with any issues. Chat, email, or call us anytime for fast solutions."
//     },
//   ];

//   const handleFlip = (index) => {
//     setFlippedCards(prev => 
//       prev.map((flipped, i) => i === index ? !flipped : flipped)
//     );
//   };

//   return (
//     <section className="features-section">
//       <h2 className="features-title">
//         Why Choose <span>MarketHub</span> ?
//       </h2>

//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div className="feature-card-container" key={index}>
//             <div className={`feature-card ${flippedCards[index] ? 'flipped' : ''}`}>
//               {/* Front side */}
//               <div className="feature-card-front">
//                 <div className="feature-icon">{feature.icon}</div>
//                 <div className="feature-content">
//                   <h3 className="feature-title">{feature.title}</h3>
//                   <p className="feature-description">{feature.description}</p>
//                 </div>
//                 <button 
//                   className="know-more"
//                   onClick={() => handleFlip(index)}
//                 >
//                   Know More
//                 </button>
//               </div>
              
//               {/* Back side */}
//               <div className="feature-card-back">
//                 <div className="back-content">
//                   <h3 className="back-title">{feature.title}</h3>
//                   <p className="back-description">{feature.backContent}</p>
//                   <button 
//                     className="back-button"
//                     onClick={() => handleFlip(index)}
//                   >
//                     Back
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturesSection;
// ---------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './FeaturesSection.css';

// const loadLordIcon = () => {
//   const script = document.createElement("script");
//   script.src = "https://cdn.lordicon.com/lordicon.js";
//   script.async = true;
//   document.body.appendChild(script);
// };

// // Card data
// const cardData = [
//   {
//     icon: "https://cdn.lordicon.com/fmdwwfgs.json", 
//     title: "Instant Messaging System",
//     short: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//     long: "Our Instant Messaging System offers encrypted, real-time communication backed by intelligent user analytics."
//   },
//   {
//     icon: "https://cdn.lordicon.com/xowcggal.json",
//     title: "Real-Time Insights",
//     short: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//     long: "Get detailed analytics on your products, customers, and sales. Make smarter decisions with real-time data and easy-to-read dashboards."
//   },
//   {
//     icon: "https://cdn.lordicon.com/abhwievu.json", 
//     title: "24/7 Support",
//     short: "Get help whenever you need it from our dedicated support team, day or night.",
//     long: "Our support team is available around the clock to assist you with any issues. Chat, email, or call us anytime for fast solutions."
//   }
// ];

// // Card Component
// const FeatureCard = ({ icon, title, short, long }) => {
//   const [flipped, setFlipped] = useState(false);

//   useEffect(() => {
//     loadLordIcon();
//   }, []);

//   return (
//     <div className={`feature-card${flipped ? ' flipped' : ''}`}>
//       <motion.div
//         className="feature-card-inner"
//         animate={{ rotateY: flipped ? 180 : 0 }}
//         transition={{ duration: 0.3, type: "spring" }}
//       >
//         <div className="feature-card-front">
//           <div className="feature-icon">
//             <lord-icon
//               src={icon}
//               trigger="loop"
//               delay="100"
//               style={{ width: '100px', height: '100px' }}
//             ></lord-icon>
//           </div>
//           <h3>{title}</h3>
//           <p>{short}</p>
//           <button className="feature-card-btn" onClick={() => setFlipped(true)}>Know More</button>
//         </div>
//         <div className="feature-card-back">
//           <h3>{title}</h3>
//           <p>{long}</p>
//           <button className="feature-card-btn" onClick={() => setFlipped(false)}>Back</button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Section Component
// const FeaturesSection = () => (
//   <section className="features-section">
//     <h2 className="features-title">
//       Why Choose <span style={{ background: '#e1eaff' }}>MarketHub ?</span>
//     </h2>
//     <div className="features-cards">
//       {cardData.map(card => (
//         <FeatureCard key={card.title} {...card} />
//       ))}
//     </div>
//   </section>
// );

// export default FeaturesSection;
// -------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './FeaturesSection.css';

// const loadLordIcon = () => {
//   const script = document.createElement("script");
//   script.src = "https://cdn.lordicon.com/lordicon.js";
//   script.async = true;
//   document.body.appendChild(script);
// };

// // Card data
// const cardData = [
//   {
//     icon: "https://cdn.lordicon.com/fmdwwfgs.json",
//     title: "Instant Messaging System",
//     short: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//     long: "Our Instant Messaging System offers encrypted, real-time communication backed by intelligent user analytics.",
//     animationType: "bounce"
//   },
//   {
//     icon: "https://cdn.lordicon.com/xowcggal.json",
//     title: "Real-Time Insights",
//     short: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//     long: "Get detailed analytics on your products, customers, and sales. Make smarter decisions with real-time data and easy-to-read dashboards.",
//     animationType: "float"
//   },
//   {
//     icon: "https://cdn.lordicon.com/abhwievu.json",
//     title: "24/7 Support",
//     short: "Get help whenever you need it from our dedicated support team, day or night.",
//     long: "Our support team is available around the clock to assist you with any issues. Chat, email, or call us anytime for fast solutions.",
//     animationType: "pulse"
//   }
// ];

// // Animation variants for Framer Motion
// const iconVariants = {
//   bounce: {
//     y: [0, -15, 0],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   },
//   float: {
//     y: [0, -10, 0],
//     x: [0, 5, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   },
//   pulse: {
//     scale: [1, 1.1, 1],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   },
//   wiggle: {
//     rotate: [0, 5, -5, 0],
//     transition: {
//       duration: 1.5,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.9
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   },
//   hover: {
//     y: -10,
//     scale: 1.02,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut"
//     }
//   }
// };

// const flipVariants = {
//   front: {
//     rotateY: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut"
//     }
//   },
//   back: {
//     rotateY: 180,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut"
//     }
//   }
// };

// // Card Component
// const FeatureCard = ({ icon, title, short, long, animationType, index }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     loadLordIcon();
//   }, []);

//   return (
//     <motion.div
//       className="feature-card-container"
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       viewport={{ once: true, amount: 0.3 }}
//       custom={index}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <div className={`feature-card${flipped ? ' flipped' : ''}`}>
//         <motion.div
//           className="feature-card-inner"
//           variants={flipVariants}
//           animate={flipped ? "back" : "front"}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <div className="feature-card-front">
//             <motion.div
//               className="feature-icon motion-icon-container"
//               variants={iconVariants}
//               animate={!isHovered ? animationType : ""}
//               whileHover={{
//                 scale: 1.2,
//                 rotate: 360,
//                 transition: { duration: 0.8 }
//               }}
//             >
//               <motion.div
//                 className="motion-icon"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <lord-icon
//                   src={icon}
//                   trigger="hover"
//                   delay="100"
//                   style={{ width: '80px', height: '80px' }}
//                 ></lord-icon>
//               </motion.div>
              
//               {/* Floating particles effect */}
//               <div className="icon-particles">
//                 <motion.div
//                   className="particle"
//                   animate={{
//                     y: [0, -20, 0],
//                     opacity: [0, 1, 0]
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: 0
//                   }}
//                   style={{ top: '20%', left: '20%' }}
//                 />
//                 <motion.div
//                   className="particle"
//                   animate={{
//                     y: [0, -25, 0],
//                     opacity: [0, 1, 0]
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     delay: 0.5
//                   }}
//                   style={{ top: '80%', left: '80%' }}
//                 />
//                 <motion.div
//                   className="particle"
//                   animate={{
//                     y: [0, -15, 0],
//                     opacity: [0, 1, 0]
//                   }}
//                   transition={{
//                     duration: 1.8,
//                     repeat: Infinity,
//                     delay: 1
//                   }}
//                   style={{ top: '60%', left: '20%' }}
//                 />
//               </div>
//             </motion.div>
            
//             <div className="feature-body">
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//               >
//                 {title}
//               </motion.h3>
              
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 + index * 0.1 }}
//               >
//                 {short}
//               </motion.p>
              
//               <motion.button
//                 className="know-more"
//                 onClick={() => setFlipped(true)}
//                 whileHover={{ 
//                   scale: 1.05,
//                   backgroundColor: "#ffffff",
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1 }}
//               >
//                 Know More
//               </motion.button>
//             </div>
//           </div>
          
//           <div className="feature-card-back">
//             <div className="back-content">
//               <motion.h3
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: flipped ? 1 : 0, scale: flipped ? 1 : 0.8 }}
//                 transition={{ delay: flipped ? 0.3 : 0 }}
//               >
//                 {title}
//               </motion.h3>
              
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 20 }}
//                 transition={{ delay: flipped ? 0.4 : 0 }}
//               >
//                 {long}
//               </motion.p>
              
//               <motion.button
//                 className="know-more back-button"
//                 onClick={() => setFlipped(false)}
//                 whileHover={{ 
//                   scale: 1.05,
//                   backgroundColor: "#ffffff",
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 20 }}
//                 transition={{ delay: flipped ? 0.5 : 0 }}
//               >
//                 Back
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // Section Component
// const FeaturesSection = () => {
//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   return (
//     <section className="features-section">
//       <motion.h2
//         className="features-title"
//         variants={titleVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         Why Choose <span>MarketHub ?</span>
//       </motion.h2>
      
//       <motion.div
//         className="features-grid"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         {cardData.map((card, index) => (
//           <FeatureCard 
//             key={card.title} 
//             {...card} 
//             index={index}
//           />
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default FeaturesSection;
// --------------------------------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './FeaturesSection.css';

// // Card data
// const cardData = [
//   {
//     icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
//     title: "Instant Messaging System",
//     short: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//     long: "Our Instant Messaging System offers encrypted, real-time communication backed by intelligent user analytics.",
//     animationType: "bounce"
//   },
//   {
//     icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
//     title: "Real-Time Insights",
//     short: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//     long: "Get detailed analytics on your products, customers, and sales. Make smarter decisions with real-time data and easy-to-read dashboards.",
//     animationType: "float"
//   },
//   {
//     icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
//     title: "24/7 Support",
//     short: "Get help whenever you need it from our dedicated support team, day or night.",
//     long: "Our support team is available around the clock to assist you with any issues. Chat, email, or call us anytime for fast solutions.",
//     animationType: "pulse"
//   }
// ];

// // Animation variants
// const iconVariants = {
//   bounce: {
//     y: [0, -15, 0],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   },
//   float: {
//     y: [0, -10, 0],
//     x: [0, 5, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   },
//   pulse: {
//     scale: [1, 1.1, 1],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.9
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   },
//   hover: {
//     y: -10,
//     scale: 1.02,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut"
//     }
//   }
// };

// const flipVariants = {
//   front: {
//     rotateY: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut"
//     }
//   },
//   back: {
//     rotateY: 180,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut"
//     }
//   }
// };

// const FeatureCard = ({ icon, title, short, long, animationType, index }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       className="feature-card-container"
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       viewport={{ once: true, amount: 0.3 }}
//       custom={index}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <div className={`feature-card${flipped ? ' flipped' : ''}`}>
//         <motion.div
//           className="feature-card-inner"
//           variants={flipVariants}
//           animate={flipped ? "back" : "front"}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <div className="feature-card-front">
//             <motion.div
//               className="feature-icon motion-icon-container"
//               variants={iconVariants}
//               animate={!isHovered ? animationType : ""}
//               whileHover={{
//                 scale: 1.2,
//                 rotate: 360,
//                 transition: { duration: 0.8 }
//               }}
//             >
//               <motion.img
//                 src={icon}
//                 alt="Feature Icon"
//                 className="motion-icon"
//                 style={{ width: '80px', height: '80px' }}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>

//             <div className="feature-body">
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//               >
//                 {title}
//               </motion.h3>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 + index * 0.1 }}
//               >
//                 {short}
//               </motion.p>

//               <motion.button
//                 className="know-more"
//                 onClick={() => setFlipped(true)}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "#ffffff",
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + index * 0.1 }}
//               >
//                 Know More
//               </motion.button>
//             </div>
//           </div>

//           <div className="feature-card-back">
//             <div className="back-content">
//               <motion.h3
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: flipped ? 1 : 0, scale: flipped ? 1 : 0.8 }}
//                 transition={{ delay: flipped ? 0.3 : 0 }}
//               >
//                 {title}
//               </motion.h3>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 20 }}
//                 transition={{ delay: flipped ? 0.4 : 0 }}
//               >
//                 {long}
//               </motion.p>

//               <motion.button
//                 className="know-more back-button"
//                 onClick={() => setFlipped(false)}
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "#ffffff",
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 20 }}
//                 transition={{ delay: flipped ? 0.5 : 0 }}
//               >
//                 Back
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const FeaturesSection = () => {
//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   return (
//     <section className="features-section">
//       <motion.h2
//         className="features-title"
//         variants={titleVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         Why Choose <span>MarketHub ?</span>
//       </motion.h2>

//       <motion.div
//         className="features-grid"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         {cardData.map((card, index) => (
//           <FeatureCard
//             key={card.title}
//             {...card}
//             index={index}
//           />
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default FeaturesSection;
// --------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import './FeaturesSection.css';

// const cardData = [
//   {
//     icon: "https://cdn-icons-png.flaticon.com/512/725/725643.png",
//     title: "Instant Messaging System",
//     short: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//     long: "Our Instant Messaging System offers encrypted, real-time communication backed by intelligent user analytics."
//   },
//   {
//     icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
//     title: "Real-Time Insights",
//     short: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//     long: "Get detailed analytics on your products, customers, and sales. Make smarter decisions with real-time data."
//   },
//   {
//     icon: "https://cdn-icons-png.flaticon.com/512/1828/1828946.png",
//     title: "24/7 Support",
//     short: "Get help whenever you need it from our dedicated support team, day or night.",
//     long: "Our support team is available around the clock to assist you. Chat, email, or call us anytime."
//   }
// ];

// const FeatureCard = ({ icon, title, short, long }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div className={`feature-card-container ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
//       <div className="feature-card">
//         <div className="feature-card-front">
//           <div className="feature-icon">
//             <img src={icon} alt={title} />
//           </div>
//           <div className="feature-body">
//             <h3>{title}</h3>
//             <p>{short}</p>
//             <button className="know-more">Know More</button>
//           </div>
//         </div>
//         <div className="feature-card-back">
//           <div className="back-content">
//             <h3>{title}</h3>
//             <p>{long}</p>
//             <button className="know-more">Back</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeaturesSection = () => {
//   return (
//     <section className="features-section">
//       <h2 className="features-title">Why Choose <span>MarketHub ?</span></h2>
//       <div className="features-grid">
//         {cardData.map((card, index) => (
//           <FeatureCard key={index} {...card} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


// -------------------------------------------------------------------------------------------


// // src/components/WhyChoose.jsx
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import '../Styles/WhyChoose.css'; // path updated for your project

// const loadLordIcon = () => {
//   const script = document.createElement("script");
//   script.src = "https://cdn.lordicon.com/lordicon.js";
//   script.async = true;
//   document.body.appendChild(script);
// };

// const cardData = [
//   {
//     icon: "https://cdn.lordicon.com/fmdwwfgs.json",
//     title: "Instant Messaging System",
//     short: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//     long: "Our Instant Messaging System offers encrypted, real-time communication backed by intelligent user analytics."
//   },
//   {
//     icon: "https://cdn.lordicon.com/xowcggal.json",
//     title: "Real-Time Insights",
//     short: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//     long: "Get detailed analytics on your products, customers, and sales. Make smarter decisions with real-time data and dashboards."
//   },
//   {
//     icon: "https://cdn.lordicon.com/abhwievu.json",
//     title: "24/7 Support",
//     short: "Get help whenever you need it from our dedicated support team, day or night.",
//     long: "Our support team is available around the clock to assist you with any issues. Chat, email, or call us anytime for fast solutions."
//   }
// ];

// const WhyCard = ({ icon, title, short, long }) => {
//   const [flipped, setFlipped] = useState(false);

//   useEffect(() => {
//     loadLordIcon();
//   }, []);

//   return (
//     <div className={`why-card${flipped ? ' flipped' : ''}`}>
//       <motion.div
//         className="why-card-inner"
//         animate={{ rotateY: flipped ? 180 : 0 }}
//         transition={{ duration: 0.3, type: "spring" }}
//       >
//         <div className="why-card-front">
//           <div className="why-icon">
//             <lord-icon src={icon} trigger="loop" delay="100" style={{ width: '100px', height: '100px' }} />
//           </div>
//           <h3>{title}</h3>
//           <p>{short}</p>
//           <button className="why-card-btn" onClick={() => setFlipped(true)}>Know More</button>
//         </div>
//         <div className="why-card-back">
//           <h3>{title}</h3>
//           <p>{long}</p>
//           <button className="why-card-btn" onClick={() => setFlipped(false)}>Back</button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const WhyChoose = () => (
//   <section className="why-market-hub">
//     <h2 className="why-title">
//       Why Choose <span style={{ background: '#e1eaff' }}>MarketHub ?</span>
//     </h2>
//     <div className="why-cards">
//       {cardData.map(card => (
//         <WhyCard key={card.title} {...card} />
//       ))}
//     </div>
//   </section>
// );

// export default WhyChoose;

// -------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------
// Perfect one---revert to this if something goes wrong 
// import React, { useState, useEffect } from 'react';
// import './WhyChooseSection.css';
// import { motion } from 'framer-motion';
// import { FaWatchmanMonitoring } from 'react-icons/fa'

// // Load Lordicon script
// const loadLordIcon = () => {
//   const script = document.createElement("script");
//   script.src = "https://cdn.lordicon.com/lordicon.js";
//   script.async = true;
//   document.body.appendChild(script);
// };

// // Feature data
// const features = [
//   {
//     icon: "https://cdn.lordicon.com/fmdwwfgs.json",
//     title: "Instant Messaging System",
//     backContent: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//   },
//   {
//     icon: "https://cdn.lordicon.com/xowcggal.json",
//     title: "Real-Time Insights",
//     backContent: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//   },
//   {
//     icon: "https://cdn.lordicon.com/abhwievu.json",
//     title: "24/7 Support",
//     backContent: "Get help whenever you need it from our dedicated support team, day or night.",
//   }
// ];

// function FeaturesSection() {
//   const [flippedCards, setFlippedCards] = useState([false, false, false]);

//   useEffect(() => {
//     loadLordIcon();
//   }, []);

//   const handleFlip = (index) => {
//     setFlippedCards(prev =>
//       prev.map((flipped, i) => (i === index ? !flipped : flipped))
//     );
//   };

//   return (
//     <section className="features-section">
//       <h2 className="features-title">
//         Why Choose <span>Market Hub ?</span>
//       </h2>

//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div className="feature-card-container" key={index}>
//             <motion.div
//               className={`feature-card ${flippedCards[index] ? 'flipped' : ''}`}
//               animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* Front Side */}
//               <div className="feature-card-front">
//                 <div className="feature-icon">
//                   <lord-icon
//                     src={feature.icon}
//                     trigger="loop"
//                     delay="100"
//                     style={{ width: '80px', height: '80px' }}
//                   />
//                 </div>
//                 <div className="feature-body">
//                   <p>{feature.title}</p>
//                   <button
//                     className="know-more"
//                     onClick={() => handleFlip(index)}
//                   >
//                     Know More
//                   </button>
//                 </div>
//               </div>

//               {/* Back Side */}
//               <div className="feature-card-back">
//                 <div className="back-content">
//                   <p>{feature.backContent}</p>
//                   <button
//                     className="know-more back-button"
//                     onClick={() => handleFlip(index)}
//                   >
//                     Go Back
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturesSection;


// ----------------------------------------------------------------------------------------












// The REAL ONE

// import React, { useState, useEffect } from 'react';
// import './WhyChooseSection.css';
// import { motion } from 'framer-motion';

// // Load Lordicon script
// const loadLordIcon = () => {
//   const script = document.createElement("script");
//   script.src = "https://cdn.lordicon.com/lordicon.js";
//   script.async = true;
//   document.body.appendChild(script);
// };

// // Feature data
// const features = [
//   {
//     icon: "https://cdn.lordicon.com/fmdwwfgs.json",
//     title: "Instant Messaging System",
//     backContent: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
//   },
//   {
//     icon: "https://cdn.lordicon.com/xowcggal.json",
//     title: "Real-Time Insights",
//     backContent: "Track your sales, inventory, and customer trends with powerful analytics tools.",
//   },
//   {
//     icon: "https://cdn.lordicon.com/abhwievu.json",
//     title: "24/7 Support",
//     backContent: "Get help whenever you need it from our dedicated support team, day or night.",
//   },
//   {
//     // New fourth feature with an icon similar to the others
//     icon: "https://cdn.lordicon.com/jvucoldz.json", // Example: a globe/network icon
//     title: "Global Reach",
//     backContent: "Expand your business globally with our platform designed for international markets and diverse audiences.",
//   }
// ];

// function FeaturesSection() { // Renamed from WhyChooseSection for consistency with previous context
//   // Initialize flippedCards state to match the number of features dynamically
//   const [flippedCards, setFlippedCards] = useState(features.map(() => false));

//   useEffect(() => {
//     loadLordIcon();
//   }, []);

//   const handleFlip = (index) => {
//     setFlippedCards(prev =>
//       prev.map((flipped, i) => (i === index ? !flipped : flipped))
//     );
//   };

//   return (
//     <section className="features-section">
//       <h2 className="features-title">
//         Why Choose <span>Market Hub ?</span>
//       </h2>

//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div className="feature-card-container" key={index}>
//             <motion.div
//               className={`feature-card ${flippedCards[index] ? 'flipped' : ''}`}
//               animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* Front Side */}
//               <div className="feature-card-front">
//                 <div className="feature-icon">
//                   <lord-icon
//                     src={feature.icon}
//                     trigger="loop"
//                     delay="100"
//                     style={{ width: '80px', height: '80px' }}
//                     // No 'colors' attribute here to match the single-color style of existing icons
//                   />
//                 </div>
//                 <div className="feature-body">
//                   <p>{feature.title}</p>
//                   <button
//                     className="know-more"
//                     onClick={() => handleFlip(index)}
//                   >
//                     Know More
//                   </button>
//                 </div>
//               </div>

//               {/* Back Side */}
//               <div className="feature-card-back">
//                 <div className="back-content">
//                   <p>{feature.backContent}</p>
//                   <button
//                     className="know-more back-button"
//                     onClick={() => handleFlip(index)}
//                   >
//                     Go Back
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturesSection;
