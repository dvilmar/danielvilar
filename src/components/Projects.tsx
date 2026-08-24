"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import Eyebrow from "@/components/Eyebrow";
import ProjectModal from "@/components/ProjectModal";
import TiltCard from "@/components/TiltCard";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = dict[lang];
  const selected = selectedIndex !== null ? projects[lang][selectedIndex] : null;

  return (
    <section id="proyectos" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>{t.projects.eyebrow}</Eyebrow>
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects[lang].map((project, index) => (
          <motion.div key={project.name} variants={item}>
            <TiltCard
              onClick={() => setSelectedIndex(index)}
              className="glass h-full w-full rounded-lg p-6 text-left"
            >
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                {t.projects.viewMore}
              </span>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelectedIndex(null)} />
    </section>
  );
}
