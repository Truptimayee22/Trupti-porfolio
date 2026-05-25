import React from 'react';
import { personalInfo } from '@/data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer
      className="py-10 px-6 md:px-16 border-t flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}
    >
      <span className="text-text-secondary text-xs uppercase font-mono tracking-wider">
        © {new Date().getFullYear()} {personalInfo.name}
      </span>
      <span className="text-text-secondary text-xs uppercase font-mono tracking-wider">
        {personalInfo.title} — {personalInfo.location}
      </span>
      <span className="text-text-secondary text-xs uppercase font-mono tracking-wider">
        Designed with intent.
      </span>
    </footer>
  );
};
