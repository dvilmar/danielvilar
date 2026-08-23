import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-accent">03. Proyectos</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
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
              <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                {project.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-background px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
