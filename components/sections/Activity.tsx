"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { ExternalLink } from "lucide-react";

type LeetCodeStats = {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    ranking: number;
    acceptanceRate: number;
};

export default function Activity() {
    const [mounted, setMounted] = useState(false);
    const [stats, setStats] = useState<LeetCodeStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMounted(true);

        async function fetchStats() {
            try {
                const res = await fetch("https://leetcode-stats.tashif.codes/adil2133");
                const data = await res.json();
                if (data?.totalSolved !== undefined) {
                    setStats({
                        ...data,
                        acceptanceRate: Number(
                            ((data.totalSolved / (data.totalQuestions || 1)) * 100).toFixed(1)
                        ),
                    });
                }
            } catch {
                setStats(null);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    const breakdown = stats
        ? [
            { label: "Easy", solved: stats.easySolved, total: stats.totalEasy },
            { label: "Medium", solved: stats.mediumSolved, total: stats.totalMedium },
            { label: "Hard", solved: stats.hardSolved, total: stats.totalHard },
        ]
        : [];

    return (
        <section className="w-full max-w-3xl flex flex-col gap-6">
            <h2 className="font-mono text-sm text-muted">activity</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 border border-muted/20 rounded-lg p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <SiGithub size={18} className="text-accent" />
                            <span className="font-mono text-sm">adil2133-git</span>
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

                    <div className="overflow-x-auto">
                        {mounted && (
                            <GitHubCalendar
                                username="adil2133-git"
                                colorScheme="dark"
                                theme={{ dark: ["#12161F", "#0F3D38", "#1D6B5F", "#2A9D8A", "#3FC7B8"] }}
                                fontSize={12}
                                blockSize={11}
                                blockMargin={4}
                            />
                        )}
                    </div>
                </div>

                <div className="border border-muted/20 rounded-lg p-6 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <SiLeetcode size={18} className="text-accent" />
                            <span className="font-mono text-sm">adil2133</span>
                        </div>
                        <a
                            href="https://leetcode.com/u/adil2133/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {loading ? (
                        <div className="flex flex-col gap-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-8 bg-muted/10 rounded animate-pulse" />
                            ))}
                        </div>
                    ) : stats ? (
                        <div className="flex flex-col gap-5">
                            <div className="flex items-end justify-between">
                                <span className="text-sm text-muted">Total Solved</span>
                                <span className="text-2xl font-semibold text-accent">{stats.totalSolved}</span>
                            </div>

                            <div className="flex flex-col gap-3">
                                {breakdown.map((item) => (
                                    <div key={item.label} className="flex flex-col gap-1">
                                        <div className="flex justify-between font-mono text-xs text-muted">
                                            <span>{item.label}</span>
                                            <span>{item.solved} / {item.total}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-muted/20 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(item.solved / item.total) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                className="h-full bg-accent"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-3 border-t border-muted/20 flex flex-col gap-1 font-mono text-xs text-muted">
                                <div className="flex justify-between">
                                    <span>Acceptance Rate</span>
                                    <span className="text-foreground">{stats.acceptanceRate}%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Global Rank</span>
                                    <span className="text-foreground">#{stats.ranking.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="py-6 text-center flex flex-col gap-3">
                            <p className="font-mono text-xs text-muted">Stats unavailable right now</p>
                            <a
                                href="https://leetcode.com/u/adil2133/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs text-accent hover:underline"
                            >
                                View profile directly
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}