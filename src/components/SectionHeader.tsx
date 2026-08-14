import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
        <span className="w-8 h-[2px] bg-accent"></span>
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
};
