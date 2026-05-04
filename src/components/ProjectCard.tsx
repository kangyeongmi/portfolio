import { Project } from "@/data/portfolio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      className="group block h-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
    >
      <Card className="h-full transition-all group-hover:shadow-[rgba(0,0,0,0.08)_0px_2px_20px_0px] border-transparent hover:border-neutral-200/60 rounded-[8px]">
        <CardHeader className="pb-4 pt-6 px-6">
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-mono text-[color:rgba(0,0,0,0.28)] group-hover:text-[color:rgba(0,0,0,0.4)] transition-colors"
              style={{ fontSize: "var(--text-micro)" }}
            >
              {num}
            </span>
            <div className="flex gap-2 flex-wrap justify-end">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal px-2.5 py-1 rounded-[5px] bg-[#f5f5f7] border-none">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <CardTitle
            className="group-hover:text-[color:rgba(0,0,0,0.72)] transition-colors leading-tight"
            style={{
              fontSize: "var(--text-card)",
              letterSpacing: "var(--tracking-title)",
            }}
          >
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 px-6 pb-6">
          <div
            className="text-[color:rgba(0,0,0,0.72)]"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-body)",
              letterSpacing: "var(--tracking-body)",
            }}
          >
            {project.summary}
          </div>
          <p
            className="text-[color:rgba(0,0,0,0.4)] leading-snug"
            style={{
              fontSize: "var(--text-caption)",
              letterSpacing: "var(--tracking-caption)",
            }}
          >
            {project.tmapRelevance}
          </p>
        </CardContent>
      </Card>
    </a>
  );
}
