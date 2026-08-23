export type Project = {
  name: string;
  description: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "QX-Core",
    description:
      "Sistema de trading algorítmico multi-estrategia: motor BTC/USDT en producción (Binance), estrategia de reversión a VWAP para cuentas de fondeo en paper trading (Alpaca), y ~19 fuentes de retorno investigadas con backtest riguroso (IS/OOS, Monte Carlo, stress-testing).",
  },
  {
    name: "Tavero",
    description:
      "App de gestión para restaurantes: pedidos y menús con fotos de platos (Expo + Supabase), con web pública desplegada en Vercel. Actualizaciones OTA en producción vía EAS.",
  },
  {
    name: "Proyecto Final CFGS DAW",
    description:
      "Proyecto final del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (IES Alixar, Castilleja de la Cuesta - Sevilla).",
    href: "https://github.com/dvilmar/dvilmar-proyecto-final",
  },
];
