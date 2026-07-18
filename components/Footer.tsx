export default function Footer() {
  return (
    <footer className="border-t border-muted/20 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-accent">~/adil</span>
        <span className="font-mono text-xs text-muted">
          © 2026 Abdul Rahman Adil — Full-Stack MERN
        </span>
        <div className="flex gap-4 font-mono text-xs text-muted">
          <a href="https://github.com/adil2133-git" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/abdlrhmnadil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/adil2133/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}