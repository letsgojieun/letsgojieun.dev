import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "shoobbang",
    title: "Shoobbang",
    subtitle:
      "Cross-platform Baking Recipe & Ingredient Management App Development",
    period: "Freelance, 2024.03 – Present",
    description:
      "Cross-platform Baking Recipe & Ingredient Management App Development",
    image: "/portfolio/shoobbang.mp4",
    techStack: ["Expo", "TypeScript", "Realm", "Zustand", "RESTful API"],
    otherTools: ["Mixpanel", "revenueCat", "i18n", "Figma"],
    role: [
      "Developed automated calculations and data storage features for ratios, cost per unit, and pan size changes",
      "Improved onboarding and UX through data-driven insights from Mixpanel",
      "Led cross-platform development for iOS and Android with multi-language support",
      "Set up QA automation to ensure app quality and stability",
    ],
    achievements: [
      "Identified high churn rate after app install via Mixpanel and added onboarding on critical screens, reducing churn by approximately 18%, improving early user engagement and repeat usage",
      "Automated calculation logic and testing led to reduced bugs and improved user trust and product quality",
      "Developed and applied an auxiliary keypad to reduce the performance overhead of real-time data detection, fully resolving bugs caused by existing auto-calculation logic and significantly enhancing user satisfaction",
      "Continuously iterated based on user feedback, positively affecting app store ratings and user retention",
    ],
  },
  {
    id: "drivers-license-korea",
    title: "Driver's License Korea",
    subtitle:
      "Cross-platform Driver's License Theory Test App & PDF Parser Tool Development",
    period: "Freelance, 2025.05",
    description:
      "Cross-platform Driver's License Theory Test App with PDF Parser Tool Development",
    image: "/portfolio/driving.mp4",
    techStack: [
      "Expo",
      "TypeScript",
      "Zustand",
      "expo-sqlite",
      "Node.js",
      "RESTful API",
    ],
    otherTools: ["Jest", "Figma"],
    role: [
      "Developed tools to automatically parse PDF questions into JSON data",
      "Implemented key features like randomized questions, wrong answer notes, and bookmarks while improving exam-like user experience",
      "Collaborated closely with non-technical clients to gather needs and propose UX improvements",
      "Applied UX enhancements to improve usability and learning efficiency",
      "Implemented Jest tests to ensure over 1,000 exam questions displayed correctly, with no missing answers or misclassified types—significantly boosting core logic reliability and overall product quality.",
    ],
    achievements: [
      "Added quick navigation buttons to improve ease of use",
      "Analyzed excessive ads in existing driver's license apps, rebranded with an 'ad-free driver's license' concept, and redesigned UX/UI accordingly; achieved about 82% average increase in user acquisition on app stores",
      "Created a '200 Most Missed Questions' section to boost focused study and short-term learning efficiency",
      "Successfully obtained follow-up web admin service development project through strong client collaboration",
    ],
  },
  {
    id: "groomer-note",
    title: "GroomerNote",
    subtitle:
      "Pet Groomer Appointment & Sales Management Platform (Web Frontend Lead Developer)",
    period: "2023.01 – 2024.04",
    description: "Pet Groomer Appointment & Sales Management Platform",
    image: "/portfolio/groomernote.mp4",
    techStack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Styled-components",
      "Expo",
      "React Native",
      "AWS Amplify",
      "RESTful API",
    ],
    otherTools: ["Figma"],
    role: [
      "Led full cycle from planning to design, development, and QA through close cooperation with designers, planners, and backend developers",
      "Regularly monitored Voice of Customer (VOC) feedback and directly engaged users via Q&A to identify needs and issues",
      "Built real-time reservation schedule calendar/timeline and sales dashboards",
      "Contributed to app frontend development using React Native",
    ],
    achievements: [
      "Supported over 600 active grooming shops monthly and achieved around 62% conversion rate for paid subscription model (notification messaging)",
      "Implemented React Query to cache server state and reduce API calls by about 40%, lowering server and network costs and improving real-time operations",
      "Proposed, planned, and developed no-show management and group messaging features based on VOC analysis, resulting in approximately 18% reduction in no-shows and better booking management",
      "Developed new screens for service menus, pricing, and dashboards, optimizing UX with loading times under 1.5 seconds on average",
      "Continuous user feedback-driven improvements enhanced customer satisfaction, operational efficiency, and user retention",
    ],
  },
  {
    id: "help-save-tax",
    title: "HelpSaveTax",
    subtitle: "Tax Refund Web Service for Medical Clinics",
    period: "2022.06 – 2022.12",
    description: "Tax Refund Web Service for Medical Clinics",
    image: "/portfolio/helpsavetax.png",
    techStack: [
      "React",
      "Next.js",
      "MonoRepo",
      "Micro Frontend Architecture",
      "Styled-components",
      "RESTful API",
    ],
    otherTools: ["Jenkins CI/CD", "JSDocs", "Figma"],
    role: [
      "Developed tax specialist admin panel (1–5 steps refund process) and responsive landing page",
      "Led frontend-first development by mocking backend APIs using MSW during backend incompletion",
      "Worked closely with design and backend teams to improve UI/UX and shared common component structures",
      "Established Jenkins-based CI/CD pipelines automating builds and deployments for multiple repositories, improving deployment consistency and operational efficiency",
    ],
    achievements: [
      "MonoRepo adoption enhanced component reusability across different services",
      "Automated CI/CD setup significantly reduced build and deploy times and minimized errors, stabilizing deployment environments",
      "Secured a reliable infrastructure to support service launch and operations from day one",
    ],
  },
  {
    id: "medico-fact",
    title: "MedicoFact",
    subtitle:
      "Location-based Hospital & Specialist Recommendation Responsive Web Development",
    period: "2021.10 – 2022.01",
    description:
      "Location-based Hospital & Specialist Recommendation Responsive Web Development",
    image: "/portfolio/medicofact.png",
    techStack: [
      "Next.js",
      "Styled-components",
      "SWR",
      "Daum Kakao Maps API",
      "RESTful API",
    ],
    otherTools: ["SEO tools", "Lighthouse"],
    role: [
      "Integrated map APIs and designed/implemented card list UI",
      "Collaborated with planners, designers, and backend developers to develop full CRUD functionality and optimize UI/UX",
      "Performed SEO optimization through metadata creation and Google Search Console setup, continuously improving web performance metrics",
      "Proposed and integrated user review incentive policies to boost user engagement",
    ],
    achievements: [
      "Achieved Lighthouse search engine score of 90+ (up from 80) after SEO and performance improvements (metadata, Search Console)",
      "Increased new user acquisition by 35% due to SEO efforts",
      "Doubled major keyword traffic and expanded visitor base",
      "Visible growth in user review participation helped activate the service",
    ],
  },
];
