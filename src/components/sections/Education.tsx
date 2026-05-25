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
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="py-4">
            <h3
              className="text-2xl md:text-4xl text-white font-normal leading-tight"
              style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '-0.5px' }}
            >
              {education.degree}
            </h3>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4 font-mono text-xs md:text-sm tracking-wider">
              <div className="text-text-secondary">
                {education.school} &middot; {education.cgpa} CGPA
              </div>
              <div className="text-[#00D4FF] whitespace-nowrap">
                {education.period}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
