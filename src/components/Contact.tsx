import { links } from "@/data/links";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-accent">05. Contacto</h2>
      <p className="max-w-xl text-muted">
        ¿Quieres hablar de un proyecto o una oportunidad? Escríbeme, respondo
        siempre.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a
          href={links.email}
          className="rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-colors hover:bg-accent"
        >
          Enviar email
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={links.phone}
          className="rounded-full border border-border px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent"
        >
          +34 640 364 763
        </a>
      </div>
    </section>
  );
}
