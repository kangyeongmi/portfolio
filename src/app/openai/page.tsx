import { Fragment } from "react";
import { portfolioData } from "@/data/portfolio";
import OpenAIHero from "@/components/OpenAIHero";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import ProjectNav from "@/components/ProjectNav";
import ClosingCTA from "@/components/ClosingCTA";
import { Badge } from "@/components/ui/badge";

// 영문 → Inter, 한글 → SUIT (이 페이지 한정)
const FONT_STACK =
  "'Inter', 'SUIT', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Segoe UI', 'Malgun Gothic', sans-serif";

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
          <ul className="flex flex-wrap gap-2 mb-5">
            {hero.strengths.map((s) => (
              <Badge key={s} variant="secondary" className="px-3 py-1 text-[13px]">
                {s}
              </Badge>
            ))}
          </ul>
          <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2.5 items-start">
            {hero.toolGroups.map((g) => (
              <Fragment key={g.label}>
                <span
                  className="pt-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400"
                >
                  {g.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="px-2.5 py-1 text-xs font-normal text-muted-foreground"
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

        {/* ─── Projects (회사별 탭으로 카드 + 상세 함께 필터) ─── */}
        <ProjectsExplorer projects={projects} />

        {/* ─── Closing CTA (탭: 소개 · 연락처 · 감사) ─── */}
        <section className="border-t border-zinc-200 pt-16 pb-8">
          <ClosingCTA email={contact.email} phone={contact.phone} />
        </section>
      </main>
    </div>
  );
}
