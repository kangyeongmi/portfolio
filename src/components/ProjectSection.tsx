import { Project } from "@/data/portfolio";
import ProjectHeader from "./ProjectHeader";
import TagBadge from "./TagBadge";

interface ProjectSectionProps {
  project: Project;
  index: number;
}

export default function ProjectSection({
  project,
  index,
}: ProjectSectionProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      id={project.id}
      className="pb-20 mb-20 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0 scroll-mt-24"
    >
      {/* ── Header ── */}
      <div className="mb-10">
        <ProjectHeader num={num} title={project.title} />

        <p
          className="text-slate-600 mb-5"
          style={{
            fontSize: "var(--text-body)",
            lineHeight: "var(--leading-body)",
            letterSpacing: "var(--tracking-body)",
          }}
        >
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-2">
          <TagBadge label={project.company} />
          <TagBadge label={project.platform} />
          <TagBadge label={project.role} />
          <TagBadge label={project.period} />
          <TagBadge label={project.users} />
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <TagBadge key={tag} label={tag} variant="outline" />
          ))}
        </div>
      </div>

      {/* ── Problem / Strategy / Ownership ── */}
      <div className="grid gap-8">
        {[
          { label: "문제", content: project.problem },
          { label: "접근", content: project.strategy },
        ].map((section) => (
          <div key={section.label}>
            <h4
              className="font-semibold text-slate-400 uppercase tracking-wide mb-2"
              style={{
                fontSize: "var(--text-micro)",
                letterSpacing: "var(--tracking-caption)",
              }}
            >
              {section.label}
            </h4>
            <p
              className="text-slate-600"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--leading-body)",
                letterSpacing: "var(--tracking-body)",
              }}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* ── Visual Evidence ── */}
      {project.images && project.images.length > 0 && (
        <div className="mt-8 mb-10 flex flex-col gap-6">
          {project.images.map((asset, idx) => {
            const isVideo = asset.match(/\.(mp4|mov|webm)$/i);
            return (
              <div key={idx} className="w-full bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                {isVideo ? (
                  <video
                    src={asset}
                    controls
                    muted
                    playsInline
                    loop
                    className="w-full h-auto block"
                  />
                ) : (
                  <img
                    src={asset}
                    alt={`${project.title} 자산 ${idx + 1}`}
                    className="w-full h-auto block"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

    </article>
  );
}
