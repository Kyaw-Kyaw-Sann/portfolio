# AGENTS.md

## Interaction Rules

- The user may ask questions in English, but always respond in Myanmar language.

- Never add, update, remove, rename, move, fix, or modify any code, file, folder, configuration, dependency, or project structure without explicit permission.

- Do not make any project changes unless the user explicitly says the exact phrase:

  "Build Now"

- Before the phrase "Build Now" is given, only:
  - discuss
  - explain
  - review
  - plan
  - suggest
  - provide commands or code snippets without applying them

- When the user says "Build Now", you may make only the changes that were discussed or explicitly requested.

- Do not interpret similar phrases such as "go ahead", "continue", "start", "do it", or "proceed" as permission to modify the project.

- If "Build Now" has not been explicitly provided, do not modify the project.



## Project Overview

This repository contains a professional developer portfolio website for **Kyaw Kyaw Han**, a junior full-stack developer.

The portfolio is built for **job hunting**, with a strong focus on proving practical engineering ability through real projects.

The portfolio should NOT behave like an online CV with many sections.

Its main purpose is to make it easy for recruiters and developers to quickly understand:

1. Who I am
2. What my core tech stack is
3. What real projects I have built
4. How I think about software engineering
5. Where they can verify my work

---

## Primary Goal

Build a clean, modern, professional, project-first developer portfolio that presents strong evidence of full-stack engineering skills.

The site should communicate:

> I build complete web and mobile products using Spring Boot, PostgreSQL, Next.js, and React Native.

The target role is:

> Junior Full-Stack Developer

The target job market is primarily Myanmar, but the portfolio should look professional enough for international opportunities as well.

---

## Core Tech Stack to Highlight

The portfolio should focus only on these core technologies:

- Java
- Spring Boot
- PostgreSQL
- Next.js
- TypeScript
- React
- React Native

Other technologies may appear only when they are genuinely relevant to a project.

Do not turn the portfolio into a large technology logo wall.

---

## Flagship Projects

There are three main flagship projects.

### 1. Readora

Type:
Personalized digital reading platform

Tech stack:

- Spring Boot
- PostgreSQL
- React Native
- Next.js

Architecture:

- React Native customer mobile app
- Next.js landing page
- Next.js admin dashboard
- Spring Boot backend API
- PostgreSQL database

Important areas:

- Authentication
- Google authentication
- Role-based access control
- Personalized book discovery
- Categories and search
- Favorites
- PDF reading
- Audio listening
- Reading progress
- Listening progress
- Recently reading
- Reviews and ratings
- Subscription-aware access
- Personal library
- Admin management
- Landing page

Portfolio positioning:

> Full-stack + mobile ecosystem proof

This should be treated as the primary flagship project unless there is a strong reason to change it.

---

### 2. QuickSeat

Type:
Cinema booking and ticket validation platform

Tech stack:

- Spring Boot
- PostgreSQL
- Next.js

Important areas:

- Authentication
- Role-based access
- Movie discovery
- Cinema and showtimes
- Seat selection
- Booking flow
- Seat status
- Booking countdown
- Mock payment
- Ticket generation
- QR ticket validation
- Staff operations
- Admin operations

Portfolio positioning:

> Business logic + booking workflow proof

Important engineering topics:

- Seat availability
- Preventing invalid or conflicting bookings
- Showtime rules
- Booking state
- QR validation
- Role permissions

---

### 3. Notiva

Type:
AI-assisted personal knowledge workspace

Tech stack:

- Spring Boot
- PostgreSQL
- Next.js
- AI integration

Important areas:

- Authentication
- Categories
- Notes CRUD
- Favorites
- Pinned notes
- Rich text editor
- Search and filtering
- Recycle bin
- Soft delete
- Version management
- PWA
- Offline support
- AI chat
- AI summaries
- AI writing
- Smart organization
- AI title generation
- Chat history
- Querying across notes
- AI usage limits

Portfolio positioning:

> AI integration + product UX proof

The AI functionality should be presented as part of a real product, not as an AI gimmick.

---

## Portfolio Information Architecture

Keep the portfolio intentionally small.

### Main Home Page

The homepage should follow this structure:

1. Navbar
2. Hero
3. Featured Projects
4. Core Stack
5. Short About
6. Contact
7. Footer

Do not add unnecessary CV-style sections.

Avoid adding:

- Large education sections
- Certificate walls
- Language sections
- Large soft-skill sections
- Long work-history sections
- Testimonials unless they are real and valuable
- Blog unless real technical writing exists
- Skill percentage bars

---

## Homepage Flow

The homepage should support this user journey:

```text
Open portfolio
↓
Understand who the developer is
↓
Understand core technologies
↓
See three real flagship projects
↓
Open a project case study
↓
Understand architecture and engineering decisions
↓
View live demo
↓
Verify code on GitHub
↓
Open resume or contact
```

The site should optimize for this flow.

---

## Navbar

Keep it simple.

Recommended items:

- Projects
- About
- Resume
- GitHub
- Contact

The developer name or simple logo should appear on the left.

Do not overcrowd the navbar.

A sticky navbar is acceptable if it remains subtle.

---

## Hero Section

The hero should communicate the developer identity within a few seconds.

Suggested content direction:

Badge:

> Junior Full-Stack Developer

Headline direction:

> I build practical web and mobile applications.

Supporting message should mention:

- Spring Boot
- PostgreSQL
- Next.js
- React Native

Primary actions:

- View Projects
- Resume

Optional secondary link:

- GitHub

The hero may include a clean visual mockup of Readora.

Avoid:

- Large animated backgrounds
- 3D objects
- particles
- custom cursors
- excessive gradients
- complicated stats
- too many badges

---

## Featured Projects Section

This is the most important section of the homepage.

Recommended order:

1. Readora
2. QuickSeat
3. Notiva

Each project preview should contain:

- Project name
- One-line product description
- Core tech stack
- 2–3 strongest engineering proof points
- One strong screenshot or mockup
- Case Study link
- GitHub link
- Live Demo link when available

Do not display every feature on the homepage.

The project cards should create interest, not fully document the project.

---

## Project Case Study Pages

Create reusable case study pages for:

- `/projects/readora`
- `/projects/quickseat`
- `/projects/notiva`

Use a consistent layout.

Recommended structure:

1. Project Hero
2. Overview
3. Problem
4. Solution
5. System Architecture
6. Key Features
7. Main Engineering Challenge
8. Technical Decisions
9. Screenshots
10. What I Learned
11. Live Demo / GitHub CTA

Avoid giant feature lists.

Group features by system or responsibility.

---

## Readora Case Study Focus

Group features into areas such as:

### Identity & Access

- Registration
- Login
- Google authentication
- Verification
- Password recovery
- Role-based access

### Discovery

- Interests
- Categories
- Search
- Recommendations
- Favorites
- Popular and recently added books

### Reading & Listening

- PDF reading
- Audio listening
- Reading progress
- Listening progress
- Continue reading

### Library & Community

- Personal library
- Reviews
- Ratings

### Subscription

- Free and premium access
- Subscription-aware content access

### Admin

- Overview
- Books
- Categories
- Users
- Reviews

Main engineering deep dive:

> Cross-platform architecture and reading/progress flow

---

## QuickSeat Case Study Focus

Group features into areas such as:

### Identity & Roles

- Customer
- Staff
- Admin

### Discovery

- Movies
- Cinemas
- Dates
- Showtimes

### Booking

- Seat selection
- Seat states
- Countdown
- Booking
- Mock payment

### Tickets

- Ticket generation
- QR code
- QR validation

### Operations

- Showtime management
- Staff tools
- Admin tools

Main engineering deep dive:

> Seat booking integrity and booking workflow

---

## Notiva Case Study Focus

Group features into areas such as:

### Knowledge Management

- Notes
- Categories
- Favorites
- Pinned notes
- Search
- Filters

### Rich Editing

- Rich text editor
- Formatting
- Images
- Code
- Lists
- Checkboxes

### Recovery & History

- Recycle bin
- Soft delete
- Version history

### Offline Experience

- PWA
- Offline support

### AI Assistance

- Chat
- Summaries
- Writing assistance
- Smart organization
- Title generation
- Cross-note querying
- Chat history
- AI limits

Main engineering deep dive:

> AI context integration inside a real knowledge management product

---

## Core Stack Section

Keep this section small.

Use four main categories:

### Backend

Spring Boot

### Database

PostgreSQL

### Web

Next.js

### Mobile

React Native

Supporting text may briefly explain capability.

Example:

> REST APIs, authentication, validation, business logic

Do not add skill percentages.

Do not add dozens of technology icons.

---

## About Section

Keep this short.

Recommended points:

- Final-year Computer Science student
- Focused on full-stack development
- Learns by building complete products
- Looking for a junior developer opportunity

Target length:

3–5 short lines.

Do not copy the full CV profile into the website.

---

## Contact Section

Keep it simple.

Include:

- Email
- GitHub
- LinkedIn
- Resume

A contact form is optional and should not be added unless there is a clear benefit.

---

## Design Direction

The portfolio should feel:

- Professional
- Minimal
- Technical
- Calm
- Product-focused
- Modern
- Easy to scan

Avoid making it look like:

- A gaming website
- A hacker terminal
- A cyberpunk dashboard
- A design agency page
- An overly animated showcase
- A SaaS landing page with excessive marketing

---

## Theme

Use a dark-first theme.

Recommended visual direction:

- Dark graphite background
- White primary text
- Muted gray secondary text
- Indigo accent
- Thin subtle borders
- Medium border radius
- Minimal shadow
- Generous whitespace

Suggested color direction:

Dark background:

- `#0B0F19`

Card / surface:

- `#111827`

Primary text:

- `#F8FAFC`

Secondary text:

- `#94A3B8`

Border:

- `#1F2937`

Accent:

- `#6366F1`

Light mode may be supported later.

Avoid excessive use of accent colors.

Use the accent primarily for:

- CTA buttons
- links
- focus states
- active navigation
- selected labels
- subtle decorative details

---

## Typography

Use a clean modern sans-serif.

Requirements:

- Large readable hero heading
- Strong visual hierarchy
- Comfortable line-height
- Good contrast
- Avoid tiny text
- Avoid excessive font weights

Use no more than 1–2 font families.

---

## Motion

Animation should be subtle and purposeful.

Allowed examples:

- Small section entrance
- Button hover
- Project card hover
- Navbar state
- Theme transitions

Avoid:

- Large scroll animations
- scroll-jacking
- parallax-heavy behavior
- 3D scenes
- animated backgrounds
- excessive motion

Respect `prefers-reduced-motion`.

---

## Accessibility

Accessibility is required.

Use:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible labels
- Appropriate alt text
- Sufficient contrast
- Reduced-motion support

Do not use ARIA when semantic HTML already solves the problem.

---

## Performance

Performance is a feature.

Prefer:

- Server Components when appropriate
- Static content
- Optimized images
- Lazy loading
- Minimal client JavaScript
- Minimal dependencies

Avoid:

- Heavy animation libraries unless needed
- Large image assets
- autoplay video
- WebGL
- unnecessary client components

Use `next/image` for project screenshots when appropriate.

---

## SEO

Use basic professional SEO.

Include:

- Good page titles
- Meta descriptions
- Open Graph metadata
- Favicon
- Sitemap
- robots.txt
- Project-specific metadata

Do not over-engineer SEO.

---

## Portfolio Tech Stack

Use:

- Next.js
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel

Optional later:

- Motion
- shadcn/ui
- theme package

Do not add these unless required.

---

## Architecture Rules

This portfolio does NOT need:

- Spring Boot backend
- PostgreSQL database
- Redis
- Kafka
- GraphQL
- Microservices
- Kubernetes
- Authentication
- Admin dashboard
- CMS built from scratch

The portfolio should remain mostly static/content-driven.

Store project content using:

- TypeScript data
- JSON
- Markdown
- MDX

Choose the simplest option that keeps project content maintainable.

---

## Recommended Project Structure

Prefer a clean structure such as:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   └── ui/
│
├── data/
│   └── projects.ts
│
├── lib/
├── types/
└── assets/

public/
├── images/
│   └── projects/
└── resume/
```

Do not create unnecessary abstraction layers.

---

## Component Design Rules

Prefer small, reusable components.

Examples:

- `Navbar`
- `HeroSection`
- `ProjectCard`
- `ProjectTechBadge`
- `CoreStackSection`
- `AboutSection`
- `ContactSection`
- `Footer`
- `ProjectHero`
- `ArchitectureDiagram`
- `FeatureGroup`
- `ScreenshotGallery`

Do not create a component for every small wrapper.

A component should exist when it improves:

- reuse
- readability
- maintainability
- clear responsibility

---

## React / Next.js Rules

Prefer Server Components by default.

Use `"use client"` only when required for:

- interactions
- browser APIs
- local state
- theme switching
- animation

Avoid making entire pages client components.

Use semantic HTML.

Prefer framework-native features.

Use Next.js metadata APIs.

Use Next.js routing conventions.

---

## TypeScript Rules

Use TypeScript strictly.

Avoid `any`.

Create shared types for project data.

Example:

```ts
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};
```

Extend types only when real content requires it.

Do not create overly generic types.

---

## Tailwind Rules

Use Tailwind consistently.

Prefer:

- reusable design tokens
- shared utility patterns
- readable class composition

Avoid:

- huge unreadable class strings
- arbitrary values everywhere
- inconsistent spacing
- duplicate style logic

Extract reusable components when utility repetition becomes significant.

Do not introduce CSS-in-JS.

---

## Content Rules

Never invent project functionality.

Only describe features that actually exist or are clearly planned and marked as such.

Never claim:

- scalability
- production readiness
- real payment support
- real-time behavior
- enterprise architecture
- advanced security

unless the implementation supports the claim.

Use grounded language.

Prefer:

> Built a role-based booking workflow.

Avoid:

> Built an enterprise-grade, infinitely scalable booking platform.

---

## AI Content Rule

For Notiva, AI should be explained technically and honestly.

Do not use vague marketing language such as:

> Revolutionary AI-powered productivity.

Instead explain:

- what AI receives
- what context is used
- what the user asks
- what the model returns
- how the application handles responses
- what limitations exist

If RAG, embeddings, or vector search are not implemented, do not mention them.

---

## Project Proof Rule

Every important technical claim should ideally be supported by one or more of:

- Screenshot
- Architecture diagram
- GitHub repository
- Live demo
- Code structure
- API design
- Database design
- Engineering explanation

The portfolio should favor evidence over claims.

---

## Git Rules

Use meaningful commit messages.

Prefer Conventional Commit style.

Examples:

```text
chore: initialize portfolio project
feat: add hero section
feat: add featured project cards
feat: add readora case study
fix: improve mobile navigation
refactor: simplify project data model
docs: update project README
```

Avoid:

```text
update
fix
final
final2
changes
test
```

Before major changes, inspect the current code first.

Do not rewrite unrelated files.

---

## Codex Working Style

When working on this project:

1. Read the existing code before modifying it.
2. Make the smallest reasonable change.
3. Preserve the existing architecture unless there is a clear reason to improve it.
4. Do not add dependencies without a strong reason.
5. Do not add features outside the current phase.
6. Do not redesign unrelated sections.
7. Do not invent project content.
8. Keep UI clean and restrained.
9. Prefer reusable patterns over duplication.
10. Verify the project after meaningful changes.

---

## Before Coding

Before implementing a new phase or feature:

1. Inspect the relevant files.
2. Understand the existing structure.
3. State a short implementation plan.
4. Identify files that need changes.
5. Avoid touching unrelated files.

For large changes, implement incrementally.

---

## After Coding

After changes, run appropriate checks:

```bash
npm run lint
npm run build
```

If tests are added later:

```bash
npm test
```

Fix warnings and errors caused by the change.

Do not leave broken builds.

---

## Development Phases

Follow this order unless explicitly instructed otherwise.

### Phase 1 — Setup

- Next.js
- TypeScript
- Tailwind
- ESLint
- Git
- Folder structure
- Basic metadata

### Phase 2 — Design System

- Colors
- Typography
- Spacing
- Buttons
- Cards
- Theme
- Responsive behavior

### Phase 3 — Content

- Hero copy
- About copy
- Project summaries
- Screenshots
- Resume
- Links

### Phase 4 — Homepage

- Navbar
- Hero
- Featured Projects
- Core Stack
- About
- Contact
- Footer

### Phase 5 — Project Data

- Reusable content schema
- Project slugs
- Case study content

### Phase 6 — Reusable Case Study Template

- Hero
- Overview
- Architecture
- Features
- Engineering challenge
- Decisions
- Screenshots
- Learnings
- CTA

### Phase 7 — Readora

Build the full Readora case study.

### Phase 8 — QuickSeat

Build the full QuickSeat case study.

### Phase 9 — Notiva

Build the full Notiva case study.

### Phase 10 — UX Polish

- Animations
- Navigation
- Theme
- Hover/focus
- Mobile polish

### Phase 11 — Quality

- Accessibility
- Performance
- Responsive testing
- Broken links
- Content review

### Phase 12 — SEO

- Metadata
- Open Graph
- Sitemap
- robots.txt
- favicon

### Phase 13 — GitHub Cleanup

- README
- Repository presentation
- Remove dead code
- Environment examples

### Phase 14 — Deployment

- Vercel
- Production build
- Custom domain
- Final QA

Do not skip ahead unless explicitly requested.

---

## Current Phase

Current phase:

> Phase 1 — Project Setup

During Phase 1, do NOT implement:

- final visual design
- animations
- project case study content
- theme switching
- complex components
- unnecessary dependencies

Focus only on creating a clean foundation.

---

## Definition of Done for Phase 1

Phase 1 is complete when:

- Next.js runs successfully
- TypeScript is enabled
- Tailwind works
- ESLint works
- App Router is used
- `src/` structure is clean
- Git repository is initialized
- Default starter content is removed
- Basic metadata exists
- `npm run lint` passes
- `npm run build` passes

---

## Final Principle

When uncertain, follow this rule:

> Less decoration, more evidence.

And:

> Prefer clarity over cleverness.

The portfolio is successful when a recruiter can quickly understand the developer's skills and a technical reviewer can verify those skills through real project evidence.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
