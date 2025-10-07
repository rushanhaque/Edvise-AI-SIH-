"use client";
import { useState } from "react";

export default function AchievementsPage() {
  const [progress, setProgress] = useState(45);
  const badges = [
    { name: "First Step", desc: "Completed onboarding", earned: true },
    { name: "Explorer", desc: "Browsed 5 opportunities", earned: true },
    { name: "Scholar", desc: "Took 3 quizzes", earned: false },
    { name: "Champion", desc: "Finished confidence tasks", earned: false },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Achievements</h2>

      <div className="glass rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/80">Learning Progress</span>
          <span className="text-white/80">{progress}%</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[var(--primary)]" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={() => setProgress((p) => Math.max(0, p - 5))} className="rounded-lg px-3 py-1.5 bg-white/10">-5%</button>
          <button onClick={() => setProgress((p) => Math.min(100, p + 5))} className="rounded-lg px-3 py-1.5 bg-white/10">+5%</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {badges.map((b) => (
          <div key={b.name} className="glass rounded-xl p-4">
            <div className="text-lg font-medium">{b.name}</div>
            <div className="text-white/70 text-sm">{b.desc}</div>
            <div className={`mt-2 text-xs ${b.earned ? "text-green-300" : "text-white/60"}`}>
              {b.earned ? "Earned" : "Locked"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


