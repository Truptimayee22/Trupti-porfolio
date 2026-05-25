import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  glowColor = 'var(--accent-primary)',
  className = '',
}) => {
  return (
    <motion.div
      className={`rounded-lg border bg-bg-card p-6 ${className}`}
      style={{ borderColor: `${glowColor}22` }}
      whileHover={{
        y: -6,
        borderColor: `${glowColor}66`,
        boxShadow: `0 0 30px ${glowColor}26`,
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  );
};
