import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-sm bg-[#09090b] px-2 py-1 text-[10px] font-medium text-[#a1a1aa] border border-[#27272a] select-none uppercase tracking-wide">
      {children}
    </span>
  );
};
