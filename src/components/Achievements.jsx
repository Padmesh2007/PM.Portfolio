import React from 'react';

const achs = [
  { badge: 'Finalist ×2', title: 'IDE Bootcamp — National Finalist', sub: '2025 & 2026' },
  { badge: 'Runner-Up', title: 'SRCAS 24-Hour Hackathon', sub: 'National Level' },
  { badge: 'First Prize', title: 'Biz Master Marketing Event', sub: 'Institutional Level' },
  { badge: 'Third Prize', title: 'Debugging Competition', sub: 'Technical Event' },
];

const Achievements = () => (
  <section id="achievements" style={{ background: 'var(--bg-secondary)' }}>
    <div className="section-label reveal">Recognition</div>
    <h2 className="section-heading reveal delay-1">Achievements</h2>
    <div className="ach-grid">
      {achs.map((a, i) => (
        <div className="ach-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
          <div className="ach-badge">{a.badge}</div>
          <div className="ach-title">{a.title}</div>
          <div className="ach-sub">{a.sub}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
