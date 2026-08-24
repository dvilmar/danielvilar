"use client";

import Link from "next/link";
import { dict } from "@/data/i18n";
import { useLanguage } from "@/lib/language-context";

export default function NotFound() {
  const { lang } = useLanguage();
  const t = dict[lang].notFound;

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm text-accent">{t.code}</p>
      <h1 className="text-2xl font-semibold">{t.title}</h1>
      <p className="max-w-sm text-muted">{t.description}</p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
      >
        {t.backHome}
      </Link>
    </main>
  );
}
