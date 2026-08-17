import Link from "next/link";
import { links } from "@/data/links";

const NAV_ITEMS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="#" className="font-mono text-sm text-foreground">
          dvilmar
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-foreground"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
