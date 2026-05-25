import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { personalInfo } from '@/data/portfolio';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-16 text-center border-t border-border"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="06 — Contact" align="center" />

        <motion.h2
          className="text-5xl md:text-[96px] font-black leading-[0.95] text-white tracking-tighter mb-10 mt-12"
          style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '-3px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's build
          <br />
          something <span className="italic" style={{ color: 'var(--accent-primary)' }}>great.</span>
        </motion.h2>

        <motion.p
          className="text-text-secondary text-sm md:text-base max-w-md mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Open to new opportunities, collaborations, and interesting projects. Let's talk.
        </motion.p>

        {/* Contact Links Button Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Primary Action Email Button */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2.5 font-mono text-xs uppercase font-bold tracking-wider px-7 py-4 border transition-all cursor-pointer"
            style={{
              background: 'var(--accent-primary)',
              color: '#0A0A0A',
              borderColor: 'var(--accent-primary)',
              letterSpacing: '0.1em',
            }}
            whileHover={{ background: '#fafaf7', borderColor: '#fafaf7', y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            ✉ {personalInfo.email}
          </motion.a>

          {/* Phone Button */}
          <motion.a
            href="tel:+916371985887"
            className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider px-7 py-4 border transition-all cursor-pointer"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border)',
              letterSpacing: '0.1em',
            }}
            whileHover={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            📞 +91 6371985887
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider px-7 py-4 border transition-all cursor-pointer"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border)',
              letterSpacing: '0.1em',
            }}
            whileHover={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            LinkedIn ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
