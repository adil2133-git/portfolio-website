import Link from "next/link";
import GithubActivity from "@/components/GithubActivity";
import FadeIn from "@/components/FadeIn";


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 py-20">
      


      


      

      <FadeIn>
        <section className="w-full max-w-3xl flex flex-col items-center gap-6 py-12 text-center">
          <h2 className="font-mono text-sm text-muted">05 / connect</h2>
          <p className="max-w-md text-lg text-muted">Open to new roles and collaborations — feel free to reach out.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:adilaadhy.dev@gmail.com"
              className="font-mono text-sm border border-accent text-accent px-4 py-2 rounded-md"
            >
              Email me
            </a>
            <a
              href="https://github.com/adil2133-git"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-muted/30 px-4 py-2 rounded-md hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdlrhmnadil"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-muted/30 px-4 py-2 rounded-md hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div >
        </section >
      </FadeIn>
    </main >
  );
}