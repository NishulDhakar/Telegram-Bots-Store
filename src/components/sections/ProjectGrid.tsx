import React from "react";
import { Card } from "../ui/Card";
import { Bots } from "../../config/projects";

export const ProjectGrid: React.FC = () => {
  return (
    <div className="w-full bg-background transition-colors duration-300">
      <div className="mx-auto max-w-6xl w-full border-x border-border-grid">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {Bots.map((project, index) => {
            // Determine grid cell border classes
            // For desktop (md:grid-cols-2):
            // - Left items (even index) get a right border to form the center grid line.
            // - All items get a bottom border.
            const cellBorderClasses = `
              p-4 sm:p-6 md:p-8 
              border-b border-border-grid
              ${index % 2 === 0 ? "md:border-r md:border-border-grid" : ""}
              flex flex-col justify-stretch
            `;

            return (
              <div key={project.id} className={cellBorderClasses}>
                <Card project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
