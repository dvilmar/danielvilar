import Hero from "@/components/Hero";
import About from "@/components/About";

// Temporary, part of the design-variant test mode (see
// design-variant-context.tsx): Hero + About together fill the full
// viewport height as one screen, in both options — About stretches
// (flex-1) to fill whatever's left below Hero, so its own background
// (transparent+aurora in option 1, opaque white in option 2 — decided
// inside About.tsx) reaches all the way down with no gap, regardless of
// content length or viewport height.
export default function HeroAboutGroup() {
  return (
    <div id="hero-about-group" className="flex min-h-screen flex-col">
      <Hero />
      <About />
    </div>
  );
}
