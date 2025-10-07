"use client";
import { useState } from "react";

export default function ConfidencePage() {
  const [currentLevel, setCurrentLevel] = useState(1);
  
  const tasks = [
    { level: 1, title: "Complete your profile", desc: "Add basic information", completed: true },
    { level: 2, title: "Take a practice quiz", desc: "Answer 5 questions correctly", completed: false },
    { level: 3, title: "Join a study group", desc: "Connect with 3 peers", completed: false },
    { level: 4, title: "Share your goals", desc: "Post your learning objectives", completed: false },
    { level: 5, title: "Help a peer", desc: "Answer someone's question", completed: false },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Confidence Tasks</h2>
      
      <div className="glass rounded-2xl p-6 mb-6">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-[var(--primary)]">Level {currentLevel}</div>
          <div className="text-[var(--text-muted)]">Build confidence through progressive challenges</div>
        </div>
        
        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.level} 
              className={`p-4 rounded-xl border transition-all ${
                task.completed 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : task.level === currentLevel 
                    ? 'bg-[var(--primary)]/10 border-[var(--primary)]/30' 
                    : 'bg-[var(--card-bg)] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{task.title}</div>
                  <div className="text-sm text-[var(--text-muted)]">{task.desc}</div>
                </div>
                <div className="flex items-center gap-2">
                  {task.completed ? (
                    <span className="text-green-400">✓</span>
                  ) : task.level === currentLevel ? (
                    <button className="px-3 py-1 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg text-sm">
                      Start
                    </button>
                  ) : (
                    <span className="text-[var(--text-muted)]">🔒</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

