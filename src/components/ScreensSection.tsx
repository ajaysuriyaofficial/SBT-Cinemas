import React from 'react';
import { motion } from 'framer-motion';
import screen1 from '../assets/screen/1.jpeg';
import screen2 from '../assets/screen/2.jpeg';
import screen3 from '../assets/screen/3.jpeg';
import screen4 from '../assets/screen/4.jpeg';

const screens = [
  {
    id: '01',
    title: 'SCREEN 1 - ALPHA',
    tagline: 'FEEL THE VIBE. LIVE THE MOMENT.',
    desc: 'Step into a world of vibrant visuals, electrifying movie moments, and an atmosphere filled with excitement. At Alpha, every movie becomes a celebration, every scene brings a new thrill, and every visit creates memories worth sharing.',
    img: screen1,
    colors: { bg: 'linear-gradient(135deg, #050505, #29004f, #001f3f)', accent: '#ff00ff', text: '#ff9900' },
    soundWave: false,
    label: 'YOUR MOVIE. YOUR PEOPLE. YOUR CELEBRATION.'
  },
  {
    id: '02',
    title: 'THE VISUAL EXPERIENCE',
    tagline: 'EVERY DETAIL. EVERY FRAME. EVERY EMOTION.',
    desc: 'Enjoy a visually captivating movie experience where every frame draws you deeper into the story. Present this screen as the destination for audiences who value beautiful cinematic visuals and picture quality.',
    img: screen2,
    colors: { bg: 'linear-gradient(135deg, #050505, #111122)', accent: '#ffffff', text: '#silver' },
    soundWave: false
  },
  {
    id: '03',
    title: 'ELITE SCREEN',
    tagline: 'EXCLUSIVITY IN EVERY SEAT.',
    desc: 'Discover a more exclusive way to enjoy cinema with premium VIP seating, a sophisticated atmosphere, and a comfortable setting for your next movie outing.',
    img: screen3,
    colors: { bg: 'linear-gradient(135deg, #050505, #1a1500)', accent: '#d4af37', text: '#ffdc73' },
    soundWave: false,
    label: 'ELITE EXPERIENCE'
  },
  {
    id: '04',
    title: 'THE SIGNATURE SCREEN',
    tagline: 'A DIFFERENT KIND OF MOVIE MOMENT.',
    desc: 'Every movie has a moment worth remembering. Find yours in a cinema experience built around the excitement, emotion, and shared magic of the big screen.',
    img: screen4,
    colors: { bg: 'linear-gradient(135deg, #050505, #1c0030)', accent: '#d4af37', text: '#b39ddb' },
    soundWave: false
  }
];

const ScreensSection: React.FC = () => {
  return (
    <section id="screens" style={{ padding: 'clamp(60px, 10vw, 120px) 0', minHeight: '100vh', background: '#020202', position: 'relative', overflow: 'hidden' }}>
      
      {/* Cinematic Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '100px', padding: '0 5%' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="golden-text"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '2px' }}
        >
          OUR SCREENS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: 'var(--color-silver)', fontSize: '1.2rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '40px' }}
        >
          FOUR SCREENS. FOUR EXPERIENCES. ONE LOVE FOR CINEMA.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => {
            const firstScreen = document.getElementById('screen-01');
            firstScreen?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            background: 'transparent',
            border: '1px solid var(--color-gold)',
            color: 'var(--color-gold)',
            padding: '15px 40px',
            borderRadius: '30px',
            fontSize: '14px',
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = '#000'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)'; }}
        >
          EXPLORE OUR SCREENS
        </motion.button>
      </div>

      {/* Individual Screens */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {screens.map((screen, index) => (
          <div id={`screen-${screen.id}`} key={screen.id} style={{ 
            background: screen.colors.bg, 
            padding: '100px 5%',
            position: 'relative',
            borderTop: '1px solid rgba(255,255,255,0.02)'
          }}>
            <div style={{ 
              maxWidth: '1200px', 
              width: '100%',
              margin: '0 auto', 
              display: 'flex', 
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: 'clamp(30px, 5vw, 60px)',
              flexWrap: 'wrap'
            }}>
              
              {/* Image Reveal */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ flex: '1 1 300px', minWidth: 0, maxWidth: '100%', width: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}
              >
                {screen.label && (
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.75)', border: `1px solid ${screen.colors.accent}`, color: screen.colors.accent, padding: '6px 14px', fontSize: '11px', letterSpacing: '1.5px', zIndex: 10, borderRadius: '4px' }}>
                    {screen.label}
                  </div>
                )}
                <img src={screen.img} alt={screen.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '16/9', transform: 'scale(1.02)' }} />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ flex: '1 1 300px', minWidth: 0, maxWidth: '100%', width: '100%' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'rgba(255,255,255,0.1)' }}>{screen.id}</span>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#fff', letterSpacing: '1px', wordBreak: 'break-word' }}>{screen.title}</h3>
                </div>
                
                <h4 style={{ color: screen.colors.accent, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', letterSpacing: '1.5px', marginBottom: '16px' }}>{screen.tagline}</h4>
                <p style={{ color: '#ccc', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, marginBottom: '32px' }}>{screen.desc}</p>
                
                {screen.soundWave && (
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center', opacity: 0.5 }}>
                    {[1,2,3,4,5,6,7,8,9].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ height: ['10px', `${Math.random() * 30 + 10}px`, '10px'] }}
                        transition={{ repeat: Infinity, duration: Math.random() * 0.5 + 0.5 }}
                        style={{ width: '3px', background: screen.colors.accent, borderRadius: '3px' }}
                      />
                    ))}
                    <span style={{ marginLeft: '15px', fontSize: '12px', letterSpacing: '2px', color: screen.colors.accent }}>IMMERSIVE AUDIO</span>
                  </div>
                )}
              </motion.div>

            </div>
          </div>
        ))}
      </div>

      {/* Closing CTA */}
      <div style={{ 
        padding: '120px 5%', 
        textAlign: 'center',
        background: 'linear-gradient(to top, rgba(212,175,55,0.05), transparent)'
      }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '20px', letterSpacing: '1px' }}
        >
          YOUR SEAT. YOUR SCREEN. YOUR MOVIE.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: 'var(--color-silver)', fontSize: '1.2rem', marginBottom: '40px' }}
        >
          Find your next favourite movie and experience it at SBT Cinemas.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="btn-primary"
          href="https://in.bookmyshow.com/cinemas/kovilpatti/sathyabama-sbt-multiplex-dolby-atmos-4k-3d/SBTK"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            padding: 'clamp(14px, 2.5vw, 20px) clamp(28px, 6vw, 60px)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: 700,
            borderRadius: '50px',
            letterSpacing: '2px',
            border: 'none',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
            maxWidth: '100%'
          }}
        >
          EXPLORE MOVIES
        </motion.a>
      </div>
      
    </section>
  );
};

export default ScreensSection;
