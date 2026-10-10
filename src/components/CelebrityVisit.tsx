import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import sooriVideo from '../assets/celebrity visit/soori visit.mp4';
import rioVideo from '../assets/celebrity visit/rio raj visit.mp4';

interface VideoPlayerProps {
  src: string;
  title: string;
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, description }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Video must be 50% visible to play
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play the video when it is in view
          videoRef.current?.play().catch((err) => {
            console.log("Autoplay prevented by browser:", err);
          });
        } else {
          // Pause the video when it leaves the view
          videoRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        marginBottom: '60px',
        position: 'relative'
      }}
    >
      <div style={{ position: 'relative' }}>
        <video 
          ref={videoRef}
          loop
          playsInline
          style={{
            width: '100%',
            maxHeight: '70vh',
            display: 'block',
            objectFit: 'contain',
            backgroundColor: '#000'
          }}
          src={src}
        />
      </div>
      <div style={{ padding: '30px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--color-gold)' }}>{title}</h3>
        <p style={{ color: 'var(--color-silver)', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const CelebrityVisit: React.FC = () => {
  return (
    <section id="celebrity-visit" style={{ minHeight: '100vh', position: 'relative', background: '#020202' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 className="golden-text" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', marginBottom: '20px' }}>
          Celebrity Visits
        </h2>
        <p style={{ color: 'var(--color-silver)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Experience the star-studded moments at SBT Cinemas where your favorite celebrities connect with fans and celebrate cinema.
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <VideoPlayer 
          src={sooriVideo}
          title="#Maaman Team Celebration"
          description="Actor Soori and the #Maaman team celebrate and interact with audiences, creating an unforgettable atmosphere and sharing their love for cinema."
        />
        
        <VideoPlayer 
          src={rioVideo}
          title="#AanPaavamPollathathu Visit"
          description="Actor Rio Raj and the #AanPaavamPollathathu team, along with Director Kalaiyarasan, receive a wonderful response and heartwarming love from our audience."
        />
      </div>
    </section>
  );
};

export default CelebrityVisit;
