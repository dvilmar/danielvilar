import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-6 font-mono text-sm text-accent">02. Experiencia</h2>
      <div className="flex flex-col gap-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{job.location}</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-accent">–</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
