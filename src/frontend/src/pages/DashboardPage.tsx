import { useActor } from "@caffeineai/core-infrastructure";
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  UserSquare2,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { type Course, type Stats, createActor } from "../backend";
import CoursesTable from "../components/CoursesTable";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar, {
  type DashboardView,
} from "../components/DashboardSidebar";
import StatsCard from "../components/StatsCard";

const EVENTS = [
  {
    date: "Apr 22",
    time: "10:00 AM",
    title: "React & TypeScript Bootcamp — Kickoff Session",
    trainer: "Riya Mehta",
  },
  {
    date: "Apr 24",
    time: "02:00 PM",
    title: "AWS Solutions Architect Workshop",
    trainer: "Arjun Patel",
  },
  {
    date: "Apr 28",
    time: "11:00 AM",
    title: "Python Data Science Certification Exam",
    trainer: "Neha Sharma",
  },
];

const LEVEL_DOT: Record<string, string> = {
  Beginner: "bg-[oklch(0.75_0.16_150)]",
  Intermediate: "bg-[oklch(0.78_0.18_70)]",
  Advanced: "bg-[oklch(0.70_0.22_200)]",
};

const FALLBACK_DOT = "bg-[oklch(0.50_0.02_280)]";

interface OverviewProps {
  stats: Stats | null;
  courses: Course[];
  isLoadingStats: boolean;
  isLoadingCourses: boolean;
}

function OverviewSection({
  stats,
  courses,
  isLoadingStats,
  isLoadingCourses,
}: OverviewProps) {
  const recentCourses = courses.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Stats grid */}
      <section data-ocid="dashboard.stats_section">
        <h2 className="text-xs font-display font-semibold uppercase tracking-widest text-[oklch(0.44_0.02_280)] mb-4">
          Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatsCard
            label="Total Students"
            value={stats ? String(Number(stats.totalStudents)) : "—"}
            icon={Users}
            accent="cyan"
            ocid="dashboard.stats.students"
            isLoading={isLoadingStats}
          />
          <StatsCard
            label="Active Courses"
            value={stats ? String(Number(stats.activeCourses)) : "—"}
            icon={BookOpen}
            accent="violet"
            ocid="dashboard.stats.courses"
            isLoading={isLoadingStats}
          />
          <StatsCard
            label="Certifications Issued"
            value={stats ? Number(stats.certifications).toLocaleString() : "—"}
            icon={Award}
            accent="green"
            ocid="dashboard.stats.certifications"
            isLoading={isLoadingStats}
          />
          <StatsCard
            label="Total Trainers"
            value={stats ? String(Number(stats.trainers)) : "—"}
            icon={UserSquare2}
            accent="amber"
            ocid="dashboard.stats.trainers"
            isLoading={isLoadingStats}
          />
        </div>
      </section>

      {/* Two-column row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Recent courses */}
        <section
          className="lg:col-span-3 rounded-2xl bg-[oklch(0.16_0.02_280)] border border-[oklch(0.22_0.02_280)] p-5"
          data-ocid="dashboard.recent_courses_section"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-[oklch(0.90_0.02_280)]">
              Recent Courses
            </h3>
            <span className="text-xs font-body text-[oklch(0.70_0.22_200)] hover:opacity-80 cursor-pointer">
              View all →
            </span>
          </div>
          <div className="space-y-3">
            {isLoadingCourses
              ? [1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="flex items-center justify-between py-3 border-b border-[oklch(0.20_0.02_280)] last:border-0"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-2 h-2 rounded-full shrink-0 bg-[oklch(0.22_0.02_280)] animate-pulse" />
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="h-3 bg-[oklch(0.22_0.02_280)] rounded animate-pulse w-3/4" />
                        <div className="h-2.5 bg-[oklch(0.20_0.02_280)] rounded animate-pulse w-1/2" />
                      </div>
                    </div>
                    <div className="shrink-0 ml-4 w-8 h-4 bg-[oklch(0.22_0.02_280)] rounded animate-pulse" />
                  </div>
                ))
              : recentCourses.map((course, i) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between py-3 border-b border-[oklch(0.20_0.02_280)] last:border-0"
                    data-ocid={`dashboard.recent_courses.item.${i + 1}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${LEVEL_DOT[course.level] ?? FALLBACK_DOT}`}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-body font-medium text-[oklch(0.86_0.02_280)] truncate">
                          {course.name}
                        </p>
                        <p className="text-xs font-body text-[oklch(0.50_0.02_280)]">
                          {course.duration} · {course.level}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 ml-4 text-right">
                      <p className="text-sm font-body font-medium text-[oklch(0.70_0.22_200)] tabular-nums">
                        {Number(course.enrollment)}
                      </p>
                      <p className="text-[10px] font-body text-[oklch(0.46_0.02_280)]">
                        enrolled
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        </section>

        {/* Upcoming events */}
        <section
          className="lg:col-span-2 rounded-2xl bg-[oklch(0.16_0.02_280)] border border-[oklch(0.22_0.02_280)] p-5"
          data-ocid="dashboard.events_section"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-[oklch(0.90_0.02_280)]">
              Upcoming Events
            </h3>
            <TrendingUp className="w-4 h-4 text-[oklch(0.48_0.02_280)]" />
          </div>
          <div className="space-y-4">
            {EVENTS.map((ev, i) => (
              <div
                key={ev.title}
                className="flex gap-3"
                data-ocid={`dashboard.events.item.${i + 1}`}
              >
                <div className="shrink-0 text-center w-12">
                  <p className="text-xs font-display font-bold text-[oklch(0.70_0.22_200)]">
                    {ev.date}
                  </p>
                  <p className="text-[10px] font-body text-[oklch(0.46_0.02_280)] flex items-center justify-center gap-0.5 mt-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    {ev.time}
                  </p>
                </div>
                <div className="min-w-0 border-l border-[oklch(0.24_0.02_280)] pl-3">
                  <p className="text-sm font-body font-medium text-[oklch(0.82_0.02_280)] line-clamp-2 leading-snug">
                    {ev.title}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3 text-[oklch(0.46_0.02_280)]" />
                    <p className="text-xs font-body text-[oklch(0.50_0.02_280)]">
                      {ev.trainer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const VIEW_TITLES: Record<DashboardView, string> = {
  overview: "Dashboard Overview",
  courses: "Courses",
  students: "Students",
  certifications: "Certifications",
  trainers: "Trainers",
};

export default function DashboardPage() {
  const [activeView, setActiveView] = useState<DashboardView>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { actor, isFetching } = useActor(createActor);

  const [stats, setStats] = useState<Stats | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [isLoadingCourses, setIsLoadingCourses] = useState(true);
  const [_statsError, setStatsError] = useState<string | null>(null);
  const [coursesError, setCoursesError] = useState<string | null>(null);

  useEffect(() => {
    if (!actor || isFetching) return;

    let cancelled = false;

    setIsLoadingStats(true);
    setIsLoadingCourses(true);

    actor
      .getStats()
      .then((data) => {
        if (!cancelled) {
          setStats(data);
          setIsLoadingStats(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatsError("Failed to load stats.");
          setIsLoadingStats(false);
        }
      });

    actor
      .getCourses()
      .then((data) => {
        if (!cancelled) {
          setCourses(data);
          setIsLoadingCourses(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setCoursesError("Failed to load courses.");
          setIsLoadingCourses(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [actor, isFetching]);

  return (
    <div
      className="h-screen flex flex-col bg-[oklch(0.11_0.025_280)] overflow-hidden"
      data-ocid="dashboard.page"
    >
      <DashboardHeader onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar overlay on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 top-16 bg-black/40 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
            aria-hidden="true"
            role="presentation"
          />
        )}

        <DashboardSidebar
          activeView={activeView}
          onNavigate={(view) => {
            setActiveView(view);
            setSidebarOpen(false);
          }}
          isOpen={sidebarOpen}
        />

        {/* Main content */}
        <main
          className="flex-1 overflow-y-auto p-6 lg:p-8"
          data-ocid="dashboard.main"
        >
          {/* Page header */}
          <div className="mb-6">
            <h1 className="text-xl font-display font-bold text-[oklch(0.94_0.02_280)]">
              {VIEW_TITLES[activeView]}
            </h1>
            <p className="text-sm font-body text-[oklch(0.50_0.02_280)] mt-0.5">
              {activeView === "overview"
                ? "Welcome back, Dhruvil. Here's what's happening today."
                : `Manage your ${VIEW_TITLES[activeView].toLowerCase()} here.`}
            </p>
          </div>

          {activeView === "overview" && (
            <OverviewSection
              stats={stats}
              courses={courses}
              isLoadingStats={isLoadingStats}
              isLoadingCourses={isLoadingCourses}
            />
          )}

          {activeView === "courses" && (
            <section data-ocid="dashboard.courses_section">
              {coursesError && (
                <p
                  className="text-sm text-[oklch(0.65_0.15_22)] mb-3"
                  data-ocid="dashboard.courses.error_state"
                >
                  {coursesError}
                </p>
              )}
              <CoursesTable
                courses={courses}
                isLoading={isLoadingCourses}
                error={coursesError}
              />
            </section>
          )}

          {(activeView === "students" ||
            activeView === "certifications" ||
            activeView === "trainers") && (
            <div
              className="flex flex-col items-center justify-center py-20 text-center"
              data-ocid={`dashboard.${activeView}.empty_state`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[oklch(0.70_0.22_200)/12] border border-[oklch(0.70_0.22_200)/20] flex items-center justify-center mb-4">
                {activeView === "students" && (
                  <Users className="w-7 h-7 text-[oklch(0.70_0.22_200)]" />
                )}
                {activeView === "certifications" && (
                  <Award className="w-7 h-7 text-[oklch(0.70_0.22_200)]" />
                )}
                {activeView === "trainers" && (
                  <UserSquare2 className="w-7 h-7 text-[oklch(0.70_0.22_200)]" />
                )}
              </div>
              <h3 className="font-display font-semibold text-[oklch(0.86_0.02_280)] mb-2">
                {VIEW_TITLES[activeView]} Management
              </h3>
              <p className="text-sm font-body text-[oklch(0.50_0.02_280)] max-w-sm">
                This section is coming soon. Use the Dashboard overview for a
                summary.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// unused helper removed
