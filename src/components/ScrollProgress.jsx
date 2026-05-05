import React, { useEffect } from 'react';

const ScrollProgress = () => {
  useEffect(() => {
    const prog = document.getElementById('progress');
    const onScroll = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (prog) {
        prog.style.width = (p * 100) + '%';
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="progress"></div>;
};

export default ScrollProgress;
