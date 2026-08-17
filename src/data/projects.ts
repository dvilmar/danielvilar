export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  status: "En producción" | "Demo" | "Académico";
};

// TODO(daniel): revisa y ajusta la selección/orden/descripciones de proyectos.
export const projects: Project[] = [
  {
    name: "QX-Core",
    description:
      "Sistema de trading algorítmico multi-estrategia: motor BTC/USDT en producción (Binance), estrategia de reversión a VWAP para cuentas de fondeo en paper trading (Alpaca), y ~19 fuentes de retorno investigadas con backtest riguroso (IS/OOS, Monte Carlo, stress-testing).",
    tags: ["Python", "Trading algorítmico", "Backtesting", "Binance", "Alpaca"],
    status: "En producción",
  },
  {
    name: "QX-Core Demo",
    description:
      "Dashboard full-stack de trading: FastAPI + Next.js + Docker. Versión de portfolio de QX-Core con estrategia sintética para mostrar la arquitectura sin exponer lógica propietaria.",
    tags: ["FastAPI", "Next.js", "Docker", "TypeScript"],
    href: "https://github.com/dvilmar/qx-core-demo",
    status: "Demo",
  },
  {
    name: "Proyecto Final CFGS DAW",
    description:
      "Proyecto final del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (IES Alixar, Castilleja de la Cuesta - Sevilla).",
    tags: ["Desarrollo web", "Académico"],
    href: "https://github.com/dvilmar/dvilmar-proyecto-final",
    status: "Académico",
  },
];
