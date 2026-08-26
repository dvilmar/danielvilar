export type SkillGroup = { label: string; items: string[] };

export const skillGroups: Record<"es" | "en", SkillGroup[]> = {
  es: [
    {
      label: "Frameworks y lenguajes",
      items: ["Java", "Spring Boot", "JPA/Hibernate", "React", "Node", "Redux", "TypeScript"],
    },
    {
      label: "Mensajería y arquitectura",
      items: ["Microservicios", "REST APIs", "Apache Kafka", "WebSockets", "OpenAPI/Swagger"],
    },
    {
      label: "DevOps",
      items: ["Docker", "GitLab", "GitHub Actions", "Jenkins", "SonarQube"],
    },
    {
      label: "Bases de datos",
      items: ["PostgreSQL", "SQL", "Oracle", "Redis", "ElasticSearch"],
    },
    {
      label: "Trading algorítmico",
      items: ["Python", "Backtesting", "Binance API", "Alpaca API", "Análisis cuantitativo"],
    },
  ],
  en: [
    {
      label: "Frameworks & languages",
      items: ["Java", "Spring Boot", "JPA/Hibernate", "React", "Node", "Redux", "TypeScript"],
    },
    {
      label: "Messaging & architecture",
      items: ["Microservices", "REST APIs", "Apache Kafka", "WebSockets", "OpenAPI/Swagger"],
    },
    {
      label: "DevOps",
      items: ["Docker", "GitLab", "GitHub Actions", "Jenkins", "SonarQube"],
    },
    {
      label: "Databases",
      items: ["PostgreSQL", "SQL", "Oracle", "Redis", "ElasticSearch"],
    },
    {
      label: "Algorithmic trading",
      items: ["Python", "Backtesting", "Binance API", "Alpaca API", "Quantitative analysis"],
    },
  ],
};
