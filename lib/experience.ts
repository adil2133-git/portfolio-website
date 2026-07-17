export type Experience = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer Intern",
    company: "Bridgeon Solution",
    duration: "Sep 2025 – Present",
    points: [
      "Built responsive full-stack web applications using React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and Redux.",
      "Built reusable frontend components, integrated REST APIs, and implemented JWT-based authentication workflows.",
      "Integrated Razorpay payments, Nodemailer email services, and OTP verification using Redis.",
    ],
  },
];