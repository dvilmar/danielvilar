import { links } from "@/data/links";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-16 pt-20">
      <p className="font-mono text-sm text-accent">Hola, soy</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Daniel Vilar Martínez
      </h1>
      <p className="max-w-xl text-lg text-muted">
        Desarrollador de software. Construyo sistemas backend, dashboards y
        herramientas de trading algorítmico, con foco en código correcto y
        mantenible.
      </p>
      <div className="flex gap-4 pt-2 text-sm">
        <a
          href="#proyectos"
          className="rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-colors hover:bg-accent"
        >
          Ver proyectos
        </a>
        <a
          href={links.email}
          className="rounded-full border border-border px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
