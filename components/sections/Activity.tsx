"use client";

import { useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { useIsClient } from "@/lib/hooks";

export default function Activity() {
  const isClient = useIsClient();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient) return;
    const timer = setTimeout(() => {
      const el = scrollRef.current;
      if (el) {
        el.scrollLeft = el.scrollWidth;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isClient]);

  return (
    <section id="activity" className="w-full max-w-5xl flex flex-col gap-6 scroll-mt-24">
      <div className="flex items-center gap-4">
        <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
          activity
        </h2>
        <div className="h-px flex-grow bg-muted/20" />
      </div>

      <div className="border border-muted/20 rounded-2xl p-6 flex flex-col gap-4 bg-surface">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SiGithub size={18} className="text-accent" />
            <span className="font-mono text-sm font-semibold">adil2133-git</span>
          </div>
          <a
            href="https://github.com/adil2133-git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <div ref={scrollRef} className="activity-scroll overflow-x-auto pb-2 flex justify-start md:justify-center">
          {isClient && (
            <GitHubCalendar
              username="adil2133-git"
              colorScheme="dark"
              theme={{ dark: ["#121319", "#2A2464", "#3F35A5", "#5A4CD9", "#7C6FF0"] }}
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          )}
        </div>
      </div>
    </section>
  );
}