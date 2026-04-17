import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center"
      id="hero"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-tech-training.dim_1200x600.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.025 280 / 0.92) 0%, oklch(0.12 0.03 270 / 0.85) 50%, oklch(0.10 0.025 280 / 0.95) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Decorative orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.65 0.18 200)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "oklch(0.6 0.15 280)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero copy */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[oklch(0.65_0.18_200/0.3)] bg-[oklch(0.65_0.18_200/0.08)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-xs font-body font-medium text-accent tracking-wide uppercase">
                Now enrolling — 2026 cohorts
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              <span className="text-[oklch(0.94_0.02_280)]">Level Up</span>
              <br />
              <span
                className="gradient-primary bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Skills
              </span>
            </h1>

            <p className="text-[oklch(0.62_0.02_280)] font-body text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Access world-class IT training, certifications, and expert-led
              courses on our advanced learning platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#features"
                className="btn-primary text-base"
                data-ocid="hero.explore_courses_button"
              >
                Explore Courses
              </a>
              <a
                href="#login"
                className="px-6 py-3 font-display font-semibold text-base text-[oklch(0.84_0.02_280)] rounded-lg border border-[oklch(0.32_0.03_280)] hover:border-[oklch(0.5_0.03_280)] hover:text-[oklch(0.94_0.02_280)] transition-smooth"
                data-ocid="hero.view_demo_button"
              >
                View Demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              {[
                { value: "50K+", label: "Learners" },
                { value: "200+", label: "Courses" },
                { value: "98%", label: "Pass Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-2xl text-[oklch(0.94_0.02_280)]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-body text-[oklch(0.52_0.02_280)] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Login card */}
          <motion.div
            id="login"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
