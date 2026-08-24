import { links } from "@/data/links";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col-reverse items-start gap-8 px-6 pb-16 pt-20 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Hola, soy
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Daniel Vilar Martínez
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Full Stack Developer. Construyo sistemas backend, dashboards y
          herramientas de trading algorítmico, con foco en código correcto y
          mantenible.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-muted">
          <span className="glass rounded-full px-3 py-1">Sevilla, España</span>
          <span className="glass rounded-full px-3 py-1">Java · Spring Boot · React</span>
        </div>
        <div className="flex gap-4 pt-2 text-sm">
          <a
            href="#proyectos"
            className="hover-lift rounded-full bg-foreground px-5 py-2.5 font-medium text-background hover:bg-accent"
          >
            Ver proyectos
          </a>
          <a
            href={links.email}
            className="hover-lift rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
          >
            Contactar
          </a>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="avatar-glow flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-border bg-gradient-to-br from-surface to-background sm:h-32 sm:w-32"
      >
        <span className="font-display text-3xl font-semibold text-accent sm:text-4xl">
          DV
        </span>
      </div>
    </section>
  );
}
