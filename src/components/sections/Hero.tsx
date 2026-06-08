import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Visual Diagonal Stripes Banner */}
      <div className="w-full h-10 border-b border-border-grid diagonal-stripes" />

      {/* Main Text Content Area */}
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 md:px-8 pt-8 pb-8 border-b border-border-grid">
        <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold text-text-primary tracking-tight mb-4 uppercase">
          Bots
        </h1>
        <p className="max-w-xl text-[11px] sm:text-xs text-text-secondary leading-[1.7] select-none font-sans font-normal">
          Bots I've built along the way, shaped by curiosity, AI, and a focus on building things that actually work and mean something.
        </p>
      </div>
    </div>
  );
};
