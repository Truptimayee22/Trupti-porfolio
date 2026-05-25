import React from 'react';
import { motion } from 'framer-motion';
import { ParticleCanvas } from '@/components/ui/ParticleCanvas';
import { personalInfo } from '@/data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 pb-20 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Particles */}
      <ParticleCanvas particleCount={70} color="#c8f565" connectionDistance={100} speed={0.2} />

      {/* Big Watermark Text */}
      <div
        className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 text-9xl md:text-[320px] font-black select-none pointer-events-none tracking-tighter"
        style={{
          fontFamily: '"Playfair Display", serif',
          color: 'rgba(255, 255, 255, 0.025)',
          letterSpacing: '-10px',
        }}
      >
        TS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Tagline */}
        <motion.p
          className="text-xs md:text-sm tracking-widest uppercase mb-6"
          style={{ color: 'var(--accent-primary)', fontFamily: '"DM Mono", monospace', letterSpacing: '0.2em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ✦ Full Stack Developer — Bhubaneswar, Odisha
        </motion.p>

        {/* Big Name Title */}
        <motion.h1
          className="text-6xl md:text-[110px] font-black leading-[0.92] text-white mb-10 tracking-tighter"
          style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '-3px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Trupti<span className="italic" style={{ color: 'var(--accent-primary)' }}>mayee</span>
          <br />
          Sahu.
        </motion.h1>

        {/* Sub text and CTA */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 mt-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-text-secondary text-sm md:text-base max-w-sm leading-relaxed">
            Building scalable, pixel-perfect web applications — from payment gateways to geolocation-powered marketplaces.
          </p>

          <div className="flex flex-wrap gap-4 shrink-0">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center font-mono text-xs uppercase font-bold tracking-wider px-8 py-4 transition-all cursor-pointer"
              style={{
                background: 'var(--accent-primary)',
                color: '#0A0A0A',
                letterSpacing: '0.1em',
              }}
              whileHover={{ background: '#fafaf7', y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch ↗
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Truptimayee_Sahu_Resume.pdf"
              className="inline-flex items-center justify-center font-mono text-xs uppercase font-bold tracking-wider px-8 py-4 border transition-all cursor-pointer"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
                letterSpacing: '0.1em',
              }}
              whileHover={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV ⤓
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-16 flex items-center gap-4 origin-right"
        style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: '10px',
          color: 'var(--text-secondary)',
          letterSpacing: '0.15em',
          writingMode: 'vertical-rl',
          textTransform: 'uppercase',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>Scroll</span>
        <div
          className="w-px h-16"
          style={{
            background: 'var(--text-secondary)',
            animation: 'scrollLine 2s infinite',
          }}
        />
      </motion.div>

      {/* Scroll Animation Keyframes style injection */}
      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
};
