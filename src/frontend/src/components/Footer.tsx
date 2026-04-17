import { Code2 } from "lucide-react";

const footerLinks = {
  Platform: ["Courses", "Pricing", "Features", "Changelog"],
  Company: ["About", "Careers", "Press", "Partners"],
  Resources: ["Blog", "Documentation", "Support", "Status"],
  Legal: ["Terms", "Privacy", "Cookie Policy", "Security"],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="border-t border-[oklch(0.20_0.02_280)]"
      style={{ background: "oklch(0.11 0.025 280)" }}
      data-ocid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg text-[oklch(0.94_0.02_280)]">
                IT <span className="text-accent">TrainHub</span>
              </span>
            </div>
            <p className="text-sm font-body text-[oklch(0.50_0.02_280)] leading-relaxed max-w-xs">
              Empowering IT professionals worldwide with world-class training
              and industry-recognized certifications.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm text-[oklch(0.78_0.02_280)] mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-sm font-body text-[oklch(0.48_0.02_280)] hover:text-[oklch(0.75_0.02_280)] transition-smooth"
                      data-ocid={`footer.link.${link.toLowerCase().replace(" ", "_")}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.20_0.02_280)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-[oklch(0.40_0.02_280)]">
            © {year} KodeMasters. All rights reserved.
          </p>
          <p className="text-xs font-body text-[oklch(0.36_0.02_280)]">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.52_0.02_280)] hover:text-accent transition-smooth underline underline-offset-2"
              data-ocid="footer.caffeine_link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
