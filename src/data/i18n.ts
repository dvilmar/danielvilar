export const dict = {
  es: {
    skipToContent: "Saltar al contenido",
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      switchLang: "Cambiar a inglés",
    },
    hero: {
      greeting: "Hola, soy",
      tagline:
        "Full Stack Developer. Construyo sistemas backend, dashboards y herramientas de trading algorítmico, con foco en código correcto y mantenible.",
      location: "Sevilla, España",
      stack: "Java · Spring Boot · React",
      viewProjects: "Ver proyectos",
      contact: "Contactar",
    },
    about: {
      eyebrow: "01. Sobre mí",
      bio: "Full Stack Developer especializado en Java/Spring Boot y React, con experiencia en arquitecturas de microservicios, mensajería asíncrona (Kafka) y pipelines de CI/CD. Estudié Desarrollo de Aplicaciones Web (CFGS DAW) en el IES Alixar y desde entonces combino el desarrollo profesional con proyectos propios de trading algorítmico, donde diseño, backtesteo y opero estrategias con foco en rigor estadístico y gestión de riesgo. Me interesa el software bien construido: sistemas simples, testeados y fáciles de razonar.",
      downloadCv: "Descargar CV",
    },
    experience: {
      eyebrow: "02. Experiencia",
    },
    projects: {
      eyebrow: "03. Proyectos",
      viewMore: "Ver más →",
    },
    skills: {
      eyebrow: "04. Skills",
    },
    contact: {
      eyebrow: "05. Contacto",
      intro: "¿Quieres hablar de un proyecto o una oportunidad? Escríbeme, respondo siempre.",
      sendEmail: "Enviar email",
      copied: "Email copiado al portapapeles",
    },
    modal: {
      viewOnGithub: "Ver en GitHub",
      close: "Cerrar",
    },
    notFound: {
      code: "404",
      title: "Página no encontrada",
      description: "La página que buscas no existe o se ha movido.",
      backHome: "Volver al inicio",
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLang: "Switch to Spanish",
    },
    hero: {
      greeting: "Hi, I'm",
      tagline:
        "Full Stack Developer. I build backend systems, dashboards and algorithmic trading tools, focused on correct, maintainable code.",
      location: "Seville, Spain",
      stack: "Java · Spring Boot · React",
      viewProjects: "View projects",
      contact: "Contact",
    },
    about: {
      eyebrow: "01. About",
      bio: "Full Stack Developer specialized in Java/Spring Boot and React, with experience in microservices architectures, async messaging (Kafka) and CI/CD pipelines. I studied Web Application Development (CFGS DAW) at IES Alixar, and since then I've combined professional development with my own algorithmic trading projects, where I design, backtest and run strategies with a focus on statistical rigor and risk management. I care about well-built software: simple systems that are tested and easy to reason about.",
      downloadCv: "Download CV",
    },
    experience: {
      eyebrow: "02. Experience",
    },
    projects: {
      eyebrow: "03. Projects",
      viewMore: "View more →",
    },
    skills: {
      eyebrow: "04. Skills",
    },
    contact: {
      eyebrow: "05. Contact",
      intro: "Want to talk about a project or an opportunity? Reach out, I always reply.",
      sendEmail: "Send email",
      copied: "Email copied to clipboard",
    },
    modal: {
      viewOnGithub: "View on GitHub",
      close: "Close",
    },
    notFound: {
      code: "404",
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has moved.",
      backHome: "Back to home",
    },
  },
} as const;

export type Dict = typeof dict.es;
