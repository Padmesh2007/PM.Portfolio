import React, { useEffect } from 'react';
import animeProfile from '../assets/profile imge1.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaPython, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

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
    <section id="hero">
      <div>
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">
            <span className="highlight">Padmesh</span><br />M.
          </h1>
          <div className="hero-role" style={{ display: 'inline-block', minHeight: '1.5em' }}>
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
          <p className="hero-desc">
            Passionate about technology. I specialize in Web Development and Web Design,
            High-performance applications and carry strong UI/UX skills to create impactful digital experiences.
          </p>
          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-social-icon"><FaGithub /></a>
            <a href="https://linkedin.com/in/padmesh-m-3b8ba4314" target="_blank" rel="noreferrer" className="hero-social-icon"><FaLinkedin /></a>
            <a href="mailto:padmeshmurugan07@gmail.com" className="hero-social-icon"><FaEnvelope /></a>
          </div>
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

        {/* RIGHT - character + floating icons */}
        <div className="hero-right reveal-right">
          <div className="float-icon"><FaReact style={{ color: '#61dafb' }} /></div>
          <div className="float-icon"><SiJavascript style={{ color: '#f7df1e' }} /></div>
          <div className="float-icon"><FaPython style={{ color: '#3776ab' }} /></div>
          <div className="float-icon"><FaFigma style={{ color: '#f24e1e' }} /></div>
          <div className="float-icon"><FaNodeJs style={{ color: '#339933' }} /></div>

          <div className="hero-profile-container">
            <img src={animeProfile} alt="Padmesh - Developer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
