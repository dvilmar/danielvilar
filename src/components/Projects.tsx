import { projects } from "@/data/projects";
import Eyebrow from "@/components/Eyebrow";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>03. Proyectos</Eyebrow>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <h3 className="text-lg font-medium">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
