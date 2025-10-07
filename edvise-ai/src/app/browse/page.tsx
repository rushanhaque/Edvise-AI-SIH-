"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const opportunities = [
  { 
    title: "National Scholarship Portal", 
    type: "Scholarship", 
    status: "Open",
    deadline: "Mar 31, 2025",
    description: "Central government scholarship for meritorious students",
    eligibility: "Class 10+ students",
    amount: "₹10,000 - ₹50,000",
    category: "Merit-based"
  },
  { 
    title: "JEE Main 2026", 
    type: "Exam", 
    status: "Upcoming",
    deadline: "Jan 15, 2026",
    description: "Joint Entrance Examination for engineering colleges",
    eligibility: "Class 12 students",
    amount: "₹1,000 registration fee",
    category: "Engineering"
  },
  { 
    title: "PM-USP Yojana", 
    type: "Scheme", 
    status: "Open",
    deadline: "Apr 30, 2025",
    description: "Prime Minister's Uchchatar Shiksha Protsahan Yojana",
    eligibility: "Undergraduate students",
    amount: "Full tuition coverage",
    category: "Government Scheme"
  },
  { 
    title: "IIT Summer Internship", 
    type: "Internship", 
    status: "Open",
    deadline: "Feb 28, 2025",
    description: "Research internship at premier IITs",
    eligibility: "Undergraduate students",
    amount: "Stipend provided",
    category: "Research"
  },
  { 
    title: "NIT Admission 2025", 
    type: "Admission", 
    status: "Open",
    deadline: "Mar 15, 2025",
    description: "National Institute of Technology admissions",
    eligibility: "JEE Main qualified",
    amount: "₹1,50,000 per year",
    category: "Engineering"
  },
  { 
    title: "UPSC Civil Services", 
    type: "Career", 
    status: "Upcoming",
    deadline: "Feb 20, 2025",
    description: "Union Public Service Commission examination",
    eligibility: "Graduate degree required",
    amount: "Government salary",
    category: "Civil Services"
  }
];

export default function BrowsePage() {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    status: "all",
    category: "all"
  });

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         opp.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesType = filters.type === "all" || opp.type.toLowerCase() === filters.type;
    const matchesStatus = filters.status === "all" || opp.status.toLowerCase() === filters.status;
    const matchesCategory = filters.category === "all" || opp.category.toLowerCase() === filters.category;
    
    return matchesSearch && matchesType && matchesStatus && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 neon-text">Discover Opportunities</h2>
        <p className="text-[var(--text-muted)] text-xl max-w-3xl mx-auto">
          Explore government colleges, scholarships, exams, and career opportunities tailored for your profile
        </p>
      </motion.div>

      {/* Advanced Filters */}
      <div className="glass rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-6">Filter Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Search</label>
            <input 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3" 
              placeholder="Search opportunities..."
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <select 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="all" className="text-black">All Types</option>
              <option value="scholarship" className="text-black">Scholarship</option>
              <option value="exam" className="text-black">Exam</option>
              <option value="scheme" className="text-black">Scheme</option>
              <option value="internship" className="text-black">Internship</option>
              <option value="admission" className="text-black">Admission</option>
              <option value="career" className="text-black">Career</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all" className="text-black">All Status</option>
              <option value="open" className="text-black">Open</option>
              <option value="upcoming" className="text-black">Upcoming</option>
              <option value="closed" className="text-black">Closed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select 
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="all" className="text-black">All Categories</option>
              <option value="engineering" className="text-black">Engineering</option>
              <option value="merit-based" className="text-black">Merit-based</option>
              <option value="government scheme" className="text-black">Government Scheme</option>
              <option value="research" className="text-black">Research</option>
              <option value="civil services" className="text-black">Civil Services</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-[var(--text-muted)]">
          Showing {filteredOpportunities.length} of {opportunities.length} opportunities
        </p>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,158,255,0.3)]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Open' ? 'bg-green-500/20 text-green-300' :
                  item.status === 'Upcoming' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {item.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-[var(--primary)]/20 text-[var(--primary)]">
                  {item.type}
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">{item.description}</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Eligibility:</span>
                <span>{item.eligibility}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Amount:</span>
                <span className="font-medium">{item.amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Deadline:</span>
                <span className="font-medium">{item.deadline}</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-[var(--primary)]/20 border border-[var(--primary)]/40 rounded-lg hover:bg-[var(--primary)]/30 transition-colors text-sm font-medium">
                View Details
              </button>
              <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-sm">
                Save
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}


