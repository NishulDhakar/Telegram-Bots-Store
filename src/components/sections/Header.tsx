"use client";

import React, { useState } from "react";
import { Menu, ChevronDown, X, Send } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border-grid sticky top-0 z-50 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
        {/* Left: Brand/Logo */}
        <div className="flex items-center">
          <span className="text-sm font-extrabold tracking-tighter text-foreground font-sans uppercase select-none hover:opacity-80 transition-opacity cursor-pointer">
            Drova Bots
          </span>
        </div>

        {/* Center: Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-white relative py-1">
            Bots
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full"></span>
          </a>
          <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group">
            <span>More</span>
            <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </nav> */}

        {/* Right: Search, Theme Toggle, Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Search Button */}
          {/* <button className="hidden sm:flex items-center gap-2 bg-[#0c0c0e] hover:bg-[#161618] border border-[#1b1b1f] rounded px-2.5 py-1 text-zinc-400 text-[10px] transition-colors cursor-pointer select-none">
            <Search className="w-3 h-3 text-zinc-500" />
            <span className="font-mono">Search</span>
            <div className="flex items-center gap-0.5 border border-[#27272a] bg-[#161618] rounded px-1 py-[0.5px] text-[8px] text-zinc-500">
              <span>⌘</span>
              <span>K</span>
            </div>
          </button> */}

          {/* Mobile Search Button */}
          {/* <button className="sm:hidden p-1.5 hover:bg-[#161618] rounded text-zinc-400 hover:text-white transition-all cursor-pointer">
            <Search className="w-4 h-4" />
          </button> */}

          {/* Telegram Channel */}
          <a
            href="https://t.me/DrovaBots"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 text-[#229ED9] dark:text-[#38b7f6] rounded-md px-2.5 py-1.5 text-[10px] sm:text-xs font-mono font-medium transition-all select-none cursor-pointer"
          >
            <Send className="w-3 h-3" />
            <span>@DrovaBots</span>
          </a>

          {/* Theme Toggle */}
          <AnimatedThemeToggler className="p-1.5 hover:bg-border-grid rounded text-text-secondary hover:text-text-primary transition-all cursor-pointer [&_svg]:w-4 [&_svg]:h-4 flex items-center justify-center" />

          {/* Mobile Menu Toggle */}
          {/* <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 hover:bg-[#161618] rounded text-zinc-400 hover:text-white transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button> */}
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {/* {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-black border-b border-[#161618] p-4 flex flex-col gap-4 text-xs font-medium text-zinc-400 animate-in fade-in slide-in-from-top duration-200">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white py-1.5 border-b border-[#161618]"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white py-1.5 border-b border-[#161618] flex justify-between items-center"
          >
            <span>Bots</span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </a>
          <div className="py-1.5 flex justify-between items-center cursor-pointer hover:text-white">
            <span>More</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      )} */}
    </header>
  );
};
