import ThemeToggle from "@/components/themeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center bg-background text-foreground">
      <ThemeToggle />
      <h1 className="text-4xl font-semibold">Abdul Rahman Adil</h1>
      <p className="max-w-md text-lg text-muted">
        Full-Stack Developer (MERN) — building scalable web apps with React,
        Next.js, Node.js, and MongoDB.
      </p>
    </main>
  );
}