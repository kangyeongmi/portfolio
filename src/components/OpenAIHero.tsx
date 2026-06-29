"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Project } from "@/data/portfolio";

interface OpenAIHeroProps {
  projects: Project[];
}

// 영문 → Inter, 한글 → Apple SD Gothic Neo 매핑
const FONT_STACK =
  "'Inter', 'Apple SD Gothic Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Malgun Gothic', sans-serif";

// 커버 패널에 노출할 대표작 (상위 6 = 딥다이브 3 + 강한 케이스)
const SELECTED_IDS = ["p09", "p11", "p07", "p04", "p06", "p10"];

export default function OpenAIHero({ projects }: OpenAIHeroProps) {
  const [open, setOpen] = useState(false);
  const selected = SELECTED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is Project => Boolean(p)
  );
  const [activeId, setActiveId] = useState<string>(selected[0]?.id ?? "");

  const handleSelect = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-[100svh] w-full flex items-center"
      style={{ fontFamily: FONT_STACK, backgroundColor: "#f7cf1c" }}
    >
      {/* ── Gradient blobs (figma ellipses 재현) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full blur-[80px]"
          style={{ width: 640, height: 560, left: "-12%", top: "-18%", background: "#4f93e8" }} />
        <div className="absolute rounded-full blur-[80px]"
          style={{ width: 560, height: 520, left: "-10%", top: "46%", background: "#83c96b" }} />
        <div className="absolute rounded-full blur-[80px]"
          style={{ width: 560, height: 600, right: "-10%", top: "28%", background: "#5fbd82" }} />
        <div className="absolute rounded-full blur-[80px]"
          style={{ width: 520, height: 460, right: "-2%", top: "-14%", background: "#52a2ea" }} />
        <div className="absolute rounded-full blur-[100px] opacity-80"
          style={{ width: 520, height: 400, left: "26%", top: "24%", background: "#dce889" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* 대형 워드마크 + 신원 */}
          <div>
            <h1
              className="font-bold leading-none text-white"
              style={{
                fontSize: "clamp(3rem, 11vw, 8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Portfolio
            </h1>
            <p
              className="mt-4 font-semibold text-white"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
                letterSpacing: "-0.01em",
                textShadow: "0 1px 16px rgba(40,28,0,0.3)",
              }}
            >
              Product Designer
            </p>
          </div>

          {/* 셀렉트 + 프로젝트 내비게이터 (우측 고정, 좁아지면 글자 아래로) */}
          <div className="relative flex w-full flex-col items-start md:w-auto md:items-end">
          {/* kangyeongmi 셀렉트 박스 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-2 rounded-[12px] bg-[#f6f3ec] px-4 py-2.5 shadow-[0px_2px_6px_0px_rgba(77,64,26,0.12)] transition-transform active:scale-[0.98]"
          >
            <span className="text-[15px] font-medium text-[#21211f]">kangyeongmi</span>
            <ChevronDown
              size={14}
              className={`text-[#8c8c85] transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {/* 드롭다운 패널 */}
          {open && (
            <div className="mt-2 w-[280px] overflow-hidden rounded-[22px] bg-[#f7f4ed] shadow-[0px_12px_32px_0px_rgba(77,64,26,0.18)] md:absolute md:right-0 md:top-full">
              {/* header */}
              <div className="flex items-center px-5 pt-4 pb-3">
                <span className="text-[14px] font-medium text-[#8c8c85]">Projects</span>
              </div>
              <div className="h-px w-full bg-[#e0ded4]" />

              {/* selected projects */}
              <div className="py-1.5">
                {selected.map((p) => {
                  const active = p.id === activeId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelect(p.id)}
                      className="group flex w-full items-start gap-2 px-5 py-2.5 text-left transition-colors hover:bg-[#efebe0]"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[15px] font-semibold text-[#21211f]">
                          {p.title}
                        </span>
                        <span className="block truncate text-[12.5px] font-normal text-[#8c8c85]">
                          {p.summary}
                        </span>
                      </span>
                      {active && (
                        <Check size={16} className="mt-1 shrink-0 text-[#21211f]" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="h-px w-full bg-[#e0ded4]" />
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex w-full items-center justify-between px-5 py-3.5 text-left transition-colors hover:bg-[#efebe0]"
              >
                <span className="text-[15px] font-semibold text-[#21211f]">
                  전체 프로젝트 보기
                </span>
                <ChevronDown size={16} className="text-[#8c8c85]" />
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
