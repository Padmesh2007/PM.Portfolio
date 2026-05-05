import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';

const VantaBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isDark, setIsDark] = useState(document.body.classList.contains('dark'));
  const vantaRef = useRef(null);

  // Watch for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Start/stop Vanta based on theme
  useEffect(() => {
    if (isDark && !vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0a0a,
          backgroundAlpha: 0.0,
          color1: 0xff0000,
          color2: 0xff4444,
          colorMode: 'variance',
          birdSize: 1.5,
          wingSpan: 30.0,
          speedLimit: 5.0,
          separation: 20.0,
          alignment: 20.0,
          cohesion: 20.0,
          quantity: 4.0,
        })
      );
    } else if (!isDark && vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }
    return () => {
      if (vantaEffect && !isDark) {
        vantaEffect.destroy();
      }
    };
  }, [isDark]);

  return (
    <div ref={vantaRef} style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      {children}
    </div>
  );
};

export default VantaBackground;

