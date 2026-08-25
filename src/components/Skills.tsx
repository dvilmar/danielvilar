"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import { useDesignVariant } from "@/lib/design-variant-context";
import Eyebrow from "@/components/Eyebrow";

export default function Skills() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const shouldReduceMotion = useReducedMotion();
  const { tone } = useDesignVariant();

  const container: Variants = {
    hidden: {},
    show: { transition: shouldReduceMotion ? {} : { staggerChildren: 0.1 } },
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
    <section
      id="skills"
      className={`${tone("skills") === "gray" ? "tone-gray" : "tone-white"} scroll-mt-20`}
    >
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>{t.skills.eyebrow}</Eyebrow>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Keyed by index, not group.label: the label is translated
              per-language, so a text-based key would remount this group on
              language switch and strand it at opacity 0 (see Experience
              and Projects, which hit this exact bug). */}
          {skillGroups[lang].map((group, index) => (
            <motion.div key={index} variants={item}>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skillItem) => (
                  <motion.li
                    key={skillItem}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {skillItem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
