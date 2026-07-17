export type Project = {
    slug: string;
    title: string;
    description: string;
    highlights: string[];
    stack: string[];
    liveUrl?: string;
    githubUrl?: string;
};

export const projects: Project[] = [
    {
        slug: "quickcart",
        title: "QuickCart",
        description:
            "A multi-sided delivery platform with real-time order tracking, driver dispatch, and Razorpay payments across customer, driver, store, and admin roles.",
        highlights: [
            "Real-time driver dispatch with expanding-radius rounds and fallback logic",
            "Live order tracking via Socket.IO with ETA calculated using the haversine formula",
            "Razorpay payment integration with webhook-based reconciliation",
        ],
        stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO"],
        githubUrl: "https://github.com/adil2133-git/QuickCart",
    },
    {
        slug: "futgen",
        title: "FUTGEN",
        description:
            "A football-themed e-commerce platform with JWT authentication, Razorpay payments, and CI/CD deployment to AWS and Vercel.",
        highlights: [
            "JWT authentication with OTP verification, refresh tokens, and rate limiting",
            "Razorpay payments with Cloudinary-based image upload pipeline",
            "CI/CD deployment pipeline to AWS and Vercel via GitHub",
        ],
        stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Redis"],
        liveUrl: "https://www.futgen.shop/",
        githubUrl: "https://github.com/adil2133-git/futgen",
    },
];