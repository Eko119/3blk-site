import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand */
        oxblood: "var(--color-oxblood)",
        "oxblood-hover": "var(--color-oxblood-hover)",
        wine: "var(--color-wine)",
        clay: "var(--color-clay)",
        "clay-hover": "var(--color-clay-hover)",

        /* Surfaces */
        ink: "var(--color-ink)",
        "ink-raised": "var(--color-ink-raised)",
        "ink-overlay": "var(--color-ink-overlay)",
        bone: "var(--color-bone)",
        "bone-sunk": "var(--color-bone-sunk)",

        /* Text on Ink */
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
        "text-accent": "var(--color-text-accent)",

        /* Text on Bone */
        "on-bone": "var(--color-text-on-bone)",
        "on-bone-secondary": "var(--color-text-on-bone-secondary)",
        "on-bone-tertiary": "var(--color-text-on-bone-tertiary)",
        "on-bone-accent": "var(--color-text-on-bone-accent)",

        /* Rules */
        rule: "var(--color-border-default)",
        "rule-strong": "var(--color-border-strong)",
        "rule-bone": "var(--color-border-on-bone)",
        "rule-bone-strong": "var(--color-border-on-bone-strong)",
        "rule-wine": "var(--color-border-on-wine)",

        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": [
          "var(--text-display-1)",
          {
            lineHeight: "var(--leading-display)",
            letterSpacing: "var(--tracking-display)",
          },
        ],
        "display-2": [
          "var(--text-display-2)",
          {
            lineHeight: "var(--leading-display)",
            letterSpacing: "var(--tracking-display)",
          },
        ],
        "display-3": [
          "var(--text-display-3)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-heading)",
          },
        ],
        h1: [
          "var(--text-h1)",
          {
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-heading)",
          },
        ],
        h2: [
          "var(--text-h2)",
          {
            lineHeight: "var(--leading-snug)",
            letterSpacing: "var(--tracking-heading)",
          },
        ],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-snug)" }],
        h4: ["var(--text-h4)", { lineHeight: "var(--leading-snug)" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "var(--leading-body)" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "var(--leading-body)" }],
        label: ["var(--text-label)", { lineHeight: "1.4" }],
        meta: [
          "var(--text-meta)",
          { lineHeight: "1.4", letterSpacing: "var(--tracking-meta)" },
        ],
        overline: [
          "var(--text-overline)",
          { lineHeight: "1.4", letterSpacing: "var(--tracking-overline)" },
        ],
      },
      spacing: {
        section: "var(--space-section)",
        "section-tight": "var(--space-section-tight)",
        block: "var(--space-block)",
        gutter: "var(--space-gutter)",
      },
      maxWidth: {
        container: "var(--container-max)",
        measure: "var(--measure)",
        "measure-wide": "var(--measure-wide)",
      },
      transitionTimingFunction: {
        reveal: "var(--ease-reveal)",
        inout: "var(--ease-inout)",
        out: "var(--ease-out)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
        reveal: "var(--dur-reveal)",
      },
    },
  },
  plugins: [],
} satisfies Config;
