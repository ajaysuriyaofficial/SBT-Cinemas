import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo/sbtcinemas_logo.png';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  // Elegant progress animation for visual feedback
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (Math.random() * 15 + 5); 
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at center, #0a0f18 0%, #020202 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '50px'
        }}
      >
        {/* Subtle golden lighting behind the logo */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            background: 'var(--color-gold)',
            filter: 'blur(70px)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />
        
        {/* Original SBT Cinemas Logo */}
        <img 
          src={logoImg} 
          alt="SBT Cinemas" 
          style={{ 
            height: '100px', 
            objectFit: 'contain', 
            zIndex: 1,
            position: 'relative',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
          }} 
          // Use a simple text fallback just in case the image fails to load
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.parentElement) {
              const fallbackText = document.createElement('h1');
              fallbackText.innerText = 'SBT CINEMAS';
              fallbackText.className = 'golden-text';
              fallbackText.style.fontSize = '2rem';
              fallbackText.style.letterSpacing = '0.15em';
              fallbackText.style.zIndex = '1';
              fallbackText.style.position = 'relative';
              e.currentTarget.parentElement.appendChild(fallbackText);
            }
          }}
        />
      </motion.div>

      {/* Smooth animated progress indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ 
          width: '200px', 
          height: '2px', 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '25px'
        }}
      >
        <motion.div 
          style={{ 
            height: '100%', 
            background: 'var(--color-gold)',
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
          }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </motion.div>

      {/* Premium Caption */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{ 
          color: 'var(--color-silver)', 
          fontSize: '0.8rem', 
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontWeight: 400,
          textAlign: 'center',
          maxWidth: '80%'
        }}
      >
        SETTING THE STAGE FOR YOUR MOVIE EXPERIENCE
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
