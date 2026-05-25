import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { experiences } from '@/data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="04 — Experience" />

        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-16 py-12 border-b border-border first:border-t"
            >
              {/* Left Column: Period & Company */}
              <div className="pt-1">
                <div
                  className="text-xs md:text-sm font-mono font-medium mb-2"
                  style={{ color: 'var(--accent-primary)', letterSpacing: '0.1em' }}
                >
                  {exp.period}
                </div>
                <div
                  className="text-xs md:text-sm font-mono uppercase"
                  style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
                >
                  {exp.company}
                </div>
              </div>

              {/* Right Column: Role & Points */}
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-5"
                  style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '-0.5px' }}
                >
                  {exp.role}
                </h3>
                <ul className="space-y-3.5 list-none pl-0">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-6 text-sm md:text-base text-text-secondary leading-relaxed"
                    >
                      {/* Custom list bullet "—" */}
                      <span
                        className="absolute left-0 top-0 font-mono"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
