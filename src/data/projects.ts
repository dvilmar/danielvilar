export type Project = {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "QX-Core",
    description:
      "Sistema de trading algorítmico multi-estrategia: motor BTC/USDT en producción (Binance), estrategia de reversión a VWAP para cuentas de fondeo en paper trading (Alpaca), y ~19 fuentes de retorno investigadas con backtest riguroso.",
    highlights: [
      "Motor BTC/USDT corriendo en producción real sobre Binance",
      "Backtesting riguroso: walk-forward, Monte Carlo, validación out-of-sample",
      "~19 fuentes de retorno investigadas con criterios estadísticos estrictos",
      "Estrategia de reversión a VWAP en paper trading sobre Alpaca",
    ],
    stack: ["Python", "Binance API", "Alpaca API", "Backtesting"],
  },
  {
    name: "Tavero",
    description:
      "App de gestión para restaurantes: pedidos y menús con fotos de platos, con web pública y actualizaciones OTA en producción.",
    highlights: [
      "App móvil (Expo/React Native) + web pública (Next.js en Vercel)",
      "Backend en Supabase (Postgres + Auth)",
      "Actualizaciones OTA en producción vía EAS, sin pasar por las tiendas",
      "Gestión de menús y fotos de platos para el restaurante",
    ],
    stack: ["Expo", "React Native", "Supabase", "Next.js"],
  },
  {
    name: "Proyecto Final CFGS DAW",
    description:
      "Proyecto final del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (IES Alixar, Castilleja de la Cuesta - Sevilla).",
    highlights: [
      "Proyecto final del ciclo, IES Alixar (Castilleja de la Cuesta - Sevilla)",
      "Desarrollo web completo, de diseño a despliegue",
    ],
    stack: ["Desarrollo web"],
    href: "https://github.com/dvilmar/dvilmar-proyecto-final",
  },
];
