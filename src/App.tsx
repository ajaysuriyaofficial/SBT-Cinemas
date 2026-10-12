import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScreensSection from './components/ScreensSection';

import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CelebrityVisit from './components/CelebrityVisit';
import AwardsSection from './components/AwardsSection';
import AboutSection from './components/AboutSection';
import './App.css';
import backgroundVideo from './assets/video/sbt_cinemas_video_wallpaper4K_HIGH_FR30.mp4';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a tiny delay for smoothness after load event
      setTimeout(() => setLoading(false), 400); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      
      // Fallback timeout: never keep visitors waiting indefinitely if a resource hangs
      const fallbackTimer = setTimeout(() => {
        setLoading(false);
      }, 5000);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Video Background Wallpaper */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-wallpaper"
        src={backgroundVideo}
      />

      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.2} />
            <spotLight position={[0, 10, 0]} intensity={1} color="#d4af37" penumbra={1} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      <div className={`content-layer ${loading ? 'hidden' : 'visible'}`}>
        <Navbar />
        <main>
          <Hero />
          <ScreensSection />
          <ExperienceSection />
          <CelebrityVisit />
          <AwardsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
