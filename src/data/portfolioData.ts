import type {
  Language,
  ProjectItem,
  ServiceItem,
  SkillCategory,
  TrajectoryItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  brand: 'ME',
  fullName: 'Alejandro Matías Enriquez',
  shortName: 'Matías Enriquez',
  email: 'matiasenriquez97@gmail.com',
  whatsappNumber: '+54 376 490-0966',
  whatsappUrl:
    'https://wa.me/5493764900966?text=Hola%20Mat%C3%ADas%2C%20vi%20tu%20portfolio%20web%20y%20me%20gustar%C3%ADa%20conversar%20con%20vos.',
  githubUrl: 'https://github.com/Matiasenriquez',
  linkedinUrl: 'https://www.linkedin.com/in/alejandro-matias-enriquez-701488232/',
  cvUrl: {
    es: './cv/Alejandro_Matias_Enriquez_CV_ES.pdf',
    en: './cv/Alejandro_Matias_Enriquez_CV_EN.pdf',
  },
};

export const UI_COPY: Record<
  Language,
  {
    nav: {
      about: string;
      stack: string;
      projects: string;
      services: string;
      trajectory: string;
      contact: string;
      hireMe: string;
      themeTooltipLight: string;
      themeTooltipDark: string;
    };
    hero: {
      availabilityBadge: string;
      roleTag: string;
      greeting: string;
      headlinePart1: string;
      headlineHighlight: string;
      headlinePart2: string;
      description: string;
      securityNote: string;
      ctaProjects: string;
      ctaDownloadCv: string;
      ctaContact: string;
      stats: {
        label: string;
        value: string;
        color: 'blue' | 'green' | 'yellow' | 'red';
      }[];
    };
    stack: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      subtitle: string;
      filterAll: string;
      filterCompleted: string;
      filterUpcoming: string;
      viewCaseStudy: string;
      liveDemo: string;
      sourceCode: string;
      linksPending: string;
      stackUsedLabel: string;
      modal: {
        close: string;
        problemTitle: string;
        architectureTitle: string;
        frontendLabel: string;
        backendLabel: string;
        databaseLabel: string;
        securityLabel: string;
        challengesTitle: string;
        solutionsTitle: string;
        featuresTitle: string;
      };
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
      deliverablesLabel: string;
      ctaConsult: string;
    };
    trajectory: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      emailLabel: string;
      copyEmail: string;
      copiedEmail: string;
      whatsappTitle: string;
      whatsappDesc: string;
      whatsappBtn: string;
      linkedinDesc: string;
      githubDesc: string;
      cvCardTitle: string;
      cvCardDesc: string;
      cvCardBtn: string;
      footerRights: string;
    };
  }
> = {
  es: {
    nav: {
      about: 'Inicio',
      stack: 'Stack',
      projects: 'Proyectos',
      services: 'Servicios',
      trajectory: 'Trayectoria',
      contact: 'Contacto',
      hireMe: 'Hablemos',
      themeTooltipLight: 'Cambiar a modo claro',
      themeTooltipDark: 'Cambiar a modo oscuro (Night Shift)',
    },
    hero: {
      availabilityBadge: 'Disponible para posiciones Full Stack & Proyectos Freelance',
      roleTag: 'Full Stack Web Developer · Seguridad Informática',
      greeting: 'Hola, soy Alejandro Matías Enriquez',
      headlinePart1: 'Construyo aplicaciones web ',
      headlineHighlight: 'escalables, modernas y seguras',
      headlinePart2: ' de punta a punta.',
      description:
        'Desarrollador Full Stack especializado en los ecosistemas TypeScript/JavaScript (React, Node.js, Express) y Python (FastAPI, Django), con modelado de datos en PostgreSQL y MongoDB.',
      securityNote:
        'Cursando la Tecnicatura Superior en Seguridad Informática y Ciberseguridad: integro buenas prácticas de protección de datos y arquitectura segura desde el diseño.',
      ctaProjects: 'Explorar Casos de Estudio',
      ctaDownloadCv: 'Descargar CV (ES)',
      ctaContact: 'Contactar ahora',
      stats: [
        { label: 'Productos End-to-End', value: '3 Sistemas', color: 'blue' },
        { label: 'Ecosistemas Backend', value: 'Node.js & Python', color: 'green' },
        { label: 'Bases de Datos', value: 'SQL & NoSQL', color: 'yellow' },
        { label: 'Enfoque Diferencial', value: 'Ciberseguridad', color: 'red' },
      ],
    },
    stack: {
      eyebrow: 'ARQUITECTURA Y HERRAMIENTAS',
      title: 'Stack Tecnológico Full Stack',
      subtitle:
        'Dominio integral del ciclo de vida de una aplicación: interfaces reactivas, APIs RESTful de alto rendimiento, persistencia de datos híbrida y seguridad aplicada.',
    },
    projects: {
      eyebrow: 'INGENIERÍA DE PRODUCTO',
      title: 'Proyectos Destacados & Casos de Estudio',
      subtitle:
        'Sistemas reales diseñados y desarrollados con TypeScript, React, Node.js, Express, MongoDB y Tailwind CSS. Abrí cada caso de estudio para explorar su arquitectura, retos y soluciones.',
      filterAll: 'Todos los proyectos (3)',
      filterCompleted: 'Desarrollados (2)',
      filterUpcoming: 'Próximo lanzamiento / Roadmap (1)',
      viewCaseStudy: 'Ver Caso de Estudio y Arquitectura',
      liveDemo: 'Demo en vivo',
      sourceCode: 'Repositorio',
      linksPending: 'Enlaces de demo/repo próximamente',
      stackUsedLabel: 'Stack principal del proyecto',
      modal: {
        close: 'Cerrar caso de estudio',
        problemTitle: 'Problema de Negocio & Contexto',
        architectureTitle: 'Arquitectura Técnica del Sistema',
        frontendLabel: 'Frontend & UI',
        backendLabel: 'Backend & API',
        databaseLabel: 'Persistencia de Datos',
        securityLabel: 'Seguridad & Integridad',
        challengesTitle: 'Retos Técnicos Superados',
        solutionsTitle: 'Soluciones e Impacto',
        featuresTitle: 'Módulos Clave del Sistema',
      },
    },
    services: {
      eyebrow: 'SOLUCIONES PARA EMPRESAS Y CLIENTES',
      title: '¿Cómo puedo ayudarte en tu próximo proyecto?',
      subtitle:
        'Transformo necesidades operativas complejas en plataformas web rápidas, intuitivas y seguras, listas para escalar.',
      deliverablesLabel: 'Qué incluye:',
      ctaConsult: 'Consultar por este servicio en WhatsApp',
    },
    trajectory: {
      eyebrow: 'FORMACIÓN Y EXPERIENCIA PRÁCTICA',
      title: 'Trayectoria Técnica & Educación',
      subtitle:
        'Combinación de ingeniería práctica desarrollando software propio, trabajo colaborativo en equipo y formación superior en Seguridad Informática.',
    },
    contact: {
      eyebrow: 'CONECTEMOS',
      title: '¿Buscás sumar un perfil Full Stack a tu equipo o iniciar un proyecto?',
      subtitle:
        'Estoy disponible tanto para oportunidades laborales (remoto o híbrido) como para el desarrollo de sistemas a medida y consultoría técnica.',
      emailLabel: 'Correo electrónico directo',
      copyEmail: 'Copiar correo',
      copiedEmail: '¡Correo copiado al portapapeles!',
      whatsappTitle: 'WhatsApp Directo',
      whatsappDesc: 'Respuesta rápida para coordinar entrevistas o evaluar tu proyecto.',
      whatsappBtn: 'Enviar mensaje por WhatsApp',
      linkedinDesc: 'Red profesional, certificaciones y contacto para recruiters.',
      githubDesc: 'Repositorios, actividad de código y proyectos Full Stack.',
      cvCardTitle: 'Currículum Vitae Completo',
      cvCardDesc: 'Descargá mi perfil técnico detallado en formato PDF listo para revisión.',
      cvCardBtn: 'Descargar CV en Español (PDF)',
      footerRights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      about: 'Home',
      stack: 'Stack',
      projects: 'Projects',
      services: 'Services',
      trajectory: 'Journey',
      contact: 'Contact',
      hireMe: "Let's Talk",
      themeTooltipLight: 'Switch to Light Mode',
      themeTooltipDark: 'Switch to Dark Mode (Night Shift)',
    },
    hero: {
      availabilityBadge: 'Available for Full Stack Roles & Freelance Projects',
      roleTag: 'Full Stack Web Developer · Cybersecurity Focus',
      greeting: "Hi, I'm Alejandro Matías Enriquez",
      headlinePart1: 'Building ',
      headlineHighlight: 'scalable, modern, and secure',
      headlinePart2: ' end-to-end web applications.',
      description:
        'Full Stack Developer specialized in the TypeScript/JavaScript (React, Node.js, Express) and Python (FastAPI, Django) ecosystems, backed by PostgreSQL and MongoDB.',
      securityNote:
        'Pursuing a Higher Technical Degree in IT Security & Cybersecurity: embedding data protection and Secure-by-Design principles into every layer.',
      ctaProjects: 'Explore Case Studies',
      ctaDownloadCv: 'Download CV (EN)',
      ctaContact: 'Get in Touch',
      stats: [
        { label: 'End-to-End Products', value: '3 Systems', color: 'blue' },
        { label: 'Backend Ecosystems', value: 'Node.js & Python', color: 'green' },
        { label: 'Database Engines', value: 'SQL & NoSQL', color: 'yellow' },
        { label: 'Core Edge', value: 'Cybersecurity', color: 'red' },
      ],
    },
    stack: {
      eyebrow: 'ARCHITECTURE & TOOLING',
      title: 'Full Stack Technology Arsenal',
      subtitle:
        'Comprehensive command of modern web development: reactive interfaces, high-throughput REST APIs, relational/document databases, and application security.',
    },
    projects: {
      eyebrow: 'PRODUCT ENGINEERING',
      title: 'Featured Projects & Case Studies',
      subtitle:
        'Real-world management systems built with TypeScript, React, Node.js, Express, MongoDB, and Tailwind CSS. Open any case study to inspect its architecture, challenges, and solutions.',
      filterAll: 'All Projects (3)',
      filterCompleted: 'Built & Completed (2)',
      filterUpcoming: 'Upcoming / Roadmap (1)',
      viewCaseStudy: 'View Case Study & Architecture',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      linksPending: 'Demo & repository links coming soon',
      stackUsedLabel: 'Core Project Stack',
      modal: {
        close: 'Close case study',
        problemTitle: 'Business Problem & Context',
        architectureTitle: 'System Technical Architecture',
        frontendLabel: 'Frontend & UI',
        backendLabel: 'Backend & API',
        databaseLabel: 'Data Persistence',
        securityLabel: 'Security & Integrity',
        challengesTitle: 'Technical Challenges Overcome',
        solutionsTitle: 'Solutions & Impact',
        featuresTitle: 'Key System Modules',
      },
    },
    services: {
      eyebrow: 'SOLUTIONS FOR TEAMS & CLIENTS',
      title: 'How Can I Help With Your Next Project?',
      subtitle:
        'I translate complex operational workflows into fast, intuitive, and secure web platforms engineered to scale.',
      deliverablesLabel: 'What is included:',
      ctaConsult: 'Inquire about this service on WhatsApp',
    },
    trajectory: {
      eyebrow: 'EDUCATION & HANDS-ON EXPERIENCE',
      title: 'Technical Journey & Education',
      subtitle:
        'A blend of practical product engineering, collaborative group development, full stack certifications, and formal education in Cybersecurity.',
    },
    contact: {
      eyebrow: "LET'S CONNECT",
      title: 'Looking to hire a Full Stack Developer or build a custom web platform?',
      subtitle:
        'I am open to full-time engineering roles (remote or hybrid) as well as freelance software development and technical consulting.',
      emailLabel: 'Direct Email Address',
      copyEmail: 'Copy email',
      copiedEmail: 'Email copied to clipboard!',
      whatsappTitle: 'Direct WhatsApp',
      whatsappDesc: 'Fast response to schedule an interview or discuss your project scope.',
      whatsappBtn: 'Message on WhatsApp',
      linkedinDesc: 'Professional profile, certifications, and direct contact for recruiters.',
      githubDesc: 'Code repositories, commits, and Full Stack architecture.',
      cvCardTitle: 'Complete Curriculum Vitae',
      cvCardDesc: 'Download my detailed technical resume in PDF format.',
      cvCardBtn: 'Download English CV (PDF)',
      footerRights: 'All rights reserved.',
    },
  },
};

export const SKILL_CATEGORIES: Record<Language, SkillCategory[]> = {
  es: [
    {
      id: 'frontend',
      title: 'Frontend & Experiencia de Usuario',
      subtitle: 'Interfaces modernas, responsivas y tipadas con arquitectura de componentes reutilizables.',
      color: 'blue',
      iconName: 'layout',
      skills: [
        { name: 'React', level: 'Avanzado · SPA, Hooks, Context, Optimización', highlight: true },
        { name: 'TypeScript', level: 'Tipado estricto End-to-End e Interfaces', highlight: true },
        { name: 'Tailwind CSS', level: 'Sistemas de Diseño, Glassmorfismo, Responsive UI', highlight: true },
        { name: 'JavaScript (ES6+)', level: 'Asincronismo, DOM, Programación Funcional' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & APIs Escalables',
      subtitle: 'Doble ecosistema de servidor para construir APIs RESTful rápidas, modulares y mantenibles.',
      color: 'green',
      iconName: 'server',
      skills: [
        { name: 'Node.js', level: 'Entorno de ejecución asíncrono y arquitectura modular', highlight: true },
        { name: 'Express.js', level: 'APIs REST, Middlewares, Autenticación y Rutas', highlight: true },
        { name: 'Python', level: 'Automatización, lógica de negocio y servicios backend', highlight: true },
        { name: 'FastAPI', level: 'APIs asíncronas de alto rendimiento y tipado Pydantic' },
        { name: 'Django', level: 'Arquitectura MVT, ORM robusto y paneles empresariales' },
      ],
    },
    {
      id: 'databases',
      title: 'Bases de Datos (SQL & NoSQL)',
      subtitle: 'Diseño de esquemas relacionales y documentales según las necesidades del negocio.',
      color: 'yellow',
      iconName: 'database',
      skills: [
        { name: 'MongoDB', level: 'Modelado documental NoSQL, Agregaciones e Índices', highlight: true },
        { name: 'PostgreSQL', level: 'Modelado relacional SQL, Integridad referencial y Consultas complejas', highlight: true },
      ],
    },
    {
      id: 'security',
      title: 'Seguridad Informática & Calidad',
      subtitle: 'Diferencial académico y técnico para proteger datos sensibles y blindar aplicaciones web.',
      color: 'red',
      iconName: 'shield',
      skills: [
        { name: 'Secure by Design', level: 'Prevención de vulnerabilidades web (OWASP) y sanitización', highlight: true },
        { name: 'Autenticación & Roles', level: 'Control de acceso basado en roles (RBAC), sesiones y JWT', highlight: true },
        { name: 'Protección de Datos', level: 'Resguardo de información crítica en sistemas financieros y de salud' },
        { name: 'Git & Trabajo Colaborativo', level: 'Control de versiones, flujos en equipo y revisiones de código' },
      ],
    },
  ],
  en: [
    {
      id: 'frontend',
      title: 'Frontend & User Experience',
      subtitle: 'Modern, responsive, and strictly typed interfaces with reusable component architectures.',
      color: 'blue',
      iconName: 'layout',
      skills: [
        { name: 'React', level: 'Advanced · SPA, Hooks, Context, Optimization', highlight: true },
        { name: 'TypeScript', level: 'Strict End-to-End Typing & Contracts', highlight: true },
        { name: 'Tailwind CSS', level: 'Design Systems, Glassmorphism, Responsive UI', highlight: true },
        { name: 'JavaScript (ES6+)', level: 'Async patterns, DOM, Functional Programming' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Scalable APIs',
      subtitle: 'Dual server-side ecosystem for building fast, modular, and maintainable RESTful APIs.',
      color: 'green',
      iconName: 'server',
      skills: [
        { name: 'Node.js', level: 'Event-driven runtime & modular backend architecture', highlight: true },
        { name: 'Express.js', level: 'REST APIs, Custom Middlewares, Auth & Routing', highlight: true },
        { name: 'Python', level: 'Business logic, scripting & backend services', highlight: true },
        { name: 'FastAPI', level: 'High-performance async APIs with Pydantic validation' },
        { name: 'Django', level: 'Batteries-included MVT architecture & robust ORM' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases (SQL & NoSQL)',
      subtitle: 'Relational and document schema modeling tailored to domain requirements.',
      color: 'yellow',
      iconName: 'database',
      skills: [
        { name: 'MongoDB', level: 'NoSQL Document Modeling, Aggregations & Indexing', highlight: true },
        { name: 'PostgreSQL', level: 'Relational SQL Modeling, ACID Transactions & Queries', highlight: true },
      ],
    },
    {
      id: 'security',
      title: 'Cybersecurity & Engineering Quality',
      subtitle: 'Academic and practical edge to safeguard sensitive data and harden web applications.',
      color: 'red',
      iconName: 'shield',
      skills: [
        { name: 'Secure by Design', level: 'Web vulnerability prevention (OWASP) & input sanitization', highlight: true },
        { name: 'Auth & RBAC', level: 'Role-Based Access Control, secure sessions & JWT', highlight: true },
        { name: 'Data Privacy', level: 'Protecting sensitive records in property & healthcare systems' },
        { name: 'Git & Team Workflows', level: 'Version control, collaborative branching & code reviews' },
      ],
    },
  ],
};

export const PROJECTS_DATA: Record<Language, ProjectItem[]> = {
  es: [
    {
      id: 'materun',
      slug: 'materun',
      title: 'MateRun',
      subtitle: 'Sistema de Gestión de Eventos Deportivos (Trail Running & Maratones)',
      category: 'Plataforma Full Stack · Eventos Deportivos',
      status: 'completed',
      statusLabel: 'Proyecto Desarrollado',
      shortDescription:
        'Plataforma integral para la organización de carreras de trail running y maratones: gestión de distancias, inscripciones de corredores, control de cupos, categorías y panel administrativo en tiempo real.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      accentColor: 'green',
      featured: true,
      metrics: [
        { label: 'Dominio', value: 'Trail & Maratones' },
        { label: 'Arquitectura', value: 'MERN + TypeScript' },
        { label: 'Interfaz', value: 'Mobile-First' },
      ],
      caseStudy: {
        problem:
          'Los organizadores de carreras de trail running y maratones suelen depender de planillas dispersas y formularios genéricos para gestionar cientos de inscriptos, validar pagos, asignar dorsales y segmentar corredores por distancia (5K, 10K, 21K, 42K, Ultra) y categoría de edad, generando errores operativos el día del evento.',
        architectureOverview:
          'Arquitectura Full Stack desacoplada y tipada con TypeScript tanto en cliente como en servidor, optimizada para picos de tráfico durante aperturas de inscripciones.',
        frontendDetails:
          'SPA en React + TypeScript estilizada con Tailwind CSS. Experiencia fluida para que los corredores se inscriban desde el celular en pocos pasos y un dashboard de administración para los organizadores.',
        backendDetails:
          'API RESTful en Node.js y Express.js con validación de esquemas, control de cupos por distancia y endpoints dedicados para reportes de inscriptos y estados de acreditación.',
        databaseDetails:
          'Base de datos documental en MongoDB ideal para almacenar estructuras flexibles de eventos (múltiples distancias, kits de corredor, deslindes médicos y contactos de emergencia).',
        securityHighlights:
          'Validación estricta de datos personales y médicos de emergencia de cada atleta, protección de rutas administrativas y prevención de inscripciones duplicadas.',
        challenges: [
          'Modelar eventos deportivos con múltiples distancias, precios por etapas (lotes) y cupos independientes sin perder rendimiento en las consultas.',
          'Garantizar un flujo de inscripción rápido e intuitivo desde dispositivos móviles para corredores en cualquier condición de conectividad.',
          'Centralizar en un único panel administrativo el estado de pagos, entrega de kits y listado final de largada.',
        ],
        solutions: [
          'Diseño de colecciones indexadas en MongoDB que permiten filtrar corredores por distancia, categoría y estado de pago de forma instantánea.',
          'Interfaz React con validación en tiempo real y feedback claro utilizando componentes modulares en Tailwind CSS.',
          'Panel de gestión con métricas clave del evento, reduciendo drásticamente el tiempo administrativo previo a la carrera.',
        ],
        keyFeatures: [
          'Catálogo de carreras de Trail Running y Maratones con detalle de altimetría, distancias y reglamento',
          'Flujo de inscripción inteligente con asignación automática de categoría por edad y género',
          'Panel organizador para control de cupos, acreditaciones, estados de pago y exportación de padrones',
          'Ficha técnica de corredor con contacto de emergencia y apto médico',
        ],
      },
    },
    {
      id: 'matdeps',
      slug: 'matdeps',
      title: 'MatDeps',
      subtitle: 'Sistema de Gestión y Administración de Inquilinos y Departamentos',
      category: 'Plataforma Full Stack · PropTech / Administración',
      status: 'completed',
      statusLabel: 'Proyecto Desarrollado',
      shortDescription:
        'Sistema centralizado para propietarios y administradores de consorcios o alquileres: seguimiento de inquilinos, estado de ocupación de departamentos, control de contratos, pagos mensuales y mantenimiento.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      accentColor: 'blue',
      featured: true,
      metrics: [
        { label: 'Dominio', value: 'Gestión Inmobiliaria' },
        { label: 'Arquitectura', value: 'MERN + TypeScript' },
        { label: 'Enfoque', value: 'Control & Finanzas' },
      ],
      caseStudy: {
        problem:
          'La administración manual de múltiples departamentos e inquilinos mediante hojas de cálculo provoca pérdida de trazabilidad en cobros mensuales, falta de alertas ante vencimientos de contratos, desorden en comprobantes y dificultad para conocer el estado financiero e historial de cada unidad.',
        architectureOverview:
          'Aplicación web Full Stack orientada a la integridad administrativa y financiera, conectando un panel de control reactivo con una API REST segura y almacenamiento en MongoDB.',
        frontendDetails:
          'Interfaz ejecutiva construida en React, TypeScript y Tailwind CSS con indicadores visuales claros del estado de cada departamento (Ocupado, Disponible, En Mantenimiento, Pago Pendiente).',
        backendDetails:
          'Servidor Node.js + Express.js encargado de la lógica de negocio de contratos, cálculo de períodos de pago, historial de inquilinos y generación de resúmenes mensuales.',
        databaseDetails:
          'MongoDB para relacionar eficientemente unidades habitacionales, perfiles de inquilinos, contratos vigentes/históricos y registros de transacciones mensuales.',
        securityHighlights:
          'Resguardo de información contractual y personal de los inquilinos bajo controles de acceso autenticados y sanitización de entradas en la API.',
        challenges: [
          'Relacionar el ciclo de vida completo de un departamento (múltiples inquilinos a lo largo del tiempo, renovaciones de contrato e incidencias) sin perder el historial.',
          'Presentar de un solo vistazo qué unidades están al día y cuáles registran mora o contratos próximos a vencer.',
          'Mantener la consistencia de los datos al registrar pagos parciales, expensas o gastos de mantenimiento.',
        ],
        solutions: [
          'Esquema de datos en MongoDB que separa el estado actual del inmueble de su historial de contratos y pagos para consultas ultrarrápidas.',
          'Dashboard con semáforo semántico (Verde: al día, Amarillo: próximo vencimiento, Rojo: pago pendiente) para toma de decisiones inmediata.',
          'API tipada en TypeScript que valida cada operación financiera antes de impactar en la base de datos.',
        ],
        keyFeatures: [
          'Mapa visual de unidades y departamentos con estado de ocupación en tiempo real',
          'Gestión integral de legajos de inquilinos, garantes y vigencia de contratos',
          'Seguimiento de cobros mensuales de alquileres, expensas y comprobantes',
          'Registro de mantenimientos e incidencias por departamento',
        ],
      },
    },
    {
      id: 'matclin',
      slug: 'matclin',
      title: 'MatClin',
      subtitle: 'Sistema de Gestión de Turnos y Agendas para Clínicas de Salud',
      category: 'Próximo Proyecto · HealthTech & Seguridad',
      status: 'upcoming',
      statusLabel: 'Próximo Proyecto · En Planificación',
      shortDescription:
        'Plataforma de reserva y administración de turnos médicos para clínicas y consultorios: agendas multi-profesional, prevención de solapamientos y arquitectura diseñada con foco en privacidad de datos de salud.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      accentColor: 'yellow',
      featured: true,
      metrics: [
        { label: 'Dominio', value: 'Salud / HealthTech' },
        { label: 'Estado', value: 'En Arquitectura' },
        { label: 'Prioridad', value: 'Seguridad de Datos' },
      ],
      caseStudy: {
        problem:
          'Las clínicas y consultorios enfrentan ausentismo de pacientes, saturación de líneas telefónicas, superposición de horarios entre especialistas y el gran desafío de gestionar datos sensibles de pacientes cumpliendo altos estándares de confidencialidad.',
        architectureOverview:
          'Arquitectura planeada sobre el stack TypeScript, React, Node.js, Express y MongoDB, aplicando de forma directa los principios de la Tecnicatura en Seguridad Informática para el control de accesos y auditoría.',
        frontendDetails:
          'Portal de autogestión en React + Tailwind CSS para que el paciente reserve turnos en segundos, sumado a una consola clínica para recepcionistas y profesionales médicos.',
        backendDetails:
          'Motor de disponibilidad y turnos en Node.js + Express.js con bloqueos atómicos para evitar turnos duplicados y control estricto de permisos por rol (Paciente, Recepción, Médico, Admin).',
        databaseDetails:
          'Modelado en MongoDB preparado para agendas dinámicas (horarios de atención variables, sobreturnos, especialidades) y trazabilidad de cada cambio de estado del turno.',
        securityHighlights:
          'Diseño centrado en Ciberseguridad: Control de Acceso Basado en Roles (RBAC), minimización de exposición de datos sensibles del paciente y registro de auditoría.',
        challenges: [
          'Evitar condiciones de carrera (race conditions) cuando dos pacientes intentan reservar el mismo horario con el mismo especialista simultáneamente.',
          'Garantizar que cada rol dentro de la clínica acceda únicamente a la información que le corresponde por principio de menor privilegio.',
          'Diseñar una agenda flexible que soporte distintas duraciones de consulta, bloqueos de agenda y reprogramaciones ágiles.',
        ],
        solutions: [
          'Validación transaccional e índices únicos compuestos en MongoDB por profesional y franja horaria.',
          'Arquitectura de middlewares de autorización granular en Express.js con TypeScript.',
          'Interfaz de calendario interactivo con estados claros (Disponible, Confirmado, En Sala de Espera, Atendido, Cancelado).',
        ],
        keyFeatures: [
          'Reserva de turnos online filtrando por especialidad médica, profesional y disponibilidad real',
          'Panel de recepción para gestión de sala de espera, sobreturnos y confirmaciones',
          'Vista exclusiva por profesional médico con su agenda diaria y semanal',
          'Arquitectura con enfoque en Seguridad Informática y privacidad del paciente',
        ],
      },
    },
  ],
  en: [
    {
      id: 'materun',
      slug: 'materun',
      title: 'MateRun',
      subtitle: 'Sports Event Management System (Trail Running & Marathons)',
      category: 'Full Stack Platform · Sports Tech',
      status: 'completed',
      statusLabel: 'Completed Project',
      shortDescription:
        'End-to-end platform for organizing trail running races and marathons: distance management, runner registrations, quota tracking, age categories, and a real-time organizer dashboard.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      accentColor: 'green',
      featured: true,
      metrics: [
        { label: 'Domain', value: 'Trail & Marathons' },
        { label: 'Architecture', value: 'MERN + TypeScript' },
        { label: 'Interface', value: 'Mobile-First' },
      ],
      caseStudy: {
        problem:
          'Trail running and marathon organizers often rely on scattered spreadsheets and generic forms to manage hundreds of runners, verify payments, assign bibs, and segment athletes by distance (5K, 10K, 21K, 42K, Ultra) and age brackets, leading to operational bottlenecks on race day.',
        architectureOverview:
          'Decoupled Full Stack architecture strictly typed with TypeScript across both client and server, engineered to handle registration traffic spikes smoothly.',
        frontendDetails:
          'React + TypeScript SPA styled with Tailwind CSS. Delivers a frictionless mobile registration flow for athletes alongside a comprehensive management console for race directors.',
        backendDetails:
          'Node.js and Express.js RESTful API featuring schema validation, per-distance quota enforcement, and dedicated endpoints for participant rosters and check-in statuses.',
        databaseDetails:
          'MongoDB document database tailored for flexible event structures (multiple race distances, runner kits, medical waivers, and emergency contacts).',
        securityHighlights:
          'Strict validation of personal and emergency medical data for every athlete, protected administrative endpoints, and duplicate registration prevention.',
        challenges: [
          'Modeling complex sports events with multiple distances, tiered pricing waves, and independent quotas without degrading query speed.',
          'Ensuring a fast, intuitive mobile registration flow for athletes even under poor connectivity conditions.',
          'Centralizing payment verification, kit pickup, and final starting rosters into a single source of truth.',
        ],
        solutions: [
          'Indexed MongoDB collections enabling instant filtering by race distance, age category, and payment status.',
          'Reactive React UI with real-time validation and clear visual feedback powered by modular Tailwind CSS components.',
          'Organizer dashboard displaying live race metrics, drastically cutting pre-event administrative workload.',
        ],
        keyFeatures: [
          'Trail Running and Marathon race catalog featuring elevation profiles, distances, and rules',
          'Smart registration flow with automatic category assignment by age and gender',
          'Organizer backoffice for quota control, accreditations, payment tracking, and roster exports',
          'Athlete profile module including emergency contact and medical clearance tracking',
        ],
      },
    },
    {
      id: 'matdeps',
      slug: 'matdeps',
      title: 'MatDeps',
      subtitle: 'Tenant & Apartment Property Management System',
      category: 'Full Stack Platform · PropTech / Management',
      status: 'completed',
      statusLabel: 'Completed Project',
      shortDescription:
        'Centralized platform for property owners and building managers: tenant tracking, apartment occupancy statuses, lease lifecycle control, monthly rent payments, and maintenance logs.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      accentColor: 'blue',
      featured: true,
      metrics: [
        { label: 'Domain', value: 'Property Management' },
        { label: 'Architecture', value: 'MERN + TypeScript' },
        { label: 'Focus', value: 'Control & Finance' },
      ],
      caseStudy: {
        problem:
          'Managing multiple apartments and tenants manually via spreadsheets causes lost traceability in monthly rent collection, missed lease expiration alerts, scattered payment receipts, and lack of visibility into each unit’s financial and maintenance history.',
        architectureOverview:
          'Full Stack web application focused on administrative and financial integrity, pairing a reactive control dashboard with a secure REST API and MongoDB persistence.',
        frontendDetails:
          'Executive interface built with React, TypeScript, and Tailwind CSS featuring clear semantic indicators for every apartment unit (Occupied, Available, Under Maintenance, Payment Overdue).',
        backendDetails:
          'Node.js + Express.js backend handling lease business logic, billing period calculations, tenant histories, and monthly financial summaries.',
        databaseDetails:
          'MongoDB schema linking apartment units, tenant profiles, active/historical leases, and monthly payment transactions.',
        securityHighlights:
          'Protection of sensitive lease agreements and personal tenant records through authenticated access controls and rigorous API input sanitization.',
        challenges: [
          'Linking the complete lifecycle of an apartment unit (multiple tenants over time, lease renewals, and maintenance incidents) without losing historical context.',
          'Surfacing at a glance which units are paid up and which have overdue balances or expiring leases.',
          'Maintaining data consistency when recording partial rent payments, building fees, or repair costs.',
        ],
        solutions: [
          'MongoDB data model separating current unit state from historical lease and payment collections for fast dashboard rendering.',
          'Semantic status system (Google Green: up to date, Yellow: expiring soon, Red: overdue) for immediate decision-making.',
          'Strictly typed TypeScript API validating every financial transaction before database commit.',
        ],
        keyFeatures: [
          'Visual unit and apartment directory with real-time occupancy status',
          'Comprehensive tenant files, guarantor records, and lease expiration tracking',
          'Monthly rent collection, building fee tracking, and payment history',
          'Per-unit maintenance requests and incident logging',
        ],
      },
    },
    {
      id: 'matclin',
      slug: 'matclin',
      title: 'MatClin',
      subtitle: 'Healthcare Clinic Appointment & Schedule Management System',
      category: 'Upcoming Project · HealthTech & Security',
      status: 'upcoming',
      statusLabel: 'Upcoming Project · In Planning',
      shortDescription:
        'Medical appointment booking and schedule management platform for healthcare clinics: multi-specialist calendars, overlap prevention, and a security-first architecture for patient privacy.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      accentColor: 'yellow',
      featured: true,
      metrics: [
        { label: 'Domain', value: 'HealthTech' },
        { label: 'Status', value: 'Architecture Phase' },
        { label: 'Priority', value: 'Data Security' },
      ],
      caseStudy: {
        problem:
          'Healthcare clinics struggle with patient no-shows, phone line congestion, scheduling conflicts across medical specialists, and the critical responsibility of safeguarding sensitive patient information under strict confidentiality standards.',
        architectureOverview:
          'Planned architecture built on TypeScript, React, Node.js, Express, and MongoDB, directly applying principles from my Higher Technical Degree in Cybersecurity for access control and auditing.',
        frontendDetails:
          'Self-service React + Tailwind CSS patient portal for booking appointments in seconds, paired with a clinical console for receptionists and doctors.',
        backendDetails:
          'Availability and scheduling engine in Node.js + Express.js featuring atomic slot locking to prevent double-booking and strict Role-Based Access Control (Patient, Reception, Doctor, Admin).',
        databaseDetails:
          'MongoDB schema designed for dynamic medical schedules (custom consultation lengths, walk-ins, specialties) and full audit trails of appointment status changes.',
        securityHighlights:
          'Cybersecurity-driven design: Role-Based Access Control (RBAC), least-privilege exposure of sensitive patient data, and audit logging.',
        challenges: [
          'Preventing race conditions when two patients attempt to book the exact same time slot with the same specialist simultaneously.',
          'Enforcing least-privilege access so each clinic role only views authorized patient and schedule data.',
          'Designing a flexible calendar engine supporting variable consultation durations, schedule blocks, and fast rescheduling.',
        ],
        solutions: [
          'Transactional validation and compound unique indexes in MongoDB per practitioner and time slot.',
          'Granular authorization middlewares engineered in Express.js with TypeScript.',
          'Interactive schedule interface with clear states (Available, Confirmed, Waiting Room, Completed, Cancelled).',
        ],
        keyFeatures: [
          'Online appointment booking filtered by medical specialty, practitioner, and live availability',
          'Reception desk console for waiting room flow, walk-ins, and confirmations',
          'Dedicated practitioner view displaying daily and weekly patient schedules',
          'Security-first architecture focused on patient confidentiality and access control',
        ],
      },
    },
  ],
};

export const SERVICES_DATA: Record<Language, ServiceItem[]> = {
  es: [
    {
      id: 'fullstack-apps',
      title: 'Desarrollo de Sistemas Web a Medida (End-to-End)',
      description:
        'Construcción completa de plataformas de gestión, paneles administrativos y aplicaciones web interactivas adaptadas al flujo real de tu negocio (como MateRun o MatDeps).',
      deliverables: [
        'Interfaz moderna y 100% responsiva en React, TypeScript y Tailwind CSS',
        'Panel de administración intuitivo con métricas y filtros en tiempo real',
        'Arquitectura escalable lista para producción',
      ],
      color: 'blue',
      iconName: 'code',
    },
    {
      id: 'backend-apis',
      title: 'Arquitectura de APIs RESTful & Backends Escalables',
      description:
        'Diseño e implementación de servidores robustos en Node.js (Express) o Python (FastAPI / Django), conectando procesos de negocio, servicios externos y bases de datos.',
      deliverables: [
        'APIs REST documentadas, rápidas y tipadas de punta a punta',
        'Integración de lógica de negocio compleja, reportes y automatizaciones',
        'Estructura modular fácil de mantener y escalar en equipo',
      ],
      color: 'green',
      iconName: 'cpu',
    },
    {
      id: 'database-design',
      title: 'Modelado y Gestión de Bases de Datos (SQL & NoSQL)',
      description:
        'Estructuración eficiente de los datos de tu empresa utilizando PostgreSQL para esquemas relacionales o MongoDB para documentos flexibles de alta velocidad.',
      deliverables: [
        'Diseño de esquemas, relaciones e índices optimizados para consultas rápidas',
        'Migración desde planillas de cálculo hacia bases de datos centralizadas',
        'Integridad y trazabilidad de registros históricos y financieros',
      ],
      color: 'yellow',
      iconName: 'database',
    },
    {
      id: 'secure-development',
      title: 'Desarrollo con Enfoque en Seguridad Informática',
      description:
        'Aplicación de principios de Ciberseguridad en el ciclo de desarrollo para proteger activos digitales, cuentas de usuarios e información sensible.',
      deliverables: [
        'Autenticación robusta y control de accesos por roles (RBAC)',
        'Validación estricta de datos y mitigación de vulnerabilidades web comunes',
        'Buenas prácticas de privacidad para sistemas de gestión, alquileres o salud',
      ],
      color: 'red',
      iconName: 'shieldCheck',
    },
  ],
  en: [
    {
      id: 'fullstack-apps',
      title: 'Custom End-to-End Web Platforms',
      description:
        'Full lifecycle development of management systems, admin dashboards, and interactive web applications tailored to your exact operational workflow (such as MateRun or MatDeps).',
      deliverables: [
        'Modern, fully responsive UI built with React, TypeScript, and Tailwind CSS',
        'Intuitive backoffice dashboard with real-time metrics and filtering',
        'Production-ready, scalable architecture',
      ],
      color: 'blue',
      iconName: 'code',
    },
    {
      id: 'backend-apis',
      title: 'RESTful API Architecture & Scalable Backends',
      description:
        'Design and implementation of robust servers using Node.js (Express) or Python (FastAPI / Django), connecting business workflows, third-party services, and databases.',
      deliverables: [
        'Well-structured, fast, and strictly typed REST APIs',
        'Complex business logic, reporting endpoints, and workflow automation',
        'Clean, modular codebase engineered for maintainability',
      ],
      color: 'green',
      iconName: 'cpu',
    },
    {
      id: 'database-design',
      title: 'Database Modeling & Optimization (SQL & NoSQL)',
      description:
        'Efficient data architecture using PostgreSQL for relational integrity or MongoDB for high-speed document flexibility.',
      deliverables: [
        'Optimized schemas, relationships, and indexes for fast queries',
        'Seamless migration from manual spreadsheets to centralized databases',
        'Data integrity and historical traceability for financial and operational records',
      ],
      color: 'yellow',
      iconName: 'database',
    },
    {
      id: 'secure-development',
      title: 'Security-First Web Development',
      description:
        'Applying Cybersecurity principles across the development lifecycle to protect digital assets, user accounts, and sensitive domain data.',
      deliverables: [
        'Robust authentication and Role-Based Access Control (RBAC)',
        'Strict input validation and mitigation of common web vulnerabilities',
        'Privacy-by-design practices for property, financial, and healthcare systems',
      ],
      color: 'red',
      iconName: 'shieldCheck',
    },
  ],
};

export const TRAJECTORY_DATA: Record<Language, TrajectoryItem[]> = {
  es: [
    {
      id: 'product-dev',
      period: 'Actualidad · Desarrollo Continuo',
      title: 'Desarrollador Web Full Stack — Ingeniería de Productos Propios',
      organization: 'Proyectos End-to-End (MateRun · MatDeps · MatClin)',
      type: 'product',
      badgeText: 'Experiencia Práctica Real',
      color: 'blue',
      description:
        'Diseño, arquitectura y desarrollo integral de aplicaciones web orientadas a resolver problemas reales en sectores deportivos, inmobiliarios y de salud.',
      highlights: [
        'Desarrollo completo de MateRun (gestión de eventos de trail running y maratones) y MatDeps (administración de departamentos e inquilinos).',
        'Planificación y diseño arquitectónico de MatClin (sistema de gestión de turnos para clínicas de salud).',
        'Implementación de punta a punta con TypeScript, React, Tailwind CSS, Node.js, Express y MongoDB.',
      ],
      tags: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    },
    {
      id: 'cybersecurity-degree',
      period: 'En Curso',
      title: 'Tecnicatura Superior en Seguridad Informática y Ciberseguridad',
      organization: 'Formación Académica Superior',
      type: 'education',
      badgeText: 'Carrera en Curso',
      color: 'red',
      description:
        'Formación técnica superior especializada en la protección de la información, seguridad en redes y sistemas, análisis de vulnerabilidades y desarrollo de software seguro.',
      highlights: [
        'Integración de principios de seguridad desde la fase de diseño arquitectónico (Secure by Design).',
        'Enfoque en integridad de datos, autenticación segura, gestión de permisos y prevención de ataques en aplicaciones web.',
        'Base sólida para construir sistemas críticos que manejan datos personales, financieros o médicos.',
      ],
      tags: ['Seguridad Informática', 'Ciberseguridad', 'OWASP', 'Protección de Datos', 'RBAC'],
    },
    {
      id: 'certifications-teamwork',
      period: 'Formación Continua',
      title: 'Certificaciones Full Stack & Proyectos Grupales Colaborativos',
      organization: 'Especialización en Ecosistemas JS/TS & Python',
      type: 'certification',
      badgeText: 'Certificaciones & Equipos',
      color: 'green',
      description:
        'Desarrollo intensivo de proyectos individuales de certificación y trabajos grupales aplicando metodologías colaborativas y control de versiones.',
      highlights: [
        'Construcción de aplicaciones con backends en Python (FastAPI y Django) y bases de datos relacionales en PostgreSQL.',
        'Trabajo colaborativo en equipo utilizando Git y GitHub: división de módulos, integración de ramas y resolución de conflictos.',
        'Práctica constante en diseño de interfaces modernas, consumo de APIs REST y modelado de bases de datos SQL y NoSQL.',
      ],
      tags: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'JavaScript', 'Git & GitHub'],
    },
  ],
  en: [
    {
      id: 'product-dev',
      period: 'Present · Ongoing Engineering',
      title: 'Full Stack Web Developer — Product Engineering',
      organization: 'End-to-End Systems (MateRun · MatDeps · MatClin)',
      type: 'product',
      badgeText: 'Hands-On Product Experience',
      color: 'blue',
      description:
        'Full-cycle design, architecture, and development of web applications built to solve real operational challenges across sports events, property management, and healthcare.',
      highlights: [
        'End-to-end engineering of MateRun (trail running & marathon event management) and MatDeps (tenant & apartment administration).',
        'Architectural planning and security modeling for MatClin (healthcare clinic appointment scheduling system).',
        'Full stack implementation powered by TypeScript, React, Tailwind CSS, Node.js, Express, and MongoDB.',
      ],
      tags: ['TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    },
    {
      id: 'cybersecurity-degree',
      period: 'In Progress',
      title: 'Higher Technical Degree in IT Security & Cybersecurity',
      organization: 'Higher Academic Education',
      type: 'education',
      badgeText: 'Current Degree',
      color: 'red',
      description:
        'Higher technical program focused on information assurance, network and system security, vulnerability assessment, and secure software development.',
      highlights: [
        'Embedding security principles directly into the software architecture phase (Secure by Design).',
        'Strong focus on data integrity, secure authentication, role authorization, and web attack mitigation.',
        'Foundational expertise for building critical systems handling personal, financial, or medical records.',
      ],
      tags: ['IT Security', 'Cybersecurity', 'OWASP', 'Data Privacy', 'RBAC'],
    },
    {
      id: 'certifications-teamwork',
      period: 'Continuous Learning',
      title: 'Full Stack Certifications & Collaborative Team Projects',
      organization: 'JS/TS & Python Ecosystem Specialization',
      type: 'certification',
      badgeText: 'Certifications & Teamwork',
      color: 'green',
      description:
        'Intensive development of certification projects and collaborative group assignments using modern team workflows and version control.',
      highlights: [
        'Developed backend services using Python (FastAPI and Django) paired with PostgreSQL relational databases.',
        'Collaborated in group engineering projects via Git and GitHub: feature branching, code integration, and peer collaboration.',
        'Hands-on mastery of responsive UI engineering, REST API consumption, and hybrid SQL/NoSQL data modeling.',
      ],
      tags: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'JavaScript', 'Git & GitHub'],
    },
  ],
};
