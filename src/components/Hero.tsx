import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{
      minHeight: '100svh',
      paddingTop: '80px', // Clear navbar
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <h1 className="golden-text" style={{
          fontSize: 'clamp(2rem, 8vw, 5.5rem)',
          lineHeight: '1.1',
          letterSpacing: '0.15em',
          marginBottom: '20px',
          textTransform: 'uppercase',
          textWrap: 'balance',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          SBT CINEMAS
        </h1>
        <p style={{
          fontSize: 'clamp(0.9rem, 4vw, 1.5rem)',
          color: 'var(--color-silver)',
          marginBottom: '40px',
          letterSpacing: '2px',
          lineHeight: '1.4',
          textTransform: 'uppercase'
        }}>
          Experience Movies Beyond the Screen
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            className="btn-primary"
            onClick={() => window.open('https://in.bookmyshow.com/cinemas/KOVI/sathyabama-sbt-multiplex-dolby-atmos-4k-3d/buytickets/SBTK/20261006?utm_source=chatgpt.com', '_blank')}
            style={{
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            padding: '15px 40px',
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: '4px',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>BOOK TICKETS</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
