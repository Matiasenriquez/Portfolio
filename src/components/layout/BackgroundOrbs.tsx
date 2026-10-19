import React from 'react';

export const BackgroundOrbs: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Subtle Architectural Grid */}
      <div className="bg-grid-pattern absolute inset-0 opacity-65 dark:opacity-35" />

      {/* Google Blue Orb — Top Left */}
      <div
        className="absolute -top-36 -left-36 h-[440px] w-[440px] rounded-full opacity-20 blur-[120px] transition-opacity duration-700 dark:opacity-18"
        style={{ background: 'var(--google-blue)' }}
      />

      {/* Google Green Orb — Top Right */}
      <div
        className="absolute top-[12%] -right-32 h-[380px] w-[380px] rounded-full opacity-15 blur-[120px] transition-opacity duration-700 dark:opacity-14"
        style={{ background: 'var(--google-green)' }}
      />

      {/* Google Yellow Orb — Middle Left */}
      <div
        className="absolute top-[48%] -left-28 h-[360px] w-[360px] rounded-full opacity-15 blur-[130px] transition-opacity duration-700 dark:opacity-12"
        style={{ background: 'var(--google-yellow)' }}
      />

      {/* Google Red Orb — Bottom Right */}
      <div
        className="absolute bottom-[8%] right-[5%] h-[400px] w-[400px] rounded-full opacity-15 blur-[135px] transition-opacity duration-700 dark:opacity-14"
        style={{ background: 'var(--google-red)' }}
      />
    </div>
  );
};
