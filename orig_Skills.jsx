import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAws,
  FaDocker, FaGithub, FaPython, FaFigma, FaLaptopCode, FaPalette, FaCloud, FaRobot, FaTools, FaCodeBranch, FaCode
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiMysql, SiCanva } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 style={{ color: '#e34f26' }} />, label: 'HTML5' },
  { icon: <FaCss3Alt style={{ color: '#1572b6' }} />, label: 'CSS3' },
  { icon: <FaJsSquare style={{ color: '#f7df1e' }} />, label: 'JavaScript' },
  { icon: <FaReact style={{ color: '#61dafb' }} />, label: 'React.js' },
  { icon: <SiCplusplus style={{ color: '#00599c' }} />, label: 'C++' },
  { icon: <SiC style={{ color: '#a8b9cc' }} />, label: 'C' },
  { icon: <FaPython style={{ color: '#3776ab' }} />, label: 'Python' },
  { icon: <SiMysql style={{ color: '#4479a1' }} />, label: 'SQL' },
  { icon: '📊', label: 'Data Mining' },
  { icon: '🧠', label: 'Problem Solving' },
  { icon: '🐛', label: 'Debugging' },
];

const designCloudAi = [
  { icon: <FaFigma style={{ color: '#f24e1e' }} />, label: 'Figma' },
  { icon: <SiCanva style={{ color: '#00c4cc' }} />, label: 'Canva' },
  { icon: '✏️', label: 'Wireframing' },
  { icon: '🎨', label: 'Logo Design' },
  { icon: <FaAws style={{ color: '#ff9900' }} />, label: 'AWS' },
  { icon: '🔐', label: 'AWS IAM' },
  { icon: '☁️', label: 'Cloud Mgmt' },
  { icon: '🌐', label: 'Web Hosting' },
  { icon: '🤖', label: 'AI Fundamentals' },
  { icon: '🪄', label: 'Gen AI Tools' },
  { icon: <FaGithub style={{ color: 'var(--text-main)' }} />, label: 'GitHub Copilot' },
  { icon: <FaCodeBranch style={{ color: '#f14e32' }} />, label: 'Git & GitHub' },
  { icon: <FaCode style={{ color: '#007acc' }} />, label: 'VSCode' },
  { icon: '🔄', label: 'Agile Basics' },
  { icon: '🌍', label: 'Cross-Browser' },
];

const SkillBadge = ({ icon, label }) => (
  <div className="skill-badge">
    <span className="icon">{icon}</span>
    <span>{label}</span>
  </div>
);

const Skills = () => (
  <section id="skills" style={{ maxWidth: '100%', padding: '6rem 0' }}>
    <div className="skills-header">
      <div className="section-label">Technical Expertise</div>
      <h2 className="section-heading">My Arsenal</h2>
    </div>
    <div className="skills-marquee-track">
      <Marquee speed={30} gradient={true} gradientColor={[255,255,255]} gradientWidth={80} pauseOnHover={true}>
        <div className="skills-marquee-inner">
          {[...skills, ...skills].map((s, i) => <SkillBadge key={i} {...s} />)}
        </div>
      </Marquee>
    </div>
    <div className="skills-marquee-track" style={{ marginTop: '1rem' }}>
      <Marquee speed={25} direction="right" gradient={true} gradientColor={[255,255,255]} gradientWidth={80} pauseOnHover={true}>
        <div className="skills-marquee-inner rev">
          {[...designCloudAi, ...designCloudAi].map((s, i) => <SkillBadge key={i} {...s} />)}
        </div>
      </Marquee>
    </div>
  </section>
);

export default Skills;
