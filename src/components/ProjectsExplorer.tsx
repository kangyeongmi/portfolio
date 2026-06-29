"use client";

import { useState } from "react";
import { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectSection from "./ProjectSection";

const TABS = [
  { key: "all", label: "Projects" },
  { key: "BlumnAI", label: "BlumnAI" },
  { key: "Golfzon", label: "Golfzon" },
  { key: "VC", label: "VC" },
] as const;

// 회사명 → 탭 그룹
function orgOf(company: string): string {
  if (company.includes("블룸")) return "BlumnAI";
  if (company.includes("골프존")) return "Golfzon";
  if (company.includes("Voice") || company.includes("브이씨")) return "VC";
  return "Other";
}

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [tab, setTab] = useState<string>("all");

  // 원래 인덱스를 유지한 채 필터 (카드 번호·그라데이션·앵커 일관성)
  const items = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => tab === "all" || orgOf(p.company) === tab);

  return (
    <>
      {/* ─── Selected Projects (회사별 탭 + 카드) ─── */}
      <section id="projects" className="mb-24 animate-fade-in-up delay-200 scroll-mt-24">
        <div className="mb-6 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                aria-pressed={active}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {items.map(({ p, i }) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Project Details (선택한 회사에 맞춰 함께 필터) ─── */}
      <section className="mb-24">
        <div className="border-t border-neutral-200 pt-20">
          {items.map(({ p, i }) => (
            <ProjectSection key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
