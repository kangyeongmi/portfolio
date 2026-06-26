"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectNavProps {
  projects: Project[];
}

export default function ProjectNav({ projects }: ProjectNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 헤더 하단 라인을 지난 '가장 마지막' 상세 섹션을 active로 (지나기 전엔 null → "Projects")
    const handleScroll = () => {
      const threshold = 120; // 스티키 헤더 높이 + 여유
      let current: string | null = null;
      for (const p of projects) {
        const el = document.getElementById(p.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = p.id;
        }
      }
      setActiveId(current);
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 상태

    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md backdrop-saturate-150 border-b border-zinc-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-[720px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="font-semibold text-zinc-900 truncate text-sm">
            {activeProject ? activeProject.title : "Projects"}
          </span>
        </div>
        <a
          href="#"
          aria-label="맨 위로"
          className="shrink-0 rounded-md p-1 text-zinc-500 hover:text-zinc-900 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ChevronUp size={18} />
        </a>
      </div>
    </div>
  );
}
