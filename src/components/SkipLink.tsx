"use client";

import { useLanguage } from "@/lib/language-context";
import { dict } from "@/data/i18n";

export default function SkipLink() {
  const { lang } = useLanguage();
  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
    >
      {dict[lang].skipToContent}
    </a>
  );
}
