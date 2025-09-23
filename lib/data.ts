export interface Quest {
  id: string;
  title: string;
  description: string;
  type: 'main' | 'side' | 'boss';
  status: 'locked' | 'available' | 'completed';
  difficulty: 'easy' | 'medium' | 'hard' | 'legendary';
  rewards: Reward[];
  requirements?: string[];
  content: {
    challenge: string;
    approach: string;
    results: string;
    metrics: Metric[];
    tools: string[];
  };
  image?: string;
  duration: string;
  company: string;
}

export interface Reward {
  type: 'xp' | 'achievement' | 'skill' | 'metric';
  name: string;
  value: string;
  description: string;
  icon: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  icon: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Character {
  name: string;
  level: number;
  xp: number;
  xpToNext: number;
  class: string;
  skills: {
    [key: string]: number;
  };
  equipment: string[];
  achievements: Achievement[];
}

export const character: Character = {
  name: "Snehal Bondre",
  level: 7,
  xp: 2100,
  xpToNext: 400,
  class: "Product Manager",
  skills: {
    "User Research": 88,
    "Data Analysis": 85,
    "Strategy": 90,
    "Leadership": 82,
    "Technical": 78,
    "Communication": 92
  },
  equipment: ["Figma", "Jira", "SQL", "Analytics", "Miro", "LMS Systems"],
  achievements: []
};

export const quests: Quest[] = [
  {
    id: "edsoma-product-strategy",
    title: "The Edsoma Innovation Quest",
    description: "Lead product strategy and innovation at Edsoma Reads Ed-tech startup",
    type: "main",
    status: "completed",
    difficulty: "hard",
    duration: "2+ years",
    company: "Edsoma Reads",
    rewards: [
      { type: "xp", name: "Experience", value: "+600", description: "Gained deep Ed-tech product insights", icon: "⭐" },
      { type: "metric", name: "Product Impact", value: "High", description: "Transformed education through innovative products", icon: "📈" },
      { type: "achievement", name: "Ed-tech Innovator", value: "Unlocked", description: "Proven ability to drive educational innovation", icon: "🏆" }
    ],
    content: {
      challenge: "Leading product strategy at Edsoma Reads, an Ed-tech startup focused on transforming education through innovative products. The challenge was to develop strategies that empower both learners and educators while driving positive change in the education landscape.",
      approach: "Applied problem-solving skills and product innovation expertise to craft solutions that address user pain points in education. Developed user-centric strategies through comprehensive research and stakeholder engagement.",
      results: "Successfully led product strategies that transformed education through innovative products, empowering both learners and educators in the Ed-tech space.",
      metrics: [
        { label: "Product Strategies", value: "10+", change: "developed", icon: "📈" },
        { label: "User Impact", value: "High", change: "positive", icon: "👥" },
        { label: "Innovation Rate", value: "90%", change: "successful", icon: "💡" },
        { label: "Stakeholder Satisfaction", value: "95%", change: "rating", icon: "😊" }
      ],
      tools: ["Product Strategy", "User Research", "Stakeholder Management", "Innovation Frameworks", "Ed-tech Platforms"]
    }
  },
  {
    id: "product-strategy",
    title: "The Strategy Boss Battle",
    description: "Defeat the Product Strategy Challenge and launch successful features",
    type: "boss",
    status: "completed",
    difficulty: "legendary",
    duration: "1 year",
    company: "Multiple Projects",
    rewards: [
      { type: "xp", name: "Experience", value: "+800", description: "Mastered product strategy and execution", icon: "⭐" },
      { type: "achievement", name: "Strategy Master", value: "Unlocked", description: "Proven strategic thinking and execution", icon: "🎯" },
      { type: "skill", name: "Strategic Planning", value: "+15", description: "Enhanced strategic planning abilities", icon: "🧠" }
    ],
    content: {
      challenge: "Leading product strategy across multiple projects while balancing user needs, business goals, and technical constraints in a fast-paced environment.",
      approach: "Developed comprehensive product roadmaps, conducted market research, implemented data-driven decision making, and built cross-functional alignment through clear communication and stakeholder management.",
      results: "Successfully launched multiple high-impact features that drove significant business growth and user satisfaction.",
      metrics: [
        { label: "Features Launched", value: "12+", change: "successful", icon: "🚀" },
        { label: "User Satisfaction", value: "4.8/5", change: "rating", icon: "😊" },
        { label: "Revenue Impact", value: "+25%", change: "increase", icon: "💰" },
        { label: "Team Efficiency", value: "+35%", change: "improvement", icon: "⚡" }
      ],
      tools: ["Product Roadmaps", "Market Research", "Stakeholder Management", "Data Analysis", "User Research"]
    }
  },
  {
    id: "nyu-lms-consultant",
    title: "The NYU LMS Quest",
    description: "Serve as LMS Consultant at NYU, honing communication and user research skills",
    type: "main",
    status: "completed",
    difficulty: "medium",
    duration: "1 year",
    company: "NYU",
    rewards: [
      { type: "xp", name: "Experience", value: "+400", description: "Enhanced communication and user research skills", icon: "⭐" },
      { type: "skill", name: "Communication", value: "+15", description: "Mastered stakeholder communication", icon: "💬" },
      { type: "achievement", name: "Academic Innovator", value: "Unlocked", description: "Proven expertise in educational technology", icon: "🎓" }
    ],
    content: {
      challenge: "Serving as an LMS Consultant at NYU, where the challenge was to improve learning management systems and enhance user experience for both students and faculty while maintaining academic excellence.",
      approach: "Applied deep understanding of user research and communication skills to develop user-centric strategies that resonated with academic stakeholders. Focused on improving LMS functionality and user adoption.",
      results: "Successfully enhanced LMS systems at NYU, improving user experience and adoption rates while maintaining high academic standards.",
      metrics: [
        { label: "LMS Improvements", value: "20+", change: "implemented", icon: "🔧" },
        { label: "User Adoption", value: "+35%", change: "increase", icon: "📈" },
        { label: "Stakeholder Satisfaction", value: "4.8/5", change: "rating", icon: "😊" },
        { label: "Communication Score", value: "95%", change: "effectiveness", icon: "💬" }
      ],
      tools: ["LMS Systems", "User Research", "Stakeholder Communication", "Academic Technology", "Process Improvement"]
    }
  },
  {
    id: "data-analysis",
    title: "The Data Wizard Quest",
    description: "Master data analysis and drive insights",
    type: "main",
    status: "completed",
    difficulty: "hard",
    duration: "Ongoing",
    company: "All Projects",
    rewards: [
      { type: "xp", name: "Experience", value: "+400", description: "Mastered data-driven decision making", icon: "⭐" },
      { type: "skill", name: "Data Analysis", value: "+12", description: "Enhanced analytical capabilities", icon: "📊" },
      { type: "achievement", name: "Data Wizard", value: "Unlocked", description: "Proven data analysis expertise", icon: "🧙‍♂️" }
    ],
    content: {
      challenge: "Making sense of complex data sets to drive product decisions, measure success, and identify opportunities for improvement across multiple products and features.",
      approach: "Implemented comprehensive analytics tracking, created custom dashboards, conducted cohort analysis, and developed predictive models to understand user behavior and product performance.",
      results: "Enabled data-driven product decisions that led to measurable improvements in key metrics and user experience.",
      metrics: [
        { label: "Dashboards Created", value: "20+", change: "analytics", icon: "📊" },
        { label: "Data Models", value: "10+", change: "predictive", icon: "🤖" },
        { label: "Insights Delivered", value: "50+", change: "actionable", icon: "💡" },
        { label: "Decision Impact", value: "+30%", change: "improvement", icon: "📈" }
      ],
      tools: ["SQL", "Python", "Tableau", "Mixpanel", "Google Analytics", "Excel"]
    }
  },
  {
    id: "bme-social-impact",
    title: "The Social Impact Quest",
    description: "Apply problem-solving skills to make meaningful difference for the homeless at BME-Street Care",
    type: "boss",
    status: "completed",
    difficulty: "hard",
    duration: "1 year",
    company: "BME-Street Care",
    rewards: [
      { type: "xp", name: "Experience", value: "+500", description: "Developed empathy and social impact skills", icon: "⭐" },
      { type: "skill", name: "Social Impact", value: "+20", description: "Enhanced community problem-solving", icon: "❤️" },
      { type: "achievement", name: "Social Advocate", value: "Unlocked", description: "Proven commitment to social impact", icon: "🌍" }
    ],
    content: {
      challenge: "Working with BME-Street Care to address homelessness and create meaningful social impact. The challenge was to apply product management and problem-solving skills to help vulnerable communities while driving positive social change.",
      approach: "Applied empathy-driven problem-solving approach to understand the needs of homeless individuals and develop solutions that create meaningful impact. Used product management methodologies to address social challenges systematically.",
      results: "Successfully contributed to social impact initiatives that made a meaningful difference for homeless individuals, demonstrating the power of applying product management skills to social causes.",
      metrics: [
        { label: "Lives Impacted", value: "100+", change: "individuals helped", icon: "👥" },
        { label: "Social Programs", value: "5+", change: "developed", icon: "🌍" },
        { label: "Community Engagement", value: "90%", change: "participation", icon: "🤝" },
        { label: "Impact Score", value: "High", change: "measurable", icon: "📊" }
      ],
      tools: ["Empathy Mapping", "Social Impact Assessment", "Community Engagement", "Problem-Solving Frameworks", "Stakeholder Management"]
    }
  },
  {
    id: "campk12-internship",
    title: "The Foundation Quest",
    description: "Begin the journey as Technical Assistant (Product Team) Intern at CampK-12",
    type: "main",
    status: "completed",
    difficulty: "easy",
    duration: "6 months",
    company: "CampK-12",
    rewards: [
      { type: "xp", name: "Experience", value: "+200", description: "Gained hands-on technical product experience", icon: "⭐" },
      { type: "skill", name: "Technical", value: "+10", description: "Enhanced technical product knowledge", icon: "🔧" },
      { type: "achievement", name: "Product Foundation", value: "Unlocked", description: "Built strong product management foundation", icon: "🏗️" }
    ],
    content: {
      challenge: "Starting the product management journey as a Technical Assistant (Product Team) Intern at CampK-12, where the challenge was to gain hands-on experience in the technical aspects of product development while learning the fundamentals of product management.",
      approach: "Immersed in the technical side of product development, learning how products are built from the ground up. Gained practical experience in product team operations and technical implementation.",
      results: "Successfully built a strong foundation in product management, gaining crucial technical knowledge that has been pivotal throughout the product management career journey.",
      metrics: [
        { label: "Technical Skills", value: "15+", change: "learned", icon: "🔧" },
        { label: "Product Knowledge", value: "90%", change: "improvement", icon: "📚" },
        { label: "Team Collaboration", value: "High", change: "rating", icon: "👥" },
        { label: "Foundation Score", value: "Strong", change: "established", icon: "🏗️" }
      ],
      tools: ["Technical Documentation", "Product Development", "Team Collaboration", "Technical Analysis", "Product Planning"]
    }
  },
  {
    id: "future-vision",
    title: "The Next Adventure",
    description: "Chart the course for future product innovations and career growth",
    type: "main",
    status: "available",
    difficulty: "legendary",
    duration: "Ongoing",
    company: "Future Opportunities",
    rewards: [
      { type: "xp", name: "Experience", value: "TBD", description: "Shape the future of products", icon: "⭐" },
      { type: "achievement", name: "Visionary", value: "Unlocked", description: "Lead product innovation", icon: "🔮" },
      { type: "skill", name: "Innovation", value: "+20", description: "Drive product innovation", icon: "💡" }
    ],
    content: {
      challenge: "Looking ahead to the next phase of my career, focusing on building innovative products that solve real-world problems and create meaningful impact for users and businesses. Ready to take on new challenges in product management.",
      approach: "Continuously learning about emerging technologies, market trends, and user needs. Exploring new communication techniques, diving deep into user research, and seeking innovative strategies to tackle complex challenges.",
      results: "Ready to connect and collaborate with fellow problem solvers, tech enthusiasts, and advocates for positive change. Prepared to innovate, learn, and drive meaningful impact in the next role.",
      metrics: [
        { label: "Learning Hours", value: "500+", change: "continuous", icon: "📚" },
        { label: "Networking", value: "100+", change: "connections", icon: "🤝" },
        { label: "Innovation Ideas", value: "25+", change: "concepts", icon: "💡" },
        { label: "Future Readiness", value: "100%", change: "prepared", icon: "🚀" }
      ],
      tools: ["Continuous Learning", "Market Research", "Networking", "Innovation Frameworks", "Strategic Thinking"]
    }
  }
];

export const achievements: Achievement[] = [
  {
    id: "ed-tech-innovator",
    name: "Ed-tech Innovator",
    description: "Led product strategy at Edsoma Reads, transforming education through innovative products",
    icon: "🎓",
    unlocked: true,
    rarity: "epic"
  },
  {
    id: "social-advocate",
    name: "Social Advocate",
    description: "Applied PM skills to make meaningful difference for homeless individuals at BME-Street Care",
    icon: "🌍",
    unlocked: true,
    rarity: "legendary"
  },
  {
    id: "academic-innovator",
    name: "Academic Innovator",
    description: "Enhanced LMS systems at NYU, improving user experience and adoption rates",
    icon: "🏫",
    unlocked: true,
    rarity: "rare"
  },
  {
    id: "problem-solver",
    name: "Problem Solver",
    description: "Built reputation as a fixer turned innovator with innate problem-solving abilities",
    icon: "🔧",
    unlocked: true,
    rarity: "epic"
  },
  {
    id: "communication-master",
    name: "Communication Master",
    description: "Mastered stakeholder communication and user research at NYU",
    icon: "💬",
    unlocked: true,
    rarity: "rare"
  },
  {
    id: "product-foundation",
    name: "Product Foundation",
    description: "Built strong foundation as Technical Assistant at CampK-12",
    icon: "🏗️",
    unlocked: true,
    rarity: "common"
  },
  {
    id: "nyu-graduate",
    name: "NYU Graduate",
    description: "Earned M.S. in Management of Technology from NYU",
    icon: "🎓",
    unlocked: true,
    rarity: "epic"
  },
  {
    id: "explorer",
    name: "Explorer",
    description: "Visited all sections of the portfolio",
    icon: "🗺️",
    unlocked: false,
    rarity: "common"
  },
  {
    id: "completionist",
    name: "Completionist",
    description: "Completed all available quests",
    icon: "💯",
    unlocked: false,
    rarity: "legendary"
  }
];
