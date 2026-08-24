"use client";

import { links } from "@/data/links";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import Eyebrow from "@/components/Eyebrow";

export default function About() {
  const { lang } = useLanguage();
  const t = dict[lang].about;

  return (
    <section id="sobre-mi" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <p className="max-w-2xl text-muted">{t.bio}</p>
      <a
        href={links.cv}
        download="Daniel Vilar Martinez - CV.pdf"
        className="hover-lift mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
      >
        {t.downloadCv}
      </a>
    </section>
  );
}
