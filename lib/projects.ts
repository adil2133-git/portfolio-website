export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  status: "Live" | "In Development";
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "quickkart",
    title: "QuickKart",
    subtitle: "Hyperlocal Grocery & Delivery Platform",
    description: "A real-time, four-role delivery platform featuring atomic order dispatch over Socket.IO, live GPS tracking with Leaflet, automated driver wallet settlements, and Razorpay remittances.",
    highlights: [
      "Built a four-role platform (customer, store, driver, admin) with role-based access, KYC onboarding, and admin approval workflows, deployed on Vercel and AWS.",
      "Engineered real-time driver dispatch over Socket.IO with expanding search rings (5→8→10 km) and 30-second accept windows, using atomic findOneAndUpdate so only one driver wins concurrent accepts.",
      "Modeled an 8-state order lifecycle with live GPS tracking on Leaflet maps and a 75-second reconnect grace period so brief network drops don't take drivers offline.",
      "Designed a driver wallet with T+1 settlement (node-cron), four-tier COD risk limits, and Razorpay remittance with HMAC and webhook verification.",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Razorpay",
      "Leaflet",
      "AWS",
      "Vercel",
    ],
    image: "/quickcart-cover.png",
    status: "Live",
    liveUrl: "https://quick-cart-flax-eta.vercel.app/",
    githubUrl: "https://github.com/adil2133-git/QuickCart",
  },
  {
    slug: "revslot",
    title: "RevSlot",
    subtitle: "Project Review Scheduling Platform",
    description: "A high-concurrency scheduling monorepo replacing manual review coordination with timezone-aware slot engines, 5-minute PostgreSQL transaction holds, and BullMQ background workers.",
    highlights: [
      "Built in a team pnpm monorepo (Next.js client, Express API) to replace WhatsApp coordination of external reviews, with a public no-login booking flow, timezone-aware calendar, and slot picker.",
      "Implemented availability and booking modules that generate slots in memory from weekly templates, date overrides, buffers, and minimum-notice rules with conflict checks across reviewer event types.",
      "Prevented double-booking with 5-minute slot holds using PostgreSQL transactions and unique constraints, complete with cancel and reschedule flows with email notifications.",
      "Moved confirmation and reminder emails to a BullMQ + Redis worker with retries, and deployed with Docker Compose behind Nginx on AWS EC2 with GitHub Actions CI/CD and daily S3 backups.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "BullMQ",
      "Docker",
      "Nginx",
      "AWS EC2",
      "GitHub Actions",
    ],
    image: "/revslot-cover.png",
    status: "Live",
    liveUrl: "https://revslot.com/",
    githubUrl: "https://github.com/adil2133-git/RevSlot",
  },
  {
    slug: "futgen",
    title: "FUTGEN",
    subtitle: "Football Apparel E-Commerce Platform",
    description: "A production-grade football apparel e-commerce platform with server-side pagination, search & filters, size-based carts, stock-ceiling validation, and an admin management suite.",
    highlights: [
      "Built a full-stack store with server-side pagination, search, filters, infinite scroll, a size-based cart and wishlist with stock checks, and an admin dashboard for product CRUD, orders, and users.",
      "Optimized product catalog queries with MongoDB indexing and implemented stock-ceiling validation on cart quantities to prevent overselling.",
      "Integrated Razorpay payment gateway and Cloudinary image upload pipeline with JWT authentication, OTP verification, and rate limiting.",
      "Deployed to AWS EC2 and Vercel with automated CI/CD workflows and Redis caching.",
    ],
    stack: [
      "React 19",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Razorpay",
      "Cloudinary",
      "AWS EC2",
      "Vercel",
    ],
    image: "/futgen-cover.png",
    status: "Live",
    liveUrl: "https://www.futgen.shop/",
    githubUrl: "https://github.com/adil2133-git/futgen",
  },
];