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
      {/* Full-width wash right at the very top. The header pill is opaque
          white, so it will always cover whatever's directly behind it —
          but at typical desktop widths the margins beside it are narrow
          (measured as little as ~130px), too tight for a positioned blob
          to stay clear of it. A full-width band guarantees color is
          visible above and beside the pill regardless of viewport width,
          instead of only showing where a blob happens to miss it. */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 100%)",
        }}
      />
      <div
        className="aurora-blob aurora-blob-a left-[6%] top-20 h-56 w-56"
        style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)" }}
      />
      <div
        className="aurora-blob aurora-blob-b bottom-8 right-[8%] h-64 w-64"
        style={{ background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}
      />
    </div>
  );
}
