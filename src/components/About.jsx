import React from 'react';
import animeProfile from '../assets/profile image2.jpeg';

const About = () => (
  <section id="about">
    <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div className="about-img">
        <img src={animeProfile} alt="Padmesh" />
      </div>
      {/* Spoken Languages */}
      <div style={{ background: 'var(--bg-secondary)', border: '1.5px solid var(--border-color)', borderRadius: '10px', padding: '1rem' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Spoken Languages</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {['English', 'Tamil', 'Telugu', 'Malayalam'].map(l => (
            <span key={l} style={{ background: 'var(--bg-primary)', border: '1.5px solid var(--border-color)', borderRadius: '50px', padding: '0.3rem 0.9rem', fontSize: '0.82rem', fontWeight: 600 }}>{l}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="about-main reveal">
      <div className="section-label">About Me</div>
      <h2 className="section-heading">Building Meaningful<br />Digital Experiences</h2>
      <p className="about-desc">
        I’m Padmesh M, based in Coimbatore, with a strong interest in creating meaningful digital experiences. I enjoy turning ideas into something practical, whether it’s building a project from scratch or improving an existing one with better structure and clarity.

        I’ve been actively involved in hackathons, bootcamps, and team projects, which helped me understand how to approach real-world problems, work with different people, and stay consistent under pressure. These experiences shaped the way I think, plan, and execute my work.      </p>
      <p className="about-desc">
        I prefer keeping things simple, focused, and purposeful. Instead of overcomplicating, I aim to create solutions that are clear, useful, and easy to understand. I’m continuously learning, improving, and looking for opportunities where I can grow by working on real challenges.      </p>
      <div className="about-stats">
        <div className="about-stat"><div className="about-stat-num">5+</div><div className="about-stat-label">Projects</div></div>
        <div className="about-stat"><div className="about-stat-num">7+</div><div className="about-stat-label">Hackathons</div></div>
        <div className="about-stat"><div className="about-stat-num">3</div><div className="about-stat-label">Internships</div></div>
        <div className="about-stat"><div className="about-stat-num">8.08</div><div className="about-stat-label">CGPA</div></div>
      </div>
    </div>
  </section>
);

export default About;
