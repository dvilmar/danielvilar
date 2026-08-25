"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { links } from "@/data/links";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import { useDesignVariant } from "@/lib/design-variant-context";
import Eyebrow from "@/components/Eyebrow";

export default function Contact() {
  const { lang } = useLanguage();
  const t = dict[lang].contact;
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const { tone } = useDesignVariant();

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
    <section
      id="contacto"
      className={`${tone("contact") === "gray" ? "tone-gray" : "tone-white"} scroll-mt-20`}
    >
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
            className="hover-lift rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
          >
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
