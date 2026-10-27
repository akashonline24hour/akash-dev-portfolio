export const personalInfo = {
  name: "Akash Chandra Paul",
  brandName: "<Akash.dev />",
  designation: "Full-Stack Web Developer",
  bio: "Passionate full-stack developer dedicated to building responsive, scalable, and user-friendly web applications using JavaScript, React, Next.js, and Node.js.",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.png",
  contact: {
    email: "akashonline24hours@gmail.com",
    phone: "+880 1700-000000",
    whatsapp: "+8801700000000",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export const aboutData = {
  journey:
    "Started with a deep curiosity for how web applications function under the hood. Evolved into a full-stack developer specializing in modern JavaScript ecosystems.",
  workPreference:
    "Enthusiastic about remote work, collaborative agile teams, and high-impact product engineering.",
  hobbies: [
    "Algorithmic Problem Solving",
    "Technical Blogging",
    "Open Source Exploration",
    "UI/UX Prototyping",
  ],
};

export const educationData = [
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science & Engineering",
    institution: "Uttara University",
    duration: "2023 - 2027",
    status: "In Progress",
  },
  {
    degree: "Diploma in Textile Engineering",
    institution: "Gazipur Textile Engineering & Technology",
    duration: "2018 - 2022",
    status: "Completed",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Jhanjail High School",
    duration: "2017",
    status: "Completed",
  },
];

export const skillsData = [
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
  { name: "React.js / Next.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS / UI Styling", level: 92, category: "Frontend" },
  { name: "Node.js & Express.js", level: 85, category: "Backend" },
  { name: "MongoDB & Database Design", level: 82, category: "Backend" },
  { name: "Git, Vercel & Deployment", level: 85, category: "Tools" },
];

export const experienceData = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance & Personal Projects",
    duration: "2024 - Present",
    description:
      "Built and deployed robust web solutions including market price tracking apps (BazarDor) using Next.js, Better-Auth, and MongoDB.",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB"],
  },
];

export const projectsData = [
  {
    id: "bazardor",
    title: "BazarDor (বাজার দর)",
    category: "Full-Stack",
    summary:
      "A modern daily market price tracking application for real-time commodity rate updates.",
    description:
      "BazarDor is a web platform that enables users to track daily market prices across various categories. Built with modern authentication, database integration, and responsive UI components.",
    image: "/projects/bazardor.svg",
    technologies: [
      "Next.js",
      "Better-Auth",
      "MongoDB",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://akashonline24hour-bazar-dor.vercel.app",
    githubUrl: "https://github.com/akashonline24hour/bazar-dor",
    features: [
      "Secure user authentication with Google & GitHub providers",
      "Real-time daily product price tracking and category management",
      "Responsive design with dark mode support",
      "MongoDB database integration using custom adapters",
    ],
  },
  {
    id: "workout-library",
    title: "Next.js Workout Library",
    category: "Frontend",
    summary:
      "An interactive web app for discovering exercise routines and fitness programs.",
    description:
      "A responsive workout library application fetching exercise data asynchronously from a REST API with dynamic searching and category filtering.",
    image: "/projects/workout.svg",
    technologies: ["Next.js", "React", "Tailwind CSS", "REST API"],
    liveUrl: "https://fitlog-app-lemon.vercel.app",
    githubUrl: "https://github.com/akashonline24hour/fitlog-app",
    features: [
      "Asynchronous REST API data fetching",
      "Dynamic search and exercise category filtering",
      "Responsive grid cards with exercise breakdown",
    ],
  },
  {
    id: "movie-explorer",
    title: "Movie Explorer",
    category: "Frontend",
    summary:
      "A dynamic TV show & movie discovery app powered by Vite, React Router, and TVMaze API.",
    description:
      "Movie Explorer is a high-performance web application built with React 18, Vite, and Tailwind CSS. It leverages the TVMaze REST API for fetching real-time show schedules, detailed cast info, ratings, and genre filtering with smooth client-side routing.",
    image: "/projects/movie-explorer.svg",
    technologies: [
      "React 18",
      "React Router v6",
      "Vite",
      "Tailwind CSS",
      "TVMaze API",
    ],
    liveUrl: "https://movie-explorer-ten-chi.vercel.app",
    githubUrl: "https://github.com/akashonline24hour/movie-explorer",
    features: [
      "Real-time movie and TV show data fetching via TVMaze REST API",
      "Client-side single-page routing with React Router v6",
      "Blazing-fast modern build setup powered by Vite",
      "Clean UI styling with Tailwind CSS and modern Lucide React icons",
    ],
  },
];
