export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "quickcart",
    title: "QuickCart",
    description:
      "A multi-sided delivery platform with real-time order tracking, driver dispatch, and Razorpay payments across customer, driver, store, and admin roles.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO"],
    githubUrl: "https://github.com/adil2133-git/QuickCart",
  },
  {
    slug: "futgen",
    title: "FUTGEN",
    description:
      "A football-themed e-commerce platform with JWT authentication, Razorpay payments, and CI/CD deployment to AWS and Vercel.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Redis"],
    liveUrl: "https://www.futgen.shop/",
    githubUrls: [
      { label: "Frontend", url: "https://github.com/adil2133-git/futgen-frontend" },
      { label: "Backend", url: "https://github.com/adil2133-git/futgen-backend" },
    ],
  },
];