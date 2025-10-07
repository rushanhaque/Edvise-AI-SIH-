"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const mentors = [
  {
    name: "Dr. Priya Sharma",
    title: "Senior Software Engineer at Google",
    expertise: ["Computer Science", "AI/ML", "Career Guidance"],
    experience: "8 years",
    rating: 4.9,
    students: "150+",
    availability: "Available",
    bio: "Passionate about helping students break into tech. Specializes in AI/ML and software engineering careers.",
    achievements: ["IIT Delhi Alumni", "Ex-Microsoft", "Published 15+ Papers"]
  },
  {
    name: "Prof. Rajesh Kumar",
    title: "Professor of Physics, IIT Bombay",
    expertise: ["Physics", "Research", "Academic Guidance"],
    experience: "15 years",
    rating: 4.8,
    students: "200+",
    availability: "Available",
    bio: "Dedicated to making physics accessible to all students. Expert in competitive exam preparation.",
    achievements: ["PhD from MIT", "Author of 3 Physics Books", "JEE Expert"]
  },
  {
    name: "Dr. Anjali Mehta",
    title: "Senior Research Scientist",
    expertise: ["Chemistry", "Research", "Higher Education"],
    experience: "12 years",
    rating: 4.7,
    students: "120+",
    availability: "Limited",
    bio: "Research-focused mentor helping students pursue careers in chemistry and related fields.",
    achievements: ["PhD Chemistry", "50+ Publications", "Research Grant Recipient"]
  },
  {
    name: "Mr. Vikram Singh",
    title: "Civil Services Officer",
    expertise: ["Civil Services", "Public Administration", "Government Jobs"],
    experience: "10 years",
    rating: 4.9,
    students: "300+",
    availability: "Available",
    bio: "IAS officer with extensive experience in public administration and civil services preparation.",
    achievements: ["IAS 2015 Batch", "District Collector", "UPSC Expert"]
  },
  {
    name: "Dr. Sneha Patel",
    title: "Medical Professional",
    expertise: ["Medicine", "NEET Preparation", "Healthcare"],
    experience: "7 years",
    rating: 4.6,
    students: "180+",
    availability: "Available",
    bio: "Medical professional dedicated to helping students achieve their dreams in healthcare.",
    achievements: ["MBBS AIIMS", "MD Internal Medicine", "NEET Expert"]
  },
  {
    name: "Mr. Amit Kumar",
    title: "Entrepreneur & Business Coach",
    expertise: ["Business", "Entrepreneurship", "Management"],
    experience: "6 years",
    rating: 4.5,
    students: "100+",
    availability: "Available",
    bio: "Successful entrepreneur helping students understand business and management concepts.",
    achievements: ["IIT + IIM Alumni", "2 Successful Startups", "Business Mentor"]
  }
];

export default function MentorshipPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredMentors = mentors.filter(mentor => {
    const matchesFilter = filter === "all" || mentor.expertise.some(exp => exp.toLowerCase().includes(filter.toLowerCase()));
    const matchesSearch = mentor.name.toLowerCase().includes(search.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(search.toLowerCase()) ||
                         mentor.bio.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 neon-text">AI Mentorship</h2>
        <p className="text-[var(--text-muted)] text-xl max-w-3xl mx-auto">
          Connect with expert mentors who can guide you through your educational and career journey
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Search Mentors</label>
            <input 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3" 
              placeholder="Search by name, expertise, or background..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Expertise Area</label>
            <select 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all" className="text-black">All Expertise</option>
              <option value="computer science" className="text-black">Computer Science</option>
              <option value="physics" className="text-black">Physics</option>
              <option value="chemistry" className="text-black">Chemistry</option>
              <option value="civil services" className="text-black">Civil Services</option>
              <option value="medicine" className="text-black">Medicine</option>
              <option value="business" className="text-black">Business</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor, index) => (
          <motion.div
            key={mentor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,158,255,0.3)]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center text-2xl font-bold">
                {mentor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${
                mentor.availability === 'Available' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
              }`}>
                {mentor.availability}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
            <p className="text-[var(--text-muted)] text-sm mb-3">{mentor.title}</p>
            <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">{mentor.bio}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex flex-wrap gap-1">
                {mentor.expertise.map((exp, i) => (
                  <span key={i} className="px-2 py-1 bg-[var(--primary)]/20 text-[var(--primary)] text-xs rounded">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Experience:</span>
                <span>{mentor.experience}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Students:</span>
                <span>{mentor.students}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Rating:</span>
                <span className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{mentor.rating}/5</span>
                </span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg hover:bg-[var(--primary)]/30 transition-colors text-sm font-medium">
                Connect
              </button>
              <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-sm">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}


