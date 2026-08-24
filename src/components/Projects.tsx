"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { projects, type Project } from "@/data/projects";
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
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>03. Proyectos</Eyebrow>
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div key={project.name} variants={item}>
            <TiltCard
              onClick={() => setSelected(project)}
              className="glass h-full w-full rounded-lg p-6 text-left"
            >
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                Ver más →
              </span>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
