"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = dict[lang].modal;
  const [mounted, setMounted] = useState(false);

  // Portal target (document.body) only exists client-side; this flips
  // `mounted` once after hydration so the static-export build render
  // never touches `document`.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  // Rendered via a portal so `fixed` positioning is always relative to the
  // viewport — nesting this under a section wrapped by <Reveal> means an
  // ancestor can carry a residual animated `transform`, which turns
  // `position: fixed` into `position: relative`-to-that-ancestor instead.
  // `mounted` guards the `document.body` access from the static-export
  // build render, which happens in Node with no `document`.
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
          <motion.div
            // No backdrop-blur: animating opacity on a backdrop-filter
            // element forces the browser to recompute the blur every frame
            // instead of just compositing an opacity fade, which tanked
            // this to ~33fps. A plain darker scrim is just as effective.
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/55 p-4"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { type: "spring", stiffness: 500, damping: 32, mass: 0.7 },
            }}
            exit={{ opacity: 0, scale: 0.98, y: 4, transition: { duration: 0.15, ease: "easeOut" } }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id="project-modal-title" className="font-display text-2xl font-semibold">
                {project.name}
              </h3>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={t.close}
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-border text-muted hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {project.image && (
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-border">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <p className="mt-4 text-sm text-muted">{project.description}</p>

            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-accent">–</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
              >
                {t.viewOnGithub}
              </a>
            )}
          </motion.div>
          </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
