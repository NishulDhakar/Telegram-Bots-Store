import React from "react";
import { Header } from "../components/sections/Header";
import { Hero } from "../components/sections/Hero";
import { ProjectGrid } from "../components/sections/ProjectGrid";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Intro Hero with diagonal stripes and title */}
        <Hero />

        {/* Dynamic Project Grid containing the cards */}
        <ProjectGrid />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
