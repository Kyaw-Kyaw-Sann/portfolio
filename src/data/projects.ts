import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "readora",
    status: "in-progress",
    statusLabel: "Currently building",
    progressSummary: "Next.js landing page and admin dashboard, Spring Boot API, and PostgreSQL data layer are complete. The React Native customer app is still in progress.",
    name: "Readora",
    tagline: "Personalized Digital Reading Platform",
    description:
      "A personalized reading platform with a completed web/admin experience and shared backend; the React Native customer app is in progress.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "React Native"],
    highlights: [
      "Completed Next.js landing and admin interfaces backed by a shared Spring Boot API and PostgreSQL.",
      "Personalized discovery with interests, categories, recommendations, favorites, and search.",
      "React Native customer experience for PDF/audio consumption and progress tracking is currently in development.",
    ],
    screenshots: [
      {
        src: "/images/projects/readora/ss1.png",
        alt: "Readora landing page introducing the digital reading platform",
        caption: "Completed Next.js landing page presenting the planned customer reading experience.",
      },
      {
        src: "/images/projects/readora/ss2.png",
        alt: "Readora admin dashboard with user, book, review, and subscription metrics",
        caption: "Admin overview backed by the shared Spring Boot API and PostgreSQL data model.",
      },
      {
        src: "/images/projects/readora/ss3.png",
        alt: "Readora admin book management table with search and filters",
        caption: "Book catalog administration with publication state, access level, categories, and editing controls.",
      },
    ],
    githubUrl: null,
    liveUrl: null,
    caseStudyUrl: "/projects/readora",
    caseStudy: {
      overview:
        "An evolving reading ecosystem. The Next.js landing/admin interfaces, Spring Boot API, and PostgreSQL layer are complete; the React Native customer app is the current workstream.",
      problem:
        "Readers often use separate experiences for discovering books, reading content, listening to audio, tracking progress, and managing their personal library.",
      solution:
        "Readora centralizes catalog and subscription administration today, with the shared API designed to support discovery, reading, listening, libraries, progress, and recommendations in the mobile client.",
      systemArchitecture: [
        "Next.js Landing/Admin → Spring Boot REST API → PostgreSQL",
        "React Native Customer App (in progress) → Spring Boot REST API → PostgreSQL",
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
        { technology: "React Native", responsibility: "Customer mobile application · in progress" },
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
    status: "completed",
    statusLabel: "Completed",
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
        src: "/images/projects/quickseat/s1.png",
        alt: "QuickSeat customer homepage with a featured movie and booking actions",
        caption: "Customer-facing homepage with movie discovery and a direct booking entry point.",
      },
      {
        src: "/images/projects/quickseat/S2.png",
        alt: "QuickSeat now showing and upcoming movie catalog",
        caption: "Movie discovery organized into current and upcoming releases.",
      },
      {
        src: "/images/projects/quickseat/s7.png",
        alt: "QuickSeat showtime selection with movie, cinema, and date filters",
        caption: "Showtime discovery connects movie, cinema, date, screen, and seat pricing.",
      },
      {
        src: "/images/projects/quickseat/s15.png",
        alt: "QuickSeat seat map with selected normal and couple seats",
        caption: "Seat selection exposes available, held, booked, unavailable, and selected states.",
      },
      {
        src: "/images/projects/quickseat/s17.png",
        alt: "QuickSeat demonstration payment page with reservation countdown",
        caption: "Backend-controlled reservation window with a clearly identified mock payment step.",
      },
      {
        src: "/images/projects/quickseat/s19.png",
        alt: "QuickSeat generated cinema ticket with QR code and booking details",
        caption: "Generated ticket connects the customer booking to the staff QR-validation workflow.",
      },
      {
        src: "/images/projects/quickseat/s10.png",
        alt: "QuickSeat admin dashboard with booking, revenue, occupancy, and cancellation metrics",
        caption: "Admin operations dashboard summarizing booking and cinema performance.",
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
    status: "completed",
    statusLabel: "Completed",
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
        src: "/images/projects/notiva/BS1.png",
        alt: "Notiva product landing page with a preview of the notes workspace",
        caption: "Product landing page positioning AI as optional support for a focused notes workspace.",
      },
      {
        src: "/images/projects/notiva/BS2.png",
        alt: "Notiva notes workspace with search, filters, categories, pinned notes, and favorites",
        caption: "Core notes workspace with organization, discovery, pinning, and favorite controls.",
      },
      {
        src: "/images/projects/notiva/BS3.png",
        alt: "Notiva rich-text editor with contextual AI chat beside an open note",
        caption: "Rich editing and note-scoped AI chat work side by side without replacing the editor.",
      },
      {
        src: "/images/projects/notiva/BS5.png",
        alt: "Notiva version history dialog with a saved note preview and restore action",
        caption: "Version history allows users to inspect and restore an earlier note safely.",
      },
      {
        src: "/images/projects/notiva/BS6.png",
        alt: "Notiva AI conversations workspace with note-context chat history",
        caption: "Persistent AI conversations remain tied to note or cross-note context.",
      },
      {
        src: "/images/projects/notiva/BS7.png",
        alt: "Notiva admin user management screen with account and verification status",
        caption: "Admin interface separates account operations from users' private note content.",
      },
      {
        src: "/images/projects/notiva/BS10.png",
        alt: "Notiva sign-in page with Google and email authentication options",
        caption: "Authentication entry point with Google and email-based sign-in.",
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
