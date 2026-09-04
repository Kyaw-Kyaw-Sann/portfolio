import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "readora",
    name: "Readora",
    tagline: "Personalized Digital Reading Platform",
    description:
      "Personalized digital reading platform for discovering, reading, listening to, and managing books across mobile and web.",
    stack: ["Spring Boot", "PostgreSQL", "React Native", "Next.js"],
    highlights: [
      "Cross-platform architecture with a React Native customer app, Next.js landing and admin interfaces, Spring Boot API, and PostgreSQL.",
      "Personalized discovery with interests, categories, recommendations, favorites, and search.",
      "PDF and audio consumption with reading and listening progress tracking, plus admin management.",
    ],
    screenshots: [
      {
        src: "/images/projects/readora/UI11.png",
        alt: "Readora personalized book discovery screen",
        caption: "Mobile home screen with recommendations and continue reading.",
      },
      {
        src: "/images/projects/readora/UI13.png",
        alt: "Readora landing page with mobile reading app preview",
        caption: "Landing page presenting reading, listening, discovery, and subscription options.",
      },
      {
        src: "/images/projects/readora/UI5.png",
        alt: "Readora book search results screen",
        caption: "Mobile search results with filters and book discovery options.",
      },
      {
        src: "/images/projects/readora/UI6.png",
        alt: "Readora book detail screen with reading and listening actions",
        caption: "Book details with favorite, read, listen, review, and recommendation controls.",
      },
    ],
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/readora",
    caseStudy: {
      overview:
        "A cross-platform reading platform for book discovery, PDF reading, audio listening, personal libraries, progress tracking, and recommendations.",
      problem:
        "Readers often use separate experiences for discovering books, reading content, listening to audio, tracking progress, and managing their personal library.",
      solution:
        "Readora connects discovery, reading, listening, personal libraries, progress tracking, recommendations, subscription-aware access, and admin management in one platform.",
      systemArchitecture: [
        "React Native Customer App → Spring Boot REST API → PostgreSQL",
        "Next.js Landing/Admin → Spring Boot REST API → PostgreSQL",
      ],
      featureGroups: [
        {
          title: "Identity & Access",
          features: [
            "Registration, login, and logout",
            "Email and account verification",
            "Google authentication",
            "Forgot and reset password flow",
            "Role-based access control",
          ],
        },
        {
          title: "Profile & Interests",
          features: [
            "Avatar and profile information",
            "Subscription information",
            "Selected reading interests",
            "Read and edit interests",
            "Change password",
          ],
        },
        {
          title: "Discovery",
          features: [
            "Book listings and details",
            "Free and premium books",
            "Recently added, popular, and recommended books",
            "Categories, search, filters, and sorting",
            "Pagination or infinite scrolling",
          ],
        },
        {
          title: "Library & Personalization",
          features: [
            "Add, remove, and view favorite books",
            "Personal library",
            "Favorites used as recommendation signals where applicable",
          ],
        },
        {
          title: "Reading & Listening",
          features: [
            "PDF reading and audio listening",
            "Reading and listening progress tracking",
            "Recently reading and continue reading",
          ],
        },
        { title: "Reviews & Ratings", features: ["Reviews", "Ratings"] },
        {
          title: "Subscription",
          features: [
            "Free and premium access",
            "Premium subscriptions",
            "Subscription-aware content access",
          ],
        },
        {
          title: "Admin",
          features: [
            "Dashboard overview",
            "Books and categories management",
            "Users and reviews management",
          ],
        },
      ],
      engineeringChallenge:
        "Designing one shared backend for both React Native and Next.js clients while keeping user-specific reading and listening progress, favorites, interests, and library data consistent.",
      technicalDecisions: [
        "Spring Boot for centralized REST APIs and business logic.",
        "PostgreSQL for relational user, book, progress, and subscription data.",
        "React Native for the customer mobile experience.",
        "Next.js for landing and admin interfaces.",
        "Role-based access for customer and admin responsibilities.",
      ],
      technologyRoles: [
        { technology: "React Native", responsibility: "Customer mobile application" },
        { technology: "Next.js", responsibility: "Landing page and admin dashboard" },
        { technology: "Spring Boot", responsibility: "Shared backend REST API" },
        { technology: "PostgreSQL", responsibility: "Relational application database" },
      ],
      highlightFirstScreenshot: true,
      learnings: [
        "Designing one backend for multiple client applications.",
        "Implementing role-based authentication and authorization.",
        "Modeling user-specific reading and listening progress.",
        "Modeling relational user, book, library, and progress data.",
        "Integrating mobile and web clients with the same API.",
      ],
    },
  },
  {
    slug: "quickseat",
    name: "QuickSeat",
    tagline: "Cinema Booking & Ticket Validation Platform",
    description:
      "Cinema booking and ticket validation platform with role-based customer, staff, and admin workflows.",
    stack: ["Spring Boot", "PostgreSQL", "Next.js"],
    highlights: [
      "Seat selection and booking workflow with seat status and countdown handling.",
      "Showtime and cinema management with role-based access.",
      "QR ticket generation and staff validation workflow.",
    ],
    screenshots: [
      {
        src: "/images/projects/quickseat/S2.png",
        alt: "QuickSeat now showing movie discovery screen",
        caption: "Customer movie browsing screen with search and ticket purchase actions.",
      },
      {
        src: "/images/projects/quickseat/S3.png",
        alt: "QuickSeat cinema seat selection screen",
        caption: "Seat map showing available, selected, occupied, and VIP seat states.",
      },
      {
        src: "/images/projects/quickseat/S5.png",
        alt: "QuickSeat admin dashboard overview",
        caption: "Admin system overview with booking activity and operational summary.",
      },
      {
        src: "/images/projects/quickseat/S6.png",
        alt: "QuickSeat admin movie management screen",
        caption: "Admin movie management table for maintaining cinema content.",
      },
    ],
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/quickseat",
    caseStudy: {
      overview:
        "A role-based cinema platform that connects movie discovery, cinema and showtime selection, seat booking, ticket generation, QR validation, and staff and admin operations.",
      problem:
        "Cinema booking requires multiple connected workflows including movie and showtime discovery, seat availability, booking state, ticket generation, and staff validation.",
      solution:
        "QuickSeat gives customers one booking flow from movie discovery to mock payment and ticket generation, while staff validate QR tickets and administrators manage cinema operations.",
      systemArchitecture: ["Next.js Customer / Staff / Admin UI → Spring Boot REST API → PostgreSQL"],
      featureGroups: [
        {
          title: "Identity & Roles",
          features: [
            "Registration, login, and logout",
            "Email verification and Google login",
            "Forgot and reset password flow",
            "Customer, staff, and admin role-based access",
          ],
        },
        {
          title: "Movies & Discovery",
          features: [
            "Browse now showing and upcoming movies",
            "Search, filters, and movie details",
            "Admin movie CRUD",
          ],
        },
        {
          title: "Cinema / Screen / Seat Management",
          features: [
            "Cinemas, screens, and seats",
            "Normal and couple seat types",
            "Admin management of cinema structure",
          ],
        },
        { title: "Showtimes", features: ["Admin CRUD", "Pricing", "Overlap prevention rules"] },
        {
          title: "Booking Flow",
          features: [
            "Cinema, date, showtime, and seat selection",
            "Seat status display",
            "Countdown timer",
            "Mock payment demonstration flow",
          ],
        },
        {
          title: "Tickets & QR Validation",
          features: [
            "View bookings and tickets",
            "QR tickets and ticket status validation",
            "Staff QR scanning",
          ],
        },
        {
          title: "Staff Operations",
          features: [
            "Staff showtime, booking, seat-status, and QR-validation views",
            "Search and filtering for operational views",
          ],
        },
        {
          title: "Admin Operations",
          features: [
            "Admin management of movies, cinemas, screens, seats, showtimes, and accounts",
            "Booking management and system overview",
          ],
        },
      ],
      engineeringChallenge:
        "Managing seat availability and booking state around showtimes so users cannot create invalid or conflicting seat selections. The booking flow includes a countdown timer; mock payment is presented as a demonstration-only step.",
      technicalDecisions: [
        "Spring Boot for booking rules, authorization, ticket validation, and REST APIs.",
        "PostgreSQL for cinema, screen, seat, showtime, booking, and user relationships.",
        "Next.js for customer, staff, and admin interfaces.",
        "Role-based access for customer, staff, and admin responsibilities.",
        "QR-based ticket validation for the staff workflow.",
        "Mock payment clearly identified as demonstration-only.",
      ],
      technologyRoles: [
        { technology: "Next.js", responsibility: "Customer, staff, and admin interfaces" },
        { technology: "Spring Boot", responsibility: "Booking rules, authorization, and ticket validation" },
        { technology: "PostgreSQL", responsibility: "Cinema, showtime, seat, booking, and user data" },
      ],
      workflow: {
        title: "Booking flow",
        steps: [
          "Browse Movie",
          "Select Cinema",
          "Select Date",
          "Select Showtime",
          "Select Seats",
          "Booking / Countdown",
          "Mock Payment",
          "Generate Ticket",
          "QR Validation",
        ],
        note: "Mock payment is demonstration-only.",
      },
      highlightFirstScreenshot: true,
      learnings: [
        "Modeling relational cinema, screen, seat, and showtime workflows.",
        "Designing seat availability and booking state.",
        "Implementing role-specific interfaces and permissions.",
        "Handling validation rules for showtimes and bookings.",
        "Connecting customer booking with staff ticket validation.",
      ],
    },
  },
  {
    slug: "notiva",
    name: "Notiva",
    tagline: "AI-Assisted Personal Knowledge Workspace",
    description:
      "AI-assisted personal knowledge workspace for creating, organizing, searching, and interacting with notes.",
    stack: ["Spring Boot", "PostgreSQL", "Next.js", "AI Integration"],
    highlights: [
      "Rich-text note management with categories, favorites, pinned notes, search, recycle bin, and version history.",
      "AI features including chat, summaries, writing assistance, smart organization, and title generation.",
      "PWA and offline-oriented knowledge management experience.",
    ],
    screenshots: [
      {
        src: "/images/projects/notiva/UX1.png",
        alt: "Notiva notes workspace with categories and note cards",
        caption: "Notes workspace with categories, pinned notes, favorites, and search controls.",
      },
      {
        src: "/images/projects/notiva/UX2.png",
        alt: "Notiva rich text note editor with AI chat",
        caption: "Rich-text editing workspace with a note-specific AI assistant panel.",
      },
      {
        src: "/images/projects/notiva/UX3.png",
        alt: "Notiva appearance settings and AI usage screen",
        caption: "Settings interface showing appearance preferences and AI usage limits.",
      },
      {
        src: "/images/projects/notiva/ss4.png",
        alt: "Notiva mobile navigation menu",
        caption: "Mobile navigation with notes, categories, favorites, AI conversations, and recycle bin.",
      },
    ],
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/notiva",
    caseStudy: {
      overview:
        "A personal knowledge workspace for creating, organizing, searching, recovering, and revisiting notes. AI assistance enhances these workflows without replacing the core product.",
      problem:
        "As notes grow, it becomes harder to organize related information, find it again, recover mistakes, and continue working across devices or unreliable connections.",
      solution:
        "Notiva combines categories, rich-text editing, search and filtering, pinned and favorite notes, safe recovery, version history, and PWA support. AI adds summaries, writing help, organization suggestions, and contextual chat when the user chooses to use it.",
      systemArchitecture: [
        "Next.js / PWA → Spring Boot REST API → PostgreSQL",
        "Spring Boot → AI Provider / AI Service",
      ],
      featureGroups: [
        {
          title: "Identity & Profile",
          features: [
            "Registration, login, and logout",
            "Google authentication and email verification",
            "Forgot and reset password flow",
            "User profile and avatar",
          ],
        },
        {
          title: "Categories & Organization",
          features: ["Category CRUD", "User-scoped categories", "Uncategorized notes"],
        },
        {
          title: "Notes Management",
          features: ["Note CRUD", "Favorites and pinned notes", "Background and text color options"],
        },
        {
          title: "Rich Text Editor",
          features: [
            "Headings with bold, italic, and underline formatting",
            "Text and background colors",
            "Lists, checkboxes, code snippets, and images",
          ],
        },
        { title: "Search & Filtering", features: ["Instant search", "Category filtering"] },
        {
          title: "Recovery & Versioning",
          features: [
            "Recycle bin, soft delete, restore, permanent delete, and empty recycle bin",
            "Simple note version management",
          ],
        },
        {
          title: "PWA / Offline",
          features: [
            "Progressive Web App support",
            "Offline usage support",
          ],
        },
        {
          title: "AI Assistance",
          features: [
            "Study and note AI chat",
            "AI summarization and writing assistance",
            "Smart folder suggestions and title generation",
            "Chat history and questions across notes",
            "AI usage limits for premium and normal users",
          ],
        },
      ],
      engineeringChallenge:
        "Integrating AI assistance into a real note-management workflow without making the product dependent on AI for core functionality. The implementation must pass appropriate note context and user actions to the AI flow, return generated results clearly, and preserve normal editing, organization, and recovery workflows when AI is not used.",
      technicalDecisions: [
        "Spring Boot for authentication, note and category logic, persistence APIs, and AI orchestration.",
        "PostgreSQL for users, categories, notes, versions, and related application data.",
        "Next.js for the knowledge workspace and rich editing UI.",
        "Soft-delete workflow for safe note recovery.",
        "PWA support for offline-oriented usage.",
        "AI features kept separate from the core note-management workflow.",
      ],
      technologyRoles: [
        { technology: "Next.js / PWA", responsibility: "Knowledge workspace and rich-text editing experience" },
        { technology: "Spring Boot", responsibility: "Authentication, note logic, persistence APIs, and AI orchestration" },
        { technology: "PostgreSQL", responsibility: "Users, notes, categories, versions, and related data" },
        { technology: "AI Integration", responsibility: "Optional assistance for supported note workflows" },
      ],
      workflow: {
        title: "AI-assisted note workflow",
        steps: [
          "User / Note Context",
          "Next.js UI",
          "Spring Boot API",
          "AI Service",
          "Generated Result",
          "User Workflow / Chat History",
        ],
        note: "AI assistance is optional; notes, categories, editing, search, recovery, and versioning continue to work as core product workflows.",
      },
      highlightFirstScreenshot: true,
      learnings: [
        "Designing a product domain beyond basic CRUD.",
        "Building a clear rich-text editing experience.",
        "Implementing soft delete, recovery, and version management.",
        "Integrating AI into a normal user workflow without making it required.",
        "Thinking through offline-oriented PWA behavior.",
      ],
      plannedFeatures: ["Notes to flashcards", "Sharing"],
    },
  },
];
