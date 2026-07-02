import React from 'react';
import './TiltWrapper.css';

const TiltWrapper = ({ children, className = '' }) => {
  return (
    <div className={`tilt-card-container ${className}`}>
      <div className="tilt-card-wrapper">
        <div className="tilt-card-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TiltWrapper;
