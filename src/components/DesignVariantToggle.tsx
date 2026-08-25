"use client";

import { useDesignVariant } from "@/lib/design-variant-context";

// Temporary test-mode control — see design-variant-context.tsx.
export default function DesignVariantToggle() {
  const { variant, toggle } = useDesignVariant();

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full border border-border bg-white px-4 py-2.5 text-xs font-semibold text-foreground shadow-lg hover:border-accent hover:text-accent"
    >
      Modo prueba: Opción {variant === "a" ? "1" : "2"} — cambiar
    </button>
  );
}
