"use client";
import { useState } from "react";

export default function ResumeBuilderPage() {
  const [name, setName] = useState("Student Name");
  const [summary, setSummary] = useState("Motivated student seeking opportunities in smart education.");
  const [skills, setSkills] = useState("Problem-solving, Communication, MS Office");

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Resume Builder</h2>
        <div className="glass rounded-2xl p-6 grid gap-4">
          <input className="bg-transparent border border-white/15 rounded-lg px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} />
          <textarea className="bg-transparent border border-white/15 rounded-lg px-3 py-2 min-h-24" value={summary} onChange={(e) => setSummary(e.target.value)} />
          <textarea className="bg-transparent border border-white/15 rounded-lg px-3 py-2 min-h-24" value={skills} onChange={(e) => setSkills(e.target.value)} />
          <button className="glass rounded-xl px-5 py-2.5">Export PDF (placeholder)</button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-3">Live Preview</h3>
        <div className="glass rounded-2xl p-6">
          <div className="text-2xl font-semibold">{name}</div>
          <div className="text-white/80 mt-2">{summary}</div>
          <div className="mt-4">
            <div className="font-medium">Skills</div>
            <ul className="list-disc pl-5 text-white/80">
              {skills.split(",").map((s) => (
                <li key={s.trim()}>{s.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}


