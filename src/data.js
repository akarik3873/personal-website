export const profile = {
  name: "Abraham Chandapillai Karikkineth",
  location: "Berkeley, CA",
  note: "this entire website was coded and deployed from my phone — I didn't open my laptop once",
  about: [
    "EECS at Berkeley (junior)",
    "I like fullstack (mobile + web)",
    "I like startups",
  ],
  links: [
    { label: "Email", icon: "email", href: "mailto:akarik3873@gmail.com" },
    { label: "GitHub", icon: "github", href: "https://github.com/akarik3873" },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/abrahamkarikkineth",
    },
    { label: "X", icon: "x", href: "https://x.com/akarik3873" },
  ],
};

export const experience = [
  {
    org: "Stealth Startup",
    role: "Founder",
    summary:
      "Analytics platform handling 10k+ data points/day with Zod-typed contracts, rate-limiting, RL recommendations, and React Query caching that cut API calls 40%.",
  },
  {
    org: "Movicorn",
    role: "SWE Intern",
    summary:
      "Secure admin dashboard with RBAC across 10+ endpoints; UI redesign cut task time 25% and errors 35%.",
  },
  {
    org: "Rooh",
    role: "SWE Intern",
    summary:
      "Gamified dashboard with streaks, XP, and levels; analytics across 10+ metrics; tuned Firebase APIs.",
  },
  {
    org: "Pioneers of Engineering",
    role: "SWE",
    summary:
      "UI fixes and refactors on a custom IDE; mentored juniors for +30% team velocity.",
  },
  {
    org: "OrcanaAI",
    role: "SWE Intern",
    summary:
      "Fixed WebSocket/routing for +20% reliability; automated schema migrations 80% faster; built a bcrypt auth encryption pipeline.",
  },
  {
    org: "SolarSURFER Project",
    role: "PM",
    summary:
      "Led JHU/UMD/Olin teams on a student-built satellite; designed a 5×9.7×9.7 cm hyperspectral camera for LEO.",
  },
  {
    org: "Institute of Marine & Environmental Technology",
    role: "Research Intern",
    summary:
      "Fluorescence analysis with fluorometers and spectrometers; microbial inactivation and gel electrophoresis for DNA sequencing.",
  },
  {
    org: "Danko Arlington",
    role: "Data Ops Intern",
    summary:
      "Managed 100+ inventory items in a custom database; photogrammetry for defense QC.",
  },
  {
    org: "Johns Hopkins Sidney Kimmel Cancer Research Center",
    role: "Research Intern",
    summary:
      "Restructured lab workflow, saving $1,000+; ran MiniPrep, MaxiPrep, IHC staining, and genotyping.",
  },
];

export const projects = [
  {
    name: "Hand-Signal Robot",
    summary:
      "Robot controlled by hand-signal CV — Python on an Apple Vision Pro.",
  },
  {
    name: "Catan Board Randomization",
    summary:
      "Catan board generator with map-based search and adjacency-object representation — Python.",
  },
  {
    name: "Streamind",
    summary:
      "Camera-based heart rate & breathing in React Native, React, and Swift using MediaPipe, rPPG, and FFTs; RBAC sharing and Supabase storage.",
  },
  {
    name: "RISC-V 32-bit CPU",
    summary:
      "32-bit RISC-V CPU built in Logisim from the logic-gate level up.",
  },
  {
    name: "Woosh Web App",
    summary:
      "Navigation app (React, JS, Node, Express, Supabase) with AI chat, RBA auth, and REST + WebSocket messaging under 100ms; modular UI cut duplication 45%.",
  },
  {
    name: "Learning Uncertainty RL",
    summary:
      "Python RL model mapping learning uncertainty from pupil dilation, after \"Pupil size encodes uncertainty during exploration.\"",
  },
  {
    name: "Google NGram Viewer",
    summary:
      "Java word-frequency trend viz with a red-black tree TimeSeries; hyponym search over WordNet using Weighted Quick Union and PriorityQueue.",
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
