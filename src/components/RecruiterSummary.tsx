import { RecruiterSummaryItem } from "@/data/portfolio";

interface RecruiterSummaryProps {
  items: RecruiterSummaryItem[];
}

export default function RecruiterSummary({ items }: RecruiterSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-slate-50 rounded-xl p-6 flex flex-col gap-3 border border-transparent hover:border-slate-200 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg group z-0 hover:z-10"
        >
          <div className="flex flex-col gap-1">
            <span
              className="text-slate-400 font-bold uppercase tracking-wider"
              style={{
                fontSize: "var(--text-micro)",
                letterSpacing: "var(--tracking-caption)",
              }}
            >
              {item.project}
            </span>
            <h3
              className="font-bold text-slate-900 transition-colors"
              style={{
                fontSize: "var(--text-card)",
                lineHeight: "var(--leading-card)",
                letterSpacing: "var(--tracking-title)",
              }}
            >
              {item.title}
            </h3>
          </div>
          <p
            className="text-slate-600"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-body)",
              letterSpacing: "var(--tracking-body)",
            }}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
