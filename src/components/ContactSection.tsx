import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{type: 'idle' | 'success' | 'error', message: string}>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Simulate submission - since no backend exists
    setFormStatus({
      type: 'success',
      message: 'Thank you for reaching out! Note: This form requires a backend integration to actually send emails. We have recorded your validation locally.'
    });
    
    // Clear form after delay if desired, but here we just show the message
  };

  const cardStyle = {
    background: 'linear-gradient(145deg, #0a0a0a, #111)',
    padding: 'clamp(28px, 4vw, 40px) clamp(18px, 3vw, 30px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    flex: '1 1 260px',
    minWidth: 0,
    maxWidth: '100%',
    width: '100%'
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '15px 20px',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease',
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    textAlign: 'left' as const,
    marginBottom: '8px',
    color: 'var(--color-silver)',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase' as const
  };

  return (
    <section id="contact" style={{
      background: 'radial-gradient(circle at center, #0a0a1a 0%, #020202 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cinematic Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            textTransform: 'uppercase', 
            marginBottom: '20px',
            color: '#fff',
            letterSpacing: '2px',
            lineHeight: 1.2
          }}
        >
          LET'S CONNECT. <br />
          <span className="golden-text">LET'S MAKE IT A MOVIE MOMENT.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: 'var(--color-silver)', fontSize: '1.2rem', lineHeight: 1.6 }}
        >
          Have a question, need assistance, or planning your next cinema visit? We're here to help. Get in touch with SBT Cinemas.
        </motion.p>
      </div>

      {/* Premium Contact Cards */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto 100px auto'
      }}>
        {/* VISIT US */}
        <motion.div 
          whileHover={{ y: -10, borderColor: 'rgba(212, 175, 55, 0.3)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={cardStyle}
        >
          <div style={{ marginBottom: '20px' }}>
            <MapPin color="var(--color-gold)" size={36} strokeWidth={1.5} />
          </div>
          <h3 style={{ color: '#fff', marginBottom: '20px', letterSpacing: '2px', fontSize: '1.2rem' }}>VISIT US</h3>
          <p style={{ color: 'var(--color-silver)', lineHeight: '1.8', marginBottom: '30px', flex: 1 }}>
            798, Market Rd, Iluppaiyurani,<br />
            Kovilpatti - 628501,<br />
            Tuticorin District, Tamilnadu
          </p>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=798,+Market+Rd,+Iluppaiyurani,+Kovilpatti+-+628501,+Tuticorin+District,+Tamilnadu" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--color-gold)',
              fontSize: '14px',
              letterSpacing: '1px',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '10px 20px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '30px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            GET DIRECTIONS <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* CALL US */}
        <motion.div 
          whileHover={{ y: -10, borderColor: 'rgba(212, 175, 55, 0.3)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={cardStyle}
        >
          <div style={{ marginBottom: '20px' }}>
            <Phone color="var(--color-gold)" size={36} strokeWidth={1.5} />
          </div>
          <h3 style={{ color: '#fff', marginBottom: '20px', letterSpacing: '2px', fontSize: '1.2rem' }}>CALL US</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px', flex: 1, width: '100%' }}>
            {['9994383741', '9994383751', '9994383761'].map(phone => (
              <div key={phone} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                <span style={{ color: 'var(--color-silver)', fontSize: '1.1rem' }}>{phone}</span>
                <a href={`tel:${phone}`} style={{ color: 'var(--color-gold)', fontSize: '12px', letterSpacing: '1px', fontWeight: 600, textDecoration: 'none' }}>
                  CALL NOW
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* EMAIL US */}
        <motion.div 
          whileHover={{ y: -10, borderColor: 'rgba(212, 175, 55, 0.3)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={cardStyle}
        >
          <div style={{ marginBottom: '20px' }}>
            <Mail color="var(--color-gold)" size={36} strokeWidth={1.5} />
          </div>
          <h3 style={{ color: '#fff', marginBottom: '20px', letterSpacing: '2px', fontSize: '1.2rem' }}>EMAIL US</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px', flex: 1, width: '100%' }}>
            {['sbtcineamass@gmail.com', 'sbtkvp@gmail.com'].map(email => (
              <div key={email} style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px', textAlign: 'left' }}>
                <span style={{ color: 'var(--color-silver)', fontSize: '1rem', wordBreak: 'break-all' }}>{email}</span>
                <a href={`mailto:${email}`} style={{ color: 'var(--color-gold)', fontSize: '12px', letterSpacing: '1px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  SEND AN EMAIL <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Location and Directions Section */}
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto 100px auto', 
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '24px',
        padding: '60px 5%',
        border: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center'
      }}>
        <Navigation size={48} color="var(--color-gold)" strokeWidth={1} style={{ marginBottom: '20px' }} />
        <h3 style={{ fontSize: '2rem', marginBottom: '15px', letterSpacing: '1px' }}>FIND YOUR WAY TO SBT CINEMAS</h3>
        <p style={{ color: 'var(--color-silver)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          Planning your visit? Find our location in Kovilpatti and get directions with ease.
        </p>
        <p style={{ color: '#fff', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '40px' }}>
          798, Market Rd, Iluppaiyurani, Kovilpatti - 628501, Tuticorin District, Tamilnadu
        </p>
        <button 
          onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=798,+Market+Rd,+Iluppaiyurani,+Kovilpatti+-+628501,+Tuticorin+District,+Tamilnadu', '_blank')}
          style={{
            background: 'var(--color-gold)',
            color: '#000',
            padding: '18px 40px',
            fontSize: '14px',
            fontWeight: 700,
            borderRadius: '50px',
            letterSpacing: '2px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
          }}
        >
          <MapPin size={18} />
          OPEN IN GOOGLE MAPS
        </button>
      </div>

      {/* Customer Enquiry Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '15px', letterSpacing: '1px' }}>HOW CAN WE HELP YOU?</h3>
          <p style={{ color: 'var(--color-silver)', fontSize: '1.1rem' }}>
            Send us your question or feedback, and our team will be happy to assist.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.02)', padding: '50px 5%', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
          {formStatus.type !== 'idle' && (
            <div style={{ 
              padding: '15px 20px', 
              borderRadius: '8px', 
              marginBottom: '30px',
              background: formStatus.type === 'success' ? 'rgba(46, 204, 113, 0.1)' : 'rgba(231, 76, 60, 0.1)',
              border: `1px solid ${formStatus.type === 'success' ? '#2ecc71' : '#e74c3c'}`,
              color: formStatus.type === 'success' ? '#2ecc71' : '#e74c3c',
              fontSize: '0.95rem',
              lineHeight: 1.5
            }}>
              {formStatus.message}
            </div>
          )}

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px' }}>
              <label htmlFor="name" style={labelStyle}>Full Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} required />
            </div>
            <div style={{ flex: '1 1 250px' }}>
              <label htmlFor="email" style={labelStyle}>Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} required />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px' }}>
              <label htmlFor="phone" style={labelStyle}>Phone Number (Optional)</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ flex: '1 1 250px' }}>
              <label htmlFor="subject" style={labelStyle}>Subject *</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} style={inputStyle} required />
            </div>
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>Message *</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} required />
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button type="submit" style={{
              background: 'transparent',
              color: 'var(--color-gold)',
              padding: '15px 40px',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '30px',
              letterSpacing: '2px',
              border: '1px solid var(--color-gold)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)'; }}
            >
              <Send size={16} />
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

    </section>
  );
};

export default ContactSection;
