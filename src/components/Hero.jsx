import React, { useEffect } from 'react';
import animeProfile from '../assets/profile imge1.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaPython, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import NeonButton from './NeonButton';

const Hero = () => {
  useEffect(() => {
    document.querySelectorAll('.hero-left > *').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity 0.7s ${i * 0.12}s ease, transform 0.7s ${i * 0.12}s ease`;
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, 80);
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen w-full relative flex items-center justify-center pt-24 pb-16 px-6 lg:px-16 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="hero-left flex flex-col items-start gap-2 z-20">
          <div className="text-white/70 text-sm md:text-base font-semibold mb-2">Hello, I'm</div>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter">
            <span className="text-accentRed">Padmesh</span><br />
            <span className="text-white">M.</span>
          </h1>
          <div className="text-xl md:text-2xl font-bold text-white h-8 mt-4 mb-2">
            <TypeAnimation
              sequence={[
                'Fullstack Developer', 2000,
                'UI/UX Designer', 2000,
                'Graphics Designer', 2000,
                'Cloud Management', 2000,
                'Poster & Logo Designer', 2000,
                'Hardware Supporter', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-sm md:text-base text-white/60 max-w-md leading-relaxed mt-2">
            Passionate about technology. I specialize in Web Development and Web Design,
            High-performance applications and carry strong UI/UX skills to create impactful digital experiences.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><FaGithub /></a>
            <a href="https://linkedin.com/in/padmesh-m-3b8ba4314" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><FaLinkedin /></a>
            <a href="mailto:padmeshmurugan07@gmail.com" className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><FaEnvelope /></a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full sm:w-auto">
            <NeonButton href="#projects">View Projects</NeonButton>
            <NeonButton href="#contact" className="!bg-bgPrimary !border-white/20 !shadow-none">Contact Me</NeonButton>
          </div>
        </div>

        {/* RIGHT - character + floating icons */}
        <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center reveal-right mt-16 lg:mt-0">
          
          <div className="absolute top-[5%] right-[12%] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-[bounce_4s_infinite] z-20">
            <FaReact className="text-2xl text-[#61dafb]" />
          </div>
          <div className="absolute top-[35%] left-[8%] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-[bounce_5s_infinite] z-20">
            <SiJavascript className="text-2xl text-[#f7df1e]" />
          </div>
          <div className="absolute bottom-[40%] right-[8%] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-[bounce_3s_infinite] z-20">
            <FaPython className="text-2xl text-[#3776ab]" />
          </div>
          <div className="absolute bottom-[10%] left-[18%] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-[bounce_6s_infinite] z-20">
            <FaFigma className="text-2xl text-[#f24e1e]" />
          </div>
          <div className="absolute bottom-[5%] right-[25%] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-[bounce_4.5s_infinite] z-20">
            <FaNodeJs className="text-2xl text-[#339933]" />
          </div>

          <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-[30px] overflow-hidden shadow-2xl relative z-10 border-4 border-bgSecondary bg-bgSecondary">
            <img src={animeProfile} alt="Padmesh - Developer" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
