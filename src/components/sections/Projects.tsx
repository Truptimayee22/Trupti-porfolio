import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projects } from '@/data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="03 — Projects" />

        <motion.div
          className="flex flex-col border border-border mt-12 bg-border gap-px"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => {
            const displayId = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group bg-bg-primary p-8 md:p-12 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start transition-all duration-300 border border-transparent hover:border-border hover:bg-bg-secondary cursor-default overflow-hidden"
              >
                {/* Left accent bar on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"
                  style={{ background: 'var(--accent-primary)' }}
                />

                {/* Big project index number */}
                <div
                  className="text-5xl font-black leading-none text-white/5 transition-colors duration-200 group-hover:text-accent-primary/20 md:block hidden pt-1"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {displayId}
                </div>

                {/* Project details */}
                <div className="relative z-10">
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '-0.5px' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xxs uppercase tracking-wider text-text-secondary border border-border px-2.5 py-1 bg-white/5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project year */}
                <div
                  className="font-mono text-xs text-text-secondary md:pt-2 text-right shrink-0"
                  style={{ letterSpacing: '0.08em' }}
                >
                  2024
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
