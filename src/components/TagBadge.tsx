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
          ? "bg-zinc-200 text-zinc-500 font-medium border-none"
          : "text-zinc-500 font-normal border border-zinc-200"
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
