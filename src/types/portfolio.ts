export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

export type Education = {
  degree: string;
  institution: string;
  expectedGraduation: string;
};

export type SiteContent = {
  name: string;
  role: string;
  education: Education;
  hero: {
    headline: string;
    description: string;
  };
  about: string[];
  socialLinks: SocialLink[];
  resumeUrl: string;
};

export type CoreStackItem = {
  category: "Backend" | "Database" | "Web" | "Mobile";
  technology: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  screenshots: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  caseStudyUrl: string;
};
