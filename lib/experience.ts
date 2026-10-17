export type Experience = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer Intern",
    company: "Bridgeon Skillversity",
    duration: "Sep 2025 – Present",
    points: [
      "Built full-stack features in a team using React, Next.js, TypeScript, Node.js, Express, and MongoDB, from database schema and REST API to reusable UI components.",
      "Implemented JWT authentication with access and refresh tokens, Redux Toolkit state management, and Redis-backed OTP verification.",
      "Integrated Razorpay payments, Nodemailer emails, and file uploads, and debugged complex issues across frontend and backend systems.",
      "Collaborated in an Agile team of 4–6 with daily stand-ups, using Git and GitHub, with code and architectural deliverables reviewed weekly by industry professionals.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Application (BCA)",
  institution: "P A First Grade College, Mangalore University",
  duration: "Sep 2022 – Jun 2025",
  points: [
    "Core coursework in Computer Science fundamentals, Software Engineering, Database Systems, Web Technologies, and Data Structures.",
  ],
};

export const certifications: Certification[] = [
  {
    title: "Data Analytics",
    issuer: "ISDC, in partnership with Institute of Analytics (IoA), UK",
    date: "Jun 2025",
  },
  {
    title: "Data Science Internship",
    issuer: "Zephyr Technologies and Solutions Pvt Ltd",
    date: "Aug 2024",
  },
];