import { Project } from "@/data/portfolio";
import { projectGradient } from "@/lib/projectGradients";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [c1, c2] = projectGradient(index);

  return (
    <a
      href={`#${project.id}`}
      className="group block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
    >
      <Card className="relative h-full overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 shadow-[0px_8px_24px_0px_rgba(51,51,77,0.06)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0px_16px_36px_0px_rgba(51,51,77,0.12)] group-hover:ring-zinc-300">
        {/* 상단 글로우 (프로젝트별 그라데이션 색) */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[190px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[64px]"
          style={{ backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})` }}
        />

        <CardHeader className="relative">
          <CardTitle className="text-[16px] font-bold leading-snug text-[#14141a]">
            {project.title}
          </CardTitle>
          <CardDescription className="text-[13px] leading-relaxed text-zinc-500">
            {project.summary}
          </CardDescription>
        </CardHeader>

        <CardFooter className="relative mt-auto bg-transparent">
          <span
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "w-full"
            )}
          >
            자세히 보기
          </span>
        </CardFooter>
      </Card>
    </a>
  );
}
