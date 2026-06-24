"use client";

import { useState } from "react";
import {
  HeartHandshake,
  Users,
  BookOpen,
  Coffee,
  Sun,
  Moon,
  Check,
  ArrowRight,
} from "lucide-react";

/**
 * Internal design playground for testing font pairings and color palettes on
 * representative components, without touching the live site. Pick a theme and a
 * light/dark mode; the preview re-renders using that theme's CSS variables.
 *
 * Not indexed (see metadata in the page). Once a direction is chosen, the
 * winning fonts + palette get promoted into globals.css / layout.tsx site-wide.
 */

interface Palette {
  bg: string;
  card: string;
  ink: string;
  muted: string;
  border: string;
  primary: string;
  primaryFg: string;
  accent: string;
  accentFg: string;
}

interface Theme {
  id: string;
  name: string;
  vibe: string;
  headingFont: string;
  bodyFont: string;
  headingLabel: string;
  bodyLabel: string;
  light: Palette;
  dark: Palette;
}

const THEMES: Theme[] = [
  {
    id: "hill-country",
    name: "Hill Country Heritage",
    vibe: "Refined & rooted — evolves today's blue + gold into something warmer and grounded.",
    headingFont: "var(--font-fraunces)",
    bodyFont: "var(--font-sourcesans)",
    headingLabel: "Fraunces (soft serif)",
    bodyLabel: "Source Sans 3",
    light: {
      bg: "#faf8f3", card: "#ffffff", ink: "#1f2937", muted: "#5b6472", border: "#e7e1d4",
      primary: "#2f4a7a", primaryFg: "#ffffff", accent: "#c2841d", accentFg: "#231603",
    },
    dark: {
      bg: "#14171f", card: "#1c2230", ink: "#f0ece3", muted: "#a8b0bf", border: "#2c3445",
      primary: "#7da2dd", primaryFg: "#0c1018", accent: "#e0a93f", accentFg: "#1a1304",
    },
  },
  {
    id: "civic-trust",
    name: "Civic Trust",
    vibe: "Clean, institutional, government-grade. Maximum legibility and trust.",
    headingFont: "var(--font-librefranklin)",
    bodyFont: "var(--font-publicsans)",
    headingLabel: "Libre Franklin",
    bodyLabel: "Public Sans",
    light: {
      bg: "#f5f6f8", card: "#ffffff", ink: "#112a46", muted: "#4a5a6a", border: "#d8dee6",
      primary: "#16406b", primaryFg: "#ffffff", accent: "#0f7d8c", accentFg: "#ffffff",
    },
    dark: {
      bg: "#0e1822", card: "#15212e", ink: "#eef3f8", muted: "#9fb0bf", border: "#243443",
      primary: "#5fa8d3", primaryFg: "#08121a", accent: "#3bb3c4", accentFg: "#04161a",
    },
  },
  {
    id: "warm-welcome",
    name: "Warm Welcome",
    vibe: "Earthy and inviting — a friendly community-center feel, nothing techy.",
    headingFont: "var(--font-lora)",
    bodyFont: "var(--font-nunitosans)",
    headingLabel: "Lora (friendly serif)",
    bodyLabel: "Nunito Sans",
    light: {
      bg: "#fbf6ee", card: "#fffdf9", ink: "#2e241c", muted: "#6b5d50", border: "#e9ddcc",
      primary: "#b1502f", primaryFg: "#ffffff", accent: "#2f6f63", accentFg: "#ffffff",
    },
    dark: {
      bg: "#1a140f", card: "#241b14", ink: "#f3ebe0", muted: "#b6a594", border: "#38291d",
      primary: "#e0815f", primaryFg: "#1a0f08", accent: "#6fb3a5", accentFg: "#06160f",
    },
  },
  {
    id: "friendly-bright",
    name: "Friendly & Bright",
    vibe: "Cheerful, rounded, energetic — great for an active senior community.",
    headingFont: "var(--font-nunito)",
    bodyFont: "var(--font-nunito)",
    headingLabel: "Nunito (rounded)",
    bodyLabel: "Nunito",
    light: {
      bg: "#fff9f3", card: "#ffffff", ink: "#20303a", muted: "#5a6b76", border: "#ffe2cf",
      primary: "#2c7da0", primaryFg: "#ffffff", accent: "#e8853a", accentFg: "#ffffff",
    },
    dark: {
      bg: "#0f1a20", card: "#16242c", ink: "#eaf3f7", muted: "#9fb4be", border: "#21333d",
      primary: "#5bb3d4", primaryFg: "#07151c", accent: "#f0a05a", accentFg: "#1a0d03",
    },
  },
  {
    id: "classic-editorial",
    name: "Classic Editorial",
    vibe: "Timeless and elegant — high-contrast, magazine-like, very classy.",
    headingFont: "var(--font-playfair)",
    bodyFont: "var(--font-inter)",
    headingLabel: "Playfair Display",
    bodyLabel: "Inter",
    light: {
      bg: "#ffffff", card: "#f8f8f6", ink: "#1a1a1a", muted: "#5a5a5a", border: "#e4e4e0",
      primary: "#1b4332", primaryFg: "#ffffff", accent: "#a47148", accentFg: "#ffffff",
    },
    dark: {
      bg: "#121212", card: "#1b1b1a", ink: "#f2f2ef", muted: "#a9a9a4", border: "#2c2c2a",
      primary: "#6fbf9a", primaryFg: "#08130d", accent: "#c79a6d", accentFg: "#1a1106",
    },
  },
];

const ACTIVITIES = [
  { icon: Users, title: "Social Games", desc: "Bridge, Bingo, Dominoes, and Mahjong throughout the week." },
  { icon: BookOpen, title: "Education", desc: "Computer classes, book clubs, and guest speakers." },
  { icon: Coffee, title: "Social Gatherings", desc: "Coffee hours, potlucks, and holiday celebrations." },
];

export function StyleLab() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const theme = THEMES[themeIndex];
  const p = isDark ? theme.dark : theme.light;

  const vars = {
    "--lab-bg": p.bg,
    "--lab-card": p.card,
    "--lab-ink": p.ink,
    "--lab-muted": p.muted,
    "--lab-border": p.border,
    "--lab-primary": p.primary,
    "--lab-primary-fg": p.primaryFg,
    "--lab-accent": p.accent,
    "--lab-accent-fg": p.accentFg,
    "--lab-heading": theme.headingFont,
    "--lab-body": theme.bodyFont,
    fontFamily: "var(--lab-body)",
  } as React.CSSProperties;

  const heading: React.CSSProperties = { fontFamily: "var(--lab-heading)" };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      {/* ---------- Control bar (uses the site's own theme, not the preview) ---------- */}
      <div className="sticky top-20 z-30 border-b border-zinc-300 dark:border-zinc-700 bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  Style Lab — test fonts &amp; coloring
                </h1>
                <p className="text-xs text-zinc-500">
                  Pick a direction below, then tell Claude the name to apply it site-wide.
                </p>
              </div>
              <button
                onClick={() => setIsDark((d) => !d)}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                Preview {isDark ? "Light" : "Dark"}
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {THEMES.map((t, i) => {
                const active = i === themeIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => setThemeIndex(i)}
                    className={`group rounded-xl border px-3 py-2 text-left transition-all ${
                      active
                        ? "border-zinc-900 dark:border-zinc-100 ring-2 ring-zinc-900/20 dark:ring-zinc-100/20 bg-white dark:bg-zinc-800"
                        : "border-zinc-300 dark:border-zinc-700 hover:border-zinc-500 bg-white/60 dark:bg-zinc-800/40"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex gap-1">
                        <span className="w-3.5 h-3.5 rounded-full" style={{ background: t.light.primary }} />
                        <span className="w-3.5 h-3.5 rounded-full" style={{ background: t.light.accent }} />
                      </span>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t.name}</span>
                    </div>
                    <span className="block text-[11px] text-zinc-500 mt-0.5">
                      {t.headingLabel} + {t.bodyLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- The themed preview canvas ---------- */}
      <div style={vars}>
        <div style={{ background: "var(--lab-bg)", color: "var(--lab-ink)" }}>
          <div className="container mx-auto px-4 md:px-6 py-4 text-center">
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--lab-muted)" }}>
              {theme.vibe}
            </span>
          </div>

          {/* Mock navbar */}
          <div
            className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between rounded-2xl"
            style={{ background: "var(--lab-card)", border: "1px solid var(--lab-border)" }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="grid place-items-center w-10 h-10 rounded-xl"
                style={{ background: "var(--lab-primary)", color: "var(--lab-primary-fg)" }}
              >
                <HeartHandshake className="w-5 h-5" />
              </span>
              <span>
                <span className="block font-bold leading-none" style={heading}>Treasure of the Hills</span>
                <span className="block text-xs" style={{ color: "var(--lab-accent)" }}>Senior Center</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "var(--lab-muted)" }}>
              <span>About</span><span>Activities</span><span>Calendar</span><span>Rentals</span>
            </div>
            <span
              className="rounded-lg px-4 py-2 text-sm font-semibold"
              style={{ background: "var(--lab-primary)", color: "var(--lab-primary-fg)" }}
            >
              Become a Member
            </span>
          </div>

          {/* Hero */}
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium mb-6"
              style={{
                background: "color-mix(in srgb, var(--lab-primary) 12%, transparent)",
                color: "var(--lab-primary)",
                border: "1px solid color-mix(in srgb, var(--lab-primary) 25%, transparent)",
              }}
            >
              <HeartHandshake className="w-4 h-4" /> Welcome to TOTH
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto" style={heading}>
              Your Community for{" "}
              <span style={{ color: "var(--lab-accent)" }}>Connection &amp; Growth</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--lab-muted)" }}>
              Enhancing the quality of life for seniors in Cedar Park through engaging activities,
              lifelong education, and meaningful social connection.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <span
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold"
                style={{ background: "var(--lab-primary)", color: "var(--lab-primary-fg)" }}
              >
                Become a Member <ArrowRight className="w-4 h-4" />
              </span>
              <span
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold"
                style={{ background: "transparent", color: "var(--lab-ink)", border: "1px solid var(--lab-border)" }}
              >
                View Activities
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="container mx-auto px-4 md:px-6 pb-16">
            <div
              className="grid grid-cols-3 gap-4 max-w-3xl mx-auto rounded-2xl py-8"
              style={{ background: "var(--lab-card)", border: "1px solid var(--lab-border)" }}
            >
              {[["40+", "Weekly Activities"], ["500+", "Members"], ["15", "Years Serving"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold" style={{ ...heading, color: "var(--lab-primary)" }}>{n}</div>
                  <div className="text-xs md:text-sm mt-1" style={{ color: "var(--lab-muted)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="container mx-auto px-4 md:px-6 pb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-2" style={heading}>Activities &amp; Programs</h3>
            <p className="text-center mb-10" style={{ color: "var(--lab-muted)" }}>Something for everyone, every week.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ACTIVITIES.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl p-6"
                  style={{ background: "var(--lab-card)", border: "1px solid var(--lab-border)" }}
                >
                  <span
                    className="grid place-items-center w-12 h-12 rounded-xl mb-4"
                    style={{
                      background: "color-mix(in srgb, var(--lab-accent) 15%, transparent)",
                      color: "var(--lab-accent)",
                    }}
                  >
                    <a.icon className="w-6 h-6" />
                  </span>
                  <h4 className="text-lg font-bold mb-1" style={heading}>{a.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--lab-muted)" }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Membership */}
          <div className="container mx-auto px-4 md:px-6 pb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10" style={heading}>Become a Member</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { price: "$30", name: "Annual Individual", note: "For one calendar year.", featured: false },
                { price: "$50", name: "Annual Couples", note: "Two at the same address.", featured: true },
              ].map((m) => (
                <div
                  key={m.name}
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background: "var(--lab-card)",
                    border: m.featured ? "2px solid var(--lab-accent)" : "1px solid var(--lab-border)",
                  }}
                >
                  <div className="text-4xl font-bold" style={{ ...heading, color: m.featured ? "var(--lab-accent)" : "var(--lab-primary)" }}>{m.price}</div>
                  <div className="font-semibold mt-2" style={heading}>{m.name}</div>
                  <div className="text-sm mt-1" style={{ color: "var(--lab-muted)" }}>{m.note}</div>
                  <ul className="mt-5 space-y-2 text-sm text-left inline-block">
                    {["40+ weekly activities", "Discounted event rates", "Monthly newsletter"].map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <Check className="w-4 h-4 shrink-0" style={{ color: "var(--lab-accent)" }} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mini footer */}
          <div style={{ background: "var(--lab-card)", borderTop: "1px solid var(--lab-border)" }}>
            <div className="container mx-auto px-4 md:px-6 py-10 text-center">
              <p className="font-bold" style={heading}>Treasure of the Hills Senior Center</p>
              <p className="text-sm mt-2" style={{ color: "var(--lab-muted)" }}>
                408 Discovery Blvd, Cedar Park, TX 78613 · (512) 331-6000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
