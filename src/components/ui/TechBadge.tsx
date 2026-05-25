import React from 'react';

interface TechBadgeProps {
  name: string;
  color?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, color = 'var(--accent-primary)' }) => {
  return (
    <span
      className="inline-block px-3 py-1 text-xs font-mono rounded-full border transition-colors duration-200 cursor-default"
      style={{
        borderColor: `${color}33`,
        color: color,
        backgroundColor: `${color}0D`,
        fontFamily: '"Fira Code", monospace',
      }}
    >
      {name}
    </span>
  );
};
