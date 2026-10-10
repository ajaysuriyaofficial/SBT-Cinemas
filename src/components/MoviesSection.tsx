import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const movies = [
  { id: 1, title: 'THE QUANTUM REALM', genre: 'Sci-Fi / Thriller', rating: 'UA', time: '2h 15m' },
  { id: 2, title: 'MIDNIGHT SUN', genre: 'Action / Drama', rating: 'A', time: '1h 55m' },
  { id: 3, title: 'ECHOES OF ETERNITY', genre: 'Fantasy / Adventure', rating: 'U', time: '2h 40m' },
];

const MoviesSection: React.FC = () => {
  return (
    <section id="movies" style={{ padding: '100px 5%', minHeight: '100vh', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
        <div>
          <h2 className="golden-text" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', margin: 0, textTransform: 'uppercase' }}>Now Showing</h2>
          <p style={{ color: 'var(--color-silver)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '10px' }}>Experience in 3D & IMAX</p>
        </div>
        <button style={{ 
          background: 'transparent',
          color: 'var(--color-gold)',
          border: 'none',
          borderBottom: '1px solid var(--color-gold)',
          padding: '5px 0',
          letterSpacing: '1px',
          fontWeight: 500
        }}>VIEW ALL MOVIES</button>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px',
        perspective: '1000px'
      }}>
        {movies.map((movie) => (
          <motion.div 
            key={movie.id}
            className="movie-card"
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              z: 50,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              height: '500px',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--color-charcoal)',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Placeholder Background for Poster */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,5,5,1) 100%)',
              zIndex: 1
            }} />
            
            <div style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: 'radial-gradient(circle at center, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%)',
              opacity: 0.5
            }} />
            
            <div style={{ position: 'relative', zIndex: 2, padding: '30px', width: '100%' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <span style={{ 
                  background: 'rgba(212, 175, 55, 0.2)', 
                  color: 'var(--color-gold)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 600
                }}>{movie.rating}</span>
                <span style={{ color: 'var(--color-silver)', fontSize: '12px', alignSelf: 'center' }}>
                  {movie.time}
                </span>
              </div>
              
              <h3 style={{ fontSize: '24px', marginBottom: '10px', fontWeight: 600, letterSpacing: '1px' }}>
                {movie.title}
              </h3>
              <p style={{ color: 'var(--color-silver)', fontSize: '14px', marginBottom: '20px' }}>
                {movie.genre}
              </p>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0.9 }}>
                <button style={{
                  background: 'var(--color-gold)',
                  color: 'var(--color-black)',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  flex: 1,
                  letterSpacing: '1px'
                }}>BOOK NOW</button>
                <button style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid var(--color-silver)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff'
                }}><Play size={16} fill="currentColor" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoviesSection;
