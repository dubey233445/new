const config = {
  title: "Ashish Dubey | Computer Science Undergraduate",
  description: {
    long:
      "Portfolio of Ashish Dubey — a Computer Science undergraduate at K R Mangalam University focused on backend engineering, machine learning, and scalable software systems.",
    short:
      "Portfolio of Ashish Dubey — a CS undergraduate building backend, ML, and AI projects.",
  },
  keywords: [
    "Ashish Dubey",
    "portfolio",
    "computer science",
    "software engineer",
    "backend developer",
    "machine learning",
    "Python",
    "FastAPI",
    "Flask",
    "TensorFlow",
    "OpenCV",
    "LangChain",
    "RAG",
    "React",
    "Next.js",
    "TypeScript",
  ],
  author: "Ashish Dubey",
  email: "dubeyashish8957@gmail.com",
  site: "http://localhost:3000",

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ashish-dubey-8904a52b3/",
    instagram:
      "https://www.instagram.com/ashish_dubey_901?utm_source=qr&igsh=eWxqNG03bW5jdXkz",
    facebook: "",
    github: "https://github.com/dubey233445",
  },
};
export { config };
