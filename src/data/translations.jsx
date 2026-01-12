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
      subtitle: 'Especialista en SIEM, monitoreo de seguridad y respuesta a incidentes. Experiencia en entornos cloud (Azure, AWS), manejo de herramientas defensivas y ofensivas.',
      cta1: 'Ver Experiencia',
      cta2: 'Contáctame'
    },
    about: {
      title: 'Sobre mí',
      description: 'Estudiante de Ingeniería de Sistemas (8.º semestre, tercio superior) en la Universidad de Lima y Analista SIEM con experiencia en monitoreo de seguridad, análisis de logs y detección de incidentes en entornos empresariales.',
      focus: 'Mi enfoque principal está en ciberseguridad defensiva, desarrollo de casos de uso SIEM, afinamiento de alertas y gestión de vulnerabilidades en plataformas on-premise y cloud.',
      stats: {
        experience: 'Experiencia',
        year: '1+ año',
        alerts: 'Alertas analizadas',
        integration: 'Integración SIEM',
        sources: '100% fuentes'
      }
    },
    experience: {
      title: 'Experiencia Profesional',
      current: 'Actual',
      jobs: [
        {
          company: 'NETPROVIDER',
          role: 'Analista SIEM',
          period: 'Dic 2025 - Actual',
          location: 'Lima, Perú (Híbrido)',
          description: [
            'Monitoreo y análisis continuo de alertas SIEM, identificando comportamientos anómalos, amenazas emergentes y posibles incidentes de seguridad.',
            'Diseño, ajuste y mantenimiento de reglas de correlación y casos de uso, mejorando la precisión de detección y reduciendo falsos positivos.',
            'Administración y monitoreo de la infraestructura SIEM y sus integraciones, asegurando la correcta recolección de logs.',
            'Gestión del monitoreo de seguridad en la nube en AWS y Azure.'
          ],
          achievements: [
            'Lideré la implementación del SIEM empresarial en Azure, logrando 100% de integración de fuentes de datos.',
            'Mejoré la eficiencia de respuesta a incidentes en 80% mediante optimización de flujos de alertas.'
          ]
        },
        {
          company: 'NETPROVIDER',
          role: 'Operador SOC (N1) – CyberSOC',
          period: 'Ago 2025 - Nov 2025',
          location: 'Lima, Perú (Híbrido)',
          description: [
            'Monitoreo continuo de seguridad nivel L1, triaje de alertas y clasificación inicial de eventos.',
            'Documentación, registro y escalamiento de incidentes conforme a procedimientos del SOC.'
          ],
          achievements: [
            'Apoyé el diseño y despliegue end-to-end de la arquitectura del CyberSOC en Azure.'
          ]
        },
        {
          company: 'PACIFICO SEGUROS',
          role: 'Practicante COE – Arquitectura Empresarial',
          period: 'Ene 2024 - Jun 2025',
          location: 'Lima, Perú (Híbrido)',
          description: [
            'Apoyo en implementación y gestión de infraestructuras tecnológicas seguras.',
            'Colaboración en automatización de procesos para mejorar eficiencia de TI.',
            'Optimización de arquitecturas empresariales en OCI y Azure.'
          ],
          achievements: [
            'Rediseñé la arquitectura de atención a proveedores, incrementando 70% el uso de asistencia internacional.'
          ]
        }
      ]
    },
    education: {
      title: 'Educación y Certificaciones',
      degree: {
        title: 'Ingeniería de Sistemas',
        institution: 'Universidad de Lima',
        period: '2021 - 2026 (Esperado)',
        gpa: '15.2/20 - Tercio Superior'
      },
      certifications: [
        {
          title: 'Practical Bug Bounty',
          issuer: 'TCM Security',
          description: 'Técnicas ofensivas y divulgación responsable de vulnerabilidades'
        },
        {
          title: 'Practical Web Hacking',
          issuer: 'TCM Security',
          description: 'Explotación práctica del OWASP Top 10'
        },
        {
          title: 'Oracle Cloud Infrastructure Foundations',
          issuer: 'Oracle',
          description: 'Fundamentos de arquitectura cloud y seguridad en OCI'
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
          items: ['Wazuh', 'OpenSearch', 'Incident Response', 'Log Analysis', 'Alert Tuning', 'Vulnerability Management']
        },
        cloud: {
          title: 'Plataformas Cloud',
          items: ['Microsoft Azure', 'AWS', 'Oracle Cloud (OCI)']
        },
        tools: {
          title: 'Herramientas de Seguridad',
          items: ['Kali Linux', 'Burp Suite', 'Nessus', 'OWASP ZAP', 'FortiGate', 'Active Directory']
        },
        programming: {
          title: 'Programación & Scripting',
          items: ['Python', 'Bash', 'SQL', 'PowerShell', 'Java', 'C++']
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
          tech: ['Azure', 'Wazuh', 'OpenSearch', 'AWS']
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
      cta: 'Enviar mensaje'
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
      subtitle: 'SIEM specialist in security monitoring and incident response. Experience in cloud environments (Azure, AWS), handling of defensive and offensive security tools.',
      cta1: 'View Experience',
      cta2: 'Contact Me'
    },
    about: {
      title: 'About Me',
      description: 'Systems Engineering student (8th semester, top third) at Universidad de Lima and SIEM Analyst with experience in security monitoring, log analysis, and incident detection in enterprise environments.',
      focus: 'Strong focus on defensive cybersecurity, SIEM use case development, alert tuning, and vulnerability management across on-premise and cloud platforms.',
      stats: {
        experience: 'Experience',
        year: '1+ year',
        alerts: 'Alerts analyzed',
        integration: 'SIEM Integration',
        sources: '100% sources'
      }
    },
    experience: {
      title: 'Professional Experience',
      current: 'Present',
      jobs: [
        {
          company: 'NETPROVIDER',
          role: 'SIEM Analyst',
          period: 'Dec 2025 - Present',
          location: 'Lima, Peru (Hybrid)',
          description: [
            'Continuous monitoring and analysis of SIEM alerts, identifying anomalous behavior and potential security incidents.',
            'Design, tuning, and maintenance of correlation rules and use cases, improving detection accuracy.',
            'Administration and monitoring of SIEM infrastructure and integrations, ensuring proper log collection.',
            'Management of cloud security monitoring across AWS and Azure.'
          ],
          achievements: [
            'Led the implementation of enterprise SIEM in Azure, achieving 100% integration of client data sources.',
            'Improved incident response efficiency by 80% through optimized alert workflows.'
          ]
        },
        {
          company: 'NETPROVIDER',
          role: 'SOC Operator (N1) – CyberSOC',
          period: 'Aug 2025 - Nov 2025',
          location: 'Lima, Peru (Hybrid)',
          description: [
            'Continuous L1 security monitoring, alert triage, and initial classification of security events.',
            'Documentation, logging, and escalation of incidents according to SOC procedures.'
          ],
          achievements: [
            'Supported the end-to-end design and deployment of the CyberSOC architecture on Azure.'
          ]
        },
        {
          company: 'PACIFICO SEGUROS',
          role: 'COE Intern – Enterprise Architecture',
          period: 'Jan 2024 - Jun 2025',
          location: 'Lima, Peru (Hybrid)',
          description: [
            'Supported implementation and management of secure technological infrastructures.',
            'Collaborated on process automation initiatives to improve IT efficiency.',
            'Participated in optimization of enterprise architectures in OCI and Azure.'
          ],
          achievements: [
            'Redesigned provider assistance architecture, resulting in 70% increase in international assistance usage.'
          ]
        }
      ]
    },
    education: {
      title: 'Education & Certifications',
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
          description: 'Offensive techniques and responsible vulnerability disclosure'
        },
        {
          title: 'Practical Web Hacking',
          issuer: 'TCM Security',
          description: 'Hands-on exploitation of OWASP Top 10'
        },
        {
          title: 'Oracle Cloud Infrastructure Foundations',
          issuer: 'Oracle',
          description: 'Cloud architecture and security fundamentals in OCI'
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
          items: ['Wazuh', 'OpenSearch', 'Incident Response', 'Log Analysis', 'Alert Tuning', 'Vulnerability Management']
        },
        cloud: {
          title: 'Cloud Platforms',
          items: ['Microsoft Azure', 'AWS', 'Oracle Cloud (OCI)']
        },
        tools: {
          title: 'Security Tools',
          items: ['Kali Linux', 'Burp Suite', 'Nessus', 'OWASP ZAP', 'FortiGate', 'Active Directory']
        },
        programming: {
          title: 'Programming & Scripting',
          items: ['Python', 'Bash', 'SQL', 'PowerShell', 'Java', 'C++']
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
          tech: ['Azure', 'Wazuh', 'OpenSearch', 'AWS']
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
      cta: 'Send message'
    }
  }
};