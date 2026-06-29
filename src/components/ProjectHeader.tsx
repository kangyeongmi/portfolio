import React from "react";

interface ProjectHeaderProps {
  num: string;
  title: string;
}

export default function ProjectHeader({ num, title }: ProjectHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="tabular-nums font-bold text-zinc-500 bg-zinc-100 shrink-0 px-2 py-1 rounded-[6px]"
        style={{ fontSize: "var(--text-micro)" }}
      >
        {num}
      </span>
      <h3
        className="font-bold text-zinc-900"
        style={{
          fontSize: "var(--text-title)",
          lineHeight: "var(--leading-title)",
          letterSpacing: "var(--tracking-title)",
        }}
      >
        {title}
      </h3>
    </div>
  );
}
