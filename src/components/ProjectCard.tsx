import { Project } from "@/data/portfolio";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={`#${project.id}`}
      className="group block h-full transition-all duration-300 ease-out hover:scale-105 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 z-0 hover:z-10"
    >
      <Card className="h-full transition-all duration-300 border border-slate-200 bg-white group-hover:bg-slate-50 shadow-none group-hover:shadow-lg group-hover:border-slate-300 rounded-[8px]">
        <CardHeader className="py-4 px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-3">
              <span
                className="tabular-nums font-bold text-slate-400 shrink-0 bg-slate-100 px-2 py-0.5 rounded-[6px]"
                style={{ fontSize: "var(--text-micro)" }}
              >
                {num}
              </span>
              <CardTitle
                className="font-bold group-hover:text-slate-600 transition-colors leading-tight shrink-0"
                style={{
                  fontSize: "var(--text-card)",
                  letterSpacing: "var(--tracking-title)",
                }}
              >
                {project.title}
              </CardTitle>
            </div>
            <div className="flex gap-1.5 flex-wrap sm:justify-end sm:ml-auto">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs font-normal px-2 py-0.5 rounded-[6px] border-slate-200 whitespace-nowrap"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>
    </a>
  );
}
