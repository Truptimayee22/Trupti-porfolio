import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

export const ScrollProgress: React.FC = () => {
  const scaleX = useScrollProgress();
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, width: '100%' }}
    />
  );
};
