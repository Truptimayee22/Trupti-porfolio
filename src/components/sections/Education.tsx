import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { education } from '@/data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="05 — Education" />

        <motion.div
          className="relative border p-10 md:p-14 overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center mt-12 cursor-default"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Big background acronym watermark */}
          <div
            className="absolute -right-5 -bottom-8 font-black pointer-events-none select-none leading-none"
            style={{
              color: 'rgba(200, 245, 101, 0.04)',
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(100px, 12vw, 150px)',
              letterSpacing: '-5px',
            }}
          >
            MCA
          </div>

          <div className="relative z-10">
            <h3
              className="text-white font-black leading-tight mb-2"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-1px' }}
            >
              Master of
              <br />
              Computer Applications
            </h3>
            <div
              className="font-mono text-sm mb-1"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}
            >
              {education.school}
            </div>
            <div
              className="font-mono text-xs"
              style={{ color: 'var(--accent-primary)', letterSpacing: '0.1em' }}
            >
              {education.period}
            </div>
          </div>

          <div className="relative z-10 shrink-0 md:text-center flex flex-col md:items-center">
            <div
              className="font-black leading-none"
              style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(54px, 6vw, 64px)', color: 'var(--accent-primary)' }}
            >
              {education.cgpa}
            </div>
            <div
              className="font-mono text-xxs uppercase mt-1"
              style={{ color: 'var(--text-secondary)', letterSpacing: '0.15em' }}
            >
              CGPA
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
