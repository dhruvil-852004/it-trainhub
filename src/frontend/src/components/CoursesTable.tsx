import { Search } from "lucide-react";
import { useState } from "react";
import type { Course } from "../backend";

const FALLBACK_LEVEL =
  "text-[oklch(0.50_0.02_280)] bg-[oklch(0.50_0.02_280)/12] border-[oklch(0.50_0.02_280)/20]";
const FALLBACK_STATUS = "text-[oklch(0.54_0.02_280)] bg-[oklch(0.22_0.02_280)]";
const FALLBACK_DOT = "bg-[oklch(0.50_0.02_280)]";

const LEVEL_STYLES: Record<string, string> = {
  Beginner:
    "text-[oklch(0.75_0.16_150)] bg-[oklch(0.75_0.16_150)/12] border-[oklch(0.75_0.16_150)/20]",
  Intermediate:
    "text-[oklch(0.78_0.18_70)] bg-[oklch(0.78_0.18_70)/12] border-[oklch(0.78_0.18_70)/20]",
  Advanced:
    "text-[oklch(0.70_0.22_200)] bg-[oklch(0.70_0.22_200)/12] border-[oklch(0.70_0.22_200)/20]",
};

const STATUS_STYLES: Record<string, string> = {
  Active: "text-[oklch(0.75_0.16_150)] bg-[oklch(0.75_0.16_150)/12]",
  Upcoming: "text-[oklch(0.78_0.18_70)] bg-[oklch(0.78_0.18_70)/12]",
  Completed: FALLBACK_STATUS,
};

const STATUS_DOT: Record<string, string> = {
  Active: "bg-[oklch(0.75_0.16_150)]",
  Upcoming: "bg-[oklch(0.78_0.18_70)]",
  Completed: FALLBACK_DOT,
};

const SKELETON_COLS = [
  "name",
  "cat",
  "dur",
  "lvl",
  "enroll",
  "status",
] as const;
const SKELETON_ROWS = ["r1", "r2", "r3", "r4"] as const;

interface CoursesTableProps {
  courses?: Course[];
  isLoading?: boolean;
  error?: string | null;
}

export default function CoursesTable({
  courses = [],
  isLoading,
  error,
}: CoursesTableProps) {
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.48_0.02_280)]" />
        <input
          type="text"
          placeholder="Search courses…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[oklch(0.18_0.02_280)] border border-[oklch(0.25_0.02_280)] text-sm font-body text-[oklch(0.84_0.02_280)] placeholder-[oklch(0.44_0.02_280)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.22_200)/50] transition-smooth"
          data-ocid="courses.search_input"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-[oklch(0.22_0.02_280)]">
        <table className="w-full text-sm font-body" data-ocid="courses.table">
          <thead>
            <tr className="border-b border-[oklch(0.22_0.02_280)] bg-[oklch(0.14_0.025_280)]">
              <th className="text-left px-5 py-3.5 font-display font-semibold text-xs uppercase tracking-wide text-[oklch(0.50_0.02_280)]">
                Course Name
              </th>
              <th className="text-left px-4 py-3.5 font-display font-semibold text-xs uppercase tracking-wide text-[oklch(0.50_0.02_280)]">
                Category
              </th>
              <th className="text-left px-4 py-3.5 font-display font-semibold text-xs uppercase tracking-wide text-[oklch(0.50_0.02_280)]">
                Duration
              </th>
              <th className="text-left px-4 py-3.5 font-display font-semibold text-xs uppercase tracking-wide text-[oklch(0.50_0.02_280)]">
                Level
              </th>
              <th className="text-right px-4 py-3.5 font-display font-semibold text-xs uppercase tracking-wide text-[oklch(0.50_0.02_280)]">
                Enrollment
              </th>
              <th className="text-left px-4 py-3.5 font-display font-semibold text-xs uppercase tracking-wide text-[oklch(0.50_0.02_280)]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              SKELETON_ROWS.map((row) => (
                <tr
                  key={row}
                  className="border-b border-[oklch(0.18_0.02_280)] bg-[oklch(0.16_0.02_280)]"
                  data-ocid="courses.loading_state"
                >
                  {SKELETON_COLS.map((col) => (
                    <td key={col} className="px-5 py-4">
                      <div className="h-4 rounded bg-[oklch(0.20_0.02_280)] animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))
            ) : error ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-12 text-[oklch(0.65_0.15_22)]"
                  data-ocid="courses.error_state"
                >
                  {error}
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-12 text-[oklch(0.48_0.02_280)]"
                  data-ocid="courses.empty_state"
                >
                  {courses.length === 0
                    ? "No courses available yet."
                    : "No courses found matching your search."}
                </td>
              </tr>
            ) : (
              filtered.map((course, idx) => {
                const levelStyle = LEVEL_STYLES[course.level] ?? FALLBACK_LEVEL;
                const statusStyle =
                  STATUS_STYLES[course.status] ?? FALLBACK_STATUS;
                const dotStyle = STATUS_DOT[course.status] ?? FALLBACK_DOT;
                return (
                  <tr
                    key={course.id}
                    className="border-b border-[oklch(0.18_0.02_280)] bg-[oklch(0.16_0.02_280)] hover:bg-[oklch(0.18_0.02_280)] transition-smooth"
                    data-ocid={`courses.item.${idx + 1}`}
                  >
                    <td className="px-5 py-4 font-medium text-[oklch(0.88_0.02_280)]">
                      {course.name}
                    </td>
                    <td className="px-4 py-4 text-[oklch(0.60_0.02_280)]">
                      {course.category}
                    </td>
                    <td className="px-4 py-4 text-[oklch(0.60_0.02_280)]">
                      {course.duration}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full border text-xs font-medium ${levelStyle}`}
                      >
                        {course.level}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right text-[oklch(0.78_0.02_280)] tabular-nums">
                      {Number(course.enrollment)}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyle}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${dotStyle}`}
                        />
                        {course.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
