export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Analista de Ciberseguridad',
      subtitle: 'Especialista en SIEM, monitoreo de seguridad y respuesta a incidentes. Experiencia en entornos cloud (Azure, AWS, GCP), manejo de herramientas defensivas y ofensivas.',
      cta1: 'Ver Experiencia',
      cta2: 'Contáctame',
      badge: 'Disponible para proyectos'
    },
    about: {
      title: 'Sobre mí',
      description: 'Estudiante de 9.º ciclo de Ingeniería de Sistemas en la Universidad de Lima (tercio superior), con alto rendimiento académico y gran motivación en ciberseguridad y tecnologías de la información. Me caracterizo por ser profesional, adaptable, creativo y empático, con sólidas habilidades de comunicación y trabajo en equipo.',
      focus: 'Actualmente me desempeño como Analista SIEM, con enfoque en monitoreo continuo de alertas, diseño y ajuste de reglas de correlación, investigación de incidentes, hardening de sistemas y elaboración de dashboards y métricas para equipos internos y clientes.',
      stats: {
        experience: 'Experiencia',
        year: '1+ año',
        alerts: 'Alertas analizadas',
        integration: 'Integración SIEM',
        sources: '100% fuentes'
      },
      languages: [
        { name: 'Inglés', level: 'Avanzado' },
        { name: 'Portugués', level: 'Básico' }
      ],
      languagesLabel: 'Idiomas',
      cards: [
        {
          title: 'SIEM & SOC',
          desc: 'Monitoreo 24/7, análisis de alertas y respuesta a incidentes'
        },
        {
          title: 'Cloud Security',
          desc: 'Azure, AWS, GCP y OCI — Infraestructura segura en la nube'
        },
        {
          title: 'Integración SIEM',
          desc: '100% fuentes de datos integradas en producción'
        }
      ]
    },
    experience: {
      title: 'Experiencia Profesional',
      current: 'Actual',
      responsibilities: 'Responsabilidades',
      achievements: 'Logros Clave',
      jobs: [
        {
          company: 'NETPROVIDER',
          role: 'Analista SIEM',
          period: 'Dic 2025 - Actual',
          location: 'Lima, Perú (Híbrido)',
          description: [
            'Monitoreo continuo de alertas SIEM (Wazuh, Elastic) para identificar comportamientos anómalos, amenazas emergentes y actividades potencialmente maliciosas.',
            'Diseño y ajuste de reglas de correlación, afinando umbrales, creando casos de uso y optimizando la calidad del proceso de detección.',
            'Investigación y análisis de incidentes de seguridad, evaluando impacto, alcance y recomendando acciones de contención y mitigación.',
            'Gestión y monitoreo de infraestructura on-premise, asegurando la correcta recolección de logs, integraciones y disponibilidad de agentes.',
            'Administración de entornos cloud Azure, supervisando servicios, logs, IAM, cargas de trabajo y configuraciones de seguridad.',
            'Administración de la infraestructura del CyberSOC en Azure, garantizando la disponibilidad, rendimiento y seguridad continua de la plataforma operativa.',
            'Automatización de procesos operativos mediante scripts y herramientas de orquestación para mejorar tiempos de respuesta y eficiencia operativa.',
            'Elaboración de reportes, dashboards y métricas de seguridad para equipos internos y clientes.',
            'Revisión de configuraciones y hardening en sistemas, servidores y servicios críticos.',
            'Participación en actividades de mejora continua, auditorías internas y revisiones de postura de seguridad.'
          ],
          achievements: [
            'Lideré la implementación del SIEM empresarial en Azure, logrando 100% de integración de fuentes de datos.',
            'Mejoré la eficiencia de respuesta a incidentes en 80% mediante optimización de flujos de alertas.'
          ]
        },
        {
          company: 'NETPROVIDER',
          role: 'Operador N1 CyberSOC',
          period: 'Ago 2025 - Dic 2025',
          location: 'Lima, Perú (Híbrido)',
          description: [
            'Monitoreo continuo de eventos y alertas de seguridad a través de plataformas SIEM.',
            'Detección y clasificación inicial de incidentes de ciberseguridad.',
            'Escalamiento oportuno de incidentes a niveles superiores según procedimientos establecidos.',
            'Registro, documentación y seguimiento de eventos de seguridad.',
            'Soporte en la investigación y respuesta inicial ante amenazas detectadas.',
            'Colaboración con analistas y arquitectos de seguridad para optimizar procesos y capacidades defensivas.',
            'Cumplimiento de procedimientos y políticas de seguridad de la información.'
          ],
          achievements: [
            'Apoyé el diseño y despliegue de extremo a extremo de la arquitectura del CyberSOC en Azure, logrando 100% de preparación operativa.'
          ]
        },
        {
          company: 'PACIFICO SEGUROS',
          role: 'Practicante de COE DE ARQUITECTURA EMPRESARIAL Y TI',
          period: 'Ene 2024 - Jun 2025',
          location: 'Lima, Perú (Híbrido)',
          description: [
            'Apoyo en la implementación y gestión de infraestructuras tecnológicas seguras, aplicando patrones de arquitectura, estándares de seguridad y lineamientos del COE.',
            'Colaboración en iniciativas de automatización de procesos para mejorar la eficiencia y reducir los tiempos de respuesta de TI.',
            'Participación en la optimización de arquitecturas empresariales en OCI y Azure, asegurando el cumplimiento de estándares de seguridad y arquitectura.'
          ],
          achievements: [
            'Rediseñé la arquitectura del sistema de seguros internacionales, mejorando la disponibilidad, seguridad y eficiencia operativa, lo que resultó en un incremento del 70% en su adopción.'
          ]
        }
      ]
    },
    education: {
      title: 'Educación y Certificaciones',
      certificationTitle: 'Certificaciones',
      degree: {
        title: 'Ingeniería de Sistemas',
        institution: 'Universidad de Lima',
        period: '2021 - 2026 (Esperado)',
        gpa: '15.2/20 · GPA 3.04/4.0 - Tercio Superior'
      },
      certifications: [
        {
          title: 'Practical Bug Bounty',
          issuer: 'TCM Security',
          date: 'Mar 2025',
          description: 'Técnicas ofensivas y divulgación responsable de vulnerabilidades'
        },
        {
          title: 'Practical Web Hacking',
          issuer: 'TCM Security',
          date: 'Mar 2025',
          description: 'Explotación práctica del OWASP Top 10'
        },
        {
          title: 'OCI 2024 Data Foundations Associate',
          issuer: 'Oracle',
          date: 'Nov 2024',
          description: 'Gestión de datos en OCI: Autonomous DB, MySQL, NoSQL y servicios de analítica'
        },
        {
          title: 'OCI 2024 AI Foundations Associate',
          issuer: 'Oracle',
          date: 'Nov 2024',
          description: 'Fundamentos de IA/ML, deep learning y herramientas de IA generativa en OCI'
        },
        {
          title: 'OCI 2024 Certified Foundations Associate',
          issuer: 'Oracle',
          date: 'Sep 2024',
          description: 'Fundamentos de arquitectura cloud, seguridad, gobernanza y facturación en OCI'
        },
        {
          title: 'Introduction to Cybersecurity',
          issuer: 'Cisco Networking Academy',
          date: 'Nov 2023',
          description: 'Vulnerabilidades de red, privacidad de datos y mejores prácticas de ciberseguridad'
        },
        {
          title: '6to Congreso Internacional de Ingeniería de Sistemas',
          issuer: 'Universidad de Lima',
          date: 'Oct 2023',
          description: 'Participación en congreso académico internacional de sistemas e innovación tecnológica'
        },
        {
          title: '5to Congreso Internacional de Ingeniería de Sistemas',
          issuer: 'Universidad de Lima',
          date: 'Oct 2022',
          description: 'Participación en congreso académico internacional de sistemas e innovación tecnológica'
        }
      ],
      leadership: {
        title: 'CERC - Círculo de Redes y Ciberseguridad',
        role: 'Fundador',
        period: 'May 2025 - Presente',
        description: 'Grupo estudiantil enfocado en ciberseguridad y redes, promoviendo aprendizaje práctico mediante CTFs y laboratorios de seguridad.'
      }
    },
    skills: {
      title: 'Habilidades Técnicas',
      categories: {
        security: {
          title: 'Seguridad & SIEM',
          items: ['Wazuh', 'Elastic', 'OpenSearch', 'Incident Response', 'Log Analysis', 'Alert Tuning', 'Vulnerability Management', 'Hardening']
        },
        cloud: {
          title: 'Plataformas Cloud',
          items: ['Microsoft Azure', 'AWS', 'Google Cloud (GCP)', 'Oracle Cloud (OCI)']
        },
        tools: {
          title: 'Herramientas de Seguridad',
          items: ['Linux', 'Kali Linux', 'Parrot OS', 'Burp Suite', 'Nessus', 'OWASP ZAP', 'FortiGate', 'Active Directory']
        },
        programming: {
          title: 'Programación & Scripting',
          items: ['Python', 'Bash', 'SQL', 'PowerShell', 'Java', 'C++', 'C', 'CSS', 'React']
        },
        automation: {
          title: 'Automatización',
          items: ['Power Automate', 'Power BI', 'OSINT Tools']
        },
        hardware: {
          title: 'Hardware',
          items: ['Arduino', 'ESP32', 'Wi-Fi Pineapple']
        }
      }
    },
    projects: {
      title: 'Proyectos Destacados',
      items: [
        {
          title: 'Implementación SIEM Empresarial',
          description: 'Diseño y despliegue de SIEM en Azure con integración completa de fuentes de datos (firewalls, AWS, servidores). Reducción de 80% en tiempo de respuesta a incidentes.',
          tech: ['Azure', 'Wazuh', 'Elastic', 'AWS']
        },
        {
          title: 'CyberSOC Architecture',
          description: 'Arquitectura end-to-end de SOC en Azure, incluyendo workflows de triaje, correlación de alertas y procedimientos de escalamiento.',
          tech: ['Azure', 'SIEM', 'SOC Procedures']
        },
        {
          title: 'CERC - Círculo de Ciberseguridad',
          description: 'Fundación y liderazgo de grupo estudiantil enfocado en CTFs, laboratorios prácticos y técnicas ofensivas/defensivas.',
          tech: ['CTF', 'Pentesting', 'Blue Team']
        }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Interesado en colaborar? Escríbeme',
      email: 'alejandro_cabero@outlook.com',
      phone: '+51 998901680',
      location: 'Lima, Perú',
      linkedin: 'AlejandroCaberoNacimento',
      cta: 'Enviar mensaje',
      labels: {
        phone: 'Teléfono',
        location: 'Ubicación'
      }
    }
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Cybersecurity Analyst',
      subtitle: 'SIEM specialist in security monitoring and incident response. Experience in cloud environments (Azure, AWS, GCP), handling of defensive and offensive security tools.',
      cta1: 'View Experience',
      cta2: 'Contact Me',
      badge: 'Available for projects'
    },
    about: {
      title: 'About Me',
      description: 'Systems Engineering student in my 9th semester at Universidad de Lima (top third), with strong academic performance and high motivation in cybersecurity and information technologies. I am professional, adaptable, creative and empathetic, with strong communication and teamwork skills.',
      focus: 'Currently working as a SIEM Analyst, focused on continuous alert monitoring, correlation rule design and tuning, incident investigation, system hardening, and creation of security dashboards and metrics for internal teams and clients.',
      stats: {
        experience: 'Experience',
        year: '1+ year',
        alerts: 'Alerts analyzed',
        integration: 'SIEM Integration',
        sources: '100% sources'
      },
      languages: [
        { name: 'English', level: 'Advanced' },
        { name: 'Portuguese', level: 'Basic' }
      ],
      languagesLabel: 'Languages',
      cards: [
        {
          title: 'SIEM & SOC',
          desc: '24/7 monitoring, alert analysis and incident response'
        },
        {
          title: 'Cloud Security',
          desc: 'Azure, AWS, GCP and OCI — Secure cloud infrastructure'
        },
        {
          title: 'SIEM Integration',
          desc: '100% data sources integrated in production'
        }
      ]
    },
    experience: {
      title: 'Professional Experience',
      current: 'Present',
      responsibilities: 'Responsibilities',
      achievements: 'Key Achievements',
      jobs: [
        {
          company: 'NETPROVIDER',
          role: 'SIEM Analyst',
          period: 'Dec 2025 - Present',
          location: 'Lima, Peru (Hybrid)',
          description: [
            'Continuous monitoring of SIEM alerts (Wazuh, Elastic) to identify anomalous behaviors, emerging threats and potentially malicious activities.',
            'Design and tuning of correlation rules, adjusting thresholds, creating use cases and optimizing detection quality.',
            'Investigation and analysis of security incidents, assessing impact, scope and recommending containment and mitigation actions.',
            'Management and monitoring of on-premise infrastructure, ensuring correct log collection, integrations and agent availability.',
            'Administration of Azure cloud environments, supervising services, logs, IAM, workloads and security configurations.',
            'Administration of the CyberSOC infrastructure in Azure, ensuring continuous availability, performance, and security of the operational platform.',
            'Automation of operational processes through scripts and orchestration tools to improve response times and operational efficiency.',
            'Creation of security reports, dashboards and metrics for internal teams and clients.',
            'Review of configurations and hardening in critical systems, servers and services.',
            'Participation in continuous improvement activities, internal audits and security posture reviews.'
          ],
          achievements: [
            'Led the implementation of enterprise SIEM in Azure, achieving 100% integration of client data sources.',
            'Improved incident response efficiency by 80% through optimized alert workflows.'
          ]
        },
        {
          company: 'NETPROVIDER',
          role: 'SOC Operator N1 – CyberSOC',
          period: 'Aug 2025 - Dec 2025',
          location: 'Lima, Peru (Hybrid)',
          description: [
            'Continuous monitoring of security events and alerts through SIEM platforms.',
            'Initial detection and classification of cybersecurity incidents.',
            'Timely escalation of incidents to higher levels according to established procedures.',
            'Recording, documentation and tracking of security events.',
            'Support in initial investigation and response to detected threats.',
            'Collaboration with security analysts and architects to optimize defensive processes and capabilities.',
            'Compliance with information security procedures and policies.'
          ],
          achievements: [
            'Supported the end-to-end design and deployment of the CyberSOC architecture on Azure, achieving 100% operational readiness.'
          ]
        },
        {
          company: 'PACIFICO SEGUROS',
          role: 'COE Intern – Enterprise Architecture & IT',
          period: 'Jan 2024 - Jun 2025',
          location: 'Lima, Peru (Hybrid)',
          description: [
            'Supported the implementation and management of secure technological infrastructures, applying architecture patterns, security standards, and COE guidelines.',
            'Collaborated on process automation initiatives to improve efficiency and reduce IT response times.',
            'Participated in the optimization of enterprise architectures in OCI and Azure, ensuring compliance with security and architecture standards.'
          ],
          achievements: [
            'Redesigned the international insurance system architecture, improving availability, security, and operational efficiency, resulting in a 70% increase in adoption.'
          ]
        }
      ]
    },
    education: {
      title: 'Education & Certifications',
      certificationTitle: 'Certifications',
      degree: {
        title: 'Systems Engineering',
        institution: 'Universidad de Lima',
        period: '2021 - 2026 (Expected)',
        gpa: 'GPA: 3.04/4.0 - Top Third'
      },
      certifications: [
        {
          title: 'Practical Bug Bounty',
          issuer: 'TCM Security',
          date: 'Mar 2025',
          description: 'Offensive techniques and responsible vulnerability disclosure'
        },
        {
          title: 'Practical Web Hacking',
          issuer: 'TCM Security',
          date: 'Mar 2025',
          description: 'Hands-on exploitation of OWASP Top 10'
        },
        {
          title: 'OCI 2024 Data Foundations Associate',
          issuer: 'Oracle',
          date: 'Nov 2024',
          description: 'OCI data management: Autonomous DB, MySQL, NoSQL and analytics services'
        },
        {
          title: 'OCI 2024 AI Foundations Associate',
          issuer: 'Oracle',
          date: 'Nov 2024',
          description: 'AI/ML fundamentals, deep learning and generative AI tools in OCI'
        },
        {
          title: 'OCI 2024 Certified Foundations Associate',
          issuer: 'Oracle',
          date: 'Sep 2024',
          description: 'Cloud architecture, security, governance and billing fundamentals in OCI'
        },
        {
          title: 'Introduction to Cybersecurity',
          issuer: 'Cisco Networking Academy',
          date: 'Nov 2023',
          description: 'Network vulnerabilities, data privacy and cybersecurity best practices'
        },
        {
          title: '6th International Systems Engineering Congress',
          issuer: 'Universidad de Lima',
          date: 'Oct 2023',
          description: 'Participation in international academic congress on systems and tech innovation'
        },
        {
          title: '5th International Systems Engineering Congress',
          issuer: 'Universidad de Lima',
          date: 'Oct 2022',
          description: 'Participation in international academic congress on systems and tech innovation'
        }
      ],
      leadership: {
        title: 'CERC - Networking and Cybersecurity Circle',
        role: 'Founder',
        period: 'May 2025 - Present',
        description: 'Student-led group focused on cybersecurity and networking, promoting hands-on learning through CTFs and security labs.'
      }
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        security: {
          title: 'Security & SIEM',
          items: ['Wazuh', 'Elastic', 'OpenSearch', 'Incident Response', 'Log Analysis', 'Alert Tuning', 'Vulnerability Management', 'Hardening']
        },
        cloud: {
          title: 'Cloud Platforms',
          items: ['Microsoft Azure', 'AWS', 'Google Cloud (GCP)', 'Oracle Cloud (OCI)']
        },
        tools: {
          title: 'Security Tools',
          items: ['Linux', 'Kali Linux', 'Parrot OS', 'Burp Suite', 'Nessus', 'OWASP ZAP', 'FortiGate', 'Active Directory']
        },
        programming: {
          title: 'Programming & Scripting',
          items: ['Python', 'Bash', 'SQL', 'PowerShell', 'Java', 'C++', 'C', 'CSS', 'React']
        },
        automation: {
          title: 'Automation',
          items: ['Power Automate', 'Power BI', 'OSINT Tools']
        },
        hardware: {
          title: 'Hardware',
          items: ['Arduino', 'ESP32', 'Wi-Fi Pineapple']
        }
      }
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          title: 'Enterprise SIEM Implementation',
          description: 'Design and deployment of SIEM in Azure with complete data source integration (firewalls, AWS, servers). 80% reduction in incident response time.',
          tech: ['Azure', 'Wazuh', 'Elastic', 'AWS']
        },
        {
          title: 'CyberSOC Architecture',
          description: 'End-to-end SOC architecture on Azure, including triage workflows, alert correlation, and escalation procedures.',
          tech: ['Azure', 'SIEM', 'SOC Procedures']
        },
        {
          title: 'CERC - Cybersecurity Circle',
          description: 'Founded and led student group focused on CTFs, practical labs, and offensive/defensive techniques.',
          tech: ['CTF', 'Pentesting', 'Blue Team']
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Interested in collaborating? Get in touch',
      email: 'alejandro_cabero@outlook.com',
      phone: '+51 998901680',
      location: 'Lima, Peru',
      linkedin: 'AlejandroCaberoNacimento',
      cta: 'Send message',
      labels: {
        phone: 'Phone',
        location: 'Location'
      }
    }
  }
};
