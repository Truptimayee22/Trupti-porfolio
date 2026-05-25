import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillGroups } from '@/data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="02 — Skills" />

        <motion.div
          className="grid md:grid-cols-3 bg-border gap-px border border-border mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="relative group bg-bg-primary p-10 overflow-hidden transition-colors duration-200 hover:bg-bg-secondary"
            >
              {/* Top/Category Icon */}
              <div className="text-3xl mb-6 text-white">
                {group.category.toLowerCase().includes('front') ? '⬡' : 
                 group.category.toLowerCase().includes('back') ? '⬢' : '◈'}
              </div>

              {/* Title */}
              <div
                className="text-xs uppercase tracking-widest mb-6 font-mono font-medium text-accent-primary"
                style={{ letterSpacing: '0.15em' }}
              >
                {group.category}
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-text-primary px-3 py-1 bg-white/5 border border-border rounded-sm transition-all duration-200 hover:border-accent-primary hover:text-accent-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Expanding Accent Line on Hover */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-accent-primary"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
