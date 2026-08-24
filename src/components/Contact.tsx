import { links } from "@/data/links";
import Eyebrow from "@/components/Eyebrow";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>05. Contacto</Eyebrow>
      <p className="max-w-xl text-muted">
        ¿Quieres hablar de un proyecto o una oportunidad? Escríbeme, respondo
        siempre.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a
          href={links.email}
          className="hover-lift rounded-full bg-foreground px-5 py-2.5 font-medium text-background hover:bg-accent"
        >
          Enviar email
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-lift rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-lift rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={links.phone}
          className="hover-lift rounded-full border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
        >
          +34 640 364 763
        </a>
      </div>
    </section>
  );
}
