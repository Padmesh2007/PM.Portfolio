import React from 'react';
import PillNav from './PillNav';
import pmLogo from '../assets/PM logo.png';

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf" },
];

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          logo={pmLogo}
          logoAlt="PM Logo"
          items={navItems}
          className="custom-nav"
          baseColor="#18181b"
          pillColor="#18181b"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#d1d5db"
        />
      </div>
    </div>
  );
};

export default Navbar;
