import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, align = 'left' }) => {
  const isCenter = align === 'center';
  return (
    <motion.div
      className={`flex items-center gap-4 mb-16 font-mono text-xs uppercase tracking-widest ${isCenter ? 'justify-center' : ''}`}
      style={{ color: 'var(--accent-primary)', letterSpacing: '0.2em' }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Left horizontal line (40px) */}
      <div className="w-10 h-px shrink-0" style={{ background: 'var(--accent-primary)' }} />
      <span>{label}</span>
    </motion.div>
  );
};
