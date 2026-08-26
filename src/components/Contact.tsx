"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { links } from "@/data/links";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import Eyebrow from "@/components/Eyebrow";

export default function Contact() {
  const { lang } = useLanguage();
  const t = dict[lang].contact;
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  async function handleEmailClick() {
    // A plain mailto: link silently does nothing if the device has no
    // default mail client configured — copy the address as a fallback so
    // the click always visibly does *something*. The mailto navigation is
    // still attempted for anyone who does have a mail client.
    try {
      await navigator.clipboard.writeText(links.email.replace("mailto:", ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API unavailable or permission denied — mailto still fires.
    }
  }

  return (
    <section id="contacto" className="tone-white scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <p className="max-w-xl text-muted">{t.intro}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <a
            href={links.email}
            onClick={handleEmailClick}
            className="btn-gradient hover-lift inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "check" : "mail"}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.5 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
                className="inline-flex shrink-0"
              >
                {copied ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </motion.span>
            </AnimatePresence>
            {t.sendEmail}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" className="shrink-0">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true" className="shrink-0">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <div aria-live="polite">
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  className="text-xs font-medium text-accent"
                >
                  {t.copied}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
