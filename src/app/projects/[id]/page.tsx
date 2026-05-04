import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import ProjectSection from "@/components/ProjectSection";

type Params = { id: string };

// Generate static params for all projects
export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

// Dynamic metadata per project
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — TMAP Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;

  const projectIndex = portfolioData.projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData.projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? portfolioData.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < portfolioData.projects.length - 1
      ? portfolioData.projects[projectIndex + 1]
      : null;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* ── Back Link ── */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-700 transition-colors mb-10"
      >
        ← 포트폴리오로 돌아가기
      </Link>

      {/* ── Project Detail ── */}
      <ProjectSection project={project} index={projectIndex} />

      {/* ── Prev / Next Navigation ── */}
      <nav className="border-t border-neutral-200 pt-8 mt-16 flex justify-between">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.id}`}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← {prevProject.title}
          </Link>
        ) : (
          <span />
        )}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors text-right"
          >
            {nextProject.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
