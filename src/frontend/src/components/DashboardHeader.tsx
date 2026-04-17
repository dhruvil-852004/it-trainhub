import { Bell, LogOut, MonitorPlay } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

interface DashboardHeaderProps {
  onMenuToggle?: () => void;
}

export default function DashboardHeader({
  onMenuToggle,
}: DashboardHeaderProps) {
  const { logout } = useAuth();

  return (
    <header
      className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-[oklch(0.22_0.02_280)] bg-[oklch(0.14_0.025_280)] shadow-sm"
      data-ocid="dashboard.header"
    >
      {/* Left: logo + title */}
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-lg text-[oklch(0.60_0.02_280)] hover:text-[oklch(0.90_0.02_280)] hover:bg-[oklch(0.20_0.02_280)] transition-smooth"
          aria-label="Toggle menu"
          data-ocid="dashboard.menu_toggle_button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <title>Menu</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[oklch(0.65_0.18_200)] to-[oklch(0.60_0.15_280)]">
            <MonitorPlay className="w-4 h-4 text-[oklch(0.10_0.02_280)]" />
          </div>
          <div>
            <span className="font-display font-bold text-[oklch(0.94_0.02_280)] text-base leading-none tracking-tight">
              IT TrainHub
            </span>
            <span className="block text-[10px] font-body text-[oklch(0.54_0.02_280)] leading-none mt-0.5">
              Admin Dashboard
            </span>
          </div>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative p-2.5 rounded-lg text-[oklch(0.60_0.02_280)] hover:text-[oklch(0.90_0.02_280)] hover:bg-[oklch(0.20_0.02_280)] transition-smooth"
          aria-label="Notifications"
          data-ocid="dashboard.notifications_button"
        >
          <Bell className="w-4.5 h-4.5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[oklch(0.70_0.22_200)]" />
        </button>

        <div className="w-px h-6 bg-[oklch(0.24_0.02_280)] mx-1" />

        <div className="flex items-center gap-2.5 mr-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm bg-gradient-to-br from-[oklch(0.65_0.18_200)] to-[oklch(0.60_0.15_280)] text-[oklch(0.10_0.02_280)]">
            D
          </div>
          <span className="hidden sm:block text-sm font-body text-[oklch(0.75_0.02_280)]">
            Dhruvil
          </span>
        </div>

        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-body font-medium text-[oklch(0.65_0.15_22)] hover:bg-[oklch(0.18_0.04_22)] hover:text-[oklch(0.80_0.15_22)] border border-transparent hover:border-[oklch(0.35_0.10_22)] transition-smooth"
          data-ocid="dashboard.logout_button"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}
