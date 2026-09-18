export const resume = {
  phone: "09 442 620 764",
  phoneUrl: "tel:+959442620764",
  profile: "Final-year Computer University student with hands-on experience building web and mobile applications using Spring Boot, Next.js, and React Native. Experienced with REST APIs, databases, and responsive interfaces through independent and collaborative projects. Seeking a software development internship to contribute and learn in a professional team.",
  skills: [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python"] },
    { category: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Tailwind CSS", "shadcn/ui"] },
    { category: "Backend & Data", items: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "pgvector"] },
    { category: "Tools", items: ["Git", "GitHub", "Docker", "Codex", "Notion"] },
  ],
  experience: {
    title: "Mentored software development",
    duration: "30-day development cycle",
    highlights: [
      "Developed applications through a structured mentorship program, collaborating with team members and following iterative development practices.",
      "Improved coding, debugging, and problem-solving skills through hands-on projects.",
    ],
  },
  projects: [
    { name: "QuickSeat", tagline: "Cinema Ticket-Booking Platform", stack: ["Spring Boot", "Next.js", "PostgreSQL"], href: "/projects/quickseat", highlights: ["Built full-stack booking flows with temporary seat holds and automatic expiration to reduce duplicate bookings.", "Implemented QR-based ticket generation and validation for cinema staff."] },
    { name: "Notiva", tagline: "AI-Powered Knowledge Management App", stack: ["Spring Boot", "Next.js", "PostgreSQL", "pgvector"], href: "/projects/notiva", highlights: ["Built rich-text note management with categorization, soft deletion, and version-history recovery.", "Implemented a RAG workflow for semantic note search and AI-assisted conversations."] },
    { name: "Readora", tagline: "Personalized Digital Library App", stack: ["React Native", "Next.js", "Spring Boot"], href: "/projects/readora", highlights: ["Developed a mobile reading app and admin dashboard with interest-based book recommendations.", "Integrated PDF reading, audiobook playback, and progress tracking with saved positions."] },
    { name: "DevCom_Next", tagline: "Team Development Project", stack: ["Admin dashboard frontend contributor"], href: null, highlights: ["Contributed admin dashboard frontend implementation in a collaborative development repository."] },
  ],
  languages: ["Burmese (Native)", "English (Intermediate)"],
};
