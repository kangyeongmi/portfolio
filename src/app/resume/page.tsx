import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "이력서 · 경력기술서 — 강영미",
  description: "강영미 Product Designer 이력서 및 경력기술서",
};

// 영문 → Inter, 한글 → SUIT
const FONT_STACK =
  "'Inter', 'SUIT', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Segoe UI', 'Malgun Gothic', sans-serif";

export default function ResumePage() {
  const md = fs.readFileSync(
    path.join(process.cwd(), "src/content/resume.md"),
    "utf8"
  );

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-white"
      style={{ fontFamily: FONT_STACK }}
    >
      <div className="mx-auto max-w-[860px] px-6 py-16 md:py-20">
        <a
          href="/"
          className="mb-10 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-900"
        >
          <ChevronLeft size={16} />
          포트폴리오로 돌아가기
        </a>
        <article className="resume-doc">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
