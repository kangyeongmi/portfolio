import { RecruiterSummaryItem } from "@/data/portfolio";

interface RecruiterSummaryProps {
  items: RecruiterSummaryItem[];
}

export default function RecruiterSummary({ items }: RecruiterSummaryProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item.capability}
          className="border border-neutral-200 rounded-xl p-5"
        >
          <h3
            className="font-bold text-[color:#1d1d1f] mb-2"
            style={{
              fontSize: "var(--text-card)",
              lineHeight: "var(--leading-card)",
              letterSpacing: "var(--tracking-title)",
            }}
          >
            {item.capability}
          </h3>
          <p
            className="text-[color:rgba(0,0,0,0.72)] mb-2"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-body)",
              letterSpacing: "var(--tracking-body)",
            }}
          >
            {item.evidence}
          </p>
          <p
            className="text-[color:rgba(0,0,0,0.4)] font-medium"
            style={{
              fontSize: "var(--text-caption)",
              lineHeight: "var(--leading-caption)",
              letterSpacing: "var(--tracking-caption)",
            }}
          >
            {item.project}
          </p>
        </div>
      ))}
    </div>
  );
}
