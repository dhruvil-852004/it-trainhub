import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Globe,
  Handshake,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Sharing",
    desc: "Earn up to 35% recurring revenue on every learner you bring to the platform. Transparent tracking and monthly payouts.",
    color: "oklch(0.7 0.22 200)",
  },
  {
    icon: Globe,
    title: "Co-Branded Content",
    desc: "Launch co-branded courses and certifications under your company name, backed by IT TrainHub's accreditation framework.",
    color: "oklch(0.75 0.18 265)",
  },
  {
    icon: Code2,
    title: "Technical Collaboration",
    desc: "Deep API integrations, white-label LMS access, and dedicated engineering support to embed learning in your platform.",
    color: "oklch(0.72 0.20 140)",
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    desc: "Your own partner success manager, onboarding specialists, and priority support queue for zero friction.",
    color: "oklch(0.7 0.22 200)",
  },
  {
    icon: Award,
    title: "Accreditation Rights",
    desc: "Grant your learners industry-recognized certifications trusted by top-tier tech employers worldwide.",
    color: "oklch(0.75 0.18 265)",
  },
  {
    icon: Zap,
    title: "Early Access",
    desc: "Beta access to new course launches, AI-driven learning features, and platform updates before general release.",
    color: "oklch(0.72 0.20 140)",
  },
];

const tiers = [
  {
    name: "Silver",
    tagline: "Start Your Journey",
    price: "Revenue Share",
    priceDetail: "Up to 20%",
    features: [
      "Core Platform Access",
      "Lead Sharing Program",
      "Co-marketing Assets",
      "Monthly Partner Newsletter",
      "Community Forum Access",
    ],
    cta: "Join Now",
    popular: false,
  },
  {
    name: "Gold",
    tagline: "Accelerate Growth",
    price: "Revenue Share",
    priceDetail: "Up to 30%",
    features: [
      "Everything in Silver",
      "Advanced Analytics Dashboard",
      "Dedicated Account Manager",
      "Co-branded Landing Pages",
      "Priority Support (24h SLA)",
      "Quarterly Business Reviews",
    ],
    cta: "Join Now",
    popular: true,
  },
  {
    name: "Platinum",
    tagline: "Strategic Partnership",
    price: "Custom Tier",
    priceDetail: "Negotiated",
    features: [
      "Everything in Gold",
      "White-label LMS Access",
      "Custom Certification Programs",
      "API & Webhook Access",
      "Dedicated CSE Team",
      "Joint GTM Strategy",
      "Executive Sponsor Access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Fill out our partner application form. Tell us about your company, audience size, and partnership goals.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Review",
    desc: "Our partnership team reviews your application within 48 hours. We assess fit and identify the best tier for your needs.",
    icon: CheckCircle2,
  },
  {
    num: "03",
    title: "Onboard",
    desc: "Sign your partnership agreement, get platform credentials, and complete a 2-hour onboarding session with your account manager.",
    icon: Handshake,
  },
  {
    num: "04",
    title: "Grow",
    desc: "Launch co-marketing campaigns, access the partner portal, and start driving revenue from day one.",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    quote:
      "IT TrainHub's Gold partnership program helped us upskill 2,000+ enterprise clients in under 6 months. The co-branded content quality is unmatched in the industry.",
    name: "Priya Sharma",
    role: "VP Partnerships",
    company: "CloudWave Technologies",
    avatar: "PS",
  },
  {
    quote:
      "The revenue-sharing model and dedicated account team made it easy for us to build a new revenue stream. Our clients love the certifications.",
    name: "Marcus Osei",
    role: "CEO",
    company: "DevForge Africa",
    avatar: "MO",
  },
  {
    quote:
      "White-label access means our learners get a seamless branded experience. The API integration took only two days. Absolute game-changer.",
    name: "Laura Fitch",
    role: "CTO",
    company: "Nexus Learning Group",
    avatar: "LF",
  },
];

const stats = [
  { value: "500+", label: "Active Partners" },
  { value: "98%", label: "Partner Satisfaction" },
  { value: "$20M+", label: "Partner Revenue Paid" },
  { value: "180+", label: "Countries Reached" },
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen flex flex-col dark bg-background text-foreground">
      <Header />

      {/* ── Hero ── */}
      <section
        id="partner-hero"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.22 0.04 265 / 0.5) 0%, transparent 70%), oklch(0.13 0.02 280)",
        }}
        data-ocid="partner.hero_section"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.94 0.02 280) 1px, transparent 1px), linear-gradient(90deg, oklch(0.94 0.02 280) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
          style={{ background: "oklch(0.7 0.22 200)" }}
        />
        <div
          className="absolute top-32 right-10 w-48 h-48 rounded-full blur-[80px] opacity-15"
          style={{ background: "oklch(0.7 0.18 265)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border text-xs font-display font-semibold tracking-widest uppercase"
            style={{
              borderColor: "oklch(0.7 0.22 200 / 0.35)",
              background: "oklch(0.7 0.22 200 / 0.1)",
              color: "oklch(0.7 0.22 200)",
            }}
            data-ocid="partner.hero_badge"
          >
            <Star className="w-3 h-3" />
            Partnership Program
          </div>

          <h1
            className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight mb-6"
            data-ocid="partner.hero_heading"
          >
            <span className="text-[oklch(0.94_0.02_280)]">
              Unlock Growth.
              <br className="hidden sm:block" /> Shape the Future.
            </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.7 0.22 200), oklch(0.75 0.18 265), oklch(0.7 0.22 200))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "Partner with IT TrainHub."
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg font-body text-[oklch(0.60_0.02_280)] leading-relaxed mb-10"
            data-ocid="partner.hero_subheadline"
          >
            Access premium IT training solutions, expand your reach, and drive
            revenue through strategic collaboration. Join 500+ companies already
            growing with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => scrollTo("partner-form")}
              className="btn-primary flex items-center gap-2 text-base px-8 py-3.5"
              data-ocid="partner.hero_cta_primary"
            >
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("partner-tiers")}
              className="btn-secondary flex items-center gap-2 text-base px-8 py-3.5"
              data-ocid="partner.hero_cta_secondary"
            >
              View Tiers
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="border-y"
        style={{
          borderColor: "oklch(0.22 0.02 280)",
          background: "oklch(0.15 0.02 280)",
        }}
        data-ocid="partner.stats_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center"
                data-ocid={`partner.stat.${s.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                <p
                  className="font-display font-bold text-3xl sm:text-4xl mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.22 200), oklch(0.75 0.18 265))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-sm font-body text-[oklch(0.54_0.02_280)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section
        id="partner-benefits"
        className="py-24"
        style={{ background: "oklch(0.13 0.02 280)" }}
        data-ocid="partner.benefits_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.7 0.22 200)" }}
            >
              Why Partner With Us
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[oklch(0.94_0.02_280)] mb-4">
              Partnership Benefits
            </h2>
            <p className="text-[oklch(0.56_0.02_280)] font-body max-w-xl mx-auto">
              Built for companies that want to grow fast and build lasting value
              for their clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="card-elevated p-6 group relative overflow-hidden"
                style={{
                  background: "oklch(0.16 0.02 280)",
                  borderColor: "oklch(0.24 0.02 280)",
                }}
                data-ocid={`partner.benefit.${b.title.toLowerCase().replace(/\s+/g, "_")}`}
              >
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-smooth"
                  style={{ background: b.color }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${b.color}22` }}
                >
                  <b.icon
                    className="w-5 h-5"
                    style={{ color: b.color }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display font-semibold text-[oklch(0.90_0.02_280)] mb-2">
                  {b.title}
                </h3>
                <p className="text-sm font-body text-[oklch(0.54_0.02_280)] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section
        id="partner-tiers"
        className="py-24"
        style={{ background: "oklch(0.115 0.02 280)" }}
        data-ocid="partner.tiers_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.7 0.22 200)" }}
            >
              Choose Your Level
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[oklch(0.94_0.02_280)] mb-4">
              Partnership Tiers
            </h2>
            <p className="text-[oklch(0.56_0.02_280)] font-body max-w-xl mx-auto">
              Scale from community partner to strategic co-builder. Every tier
              comes with real growth tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="relative flex flex-col rounded-xl border overflow-hidden transition-smooth"
                style={{
                  background: tier.popular
                    ? "oklch(0.19 0.03 265)"
                    : "oklch(0.16 0.02 280)",
                  borderColor: tier.popular
                    ? "oklch(0.7 0.22 200 / 0.5)"
                    : "oklch(0.24 0.02 280)",
                  boxShadow: tier.popular
                    ? "0 0 40px oklch(0.7 0.22 200 / 0.12)"
                    : "none",
                }}
                data-ocid={`partner.tier.${i + 1}`}
              >
                {tier.popular && (
                  <div
                    className="text-center py-1.5 text-xs font-display font-semibold tracking-widest uppercase"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.7 0.22 200), oklch(0.75 0.18 265))",
                      color: "oklch(0.13 0.02 280)",
                    }}
                  >
                    ⭐ Most Popular
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3
                      className="font-display font-bold text-2xl mb-1"
                      style={{
                        color: tier.popular
                          ? "oklch(0.7 0.22 200)"
                          : "oklch(0.90 0.02 280)",
                      }}
                    >
                      {tier.name}
                    </h3>
                    <p className="text-sm font-body text-[oklch(0.54_0.02_280)]">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-[oklch(0.24_0.02_280)]">
                    <p className="font-display font-bold text-3xl text-[oklch(0.90_0.02_280)]">
                      {tier.priceDetail}
                    </p>
                    <p className="text-xs font-body text-[oklch(0.48_0.02_280)] mt-0.5">
                      {tier.price}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm font-body text-[oklch(0.72_0.02_280)]"
                      >
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{
                            color: tier.popular
                              ? "oklch(0.7 0.22 200)"
                              : "oklch(0.65 0.18 200)",
                          }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => scrollTo("partner-form")}
                    className={
                      tier.popular
                        ? "btn-primary w-full text-center"
                        : "btn-secondary w-full text-center"
                    }
                    data-ocid={`partner.tier_cta.${i + 1}`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section
        id="partner-how"
        className="py-24"
        style={{ background: "oklch(0.13 0.02 280)" }}
        data-ocid="partner.how_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.7 0.22 200)" }}
            >
              Simple Process
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[oklch(0.94_0.02_280)] mb-4">
              How It Works
            </h2>
            <p className="text-[oklch(0.56_0.02_280)] font-body max-w-xl mx-auto">
              From application to revenue in days, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex flex-col items-start p-6 rounded-xl border"
                style={{
                  background: "oklch(0.16 0.02 280)",
                  borderColor: "oklch(0.24 0.02 280)",
                }}
                data-ocid={`partner.step.${i + 1}`}
              >
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-[2.75rem] left-full w-6 h-px z-10"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.7 0.22 200 / 0.4), transparent)",
                    }}
                  />
                )}
                <span
                  className="font-display font-bold text-4xl mb-4 leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.22 200 / 0.25), oklch(0.75 0.18 265 / 0.15))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.num}
                </span>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.7 0.22 200 / 0.12)" }}
                >
                  <step.icon
                    className="w-5 h-5"
                    style={{ color: "oklch(0.7 0.22 200)" }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display font-semibold text-[oklch(0.88_0.02_280)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm font-body text-[oklch(0.54_0.02_280)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id="partner-testimonials"
        className="py-24"
        style={{ background: "oklch(0.115 0.02 280)" }}
        data-ocid="partner.testimonials_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.7 0.22 200)" }}
            >
              Partner Stories
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[oklch(0.94_0.02_280)] mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-xl border flex flex-col"
                style={{
                  background: "oklch(0.16 0.02 280)",
                  borderColor: "oklch(0.24 0.02 280)",
                }}
                data-ocid={`partner.testimonial.${t.avatar.toLowerCase()}`}
              >
                <div className="flex gap-1 mb-4">
                  {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                    <Star
                      key={sk}
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(0.75 0.18 55)" }}
                    />
                  ))}
                </div>
                <p className="text-sm font-body text-[oklch(0.68_0.02_280)] leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.7 0.22 200), oklch(0.75 0.18 265))",
                      color: "oklch(0.13 0.02 280)",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-[oklch(0.88_0.02_280)]">
                      {t.name}
                    </p>
                    <p className="text-xs font-body text-[oklch(0.50_0.02_280)]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + Form ── */}
      <section
        id="partner-form"
        className="py-24 relative overflow-hidden"
        style={{ background: "oklch(0.13 0.02 280)" }}
        data-ocid="partner.contact_section"
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, oklch(0.7 0.22 200) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
              style={{ background: "oklch(0.7 0.22 200 / 0.15)" }}
            >
              <Building2
                className="w-7 h-7"
                style={{ color: "oklch(0.7 0.22 200)" }}
                strokeWidth={1.5}
              />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[oklch(0.94_0.02_280)] mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-[oklch(0.56_0.02_280)] font-body">
              Fill in your details below and our partnerships team will reach
              out within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div
              className="text-center p-10 rounded-xl border"
              style={{
                background: "oklch(0.16 0.02 280)",
                borderColor: "oklch(0.7 0.22 200 / 0.3)",
              }}
              data-ocid="partner.form_success_state"
            >
              <CheckCircle2
                className="w-14 h-14 mx-auto mb-4"
                style={{ color: "oklch(0.7 0.22 200)" }}
              />
              <h3 className="font-display font-bold text-xl text-[oklch(0.94_0.02_280)] mb-2">
                Application Received!
              </h3>
              <p className="text-sm font-body text-[oklch(0.54_0.02_280)]">
                We'll review your details and get back to you within 48 hours.
                Welcome aboard!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl border space-y-5"
              style={{
                background: "oklch(0.16 0.02 280)",
                borderColor: "oklch(0.24 0.02 280)",
              }}
              data-ocid="partner.application_form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-display font-semibold text-[oklch(0.66_0.02_280)] mb-2 tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    data-ocid="partner.name_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-display font-semibold text-[oklch(0.66_0.02_280)] mb-2 tracking-wide"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    data-ocid="partner.company_input"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-display font-semibold text-[oklch(0.66_0.02_280)] mb-2 tracking-wide"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  data-ocid="partner.email_input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-display font-semibold text-[oklch(0.66_0.02_280)] mb-2 tracking-wide"
                >
                  Partnership Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your company, audience, and what you hope to achieve through partnership..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                  data-ocid="partner.message_textarea"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
                data-ocid="partner.submit_button"
              >
                {submitting ? (
                  <>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                      data-ocid="partner.form_loading_state"
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
