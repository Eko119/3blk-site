import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--color-brand-accent)",
        "accent-on-light": "var(--color-accent-on-light)",
        base: "var(--color-bg-base)",
        elevated: "var(--color-bg-elevated)",
        overlay: "var(--color-bg-overlay)",
        inverse: "var(--color-bg-inverse)",
        white: "var(--color-neutral-0)",
        "neutral-100": "var(--color-neutral-100)",
        "neutral-300": "var(--color-neutral-300)",
        "neutral-400": "var(--color-neutral-400)",
        "neutral-600": "var(--color-neutral-600)",
        "neutral-700": "var(--color-neutral-700)",
        "neutral-800": "var(--color-neutral-800)",
        "neutral-900": "var(--color-neutral-900)",
        "neutral-1000": "var(--color-neutral-1000)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
        "text-inverse": "var(--color-text-inverse)",
        "text-accent": "var(--color-text-accent)",
        "border-default": "var(--color-border-default)",
        "border-strong": "var(--color-border-strong)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "Fira Code",
          "Cascadia Code",
          "monospace",
        ],
      },
      fontSize: {
        "display-1": [
          "var(--text-display-1)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-2": [
          "var(--text-display-2)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        h1: [
          "var(--text-h1)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h2: [
          "var(--text-h2)",
          { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        h3: [
          "var(--text-h3)",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        h4: ["var(--text-h4)", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "1.65" }],
        body: ["var(--text-body)", { lineHeight: "1.6" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "1.5" }],
        label: [
          "var(--text-label)",
          { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" },
        ],
        overline: [
          "var(--text-overline)",
          { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "600" },
        ],
        mono: ["var(--text-mono)", { lineHeight: "1.6" }],
        "mono-sm": ["var(--text-mono-sm)", { lineHeight: "1.5" }],
      },
      transitionTimingFunction: {
        snap: "var(--motion-easing-snap)",
        standard: "var(--motion-easing-standard)",
        exit: "var(--motion-easing-exit)",
      },
      transitionDuration: {
        instant: "var(--motion-duration-instant)",
        fast: "var(--motion-duration-fast)",
        default: "var(--motion-duration-default)",
        slow: "var(--motion-duration-slow)",
        brand: "var(--motion-duration-brand)",
      },
    },
  },
  plugins: [],
} satisfies Config;
