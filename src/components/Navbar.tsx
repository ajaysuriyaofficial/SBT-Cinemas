import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo/sbtcinemas_logo.png';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'screens', label: 'Screens', href: '#screens' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'celebrity-visit', label: 'Celebrity Visit', href: '#celebrity-visit' },
  { id: 'awards', label: 'Awards', href: '#awards' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const BOOK_TICKETS_URL =
  'https://in.bookmyshow.com/cinemas/kovilpatti/sathyabama-sbt-multiplex-dolby-atmos-4k-3d/SBTK';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isManualScrollRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Skip scroll detection while smooth scrolling from click
      if (isManualScrollRef.current) return;

      // 1. Bottom of page check -> activate contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // 2. Near top of page check -> activate home
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // Focal detection line: ~35% into the viewport
      const focalLine = window.scrollY + Math.min(window.innerHeight * 0.35, 300);

      // Measure true absolute positions of all 7 sections
      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        return { id: item.id, top };
      }).filter((s): s is { id: string; top: number } => s !== null);

      let current = 'home';
      for (const s of sections) {
        if (focalLine >= s.top) {
          current = s.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      setActiveSection(item.id);

      // Lock scroll spy while smooth scroll completes
      isManualScrollRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 850);

      const target = document.getElementById(item.id);
      if (target) {
        const navbarHeight = 75;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
        window.history.pushState(null, '', item.href);
      } else {
        window.location.hash = item.href;
      }
    },
    []
  );

  return (
    <>
      <header
        className={`site-navbar ${scrolled ? 'nav-scrolled' : ''}`}
        role="banner"
      >
        <div className="navbar-container">
          {/* Logo on the left */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
            aria-label="SBT Cinemas Home"
          >
            <img
              src={logoImg}
              alt="SBT Cinemas Logo"
              className="navbar-logo-img"
            />
          </a>

          {/* Desktop Navigation Links in exact single horizontal row */}
          <nav
            className="navbar-desktop-nav"
            role="navigation"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-link-label">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveGoldAccent"
                      className="nav-active-accent"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="navbar-actions">
            <a
              href={BOOK_TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary nav-book-tickets-btn"
              aria-label="Book Tickets on BookMyShow"
            >
              BOOK TICKETS
            </a>

            {/* Responsive Hamburger Toggle */}
            <button
              type="button"
              className="navbar-hamburger-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X size={26} color="#fff" /> : <Menu size={26} color="#fff" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mobile-nav-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Menu Panel */}
            <motion.aside
              key="mobile-nav-panel"
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Drawer Header */}
              <div className="mobile-drawer-header">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
                  className="mobile-drawer-brand"
                  aria-label="SBT Cinemas Home"
                >
                  <img src={logoImg} alt="SBT Cinemas" className="mobile-drawer-logo" />
                </a>
                <button
                  type="button"
                  className="mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={24} color="#fff" />
                </button>
              </div>

              {/* Exact Ordered Navigation Links */}
              <nav className="mobile-drawer-links" aria-label="Mobile Navigation Links">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.25 }}
                      className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="mobile-nav-number">0{index + 1}</span>
                      <span className="mobile-nav-text">{item.label}</span>
                      {isActive && <span className="mobile-nav-active-badge" />}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer Bottom Actions */}
              <div className="mobile-drawer-footer">
                <a
                  href={BOOK_TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mobile-drawer-book-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  BOOK TICKETS
                </a>
                <div className="mobile-drawer-info">
                  <p className="mobile-drawer-tagline">Experience Movies Beyond the Screen</p>
                  <p className="mobile-drawer-location">Kovilpatti - 628501, Tuticorin District, Tamilnadu</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
