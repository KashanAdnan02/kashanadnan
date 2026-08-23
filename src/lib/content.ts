/**
 * Single source of truth for every piece of copy, link and number on the site.
 * Update values here instead of editing components.
 *
 * TODO(kashan): confirm `site.email` and `site.fiverr` before going live.
 */

export const site = {
  name: "Kashan Adnan",
  role: "Full-Stack Developer",
  roleLong: "MERN & Next.js developer for founders and small teams",
  location: "Karachi, Pakistan",
  timezone: "PKT (UTC+5)",
  tagline:
    "I build full-stack web apps that ship — Next.js and MERN products with real auth, real databases and real users.",
  url: "https://kashanadnan.netlify.app",
  email: "aaghaaztech@gmail.com",
  phoneDisplay: "+92 347 291 4253",
  whatsapp: "923472914253",
  fiverr: "https://www.fiverr.com/kashanadnandev",
  github: "https://github.com/KashanAdnan02",
  githubLegacy: "https://github.com/KashanAdnan",
  linkedin: "https://www.linkedin.com/in/kashan-adnan-dev",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Kashan, I saw your portfolio and I'd like to discuss a project.",
)}`;

export const stats = [
  {
    value: "5.0",
    unit: "★",
    label: "Fiverr rating",
    detail: "Every completed order rated 5 stars",
  },
  {
    value: "4",
    label: "Orders delivered",
    detail: "Fiverr orders completed on time",
  },
  {
    value: "150+",
    label: "Students taught",
    detail: "Across Aaghaaz Tech batches",
  },
  {
    value: "3+",
    label: "Years building",
    detail: "Shipping web apps since 2022",
  },
] as const;

export type ProjectCategory = "full-stack" | "frontend" | "ai";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  live?: string;
  repo?: string;
  featured: boolean;
  /** Path under /public, e.g. "/work/european-consultant.png". Falls back to a
   *  typographic placeholder when absent. */
  image?: string;
  /** Case study body. Omit to render the card without a detail page. */
  study?: {
    problem: string;
    approach: string[];
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "european-consultant",
    title: "European Consultant",
    client: "Visa & relocation agency, Sweden",
    year: "2026",
    category: "full-stack",
    summary:
      "A Sweden-based relocation agency was running its whole business on one static HTML page that faked navigation with hidden divs. I rebuilt it as a real Next.js App Router site with routed pages, per-page SEO and working enquiry forms.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router", "Vercel"],
    live: "https://european-consultant-uyv3.vercel.app",
    repo: "https://github.com/KashanAdnan02/european-consultant",
    featured: true,
    study: {
      problem:
        "Every section lived at the same URL. Clients could not share a link to a service, browser back did nothing, and Google only ever saw one title and description for the entire business.",
      approach: [
        "Split the single page into real routes — home, about, services, testimonials, contact and a thank-you confirmation page.",
        "Moved header and footer into a shared App Router layout so navigation state is handled once by a small client component using usePathname().",
        "Gave every route its own title and meta description so each service can rank and be shared on its own.",
        "Wired the contact and appointment forms to submit directly, with no SMTP credentials to leak or maintain.",
        "Carried the agency's existing brand colours and animations into Tailwind so nothing looked unfamiliar to returning visitors.",
      ],
      outcome:
        "The agency now has shareable service URLs, working back/forward navigation, per-page SEO and a contact flow that confirms to the visitor — covering 40+ countries of visa services across a maintainable codebase.",
    },
  },
  {
    slug: "fluentedge",
    title: "FluentEdge",
    client: "Own product",
    year: "2026",
    category: "ai",
    summary:
      "A Grammarly-style writing assistant: a Chrome extension that watches any text field on the web, plus a Fastify API that runs the grammar analysis through an LLM behind proper auth and rate limits.",
    stack: [
      "Chrome MV3",
      "React",
      "Vite",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Groq LLM",
      "JWT",
    ],
    repo: "https://github.com/KashanAdnan02/FluentEdge",
    featured: true,
    study: {
      problem:
        "Writing assistants either cost a subscription or ship your text to an opaque service. I wanted one where the model key never leaves the server and the user's text is never logged.",
      approach: [
        "Built the extension as a Chrome MV3 app in React + Vite, detecting editable fields and debouncing analysis so it fires ~800ms after typing stops.",
        "Put a Fastify REST API in front of the LLM with JWT access and refresh tokens, bcrypt password hashing and refresh tokens stored hashed in Postgres.",
        "Modelled users and preferences in Prisma against PostgreSQL, with migrations for production on Neon.",
        "Added rate limiting — 60 requests/hour per IP with a 20/min burst cap on the analyse endpoint — so one user cannot burn the LLM budget.",
        "Structured it as a monorepo with a shared TypeScript package so the extension and API can never drift out of contract.",
      ],
      outcome:
        "Suggestions appear inline in any web text field with accept/dismiss controls, while the provider API key stays server-side and only a request ID and character count are ever logged.",
    },
  },
  {
    slug: "windforshare",
    title: "WindForShare",
    client: "Own product",
    year: "2026",
    category: "full-stack",
    summary:
      "Open one URL on any device on the same WiFi and you land in a shared room. Drop in text or files, optionally lock them with a password, and everything self-destructs after 30 minutes.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Supabase",
      "Web Crypto",
      "Framer Motion",
    ],
    live: "https://windforshare.vercel.app",
    repo: "https://github.com/KashanAdnan02/windforshare",
    featured: true,
    study: {
      problem:
        "Moving a file between a laptop and a phone on the same network usually means email, a cable, or uploading to someone else's cloud forever. I wanted zero pairing and zero permanent storage.",
      approach: [
        "Grouped devices into rooms by a salted hash of their shared public IP — the raw IP never leaves the browser and no accounts are needed.",
        "Encrypted password-protected shares in the browser with AES-256-GCM and a PBKDF2-derived key, so the password never reaches the server and cannot be recovered.",
        "Used Supabase Postgres, Storage and Realtime so new shares appear instantly for everyone in the room.",
        "Gave every share a live 30-minute countdown, then deleted it from both database and storage on expiry via client cleanup plus a scheduled job.",
        "Supported files up to 100 MB of any type, plus a join-by-code mode for sharing across different networks.",
      ],
      outcome:
        "A privacy-first drop zone with no sign-up, no lingering copies of your data, and a live lifespan bar on every card so nobody wonders when a link dies.",
    },
  },
  {
    slug: "whisperlinux",
    title: "WhisperLinux",
    client: "Open source",
    year: "2026",
    category: "ai",
    summary:
      "Fully offline push-to-talk dictation for Linux. Hold a hotkey, speak, release, and the transcribed text is typed straight at your cursor — no API keys, no cloud, no per-minute cost.",
    stack: ["Python", "faster-whisper", "evdev", "X11 / Wayland", "Debian packaging"],
    live: "https://whisprlinux.vercel.app",
    repo: "https://github.com/KashanAdnan02/whisprlinux",
    featured: true,
    study: {
      problem:
        "Linux has no good built-in dictation, and cloud speech-to-text means paying per minute and sending your voice to someone else's server.",
      approach: [
        "Ran speech-to-text locally with faster-whisper so everything works offline after a one-time model download.",
        "Read hotkeys at the kernel evdev level so push-to-talk works identically on X11 and Wayland.",
        "Injected text at the cursor through xdotool on X11 and ydotool on Wayland.",
        "Added a system tray icon that reflects idle, recording and transcribing state so the user always knows what the mic is doing.",
        "Shipped it as a .deb, a portable tarball and an install script, with a download site for non-technical users.",
      ],
      outcome:
        "A free, private dictation tool that installs in one command on Ubuntu-family distros and costs nothing to run.",
    },
  },
  {
    slug: "ai-chess",
    title: "AI Chess",
    client: "Own product",
    year: "2026",
    category: "frontend",
    summary:
      "A browser chess game with a computer opponent — full move legality, check and checkmate detection, and an interface that stays readable on a phone.",
    stack: ["React", "Vite", "JavaScript", "Game logic"],
    live: "https://ai-chess-game-xi.vercel.app",
    repo: "https://github.com/KashanAdnan02/ai_chess_game",
    featured: false,
  },
  {
    slug: "mongodb-vector-search",
    title: "Vector Search API",
    client: "Own product",
    year: "2024",
    category: "full-stack",
    summary:
      "A Node.js API that stores embeddings in MongoDB Atlas and answers semantic search queries — the retrieval layer behind AI features, without a separate vector database.",
    stack: ["Node.js", "Express", "MongoDB Atlas", "Vector Search", "Vercel"],
    live: "https://mongo-db-vector-backend-ik8u.vercel.app",
    repo: "https://github.com/KashanAdnan/MongoDb-Vector-Backend",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const caseStudies = projects.filter((project) => project.study);

export const projectFilters = [
  { id: "all", label: "All work" },
  { id: "full-stack", label: "Full-stack" },
  { id: "ai", label: "AI & tools" },
  { id: "frontend", label: "Frontend" },
] as const;

export const affiliations = [
  {
    name: "Aaghaaz Tech",
    role: "Founder & lead instructor",
    period: "2023 — present",
    blurb:
      "I run a Karachi software institute across three branches, teaching web and app development to 150+ students while delivering client work under the same brand.",
    link: "https://pk.linkedin.com/company/aaghaaz-tech",
  },
  {
    name: "SMIT",
    role: "MERN Stack & Mobile App Development",
    period: "Graduate",
    blurb:
      "Completed the Saylani Mass IT Training MERN stack and mobile app development programme — the foundation of how I structure and ship production apps.",
    link: "https://www.linkedin.com/school/saylani-smit",
  },
  {
    name: "Saylani Mass IT Training",
    role: "AI & chatbot development",
    period: "Graduate",
    blurb:
      "Trained in AI and chatbot development at Saylani, which is where the LLM and automation side of my work started.",
    link: "https://www.linkedin.com/company/saylanimassit",
  },
] as const;

export const certifications = [
  "MongoDB Certified Node.js Developer",
  "Generative AI — Google Cloud Skills Boost",
  "MongoDB SQL Badge",
  "SMIT MERN Stack & Mobile App Development",
] as const;

export const fiverrProof = {
  rating: "5.0",
  orders: 4,
  headline: "Every Fiverr order delivered, every one rated 5 stars.",
  body: "A small number of orders, all finished and all rated 5.0. I would rather show you four honest deliveries and the code behind them than a stack of unverifiable claims.",
  points: [
    "5.0 average rating across all completed orders",
    "4 orders delivered — none cancelled, none late",
    "Clear scope and daily updates before work starts",
    "Source code and deployment handed over, always",
  ],
  /** TODO(kashan): paste real review quotes from Fiverr here and they will render. */
  reviews: [] as { quote: string; author: string; project: string }[],
} as const;

export const services = [
  {
    title: "Full-stack web apps",
    price: "MERN or Next.js",
    blurb:
      "Auth, database, dashboard, payments, deployment. Built as one coherent codebase you can hand to another developer later.",
    items: [
      "Next.js App Router or MERN",
      "PostgreSQL, MongoDB or Supabase",
      "Auth, roles and admin panels",
      "Deployed on Vercel with your domain",
    ],
  },
  {
    title: "Business & landing sites",
    price: "Marketing pages",
    blurb:
      "Fast, responsive sites with real routing and per-page SEO — not a single-page template pretending to have sections.",
    items: [
      "Design implemented pixel-close",
      "Per-page SEO and Open Graph",
      "Working contact and enquiry forms",
      "Editable content structure",
    ],
  },
  {
    title: "AI features & automation",
    price: "LLM integration",
    blurb:
      "Chatbots, LLM endpoints and scraping or automation pipelines, with API keys kept server-side and rate limits in place.",
    items: [
      "LLM APIs behind your own backend",
      "Vector search and retrieval",
      "Chatbots and assistants",
      "Python automation scripts",
    ],
  },
  {
    title: "Fixes & rescue work",
    price: "Existing codebases",
    blurb:
      "Inherited a project that half works? I read the code, tell you honestly what is wrong, then fix or rebuild the parts that matter.",
    items: [
      "Bug fixing and refactors",
      "Static site to real framework migrations",
      "Performance and mobile issues",
      "Deployment and DNS problems",
    ],
  },
] as const;

export const about = {
  heading: "A developer who also teaches — so I explain, not just deliver.",
  paragraphs: [
    "I'm Kashan Adnan, a full-stack developer from Karachi. I work mainly in the MERN stack and Next.js, and I've been shipping web apps since 2022 — client sites, internal dashboards, browser extensions and AI-backed tools.",
    "Alongside client work I founded Aaghaaz Tech, a software institute running across three branches in Karachi where I've taught 150+ students web and app development. Teaching forces you to actually understand what you build, and it shows up in the way I hand a project over: clear structure, readable code and a walkthrough you can follow.",
    "I trained at Saylani Mass IT Training and SMIT in MERN, mobile app and AI development, and I'm a MongoDB Certified Node.js Developer with Google Cloud generative AI credentials. On Fiverr, every order I've completed has come back rated 5 stars.",
  ],
  workingWith: [
    "You get a scoped plan before I write code",
    "Daily or milestone updates, no silence",
    "Source code and deployment access are yours",
    "I say no to work I can't do well",
  ],
} as const;

export const skillGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vite"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Fastify", "REST APIs", "JWT auth", "Prisma"],
  },
  {
    label: "Data",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "Vector search"],
  },
  {
    label: "AI & tooling",
    items: ["LLM APIs", "Python", "Groq", "Automation", "Git", "Vercel"],
  },
] as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#trust", label: "Background" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
