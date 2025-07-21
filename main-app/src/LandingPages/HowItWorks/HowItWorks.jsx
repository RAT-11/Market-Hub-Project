// import React from 'react';
// import './HowItWorksSection.css';
// import { FiEdit, FiSearch, FiHeart } from 'react-icons/fi';
// import howItWorksImg from '../assets/how-it-works.png';

// function HowItWorksSection() {
//   return (
//     <section className="how-it-works">
//       <div className="how-left">
//         <h2>How MarketHub Works</h2>
//         <p>See how it is easy to connect and trade</p>

//         <div className="how-step">
//           <FiEdit className="how-icon" />
//           <div>
//             <h4>Register</h4>
//             <p>Sellers and buyers sign up in a seconds.</p>
//           </div>
//         </div>

//         <div className="how-step">
//           <FiSearch className="how-icon" />
//           <div>
//             <h4>List & discover</h4>
//             <p>Sellers list products , buyers explores.</p>
//           </div>
//         </div>

//         <div className="how-step">
//           <FiHeart className="how-icon" />
//           <div>
//             <h4>Get Support</h4>
//             <p>Reliable customers help when you need it.</p>
//           </div>
//         </div>
//       </div>

//       <div className="how-right">
//         <img src={howItWorksImg} alt="How MarketHub Works" />
//       </div>
//     </section>
//   );
// }

// export default HowItWorksSection;
// --------------------------------------------------------------------------------------





// import React from 'react';
// import './HowItWorksSection.css';
// import { FiEdit, FiSearch, FiHeart } from 'react-icons/fi';
// import howItWorksImg from '../assets/how-it-works.png';
// import { motion } from 'framer-motion';

// function HowItWorksSection() {
//   // Container animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1
//       }
//     }
//   };

//   // Step animation variants
//   const stepVariants = {
//     hidden: { 
//       opacity: 0, 
//       x: -50,
//       scale: 0.8
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   // Icon animation variants
//   const iconVariants = {
//     initial: { 
//       scale: 1,
//       rotate: 0,
//       boxShadow: "0 4px 12px rgba(64, 123, 255, 0.1)"
//     },
//     hover: { 
//       scale: 1.2,
//       rotate: 360,
//       boxShadow: "0 8px 24px rgba(64, 123, 255, 0.3)",
//       background: "linear-gradient(135deg, #407BFF 0%, #2c5ce6 100%)",
//       color: "#fff",
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 20
//       }
//     },
//     tap: {
//       scale: 0.95,
//       rotate: 180
//     }
//   };

//   // Image animation variants
//   const imageVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8,
//       y: 50
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         delay: 0.3
//       }
//     }
//   };

//   // Floating animation for icons
//   const floatingVariants = {
//     animate: {
//       y: [-5, 5, -5],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section className="how-it-works">
//       <motion.div 
//         className="how-left"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           How MarketHub Works
//         </motion.h2>
        
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//         >
//           See how it is easy to connect and trade
//         </motion.p>

//         <motion.div 
//           className="how-step"
//           variants={stepVariants}
//           whileHover={{ 
//             scale: 1.05,
//             y: -8,
//             boxShadow: "0 12px 28px rgba(64, 123, 255, 0.2)"
//           }}
//           whileTap={{ scale: 0.98 }}
//         >
//           <motion.div
//             variants={floatingVariants}
//             animate="animate"
//           >
//             <motion.div
//               className="how-icon"
//               variants={iconVariants}
//               initial="initial"
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <FiEdit />
//             </motion.div>
//           </motion.div>
//           <div>
//             <motion.h4
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               Register
//             </motion.h4>
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               Sellers and buyers sign up in a seconds.
//             </motion.p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="how-step"
//           variants={stepVariants}
//           whileHover={{ 
//             scale: 1.05,
//             y: -8,
//             boxShadow: "0 12px 28px rgba(64, 123, 255, 0.2)"
//           }}
//           whileTap={{ scale: 0.98 }}
//         >
//           <motion.div
//             variants={floatingVariants}
//             animate="animate"
//             transition={{ delay: 1 }}
//           >
//             <motion.div
//               className="how-icon"
//               variants={iconVariants}
//               initial="initial"
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <FiSearch />
//             </motion.div>
//           </motion.div>
//           <div>
//             <motion.h4
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               List & discover
//             </motion.h4>
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//             >
//               Sellers list products , buyers explores.
//             </motion.p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="how-step"
//           variants={stepVariants}
//           whileHover={{ 
//             scale: 1.05,
//             y: -8,
//             boxShadow: "0 12px 28px rgba(64, 123, 255, 0.2)"
//           }}
//           whileTap={{ scale: 0.98 }}
//         >
//           <motion.div
//             variants={floatingVariants}
//             animate="animate"
//             transition={{ delay: 2 }}
//           >
//             <motion.div
//               className="how-icon"
//               variants={iconVariants}
//               initial="initial"
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <FiHeart />
//             </motion.div>
//           </motion.div>
//           <div>
//             <motion.h4
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//             >
//               Get Support
//             </motion.h4>
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.9 }}
//             >
//               Reliable customers help when you need it.
//             </motion.p>
//           </div>
//         </motion.div>
//       </motion.div>

//       <motion.div 
//         className="how-right"
//         variants={imageVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.img 
//           src={howItWorksImg} 
//           alt="How MarketHub Works"
//           whileHover={{ 
//             scale: 1.08,
//             y: -10,
//             rotateY: 5,
//             boxShadow: "0 20px 40px rgba(64, 123, 255, 0.2)"
//           }}
//           transition={{ 
//             type: "spring", 
//             stiffness: 300, 
//             damping: 20 
//           }}
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HowItWorksSection;


// -----------------------------------------------------------------------------------------


// good one
// import React from 'react';
// import './HowItWorksSection.css';
// import { FiEdit, FiSearch, FiHeart } from 'react-icons/fi';
// import howItWorksImg from '../assets/how-it-works.png';
// import { motion } from 'framer-motion';

// function HowItWorksSection() {
//   // Container animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1
//       }
//     }
//   };

//   // Step animation variants
//   const stepVariants = {
//     hidden: { 
//       opacity: 0, 
//       x: -30,
//       scale: 0.95
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 12
//       }
//     }
//   };

//   // Simple icon animation variants
//   const iconVariants = {
//     initial: { 
//       scale: 1,
//       rotate: 0
//     },
//     hover: { 
//       scale: 1.1,
//       rotate: 5,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15
//       }
//     }
//   };

//   // Image animation variants
//   const imageVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.9,
//       y: 30
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 15,
//         delay: 0.2
//       }
//     }
//   };

//   return (
//     <section className="how-it-works">
//       <motion.div 
//         className="how-left"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           How <span className='middle'>MarketHub </span>Works
//         </motion.h2>
        
//         <motion.p
//           initial={{ opacity: 0, y: -15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
//         >
//           See how it is easy to connect and trade
//         </motion.p>

//         <motion.div 
//           className="how-step"
//           variants={stepVariants}
//           whileHover={{ 
//             y: -4,
//             transition: { duration: 0.2 }
//           }}
//         >
//           <motion.div
//             className="how-icon"
//             variants={iconVariants}
//             initial="initial"
//             whileHover="hover"
//           >
//             <FiEdit />
//           </motion.div>
//           <div>
//             <motion.h4
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.3 }}
//             >
//               Register
//             </motion.h4>
//             <motion.p
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.35 }}
//             >
//               Create an account in minutes to start selling or buying.
//             </motion.p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="how-step"
//           variants={stepVariants}
//           whileHover={{ 
//             y: -4,
//             transition: { duration: 0.2 }
//           }}
//         >
//           <motion.div
//             className="how-icon"
//             variants={iconVariants}
//             initial="initial"
//             whileHover="hover"
//           >
//             <FiSearch />
//           </motion.div>
//           <div>
//             <motion.h4
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.4 }}
//             >
//               List & Discover
//             </motion.h4>
//             <motion.p
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.45 }}
//             >
//               List your products or explore curated listings effortlessly.
//             </motion.p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="how-step"
//           variants={stepVariants}
//           whileHover={{ 
//             y: -4,
//             transition: { duration: 0.2 }
//           }}
//         >
//           <motion.div
//             className="how-icon"
//             variants={iconVariants}
//             initial="initial"
//             whileHover="hover"
//           >
//             <FiHeart />
//           </motion.div>
//           <div>
//             <motion.h4
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.5 }}
//             >
//               Get Support
//             </motion.h4>
//             <motion.p
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: 0.55 }}
//             >
//               24/7 customer assistance to help you at every step.
//             </motion.p>
//           </div>
//         </motion.div>
//       </motion.div>

//       <motion.div 
//         className="how-right"
//         variants={imageVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.img 
//           src={howItWorksImg} 
//           alt="How MarketHub Works"
//           whileHover={{ 
//             y: -5,
//             transition: { duration: 0.3 }
//           }}
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HowItWorksSection;




// ------------------------------------------------------------------------------------------



// import React from 'react';
// import './HowItWorksSection.css';
// import { motion } from 'framer-motion';
// import howItWorksImg from '../assets/how-it-works.png';

// const steps = [
//   {
//     title: 'Register',
//     desc: 'Create an account in minutes to start selling or buying.',
//     icon: 'https://cdn.lordicon.com/egiwmiit.json'
//   },
//   {
//     title: 'List & Discover',
//     desc: 'List your products or explore curated listings effortlessly.',
//     icon: 'https://cdn.lordicon.com/zorvjzqh.json'
//   },
//   {
//     title: 'Get Support',
//     desc: '24/7 customer assistance to help you at every step.',
//     icon: 'https://cdn.lordicon.com/mfmkufkr.json'
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// };

// const stepVariants = {
//   hidden: { opacity: 0, x: -30, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { type: 'spring', stiffness: 80, damping: 12 }
//   }
// };

// function HowItWorksSection() {
//   return (
//     <section className="how-it-works">
//       <motion.div 
//         className="how-left"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span style={{ color: '#000' }}>Market</span>
//           <span style={{ color: '#407BFF' }}>Hub</span> Works
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//         >
//           See how it is easy to connect and trade
//         </motion.p>

//         {steps.map((step, index) => (
//           <motion.div
//             className="how-step"
//             variants={stepVariants}
//             key={index}
//             whileHover={{ y: -4, transition: { duration: 0.2 } }}
//           >
//             <div className="how-icon lordicon">
//               <lord-icon
//                 src={step.icon}
//                 trigger="hover"
//                 colors="primary:#121331,secondary:#407BFF"
//                 style={{ width: '50px', height: '50px' }}
//               ></lord-icon>
//             </div>
//             <div>
//               <h4>{step.title}</h4>
//               <p>{step.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div 
//         className="how-right"
//         initial={{ opacity: 0, scale: 0.9, y: 30 }}
//         whileInView={{ opacity: 1, scale: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
//       >
//         <motion.img 
//           src={howItWorksImg} 
//           alt="How MarketHub Works"
//           whileHover={{ y: -5, transition: { duration: 0.3 } }}
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HowItWorksSection;



// ----------------------------------------------------------------------------------------



// import React from 'react';
// import './HowItWorksSection.css';
// import { motion } from 'framer-motion';
// import howItWorksImg from '../assets/how-it-works.png';

// const steps = [
//   {
//     title: 'Register',
//     desc: 'Create an account in minutes to start selling or buying.',
//     icon: 'https://cdn.lordicon.com/jxwksgwv.json'
//   },
//   {
//     title: 'List & Discover',
//     desc: 'List your products or explore curated listings effortlessly.',
//     icon: 'https://cdn.lordicon.com/wxnxiano.json'
//   },
//   {
//     title: 'Get Support',
//     desc: '24/7 customer assistance to help you at every step.',
//     icon: 'https://cdn.lordicon.com/hzomhqxz.json'
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// };

// const stepVariants = {
//   hidden: { opacity: 0, x: -30, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { type: 'spring', stiffness: 80, damping: 12 }
//   }
// };

// function HowItWorksSection() {
//   return (
//     <section className="how-it-works">
//       <motion.div 
//         className="how-left"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span style={{ color: '#000' }}>How </span>
//           <span style={{ color: '#000' }}>Market</span>
//           <span style={{ color: '#407BFF' }}>Hub</span> Works
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//         >
//           See how it is easy to connect and trade
//         </motion.p>

//         {steps.map((step, index) => (
//           <motion.div
//             className="how-step"
//             variants={stepVariants}
//             key={index}
//             whileHover={{ y: -4, transition: { duration: 0.2 } }}
//           >
//             <div className="how-icon">
//               <lord-icon
//                 src={step.icon}
//                 trigger="hover"
//                 stroke="bold"
//                 style={{ width: '48px', height: '48px' }}
//               ></lord-icon>
//             </div>
//             <div>
//               <h4>{step.title}</h4>
//               <p>{step.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div 
//         className="how-right"
//         initial={{ opacity: 0, scale: 0.9, y: 30 }}
//         whileInView={{ opacity: 1, scale: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
//       >
//         <motion.img 
//           src={howItWorksImg} 
//           alt="How MarketHub Works"
//           whileHover={{ y: -5, transition: { duration: 0.3 } }}
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HowItWorksSection;


// -----------------------------------------------------------------------------------------------

// The REAL ONE
// import React from 'react';
// import './HowItWorksSection.css';
// import { motion } from 'framer-motion';
// import howItWorksImg from '../../assets/how-it-works.png';

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

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// };

// const stepVariants = {
//   hidden: { opacity: 0, x: -30, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { type: 'spring', stiffness: 80, damping: 12 }
//   }
// };

// function HowItWorksSection() {
//   return (
//     <section className="how-it-works">
//       <motion.div 
//         className="how-left"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.h2
//           className="how-heading"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           How <span className="underline">Market<span className="blue">Hub</span></span> Works ?
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//         >
//           See how it is easy to connect and trade
//         </motion.p>

//         {steps.map((step, i) => (
//           <motion.div
//             className="how-step"
//             variants={stepVariants}
//             key={i}
//             whileHover={{ y: -4, transition: { duration: 0.2 } }}
//           >
//             <div className="how-icon">
//               <lord-icon
//                 src={step.icon}
//                 trigger="hover"
//                 stroke="bold"
//                 colors="primary:#121331,secondary:#08a88a"
//                 style={{ width: '40px', height: '40px' }}
//               ></lord-icon>
//             </div>
//             <div>
//               <h4>{step.title}</h4>
//               <p>{step.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div 
//         className="how-right"
//         initial={{ opacity: 0, scale: 0.9, y: 30 }}
//         whileInView={{ opacity: 1, scale: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
//       >
//         <motion.img 
//           src={howItWorksImg} 
//           alt="How MarketHub Works"
//           whileHover={{ y: -5, transition: { duration: 0.3 } }}
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default HowItWorksSection;
