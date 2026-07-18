export default function CodeCard() {
  return (
    <div className="bg-background border border-muted/20 rounded-xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-muted/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-accent/40" />
        </div>
        <span className="font-mono text-[11px] text-muted">developer_profile.tsx</span>
      </div>

      <div className="p-4 font-mono text-xs text-muted leading-6">
        <div><span className="text-muted/50 mr-4">1</span><span className="text-accent">const</span> developer = {"{"}</div>
        <div><span className="text-muted/50 mr-4">2</span>&nbsp;&nbsp;name: <span className="text-foreground">&apos;Abdul Rahman Adil&apos;</span>,</div>
        <div><span className="text-muted/50 mr-4">3</span>&nbsp;&nbsp;role: <span className="text-foreground">&apos;Full-Stack MERN&apos;</span>,</div>
        <div><span className="text-muted/50 mr-4">4</span>&nbsp;&nbsp;stack: [</div>
        <div><span className="text-muted/50 mr-4">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-foreground">&apos;MongoDB&apos;, &apos;Express&apos;,</span></div>
        <div><span className="text-muted/50 mr-4">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-foreground">&apos;React&apos;, &apos;Node.js&apos;</span></div>
        <div><span className="text-muted/50 mr-4">7</span>&nbsp;&nbsp;],</div>
        <div><span className="text-muted/50 mr-4">8</span>&nbsp;&nbsp;status: <span className="text-accent">&apos;building&apos;</span></div>
        <div><span className="text-muted/50 mr-4">9</span>{"};"}</div>
        <div className="mt-2">
          <span className="text-muted/50 mr-4">10</span>
          <span className="text-accent">console</span>.log(developer.status)
          <span className="cursor-blink bg-accent w-2 h-4 inline-block ml-1 align-middle" />
        </div>
      </div>
    </div>
  );
}