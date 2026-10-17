export default function Footer() {
  return (
    <footer className="border-t border-muted/20 mt-20 bg-background/60">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-mono text-sm text-accent font-semibold">~/adil</span>
          <span className="font-mono text-xs text-muted">
            © 2026 Abdul Rahman Adil — Full-Stack Developer
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-muted">
          <a
            href="https://github.com/adil2133-git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdlrhmnadil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/adil2133/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LeetCode
          </a>
          <a
            href="mailto:adilaadhy.dev@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}