"use client";

import { links } from "@/data/links";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import Eyebrow from "@/components/Eyebrow";

export default function Contact() {
  const { lang } = useLanguage();
  const t = dict[lang].contact;

  return (
    <section id="contacto" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <p className="max-w-xl text-muted">{t.intro}</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a
          href={links.email}
          className="btn-gradient hover-lift rounded-full px-5 py-2.5 font-medium"
        >
          {t.sendEmail}
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
      </div>
    </section>
  );
}
