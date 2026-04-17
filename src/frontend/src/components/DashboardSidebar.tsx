import {
  Award,
  BookOpen,
  LayoutDashboard,
  UserSquare2,
  Users,
} from "lucide-react";

export type DashboardView =
  | "overview"
  | "courses"
  | "students"
  | "certifications"
  | "trainers";

interface NavItem {
  id: DashboardView;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "overview",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-4.5 h-4.5" />,
  },
  {
    id: "courses",
    label: "Courses",
    icon: <BookOpen className="w-4.5 h-4.5" />,
  },
  {
    id: "students",
    label: "Students",
    icon: <Users className="w-4.5 h-4.5" />,
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: <Award className="w-4.5 h-4.5" />,
  },
  {
    id: "trainers",
    label: "Trainers",
    icon: <UserSquare2 className="w-4.5 h-4.5" />,
  },
];

interface DashboardSidebarProps {
  activeView: DashboardView;
  onNavigate: (view: DashboardView) => void;
  isOpen?: boolean;
}

export default function DashboardSidebar({
  activeView,
  onNavigate,
  isOpen = true,
}: DashboardSidebarProps) {
  return (
    <aside
      className={`
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        fixed md:relative z-30 md:z-auto
        top-16 md:top-0
        h-[calc(100vh-4rem)] md:h-full
        w-64 shrink-0
        flex flex-col
        bg-[oklch(0.12_0.025_280)]
        border-r border-[oklch(0.20_0.02_280)]
        transition-transform duration-300
      `}
      data-ocid="dashboard.sidebar"
    >
      <nav
        className="flex-1 py-4 px-3 space-y-1 overflow-y-auto"
        aria-label="Dashboard navigation"
      >
        <p className="px-3 pb-2 text-[10px] font-display font-semibold uppercase tracking-widest text-[oklch(0.42_0.02_280)]">
          Main Menu
        </p>
        {NAV_ITEMS.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body font-medium
                transition-smooth text-left
                ${
                  isActive
                    ? "bg-[oklch(0.70_0.22_200)/15] text-[oklch(0.78_0.18_200)] border border-[oklch(0.70_0.22_200)/25]"
                    : "text-[oklch(0.62_0.02_280)] hover:bg-[oklch(0.18_0.02_280)] hover:text-[oklch(0.84_0.02_280)] border border-transparent"
                }
              `}
              data-ocid={`dashboard.nav.${item.id}`}
            >
              <span
                className={
                  isActive
                    ? "text-[oklch(0.70_0.22_200)]"
                    : "text-[oklch(0.50_0.02_280)]"
                }
              >
                {item.icon}
              </span>
              {item.label}
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[oklch(0.70_0.22_200)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom badge */}
      <div className="p-4 border-t border-[oklch(0.20_0.02_280)]">
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[oklch(0.16_0.02_280)]">
          <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs bg-gradient-to-br from-[oklch(0.65_0.18_200)] to-[oklch(0.60_0.15_280)] text-[oklch(0.10_0.02_280)]">
            D
          </div>
          <div className="min-w-0">
            <p className="text-xs font-body font-semibold text-[oklch(0.84_0.02_280)] truncate">
              Dhruvil Desai
            </p>
            <p className="text-[10px] font-body text-[oklch(0.48_0.02_280)] truncate">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
