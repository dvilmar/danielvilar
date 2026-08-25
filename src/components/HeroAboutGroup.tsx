"use client";

import { useDesignVariant } from "@/lib/design-variant-context";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reveal from "@/components/Reveal";

// Temporary, part of the design-variant test mode (see
// design-variant-context.tsx): in option 1, Hero + About together fill
// the full viewport height as one continuous gray+gradient intro screen.
export default function HeroAboutGroup() {
  const { variant } = useDesignVariant();

  if (variant === "a") {
    return (
      <div id="hero-about-group" className="flex min-h-screen flex-col justify-center">
        <Hero />
        <About />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
    </>
  );
}
