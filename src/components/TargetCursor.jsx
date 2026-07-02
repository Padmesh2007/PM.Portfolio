import { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

const getContainingBlock = element => {
  let node = element?.parentElement;
  while (node && node !== document.documentElement) {
    const style = getComputedStyle(node);
    if (
      style.transform !== 'none' ||
      style.perspective !== 'none' ||
      style.filter !== 'none' ||
      style.willChange.includes('transform') ||
      style.willChange.includes('perspective') ||
      style.willChange.includes('filter') ||
      /paint|layout|strict|content/.test(style.contain)
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
};

const getContainingBlockOffset = block => {
  if (!block) return { x: 0, y: 0 };
  const rect = block.getBoundingClientRect();
  return { x: rect.left + block.clientLeft, y: rect.top + block.clientTop };
};

const TargetCursor = ({
  targetSelector = '.cursor-target, .btn-primary, .btn-outline, a, button',
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
  cursorColor = '#ffffff',
  cursorColorOnTarget = '#e8001d'
}) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);
  const containingBlockRef = useRef(null);
  
  const isActiveRef = useRef(false);
  const targetCornerPositionsRef = useRef(null);
  const activeStrengthRef = useRef(0);

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    return (hasTouchScreen && isSmallScreen);
  }, []);

  const constants = useMemo(
    () => ({
      borderWidth: 2,
      cornerSize: 12
    }),
    []
  );

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');

    containingBlockRef.current = getContainingBlock(cursor);
    const getOffset = () => getContainingBlockOffset(containingBlockRef.current);

    let activeTarget = null;
    let currentLeaveHandler = null;

    const initialOffset = getOffset();
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2 - initialOffset.x,
      y: window.innerHeight / 2 - initialOffset.y
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    };

    createSpinTimeline();

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // QuickSetter for smooth tracking
    const xSet = gsap.quickSetter(cursor, 'x', 'px');
    const ySet = gsap.quickSetter(cursor, 'y', 'px');
    
    const onMouseMove = (e) => {
      const offset = getOffset();
      mouseX = e.clientX - offset.x;
      mouseY = e.clientY - offset.y;
      
      if (!isActiveRef.current) {
        gsap.to(cursor, {
          x: mouseX,
          y: mouseY,
          duration: 0.1,
          ease: 'power3.out'
        });
      } else if (parallaxOn && activeTarget) {
        const rect = activeTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.2;
        const deltaY = (e.clientY - centerY) * 0.2;
        
        gsap.to(cursor, {
          x: centerX + deltaX - offset.x,
          y: centerY + deltaY - offset.y,
          duration: hoverDuration,
          ease: 'power3.out'
        });
      }
    };

    const targets = document.querySelectorAll(targetSelector);
    
    const onMouseEnterTarget = (e) => {
      const target = e.currentTarget;
      activeTarget = target;
      isActiveRef.current = true;
      activeStrengthRef.current = 1;
      
      if (spinTl.current) {
        spinTl.current.pause();
      }
      
      const rect = target.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      
      const padding = 8;
      const targetW = w + padding * 2;
      const targetH = h + padding * 2;
      
      // Calculate corner targets
      const corners = Array.from(cornersRef.current);
      gsap.to(corners[0], { x: -targetW/2, y: -targetH/2, duration: hoverDuration }); // top-left
      gsap.to(corners[1], { x: targetW/2, y: -targetH/2, duration: hoverDuration });  // top-right
      gsap.to(corners[2], { x: targetW/2, y: targetH/2, duration: hoverDuration });   // bottom-right
      gsap.to(corners[3], { x: -targetW/2, y: targetH/2, duration: hoverDuration });  // bottom-left
      
      gsap.to(cursor, { rotation: 0, duration: hoverDuration });
      if (cursorColorOnTarget) {
        gsap.to(corners, { borderColor: cursorColorOnTarget, duration: hoverDuration });
        if (dotRef.current) gsap.to(dotRef.current, { backgroundColor: cursorColorOnTarget, duration: hoverDuration });
      }
      
      const offset = getOffset();
      gsap.to(cursor, {
        x: rect.left + w/2 - offset.x,
        y: rect.top + h/2 - offset.y,
        duration: hoverDuration,
        ease: 'power3.out'
      });
    };
    
    const onMouseLeaveTarget = () => {
      isActiveRef.current = false;
      activeTarget = null;
      activeStrengthRef.current = 0;
      
      const corners = Array.from(cornersRef.current);
      const d = 16; // default distance
      gsap.to(corners[0], { x: -d, y: -d, duration: hoverDuration });
      gsap.to(corners[1], { x: d, y: -d, duration: hoverDuration });
      gsap.to(corners[2], { x: d, y: d, duration: hoverDuration });
      gsap.to(corners[3], { x: -d, y: d, duration: hoverDuration });
      
      if (cursorColorOnTarget) {
        gsap.to(corners, { borderColor: cursorColor, duration: hoverDuration });
        if (dotRef.current) gsap.to(dotRef.current, { backgroundColor: cursorColor, duration: hoverDuration });
      }
      
      if (spinTl.current) {
        spinTl.current.play();
      }
      
      // return to mouse
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: hoverDuration,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    targets.forEach(t => {
      t.addEventListener('mouseenter', onMouseEnterTarget);
      t.addEventListener('mouseleave', onMouseLeaveTarget);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      targets.forEach(t => {
        t.removeEventListener('mouseenter', onMouseEnterTarget);
        t.removeEventListener('mouseleave', onMouseLeaveTarget);
      });
      if (hideDefaultCursor) {
        document.body.style.cursor = 'auto';
      }
    };
  }, [isMobile, hideDefaultCursor, spinDuration, hoverDuration, parallaxOn, targetSelector, cursorColor, cursorColorOnTarget]);

  if (isMobile) return null;

  return (
    <div className="target-cursor-container" ref={cursorRef}>
      <div className="target-cursor-dot" ref={dotRef} style={{ backgroundColor: cursorColor }} />
      <div className="target-cursor-corner corner-tl" style={{ borderColor: cursorColor }} />
      <div className="target-cursor-corner corner-tr" style={{ borderColor: cursorColor }} />
      <div className="target-cursor-corner corner-br" style={{ borderColor: cursorColor }} />
      <div className="target-cursor-corner corner-bl" style={{ borderColor: cursorColor }} />
    </div>
  );
};

export default TargetCursor;
