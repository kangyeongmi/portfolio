import React from "react";

interface ProjectMetaProps {
  items: string[];
}

export default function ProjectMeta({ items }: ProjectMetaProps) {
  return (
    <div
      className="flex flex-wrap gap-x-3 gap-y-1 text-[color:rgba(0,0,0,0.4)]"
      style={{
        fontSize: "var(--text-caption)",
        lineHeight: "var(--leading-caption)",
        letterSpacing: "var(--tracking-caption)",
      }}
    >
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span>{item}</span>
          {idx < items.length - 1 && (
            <span className="text-[color:rgba(0,0,0,0.15)] select-none">·</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
