"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

// Every section reads its text straight from the `lang`-keyed i18n dict, so
// toggling language used to swap all the copy in one instant frame. Keying
// this wrapper by `lang` remounts its children on toggle, and
// AnimatePresence's mode="wait" sequences a brief fade-out of the old
// language before the new one fades in, instead of a hard cut.
export default function LanguageTransition({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { lang } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
