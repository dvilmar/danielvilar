"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import Eyebrow from "@/components/Eyebrow";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>03. Proyectos</Eyebrow>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setSelected(project)}
            className="glass hover-lift rounded-lg p-6 text-left hover:border-accent/60"
          >
            <h3 className="text-lg font-medium">{project.name}</h3>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Ver más →
            </span>
          </button>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
