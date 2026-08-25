"use client";

import { links } from "@/data/links";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";
import { useDesignVariant } from "@/lib/design-variant-context";
import Eyebrow from "@/components/Eyebrow";

export default function About() {
  const { lang } = useLanguage();
  const t = dict[lang].about;
  const { variant } = useDesignVariant();

  return (
    // flex-1: stretches to fill whatever's left of the viewport below
    // Hero (see HeroAboutGroup), so the background below reaches all the
    // way down with no gap regardless of content length. Option 1
    // (variant "a"): stays transparent so the extended aurora fill behind
    // it (see AuroraBackground) shows through, seamless with Hero above.
    // Option 2 (variant "b"): normal opaque white section.
    <section
      id="sobre-mi"
      className={`flex flex-1 flex-col justify-center scroll-mt-20 ${variant === "a" ? "" : "tone-white"}`}
    >
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <p className="max-w-2xl text-muted">{t.bio}</p>
        <a
          href={links.cv}
          download="Daniel Vilar Martinez - CV.pdf"
          className="hover-lift mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
        >
          {t.downloadCv}
        </a>
      </div>
    </section>
  );
}
