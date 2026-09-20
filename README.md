# Kyaw Kyaw Hsan — Developer Portfolio

A project-first portfolio for presenting full-stack engineering work through real product screenshots, architecture explanations, and concise case studies.

## Portfolio focus

The site highlights practical application development with:

- Next.js and TypeScript for web interfaces
- Spring Boot for REST APIs and business logic
- PostgreSQL for relational data
- React Native as an additional mobile capability

## Featured projects

| Project | Status | Focus |
| --- | --- | --- |
| Notiva | Completed | Knowledge management, rich-text editing, and optional AI assistance |
| QuickSeat | Completed | Cinema booking integrity, role-based workflows, and QR ticket validation |
| Readora | In progress | Completed web/admin and backend foundations; mobile client in development |

Each project uses the same reusable case-study structure:

- `/projects/notiva`
- `/projects/quickseat`
- `/projects/readora`

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React

The portfolio is static and content-driven. It does not require a database or backend service.

## Getting started

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev    # Start the development server
npm run lint   # Run ESLint
npm run build  # Create and validate a production build
npm run start  # Serve the production build
```

## Project structure

```text
src/
├── app/                 # Routes, global styles, and metadata
├── components/
│   ├── layout/          # Navigation, footer, and page layout
│   ├── projects/        # Reusable case-study sections
│   ├── sections/        # Homepage sections
│   └── ui/              # Shared UI primitives
├── data/                # Portfolio and project content
└── types/               # Shared TypeScript models

public/
├── images/projects/     # Real project screenshots
└── resume/              # Current resume PDF
```

## Updating content

- Personal information and links: `src/data/site.ts`
- Project content and screenshot metadata: `src/data/projects.ts`
- Core stack: `src/data/stack.ts`
- Resume PDF: `public/resume/Kyaw_Kyaw_Hsan_CV.pdf`

Project links are hidden when their GitHub or live-demo URL is `null`.

## Quality checks

Before publishing changes, run:

```bash
npm run lint
npm run build
```

The interface supports keyboard navigation, visible focus states, responsive layouts, reduced-motion preferences, and light/dark themes.

## Contact

- [GitHub](https://github.com/Kyaw-Kyaw-Sann)
- [LinkedIn](https://linkedin.com/in/kyaw-kyaw-hsan)
- [Email](mailto:kyawhsan042219@gmail.com)

## License

This repository contains personal portfolio content and project screenshots. Please do not reuse them as your own portfolio material.
