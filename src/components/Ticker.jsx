import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaBolt } from 'react-icons/fa';

const items = [
  'Web Development', 'UI/UX Design', 'React.js', 'Figma',
  'Frontend Dev', 'AWS Cloud', 'Open To Work', 'Coimbatore, India',
];

const Ticker = () => (
  <div className="ticker-strip" style={{ maxWidth: '100%' }}>
    <Marquee speed={60} gradient={false}>
      {[...items, ...items].map((item, i) => (
        <span key={i} style={{
          fontFamily: 'var(--font)', fontSize: '0.9rem', fontWeight: '600',
          color: 'var(--text-muted)', marginRight: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
        }}>
          <FaBolt style={{ color: 'var(--accent-red)', fontSize: '0.75rem' }} /> {item}
        </span>
      ))}
    </Marquee>
  </div>
);

export default Ticker;
