"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AuroraBackground() {
  // Tracked with page-relative coordinates (already scroll-adjusted) via a
  // window-level listener, not a rect scoped to Hero — Hero starts below
  // the header and clips at its own top edge, which was cutting the glow
  // off right where the header sits. This container starts at document
  // (0,0), so pageX/pageY map onto it directly with no extra math, and
  // naturally disappears once you scroll past it thanks to overflow-hidden.
  const spotlightX = useMotionValue(400);
  const spotlightY = useMotionValue(150);
  const springX = useSpring(spotlightX, { stiffness: 150, damping: 20 });
  const springY = useSpring(spotlightY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      spotlightX.set(e.pageX);
      spotlightY.set(e.pageY);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [spotlightX, spotlightY]);

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
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 9%, transparent) 0%, transparent 70%)",
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
