import { ChevronDown, Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Community", href: "#community", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[oklch(0.25_0.03_280)] bg-[oklch(0.11_0.025_280)/95] backdrop-blur-md"
      data-ocid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            data-ocid="header.logo_link"
          >
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-smooth">
              <Code2 className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg text-[oklch(0.94_0.02_280)] tracking-tight">
              Kode<span className="text-accent">Masters</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            data-ocid="header.nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-body font-medium text-[oklch(0.65_0.02_280)] hover:text-[oklch(0.94_0.02_280)] transition-smooth rounded-lg hover:bg-[oklch(0.18_0.02_280)]"
                data-ocid={`header.nav_link.${link.label.toLowerCase()}`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              className="px-5 py-2 text-sm font-display font-semibold text-[oklch(0.94_0.02_280)] rounded-lg border border-[oklch(0.3_0.03_280)] hover:border-accent hover:text-accent transition-smooth"
              data-ocid="header.signin_button"
            >
              Sign In
            </a>
            <a
              href="#login"
              className="btn-primary text-sm px-5 py-2"
              data-ocid="header.getstarted_button"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[oklch(0.65_0.02_280)] hover:text-foreground hover:bg-[oklch(0.18_0.02_280)] transition-smooth"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            data-ocid="header.mobile_menu_toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t border-[oklch(0.22_0.02_280)] py-4 space-y-1"
            data-ocid="header.mobile_nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-body text-[oklch(0.65_0.02_280)] hover:text-foreground hover:bg-[oklch(0.18_0.02_280)] rounded-lg transition-smooth"
                onClick={() => setMobileOpen(false)}
                data-ocid={`header.mobile_nav_link.${link.label.toLowerCase()}`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                )}
              </a>
            ))}
            <div className="pt-3 px-4 flex flex-col gap-2">
              <a
                href="#login"
                className="btn-secondary text-sm text-center"
                data-ocid="header.mobile_signin_button"
              >
                Sign In
              </a>
              <a
                href="#login"
                className="btn-primary text-sm text-center"
                data-ocid="header.mobile_getstarted_button"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
