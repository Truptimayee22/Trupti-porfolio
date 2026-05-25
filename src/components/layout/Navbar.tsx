import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { navLinks, personalInfo } from '@/data/portfolio';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 100);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <span
            className="text-lg font-bold"
            style={{ fontFamily: '"Space Mono", monospace', color: 'var(--accent-primary)' }}
          >
            &lt;/&gt;
          </span>
          <span className="ml-2 text-text-primary font-medium" style={{ fontFamily: '"Space Mono", monospace' }}>
            {personalInfo.name.split(' ')[0]}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="active-nav"
              className="text-sm text-text-secondary hover:text-accent-primary transition-colors cursor-pointer relative group"
              style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: 'var(--accent-primary)' }}
              />
            </Link>
          ))}

          {/* Available badge */}
          {personalInfo.availableForFreelance && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs"
              style={{ borderColor: 'var(--border)', color: 'var(--accent-primary)', fontFamily: '"Space Mono", monospace', fontSize: '11px' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 cursor-blink" />
              Available
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-secondary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1">
            <motion.span
              className="block h-px bg-accent-primary"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }}
            />
            <motion.span
              className="block h-px bg-accent-primary"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block h-px bg-accent-primary"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4 : 0 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 z-50 flex flex-col pt-20 px-8 gap-6"
            style={{ background: 'var(--bg-secondary)', borderLeft: '1px solid var(--border)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer text-lg"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
