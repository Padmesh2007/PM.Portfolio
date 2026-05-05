import React, { useEffect } from 'react';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Hackathons from '../components/Hackathons';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => obs.observe(el));

    return () => {
      reveals.forEach(el => obs.unobserve(el));
    };
  }, []);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Hackathons />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
