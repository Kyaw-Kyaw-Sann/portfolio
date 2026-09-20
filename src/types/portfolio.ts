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

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type FeatureGroup = {
  title: string;
  features: string[];
};

export type TechnologyRole = {
  technology: string;
  responsibility: string;
};

export type ProjectWorkflow = {
  title: string;
  steps: string[];
  note?: string;
};

export type ProjectCaseStudy = {
  overview: string;
  problem: string;
  solution: string;
  systemArchitecture: string[];
  featureGroups: FeatureGroup[];
  engineeringChallenge: string;
  technicalDecisions: string[];
  learnings: string[];
  technologyRoles?: TechnologyRole[];
  workflow?: ProjectWorkflow;
  highlightFirstScreenshot?: boolean;
  plannedFeatures?: string[];
};

export type Project = {
  status: "completed" | "in-progress";
  statusLabel: string;
  progressSummary?: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  screenshots: Screenshot[];
  githubUrl: string | null;
  liveUrl: string | null;
  caseStudyUrl: string;
  caseStudy: ProjectCaseStudy;
};
