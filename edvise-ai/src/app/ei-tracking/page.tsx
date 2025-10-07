"use client";
import { useState } from "react";

export default function EITrackingPage() {
  const [stressLevel, setStressLevel] = useState(3);
  const [motivation, setMotivation] = useState(7);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">EI Tracking</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Stress Level</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Current: {stressLevel}/10</span>
              <span className="text-sm text-[var(--text-muted)]">Last week: 4/10</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-red-500 transition-all duration-500" 
                style={{ width: `${stressLevel * 10}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStressLevel(Math.max(1, stressLevel - 1))} className="px-3 py-1 bg-white/10 rounded">-</button>
              <button onClick={() => setStressLevel(Math.min(10, stressLevel + 1))} className="px-3 py-1 bg-white/10 rounded">+</button>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Motivation</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Current: {motivation}/10</span>
              <span className="text-sm text-[var(--text-muted)]">Last week: 6/10</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-500" 
                style={{ width: `${motivation * 10}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setMotivation(Math.max(1, motivation - 1))} className="px-3 py-1 bg-white/10 rounded">-</button>
              <button onClick={() => setMotivation(Math.min(10, motivation + 1))} className="px-3 py-1 bg-white/10 rounded">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Adaptive Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[var(--card-bg)] rounded-xl">
            <div className="text-lg font-medium mb-2">🧘‍♀️ Mindfulness</div>
            <div className="text-sm text-[var(--text-muted)]">5-minute breathing exercises</div>
          </div>
          <div className="p-4 bg-[var(--card-bg)] rounded-xl">
            <div className="text-lg font-medium mb-2">🎯 Goal Setting</div>
            <div className="text-sm text-[var(--text-muted)]">Break down large tasks</div>
          </div>
          <div className="p-4 bg-[var(--card-bg)] rounded-xl">
            <div className="text-lg font-medium mb-2">💬 Peer Support</div>
            <div className="text-sm text-[var(--text-muted)]">Connect with study groups</div>
          </div>
        </div>
      </div>
    </main>
  );
}

