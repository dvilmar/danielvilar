import { links } from "@/data/links";
import Eyebrow from "@/components/Eyebrow";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>01. Sobre mí</Eyebrow>
      <p className="max-w-2xl text-muted">
        Full Stack Developer especializado en Java/Spring Boot y React, con
        experiencia en arquitecturas de microservicios, mensajería asíncrona
        (Kafka) y pipelines de CI/CD. Estudié Desarrollo de Aplicaciones Web
        (CFGS DAW) en el IES Alixar y desde entonces combino el desarrollo
        profesional con proyectos propios de trading algorítmico, donde
        diseño, backtesteo y opero estrategias con foco en rigor estadístico
        y gestión de riesgo. Me interesa el software bien construido:
        sistemas simples, testeados y fáciles de razonar.
      </p>
      <a
        href={links.cv}
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
      >
        Descargar CV
      </a>
    </section>
  );
}
