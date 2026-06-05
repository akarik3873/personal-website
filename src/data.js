export const profile = {
  name: "Abraham Chandapillai Karikkineth",
  location: "Berkeley, CA",
  note: "this entire website was coded and deployed from my phone — I didn't open my laptop once",
  about: [
    "EECS at Berkeley",
    "I like fullstack (mobile + web)",
    "I like startups",
  ],
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
    name: "Streamind",
    tech: "React Native, React, Swift",
    summary:
      "Camera-based heart rate & breathing using MediaPipe, rPPG, and FFTs; RBAC sharing and Supabase storage.",
  },
  {
    name: "Woosh Web App",
    tech: "React, JS, Node, Express, Supabase",
    summary:
      "Navigation app with AI chat, RBA auth, and REST + WebSocket messaging under 100ms; modular UI cut duplication 45%.",
  },
  {
    name: "Hand-Signal Robot",
    tech: "Python, AVP",
    summary: "Robot controlled by hand-signal CV.",
  },
  {
    name: "Learning Uncertainty RL",
    tech: "Python",
    summary:
      "RL model mapping learning uncertainty from pupil dilation, after \"Pupil size encodes uncertainty during exploration.\"",
  },
  {
    name: "RISC-V 32-bit CPU",
    tech: "Logisim",
    summary: "32-bit RISC-V CPU built from the logic-gate level up.",
  },
  {
    name: "Google NGram Viewer",
    tech: "Java",
    summary:
      "Word-frequency trend viz with a red-black tree TimeSeries; hyponym search over WordNet using Weighted Quick Union and PriorityQueue.",
  },
  {
    name: "Catan Board Randomization",
    tech: "Python",
    summary:
      "Modular Catan board generator with map-based search and adjacency-object representation.",
  },
];

export const skills = [
  {
    group: "Languages & Databases",
    items: [
      "JS",
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
