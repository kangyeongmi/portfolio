import { portfolioData } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import ProjectSection from "@/components/ProjectSection";
import RecruiterSummary from "@/components/RecruiterSummary";
import ProjectNav from "@/components/ProjectNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { hero, recruiterSummary, projects, honestNote, contact } =
    portfolioData;

  return (
    <>
      <ProjectNav projects={projects} />
      <main className="max-w-[720px] mx-auto px-6 py-20 md:py-28">
      {/* ─── Hero ─── */}
      <section className="mb-24 animate-fade-in-up">
        <h1
          className="font-bold text-[color:#1d1d1f] mb-6"
          style={{
            fontSize: "var(--text-hero)",
            lineHeight: "var(--leading-hero)",
            letterSpacing: "var(--tracking-hero)",
          }}
        >
          {hero.headline}
        </h1>
        <p
          className="text-[color:rgba(0,0,0,0.72)] mb-8"
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
              className="px-4 py-2 rounded-full font-medium text-[color:rgba(0,0,0,0.56)] bg-[#f5f5f7] hover:bg-neutral-200 transition-colors border-none"
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
              className="px-3 py-1.5 text-[color:rgba(0,0,0,0.48)] font-normal border-neutral-200/60 rounded-full"
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
          className="font-bold text-[color:#1d1d1f] mb-8"
          style={{
            fontSize: "var(--text-section)",
            lineHeight: "var(--leading-section)",
            letterSpacing: "var(--tracking-title)",
          }}
        >
          주요 역량 요약
        </h2>
        <RecruiterSummary items={recruiterSummary} />
      </section>

      {/* ─── Honest Transition Note ─── */}
      <section className="mb-24 animate-fade-in-up delay-200">
        <div className="border-l-2 border-neutral-300 pl-5 py-1">
          <p
            className="text-[color:rgba(0,0,0,0.56)]"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-body)",
              letterSpacing: "var(--tracking-body)",
            }}
          >
            {honestNote}
          </p>
        </div>
      </section>

      {/* ─── Selected Projects (Cards) ─── */}
      <section className="mb-24 animate-fade-in-up delay-300">
        <h2
          className="font-bold text-[color:#1d1d1f] mb-8"
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
      <section className="border-t border-neutral-200 pt-16 pb-20">
        <h2
          className="font-bold text-[color:#1d1d1f] mb-8"
          style={{
            fontSize: "var(--text-section)",
            lineHeight: "var(--leading-section)",
            letterSpacing: "var(--tracking-title)",
          }}
        >
          Contact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(contact).map(([key, value]) => (
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
              <Card className="p-5 transition-all duration-200 group-hover:border-neutral-400 group-hover:shadow-sm">
                <div
                  className="text-[color:rgba(0,0,0,0.4)] font-semibold uppercase mb-1"
                  style={{
                    fontSize: "var(--text-micro)",
                    letterSpacing: "var(--tracking-caption)",
                  }}
                >
                  {key}
                </div>
                <div
                  className="text-[color:rgba(0,0,0,0.72)] font-medium group-hover:text-[color:#1d1d1f] transition-colors"
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
