"use client";

import { useState, useEffect } from "react";
import { Project } from "@/data/portfolio";

interface ProjectNavProps {
  projects: Project[];
}

export default function ProjectNav({ projects }: ProjectNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive: string | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id;
          }
        });
        
        if (currentActive) {
          setActiveId(currentActive);
        }
      },
      { 
        rootMargin: "-20% 0px -60% 0px" // Trigger when element is near the top
      }
    );

    projects.forEach((p) => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    // Handle overall visibility (hide when near top of page)
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projects]);

  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md backdrop-saturate-150 border-b border-slate-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-[720px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="font-semibold text-slate-900 truncate text-sm">
            {activeProject ? activeProject.title : "Projects"}
          </span>
        </div>
        <a 
          href="#" 
          className="text-xs font-medium text-slate-400 hover:text-slate-900 whitespace-nowrap transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          맨 위로
        </a>
      </div>
    </div>
  );
}
