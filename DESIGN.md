# Design Brief

## Purpose & Context
Premium IT training platform login experience conveying professionalism, innovation, and learning excellence for mid-market tech professionals.

## Tone
Tech-forward, bold yet refined. Inspiration: Linear, Stripe, Apple. Modern SaaS clarity with intentional visual richness on hero and form elements.

## Palette

| Token            | Light                  | Dark                   | Usage                                  |
|------------------|------------------------|------------------------|----------------------------------------|
| **Primary**      | `0.6 0.15 280` Indigo  | `0.7 0.18 265` Indigo  | Primary buttons, active states, links  |
| **Accent**       | `0.65 0.18 200` Cyan   | `0.7 0.22 200` Cyan    | CTAs, highlights, focus states        |
| **Success**      | `0.75 0.12 140` Emerald| `0.75 0.12 140` Emerald| Success messages, positive feedback   |
| **Destructive**  | `0.55 0.22 25` Red     | `0.65 0.19 22` Red     | Errors, destructive actions           |
| **Neutral**      | `0.98 0.01 280` Off-white | `0.13 0.02 280` Dark | Backgrounds, surfaces                 |
| **Muted**        | `0.93 0.02 280` Grey   | `0.21 0.02 280` Grey   | Disabled states, secondary text       |

## Typography
- **Display:** General Sans (geometric, tech-forward, weights 400–700)
- **Body:** DM Sans (refined high-readability, weights 400–600)
- **Mono:** Geist Mono (code, technical details)
- **Scale:** H1 `3.5rem`, H2 `2rem`, H3 `1.5rem`, Body `1rem`, Small `0.875rem`

## Shape Language
- **Radius:** `0.625rem` (lg), `calc(0.625rem - 2px)` (md), `calc(0.625rem - 4px)` (sm)
- **Borders:** 1px solid on all surfaces, intentional elevation via color and borders (not thick shadows)
- **Shadows:** Subtle (`shadow-sm: 0 2px 4px`), Elevated (`shadow-elevated: 0 8px 16px`), avoid glow effects

## Structural Zones

| Zone          | Background          | Border          | Purpose                              |
|---------------|---------------------|-----------------|--------------------------------------|
| **Header**    | `bg-card` with border-bottom | `border-border` | Navigation, logo, login link       |
| **Hero**      | `bg-background` with gradient accent | none       | Headline, value prop, visual richness |
| **Login Card**| `bg-card` elevated | `border-border` | Form container, primary focus area   |
| **Features**  | Alternating `bg-muted/30` | `border-border` | Feature showcase cards               |
| **Footer**    | `bg-muted/40` with border-top | `border-border` | Company info, legal, social links   |

## Component Patterns
- **Buttons:** `btn-primary` (cyan CTA) and `btn-secondary` (outline secondary). Active state scales `scale-95`, hover reduces opacity.
- **Form Inputs:** `form-input` utility with focus ring and offset. Placeholder uses `text-muted-foreground`.
- **Cards:** `card-elevated` with subtle shadow on hover, border for depth.
- **Text:** Semantic tokens (`text-foreground`, `text-muted-foreground`) ensure accessibility and consistency.

## Motion & Transition
- **Base Transition:** `--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` on all interactive elements
- **Entrance:** `animate-fade-in (0.4s)` and `animate-slide-up (0.5s)` for sections
- **Pulse:** `animate-pulse-subtle (2s)` for status indicators
- **No:** bounce, spring, or playful animations — strictly professional tech feel

## Differentiation
Hero section features animated gradient accent text on headline, creating visual momentum. Login form is elevated and centered, drawing focus. Feature cards below showcase training benefits with icon + text stacking. Smooth transitions on all interactive elements create premium feel.

## Responsive Design
Mobile-first approach: `sm:` tablet overrides, `md:` desktop refinements. Hero scales down for mobile, form remains prominent. Features stack vertically on mobile, grid on desktop.

## Dark Mode
Fully supported with dedicated palette. Primary shifts to brighter indigo `0.7 0.18 265`, backgrounds darken to `0.13 0.02 280`. Maintains visual hierarchy and legibility in both modes.
