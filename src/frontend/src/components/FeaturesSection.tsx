import {
  BookOpen,
  MonitorPlay,
  ShieldCheck,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Trophy,
    title: "Industry-Recognized Certifications",
    description:
      "Gain credentials valued by top employers globally. Our certifications are accredited by leading industry bodies.",
    color: "oklch(0.78 0.18 50)",
    bg: "oklch(0.78 0.18 50 / 0.08)",
    border: "oklch(0.78 0.18 50 / 0.2)",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from real-world practitioners and industry leaders with 10+ years of hands-on experience.",
    color: "oklch(0.65 0.18 200)",
    bg: "oklch(0.65 0.18 200 / 0.08)",
    border: "oklch(0.65 0.18 200 / 0.2)",
  },
  {
    icon: MonitorPlay,
    title: "Live Interactive Courses",
    description:
      "Engage in real-time with peers and instructors. Ask questions, get feedback, and build skills faster.",
    color: "oklch(0.7 0.18 265)",
    bg: "oklch(0.7 0.18 265 / 0.08)",
    border: "oklch(0.7 0.18 265 / 0.2)",
  },
  {
    icon: ShieldCheck,
    title: "Hands-On Labs",
    description:
      "Practice in sandboxed cloud environments. No local setup required — just open a browser and code.",
    color: "oklch(0.72 0.16 150)",
    bg: "oklch(0.72 0.16 150 / 0.08)",
    border: "oklch(0.72 0.16 150 / 0.2)",
  },
  {
    icon: Zap,
    title: "Accelerated Learning Paths",
    description:
      "Structured roadmaps for DevOps, Cloud, Security, and Full-Stack take you from beginner to job-ready fast.",
    color: "oklch(0.72 0.20 60)",
    bg: "oklch(0.72 0.20 60 / 0.08)",
    border: "oklch(0.72 0.20 60 / 0.2)",
  },
  {
    icon: BookOpen,
    title: "Lifetime Access",
    description:
      "Courses you complete stay with you forever. Revisit materials, download resources, and stay current.",
    color: "oklch(0.68 0.18 320)",
    bg: "oklch(0.68 0.18 320 / 0.08)",
    border: "oklch(0.68 0.18 320 / 0.2)",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-24 border-t border-[oklch(0.20_0.02_280)]"
      style={{ background: "oklch(0.12 0.025 280)" }}
      id="features"
      data-ocid="features.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest text-accent border border-[oklch(0.65_0.18_200/0.3)] bg-[oklch(0.65_0.18_200/0.07)] mb-4">
            Why KodeMasters?
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[oklch(0.94_0.02_280)] leading-tight">
            Everything You Need to{" "}
            <span
              className="gradient-primary bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Grow Your Career
            </span>
          </h2>
          <p className="mt-4 text-[oklch(0.56_0.02_280)] font-body text-lg max-w-2xl mx-auto">
            Our platform combines expert instruction, real-world labs, and
            community support to fast-track your IT career.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="features.list"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative rounded-xl border p-6 transition-smooth hover:-translate-y-1"
                style={{
                  background: "oklch(0.15 0.025 280)",
                  borderColor: feature.border,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                data-ocid={`features.item.${index + 1}`}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  style={{ background: feature.bg }}
                  aria-hidden="true"
                />
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5 border"
                  style={{
                    background: feature.bg,
                    borderColor: feature.border,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <h3 className="relative font-display font-semibold text-base text-[oklch(0.90_0.02_280)] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="relative text-sm font-body text-[oklch(0.54_0.02_280)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
