// Plain server component (no interactivity) so it can sit as an
// independent sibling of <Header> rather than an ancestor — wrapping the
// sticky header in any overflow-hidden container would break its
// stickiness, so this owns its own contained box instead, tall enough to
// cover both the header and the Hero below it.
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden"
    >
      <div
        className="aurora-blob aurora-blob-a left-[6%] top-2 h-56 w-56"
        style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)" }}
      />
      <div
        className="aurora-blob aurora-blob-b bottom-8 right-[8%] h-64 w-64"
        style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}
      />
    </div>
  );
}
