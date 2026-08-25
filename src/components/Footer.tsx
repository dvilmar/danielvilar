"use client";

import { useDesignVariant } from "@/lib/design-variant-context";

// Matches Contact's tone (whatever it is in the active variant) so the
// page doesn't end on an abrupt color change right after it.
export default function Footer() {
  const { tone } = useDesignVariant();

  return (
    <footer className={tone("contact") === "gray" ? "tone-gray" : ""}>
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} Daniel Vilar Martínez.</p>
      </div>
    </footer>
  );
}
