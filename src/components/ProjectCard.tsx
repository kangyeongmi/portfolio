import { Project } from "@/data/portfolio";
import { projectGradient } from "@/lib/projectGradients";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [c1, c2] = projectGradient(index);

  return (
    <a
      href={`#${project.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white p-6 text-center shadow-[0px_10px_28px_0px_rgba(51,51,77,0.08)] transition-shadow duration-300 hover:shadow-[0px_16px_40px_0px_rgba(51,51,77,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
    >
      {/* 상단 중앙 글로우 (프로젝트별 그라데이션 색 유지) */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[190px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[64px]"
        style={{ backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})` }}
      />

      <h3 className="relative text-[17px] font-bold leading-snug text-[#14141a]">
        {project.title}
      </h3>
      <p className="relative mt-2 flex-1 text-[13px] leading-relaxed text-[#909090]">
        {project.summary}
      </p>
      <span className="relative mt-5 flex h-9 items-center justify-center rounded-[10px] bg-[#121212] text-[13px] font-medium text-white transition-colors group-hover:bg-black">
        자세히 보기
      </span>
    </a>
  );
}
