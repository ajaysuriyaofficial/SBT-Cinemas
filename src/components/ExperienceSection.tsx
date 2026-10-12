import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Glasses, Volume2 } from 'lucide-react';

const experiences = [
  { 
    id: '01',
    title: '4K ULTRA HD',
    headline: 'EVERY FRAME. EVERY DETAIL.',
    desc: 'Discover the beauty of cinema through stunning picture clarity, vivid colours, and detailed visuals that bring every story to life.',
    icon: MonitorPlay
  },
  { 
    id: '02',
    title: 'REALISTIC 3D CINEMA', 
    headline: 'STEP INTO THE STORY.',
    desc: 'Experience movies with immersive three-dimensional visuals that add depth to the action and bring cinematic worlds closer to you.',
    icon: Glasses
  },
  { 
    id: '03',
    title: 'DOLBY ATMOS', 
    headline: 'SOUND THAT SURROUNDS YOU.',
    desc: 'Experience the movie through immersive, detailed sound that adds depth and atmosphere to every cinematic moment.',
    icon: Volume2
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#020202' }}>
      
      {/* Premium Introduction */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 100px)' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="golden-text" 
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', marginBottom: '20px' }}
        >
          MORE THAN A MOVIE. AN EXPERIENCE.
        </motion.h2>
        
        {/* Gold accent line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ height: '2px', background: 'var(--color-gold)', margin: '0 auto 30px auto' }} 
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ color: 'var(--color-silver)', maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.6 }}
        >
          Discover stunning visuals, immersive three-dimensional worlds, and captivating cinema sound — all designed to bring every story closer to you.
        </motion.p>
      </div>

      {/* Experience Cards - Text Focused Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: 'clamp(24px, 4vw, 40px)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '24px',
              padding: 'clamp(30px, 5vw, 50px) clamp(20px, 4vw, 40px)',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 0.4s ease'
            }}
            whileHover={{ y: -5, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(212,175,55,0.3)' }}
          >
            {/* Subtle glow behind icon */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              width: '60px',
              height: '60px',
              background: 'var(--color-gold-glow)',
              filter: 'blur(30px)',
              zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                <exp.icon size={48} color="var(--color-gold)" strokeWidth={1.5} />
                <span style={{ color: 'rgba(212,175,55,0.4)', fontSize: '1.5rem', fontWeight: 300, letterSpacing: '2px' }}>
                  {exp.id}
                </span>
              </div>
              
              <h4 style={{ color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '10px' }}>
                {exp.title}
              </h4>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px', letterSpacing: '1px', lineHeight: 1.2 }}>
                {exp.headline}
              </h3>
              <p style={{ color: 'var(--color-silver)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Closing Section */}
      <div style={{ 
        marginTop: '150px', 
        textAlign: 'center',
        padding: 'clamp(40px, 8vw, 100px) 5%',
        background: 'linear-gradient(to top, rgba(212,175,55,0.05), transparent)',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        borderRadius: '30px'
      }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: 700, letterSpacing: '1px' }}
        >
          YOUR NEXT MOVIE MOMENT STARTS HERE.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: 'var(--color-silver)', fontSize: '1.2rem', marginBottom: '40px' }}
        >
          Gather your people, take your seats, and experience the magic of cinema at SBT Cinemas.
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="btn-primary"
          href="https://in.bookmyshow.com/cinemas/kovilpatti/sathyabama-sbt-multiplex-dolby-atmos-4k-3d/SBTK"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            padding: '20px 50px',
            fontSize: '16px',
            fontWeight: 700,
            borderRadius: '50px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          EXPLORE MOVIES
        </motion.a>
      </div>
    </section>
  );
};

export default ExperienceSection;
