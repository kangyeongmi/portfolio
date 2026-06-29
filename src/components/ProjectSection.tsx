import { Project } from "@/data/portfolio";
import { projectGradient } from "@/lib/projectGradients";
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
  const [c1, c2] = projectGradient(index);

  // 화면을 배경 위에 띄우는 플로팅 트리트먼트 (프로젝트 색 연동)
  const frameBg = `radial-gradient(120% 100% at 25% 0%, ${c1}33, transparent 60%), linear-gradient(160deg, ${c2}26 0%, ${c1}1f 100%)`;
  const frameImg =
    "block w-full h-auto rounded-lg ring-1 ring-black/5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.3)]";

  return (
    <article
      id={project.id}
      className="pb-20 mb-20 border-b border-zinc-200 last:border-0 last:mb-0 last:pb-0 scroll-mt-24"
    >
      {/* ── Header ── */}
      <div className="mb-10">
        <ProjectHeader title={project.title} />

        <p
          className="text-zinc-700 mb-5"
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

      {/* ── Case study (있으면) / 문제·접근 ── */}
      {project.caseStudy ? (
        <div className="grid gap-8">
          {/* 맥락 · 문제 */}
          {[
            { label: "맥락", content: project.caseStudy.context },
            { label: "문제", content: project.problem },
          ].map((s) => (
            <div key={s.label}>
              <h4
                className="font-semibold text-zinc-500 uppercase tracking-wide mb-2"
                style={{ fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-caption)" }}
              >
                {s.label}
              </h4>
              <p
                className="text-zinc-700"
                style={{ fontSize: "var(--text-body)", lineHeight: "var(--leading-body)", letterSpacing: "var(--tracking-body)" }}
              >
                {s.content}
              </p>
            </div>
          ))}

          {/* 과정 */}
          <div>
            <h4
              className="font-semibold text-zinc-500 uppercase tracking-wide mb-3"
              style={{ fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-caption)" }}
            >
              과정
            </h4>
            <ol className="flex flex-col gap-2.5">
              {project.caseStudy.process.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-[11px] font-semibold tabular-nums text-zinc-500">
                    {i + 1}
                  </span>
                  <span
                    className="text-zinc-700"
                    style={{ fontSize: "var(--text-body)", lineHeight: "var(--leading-body)", letterSpacing: "var(--tracking-body)" }}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* 핵심 결정 */}
          <div>
            <h4
              className="font-semibold text-zinc-500 uppercase tracking-wide mb-3"
              style={{ fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-caption)" }}
            >
              핵심 결정
            </h4>
            <div className="grid gap-3">
              {project.caseStudy.decisions.map((d, i) => (
                <div key={i} className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4">
                  <p
                    className="font-semibold text-zinc-900 mb-1"
                    style={{ fontSize: "var(--text-body)", letterSpacing: "var(--tracking-body)" }}
                  >
                    {d.title}
                  </p>
                  <p
                    className="text-zinc-700"
                    style={{ fontSize: "var(--text-caption)", lineHeight: "var(--leading-body)", letterSpacing: "var(--tracking-body)" }}
                  >
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 결과 */}
          <div>
            <h4
              className="font-semibold text-zinc-500 uppercase tracking-wide mb-3"
              style={{ fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-caption)" }}
            >
              결과
            </h4>
            <ul className="flex flex-col gap-2">
              {project.caseStudy.results.map((r, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-zinc-700"
                  style={{ fontSize: "var(--text-body)", lineHeight: "var(--leading-body)", letterSpacing: "var(--tracking-body)" }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid gap-8">
          {[
            { label: "문제", content: project.problem },
            { label: "접근", content: project.strategy },
          ].map((section) => (
            <div key={section.label}>
              <h4
                className="font-semibold text-zinc-500 uppercase tracking-wide mb-2"
                style={{ fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-caption)" }}
              >
                {section.label}
              </h4>
              <p
                className="text-zinc-700"
                style={{ fontSize: "var(--text-body)", lineHeight: "var(--leading-body)", letterSpacing: "var(--tracking-body)" }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ── Case study gallery (배경 위에 떠 있는 화면 + 캡션) ── */}
      {project.caseStudy?.gallery && project.caseStudy.gallery.length > 0 && (
        <div className="mt-8 mb-10 flex flex-col gap-6">
          {project.caseStudy.gallery.map((g, idx) => (
            <figure key={idx}>
              <div className="rounded-2xl p-4 sm:p-7" style={{ backgroundImage: frameBg }}>
                <img
                  src={g.src}
                  alt={g.caption ?? `${project.title} 화면 ${idx + 1}`}
                  className={frameImg}
                />
              </div>
              {g.caption && (
                <figcaption
                  className="mt-2.5 text-zinc-500"
                  style={{
                    fontSize: "var(--text-caption)",
                    lineHeight: "var(--leading-caption)",
                    letterSpacing: "var(--tracking-caption)",
                  }}
                >
                  {g.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* ── Visual Evidence (배경 위에 떠 있는 화면) ── */}
      {!project.caseStudy?.gallery && project.images && project.images.length > 0 && (
        <div className="mt-8 mb-10 flex flex-col gap-6">
          {project.images.map((asset, idx) => {
            const isVideo = asset.match(/\.(mp4|mov|webm)$/i);
            return (
              <div key={idx} className="rounded-2xl p-4 sm:p-7" style={{ backgroundImage: frameBg }}>
                {isVideo ? (
                  <video
                    src={asset}
                    controls
                    muted
                    playsInline
                    loop
                    className={frameImg}
                  />
                ) : (
                  <img
                    src={asset}
                    alt={`${project.title} 자산 ${idx + 1}`}
                    className={frameImg}
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
