import React from 'react';
import Interactive3DCard from './Interactive3DCard';
import img1 from '../assets/anime_project_1.png';
import img2 from '../assets/anime_project_2.png';
import img3 from '../assets/anime_project_3.png';

const projects = [
  { img: img1, tag: 'UI/UX · Featured', title: 'FRA-ATLAS Dashboard', desc: 'A multilingual claim management dashboard designed with a focus on usability and structured data presentation.', tech: ['Figma', 'Canva', 'UI/UX'] },
  { img: img2, tag: 'Web App', title: 'VerifyAI', desc: 'A web-based verification system built with frontend and API integration, focused on data validation flows.', tech: ['HTML/CSS', 'JavaScript', 'API'] },
  { img: img3, tag: 'React · Frontend', title: 'Forest Network Simulator', desc: 'Interactive React app to simulate and visualize network behavior with dynamic rendering.', tech: ['React.js', 'JavaScript'] },
  { img: img1, tag: 'Mobile · Flutter', title: 'Traffic Simulation', desc: 'Mobile-based traffic flow simulation with real-time visualization built using Flutter.', tech: ['Flutter', 'Dart'] },
  { img: img3, tag: 'Python · CV', title: 'Hand Gesture Controller', desc: 'Computer vision system enabling real-time gesture-based interaction, built with Python.', tech: ['Python', 'OpenCV'] },
];

const Projects = () => (
  <section id="projects" className="py-32 px-8 max-w-7xl mx-auto relative z-10">
    <div className="text-accentRed text-sm font-bold tracking-widest uppercase mb-4 reveal">Selected Work</div>
    <h2 className="text-4xl md:text-6xl font-black text-white mb-16 reveal delay-1">Projects</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div className="reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
          <Interactive3DCard {...p} />
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
