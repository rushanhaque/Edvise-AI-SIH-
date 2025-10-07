"use client";
import { useState } from "react";

export default function ExplorePage() {
  const [filters, setFilters] = useState({
    category: "all",
    level: "all",
    location: "all"
  });

  const opportunities = [
    { 
      title: "IIT Summer Internship", 
      category: "Internship", 
      level: "Undergraduate",
      location: "Mumbai",
      deadline: "Mar 15, 2025",
      description: "Research internship in AI/ML"
    },
    { 
      title: "NIT Scholarship Program", 
      category: "Scholarship", 
      level: "Postgraduate",
      location: "Delhi",
      deadline: "Apr 30, 2025",
      description: "Full tuition coverage for meritorious students"
    },
    { 
      title: "Government Job Fair", 
      category: "Career", 
      level: "All",
      location: "Bangalore",
      deadline: "Feb 20, 2025",
      description: "Direct recruitment opportunities"
    }
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 neon-text">Exploration Mode</h2>
      
      <div className="glass rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Discover Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select 
            className="bg-transparent border border-white/15 rounded-lg px-3 py-2"
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
          >
            <option value="all">All Categories</option>
            <option value="scholarship">Scholarship</option>
            <option value="internship">Internship</option>
            <option value="career">Career</option>
          </select>
          
          <select 
            className="bg-transparent border border-white/15 rounded-lg px-3 py-2"
            value={filters.level}
            onChange={(e) => setFilters({...filters, level: e.target.value})}
          >
            <option value="all">All Levels</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
          </select>
          
          <select 
            className="bg-transparent border border-white/15 rounded-lg px-3 py-2"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
          >
            <option value="all">All Locations</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((opp, index) => (
          <div key={index} className="glass rounded-xl p-6 hover:scale-105 transition-transform">
            <div className="flex items-start justify-between mb-3">
              <div className="text-sm text-[var(--primary)] font-medium">{opp.category}</div>
              <div className="text-xs text-[var(--text-muted)]">{opp.deadline}</div>
            </div>
            <div className="text-lg font-semibold mb-2">{opp.title}</div>
            <div className="text-sm text-[var(--text-muted)] mb-3">{opp.description}</div>
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span>{opp.level}</span>
              <span>{opp.location}</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg hover:bg-[var(--primary)]/30 transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

