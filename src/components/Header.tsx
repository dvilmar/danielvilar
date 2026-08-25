"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { links } from "@/data/links";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";

const SECTION_IDS = ["sobre-mi", "experiencia", "proyectos", "skills", "contacto"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(SECTION_IDS[0]);
  const { lang, toggle } = useLanguage();
  const t = dict[lang];
  const shouldReduceMotion = useReducedMotion();

  const NAV_ITEMS = [
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    // A fixed "top crossed this line" anchor and "largest visible area"
    // both fail on a tall enough viewport: the short trailing sections
    // (Skills, Contact) plus the footer can fit on screen together with
    // room to spare, so there's never enough scroll room to bring each
    // one's heading up to a fixed line individually, and raw visible area
    // always favors whichever section is tallest, even when a shorter one
    // is more clearly "what's on screen". Picking whichever section's
    // midpoint is nearest the viewport's own midpoint hands off cleanly
    // between adjacent sections regardless of their height or the
    // viewport's, since it's a single continuous quantity rather than a
    // threshold that can be skipped over.
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        let bestId = elements[0]?.id ?? SECTION_IDS[0];
        let bestDistance = Infinity;
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs((rect.top + rect.bottom) / 2 - viewportCenter);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestId = el.id;
          }
        }
        setActiveId(bestId);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.header
      className="sticky top-4 z-10 px-4"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
    >
      <div className="glass mx-auto flex max-w-3xl items-center justify-between rounded-2xl px-6 py-3 backdrop-blur">
        <a href="#" className="font-display text-base font-semibold text-foreground">
          dvilmar
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            const isActive = id === activeId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative border-b border-transparent pb-0.5 transition-colors hover:border-border hover:text-foreground ${isActive ? "text-foreground" : ""}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                )}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchLang}
            className="relative cursor-pointer overflow-hidden rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-muted hover:border-accent hover:text-accent"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={lang}
                className="inline-block"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
              >
                {lang === "es" ? "EN" : "ES"}
              </motion.span>
            </AnimatePresence>
          </button>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-muted hover:text-foreground sm:inline"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border text-foreground sm:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeInOut" }}
            className="glass mx-auto mt-2 flex max-w-3xl flex-col gap-1 overflow-hidden rounded-2xl px-6 py-4 text-sm text-muted sm:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-background hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-2 hover:bg-background hover:text-foreground"
            >
              GitHub
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
