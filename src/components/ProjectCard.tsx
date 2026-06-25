import { Project } from "@/data/portfolio";
import { projectGradient } from "@/lib/projectGradients";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const [c1, c2] = projectGradient(index);

  return (
    <a
      href={`#${project.id}`}
      className="group relative flex min-h-[180px] flex-col gap-2 overflow-hidden rounded-[22px] p-5 transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
      style={{
        backgroundImage: `radial-gradient(120% 90% at 25% 12%, rgba(255,255,255,0.32), rgba(255,255,255,0) 55%), linear-gradient(140deg, ${c1} 0%, ${c2} 96%)`,
      }}
    >
      <span
        aria-hidden
        className="select-none text-[36px] font-bold leading-none tabular-nums text-white/85"
      >
        {num}
      </span>
      <h3 className="text-[17px] font-semibold leading-snug text-white">
        {project.title}
      </h3>
      <p className="text-[13px] leading-relaxed text-white/85">
        {project.summary}
      </p>
    </a>
  );
}
