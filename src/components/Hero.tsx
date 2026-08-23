import Image from "next/image";
import { links } from "@/data/links";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col-reverse items-start gap-8 px-6 pb-16 pt-20 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-6">
        <p className="font-mono text-sm text-accent">Hola, soy</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Daniel Vilar Martínez
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Full Stack Developer. Construyo sistemas backend, dashboards y
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
      </div>
      <Image
        src="/avatar.png"
        alt="Foto de perfil de Daniel Vilar Martínez"
        width={128}
        height={128}
        priority
        className="h-24 w-24 shrink-0 rounded-full border border-border sm:h-32 sm:w-32"
      />
    </section>
  );
}
