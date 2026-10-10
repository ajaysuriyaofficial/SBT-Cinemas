import React from 'react';
import { motion } from 'framer-motion';

// Import images
import vikram1 from '../assets/award/vikram/1.jpeg';
import vikram2 from '../assets/award/vikram/2.jpeg';
import dragon1 from '../assets/award/dragon/1.jpeg';
import dragon2 from '../assets/award/dragon/2.jpeg';
import amaran1 from '../assets/award/amaran/1.jpeg';
import amaran2 from '../assets/award/amaran/2.jpeg';

interface AwardCardProps {
  title: string;
  subtitle: string;
  description: string;
  personalities: { name: string; role: string }[];
  images: string[];
  reverse?: boolean;
  enlargeFirstImage?: boolean;
}

const AwardCard: React.FC<AwardCardProps> = ({ title, subtitle, description, personalities, images, reverse, enlargeFirstImage }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        background: 'linear-gradient(145deg, rgba(15, 20, 35, 0.7), rgba(5, 7, 15, 0.4))',
        borderRadius: '20px',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '40px',
        marginBottom: '60px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.6)'
      }}
      className="award-card"
    >
      <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3 style={{ fontSize: '36px', color: 'var(--color-white)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '2px' }}>{title}</h3>
          <h4 className="golden-text" style={{ fontSize: '18px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>{subtitle}</h4>
        </div>
        <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
        <p style={{ color: 'var(--color-silver)', lineHeight: 1.8, fontSize: '16px' }}>
          {description}
        </p>
        <div style={{ marginTop: '15px' }}>
          <h5 style={{ color: 'var(--color-white)', fontSize: '13px', marginBottom: '15px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.7 }}>With the presence of</h5>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {personalities.map((person, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
                <span style={{ color: 'var(--color-white)', fontWeight: 500, fontSize: '16px', letterSpacing: '0.5px' }}>{person.name}</span>
                <span style={{ color: 'rgba(160, 160, 160, 0.7)', fontSize: '14px', fontStyle: 'normal' }}>— {person.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="award-images-container" style={{ flex: '1 1 400px', display: 'flex', flexDirection: enlargeFirstImage ? 'column' : 'row', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
        {enlargeFirstImage ? (
          <>
            <div style={{ width: '100%' }}>
               <img src={images[0]} alt={`${title} Celebration 1`} style={{ width: '100%', maxHeight: '600px', borderRadius: '12px', objectFit: 'contain', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} className="award-img" />
            </div>
            <div style={{ width: '70%', alignSelf: reverse ? 'flex-end' : 'flex-start' }}>
               <img src={images[1]} alt={`${title} Celebration 2`} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} className="award-img" />
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
               <img src={images[0]} alt={`${title} Celebration 1`} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} className="award-img" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', marginTop: '50px' }}>
               <img src={images[1]} alt={`${title} Celebration 2`} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }} className="award-img" />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" style={{ minHeight: '100vh', position: 'relative', background: 'radial-gradient(circle at top, #0a1128 0%, #020202 70%)' }}>
      
      {/* Decorative background lighting */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

      <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '20px', color: '#fff', letterSpacing: '4px', fontWeight: 300 }}
        >
          <span style={{ fontWeight: 700 }}>100-Day Celebrations</span> & Awards
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: 'var(--color-silver)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}
        >
          Celebrating Cinema. Honouring Success. Creating Memories.<br/>
          At SBT Cinemas, every successful film is a celebration shared with its audience. We are honoured to have celebrated remarkable cinematic milestones and received recognition for the success of outstanding films.
        </motion.p>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        
        <AwardCard
          title="Dragon"
          subtitle="100 Days Celebration"
          description="Celebrating the success of Dragon and its 100-day milestone. A special moment recognising the talent, creativity, and teamwork behind the film’s journey."
          personalities={[
            { name: "Pradeep Ranganathan", role: "Actor" },
            { name: "Ashwath Marimuthu", role: "Director" },
            { name: "Archana Kalpathi", role: "Creative Producer" }
          ]}
          images={[dragon1, dragon2]}
          enlargeFirstImage={true}
        />
        
        <AwardCard
          title="Amaran"
          subtitle="100 Days Celebration"
          description="Honouring the remarkable journey of Amaran and its 100-day milestone. A proud celebration of the film’s success and the people whose performances and dedication brought its story to life."
          personalities={[
            { name: "Kamal Haasan", role: "Producer" },
            { name: "Sivakarthikeyan", role: "Actor" },
            { name: "Sai Pallavi", role: "Actor" }
          ]}
          images={[amaran1, amaran2]}
          reverse={true}
          enlargeFirstImage={true}
        />

        <AwardCard
          title="Vikram"
          subtitle="100 Days Celebration"
          description="Celebrating the phenomenal success of Vikram and its remarkable 100-day milestone. An unforgettable occasion honouring the people behind this cinematic achievement."
          personalities={[
            { name: "Kamal Haasan", role: "Actor and Producer" },
            { name: "Lokesh Kanagaraj", role: "Director" },
            { name: "Udhayanidhi Stalin", role: "Film Producer and Actor" }
          ]}
          images={[vikram1, vikram2]}
        />


        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '40px', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <h4 className="golden-text" style={{ letterSpacing: '4px', fontSize: '14px', textTransform: 'uppercase' }}>
            Our Pride. Our Cinema. Our Legacy.
          </h4>
          <p style={{ color: 'var(--color-silver)', maxWidth: '600px', margin: '20px auto 0', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Every award tells a story. Every celebration marks a milestone. At SBT Cinemas, we cherish the moments that bring filmmakers, artists, and audiences together.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AwardsSection;
