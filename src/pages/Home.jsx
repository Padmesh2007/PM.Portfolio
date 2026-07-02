import React, { useEffect } from 'react';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Achievements from '../components/Achievements';
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
      <ScrollProgress />
      <Landing />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
