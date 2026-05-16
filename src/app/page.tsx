import { portfolioData } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import ProjectSection from "@/components/ProjectSection";
import RecruiterSummary from "@/components/RecruiterSummary";
import ProjectNav from "@/components/ProjectNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { hero, recruiterSummary, projects, contact } =
    portfolioData;

  return (
    <>
      <ProjectNav projects={projects} />
      <main className="max-w-[720px] mx-auto px-6 py-20 md:py-28">
      {/* ─── Hero ─── */}
      <section className="mb-24 animate-fade-in-up">
        <div className="mb-8">
          <img
            src="/images/portfolio/profile.jpg"
            alt="강영미 프로필"
            className="w-28 h-28 rounded-full object-cover shadow-sm border border-neutral-100"
          />
        </div>
        <h1
          className="font-bold text-slate-900 mb-6"
          style={{
            fontSize: "var(--text-hero)",
            lineHeight: "var(--leading-hero)",
            letterSpacing: "var(--tracking-hero)",
          }}
        >
          {hero.headline}
        </h1>
        <p
          className="text-slate-600 mb-8"
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
              className="px-2.5 py-2 rounded-[6px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors border-none"
              style={{
                fontSize: "var(--text-caption)",
                letterSpacing: "var(--tracking-caption)",
              }}
            >
              {s}
            </Badge>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {hero.tools.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="px-2.5 py-2 text-slate-400 font-normal border-slate-200 rounded-[6px]"
              style={{
                fontSize: "var(--text-micro)",
                letterSpacing: "var(--tracking-caption)",
              }}
            >
              {t}
            </Badge>
          ))}
        </div>
      </section>

      {/* ─── Recruiter Summary ─── */}
      <section className="mb-24 animate-fade-in-up delay-100">
        <h2
          className="font-bold text-slate-900 mb-8"
          style={{
            fontSize: "var(--text-section)",
            lineHeight: "var(--leading-section)",
            letterSpacing: "var(--tracking-title)",
          }}
        >
          기본 역량
        </h2>
        <RecruiterSummary items={recruiterSummary} />
      </section>

      {/* ─── Selected Projects (Cards) ─── */}
      <section className="mb-24 animate-fade-in-up delay-200">
        <h2
          className="font-bold text-slate-900 mb-8"
          style={{
            fontSize: "var(--text-section)",
            lineHeight: "var(--leading-section)",
            letterSpacing: "var(--tracking-title)",
          }}
        >
          Projects
        </h2>
        <div className="grid gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Project Details ─── */}
      <section className="mb-24">
        <div className="border-t border-neutral-200 pt-20">
          {projects.map((project, i) => (
            <ProjectSection key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section className="border-t border-slate-200 pt-16 pb-20">
        <h2
          className="font-bold text-slate-900 mb-8"
          style={{
            fontSize: "var(--text-section)",
            lineHeight: "var(--leading-section)",
            letterSpacing: "var(--tracking-title)",
          }}
        >
          Contact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(contact).filter(([key]) => key !== "figma").map(([key, value]) => (
            <a
              key={key}
              href={
                key === "email" && value !== "TODO"
                  ? `mailto:${value}`
                  : value !== "TODO"
                  ? value
                  : "#"
              }
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-xl"
            >
              <Card className="p-5 transition-all duration-200 border border-slate-200 shadow-none group-hover:border-slate-300 group-hover:shadow-sm">
                <div
                  className="text-slate-400 font-semibold uppercase mb-1"
                  style={{
                    fontSize: "var(--text-micro)",
                    letterSpacing: "var(--tracking-caption)",
                  }}
                >
                  {key}
                </div>
                <div
                  className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors"
                  style={{
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--leading-body)",
                  }}
                >
                  {value}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
