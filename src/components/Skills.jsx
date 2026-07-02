import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAws, 
  FaDocker, FaGithub, FaPython, FaFigma, FaLaptopCode, 
  FaPalette, FaCloud, FaRobot, FaTools, FaCodeBranch, FaCode 
} from 'react-icons/fa';

const techLogos1 = [
  { node: <FaReact size={30} className="text-[#61DAFB]" />, title: "React" },
  { node: <FaJsSquare size={30} className="text-[#F7DF1E]" />, title: "JavaScript" },
  { node: <FaHtml5 size={30} className="text-[#E34F26]" />, title: "HTML5" },
  { node: <FaCss3Alt size={30} className="text-[#1572B6]" />, title: "CSS3" },
  { node: <FaPython size={30} className="text-[#3776AB]" />, title: "Python" },
  { node: <FaAws size={30} className="text-[#FF9900]" />, title: "AWS" },
  { node: <FaDocker size={30} className="text-[#2496ED]" />, title: "Docker" },
  { node: <FaGithub size={30} className="text-[#ffffff]" />, title: "GitHub" },
];

const techLogos2 = [
  { node: <FaFigma size={30} className="text-[#F24E1E]" />, title: "Figma" },
  { node: <FaCloud size={30} className="text-white/70" />, title: "Cloud Computing" },
  { node: <FaRobot size={30} className="text-white/70" />, title: "AI/ML" },
  { node: <FaCodeBranch size={30} className="text-white/70" />, title: "Version Control" },
  { node: <FaCode size={30} className="text-white/70" />, title: "Web Development" },
  { node: <FaTools size={30} className="text-white/70" />, title: "Problem Solving" },
  { node: <FaLaptopCode size={30} className="text-white/70" />, title: "Programming" },
  { node: <FaPalette size={30} className="text-white/70" />, title: "UI/UX" },
];

const Skills = () => (
  <section id="skills" className="w-full py-24 relative z-10 overflow-hidden bg-bgPrimary">
    <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16 text-center">
      <div className="text-accentRed text-sm font-bold tracking-widest uppercase mb-4 reveal">Toolkit</div>
      <h2 className="text-3xl md:text-5xl font-black text-white reveal delay-1">Skills &amp; Technologies</h2>
    </div>

    <div className="w-full relative py-8 flex flex-col gap-8 overflow-hidden">
      <Marquee speed={50} gradient={true} gradientColor={[8, 8, 8]} gradientWidth={100} direction="left" autoFill={true}>
        <div className="flex gap-6 pr-6">
          {techLogos1.map((item, i) => (
            <div key={i} className="skill-badge flex items-center gap-3 bg-[#111] border border-white/10 rounded-full px-5 py-2 hover:border-accentRed hover:shadow-[0_0_15px_rgba(232,0,29,0.3)] transition-all cursor-default">
              <span className="icon">{item.node}</span>
              <span className="text-sm font-semibold text-gray-200">{item.title}</span>
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee speed={40} gradient={true} gradientColor={[8, 8, 8]} gradientWidth={100} direction="right" autoFill={true}>
        <div className="flex gap-6 pr-6">
          {techLogos2.map((item, i) => (
            <div key={i} className="skill-badge flex items-center gap-3 bg-[#111] border border-white/10 rounded-full px-5 py-2 hover:border-accentRed hover:shadow-[0_0_15px_rgba(232,0,29,0.3)] transition-all cursor-default">
              <span className="icon">{item.node}</span>
              <span className="text-sm font-semibold text-gray-200">{item.title}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  </section>
);

export default Skills;
