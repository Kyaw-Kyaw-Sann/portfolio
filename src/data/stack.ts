import type { CoreStackItem, TechnologyGroup } from "@/types/portfolio";

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Current focus",
    focus: "current",
    technologies: ["Next.js", "React", "Express", "MySQL"],
    description: "The stack I am currently using and strengthening through professional project work.",
  },
  {
    title: "Additional experience",
    focus: "additional",
    technologies: ["Spring Boot", "PostgreSQL", "React Native"],
    description: "Technologies used across my completed full-stack and cross-platform projects.",
  },
];

export const coreStack: CoreStackItem[] = [
  {
    category: "Backend",
    technology: "Express / Spring Boot",
  },
  {
    category: "Database",
    technology: "MySQL / PostgreSQL",
  },
  {
    category: "Web",
    technology: "Next.js / React",
  },
  {
    category: "Mobile",
    technology: "React Native",
  },
];
