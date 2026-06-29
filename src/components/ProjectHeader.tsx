import React from "react";

interface ProjectHeaderProps {
  title: string;
}

export default function ProjectHeader({ title }: ProjectHeaderProps) {
  return (
    <h3
      className="font-bold text-zinc-900 mb-4"
      style={{
        fontSize: "var(--text-title)",
        lineHeight: "var(--leading-title)",
        letterSpacing: "var(--tracking-title)",
      }}
    >
      {title}
    </h3>
  );
}
