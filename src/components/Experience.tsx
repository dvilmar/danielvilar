"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { experience } from "@/data/experience";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import Eyebrow from "@/components/Eyebrow";

export default function Experience() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: shouldReduceMotion ? {} : { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experiencia" className="scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>{t.experience.eyebrow}</Eyebrow>
        <div className="relative">
          <motion.div
            className="absolute inset-y-0 left-0 w-px bg-border"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: "easeInOut" }}
          />
          <motion.div
            className="flex flex-col gap-10 pl-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Keyed by index, not role/company: `role` is translated per
                language (e.g. "Prácticas" vs "Internship"), so a text-based
                key would remount this entry on language switch — and since
                the parent's whileInView trigger is viewport={{ once: true }},
                a freshly-mounted entry never gets the signal to animate in
                and stays stuck at opacity 0 until a full reload. */}
            {experience[lang].map((job, index) => (
              <motion.div key={index} variants={item} className="relative">
                <motion.span
                  className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full bg-accent"
                  initial={{ scale: shouldReduceMotion ? 1 : 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold">
                    {job.role} <span className="text-muted">· {job.company}</span>
                  </h3>
                  <span className="font-serif text-sm italic text-muted">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-accent">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
