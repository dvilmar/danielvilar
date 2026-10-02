export type Project = {
  name: string;
  description: string;
  highlights: string[];
  images: string[];
  links?: {
    github?: string;
    website?: string;
  };
};

export const projects: Record<"es" | "en", Project[]> = {
  es: [
    {
      name: "QX-Core",
      description:
        "Sistema de investigación, backtesting y producción de trading cuantitativo: producción con motor BTC/USDT en producción (ByBit), estrategia de reversión a VWAP para cuentas de fondeo en paper trading (Alpaca), y múltiples fuentes de retorno investigadas con backtest riguroso.",
      highlights: [
        "Marco de validación estadística riguroso (walk-forward, Monte Carlo con bootstrap por bloques, Sharpe deflactado, PBO, prueba de realidad de White y corrección por comparaciones múltiples.",
        "Auditoría de fidelidad de los backtests mediante un gemelo digital que reproduce el motor real contra un exchange simulado (libro, stops intrabarra, margen e interés) y tests de ausencia de look-ahead más backend FastAPI y dashboard React para monitorización.",
      ],
      links: { github: "https://github.com/dvilmar/qx-core-demo" },
      images: ["/projects/qx-core.png"],
    },
    {
      name: "Tavero",
      description:
        "Aplicación de gestión para restaurantes: pedidos y menús con fotos de platos, con web pública y actualizaciones OTA en producción.",
      highlights: [
        "App móvil (Expo/React Native) + web pública (Next.js en Vercel)",
        "Backend en Supabase (Postgres + Auth)",
        "Actualizaciones OTA en producción vía EAS, sin pasar por las tiendas",
        "Gestión de menús y fotos de platos para el restaurante",
      ],
      links: { website: "https://tavero.es" },
      images: [
        "/projects/tavero1.gif",
        "/projects/tavero2.gif",
        "/projects/tavero3.png",
      ],
    },
    {
      name: "BookMyCut - Proyecto CFGS",
      description:
        "Proyecto para CFGS DAW",
      highlights: [
        "Aplicación spring",
        "Desarrollo web completo, de diseño a despliegue",
      ],
      images: ["/projects/bookmycut.png"],
      links: { github: "https://github.com/dvilmar/dvilmar-proyecto-final" },    
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
      links: { github: "https://github.com/dvilmar/qx-core-demo" },
      images: ["/projects/qx-core.png"],
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
      links: { website: "https://tavero.es" },      
      images: [
        "/projects/tavero1.gif",
        "/projects/tavero2.gif",
        "/projects/tavero3.png",
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
      images: ["/projects/cfgs.png"],
      links: { github: "https://github.com/dvilmar/dvilmar-proyecto-final" },
    },
  ],
};
