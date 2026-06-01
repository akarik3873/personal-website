export const profile = {
  name: "Abraham Karikkineth",
  fullName: "Abraham Chandapillai Karikkineth",
  location: "Berkeley, CA",
  about:
    "I'm an Electrical Engineering & Computer Science student at UC Berkeley (B.E., May 2027). I build full-stack products end to end — React front-ends, Node/Express & Supabase backends, and ML/RL pipelines — with a focus on clean, fast, and reliable software.",
  links: [
    { label: "Email", href: "mailto:akarik3873@gmail.com" },
    { label: "GitHub", href: "https://github.com/akarik3873" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abrahamkarikkineth" },
  ],
};

export const experience = [
  {
    org: "Stealth Startup",
    role: "Founder",
    summary:
      "Built a full-stack analytics platform (React, Express, Supabase) processing 10,000+ data points/day, with Zod-typed contract validation, an API rate-limiter, and an RL recommendations pipeline. Cut code complexity ~20% and API calls ~40% via local caching, reusable UI, and React Query.",
  },
  {
    org: "Movicorn",
    role: "SWE Intern",
    summary:
      "Engineered a secure admin dashboard (React, Node.js, PostgreSQL) with RBAC across 10+ endpoints. Shipped 10+ high-impact features and redesigned the UI, cutting average task completion time 25% and input errors 35%.",
  },
  {
    org: "Rooh",
    role: "SWE Intern",
    summary:
      "Built a gamified dashboard (React) with streaks, XP, and levels, plus analytics on Supabase & Express tracking 10+ metrics. Enhanced vocal-training and data APIs with Firebase, reducing runtime, infra cost, and memory use.",
  },
  {
    org: "Pioneers of Engineering",
    role: "SWE",
    summary:
      "Delivered UI fixes, testing, and refactors for a React-based IDE. Mentored junior developers on code reviews and architecture, increasing team velocity ~30%.",
  },
  {
    org: "OrcanaAI",
    role: "SWE Intern",
    summary:
      "Fixed WebSocket, routing, and config issues (React + JS), improving URL reliability 20%. Automated end-to-end SQL schema migrations (~80% faster deploys) and built an auth encryption pipeline with Python, PostgreSQL, and bcrypt.",
  },
  {
    org: "SolarSURFER Project",
    role: "PM",
    summary:
      "Coordinated engineering teams at JHU, UMD, and Olin on subsystem integration for a student-built satellite, and designed a 5 × 9.7 × 9.7 cm hyperspectral camera for LEO structural, thermal, and optical constraints.",
  },
  {
    org: "Earlier Research & Data Roles",
    role: "",
    bullets: [
      "Research Intern — Institute of Marine & Environmental Technology",
      "Data Engineering Intern — Danko Arlington",
      "Research Intern — Johns Hopkins Sidney Kimmel Cancer Research Center",
    ],
  },
];

export const projects = [
  {
    name: "Streamind",
    summary:
      "Mobile/web app (React Native, React, Swift) measuring heart rate & breathing locally from the camera using MediaPipe, rPPG, and FFTs — with RBAC sharing to caretakers and Supabase storage.",
  },
  {
    name: "Woosh Navigation",
    summary:
      "Full-stack platform (React, Express, Supabase) with AI chat and auth, using a REST + WebSocket messaging flow delivering updates in under 100ms and modular UI cutting front-end duplication 45%.",
  },
  {
    name: "Hand-Signal Robot",
    summary:
      "Robot controlled via hand-signal classification computer vision, built with Python and an Apple Vision Pro.",
  },
  {
    name: "Learning Uncertainty RL",
    summary:
      "RL model mapping learning uncertainty from eye dilation, combining Python with cognitive science literature.",
  },
];

export const skills = [
  {
    group: "Languages & Databases",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Swift",
      "Go",
      "Java",
      "C",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Chakra UI",
      "Tailwind",
      "Bootstrap",
      "pandas",
      "NumPy",
      "Matplotlib",
      "bcrypt",
    ],
  },
];
