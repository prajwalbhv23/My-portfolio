export const profile = {
  name: "Prajwal Bhovi",
  firstName: "Prajwal",
  lastName: "Bhovi",
  role: "Computer Science Engineer (Data Science)",
  professionalTitle: "AI/ML Engineer | Data Science Graduate",
  location: "Kumta, Karnataka, India",
  email: "prjwlbhv@gmail.com",
  phone: "+919380989346",
  githubUrl: "https://github.com/prajwalbhv23",
  linkedinUrl: "https://linkedin.com/in/prajwal-bhovi",
  resumeUrl: "/resume/Prajwal_Bhovi_Resume.pdf",
  profileImage: "/assets/PP.png",
  domain: "prajwalbhovi.dev",
  siteUrl: "https://prajwalbhovi.dev",
  heroLine1: "AI/ML",
  heroLine2: "Engineer",
  typingTexts: [
    "Data Science Graduate",
    "AI/ML Engineer",
    "Building Intelligent Systems",
  ],
  heroDescription:
    "Recent Data Science graduate passionate about Artificial Intelligence, Machine Learning, Generative AI, Agentic AI, and Geospatial Analytics. Focused on building intelligent systems that transform data into actionable insights and solve real-world problems.",
  aboutParagraph:[
    "I am a recent Data Science graduate with a strong interest in Artificial Intelligence, Machine Learning, Generative AI, and intelligent automation. My experience includes developing machine learning models, geospatial analytics solutions, AI-powered applications, and data-driven systems.", 

    " I enjoy exploring emerging technologies such as Retrieval-Augmented Generation (RAG), AI Agents, LangChain, LangGraph, and modern machine learning workflows. My goal is to contribute to impactful AI solutions while continuously expanding my technical expertise."
  ],
  quote:
    "Turning data, models, and geospatial signals into intelligent systems that solve real problems.",
  heroSkills: ["Python", "Machine Learning", "NLP", "Data Analytics", "Generative AI", "Agentic AI", "Geospatial Analytics"],
  copyright: "© 2026 Prajwal Bhovi — All rights reserved.",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features?: string[];
  key_features: string[];
  image?: string;
  images?: string[];
  image_url?: string | null;
  image_urls?: string[];
  demoUrl?: string;
  githubUrl?: string;
  live_url?: string | null;
  github_url?: string | null;
  overview?: string;
  problemStatement?: string;
  objective?: string;
  solution?: string;
  workflow?: string;
  impact?: string;
  architecture?: string[];
  challenges?: string[];
  futureImprovements?: string[];
  results?: string[];
  lessonsLearned?: string[];
  created_at: string;
};

export const projects: Project[] = [
  {
    id: "a1000001-0001-4000-8000-000000000001",
    title: "AI Powered Urban Heat Island Mitigation",
    description:
      "Geospatial machine learning platform that analyzes satellite imagery to identify urban heat island hotspots and recommend mitigation strategies for sustainable city planning.",
    technologies: [
      "Python",
      "Google Earth Engine",
      "QGIS",
      "Machine Learning",
    ],
    key_features: [
      "Urban heat island hotspot detection from satellite data",
      "Land surface temperature and vegetation index analysis",
      "Machine learning models for heat-prone region identification",
      "Interactive geospatial visualization and mitigation insights",
    ],
    features: [
      "Urban heat island hotspot detection from satellite data",
      "Land surface temperature and vegetation index analysis",
      "Machine learning models for heat-prone region identification",
      "Interactive geospatial visualization and mitigation insights",
    ],
    overview:
      "A geospatial AI project focused on identifying urban heat patterns from satellite-derived indicators and turning those signals into practical planning insights.",
    problemStatement:
      "Rapid urban growth increases heat retention, but planners often need clearer spatial evidence to prioritize mitigation zones.",
    objective:
      "Build a data-driven workflow that highlights heat-prone areas and supports sustainable intervention planning.",
    solution:
      "Combined satellite imagery, vegetation indicators, land surface temperature analysis, and machine learning to detect hotspots and recommend mitigation opportunities.",
    workflow:
      "Collected geospatial layers, processed thermal and vegetation indices, trained hotspot identification models, and visualized findings for decision-making.",
    impact:
      "Helped translate complex geospatial data into readable insights for greener, cooler urban planning.",
    architecture: [
      "Satellite data ingestion",
      "Geospatial preprocessing",
      "Feature extraction",
      "Machine learning analysis",
      "Visualization and recommendation layer",
    ],
    challenges: [
      "Handling noisy satellite-derived data",
      "Balancing model output with interpretable geospatial evidence",
      "Presenting technical findings in a planner-friendly format",
    ],
    results: [
      "Detected high-priority heat zones",
      "Generated mitigation-focused insights",
      "Created a reusable geospatial analysis workflow",
    ],
    lessonsLearned: [
      "Geospatial AI is strongest when model predictions remain explainable.",
      "Vegetation, surface temperature, and land-use context are most useful when analyzed together.",
    ],
    image: "/assets/project-uhi.png",
    images: ["/assets/project-uhi.png"],
    image_url: "/assets/project-uhi.png",
    created_at: "2025-06-01T00:00:00Z",
  },
  {
    id: "a1000001-0001-4000-8000-000000000002",
    title: "AI Resume Screening Automation System",
    description:
      "Automated resume screening pipeline that uses LLM APIs and workflow automation to evaluate candidate profiles against job requirements at scale.",
    technologies: ["Python", "LLM APIs", "REST APIs", "n8n"],
    key_features: [
      "LLM-powered resume parsing and candidate scoring",
      "Automated screening workflows with n8n",
      "REST API integration for end-to-end processing",
      "Structured evaluation against role requirements",
    ],
    features: [
      "LLM-powered resume parsing and candidate scoring",
      "Automated screening workflows with n8n",
      "REST API integration for end-to-end processing",
      "Structured evaluation against role requirements",
    ],
    overview:
      "An automation system that screens candidate resumes against job criteria using LLM-driven extraction and scoring.",
    problemStatement:
      "Manual resume screening is slow, inconsistent, and difficult to scale when application volume grows.",
    objective:
      "Create an automated pipeline that can parse resumes, compare them with job requirements, and produce structured candidate evaluations.",
    solution:
      "Used LLM APIs, REST integrations, and n8n workflows to extract resume data and score candidates against role-specific requirements.",
    workflow:
      "Ingest resumes, parse candidate details, evaluate match quality, score profiles, and return structured results for review.",
    impact:
      "Reduced repetitive screening effort and improved consistency in early candidate evaluation.",
    futureImprovements: [
      "Add recruiter feedback loops",
      "Improve explainability for scoring decisions",
      "Support more resume formats and job templates",
    ],
    image: "/assets/project-resume.png",
    images: ["/assets/project-resume.png"],
    image_url: "/assets/project-resume.png",
    created_at: "2025-04-15T00:00:00Z",
  },
  {
    id: "a1000001-0001-4000-8000-000000000003",
    title: "Real Estate Price Prediction",
    description:
      "Machine learning web application that predicts residential property prices using location, area, and property features to support data-driven real estate decisions.",
    technologies: ["Python", "Flask", "scikit-learn", "MySQL"],
    key_features: [
      "Accurate price prediction with supervised learning",
      "Feature engineering for location and property attributes",
      "Flask API and interactive prediction interface",
      "MySQL-backed data storage and model serving",
    ],
    features: [
      "Accurate price prediction with supervised learning",
      "Feature engineering for location and property attributes",
      "Flask API and interactive prediction interface",
      "MySQL-backed data storage and model serving",
    ],
    overview:
      "A machine learning application for estimating residential property prices from structured real estate inputs.",
    problemStatement:
      "Property pricing can be opaque for buyers and sellers when market, location, and feature signals are difficult to compare.",
    objective:
      "Build a prediction workflow that converts location and property attributes into a clear price estimate.",
    solution:
      "Trained supervised learning models, served predictions through Flask, and used MySQL to organize supporting data.",
    workflow:
      "Clean data, engineer property features, train models, evaluate predictions, and expose results through an interactive interface.",
    impact:
      "Created a practical decision-support tool for property price estimation.",
    image: "/assets/project-realestate.png",
    images: ["/assets/project-realestate.png"],
    image_url: "/assets/project-realestate.png",
    created_at: "2025-02-20T00:00:00Z",
  },
  {
    id: "a1000001-0001-4000-8000-000000000004",
    title: "RAG LMS Chatbot",
    description:
      "Retrieval-augmented generation chatbot for an LMS platform with document ingestion, semantic search, vector storage, and LLM-powered bilingual responses.",
    technologies: [
      "Python",
      "FastAPI",
      "LLMs",
      "Embeddings",
      "Semantic Search",
      "Vector Database",
    ],
    key_features: [
      "Document ingestion and chunking pipeline",
      "Embedding generation and vector database retrieval",
      "Context-aware answers grounded in course materials",
      "FastAPI backend with bilingual LMS integration",
    ],
    features: [
      "Document ingestion and chunking pipeline",
      "Embedding generation and vector database retrieval",
      "Context-aware answers grounded in course materials",
      "FastAPI backend with bilingual LMS integration",
    ],
    overview:
      "A Retrieval-Augmented Generation chatbot designed for LMS content, document retrieval, and multilingual learner support.",
    problemStatement:
      "Learners need fast, reliable answers grounded in course materials instead of generic chatbot responses.",
    objective:
      "Create a chatbot backend that retrieves relevant LMS content and uses LLMs to answer with context-aware responses.",
    solution:
      "Built document ingestion, chunking, embeddings, semantic search, vector retrieval, and FastAPI endpoints for LMS integration.",
    workflow:
      "Upload documents, split content into chunks, generate embeddings, store vectors, retrieve relevant context, and generate answers.",
    impact:
      "Improved access to learning content through grounded, multilingual conversational support.",
    architecture: [
      "FastAPI backend",
      "Document processing pipeline",
      "Embedding generation",
      "Vector database retrieval",
      "LLM response layer",
    ],
    challenges: [
      "Maintaining answer grounding",
      "Designing meaningful document chunks",
      "Supporting multilingual user queries",
    ],
    results: [
      "Created a working RAG pipeline",
      "Integrated semantic search with LMS content",
      "Delivered context-aware chatbot responses",
    ],
    image: "/assets/project-rag.png",
    images: ["/assets/project-rag.png"],
    image_url: "/assets/project-rag.png",
    created_at: "2024-11-10T00:00:00Z",
  },
  {
    id: "a1000001-0001-4000-8000-000000000005",
    title: "AI Powered Process Optimization",
    description:
      "Analytics and machine learning solution that identifies process bottlenecks and recommends data-driven optimizations for improved operational efficiency.",
    technologies: ["Python", "Machine Learning", "Analytics"],
    key_features: [
      "Process data analysis and feature engineering",
      "Predictive modeling for performance optimization",
      "Actionable insights from operational datasets",
      "Scalable analytics workflow for continuous improvement",
    ],
    features: [
      "Process data analysis and feature engineering",
      "Predictive modeling for performance optimization",
      "Actionable insights from operational datasets",
      "Scalable analytics workflow for continuous improvement",
    ],
    overview:
      "An analytics and machine learning workflow for finding operational bottlenecks and recommending process improvements.",
    problemStatement:
      "Operational teams often have process data but lack a clear way to convert it into optimization decisions.",
    objective:
      "Identify bottlenecks, predict performance issues, and recommend improvements using data-driven analysis.",
    solution:
      "Combined process analytics, feature engineering, and predictive modeling to surface actionable recommendations.",
    workflow:
      "Analyze operational data, engineer performance indicators, train optimization models, and report improvement opportunities.",
    impact:
      "Supported more informed operational decisions and continuous improvement planning.",
    image: "/assets/project-optimization.png",
    images: ["/assets/project-optimization.png"],
    image_url: "/assets/project-optimization.png",
    created_at: "2024-09-01T00:00:00Z",
  },
];

export type Certificate = {
  id: number;
  title: string;
  image_url: string;
  created_at: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "IBM Machine Learning",
    image_url: "/assets/cert-ibm-ml.png",
    created_at: "2025-01-01T00:00:00Z",
  },
  {
    id: 2,
    title: "IBM Data Analysis",
    image_url: "/assets/cert-ibm-analysis.png",
    created_at: "2025-02-01T00:00:00Z",
  },
  {
    id: 3,
    title: "IBM Data Visualization",
    image_url: "/assets/cert-ibm-viz.png",
    created_at: "2025-03-01T00:00:00Z",
  },
  {
    id: 4,
    title: "Coursera Neural Networks & Deep Learning",
    image_url: "/assets/cert-coursera-dl.png",
    created_at: "2024-12-01T00:00:00Z",
  },
];

export type TechStack = {
  id: number;
  name: string;
  logo_url: string;
  created_at: string;
};

const devicon = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`;

export const techStacks: TechStack[] = [
  { id: 1, name: "Python", logo_url: devicon("python/python-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 2, name: "SQL", logo_url: devicon("mysql/mysql-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 3, name: "JavaScript", logo_url: devicon("javascript/javascript-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 4, name: "Machine Learning", logo_url: devicon("tensorflow/tensorflow-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 5, name: "Deep Learning", logo_url: devicon("pytorch/pytorch-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 6, name: "Natural Language Processing", logo_url: devicon("python/python-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 7, name: "Large Language Models", logo_url: devicon("openai/openai-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 8, name: "Retrieval-Augmented Generation", logo_url: devicon("python/python-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 9, name: "Computer Vision", logo_url: devicon("opencv/opencv-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 10, name: "Data Analytics", logo_url: devicon("pandas/pandas-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 11, name: "Feature Engineering", logo_url: devicon("numpy/numpy-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 12, name: "Model Evaluation", logo_url: devicon("scikitlearn/scikitlearn-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 13, name: "Geospatial Analytics", logo_url: devicon("python/python-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 14, name: "FastAPI", logo_url: devicon("fastapi/fastapi-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 15, name: "Flask", logo_url: devicon("flask/flask-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 16, name: "React", logo_url: devicon("react/react-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 17, name: "NumPy", logo_url: devicon("numpy/numpy-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 18, name: "Pandas", logo_url: devicon("pandas/pandas-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 19, name: "scikit-learn", logo_url: devicon("scikitlearn/scikitlearn-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 20, name: "TensorFlow", logo_url: devicon("tensorflow/tensorflow-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 21, name: "MySQL", logo_url: devicon("mysql/mysql-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 22, name: "MongoDB", logo_url: devicon("mongodb/mongodb-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 23, name: "Git", logo_url: devicon("git/git-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 24, name: "GitHub", logo_url: devicon("github/github-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 25, name: "VS Code", logo_url: devicon("vscode/vscode-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 26, name: "Google Earth Engine", logo_url: devicon("google/google-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 27, name: "QGIS", logo_url: devicon("python/python-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 28, name: "Google Colab", logo_url: devicon("google/google-original.svg"), created_at: "2025-01-01T00:00:00Z" },
  { id: 29, name: "Google Search Console", logo_url: devicon("google/google-original.svg"), created_at: "2025-01-01T00:00:00Z" },
];

export type ExperienceProject = {
  title: string;
  description: string;
  technologies?: string[];
  keyFeatures?: string[];
  keyWork?: string[];
  outcome: string;
  githubUrl?: string;
  demoUrl?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  tools: string[];
  images?: string[];
  timeline: { label: string; detail: string }[];
  projects: ExperienceProject[];
};

export const experiences: Experience[] = [
  {
    id: "yaticorp-ai-ml-intern",
    company: "Yaticorp Pvt Ltd",
    role: "AI / ML Intern",
    duration: "January 2026 - March 2026",
    location: "India",
    description:
      "Worked on AI-powered applications including Retrieval-Augmented Generation (RAG) systems, multilingual LMS chatbot development, backend API integration, semantic search, document processing, and technical SEO analysis.",
    overview:
      "A focused internship across applied AI, backend services, document intelligence, and technical SEO workflows for production-facing systems.",
    responsibilities: [
      "Built RAG-powered LMS Chatbot",
      "Designed semantic search pipeline",
      "Document chunking and embeddings",
      "LangChain integration",
      "FastAPI backend development",
      "Vector database integration",
      "Google Search Console analysis",
      "Technical SEO optimization",
      "Indexing issue diagnosis",
      "Sitemap analysis",
      "Canonical issue analysis",
      "Performance optimization",
      "Worked with multilingual datasets",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Vector Database",
      "RAG",
      "LLMs",
      "REST APIs",
      "Google Search Console",
      "SEO",
      "Git",
      "MongoDB",
    ],
    achievements: [
      "Built a retrieval workflow for LMS document question answering",
      "Improved technical SEO visibility through indexing and canonical diagnostics",
      "Worked across AI backend development, semantic search, and multilingual data handling",
    ],
    tools: [
      "VS Code",
      "Git",
      "Google Search Console",
      "FastAPI",
      "LangChain",
      "MongoDB",
    ],
    images: ["/assets/project-rag.png", "/assets/project-optimization.png"],
    timeline: [
      {
        label: "January 2026",
        detail: "Started AI/ML internship and explored LMS chatbot requirements.",
      },
      {
        label: "February 2026",
        detail: "Built RAG pipeline, semantic search flow, and backend API integration.",
      },
      {
        label: "March 2026",
        detail: "Completed SEO analysis, indexing diagnosis, and project handoff improvements.",
      },
    ],
    projects: [
      {
        title: "RAG LMS Chatbot",
        description:
          "A multilingual LMS chatbot powered by Retrieval-Augmented Generation, document chunking, embeddings, vector retrieval, and FastAPI backend services.",
        technologies: [
          "Python",
          "FastAPI",
          "LangChain",
          "Vector Database",
          "RAG",
          "LLMs",
          "MongoDB",
        ],
        keyFeatures: [
          "Document ingestion and chunking",
          "Embedding-based semantic search",
          "Context-aware LMS answers",
          "Multilingual response support",
          "REST API integration",
        ],
        outcome:
          "Delivered a working chatbot pipeline that retrieves LMS content and produces grounded AI responses.",
      },
      {
        title: "Technical SEO Analysis",
        description:
          "Technical SEO audit work focused on Google Search Console analysis, indexing issues, sitemap health, canonical signals, and performance reports.",
        keyWork: [
          "Search Console Analysis",
          "Canonical Issues",
          "Indexing",
          "Performance Reports",
          "Sitemap Analysis",
        ],
        outcome:
          "Identified visibility issues and provided optimization direction for cleaner indexing and healthier site performance.",
      },
    ],
  },
];

export const internshipExperience = {
  company: "Yaticorp Pvt Ltd",
  role: "AI/ML Intern",
  responsibilities: [
    "Developed a Retrieval-Augmented Generation (RAG) chatbot.",
    "Built a complete LMS platform.",
    "Implemented embeddings and semantic search.",
    "Built document ingestion pipelines.",
    "Integrated LLMs.",
    "Developed REST APIs.",
    "Added bilingual support.",
    "Worked on SEO optimization.",
    "Google Search Console analysis.",
    "Technical SEO improvements.",
  ],
};

export const education = {
  degree: "Bachelor of Engineering",
  field: "Computer Science Engineering (Data Science)",
  institution: "Alvas Institute of Engineering & Technology",
  cgpa: "7.0",
};

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((experience) => experience.id === id);
}
