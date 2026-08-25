export type Project = {
  name: string;
  description: string;
  highlights: string[];
  href?: string;
  // Screenshot/GIF for the modal — optional until real captures exist for
  // each project; ProjectModal only renders this block when it's set.
  image?: string;
};

export const projects: Record<"es" | "en", Project[]> = {
  es: [
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
      href: "https://github.com/dvilmar/qx-core-demo",
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
    },
    {
      name: "Proyecto Final CFGS DAW",
      description:
        "Proyecto final del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (IES Alixar, Castilleja de la Cuesta - Sevilla).",
      highlights: [
        "Proyecto final del ciclo, IES Alixar (Castilleja de la Cuesta - Sevilla)",
        "Desarrollo web completo, de diseño a despliegue",
      ],
      href: "https://github.com/dvilmar/dvilmar-proyecto-final",
    },
  ],
  en: [
    {
      name: "QX-Core",
      description:
        "Multi-strategy algorithmic trading system: BTC/USDT engine live in production (Binance), VWAP reversion strategy for funded accounts in paper trading (Alpaca), and ~19 return sources researched with rigorous backtesting.",
      highlights: [
        "BTC/USDT engine running in real production on Binance",
        "Rigorous backtesting: walk-forward, Monte Carlo, out-of-sample validation",
        "~19 return sources researched with strict statistical criteria",
        "VWAP reversion strategy in paper trading on Alpaca",
      ],
      href: "https://github.com/dvilmar/qx-core-demo",
    },
    {
      name: "Tavero",
      description:
        "Restaurant management app: orders and menus with dish photos, with a public website and production OTA updates.",
      highlights: [
        "Mobile app (Expo/React Native) + public website (Next.js on Vercel)",
        "Backend on Supabase (Postgres + Auth)",
        "Production OTA updates via EAS, no app-store review needed",
        "Menu and dish photo management for the restaurant",
      ],
    },
    {
      name: "CFGS DAW Final Project",
      description:
        "Final project for the Higher Vocational Training Diploma in Web Application Development (IES Alixar, Castilleja de la Cuesta - Seville).",
      highlights: [
        "Final project of the program, IES Alixar (Castilleja de la Cuesta - Seville)",
        "Full web development, from design to deployment",
      ],
      href: "https://github.com/dvilmar/dvilmar-proyecto-final",
    },
  ],
};
