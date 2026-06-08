import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../../config/projects";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface CardProps {
  project: Project;
}

export const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="flex flex-col bg-card-bg border border-border-card rounded-lg overflow-hidden group hover:border-border-grid transition-all duration-300">
      {/* Padded Image Container */}
      <div className="p-3 bg-card-header-bg border-b border-border-card">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border-grid bg-background">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-w-7xl) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Header: Title & Date */}
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="text-sm font-bold text-text-primary tracking-tight">
            {project.title}
          </h3>
          <span className="text-[10px] text-text-secondary font-mono tracking-wider">
            {project.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-[11px] text-text-secondary leading-[1.6] text-justify select-none font-sans font-normal">
          {project.description}
        </p>
      </div>

      {/* Split Action Buttons */}
      <div className="grid grid-cols-2 border-t border-border-card text-center text-xs">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 py-3 text-[11px] font-medium text-text-secondary hover:text-text-primary hover:bg-card-header-bg border-r border-border-card transition-all duration-200"
          >
            <span>Live link</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="py-3 text-[11px] font-medium text-text-secondary bg-card-bg border-r border-border-card select-none">
            Live link
          </div>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 text-[11px] font-medium text-text-secondary hover:text-text-primary hover:bg-card-header-bg transition-all duration-200"
          >
            <span>GitHub</span>
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="py-3 text-[11px] font-medium text-text-secondary bg-card-bg select-none">
            GitHub
          </div>
        )}
      </div>
    </div>
  );
};
