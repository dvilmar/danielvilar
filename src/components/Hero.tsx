"use client";

import { motion, type Variants } from "framer-motion";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = dict[lang].hero;

  return (
    <section className="mx-auto flex max-w-3xl flex-col-reverse items-start gap-8 px-6 pb-16 pt-20 sm:flex-row sm:items-center sm:justify-between">
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
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.1 }}
        className="avatar-glow btn-gradient flex h-24 w-24 shrink-0 items-center justify-center rounded-full sm:h-32 sm:w-32"
      >
        <span className="font-display text-3xl font-semibold text-white sm:text-4xl">
          DV
        </span>
      </motion.div>
    </section>
  );
}
