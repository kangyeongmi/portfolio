import { Fragment } from "react";
import { portfolioData } from "@/data/portfolio";
import OpenAIHero from "@/components/OpenAIHero";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectSection from "@/components/ProjectSection";
import ProjectNav from "@/components/ProjectNav";
import ClosingCTA from "@/components/ClosingCTA";
import { Badge } from "@/components/ui/badge";

// 영문 → Inter, 한글 → Apple SD Gothic Neo (이 페이지 한정)
const FONT_STACK =
  "'Inter', 'Apple SD Gothic Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Malgun Gothic', sans-serif";

export default function OpenAIPortfolio() {
  const { hero, projects, contact } = portfolioData;

  return (
    <div style={{ fontFamily: FONT_STACK }}>
      <ProjectNav projects={projects} />

      {/* ─── OpenAI 커버 ─── */}
      <OpenAIHero projects={projects} />

      <main className="max-w-[720px] mx-auto px-6 py-20 md:py-28">
        {/* ─── Hero ─── */}
        <section className="mb-24 animate-fade-in-up">
          <h1
            className="font-bold text-zinc-900 mb-6"
            style={{
              fontSize: "var(--text-hero)",
              lineHeight: "var(--leading-hero)",
              letterSpacing: "var(--tracking-hero)",
            }}
          >
            {hero.headline}
          </h1>
          <p
            className="text-zinc-700 mb-8"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.65,
              letterSpacing: "-0.015em",
            }}
          >
            {hero.subHeadline}
          </p>
          <ul className="flex flex-wrap gap-2.5 mb-5">
            {hero.strengths.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="px-2.5 py-2 rounded-[6px] font-medium text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors border-none"
                style={{
                  fontSize: "var(--text-caption)",
                  letterSpacing: "var(--tracking-caption)",
                }}
              >
                {s}
              </Badge>
            ))}
          </ul>
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2.5 items-start">
            {hero.toolGroups.map((g) => (
              <Fragment key={g.label}>
                <span
                  className="pt-2 font-semibold uppercase tracking-wide text-zinc-400"
                  style={{
                    fontSize: "var(--text-micro)",
                    letterSpacing: "var(--tracking-caption)",
                  }}
                >
                  {g.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="px-2.5 py-2 text-zinc-500 font-normal border-zinc-200 rounded-[6px]"
                      style={{
                        fontSize: "var(--text-micro)",
                        letterSpacing: "var(--tracking-caption)",
                      }}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </Fragment>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/resume"
              className="inline-flex items-center gap-1.5 rounded-[8px] bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              이력서 · 경력기술서 보기
            </a>
          </div>
        </section>

        {/* ─── Selected Projects (회사별 탭 + 카드) ─── */}
        <section id="projects" className="mb-24 animate-fade-in-up delay-200 scroll-mt-24">
          <p
            className="text-zinc-500 mb-5"
            style={{
              fontSize: "var(--text-caption)",
              letterSpacing: "var(--tracking-caption)",
            }}
          >
            B2B SaaS · AI · 데이터 · 디자인 시스템 전반의 대표 작업
          </p>
          <ProjectGrid projects={projects} />
        </section>

        {/* ─── Project Details ─── */}
        <section className="mb-24">
          <div className="border-t border-neutral-200 pt-20">
            {projects.map((project, i) => (
              <ProjectSection key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* ─── Closing CTA (탭: 소개 · 연락처 · 감사) ─── */}
        <section className="border-t border-zinc-200 pt-16 pb-8">
          <ClosingCTA email={contact.email} phone={contact.phone} />
        </section>
      </main>
    </div>
  );
}
