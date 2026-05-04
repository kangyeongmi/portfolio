import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={`#${project.id}`}
      className="group block border border-neutral-200 rounded-xl p-6 transition-all duration-200 hover:border-neutral-400 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-mono text-[color:rgba(0,0,0,0.28)] group-hover:text-[color:rgba(0,0,0,0.4)] transition-colors"
          style={{ fontSize: "var(--text-micro)" }}
        >
          {num}
        </span>
        <div className="flex gap-1.5 flex-wrap justify-end">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-neutral-100/50 text-[color:rgba(0,0,0,0.56)] rounded-md font-medium border border-neutral-200/50"
              style={{
                fontSize: "var(--text-micro)",
                letterSpacing: "var(--tracking-caption)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3
        className="font-bold text-[color:#1d1d1f] mb-2 group-hover:text-[color:rgba(0,0,0,0.72)] transition-colors"
        style={{
          fontSize: "var(--text-card)",
          lineHeight: "var(--leading-card)",
          letterSpacing: "var(--tracking-title)",
        }}
      >
        {project.title}
      </h3>

      <p
        className="text-[color:rgba(0,0,0,0.72)] mb-3"
        style={{
          fontSize: "var(--text-body)",
          lineHeight: "var(--leading-body)",
          letterSpacing: "var(--tracking-body)",
        }}
      >
        {project.summary}
      </p>

      <p
        className="text-[color:rgba(0,0,0,0.4)]"
        style={{
          fontSize: "var(--text-caption)",
          lineHeight: "var(--leading-caption)",
          letterSpacing: "var(--tracking-caption)",
        }}
      >
        {project.tmapRelevance}
      </p>
    </a>
  );
}
