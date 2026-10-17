export default function CodeCard() {
  return (
    <div className="bg-background border border-muted/20 rounded-xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-muted/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-accent/40" />
        </div>
        <span className="font-mono text-[11px] text-muted">developer_profile.ts</span>
      </div>

      <div className="p-4 sm:p-5 font-mono text-xs text-muted leading-6 overflow-x-auto">
        <div><span className="text-muted/50 mr-3">1</span><span className="text-accent">const</span> engineer = {"{"}</div>
        <div><span className="text-muted/50 mr-3">2</span>&nbsp;&nbsp;name: <span className="text-foreground">&apos;Abdul Rahman Adil&apos;</span>,</div>
        <div><span className="text-muted/50 mr-3">3</span>&nbsp;&nbsp;role: <span className="text-foreground">&apos;Full-Stack Developer (MERN)&apos;</span>,</div>
        <div><span className="text-muted/50 mr-3">4</span>&nbsp;&nbsp;coreStack: [</div>
        <div><span className="text-muted/50 mr-3">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-foreground">&apos;React 19 / Next.js&apos;</span>,</div>
        <div><span className="text-muted/50 mr-3">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-foreground">&apos;Node.js / Express / BullMQ&apos;</span>,</div>
        <div><span className="text-muted/50 mr-3">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-foreground">&apos;PostgreSQL / MongoDB / Redis&apos;</span></div>
        <div><span className="text-muted/50 mr-3">8</span>&nbsp;&nbsp;],</div>
        <div><span className="text-muted/50 mr-3">9</span>&nbsp;&nbsp;cloud: <span className="text-foreground">[&apos;Docker&apos;, &apos;AWS EC2/S3&apos;, &apos;CI/CD&apos;]</span>,</div>
        <div><span className="text-muted/50 mr-3">10</span>&nbsp;&nbsp;appsInProduction: <span className="text-accent">3</span>,</div>
        <div><span className="text-muted/50 mr-3">11</span>&nbsp;&nbsp;status: <span className="text-accent">&apos;available_for_hire&apos;</span></div>
        <div><span className="text-muted/50 mr-3">12</span>{"};"}</div>
        <div className="mt-2">
          <span className="text-muted/50 mr-3">13</span>
          <span className="text-accent">console</span>.log(engineer.status)
          <span className="cursor-blink bg-accent w-2 h-4 inline-block ml-1 align-middle" />
        </div>
      </div>
    </div>
  );
}