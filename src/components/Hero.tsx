import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{
      minHeight: '100svh',
      paddingTop: 'clamp(80px, 12vh, 110px)',
      paddingBottom: 'clamp(30px, 5vh, 60px)',
      paddingLeft: '16px',
      paddingRight: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}
      >
        <h1 className="golden-text" style={{
          fontSize: 'clamp(2rem, 7.5vw, 5.5rem)',
          lineHeight: '1.15',
          letterSpacing: 'clamp(0.04em, 1.2vw, 0.15em)',
          marginBottom: '20px',
          textTransform: 'uppercase',
          textWrap: 'balance',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          wordBreak: 'break-word'
        }}>
          SBT CINEMAS
        </h1>
        <p style={{
          fontSize: 'clamp(0.85rem, 3.2vw, 1.35rem)',
          color: 'var(--color-silver)',
          marginBottom: '36px',
          letterSpacing: 'clamp(1px, 0.5vw, 2px)',
          lineHeight: '1.45',
          textTransform: 'uppercase',
          maxWidth: '650px',
          margin: '0 auto 36px auto'
        }}>
          Experience Movies Beyond the Screen
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://in.bookmyshow.com/cinemas/kovilpatti/sathyabama-sbt-multiplex-dolby-atmos-4k-3d/SBTK"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              background: 'var(--color-gold)',
              color: 'var(--color-black)',
              padding: 'clamp(12px, 2.5vw, 15px) clamp(28px, 6vw, 40px)',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: 600,
              borderRadius: '4px',
              letterSpacing: '1px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            BOOK TICKETS
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
