import React from "react";
import { projectGradientCss } from "@/lib/projectGradients";

interface ProjectHeaderProps {
  num: string;
  title: string;
  index: number;
}

export default function ProjectHeader({ num, title, index }: ProjectHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="tabular-nums font-bold text-white shrink-0 px-2 py-1 rounded-[6px]"
        style={{
          fontSize: "var(--text-micro)",
          backgroundImage: projectGradientCss(index),
        }}
      >
        {num}
      </span>
      <h3
        className="font-bold text-slate-900"
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
