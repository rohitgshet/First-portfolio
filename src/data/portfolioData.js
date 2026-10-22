// Resume Data - Single Source of Truth for Rohit G Shet
// Strictly extracted from the provided resume without fabrication.

export const personalInfo = {
  name: "Rohit G Shet",
  role: "AI & Machine Learning Engineering Student",
  degree: "B.E. — Artificial Intelligence & Machine Learning",
  institution: "AJ Institute of Engineering and Technology (AJIET)",
  institutionShort: "AJIET, Mangaluru",
  academicStatus: "Final Year",
  location: "Mangaluru, Karnataka, India",
  summary:
    "Artificial Intelligence & Machine Learning engineering student with hands-on exposure to Python, Java, web development, databases and problem solving. Builds practical software projects while developing strong technical, creative and communication skills, with a focus on becoming industry-ready.",
  contact: {
    email: "rohitgshet01@gmail.com",
    phone: "+91 6360722796",
    linkedin: "https://linkedin.com/in/rohitgshet",
    github: "https://github.com/rohitgshet",
    location: "Mangaluru, Karnataka, India",
  },
  languages: [
    { name: "English", type: "Professional & Academic" },
    { name: "Kannada", type: "Native / Regional" },
    { name: "Hindi", type: "Conversational" },
  ],
};

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages for algorithmic logic and software development",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: ["HTML", "CSS", "React"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Server architecture, RESTful API design, and routing",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Document-oriented persistence and schema operations",
    skills: ["MongoDB"],
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    description: "Collaborative software workflows and code management",
    skills: ["Git", "GitHub"],
  },
  {
    id: "competencies",
    title: "Core Competencies",
    description: "Fundamental computer science and computational thinking",
    skills: ["Problem Solving", "Data Structures and Algorithms"],
  },
  {
    id: "creative",
    title: "Creative Tools & Media",
    description: "Post-production, cinematic visual editing, and motion design",
    skills: [
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "Video Editing and Visual Content Creation",
      "Cinematic Editing",
    ],
  },
];

export const projects = [
  {
    id: "student-management-api",
    title: "Student Management REST API",
    tagline: "Backend RESTful service for academic record lifecycle and persistent storage",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    category: "Backend / API",
    description:
      "Developed REST endpoints for creating and retrieving student records. Integrated MongoDB for persistent storage and tested APIs using HTTP requests.",
    architecture: [
      "RESTful routing for student record creation and retrieval",
      "MongoDB database integration for persistent data storage",
      "Rigorous API endpoint validation using standard HTTP requests",
    ],
    verifiedGithubProfile: "https://github.com/rohitgshet",
    note: "Source code and repositories available on Rohit's GitHub profile.",
  },
  {
    id: "mern-crud-app",
    title: "MERN CRUD Web Application",
    tagline: "Full-stack application featuring reactive UI and complete database operations",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full Stack (MERN)",
    description:
      "Implemented CRUD operations with a React frontend and Node/Express backend. Worked with API requests, CORS, form handling and database integration.",
    architecture: [
      "Responsive React interface with state-driven form handling",
      "Node.js and Express.js backend managing API routes & CORS middleware",
      "MongoDB integration performing comprehensive Create, Read, Update, Delete operations",
    ],
    verifiedGithubProfile: "https://github.com/rohitgshet",
    note: "Source code and repositories available on Rohit's GitHub profile.",
  },
  {
    id: "auth-system",
    title: "Authentication System",
    tagline: "Server-side credential verification and secure route handling",
    technologies: ["HTML", "Express.js", "Node.js"],
    category: "Web & Security",
    description:
      "Built a basic email/password authentication workflow using Express.js and POST requests. Structured server-side routes and validated request data.",
    architecture: [
      "Structured server-side routes for user authentication workflows",
      "POST request processing with email and password credential checks",
      "Server-side request data validation and structured response dispatching",
    ],
    verifiedGithubProfile: "https://github.com/rohitgshet",
    note: "Source code and repositories available on Rohit's GitHub profile.",
  },
];

export const education = {
  degree: "B.E. — Artificial Intelligence & Machine Learning",
  institution: "AJ Institute of Engineering and Technology (AJIET)",
  location: "Mangaluru, Karnataka, India",
  status: "Final Year Student",
  focus: "Artificial Intelligence, Algorithms & Software Engineering",
  coursework: [
    "Data Structures and Algorithms",
    "Database Management Systems (DBMS)",
    "Machine Learning",
    "Web Development",
    "Java",
    "Python",
  ],
};

export const creativeCapabilities = {
  title: "Creative Visual Media & Post-Production",
  subtitle:
    "Beyond software engineering, I apply creative storytelling and technical precision to video production and visual media.",
  tools: [
    {
      name: "Adobe Premiere Pro",
      role: "Non-Linear Video Editing & Sequencing",
      details: "Pacing, multi-track audio-visual synchronization, and dynamic timeline editing.",
    },
    {
      name: "Adobe After Effects",
      role: "Motion Graphics & Visual Effects",
      details: "Visual compositing, kinetic titles, smooth motion keyframing, and visual assets.",
    },
    {
      name: "Cinematic Editing",
      role: "Color Grading & Narrative Flow",
      details: "Atmospheric mood creation, sound design synchronization, and cinematic pacing.",
    },
    {
      name: "Visual Content Creation",
      role: "Digital Media Production",
      details: "High-impact visual composition for modern platforms and brand storytelling.",
    },
  ],
  placeholderNote:
    "Actual client and project video showreels can be requested directly via email or verified social profiles. Showcase links are kept clean and verified.",
};
