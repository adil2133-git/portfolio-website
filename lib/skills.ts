export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Zustand",
      "React Router",
      "React Hook Form",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "JWT",
      "BullMQ",
      "Zod",
    ],
  },
  {
    category: "Databases & ORM",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Drizzle ORM", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    items: [
      "Docker",
      "Nginx",
      "AWS (EC2, S3)",
      "Vercel",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    category: "Tools & Services",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Razorpay",
      "Cloudinary",
      "Nodemailer",
    ],
  },
];