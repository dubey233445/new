export enum SkillNames {
  PYTHON = "python",
  R = "r",
  SQL = "sql",
  JAVA = "java",
  JAVASCRIPT = "javascript",
  TENSORFLOW = "tensorflow",
  KERAS = "keras",
  PYTORCH = "pytorch",
  SCIKIT_LEARN = "scikit_learn",
  CNN = "cnn",
  LSTM = "lstm",
  TRANSFORMERS = "transformers",
  NLP = "nlp",
  HUGGING_FACE = "hugging_face",
  LANGCHAIN = "langchain",
  LANGGRAPH = "langgraph",
  OPENAI_API = "openai_api",
  PROMPT_ENGINEERING = "prompt_engineering",
  RAG = "rag",
  DOCKER = "docker",
  FLASK = "flask",
  FASTAPI = "fastapi",
  KUBERNETES = "kubernetes",
  AWS = "aws",
  GCP = "gcp",
  CI_CD = "ci_cd",
  MLFLOW = "mlflow",
  PANDAS = "pandas",
  NUMPY = "numpy",
  SPARK = "spark",
  HADOOP = "hadoop",
  REAL_TIME_DATA_PROCESSING = "real_time_data_processing",
  MYSQL = "mysql",
  MONGODB = "mongodb",
  POSTGRESQL = "postgresql",
  FAISS = "faiss",
  PINECONE = "pinecone",
  MATPLOTLIB = "matplotlib",
  SEABORN = "seaborn",
  POWER_BI = "power_bi",
  GIT = "git",
  GITHUB = "github",
  ARRAYS = "arrays",
  STRINGS = "strings",
  LINKED_LISTS = "linked_lists",
  STACKS = "stacks",
  QUEUES = "queues",
  TREES = "trees",
  GRAPHS = "graphs",
  DYNAMIC_PROGRAMMING = "dynamic_programming",
  GREEDY = "greedy",
  HASHING = "hashing",
  OOPS = "oops",
  SOLID = "solid",
  DESIGN_PATTERNS = "design_patterns",
  LLD = "lld",
  HLD = "hld",
  SCALABILITY = "scalability",
  CACHING = "caching",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const skillColors = [
  "#3776ab",
  "#d2c55b",
  "#336791",
  "#f89820",
  "#f7df1e",
  "#ff6f00",
  "#d00000",
  "#68217a",
  "#9c27b0",
  "#2e86ab",
  "#4e79a7",
  "#ff7f0e",
  "#8a2be2",
  "#ff8c00",
  "#10a37f",
  "#6366f1",
  "#ff5a5f",
  "#7c3aed",
  "#ef4444",
  "#0ea5e9",
  "#14b8a6",
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
];

const skillIcon = (label: string, color: string) => {
  const initials = label
    .split(/\s+|[-_]/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${label}">
      <rect width="64" height="64" rx="16" fill="${color}" />
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700">${initials}</text>
    </svg>
  `)}`;
};

const createSkill = (
  id: number,
  name: SkillNames,
  label: string,
  shortDescription: string,
  color: string
): Skill => ({
  id,
  name,
  label,
  shortDescription,
  color,
  icon: skillIcon(label, color),
});

const skillDefinitions: Array<[
  SkillNames,
  string,
  string,
  string
]> = [
  [SkillNames.PYTHON, "Python", "General-purpose programming and backend work.", skillColors[0]],
  [SkillNames.R, "R", "Statistical computing and analytics.", skillColors[1]],
  [SkillNames.SQL, "SQL", "Structured querying and data manipulation.", skillColors[2]],
  [SkillNames.JAVA, "Java", "Object-oriented backend and enterprise development.", skillColors[3]],
  [SkillNames.JAVASCRIPT, "JavaScript", "Programming language for web and scripting.", skillColors[4]],
  [SkillNames.TENSORFLOW, "TensorFlow", "Deep learning framework.", skillColors[5]],
  [SkillNames.KERAS, "Keras", "High-level deep learning API.", skillColors[6]],
  [SkillNames.PYTORCH, "PyTorch", "Flexible deep learning framework.", skillColors[7]],
  [SkillNames.SCIKIT_LEARN, "scikit-learn", "Machine learning toolkit.", skillColors[8]],
  [SkillNames.CNN, "CNN", "Convolutional neural networks.", skillColors[9]],
  [SkillNames.LSTM, "LSTM", "Sequence modeling for time-dependent data.", skillColors[10]],
  [SkillNames.TRANSFORMERS, "Transformers", "Attention-based model architectures.", skillColors[11]],
  [SkillNames.NLP, "NLP", "Natural language processing.", skillColors[12]],
  [SkillNames.HUGGING_FACE, "Hugging Face", "Open-source NLP and model hub.", skillColors[13]],
  [SkillNames.LANGCHAIN, "LangChain", "LLM application framework.", skillColors[14]],
  [SkillNames.LANGGRAPH, "LangGraph", "Graph-based LLM orchestration.", skillColors[15]],
  [SkillNames.OPENAI_API, "OpenAI API", "Access to OpenAI models and tools.", skillColors[16]],
  [SkillNames.PROMPT_ENGINEERING, "Prompt Engineering", "Designing effective prompts.", skillColors[17]],
  [SkillNames.RAG, "RAG", "Retrieval-augmented generation.", skillColors[18]],
  [SkillNames.DOCKER, "Docker", "Containerization and packaging.", skillColors[19]],
  [SkillNames.FLASK, "Flask", "Lightweight Python web framework.", skillColors[20]],
  [SkillNames.FASTAPI, "FastAPI", "High-performance Python APIs.", skillColors[21]],
  [SkillNames.KUBERNETES, "Kubernetes", "Container orchestration.", skillColors[22]],
  [SkillNames.AWS, "AWS", "Cloud infrastructure and deployment.", skillColors[23]],
  [SkillNames.GCP, "Google Cloud", "Google cloud platform services.", skillColors[0]],
  [SkillNames.CI_CD, "CI/CD", "Automated build and deployment pipelines.", skillColors[1]],
  [SkillNames.MLFLOW, "MLflow", "Machine learning lifecycle management.", skillColors[2]],
  [SkillNames.PANDAS, "Pandas", "Data analysis and manipulation.", skillColors[3]],
  [SkillNames.NUMPY, "NumPy", "Numerical computing library.", skillColors[4]],
  [SkillNames.SPARK, "Spark", "Distributed data processing.", skillColors[5]],
  [SkillNames.HADOOP, "Hadoop", "Big data storage and processing.", skillColors[6]],
  [SkillNames.REAL_TIME_DATA_PROCESSING, "Real-time Data", "Streaming and low-latency processing.", skillColors[7]],
  [SkillNames.MYSQL, "MySQL", "Relational database.", skillColors[8]],
  [SkillNames.MONGODB, "MongoDB", "Document database.", skillColors[9]],
  [SkillNames.POSTGRESQL, "PostgreSQL", "Advanced relational database.", skillColors[10]],
  [SkillNames.FAISS, "FAISS", "Similarity search and vector indexing.", skillColors[11]],
  [SkillNames.PINECONE, "Pinecone", "Managed vector database.", skillColors[12]],
  [SkillNames.MATPLOTLIB, "Matplotlib", "Scientific plotting library.", skillColors[13]],
  [SkillNames.SEABORN, "Seaborn", "Statistical visualization library.", skillColors[14]],
  [SkillNames.POWER_BI, "Power BI", "Business intelligence visualization.", skillColors[15]],
  [SkillNames.GIT, "Git", "Version control.", skillColors[16]],
  [SkillNames.GITHUB, "GitHub", "Source control and collaboration.", skillColors[17]],
  [SkillNames.ARRAYS, "Arrays", "Core data structure for sequential data.", skillColors[18]],
  [SkillNames.STRINGS, "Strings", "Text manipulation and parsing.", skillColors[19]],
  [SkillNames.LINKED_LISTS, "Linked Lists", "Pointer-based sequential structure.", skillColors[20]],
  [SkillNames.STACKS, "Stacks", "LIFO structure.", skillColors[21]],
  [SkillNames.QUEUES, "Queues", "FIFO structure.", skillColors[22]],
  [SkillNames.TREES, "Trees", "Hierarchical data structure.", skillColors[23]],
  [SkillNames.GRAPHS, "Graphs", "Networked relationships.", skillColors[0]],
  [SkillNames.DYNAMIC_PROGRAMMING, "Dynamic Programming", "Optimization by subproblem reuse.", skillColors[1]],
  [SkillNames.GREEDY, "Greedy", "Locally optimal choice strategies.", skillColors[2]],
  [SkillNames.HASHING, "Hashing", "Fast lookup and indexing.", skillColors[3]],
  [SkillNames.OOPS, "OOPS", "Object-oriented programming principles.", skillColors[4]],
  [SkillNames.SOLID, "SOLID", "Software design principles.", skillColors[5]],
  [SkillNames.DESIGN_PATTERNS, "Design Patterns", "Reusable software design solutions.", skillColors[6]],
  [SkillNames.LLD, "LLD", "Low-level design.", skillColors[7]],
  [SkillNames.HLD, "HLD", "High-level design.", skillColors[8]],
  [SkillNames.SCALABILITY, "Scalability", "Systems that grow with demand.", skillColors[9]],
  [SkillNames.CACHING, "Caching", "Reducing repeated work and latency.", skillColors[10]],
];

export const SKILLS: Record<SkillNames, Skill> = Object.fromEntries(
  skillDefinitions.map(([name, label, shortDescription, color], index) => [
    name,
    createSkill(index + 1, name, label, shortDescription, color),
  ])
) as Record<SkillNames, Skill>;

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description?: string[];
  skills?: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Aug 2023",
    endDate: "Present",
    title: "B.Tech in Computer Science Engineering (AI & ML)",
    company: "K R Mangalam University, Haryana",
    description: [
      "Focused on data structures, algorithms, object-oriented programming, and system design.",
      "Studying applied AI and machine learning with an emphasis on backend systems and product development.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.OOPS,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "Mar 2025",
    endDate: "Jun 2025",
    title: "Software Engineering Intern",
    company: "Zidio Development",
    description: [
      "Developed backend services and REST APIs using Python and FastAPI.",
      "Applied OOPS principles and modular design to improve code maintainability.",
      "Optimized data processing logic to improve application performance.",
      "Used Git and CI/CD pipelines for automated deployment.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FASTAPI,
      SkillNames.FLASK,
      SkillNames.DOCKER,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "Apr 2024",
    endDate: "Jun 2024",
    title: "Machine Learning Intern",
    company: "Internship",
    description: [
      "Developed and deployed ML-based backend services using Flask and FastAPI.",
      "Integrated ML models with REST APIs and databases.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FLASK,
      SkillNames.FASTAPI,
      SkillNames.SQL,
      SkillNames.GIT,
    ],
  },
  {
    id: 4,
    startDate: "Aug 2025",
    endDate: "Nov 2025",
    title: "AI / Deep Learning Intern",
    company: "Growfinix Technology",
    description: [
      "Built a handwritten digit recognizer using CNNs.",
      "Developed sentiment analysis models using NLP techniques.",
      "Implemented a fake news detection system using text classification.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.TENSORFLOW,
      SkillNames.CNN,
      SkillNames.NLP,
      SkillNames.GIT,
    ],
  },
  {
    id: 5,
    startDate: "2024",
    endDate: "2025",
    title: "Career Objective",
    company: "Software Engineering / AI",
    description: [
      "Seeking an entry-level software engineer role to apply backend and AI skills in building scalable and efficient systems.",
      "Strong foundation in DSA, OOP, system design, debugging, unit testing, and problem solving.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.JAVA,
      SkillNames.JAVASCRIPT,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

