import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, User } from 'lucide-react';
import logoImg from '../assets/logo/sbtcinemas_logo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = { color: 'inherit', textDecoration: 'none', fontWeight: 500, letterSpacing: '1px', fontSize: '14px', transition: 'color 0.3s' };

  return (
    <motion.nav
      className={`glass ${scrolled ? 'nav-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 5%',
        zIndex: 100,
        transition: 'var(--transition-smooth)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img 
          src={logoImg} 
          alt="SBT Cinemas Logo" 
          style={{ height: 'clamp(50px, 8vw, 85px)', objectFit: 'contain' }} 
        />
      </div>

      <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle} className="nav-link-hover">HOME</a>
        <a href="#screens" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle} className="nav-link-hover">SCREENS</a>
        <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle} className="nav-link-hover">EXPERIENCE</a>
        <a href="#awards" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle} className="nav-link-hover">AWARDS</a>
        <a href="#celebrity-visit" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle} className="nav-link-hover">CELEBRITY VISIT</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle} className="nav-link-hover">ABOUT</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={navLinkStyle} className="nav-link-hover">CONTACT</a>
      </div>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button className="icon-btn hide-mobile" style={{ display: 'flex' }}><Search color="#fff" size={20} /></button>
        <button className="icon-btn hide-mobile" style={{ display: 'flex' }}><User color="#fff" size={20} /></button>
        <button 
          className="btn-primary"
          onClick={() => window.open('https://in.bookmyshow.com/cinemas/KOVI/sathyabama-sbt-multiplex-dolby-atmos-4k-3d/buytickets/SBTK/20261006?utm_source=chatgpt.com', '_blank')}
          style={{
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            padding: '10px 24px',
            borderRadius: '4px',
            fontWeight: 600,
            letterSpacing: '1px',
            cursor: 'pointer',
            border: 'none',
            transition: 'all 0.3s ease'
          }}>BOOK TICKETS</button>
        
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>
          <Menu size={28} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
