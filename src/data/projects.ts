import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "readora",
    name: "Readora",
    tagline: "Personalized digital reading platform.",
    description:
      "Personalized digital reading platform for discovering, reading, listening to, and managing books across mobile and web.",
    stack: ["Spring Boot", "PostgreSQL", "React Native", "Next.js"],
    highlights: [
      "Cross-platform architecture with a React Native customer app, Next.js landing and admin interfaces, Spring Boot API, and PostgreSQL.",
      "Personalized discovery with interests, categories, recommendations, favorites, and search.",
      "PDF and audio consumption with reading and listening progress tracking, plus admin management.",
    ],
    screenshots: [],
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/readora",
  },
  {
    slug: "quickseat",
    name: "QuickSeat",
    tagline: "Cinema booking and ticket validation platform.",
    description:
      "Cinema booking and ticket validation platform with role-based customer, staff, and admin workflows.",
    stack: ["Spring Boot", "PostgreSQL", "Next.js"],
    highlights: [
      "Seat selection and booking workflow with seat status and countdown handling.",
      "Showtime and cinema management with role-based access.",
      "QR ticket generation and staff validation workflow.",
    ],
    screenshots: [],
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/quickseat",
  },
  {
    slug: "notiva",
    name: "Notiva",
    tagline: "AI-assisted personal knowledge workspace.",
    description:
      "AI-assisted personal knowledge workspace for creating, organizing, searching, and interacting with notes.",
    stack: ["Spring Boot", "PostgreSQL", "Next.js", "AI Integration"],
    highlights: [
      "Rich-text note management with categories, favorites, pinned notes, search, recycle bin, and version history.",
      "AI features including chat, summaries, writing assistance, smart organization, and title generation.",
      "PWA and offline-oriented knowledge management experience.",
    ],
    screenshots: [],
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/notiva",
  },
];
