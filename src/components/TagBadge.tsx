import React from "react";

interface TagBadgeProps {
  label: string;
  variant?: "soft" | "outline";
}

export default function TagBadge({ label, variant = "soft" }: TagBadgeProps) {
  const isSoft = variant === "soft";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-[6px] whitespace-nowrap ${
        isSoft
          ? "bg-slate-100 text-slate-500 font-medium border-none"
          : "text-slate-400 font-normal border border-slate-200"
      }`}
      style={{
        fontSize: "var(--text-micro)",
        letterSpacing: "var(--tracking-caption)",
      }}
    >
      {label}
    </span>
  );
}
