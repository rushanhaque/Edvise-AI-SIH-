"use client";
const items = [
  { title: "NSP Scholarship", type: "Scholarship", deadline: "Oct 30", status: "Open" },
  { title: "JEE Main", type: "Exam", deadline: "Nov 15", status: "Upcoming" },
  { title: "PM YASASVI", type: "Scholarship", deadline: "Closed", status: "Closed" },
];

export default function TrackerPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Scholarships & Exams</h2>
      <div className="glass rounded-2xl p-4 mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input className="bg-transparent border border-white/15 rounded-lg px-3 py-2 md:col-span-2" placeholder="Search" />
        <select className="bg-transparent border border-white/15 rounded-lg px-3 py-2">
          <option className="text-black">All Types</option>
          <option className="text-black">Scholarship</option>
          <option className="text-black">Exam</option>
        </select>
        <select className="bg-transparent border border-white/15 rounded-lg px-3 py-2">
          <option className="text-black">All Status</option>
          <option className="text-black">Open</option>
          <option className="text-black">Upcoming</option>
          <option className="text-black">Closed</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i.title} className="glass rounded-xl p-4">
            <div className="text-sm text-white/60">{i.type} • {i.status}</div>
            <div className="text-lg font-medium mt-1">{i.title}</div>
            <div className="text-white/70 text-sm">Deadline: {i.deadline}</div>
            <button className="mt-3 rounded-lg px-3 py-1.5 bg-[var(--primary)]/20 border border-[var(--primary)]/40">Add reminder</button>
          </div>
        ))}
      </div>
    </main>
  );
}


