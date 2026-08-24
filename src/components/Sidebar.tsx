import { links } from "@/data/links";

const NAV_ITEMS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-80 lg:flex-col lg:justify-between lg:border-r lg:border-border lg:bg-surface lg:px-10 lg:py-16">
      <div>
        <div className="btn-gradient avatar-glow flex h-14 w-14 items-center justify-center rounded-full">
          <span className="font-display text-lg font-semibold text-white">DV</span>
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold leading-tight text-foreground">
          Daniel Vilar Martínez
        </h1>
        <p className="mt-2 text-sm text-muted">Full Stack Developer</p>

        <nav className="mt-12 flex flex-col gap-4 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
        <a href={links.email} className="hover:text-accent">
          Email
        </a>
      </div>
    </aside>
  );
}
