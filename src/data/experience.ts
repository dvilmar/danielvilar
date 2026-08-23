export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Full Stack Developer",
    company: "GUADALTEL, S.A.",
    period: "Oct 2025 – Jun 2026",
    location: "Sevilla · Híbrido",
    bullets: [
      "Aplicación empresarial modular basada en microservicios con Java, Spring Boot, Spring Data JPA, Hibernate, JUnit, Mockito y Spring Security (autenticación/autorización end-to-end).",
      "APIs REST e integraciones con OpenFeign, mensajería asíncrona con Apache Kafka para distribuir actualizaciones de estado.",
      "CI/CD automatizado con Docker, GitLab y Jenkins.",
      "Modelado y gestión de bases de datos relacionales: SQL Server, PostgreSQL y Oracle.",
      "Aplicaciones web responsive con React, Redux y React Router: componentes reutilizables, gestión de estado, consumo de REST APIs, i18n y enrutado cliente.",
      "Herramienta ETL de migración de CSV con pipelines multi-fase para creación masiva de registros y vinculación relacional.",
    ],
  },
  {
    role: "Junior Developer (Prácticas)",
    company: "Atos IT, S.L.",
    period: "Abr 2024 – Jun 2024",
    location: "Sevilla · Híbrido",
    bullets: [
      "Despliegue y testing de APIs REST con Postman, JUnit y Mockito.",
      "Desarrollo y consumo de APIs con Spring Boot y dashboards con Angular.",
    ],
  },
];
