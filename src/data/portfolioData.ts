export const portfolioData = {
  resumeUrl: "/resume.pdf", // Place your resume PDF in the public folder and name it resume.pdf
  hero: {
    name: "Jatin Pathak",
    headline: "Backend Developer | Cybersecurity & AI Enthusiast",
    description: "I build secure scalable backend systems, real-time applications, and cybersecurity-focused software using Node.js, TypeScript, MongoDB, and modern web technologies.",
    status: "● Open to Software Development Opportunities",
  },
  about: {
    text: "I am an Electronics & Telecommunication engineering student at Thakur College of Engineering and Technology, Mumbai, with hands-on experience in backend, full-stack, AI/GenAI, and cloud development. Skilled in Node.js, Express.js, React, and MongoDB, with practical exposure to LLMs, RAG, and AWS. Through my internship at Bluestock Fintech and various hands-on projects, I focus on building secure, scalable applications and applying software, AI, and cloud technologies to real-world problems.",
  },
  skills: {
    languages: ["C++", "TypeScript", "JavaScript", "Python (Basics)"],
    aiGenAi: ["LLMs", "RAG", "LangChain", "Prompt Engineering", "Tool Calling"],
    web: ["HTML", "CSS", "Tailwind CSS", "React(Intermediate)", "Node.js", "Express.js"],
    databases: ["PostgreSQL", "MongoDB", "MySQL(Basics)"],
    cloudDevOps: ["AWS (EC2, S3, IAM)", "Docker", "GitHub Actions"],
    tools: ["Cursor", "Antigravity", "Git", "GitHub", "Postman", "VS Code"],
    core: ["REST APIs", "DBMS", "CN"],
  },
  experience: [
    {
      id: "bluestock",
      role: "Backend Developer Intern",
      company: "Bluestock Fintech",
      duration: "2 Months",
      points: [
        "Developed backend services using Node.js, Express.js, and MongoDB for contact forms, early-access registrations, and dashboard data.",
        "Built 5+ REST APIs for contact submissions, subscriptions, and dashboard functionality.",
        "Implemented input validation, error handling, and duplicate email checks.",
        "Tested and debugged APIs using Postman.",
        "Managed code using Git/GitHub."
      ]
    }
  ],
  projects: [
    {
      id: "dpi",
      title: "Deep Packet Inspection",
      shortDescription: "A stateful DPI firewall designed to inspect TLS SNI and network protocols for application identification and filtering.",
      description: "A stateful DPI firewall designed to inspect TLS SNI and network protocols for application identification and filtering. It processes packets in real-time, leveraging worker threads for multi-threaded packet processing and maintains 5-tuple flow tracking for accurate TCP session management.",
      stack: ["Node.js", "TypeScript", "Wireshark", "Worker Threads"],
      features: [
        "TLS SNI inspection",
        "Network protocol identification",
        "Application filtering",
        "Multi-threaded packet processing",
        "5-tuple flow tracking",
        "TCP session management",
        "Vitest-based validation"
      ],
      github: "https://github.com/jatin06-celll/packet_inspection",
      liveUrl: "",
    },
    {
      id: "vault",
      title: "Vault Backend",
      shortDescription: "A secure money transfer backend implementing a structured transaction workflow with balance validation.",
      description: "A secure money transfer backend implementing a structured transaction workflow with balance validation, transaction tracking, and automatic rollback. It ensures atomicity and consistency of financial operations using MongoDB transactions.",
      stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
      features: [
        "RESTful APIs",
        "10-step transaction workflow",
        "Balance validation",
        "Transaction tracking",
        "Automatic rollback",
        "JWT authentication",
        "MongoDB transactions",
        "Email notifications using Nodemailer"
      ],
      github: "https://github.com/jatin06-celll/Backend-BankTran",
      liveUrl: "",
    },
    {
      id: "ciphershield",
      title: "CipherShield AI",
      shortDescription: "A cybersecurity platform for secure text, file, and image encryption with JWT authentication.",
      description: "A cybersecurity platform for secure text, file, and image encryption with JWT authentication and an administrative dashboard. It features a cryptographic engine with security benchmarking, including NPCR and UACI evaluations.",
      stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      features: [
        "Text encryption",
        "File encryption",
        "Image encryption",
        "JWT authentication",
        "Admin dashboard",
        "Cryptographic engine",
        "NPCR evaluation",
        "UACI evaluation",
        "Encryption security benchmarking"
      ],
      github: "https://github.com/jatin06-celll/ciphershield",
      liveUrl: "https://ciphershield-nine.vercel.app/",
    },
    {
      id: "socketchess",
      title: "SocketChess Game",
      shortDescription: "A real-time multiplayer chess application with synchronized gameplay and legal move validation.",
      description: "A real-time multiplayer chess application with synchronized gameplay, legal move validation, turn management, and role-based access. Containerized with Docker and deployed on Render for seamless accessibility.",
      stack: ["Node.js", "Express.js", "Socket.IO", "Chess.js"],
      features: [
        "Real-time multiplayer gameplay",
        "Synchronized game state",
        "Legal chess move validation",
        "Turn management",
        "Role-based access",
        "Local split-screen mode",
        "Docker containerization",
        "Render deployment"
      ],
      github: "https://github.com/jatin06-celll/SocketChess",
      liveUrl: "https://a-chess.onrender.com/",
    },
    {
      id: "dsabot",
      title: "DSA Bot RAG",
      shortDescription: "A Retrieval-Augmented Generation application for DSA learning, using Google Gemini and Pinecone vector database.",
      description: "A Node.js Retrieval-Augmented Generation (RAG) application using Google Gemini, LangChain, and Pinecone vector database. It supports parsing PDF files, indexing content into Pinecone, and querying the knowledge base via a CLI for intelligent DSA-related answers.",
      stack: ["Node.js", "LangChain", "Google Gemini", "Pinecone", "JavaScript"],
      features: [
        "PDF parsing and content extraction",
        "Vector embedding with Google Gemini",
        "Pinecone vector database indexing",
        "RAG-based contextual query answering",
        "CLI-based knowledge base interaction",
        "LangChain pipeline orchestration"
      ],
      github: "https://github.com/jatin06-celll/DSA_bot_RAG",
      liveUrl: "",
    },
    {
      id: "wsd",
      title: "Word Sense Disambiguation",
      shortDescription: "An ML/NLP system that disambiguates polysemous words across languages using TF-IDF and Logistic Regression.",
      description: "A Machine Learning and NLP system designed to disambiguate polysemous words across different languages based on sentence context. Uses TF-IDF Feature Unions (Word + Character n-grams) and Logistic Regression with an interactive Streamlit web application featuring real-time prediction and confidence scoring.",
      stack: ["Python", "Scikit-learn", "Streamlit", "TF-IDF", "NLP"],
      features: [
        "Multi-language word sense disambiguation",
        "TF-IDF Feature Union extraction",
        "Logistic Regression classification",
        "Interactive Streamlit web app",
        "Real-time confidence scoring",
        "Dataset analytics and exploration",
        "CLI evaluation mode"
      ],
      github: "https://github.com/jatin06-celll/WSD-Word-Sense-Disambiguation-",
      liveUrl: "",
    },
  ],
  education: {
    institution: "Thakur College of Engineering and Technology",
    location: "Mumbai, India",
    degree: "B.E. in Electronics & Telecommunication",
    period: "2023–2027",
    cgpa: "7.92"
  },
  extracurricular: [
    {
      role: "T.E Head",
      organization: "TCET-IEEE",
      points: [
        "Planned technical events",
        "Prepared technical content",
        "Coordinated with the team for successful execution"
      ]
    },
    {
      role: "Academic Tutor",
      organization: "Independent",
      points: [
        "Mentored 25+ students as an academic tutor, enhancing communication and interpersonal abilities"
      ]
    }
  ],
  certifications: [
    {
      title: "JavaScript Bootcamp",
      issuer: "LetsUpgrade",
      ID: "LUEJSSEP124466"
    }
  ],
  contact: {
    email: "jatinpathak7400@gmail.com", // Placeholder
    linkedin: "https://www.linkedin.com/in/jatin-pathak-18089b286/", // Placeholder
    github: "https://github.com/jatin06-celll", // Placeholder
  }
};
