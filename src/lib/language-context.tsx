"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dict } from "@/data/i18n";

export type Lang = "es" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
} | null>(null);

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    // Reads localStorage (an external system) on mount to sync the initial
    // language — can't be a lazy useState initializer without a
    // server/client hydration mismatch, since the static export always
    // prerenders "es".
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
    // The static export bakes a fixed (Spanish) <meta name="description">
    // into the HTML — crawlers and link-preview bots read that snapshot
    // before any JS runs, so this can't change what they see. It does keep
    // the live page's own DOM correct for anyone who toggles language and
    // then inspects it, which is the part that's actually fixable here.
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict[lang].metaDescription);
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, toggle: () => setLang((l) => (l === "es" ? "en" : "es")) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
