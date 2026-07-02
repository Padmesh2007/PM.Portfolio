import React from 'react';
import './Interactive3DCard.css';

const Interactive3DCard = ({ img, tag, title, desc, tech }) => {
  return (
    <div className="card3d-container cursor-target">
      <div className="card3d-wrapper">
        <img src={img} alt={title} className="card3d-bg" />
        
        {/* The overlay that appears on hover, similar to the ::before/::after in the reference */}
        <div className="card3d-overlay"></div>
        
        {/* The content that "pops out" on hover */}
        <div className="card3d-content">
          <div className="card3d-tag">{tag}</div>
          <h3 className="card3d-title">{title}</h3>
          <p className="card3d-desc">{desc}</p>
          <div className="card3d-tech">
            {tech.map((t, j) => <span key={j}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DCard;
