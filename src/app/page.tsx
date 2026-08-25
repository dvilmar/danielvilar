import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { links } from "@/data/links";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Vilar Martínez",
  jobTitle: "Full Stack Developer",
  url: "https://dvilmar.vercel.app",
  sameAs: [links.github, links.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main id="contenido" className="flex-1">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
