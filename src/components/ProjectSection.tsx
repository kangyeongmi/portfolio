import { Project } from "@/data/portfolio";

interface ProjectSectionProps {
  project: Project;
  index: number;
}

export default function ProjectSection({
  project,
  index,
}: ProjectSectionProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      id={project.id}
      className="pb-20 mb-20 border-b border-neutral-100 last:border-0 last:mb-0 last:pb-0 scroll-mt-24"
    >
      {/* ── Header ── */}
      <div className="mb-10">
        <span
          className="block mb-2 font-mono text-[color:rgba(0,0,0,0.28)]"
          style={{ fontSize: "var(--text-micro)" }}
        >
          {num}
        </span>
        <h3
          className="font-bold text-[color:#1d1d1f] mb-4"
          style={{
            fontSize: "var(--text-title)",
            lineHeight: "var(--leading-title)",
            letterSpacing: "var(--tracking-title)",
          }}
        >
          {project.title}
        </h3>
        <p
          className="text-[color:rgba(0,0,0,0.72)] mb-5"
          style={{
            fontSize: "var(--text-body)",
            lineHeight: "var(--leading-body)",
            letterSpacing: "var(--tracking-body)",
          }}
        >
          {project.summary}
        </p>

        {/* Meta */}
        <div
          className="flex flex-wrap gap-x-6 gap-y-1 text-[color:rgba(0,0,0,0.4)] mb-2"
          style={{
            fontSize: "var(--text-caption)",
            lineHeight: "var(--leading-caption)",
            letterSpacing: "var(--tracking-caption)",
          }}
        >
          <span>{project.company}</span>
          <span>{project.platform}</span>
          <span>{project.role}</span>
          <span>{project.period}</span>
        </div>
        <p
          className="text-[color:rgba(0,0,0,0.4)]"
          style={{
            fontSize: "var(--text-caption)",
            letterSpacing: "var(--tracking-caption)",
          }}
        >
          {project.users}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
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

      {/* ── Key Relevance ── */}
      <div className="mb-10 bg-neutral-50 rounded-xl px-6 py-5">
        <p
          className="font-semibold text-[color:rgba(0,0,0,0.4)] mb-1"
          style={{
            fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-caption)",
          }}
        >
          핵심 역량 연결
        </p>
        <p
          className="text-[color:rgba(0,0,0,0.72)]"
          style={{
            fontSize: "var(--text-body)",
            lineHeight: "var(--leading-body)",
            letterSpacing: "var(--tracking-body)",
          }}
        >
          {project.tmapRelevance}
        </p>
      </div>

      {/* ── Problem / Strategy / Ownership ── */}
      <div className="grid gap-8">
        {[
          { label: "문제", content: project.problem },
          { label: "접근", content: project.strategy },
          { label: "내가 한 일", content: project.ownership },
        ].map((section) => (
          <div key={section.label}>
            <h4
              className="font-semibold text-[color:rgba(0,0,0,0.4)] uppercase tracking-wide mb-2"
              style={{
                fontSize: "var(--text-micro)",
                letterSpacing: "var(--tracking-caption)",
              }}
            >
              {section.label}
            </h4>
            <p
              className="text-[color:rgba(0,0,0,0.72)]"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--leading-body)",
                letterSpacing: "var(--tracking-body)",
              }}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* ── Visual Evidence ── */}
      <div className="mt-8 mb-10 flex flex-col gap-6">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, idx) => (
            <div key={idx} className="w-full bg-neutral-100 rounded-xl border border-neutral-200/50 overflow-hidden">
              <img src={img} alt={`${project.title} 이미지 ${idx + 1}`} className="w-full h-auto block" />
            </div>
          ))
        ) : (
          <div className="w-full aspect-[16/10] bg-neutral-100 rounded-xl flex flex-col items-center justify-center border border-neutral-200/50">
            <svg className="w-8 h-8 text-neutral-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-[color:rgba(0,0,0,0.28)] font-medium" style={{ fontSize: "var(--text-caption)" }}>
              상세 화면 및 개선안 이미지가 들어갈 자리입니다
            </p>
          </div>
        )}
      </div>

      {/* ── Evidence ── */}
      <div className="mt-10">
        <h4
          className="font-semibold text-[color:rgba(0,0,0,0.4)] uppercase tracking-wide mb-3"
          style={{
            fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-caption)",
          }}
        >
          기타 근거 자료
        </h4>
        <div className="border border-dashed border-neutral-200 rounded-xl p-5 bg-neutral-50/50 transition-colors duration-200 hover:border-neutral-300 hover:bg-neutral-100/50">
          <ul className="space-y-2">
            {project.evidence.map((item, i) => (
              <li
                key={i}
                className="text-[color:rgba(0,0,0,0.4)] flex items-start gap-2"
                style={{
                  fontSize: "var(--text-caption)",
                  lineHeight: "var(--leading-caption)",
                }}
              >
                <span className="text-neutral-300 mt-px">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
