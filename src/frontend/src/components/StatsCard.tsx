import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  accent?: "cyan" | "violet" | "green" | "amber";
  ocid: string;
  isLoading?: boolean;
}

const ACCENT_STYLES = {
  cyan: {
    icon: "text-[oklch(0.70_0.22_200)]",
    bg: "bg-[oklch(0.70_0.22_200)/12] border-[oklch(0.70_0.22_200)/20]",
    dot: "bg-[oklch(0.70_0.22_200)]",
  },
  violet: {
    icon: "text-[oklch(0.72_0.18_280)]",
    bg: "bg-[oklch(0.72_0.18_280)/12] border-[oklch(0.72_0.18_280)/20]",
    dot: "bg-[oklch(0.72_0.18_280)]",
  },
  green: {
    icon: "text-[oklch(0.75_0.16_150)]",
    bg: "bg-[oklch(0.75_0.16_150)/12] border-[oklch(0.75_0.16_150)/20]",
    dot: "bg-[oklch(0.75_0.16_150)]",
  },
  amber: {
    icon: "text-[oklch(0.78_0.18_70)]",
    bg: "bg-[oklch(0.78_0.18_70)/12] border-[oklch(0.78_0.18_70)/20]",
    dot: "bg-[oklch(0.78_0.18_70)]",
  },
};

export default function StatsCard({
  label,
  value,
  icon: Icon,
  trend,
  trendUp,
  accent = "cyan",
  ocid,
  isLoading,
}: StatsCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-2xl bg-[oklch(0.16_0.02_280)] border border-[oklch(0.22_0.02_280)] hover:border-[oklch(0.28_0.02_280)] transition-smooth"
      data-ocid={ocid}
    >
      <div className="flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center ${styles.bg}`}
        >
          <Icon className={`w-5 h-5 ${styles.icon}`} />
        </div>
        {trend && (
          <span
            className={`text-xs font-body font-medium px-2 py-0.5 rounded-full ${
              trendUp
                ? "text-[oklch(0.75_0.16_150)] bg-[oklch(0.75_0.16_150)/12]"
                : "text-[oklch(0.65_0.15_22)] bg-[oklch(0.65_0.15_22)/12]"
            }`}
          >
            {trendUp ? "↑" : "↓"} {trend}
          </span>
        )}
      </div>

      <div>
        {isLoading ? (
          <div className="h-8 w-16 bg-[oklch(0.22_0.02_280)] rounded animate-pulse mb-1" />
        ) : (
          <p className="text-2xl font-display font-bold text-[oklch(0.94_0.02_280)]">
            {value}
          </p>
        )}
        <p className="text-sm font-body text-[oklch(0.54_0.02_280)] mt-0.5">
          {label}
        </p>
      </div>
    </div>
  );
}
