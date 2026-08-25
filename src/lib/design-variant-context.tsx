"use client";

import { createContext, useContext, useState } from "react";

// Temporary A/B test to compare two section-color layouts live, toggled by
// <DesignVariantToggle>. Not meant to stay long-term — remove once a
// direction is picked (drop this file, the toggle component, and the
// variant-conditional className branches in Hero/About/Experience/
// Projects/Skills/Contact/AuroraBackground).
export type DesignVariant = "a" | "b";

type ToneSection = "experience" | "projects" | "skills" | "contact";
type Tone = "white" | "gray";

// Both variants always have Hero gray + the aurora gradient (handled
// directly in AuroraBackground, not through this map). This only covers
// the sections that unconditionally render their own opaque background.
const TONES: Record<DesignVariant, Record<ToneSection, Tone>> = {
  // Option 1: Hero AND About are both gray, gradient extended to cover
  // both — then plain alternation continues from Experience.
  a: { experience: "white", projects: "gray", skills: "white", contact: "gray" },
  // Option 2: only Hero is gray (+ gradient); alternation starts fresh at
  // About.
  b: { experience: "gray", projects: "white", skills: "gray", contact: "white" },
};

const DesignVariantContext = createContext<{
  variant: DesignVariant;
  toggle: () => void;
  tone: (section: ToneSection) => Tone;
} | null>(null);

export function DesignVariantProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<DesignVariant>("b");

  const value = {
    variant,
    toggle: () => setVariant((v) => (v === "a" ? "b" : "a")),
    tone: (section: ToneSection) => TONES[variant][section],
  };

  return (
    <DesignVariantContext.Provider value={value}>{children}</DesignVariantContext.Provider>
  );
}

export function useDesignVariant() {
  const ctx = useContext(DesignVariantContext);
  if (!ctx) throw new Error("useDesignVariant must be used within DesignVariantProvider");
  return ctx;
}
