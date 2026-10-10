import React from 'react';
import { MapPin, MonitorPlay } from 'lucide-react';

const theatres = [
  { id: 1, name: 'SBT IMAX City Center', location: 'Downtown Avenue', screens: 12, features: ['IMAX', '4DX', 'Dolby Atmos', 'Premium Dining'] },
  { id: 2, name: 'SBT Luxe Mall', location: 'Westend Boulevard', screens: 8, features: ['Recliners', 'Dolby Atmos', 'Gourmet Menu'] },
];

const TheatresSection: React.FC = () => {
  return (
    <section id="theatres" style={{ padding: '100px 5%', minHeight: '100vh', position: 'relative' }}>
      <h2 className="golden-text" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '60px', textTransform: 'uppercase' }}>Our Theatres</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {theatres.map(theatre => (
          <div key={theatre.id} className="glass" style={{
            padding: '40px',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            border: '1px solid rgba(255,255,255,0.05)',
            borderLeft: '4px solid var(--color-gold)',
            transition: 'var(--transition-smooth)'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>{theatre.name}</h3>
              <p style={{ color: 'var(--color-silver)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <MapPin size={16} color="var(--color-gold)" /> {theatre.location}
              </p>
              
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {theatre.features.map((feature, i) => (
                  <span key={i} style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '6px 12px', 
                    borderRadius: '20px',
                    fontSize: '13px',
                    color: '#ddd'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <MonitorPlay size={32} color="var(--color-gold)" style={{ marginBottom: '10px' }} />
                <p style={{ fontSize: '24px', fontWeight: 700 }}>{theatre.screens}</p>
                <p style={{ fontSize: '12px', color: 'var(--color-silver)' }}>SCREENS</p>
              </div>
              <button style={{
                background: 'transparent',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold)',
                padding: '12px 24px',
                borderRadius: '4px',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>VIEW SHOWTIMES</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheatresSection;
