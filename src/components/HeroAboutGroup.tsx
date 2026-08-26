import Hero from "@/components/Hero";
import About from "@/components/About";

// Hero + About together fill the full viewport height as one intro
// screen. About stretches (flex-1) to fill whatever's left below Hero,
// so its own white background reaches all the way down with no gap,
// regardless of content length or viewport height.
export default function HeroAboutGroup() {
  return (
    <div id="hero-about-group" className="flex min-h-screen flex-col">
      <Hero />
      <About />
    </div>
  );
}
