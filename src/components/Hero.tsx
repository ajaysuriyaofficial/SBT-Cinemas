import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo/sbtcinemas_logo.png';

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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ margin: 0, padding: 0, display: 'inline-flex', justifyContent: 'center' }}>
            <span style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: 0,
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0
            }}>
              SBT Cinemas
            </span>
            <img
              src={logoImg}
              alt="SBT Cinemas"
              style={{
                width: 'clamp(170px, 36vw, 290px)',
                height: 'auto',
                maxHeight: '32vh',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 20px rgba(212, 175, 55, 0.35))',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            />
          </h1>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
