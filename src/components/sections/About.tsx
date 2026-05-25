import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { aboutStats } from '@/data/portfolio';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItemProps {
  value: string;
  label: string;
  started: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, started }) => {
  const numeric = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[\d]/g, '');
  const count = useCountUp(numeric, 1500, started);

  return (
    <div className="border-l-2 pl-4 py-1" style={{ borderColor: 'var(--accent-primary)' }}>
      <div
        className="text-4xl font-black leading-none"
        style={{ fontFamily: '"Playfair Display", serif', color: '#fafaf7' }}
      >
        {started ? `${count}${suffix}` : value}
      </div>
      <div
        className="text-xxs uppercase tracking-wider text-text-secondary mt-1"
        style={{ fontFamily: '"DM Mono", monospace' }}
      >
        {label}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 px-6 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="01 — About" />

        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mt-12">
          {/* Left Column: Title & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold leading-[1.1] text-white tracking-tight mb-12"
              style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '-1.5px' }}
            >
              I craft
              <br />
              <span className="italic" style={{ color: 'var(--accent-primary)' }}>experiences</span>
              <br />
              not just code.
            </h2>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 md:gap-12 mt-8">
              {aboutStats.map((stat) => (
                <StatItem key={stat.label} value={stat.value} label={stat.label} started={inView} />
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs */}
          <motion.div
            className="text-text-secondary text-sm md:text-base leading-relaxed space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              I'm a Full Stack Developer at Gravitones, Bhubaneswar, where I build and maintain production web applications using React.js, TypeScript, and Node.js — from authentication flows to payment integrations.
            </p>
            <p>
              My approach combines engineering precision with design sensitivity. I care about performance, security, and interfaces that users actually enjoy. Whether it's a geolocation marketplace or an admin dashboard, I build it to last.
            </p>
            <p>
              MCA graduate from GIET University with a CGPA of 9.09 — and a strong belief that great software is the intersection of clean code and thoughtful UX.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
