import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";
const PLACEHOLDER_IMG = "/assets/logo-dark.svg";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live }: { live?: string }) => {
  if (!live || live === "#") return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  aws: brand("AWS", "cloudflare-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "isl-gesture-recognition",
    category: "Computer Vision",
    title: "ISL Gesture Recognition System",
    src: PLACEHOLDER_IMG,
    screenshots: [],
    live: "#",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.docker],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Real-time Indian Sign Language recognition system using CNN + LSTM
            and transfer learning. Achieved 90% accuracy in gesture
            classification and integrated the model with Flask for live
            inference.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[PLACEHOLDER_IMG]} />
        </div>
      );
    },
  },
  {
    id: "travel-chatbot",
    category: "LLM + RAG",
    title: "Travel Chatbot",
    src: PLACEHOLDER_IMG,
    screenshots: [],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node, PROJECT_SKILLS.aiSDK],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            LLM-powered chatbot for personalized travel recommendations using
            Retrieval-Augmented Generation. Integrated LangChain, OpenAI API,
            and FAISS to improve response accuracy by 35%.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[PLACEHOLDER_IMG]} />
        </div>
      );
    },
  },
  {
    id: "dsa-portfolio",
    category: "DSA",
    title: "DSA Problem Solving Portfolio",
    src: PLACEHOLDER_IMG,
    screenshots: [],
    live: "#",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Portfolio of 300+ solved LeetCode problems covering Arrays,
            Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and
            Greedy algorithms.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[PLACEHOLDER_IMG]} />
        </div>
      );
    },
  },
];

export default projects;
