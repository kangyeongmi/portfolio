import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// 커버 팔레트와 어울리는 그라데이션 (index 순환)
const GRADIENTS: [string, string][] = [
  ["#f6cf1c", "#e8a317"], // amber
  ["#5fa8e6", "#2b6fd6"], // blue
  ["#6cc28d", "#2e9e63"], // green
  ["#cfc7f5", "#8557db"], // violet
  ["#7fd0c0", "#3a9e8f"], // teal
  ["#f3a98f", "#e8693f"], // coral
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const [c1, c2] = GRADIENTS[index % GRADIENTS.length];

  return (
    <a
      href={`#${project.id}`}
      className="group relative flex aspect-[5/7] flex-col justify-end overflow-hidden rounded-[22px] p-5 transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      style={{
        backgroundImage: `radial-gradient(120% 90% at 25% 12%, rgba(255,255,255,0.32), rgba(255,255,255,0) 55%), linear-gradient(140deg, ${c1} 0%, ${c2} 96%)`,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-[60%] select-none text-center text-[64px] font-bold tabular-nums text-white/85"
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
