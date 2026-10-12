import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 5%',
        background: 'radial-gradient(circle at 50% 30%, #070e22 0%, #020202 75%)',
        position: 'relative',
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="golden-text"
          style={{
            letterSpacing: '5px',
            fontSize: 'clamp(15px, 2.2vw, 20px)',
            textTransform: 'uppercase',
            marginBottom: '18px',
            fontWeight: 600,
          }}
        >
          Our Pride. Our Cinema. Our Legacy.
        </motion.h3>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ height: '2px', background: 'var(--color-gold)', margin: '0 auto 24px auto', opacity: 0.7 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            color: 'var(--color-silver)',
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            lineHeight: 1.8,
            margin: '0 auto',
          }}
        >
          Every award tells a story. Every celebration marks a milestone. At SBT Cinemas, we cherish the moments that bring filmmakers, artists, and audiences together.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
