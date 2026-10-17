import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import NetworkBackground from "@/components/NetworkBackground";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Abdul Rahman Adil | Full-Stack Developer",
  description:
    "Portfolio of Abdul Rahman Adil — Full-Stack Developer (MERN & PostgreSQL) with three deployed production apps: QuickKart, RevSlot, and FUTGEN.",
  keywords: [
    "Abdul Rahman Adil",
    "Full-Stack Developer",
    "MERN Developer",
    "React 19",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "QuickKart",
    "RevSlot",
    "FUTGEN",
  ],
  authors: [{ name: "Abdul Rahman Adil" }],
  creator: "Abdul Rahman Adil",
  openGraph: {
    title: "Abdul Rahman Adil | Full-Stack Developer",
    description:
      "Full-Stack Developer with 3 deployed production platforms: QuickKart, RevSlot, and FUTGEN. Deploys with Docker, AWS, and CI/CD.",
    siteName: "Abdul Rahman Adil Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased overflow-x-hidden">
        <PageLoader>
          <NetworkBackground />
          <Header />
          {children}
          <Footer />
        </PageLoader>
      </body>
    </html>
  );
}
