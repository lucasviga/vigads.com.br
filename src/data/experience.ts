export const experience = [
  {
    id: "grupo-clickip-senior",
    role: "Senior Software Engineer",
    employmentType: "Contractor",
    workModel: "Remote",
    period: {
      start: "2020-01",
      end: null,
      current: true,
      label: "Jan 2020 – Present",
    },
    location: {
      city: "Manaus",
      state: "AM",
      country: "Brazil",
    },
    company: {
      name: "Grupo Clickip Tecnologia",
      description:
        "Develops software solutions for Internet Service Providers (ISPs), telecommunications companies, and internal business operations.",
    },
    summary:
      "Works across the full product lifecycle — architecture, technical leadership, product discovery, and delivery — with Product, Design, Backend, and stakeholders.",
    responsibilities: [
      "Leading frontend technical decisions and establishing engineering standards",
      "Working closely with Backend Engineers to design scalable system architectures",
      "Mentoring developers through code reviews, technical discussions, and knowledge sharing",
      "Building and maintaining production software for web and mobile platforms",
      "Automating build, testing, and deployment pipelines using GitHub Actions",
    ],
    projects: [
      {
        name: "Interactive Notification System (INS)",
        overview:
          "Communication platform that automates customer notifications through the WhatsApp Business API and integrates with the company ERP.",
        contributions: [
          "Participated in product discovery, software architecture, and implementation",
          "Designed scalable administrative interfaces",
          "Introduced Cache-Aside caching with Redis",
        ],
      },
      {
        name: "Customer Portal (Web & Mobile)",
        overview:
          "Self-service platform for subscribers to manage internet services, invoices, payments, and support requests on web and mobile.",
        contributions: [
          "Developed the customer web portal",
          "Built the company's first React Native application",
          "Published Android and iOS applications",
        ],
      },
      {
        name: "Customer Support Chatbot",
        overview:
          "WhatsApp chatbot that automates support with self-service flows for invoices, account info, equipment restart, and requests.",
        contributions: [
          "Defined chatbot architecture and conversation flows",
          "Designed integration strategies",
          "Implemented chatbot workflows",
        ],
      },
      {
        name: "Event Monitor",
        overview:
          "Internal platform for operational teams to manage outages and planned maintenance while notifying affected customers.",
        contributions: [
          "Developed backend services",
          "Implemented REST APIs",
          "Built notification processing workflows",
        ],
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Zustand",
      "TypeScript",
    ],
  },
  {
    id: "grupo-clickip-support",
    role: "IT Support Technician",
    employmentType: "Employee",
    period: {
      start: "2019-01",
      end: "2019-09",
      current: false,
      label: "Jan 2019 – Sep 2019",
    },
    location: {
      city: "Manaus",
      state: "AM",
      country: "Brazil",
    },
    company: {
      name: "Grupo Clickip Tecnologia",
      description:
        "Internet services company providing residential and business connectivity.",
    },
    summary:
      "Provided technical support for residential and business internet customers while collaborating with network infrastructure teams.",
    responsibilities: [
      "Diagnose internet connectivity issues",
      "Support residential and business customers",
      "Monitor network infrastructure",
      "Update website content",
      "Escalate incidents to infrastructure teams",
    ],
    technologies: ["Grafana", "Zabbix", "Networking", "HTML", "CSS"],
  },
  {
    id: "trt11-intern",
    role: "IT Intern",
    employmentType: "Internship",
    period: {
      start: "2018-01",
      end: "2018-12",
      current: false,
      label: "Jan 2018 – Dec 2018",
    },
    location: {
      city: "Manaus",
      state: "AM",
      country: "Brazil",
    },
    company: {
      name: "Tribunal Regional do Trabalho da 11ª Região (TRT11)",
      description:
        "Regional Labor Court supporting internal systems for the payments department.",
    },
    summary:
      "Supported enterprise systems used by the payments department while gaining experience with Oracle databases and software maintenance.",
    responsibilities: [
      "Support enterprise software migration",
      "Write SQL queries for Oracle Database",
      "Maintain production data",
      "Fix software defects",
      "Support internal users",
    ],
    technologies: ["Oracle Database", "SQL", "PL/SQL", "Git", "Windows"],
  },
];
