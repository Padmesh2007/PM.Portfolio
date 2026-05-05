import React from 'react';
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
  <section id="projects">
    <div className="section-label reveal">Selected Work</div>
    <h2 className="section-heading reveal delay-1">Projects</h2>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div className="flip-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={p.img} alt={p.title} />
              <div className="flip-card-front-label">{p.tag}</div>
            </div>
            <div className="flip-card-back">
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => <span className="tech-chip" key={j}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
