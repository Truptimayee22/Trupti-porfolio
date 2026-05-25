import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import '@/styles/globals.css';

// Lazy load below-fold sections
const About = lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('@/components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('@/components/sections/Projects').then(m => ({ default: m.Projects })));
const Experience = lazy(() => import('@/components/sections/Experience').then(m => ({ default: m.Experience })));
const Education = lazy(() => import('@/components/sections/Education').then(m => ({ default: m.Education })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mx = 0, my = 0, fx = 0, fy = 0;
    let scale = 1;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px) scale(${scale})`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest?.('a, button, [role="button"]')) {
        scale = 2;
        follower.style.opacity = '0.4';
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest?.('a, button, [role="button"]')) {
        scale = 1;
        follower.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    let animId: number;
    const animFollower = () => {
      fx += (mx - fx - 18) * 0.12;
      fy += (my - fy - 18) * 0.12;
      follower.style.transform = `translate(${fx}px, ${fy}px)`;
      animId = requestAnimationFrame(animFollower);
    };
    animFollower();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ height: 200 }} />}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
