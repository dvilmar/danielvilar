export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Record<"es" | "en", Job[]> = {
  es: [
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
  ],
  en: [
    {
      role: "Full Stack Developer",
      company: "GUADALTEL, S.A.",
      period: "Oct 2025 – Jun 2026",
      location: "Seville · Hybrid",
      bullets: [
        "Modular microservices-based enterprise application with Java, Spring Boot, Spring Data JPA, Hibernate, JUnit, Mockito and Spring Security (end-to-end authentication/authorization).",
        "REST APIs and integrations with OpenFeign, asynchronous messaging with Apache Kafka to distribute status updates.",
        "Automated CI/CD with Docker, GitLab and Jenkins.",
        "Modeling and management of relational databases: SQL Server, PostgreSQL and Oracle.",
        "Responsive web apps with React, Redux and React Router: reusable components, state management, REST API consumption, i18n and client-side routing.",
        "CSV migration ETL tool with multi-stage pipelines for bulk record creation and relational linking.",
      ],
    },
    {
      role: "Junior Developer (Internship)",
      company: "Atos IT, S.L.",
      period: "Apr 2024 – Jun 2024",
      location: "Seville · Hybrid",
      bullets: [
        "Deployed and tested REST APIs with Postman, JUnit and Mockito.",
        "Developed and consumed APIs with Spring Boot and dashboards with Angular.",
      ],
    },
  ],
};
