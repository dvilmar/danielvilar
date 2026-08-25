"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { lang } = useLanguage();
  const t = dict[lang].hero;
  // MotionConfig's reducedMotion="user" initializes its media-query listener
  // in an effect, which loses a race against animations that start on mount
  // (like this one) — useReducedMotion() reads it synchronously instead, so
  // it's correct on the very first render.
  const shouldReduceMotion = useReducedMotion();

  // Subtle parallax: the avatar drifts up slightly slower than the page
  // scrolls, so it feels like it has its own depth instead of scrolling
  // in lockstep with the text next to it.
  const { scrollY } = useScroll();
  const avatarY = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : -60]);

  // Cursor spotlight: a soft glow that trails the mouse inside the Hero.
  // Pure background/transform, no filter is animated per-frame, so it's
  // as cheap as the aurora blobs below.
  const spotlightX = useMotionValue(400);
  const spotlightY = useMotionValue(150);
  const springX = useSpring(spotlightX, { stiffness: 150, damping: 20 });
  const springY = useSpring(spotlightY, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative mx-auto flex max-w-3xl flex-col-reverse items-start gap-8 overflow-hidden px-6 pb-16 pt-20 sm:flex-row sm:items-center sm:justify-between"
    >
      <div
        aria-hidden="true"
        className="aurora-blob aurora-blob-a -left-24 -top-24 h-72 w-72"
        style={{ background: "color-mix(in srgb, var(--accent) 20%, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="aurora-blob aurora-blob-b -bottom-32 -right-16 h-80 w-80"
        style={{ background: "color-mix(in srgb, var(--accent) 14%, transparent)" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 70%)",
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="flex flex-col gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          {t.greeting}
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Daniel Vilar Martínez
        </motion.h1>
        <motion.p variants={item} className="max-w-xl text-lg text-muted">
          {t.tagline}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-2 text-xs text-muted">
          <span className="glass rounded-full px-3 py-1">{t.location}</span>
          <span className="glass rounded-full px-3 py-1">{t.stack}</span>
        </motion.div>
        <motion.div variants={item} className="flex gap-4 pt-2 text-sm">
          <a
            href="#proyectos"
            className="btn-gradient hover-lift rounded-full px-5 py-2.5 font-medium"
          >
            {t.viewProjects}
          </a>
          <a
            href="#contacto"
            className="hover-lift rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
          >
            {t.contact}
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.7, rotate: shouldReduceMotion ? 0 : -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 200, damping: 16, delay: 0.1 }
        }
        style={{ y: avatarY }}
        className="avatar-glow btn-gradient flex h-24 w-24 shrink-0 items-center justify-center rounded-full sm:h-32 sm:w-32"
      >
        <span className="font-display text-3xl font-semibold text-white sm:text-4xl">
          DV
        </span>
      </motion.div>
    </section>
  );
}
