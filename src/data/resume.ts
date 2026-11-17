import { currentExperience } from "@/data/experience";
import { technologyGroups } from "@/data/stack";
import type { ResumeContent } from "@/types/portfolio";

export const resume: ResumeContent = {
  summary:
    "Junior full-stack developer and final-year Computer Science student gaining professional experience with Next.js, React, Express, and MySQL while bringing project experience in Spring Boot, PostgreSQL, and React Native.",
  experience: [currentExperience],
  skillGroups: technologyGroups,
  selectedProjectSlugs: ["notiva", "quickseat", "readora"],
  downloadUrl: "/resume/Kyaw_Kyaw_Hsan_Resume.pdf",
};
