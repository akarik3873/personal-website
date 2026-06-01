export const profile = {
  name: "Abraham Karikkineth",
  fullName: "Abraham Chandapillai Karikkineth",
  location: "Berkeley, CA",
  note: "this entire website was coded and deployed from my phone — I didn't open my laptop once",
  about:
    "EECS at UC Berkeley (B.E., May 2027). I build full-stack products end to end — React, Node/Express, Supabase, and ML/RL pipelines.",
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
      "Full-stack analytics platform (React, Express, Supabase) processing 10k+ data points/day. Zod-typed contracts, rate-limited APIs, RL recommendations. Caching + React Query cut API calls 40%.",
  },
  {
    org: "Movicorn",
    role: "SWE Intern",
    summary:
      "Secure admin dashboard (React, Node, Postgres) with RBAC across 10+ endpoints. UI redesign cut task time 25% and input errors 35%.",
  },
  {
    org: "Rooh",
    role: "SWE Intern",
    summary:
      "Gamified dashboard (React) with streaks, XP, and levels. Supabase + Express analytics on 10+ metrics; tuned Firebase APIs for lower runtime and cost.",
  },
  {
    org: "Pioneers of Engineering",
    role: "SWE",
    summary:
      "UI fixes, testing, and refactors on a React IDE. Mentored juniors on reviews and architecture — +30% team velocity.",
  },
  {
    org: "OrcanaAI",
    role: "SWE Intern",
    summary:
      "Fixed WebSocket/routing for +20% URL reliability. Automated SQL schema migrations (~80% faster deploys). Built an auth encryption pipeline (Python, Postgres, bcrypt).",
  },
  {
    org: "SolarSURFER Project",
    role: "PM",
    summary:
      "Coordinated JHU, UMD, and Olin teams on subsystem integration for a student-built satellite. Designed a 5×9.7×9.7 cm hyperspectral camera for LEO structural, thermal, and optical constraints.",
  },
  {
    org: "Institute of Marine & Environmental Technology",
    role: "Research Intern",
    summary:
      "Summer research intern at IMET in Baltimore, contributing to ongoing marine and environmental science projects.",
  },
  {
    org: "Danko Arlington",
    role: "Data Engineering Intern",
    summary:
      "Built data pipelines and reporting tooling for a precision-casting manufacturer, supporting production and quality data workflows.",
  },
  {
    org: "Johns Hopkins Sidney Kimmel Cancer Research Center",
    role: "Research Intern",
    summary:
      "Research intern at the Sidney Kimmel Comprehensive Cancer Center, supporting active oncology research and lab work.",
  },
];

export const projects = [
  {
    name: "Streamind",
    summary:
      "Heart rate & breathing measured locally from the camera with MediaPipe, rPPG, and FFTs. React Native + Swift, RBAC sharing, Supabase storage.",
  },
  {
    name: "Woosh Navigation",
    summary:
      "Full-stack platform (React, Express, Supabase) with AI chat and REST + WebSocket messaging under 100ms. Modular UI cut front-end duplication 45%.",
  },
  {
    name: "Hand-Signal Robot",
    summary:
      "Robot controlled by hand-signal CV — Python + Apple Vision Pro.",
  },
  {
    name: "Learning Uncertainty RL",
    summary: "RL model mapping learning uncertainty from eye dilation.",
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
