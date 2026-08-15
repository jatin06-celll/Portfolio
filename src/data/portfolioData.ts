export const portfolioData = {
  resumeUrl: "/resume.pdf", // Place your resume PDF in the public folder and name it resume.pdf
  hero: {
    name: "Jatin Pathak",
    headline: "Backend Developer & Cybersecurity Enthusiast",
    description: "I build secure backend systems, real-time applications, and cybersecurity-focused software using Node.js, TypeScript, MongoDB, React, and modern development tools.",
    status: "● Open to Software Development Opportunities",
  },
  about: {
    text: "I am a B.E. Electronics & Telecommunication student at Thakur College of Engineering and Technology, Mumbai, with a strong interest in backend development, web technologies, cybersecurity, APIs, databases, and systems-oriented software. I have practical development experience through my Backend Developer Internship at Bluestock Fintech and through projects involving real-time communication, secure transactions, network packet inspection, and cryptographic systems.",
  },
  skills: {
    languages: ["C/C++", "TypeScript", "JavaScript", "Python (Basics)"],
    web: ["HTML", "CSS", "Tailwind CSS", "React(Intermediate)", "Node.js", "Express.js"],
    databases: ["PostgreSQL", "MongoDB", "MySQL (Basics)"],
    core: ["Data Structures", "REST APIs", "Web Development"],
    tools: ["Docker", "Postman", "VS Code", "Antigravity", "Cursor", "Git", "GitHub"],
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
      role: "Working Committee",
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
        "Mentored 25+ students",
        "Developed communication and interpersonal abilities"
      ]
    }
  ],
  certifications: [
    {
      title: "Software Developer",
      issuer: "Drixx Solution",
      date: "3 Oct 2025 – 2 Jan 2026"
    }
  ],
  contact: {
    email: "jatinpathak7400@gmail.com", // Placeholder
    linkedin: "https://www.linkedin.com/in/jatin-pathak-18089b286/", // Placeholder
    github: "https://github.com/jatin06-celll", // Placeholder
  }
};
