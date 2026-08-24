import { skillGroups } from "@/data/skills";
import Eyebrow from "@/components/Eyebrow";

export default function Skills() {
  return (
    <section id="skills" className="section-band scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>04. Skills</Eyebrow>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="glass rounded-full px-3 py-1 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
