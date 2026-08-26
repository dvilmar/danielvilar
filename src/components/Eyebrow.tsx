export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      {children}
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}
