import React from 'react';
import animeProfile from '../assets/profile image2.jpeg';

const About = () => (
  <section id="about" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
    <div className="reveal-left flex flex-col gap-6">
      <div className="w-full aspect-square rounded-[30px] overflow-hidden border-4 border-white/10 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-accentBlue/20 to-accentPurple/20 mix-blend-overlay"></div>
        <img src={animeProfile} alt="Padmesh" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="reveal flex flex-col items-start">
      <div className="text-accentRed text-sm font-bold tracking-widest uppercase mb-4">About Me</div>
      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">Building Meaningful<br />Digital Experiences</h2>
      <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
        I’m Padmesh M, based in Coimbatore, with a strong interest in creating meaningful digital experiences. I enjoy turning ideas into something practical, whether it’s building a project from scratch or improving an existing one with better structure and clarity.
      </p>
      <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
        I’ve been actively involved in hackathons, bootcamps, and team projects, which helped me understand how to approach real-world problems, work with different people, and stay consistent under pressure. These experiences shaped the way I think, plan, and execute my work.
      </p>
    </div>
  </section>
);

export default About;
