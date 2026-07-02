import React, { useState } from 'react';
import './NeonButton.css';

const NeonButton = ({ children, onClick, href, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderParticles = () => {
    if (!isHovered) return null;
    
    return Array.from({ length: 12 }).map((_, i) => (
      <div 
        key={i} 
        className={`neon-particle particle-${i}`}
      ></div>
    ));
  };

  const content = (
    <>
      <span className="neon-button-content">
        <span className="sparkle">✦</span>
        <span className="button-text">{children}</span>
      </span>
      {renderParticles()}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`neon-button cursor-target ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`neon-button cursor-target ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};

export default NeonButton;
