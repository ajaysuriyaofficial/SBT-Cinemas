import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #1a1a1a', paddingTop: '60px', paddingBottom: '20px', paddingLeft: '5%', paddingRight: '5%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
        
        {/* Brand */}
        <div>
          <h2 className="golden-text" style={{ fontSize: '24px', marginBottom: '15px' }}>SBT CINEMAS</h2>
          <p style={{ color: 'var(--color-silver)', lineHeight: '1.6', fontSize: '15px' }}>
            Experience Movies Beyond the Screen.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 style={{ color: 'var(--color-white)', marginBottom: '20px', letterSpacing: '1px', fontSize: '16px' }}>QUICK LINKS</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#home" style={{ color: 'var(--color-silver)', textDecoration: 'none', transition: 'color 0.3s' }}>Home</a>
            <a href="#theatres" style={{ color: 'var(--color-silver)', textDecoration: 'none', transition: 'color 0.3s' }}>Theatres</a>
            <a href="#showtimes" style={{ color: 'var(--color-silver)', textDecoration: 'none', transition: 'color 0.3s' }}>Showtimes</a>
            <a href="#experience" style={{ color: 'var(--color-silver)', textDecoration: 'none', transition: 'color 0.3s' }}>Experience</a>
            <a href="#about" style={{ color: 'var(--color-silver)', textDecoration: 'none', transition: 'color 0.3s' }}>About</a>
            <a href="#contact" style={{ color: 'var(--color-silver)', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ color: 'var(--color-white)', marginBottom: '20px', letterSpacing: '1px', fontSize: '16px' }}>CONTACT</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--color-silver)' }}>
            <p style={{ lineHeight: '1.6' }}>
              798, Market Rd, Iluppaiyurani,<br />
              Kovilpatti, Tamil Nadu 628501
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="tel:9994383741" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>9994383741</a>
              <a href="tel:9994383751" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>9994383751</a>
              <a href="tel:9994383761" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>9994383761</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="mailto:sbtcineamass@gmail.com" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>sbtcineamass@gmail.com</a>
              <a href="mailto:sbtkvp@gmail.com" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>sbtkvp@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 style={{ color: 'var(--color-white)', marginBottom: '20px', letterSpacing: '1px', fontSize: '16px' }}>SOCIAL</h3>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={{ color: 'var(--color-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/sathyabama_cinemas?stkn=OHl4b3Jib3E1am9n" target="_blank" rel="noopener noreferrer" aria-label="Follow SBT Cinemas on Instagram" style={{ color: 'var(--color-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = '#000'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'; e.currentTarget.style.color = 'var(--color-gold)'; }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" style={{ color: 'var(--color-gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1a1a1a', paddingTop: '20px', color: '#666', fontSize: '14px', gap: '20px' }}>
        <p>© 2026 SBT CINEMAS. All Rights Reserved.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms & Conditions</a>
        </div>
      </div>

      {/* Designer Credit */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #1a1a1a', marginTop: '20px', paddingTop: '20px', color: '#888', fontSize: '13px', gap: '8px', textAlign: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '6px' }}>
          Designed & Developed by <span style={{ color: 'var(--color-gold)', fontWeight: 500, letterSpacing: '0.5px' }}>AJAY SURIYA</span>
        </span>
        <a 
          href="https://wa.me/919087369111" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Contact the website designer on WhatsApp"
          title="Contact the website designer on WhatsApp"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}
          className="designer-wa-icon"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.662-2.062-.173-.299-.018-.462.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.199 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
