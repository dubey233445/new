"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { config } from "@/data/config";

const education = [
  {
    period: "Aug 2023 – Present",
    title: "B.Tech in Computer Science Engineering (AI & ML)",
    place: "K R Mangalam University, Haryana",
  },
];

const experience = [
  {
    period: "Mar 2025 – Jun 2025",
    title: "Software Engineering Intern",
    place: "Zidio Development",
    points: [
      "Developed backend services and REST APIs using Python and FastAPI.",
      "Applied OOPS principles and modular design to improve code maintainability.",
      "Optimized data processing logic to improve application performance.",
      "Used Git and CI/CD pipelines for automated deployment.",
    ],
  },
  {
    period: "Apr 2024 – Jun 2024",
    title: "Machine Learning Intern",
    place: "Internship",
    points: [
      "Developed and deployed ML-based backend services using Flask and FastAPI.",
      "Integrated ML models with REST APIs and databases.",
    ],
  },
  {
    period: "Aug 2025 – Nov 2025",
    title: "AI / Deep Learning Intern",
    place: "Growfinix Technology",
    points: [
      "Built a handwritten digit recognizer using CNNs.",
      "Developed sentiment analysis models using NLP techniques.",
      "Implemented a fake news detection system using text classification.",
    ],
  },
];

const projects = [
  {
    title: "ISL Gesture Recognition System",
    category: "Computer Vision",
    summary:
      "Real-time Indian Sign Language recognition using CNN + LSTM and transfer learning. Achieved 90% accuracy and integrated Flask for live inference.",
    stack: "TensorFlow, OpenCV, Transformers, Flask, Docker",
  },
  {
    title: "Travel Chatbot",
    category: "LLM + RAG",
    summary:
      "LLM-powered chatbot for personalized travel recommendations using Retrieval-Augmented Generation. Integrated LangChain, OpenAI API, and FAISS to improve response accuracy by 35%.",
    stack: "Python, LangChain, Hugging Face, FastAPI, React, OpenAI API, FAISS",
  },
  {
    title: "DSA Problem Solving Portfolio",
    category: "Algorithms",
    summary:
      "Solved 300+ LeetCode problems covering Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and Greedy algorithms.",
    stack: "Data Structures, Algorithms, Problem Solving",
  },
];

const skillGroups = [
  ["Python", "R", "SQL", "Java", "JavaScript"],
  ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "CNN", "LSTM", "Transformers", "NLP"],
  ["Hugging Face", "LangChain", "LangGraph", "OpenAI API", "Prompt Engineering", "RAG"],
  ["Docker", "Flask", "FastAPI", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "MLflow"],
];

const certifications = [
  "Foundation to AI and Data Analytics – Samatrix.io",
  "Data Analysis using Python – Samatrix.io",
  "Probabilistic Modeling and Reasoning with Python – Samatrix.io",
  "R Programming – Samatrix.io",
  "Machine Learning and Pattern Recognition – Samatrix.io",
  "Big Data Engineer – IBM Career Education Program",
];

export default function ResumeView() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 767px){ header { display: none !important; } }",
        }}
      />

      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <Button asChild>
            <Link href={`mailto:${config.email}`} className="flex gap-2 text-sm">
              <Mail className="h-4 w-4" />
              Email me
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-4xl flex-1 px-4 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card/80 p-6 shadow-xl backdrop-blur-sm md:p-10"
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Resume
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Ashish Dubey
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
                Computer Science undergraduate focused on backend engineering,
                machine learning, and building scalable systems.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                  <Mail className="h-3.5 w-3.5" />
                  {config.email}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                  <Phone className="h-3.5 w-3.5" />
                  +91 87659 98219
                </span>
              </div>
            </div>

            <SectionBlock title="Career Objective">
              <p className="text-muted-foreground">
                Motivated Computer Science undergraduate with a strong
                foundation in Data Structures, Algorithms, Object-Oriented
                Programming, and System Design. Seeking an entry-level Software
                Engineer role to apply backend and AI skills in building
                scalable and efficient systems.
              </p>
            </SectionBlock>

            <SectionBlock title="Education">
              {education.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </SectionBlock>

            <SectionBlock title="Internships & Experience">
              <div className="space-y-6">
                {experience.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border p-5">
                    <TimelineItem {...item} />
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock title="Projects">
              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-xl border border-border p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {project.summary}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Tech Stack
                    </p>
                    <p className="mt-2 text-sm">{project.stack}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock title="Skills">
              <div className="space-y-3">
                {skillGroups.map((group) => (
                  <div key={group.join("-")} className="flex flex-wrap gap-2">
                    {group.map((skill) => (
                      <Badge key={skill} variant="outline" className="rounded-full px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock title="Certifications">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock title="Languages">
              <p className="text-muted-foreground">English (Fluent) | Hindi (Native)</p>
            </SectionBlock>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function TimelineItem({
  period,
  title,
  place,
}: {
  period: string;
  title: string;
  place: string;
}) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{period}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{place}</p>
      </div>
    </div>
  );
}
