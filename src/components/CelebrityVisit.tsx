import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Play, Pause, Volume2, VolumeX, Camera, Film } from 'lucide-react';
import sooriVideo from '../assets/celebrity visit/soori visit.mp4';
import rioVideo from '../assets/celebrity visit/rio raj visit.mp4';
import sooriWithOwnerImg from '../assets/celebrity visit/soori with owner.jpeg';

interface VideoPlayerProps {
  src: string;
  title: string;
  description: string;
  badge?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, description, badge }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.35,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().then(() => setIsPlaying(true)).catch((err) => {
            console.log("Autoplay prevented:", err);
          });
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
      className="celebrity-card celebrity-video-card"
    >
      <div className="celebrity-media-wrapper" onClick={togglePlay} role="button" tabIndex={0} aria-label={`Play or pause ${title} video`}>
        <video
          ref={videoRef}
          loop
          muted={isMuted}
          playsInline
          className="celebrity-video"
          src={src}
        />
        {badge && (
          <div className="celebrity-badge">
            <Film size={13} color="var(--color-gold)" />
            <span>{badge}</span>
          </div>
        )}
        <div className="video-overlay-controls">
          <button
            type="button"
            className="video-ctrl-btn"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={18} color="#fff" /> : <Play size={18} color="#fff" />}
          </button>
          <button
            type="button"
            className="video-ctrl-btn"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={18} color="#fff" /> : <Volume2 size={18} color="#fff" />}
          </button>
        </div>
      </div>
      <div className="celebrity-content">
        <h3 className="celebrity-title">{title}</h3>
        <p className="celebrity-description">{description}</p>
      </div>
    </motion.div>
  );
};

const CelebrityVisit: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setLightboxOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="celebrity-visit" className="celebrity-visits-section">
      {/* Decorative ambient background lighting */}
      <div className="celebrity-bg-glow" aria-hidden="true" />

      {/* Hero Section */}
      <div className="celebrity-hero-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="golden-text celebrity-hero-title"
        >
          CELEBRITY VISITS
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="celebrity-gold-divider"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="celebrity-hero-subtitle"
        >
          Celebrating the stars who made unforgettable memories at SBT Cinemas.
        </motion.p>
      </div>

      <div className="celebrity-gallery-container">
        {/* FIRST ITEM: Soori with Founder & Team Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-80px" }}
          className="celebrity-card celebrity-photo-feature-card"
        >
          <div
            className="celebrity-photo-wrapper"
            onClick={() => setLightboxOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
            aria-label="Click to enlarge photo: A Memorable Moment with Mr. Soori"
          >
            <img
              src={sooriWithOwnerImg}
              alt="Actor Soori with SBT Cinemas Founder Mr. Raja Guru and team"
              className="celebrity-photo-img"
              loading="lazy"
            />
            <div className="celebrity-badge">
              <Camera size={13} color="var(--color-gold)" />
              <span>SPECIAL ARCHIVE</span>
            </div>

            <div className="photo-expand-hint">
              <Maximize2 size={16} color="#fff" />
              <span>Click to enlarge</span>
            </div>
          </div>

          <div className="celebrity-content">
            <h3 className="celebrity-title">A Memorable Moment with Mr. Soori</h3>
            <p className="celebrity-description">
              A special moment with our esteemed founder Mr. Raja Guru, celebrated actor Mr. Soori, and Mr. Ananda Raja, Mr. Sundar Raja, and Mr. Soundar Raja, celebrating the people and memories behind SBT Cinemas.
            </p>
            <div className="celebrity-attendees">
              <span className="attendee-tag">Mr. Raja Guru (Founder)</span>
              <span className="attendee-tag">Mr. Soori (Actor)</span>
              <span className="attendee-tag">Mr. Ananda Raja</span>
              <span className="attendee-tag">Mr. Sundar Raja</span>
              <span className="attendee-tag">Mr. Soundar Raja</span>
            </div>
          </div>
        </motion.div>

        {/* SECOND ITEM: Video 1 - Soori Maaman Team */}
        <VideoPlayer
          src={sooriVideo}
          title="#Maaman Team Celebration"
          description="Actor Soori and the #Maaman team celebrate and interact with audiences, creating an unforgettable atmosphere and sharing their love for cinema."
          badge="AUDIENCE INTERACTION"
        />

        {/* THIRD ITEM: Video 2 - Rio Raj Visit */}
        <VideoPlayer
          src={rioVideo}
          title="#AanPaavamPollathathu Visit"
          description="Actor Rio Raj and the #AanPaavamPollathathu team, along with Director Kalaiyarasan, receive a wonderful response and heartwarming love from our audience."
          badge="CAST & CREW VISIT"
        />
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="celebrity-lightbox-overlay"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged view: A Memorable Moment with Mr. Soori"
          >
            <div
              className="celebrity-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close photo preview"
              >
                <X size={24} color="#fff" />
              </button>

              <div className="lightbox-image-container">
                <img
                  src={sooriWithOwnerImg}
                  alt="A Memorable Moment with Mr. Soori at SBT Cinemas"
                  className="lightbox-img"
                />
              </div>

              <div className="lightbox-caption">
                <h4 className="lightbox-title golden-text">A Memorable Moment with Mr. Soori</h4>
                <p className="lightbox-desc">
                  A special moment with our esteemed founder Mr. Raja Guru, celebrated actor Mr. Soori, and Mr. Ananda Raja, Mr. Sundar Raja, and Mr. Soundar Raja, celebrating the people and memories behind SBT Cinemas.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CelebrityVisit;
