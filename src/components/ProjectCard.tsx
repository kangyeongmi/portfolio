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
      className="group relative flex aspect-[5/7] flex-col justify-between overflow-hidden rounded-[22px] p-5 transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      style={{
        backgroundImage: `radial-gradient(120% 90% at 25% 12%, rgba(255,255,255,0.32), rgba(255,255,255,0) 55%), linear-gradient(140deg, ${c1} 0%, ${c2} 96%)`,
      }}
    >
      <span
        aria-hidden
        className="select-none text-[40px] font-bold leading-none tabular-nums text-white/85"
      >
        {num}
      </span>
      <div className="relative">
        <h3 className="text-[18px] font-semibold leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-snug text-white/80">
          {project.summary}
        </p>
      </div>
    </a>
  );
}
