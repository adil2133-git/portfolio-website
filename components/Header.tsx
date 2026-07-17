import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-muted/20">
      <span className="font-mono text-sm text-muted">~/adil</span>

      <nav className="flex items-center gap-5">
        <Link href="/about" className="text-sm hover:text-accent transition-colors">
          About
        </Link>
        <a
          href="https://github.com/adil2133-git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a

          href="https://www.linkedin.com/in/abdlrhmnadil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}