"use client";

import { useState } from "react";
import Link from "next/link";
import { links } from "@/data/links";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = dict[lang];

  const NAV_ITEMS = [
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-4 z-10 px-4">
      <div className="glass mx-auto flex max-w-3xl items-center justify-between rounded-2xl px-6 py-3 backdrop-blur">
        <Link href="#" className="font-display text-base font-semibold text-foreground">
          dvilmar
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-0.5 transition-colors hover:border-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchLang}
            className="cursor-pointer rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-muted hover:border-accent hover:text-accent"
          >
            {lang === "es" ? "EN" : "ES"}
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
      {open && (
        <nav
          id="mobile-nav"
          className="glass mx-auto mt-2 flex max-w-3xl flex-col gap-1 rounded-2xl px-6 py-4 text-sm text-muted sm:hidden"
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
        </nav>
      )}
    </header>
  );
}
