export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    category: "Tools",
    items: ["JWT", "Razorpay", "Nodemailer", "Redis", "Git", "GitHub", "REST APIs", "Cloudinary"],
  },
];