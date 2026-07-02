import React from 'react';
import NeonButton from './NeonButton';

const Landing = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="landing" className="w-screen h-screen flex flex-col justify-center items-center relative z-10 -mt-[65px]">
      <div className="flex flex-col items-center text-center z-10 mt-20">
        <h1 className="font-sans text-[clamp(3rem,8vw,6rem)] font-black text-white tracking-tighter leading-tight uppercase mb-8">
          WELCOME TO <span className="text-accentRed">MY</span> <span className="text-accentOrange">Portfolio</span>
        </h1>
        <p className="font-sans text-sm font-semibold tracking-[0.3em] text-white/70 uppercase mb-14">
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto px-8 md:px-0">
          <NeonButton href="#hero" onClick={handleScroll}>
            Explore Portfolio
          </NeonButton>
          <NeonButton href="#contact" className="!bg-white/10 !border !border-white/10 backdrop-blur-md">
            Join Us
          </NeonButton>
        </div>
      </div>
      
      <div className="absolute bottom-12 flex flex-col items-center gap-2 text-white/50 text-xs font-semibold tracking-widest cursor-pointer hover:text-white transition-colors animate-bounce" onClick={handleScroll}>
        <span>SCROLL DOWN</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Landing;
